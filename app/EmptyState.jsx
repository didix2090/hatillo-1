/* Hatillo — Empty States. Un solo patrón para toda la app:
   [ilustración de línea en círculo suave] → título 18/800 → texto de apoyo
   (ink-soft, líneas cortas) → CTA primario pill (solo si hay acción).
   Centrado vertical y horizontalmente. Círculo fog por defecto; tinte de
   advertencia solo para errores. Variante "eyes" para el sin-resultados.
   Principio: ningún empty state es un callejón sin salida. */
const ESS = window.HatilloDesignSystem_5bedaa;

/* keyframes de los ojos (adaptado de Uiverse by mobinkakei) + spin */
const HATI_ES_CSS = `
  .hati-es-eyebox{width:118px;height:118px;border-radius:50%;background:#12295F;
    display:flex;align-items:center;justify-content:center}
  .hati-es-eyes{position:relative;width:88px;display:flex;justify-content:space-between;align-items:center}
  .hati-es-eyes::after,.hati-es-eyes::before{content:"";display:inline-block;width:38px;height:38px;
    background-color:#fff;background-image:radial-gradient(circle 11px,#0E1B2B 100%,transparent 0);
    background-repeat:no-repeat;background-position:0 0;border-radius:50%;
    animation:hatiEyeMove 10s infinite,hatiBlink 10s infinite}
  @keyframes hatiEyeMove{0%,10%{background-position:0 0}13%,40%{background-position:-12px 0}
    43%,70%{background-position:12px 0}73%,90%{background-position:0 12px}93%,100%{background-position:0 0}}
  @keyframes hatiBlink{0%,10%,12%,20%,22%,40%,42%,60%,62%,70%,72%,90%,92%,98%,100%{height:38px}
    11%,21%,41%,61%,71%,91%,99%{height:14px}}
  @media (prefers-reduced-motion: reduce){
    .hati-es-eyes::after,.hati-es-eyes::before{animation:none;background-position:0 0}}
`;
if (typeof document !== 'undefined' && !document.getElementById('hati-es-css')) {
  const s = document.createElement('style'); s.id = 'hati-es-css'; s.textContent = HATI_ES_CSS;
  document.head.appendChild(s);
}

/* wifi tachado (no existe en el set base; línea, stroke 1.7) */
function WifiOff({ size = 46, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 5.5-2.32" />
      <path d="M2 8.82a16 16 0 0 1 6.5-3.3" />
      <path d="M15.5 10.23A11 11 0 0 1 19 12.55" />
      <path d="M22 8.82a16 16 0 0 0-5.6-3.14" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

/* HatiEmptyState — patrón único. */
function HatiEmptyState({ variant = 'icon', icon = 'chat', tone = 'neutral', title, lines = [], cta }) {
  const warn = tone === 'warning';
  const stroke = warn ? 'var(--warning)' : 'var(--navy)';
  const rows = Array.isArray(lines) ? lines : [lines];

  let illo;
  if (variant === 'eyes') {
    illo = <div className="hati-es-eyebox"><div className="hati-es-eyes" /></div>;
  } else {
    illo = (
      <div style={{ width: 118, height: 118, borderRadius: '50%', background: warn ? 'var(--warning-surface)' : 'var(--fog)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {variant === 'wifi' ? <WifiOff size={46} color={stroke} /> : <ESS.Icon name={icon} size={46} strokeWidth={1.6} color={stroke} />}
      </div>
    );
  }

  return (
    <div style={{ flex: 1, minHeight: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px', gap: 0 }}>
      {illo}
      <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.01em', fontFamily: 'var(--font-heading)', margin: '22px 0 0' }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)', maxWidth: '30ch', margin: '8px 0 0' }}>
        {rows.map((r, i) => <React.Fragment key={i}>{i > 0 && <br />}{r}</React.Fragment>)}
      </p>
      {cta && <div style={{ marginTop: 26 }}><ESS.Button variant="primary" onClick={cta.onClick}>{cta.label}</ESS.Button></div>}
    </div>
  );
}

/* Catálogo de instancias, para reutilizar y previsualizar. */
function makeEmptyStates(actions = {}) {
  return {
    historial: { icon: 'chat', title: 'Aún no tienes conversaciones', lines: ['Pregúntale a Hati por un pago, un', 'trámite o repórtale algo de tu calle.'], cta: { label: 'Nueva conversación', onClick: actions.nuevaConversacion } },
    resultados: { variant: 'eyes', title: 'No encontramos nada', lines: ['Probemos con otras palabras', 'o revisa cómo lo escribiste.'], cta: actions.limpiarBusqueda ? { label: 'Limpiar búsqueda', onClick: actions.limpiarBusqueda } : null },
    notificaciones: { icon: 'campana', title: 'Sin novedades por ahora', lines: ['Aquí te avisaremos sobre tus', 'pagos, trámites y reportes.'] },
    metodos: { icon: 'tarjeta', title: 'Aún no tienes métodos de pago', lines: ['Agrega una tarjeta o Yappy', 'para pagar más rápido.'], cta: { label: 'Agregar método', onClick: actions.agregarMetodo } },
    actividad: { icon: 'tramites', title: 'Todavía no hay actividad', lines: ['Cuando pagues, hagas un trámite', 'o reportes algo, aparecerá aquí.'], cta: { label: 'Hablar con Hati', onClick: actions.hablarConHati } },
    sinConexion: { variant: 'wifi', tone: 'warning', title: 'Sin conexión', lines: ['Revisa tu internet', 'e inténtalo de nuevo.'], cta: { label: 'Reintentar', onClick: actions.reintentar } },
  };
}

Object.assign(window, { HatiEmptyState, makeEmptyStates });
