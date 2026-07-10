/* Hatillo — MessageScroller. Contenedor de scroll para el hilo de chat con IA
   (estilo shadcn/ui MessageScroller). SOLO maneja el scroll; las burbujas,
   tarjetas, respuestas rápidas y la barra de entrada se mantienen como están.

   Reglas:
   - Auto-scroll solo si el usuario está pegado al fondo (en vivo). Si sube a
     leer, el auto-scroll se detiene y conserva la posición.
   - Cada turno nuevo del usuario se ancla cerca del borde superior (con un
     "peek" del turno anterior) y la respuesta de Hati crece debajo.
   - defaultScrollPosition="last-anchor": al montar abre en el último turno del
     usuario, no en el fondo absoluto.
   - preserveScrollOnPrepend: cargar mensajes antiguos sin saltos.
   - api.jumpTo(id) / api.scrollToBottom() para saltar a un mensaje / retomar.
   - Accesibilidad: región enfocable (tabIndex 0), role="log" aria-live polite;
     no lee token por token.

   API sugerida:
     <MessageScroller autoScroll defaultScrollPosition="last-anchor"
                      previousItemPeek={64} preserveScrollOnPrepend apiRef={ref}>
       <MessageScroller.Item id={m.id} scrollAnchor={m.role==='user'}>…</MessageScroller.Item>
     </MessageScroller>
*/

function MSItem({ id, scrollAnchor = false, children }) {
  return (
    <div data-msg-id={id} data-msg-anchor={scrollAnchor ? '1' : '0'} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {children}
    </div>
  );
}

function MessageScroller({
  children,
  autoScroll = true,
  defaultScrollPosition = 'bottom', // 'bottom' | 'last-anchor'
  previousItemPeek = 64,
  preserveScrollOnPrepend = true,
  apiRef,
  ariaLabel = 'Conversación',
  innerStyle = {},
  style = {},
}) {
  const vpRef = React.useRef(null);
  const innerRef = React.useRef(null);
  const spacerRef = React.useRef(null);

  const prevIds = React.useRef([]);
  const prevHeight = React.useRef(0);
  const distBottom = React.useRef(0); // distancia al fondo (scrollHeight - scrollTop)
  const lastSig = React.useRef(null);
  const pinned = React.useRef(true);
  const firstRun = React.useRef(true);

  const anchorId = React.useRef(null);       // turno del usuario actualmente "activo" arriba
  const pendingScroll = React.useRef(null);   // id a colocar arriba tras reservar espacio
  const pendingJump = React.useRef(null);     // id destino de un jumpTo (sin reservar espacio)
  const smoothJump = React.useRef(true);
  const smooth = React.useRef(false);
  const [spacer, setSpacer] = React.useState(0);
  const spacerVal = React.useRef(0);
  const [, tick] = React.useReducer((x) => x + 1, 0);
  const [showJump, setShowJump] = React.useState(false);

  const domIds = (vp) => Array.from(vp.querySelectorAll('[data-msg-id]')).map((e) => e.getAttribute('data-msg-id'));
  const anchorEls = (vp) => Array.from(vp.querySelectorAll('[data-msg-anchor="1"]'));

  const placeAtTop = (vp, el, useSmooth) => {
    const d = el.getBoundingClientRect().top - vp.getBoundingClientRect().top;
    const top = Math.max(0, vp.scrollTop + d - previousItemPeek);
    if (useSmooth) vp.scrollTo({ top, behavior: 'smooth' });
    else vp.scrollTop = top;
  };
  const toBottom = (vp, useSmooth) => {
    if (useSmooth) vp.scrollTo({ top: vp.scrollHeight, behavior: 'smooth' });
    else vp.scrollTop = vp.scrollHeight;
  };

  // Expose imperative API.
  React.useEffect(() => {
    if (!apiRef) return;
    apiRef.current = {
      jumpTo: (id) => { const vp = vpRef.current; if (!vp) return; anchorId.current = null; spacerVal.current = 0; setSpacer(0); pinned.current = false; pendingJump.current = id; smoothJump.current = false; tick(); },
      scrollToBottom: () => { const vp = vpRef.current; if (vp) { anchorId.current = null; spacerVal.current = 0; setSpacer(0); pinned.current = true; toBottom(vp, true); } },
    };
  });

  React.useLayoutEffect(() => {
    const vp = vpRef.current, spEl = spacerRef.current;
    if (!vp || !spEl) return;
    const ids = domIds(vp);
    const sig = ids.join('|');
    // El effect corre en cada render (sin deps). Solo actuamos cuando cambia el
    // conjunto de mensajes o hay una acción imperativa pendiente (jump / ancla);
    // rerenders ajenos (p.ej. mostrar el botón "ir al último") solo refrescan
    // referencias, evitando bucles y dobles desplazamientos.
    if (!firstRun.current && sig === lastSig.current && !pendingScroll.current && !anchorId.current && !pendingJump.current) {
      prevHeight.current = vp.scrollHeight;
      if (pinned.current) { if (autoScroll && vp.scrollHeight - vp.clientHeight - vp.scrollTop > 1) toBottom(vp, false); }
      else distBottom.current = vp.scrollHeight - vp.scrollTop;
      return;
    }
    lastSig.current = sig;
    const prev = prevIds.current;

    // ── Montaje inicial ──
    if (firstRun.current) {
      firstRun.current = false;
      prevIds.current = ids; prevHeight.current = vp.scrollHeight;
      const anchors = anchorEls(vp);
      if (defaultScrollPosition === 'last-anchor' && anchors.length) {
        anchorId.current = anchors[anchors.length - 1].getAttribute('data-msg-id');
        pendingScroll.current = anchorId.current;
        smooth.current = false;
        // cae al bloque de reserva de abajo para colocar el ancla arriba
      } else {
        toBottom(vp, false);
        distBottom.current = vp.scrollHeight - vp.scrollTop;
        return;
      }
    } else {

    // ── Prepend (mensajes antiguos arriba) → conservar posición ──
    const isPrepend = preserveScrollOnPrepend && ids.length > prev.length && prev.length > 0 &&
      ids.slice(ids.length - prev.length).join('|') === prev.join('|');
    if (isPrepend) {
      // Conservar la distancia al fondo. El contenido nuevo entra ARRIBA, así que
      // lo que ves bajo el borde superior no cambia. Es idempotente: si el effect
      // corre otra vez con el mismo estado, scrollTop no se mueve.
      vp.scrollTop = vp.scrollHeight - distBottom.current;
      prevIds.current = ids; prevHeight.current = vp.scrollHeight; return;
    }

    // ── Append ──
    if (ids.join('|') !== prev.join('|')) {
      const appended = ids.filter((id) => prev.indexOf(id) === -1);
      let freshAnchor = null;
      for (const id of appended) { const el = vp.querySelector('[data-msg-id="' + id + '"][data-msg-anchor="1"]'); if (el) { freshAnchor = id; break; } }
      if (freshAnchor) {
        anchorId.current = freshAnchor;
        pendingScroll.current = freshAnchor;
        smooth.current = false;
      } else if (autoScroll && pinned.current && vp.scrollHeight > prevHeight.current) {
        toBottom(vp, false);
      }
    }
    prevIds.current = ids;
    prevHeight.current = vp.scrollHeight;
    distBottom.current = vp.scrollHeight - vp.scrollTop;
    }

    // ── Reserva de espacio para que el turno anclado alcance el borde superior ──
    if (anchorId.current) {
      const el = vp.querySelector('[data-msg-id="' + anchorId.current + '"]');
      if (!el) { anchorId.current = null; if (spacerVal.current) { spacerVal.current = 0; setSpacer(0); } }
      else {
        const below = spEl.offsetTop - el.offsetTop; // contenido bajo el ancla, sin contar el spacer
        const need = Math.max(0, vp.clientHeight - below - previousItemPeek);
        if (Math.abs(need - spacerVal.current) > 1) { spacerVal.current = need; setSpacer(need); return; }
        if (pendingScroll.current) { placeAtTop(vp, el, smooth.current); pendingScroll.current = null; smooth.current = false; }
      }
    }

    // ── jumpTo: llevar un mensaje al peek (sin reservar espacio; clamp si está al final) ──
    if (pendingJump.current && spacer === 0 && spacerVal.current === 0) {
      const el = vp.querySelector('[data-msg-id="' + pendingJump.current + '"]');
      if (el) placeAtTop(vp, el, smoothJump.current);
      pendingJump.current = null;
    }
  });

  const onScroll = () => {
    const vp = vpRef.current; if (!vp) return;
    prevHeight.current = vp.scrollHeight;
    distBottom.current = vp.scrollHeight - vp.scrollTop; // referencia fresca para el prepend
    const dist = vp.scrollHeight - vp.clientHeight - vp.scrollTop;
    pinned.current = dist < 60;
    if (pinned.current && anchorId.current) { anchorId.current = null; if (spacerVal.current) { spacerVal.current = 0; setSpacer(0); } }
    setShowJump(dist > 240);
  };

  return (
    <div style={{ flex: 1, minHeight: 0, position: 'relative', ...style }}>
      <div
        ref={vpRef}
        onScroll={onScroll}
        tabIndex={0}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        aria-atomic="false"
        aria-label={ariaLabel}
        className="msg-scroller"
        style={{ height: '100%', overflowY: 'auto', outline: 'none' }}
      >
        <div ref={innerRef} style={innerStyle}>
          {children}
          <div ref={spacerRef} aria-hidden="true" style={{ height: spacer, flex: 'none' }} />
        </div>
      </div>
      {showJump && (
        <button
          onClick={() => { const vp = vpRef.current; anchorId.current = null; spacerVal.current = 0; setSpacer(0); pinned.current = true; toBottom(vp, true); }}
          aria-label="Ir al último mensaje"
          style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--white)', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--navy)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
        </button>
      )}
    </div>
  );
}
MessageScroller.Item = MSItem;

/* Foco visible accesible para la región de scroll. */
if (typeof document !== 'undefined' && !document.getElementById('msg-scroller-css')) {
  const s = document.createElement('style'); s.id = 'msg-scroller-css';
  s.textContent = '.msg-scroller:focus-visible{box-shadow:inset 0 0 0 2px rgba(0,81,255,.35)}';
  document.head.appendChild(s);
}

Object.assign(window, { MessageScroller });
