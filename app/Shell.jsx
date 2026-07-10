/* Hatillo — Home, Historial and Perfil tabs. */
const HS = window.HatilloDesignSystem_5bedaa;
const HDATA = window.HatilloData;

const TONE_PREVIEW = {
  tu: '¡Hola, {n}! Tienes $45.00 pendientes de tu placa. ¿Lo pagamos ahora?',
  usted: 'Buenos días, Sr. {n}. Usted tiene $45.00 pendientes por su placa. ¿Desea proceder con el pago?',
  breve: '{n} · Pendiente $45.00 — impuesto de circulación. ¿Pagar?',
};

/* ---------- Home ---------- */
function SmallChip({ label, accent, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 'none', whiteSpace: 'nowrap', padding: '8px 15px', borderRadius: 999, fontSize: 13, fontWeight: accent ? 700 : 600, fontFamily: 'inherit', cursor: 'pointer', border: '1px solid ' + (accent ? 'var(--primary-border)' : 'var(--line)'), background: accent ? 'var(--primary-surface)' : 'var(--white)', color: accent ? 'var(--primary)' : 'var(--ink-soft)' }}>{label}</button>
  );
}

function Sk({ w = '100%', h = 16, r = 8, style = {} }) {
  return <div style={{ width: w, height: h, borderRadius: r, background: 'linear-gradient(90deg, var(--fog) 25%, #eef2f5 37%, var(--fog) 63%)', backgroundSize: '400% 100%', animation: 'hatiShimmer 1.4s ease infinite', ...style }} />;
}

/* Bandeja de notificaciones (desde la campana del Home). Vacía por ahora. */
function NotifInboxScreen({ onBack }) {
  return (
    <SubScreen title="Notificaciones" onBack={onBack}>
      <window.HatiEmptyState icon="campana" title="Sin novedades por ahora" lines={['Aquí te avisaremos sobre tus', 'pagos, trámites y reportes.']} />
    </SubScreen>
  );
}

function HomeTab({ user, onOpenChat, status = 'deudas', notifDot = true, skeletons = false }) {
  const [notifsOpen, setNotifsOpen] = React.useState(false);
  if (notifsOpen) return <NotifInboxScreen onBack={() => setNotifsOpen(false)} />;
  const name = user.name || 'vecino';
  const chips = [
    { label: 'Pagar mi placa', accent: true },
    { label: 'Paz y Salvo' },
    { label: 'Reportar' },
    { label: 'Trámites' },
  ];
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: 'clamp(14px,3vw,28px) clamp(16px,4vw,32px) 72px' }}>
        {/* header — bell only */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button aria-label="Notificaciones" onClick={() => setNotifsOpen(true)} style={{ position: 'relative', width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HS.Icon name="campana" size={20} color="var(--navy)" />
            {notifDot && <span style={{ position: 'absolute', top: 10, right: 11, width: 8, height: 8, borderRadius: '50%', background: 'var(--error)', border: '1.5px solid var(--white)' }} />}
          </button>
        </div>

        {/* protagonist title */}
        {skeletons ? (
          <div style={{ marginTop: 'clamp(6px,1.5vw,14px)' }}>
            <Sk w="90%" h={40} r={12} />
            <Sk w="65%" h={40} r={12} style={{ marginTop: 10 }} />
            <Sk w="100%" h={86} r={20} style={{ marginTop: 26 }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              <Sk w={120} h={40} r={999} />
              <Sk w={100} h={40} r={999} />
              <Sk w={90} h={40} r={999} />
            </div>
          </div>
        ) : (
        <React.Fragment>
        <h1 style={{ fontSize: 'clamp(28px,5.2vw,46px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.05, margin: 'clamp(6px,1.5vw,14px) 0 0', maxWidth: '15ch', textWrap: 'balance' }}>¡Hola, {name}! ¿En qué te puedo ayudar hoy?</h1>

        {/* status bar */}
        <div style={{ marginTop: 'clamp(20px,3vw,30px)' }}>
          {status === 'deudas' ? (
            <div style={{ background: 'var(--night)', color: '#fff', borderRadius: 'var(--r-lg)', padding: 'clamp(16px,2.5vw,22px)', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 190 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mint)' }}>Pendiente</div>
                <div style={{ fontSize: 'clamp(16px,2vw,19px)', fontWeight: 600, marginTop: 4 }}>Tienes $45.00 de tu placa 123456.</div>
              </div>
              <HS.Button variant="mint" onClick={() => onOpenChat('Pagar mi placa')}>Pagar ahora</HS.Button>
            </div>
          ) : (
            <div style={{ background: 'var(--success-surface)', color: 'var(--success)', borderRadius: 'var(--r-md)', padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <HS.Icon name="pazysalvo" size={20} color="var(--success)" />
              <span style={{ flex: 1, minWidth: 160, fontSize: 15, fontWeight: 600 }}>Estás al día · Paz y salvo con el Municipio</span>
              <button onClick={() => onOpenChat('Quiero mi Paz y Salvo')} style={{ border: 'none', background: 'transparent', color: 'var(--success)', fontWeight: 700, fontSize: 14, fontFamily: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}>Ver constancia</button>
            </div>
          )}
        </div>

        {/* chips — single row, horizontal scroll, right fade */}
        <div style={{ position: 'relative', marginTop: 'clamp(20px,3vw,28px)' }}>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
            {chips.map((c) => <SmallChip key={c.label} label={c.label} accent={c.accent} onClick={() => onOpenChat(c.label)} />)}
          </div>
          <span style={{ position: 'absolute', top: 0, right: 0, bottom: 4, width: 44, background: 'linear-gradient(90deg, transparent, var(--page))', pointerEvents: 'none' }} />
        </div>
        </React.Fragment>
        )}
      </div>
    </div>
  );
}

/* ---------- Historial ---------- */
function HistoryTab({ onOpenChat, onBack }) {
  const [q, setQ] = React.useState('');
  const [groups, setGroups] = React.useState(() => HDATA.historial.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it })) })));
  const [menuItem, setMenuItem] = React.useState(null);
  const [renameItem, setRenameItem] = React.useState(null);
  const [renameText, setRenameText] = React.useState('');
  const [delItem, setDelItem] = React.useState(null);

  const view = groups
    .map((g) => ({ ...g, items: g.items.filter((it) => it.titulo.toLowerCase().includes(q.toLowerCase())) }))
    .filter((g) => g.items.length);
  const empty = view.length === 0;

  const applyRename = () => {
    setGroups((gs) => gs.map((g) => ({ ...g, items: g.items.map((it) => (it.id === renameItem.id ? { ...it, titulo: renameText.trim() || it.titulo } : it)) })));
    setRenameItem(null);
  };
  const applyDelete = () => {
    setGroups((gs) => gs.map((g) => ({ ...g, items: g.items.filter((it) => it.id !== delItem.id) })));
    setDelItem(null);
  };
  const badgeText = (e) => (e === 'paid' ? 'Pagado' : e === 'processing' ? 'En proceso' : 'Resuelto');

  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: 'clamp(16px,3vw,28px) clamp(16px,4vw,32px) 72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          {onBack && <button onClick={onBack} aria-label="Volver" style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 6, display: 'flex' }}><HS.Icon name="volver" size={24} color="var(--navy)" /></button>}
          <h1 style={{ fontSize: 'clamp(24px,3vw,30px)', fontWeight: 800, letterSpacing: '-.01em' }}>Historial</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', padding: '12px 16px', marginBottom: 24 }}>
          <HS.Icon name="buscar" size={18} color="var(--ink-soft)" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar en tus conversaciones…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', font: 'inherit', fontSize: 15, minWidth: 0 }} />
        </div>

        {empty ? (
          q.trim() !== ''
            ? <window.HatiEmptyState variant="eyes" title="No encontramos nada" lines={['No hay conversaciones que', 'coincidan con tu búsqueda.']} cta={{ label: 'Limpiar búsqueda', onClick: () => setQ('') }} />
            : <window.HatiEmptyState icon="chat" title="Aún no tienes conversaciones" lines={['Pregúntale a Hati por un pago, un', 'trámite o repórtale algo de tu calle.']} cta={{ label: 'Nueva conversación', onClick: () => onOpenChat('') }} />
        ) : view.map((g) => (
          <div key={g.grupo} style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>{g.grupo}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {g.items.map((it, gi) => (
                <div key={it.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '15px 4px', borderTop: gi > 0 ? '1px solid var(--line)' : 'none' }}>
                  <button onClick={() => onOpenChat(it.titulo)} style={{ flex: 1, minWidth: 0, display: 'block', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.titulo}</span>
                      <span style={{ fontSize: 12, color: 'var(--concrete)', flex: 'none' }}>{it.time}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 5 }}>{it.prev}</div>
                  </button>
                  <HS.Badge status={it.estado}>{badgeText(it.estado)}</HS.Badge>
                  <button onClick={() => setMenuItem(it)} aria-label="Opciones" style={{ width: 34, height: 34, borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--ink-soft)', fontSize: 20, fontWeight: 700, flex: 'none', lineHeight: 1 }}>⋯</button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <HS.Button variant="primary" fullWidth onClick={() => onOpenChat('')} style={{ marginTop: 8 }}>Nueva conversación</HS.Button>
      </div>

      {/* per-conversation action sheet */}
      {menuItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 70, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div onClick={() => setMenuItem(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.4)' }} />
          <div style={{ position: 'relative', background: 'var(--white)', borderRadius: '24px 24px 0 0', padding: '18px 16px calc(20px + env(safe-area-inset-bottom))', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto' }}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 14px' }} />
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', padding: '0 4px 10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{menuItem.titulo}</div>
            <button onClick={() => { setRenameText(menuItem.titulo); setRenameItem(menuItem); setMenuItem(null); }} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '14px 14px', border: 'none', borderRadius: 'var(--r-md)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 15, fontWeight: 600 }}>
              <HS.Icon name="editar" size={20} color="var(--navy)" />Renombrar
            </button>
            <button onClick={() => { setDelItem(menuItem); setMenuItem(null); }} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '14px 14px', border: 'none', borderRadius: 'var(--r-md)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 15, fontWeight: 600, color: 'var(--error)' }}>
              <HS.Icon name="cerrar" size={20} color="var(--error)" />Borrar
            </button>
          </div>
        </div>
      )}

      {/* rename modal */}
      {renameItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={() => setRenameItem(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)' }} />
          <div style={{ position: 'relative', background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: 24, boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 400 }}>
            <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 6 }}>Renombrar conversación</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 16 }}>Elige un nombre que te ayude a encontrarla.</p>
            <HS.Field value={renameText} onChange={(e) => setRenameText(e.target.value)} state="focus" />
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <HS.Button variant="ghost" fullWidth onClick={() => setRenameItem(null)}>Cancelar</HS.Button>
              <HS.Button variant="primary" fullWidth onClick={applyRename}>OK</HS.Button>
            </div>
          </div>
        </div>
      )}

      {/* delete confirm */}
      {delItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={() => setDelItem(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)' }} />
          <div style={{ position: 'relative', background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: 24, boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 400 }}>
            <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 6 }}>¿Borrar esta conversación?</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 20 }}>Se elimina de aquí, pero guardamos un respaldo por si acaso.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <HS.Button variant="ghost" fullWidth onClick={() => setDelItem(null)}>Cancelar</HS.Button>
              <HS.Button variant="primary" fullWidth style={{ background: 'var(--error)' }} onClick={applyDelete}>Borrar</HS.Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Perfil ---------- */
function Row({ icon, label, value, onClick, last }) {
  return (
    <button onClick={onClick} className="hati-press" style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', background: 'transparent', border: 'none', borderBottom: last ? 'none' : '1px solid var(--line)', padding: '15px 4px', cursor: onClick ? 'pointer' : 'default', fontFamily: 'inherit' }}>
      <span style={{ width: 38, height: 38, borderRadius: 'var(--r-sm)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name={icon} size={20} color="var(--blue)" /></span>
      <span style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>{value && <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{value}</div>}</span>
      {onClick && <HS.Icon name="chevron" size={18} color="var(--concrete)" />}
    </button>
  );
}

function Switch({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)} aria-label="Activar" style={{ width: 46, height: 28, borderRadius: 999, border: 'none', cursor: 'pointer', background: on ? 'var(--blue)' : 'var(--concrete)', position: 'relative', transition: 'background .15s ease', flex: 'none' }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 22, height: 22, borderRadius: '50%', background: '#fff', transition: 'left .15s ease' }} />
    </button>
  );
}

function SubScreen({ title, onBack, children }) {
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div className="hati-rise" style={{ width: '100%', maxWidth: 720, margin: '0 auto', padding: 'clamp(12px,3vw,24px) clamp(16px,4vw,32px) 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
          <button onClick={onBack} aria-label="Volver" className="hati-press" style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 6, display: 'flex', borderRadius: 10 }}><HS.Icon name="volver" size={24} color="var(--navy)" /></button>
          <h1 style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 800, letterSpacing: '-.01em' }}>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

const NotifSection = ({ label, children }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 10 }}>{label}</div>
    <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '4px 20px' }}>{children}</div>
  </div>
);

function NotifRow({ label, sub, on, set, last }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 4px', borderBottom: last ? 'none' : '1px solid var(--line)' }}>
      <span style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>{sub && <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 3 }}>{sub}</div>}</span>
      <Switch on={on} onChange={set} />
    </div>
  );
}

/* Wave de Hati — barras animadas mint/azul. */
function HatiWave() {
  const bars = [.5, .8, 1, .7, .95, .6, .85, .55, .75];
  const col = (i) => (i % 2 === 0 ? 'var(--blue)' : 'var(--mint)');
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, height: 40 }} aria-hidden="true">
      {bars.map((h, i) => (
        <span key={i} className="tone-bar" style={{ width: 5, height: 34 * h, borderRadius: 3, background: col(i), animationDelay: (i * 0.09) + 's' }} />
      ))}
    </div>
  );
}

const TONE_OPTS = [
  { id: 'tu', name: 'Cercano' },
  { id: 'usted', name: 'Formal' },
  { id: 'breve', name: 'Directo' },
];
const TONE_EXAMPLE = {
  tu: '¡Hola, {n}! Tienes $45.00 pendientes de tu placa. ¿Lo pagamos?',
  usted: 'Con gusto le ayudo, Sr. {n}. Usted tiene $45.00 pendientes. ¿Desea proceder?',
  breve: '{n} · Saldo $45.00 — placa 123456. ¿Pagar?',
};

/* Wheel picker tipo ruleta — scroll/drag nativo con snap; el centrado queda en pill. */
function ToneWheel({ value, onChange }) {
  const ROW = 52, VISIBLE = 3;
  const ref = React.useRef(null);
  const raf = React.useRef(0);
  const selIdx = Math.max(0, TONE_OPTS.findIndex((o) => o.id === value));

  // Posiciona la ruleta en la opción seleccionada (al abrir o si cambia desde fuera).
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const target = selIdx * ROW;
    if (Math.abs(el.scrollTop - target) > 2) el.scrollTo({ top: target, behavior: 'smooth' });
  }, [selIdx]);

  const onScroll = () => {
    const el = ref.current; if (!el) return;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const idx = Math.max(0, Math.min(TONE_OPTS.length - 1, Math.round(el.scrollTop / ROW)));
      if (TONE_OPTS[idx] && TONE_OPTS[idx].id !== value) onChange(TONE_OPTS[idx].id);
    });
  };

  return (
    <div style={{ position: 'relative', height: ROW * VISIBLE }}>
      {/* pill del centro (fijo) */}
      <div style={{ position: 'absolute', top: ROW, left: '50%', transform: 'translateX(-50%)', width: 'min(78%, 260px)', height: ROW - 8, borderRadius: 'var(--r-pill)', background: 'var(--primary-surface)', border: '1.5px solid var(--primary-border)', pointerEvents: 'none', zIndex: 0 }} />
      <div ref={ref} onScroll={onScroll} className="tone-wheel" style={{ position: 'relative', zIndex: 1, height: '100%', overflowY: 'auto', scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch', WebkitMaskImage: 'linear-gradient(180deg, transparent 0, #000 32%, #000 68%, transparent 100%)', maskImage: 'linear-gradient(180deg, transparent 0, #000 32%, #000 68%, transparent 100%)' }}>
        {/* spacer arriba: permite centrar la primera opción */}
        <div style={{ height: ROW, scrollSnapAlign: 'none' }} />
        {TONE_OPTS.map((o, i) => {
          const on = i === selIdx;
          return (
            <button key={o.id} onClick={() => onChange(o.id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: ROW, scrollSnapAlign: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: on ? 800 : 600, fontSize: on ? 20 : 17, letterSpacing: '-.01em', color: on ? 'var(--blue)' : 'var(--ink-soft)', opacity: on ? 1 : .4, transition: 'opacity .2s ease, color .2s ease, font-size .2s ease' }}>{o.name}</button>
          );
        })}
        {/* spacer abajo: permite centrar la última opción */}
        <div style={{ height: ROW, scrollSnapAlign: 'none' }} />
      </div>
    </div>
  );
}

function ToneScreen({ tone, onTone, name, onBack }) {
  const [sel, setSel] = React.useState(tone || 'tu');
  const nm = (name || 'Carlos').split(' ')[0];
  const example = (TONE_EXAMPLE[sel] || TONE_EXAMPLE.tu).replace('{n}', nm);
  const curLabel = (TONE_OPTS.find((o) => o.id === (tone || 'tu')) || TONE_OPTS[0]).name;

  return (
    <React.Fragment>
      {/* base "Cómo te habla Hati" — queda detrás, desenfocada */}
      <SubScreen title="Cómo te habla Hati" onBack={onBack}>
        <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '-6px 0 20px' }}>Así te habla Hati en tus conversaciones. Puedes cambiarlo cuando quieras.</p>
        <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Tono actual</div>
          <div style={{ fontWeight: 800, fontSize: 20, fontFamily: 'var(--font-heading)', margin: '4px 0 14px' }}>{curLabel}</div>
          <div style={{ fontSize: 15, background: 'var(--fog)', padding: '14px 16px', borderRadius: '20px 20px 20px 6px', borderLeft: '3px solid var(--mint)', lineHeight: 1.5 }}>{(TONE_EXAMPLE[tone || 'tu'] || TONE_EXAMPLE.tu).replace('{n}', nm)}</div>
        </div>
      </SubScreen>

      {/* modal bottom sheet (~70%) sobre fondo desenfocado */}
      <window.Portal>
        <div style={{ position: 'fixed', inset: 0, zIndex: 130, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="mp-overlay" onClick={onBack} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.32)', backdropFilter: 'blur(7px)', WebkitBackdropFilter: 'blur(7px)', animation: 'mpFade .2s ease' }} />
          <div className="mp-sheet" style={{ position: 'relative', background: 'var(--white)', borderRadius: '26px 26px 0 0', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto', height: '70vh', maxHeight: 620, display: 'flex', flexDirection: 'column', animation: 'mpSheetUp .3s cubic-bezier(.22,.61,.36,1)' }}>
            <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '14px 24px calc(20px + env(safe-area-inset-bottom))', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 42, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 18px', flex: 'none' }} />
              {/* 1. título */}
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.02em', margin: 0, textAlign: 'center', fontFamily: 'var(--font-heading)' }}>Elige el tono de Hati</h2>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '8px 0 0', textAlign: 'center' }}>Así te hablará. Puedes cambiarlo cuando quieras.</p>
              {/* 2. onda */}
              <div style={{ margin: '20px 0 6px' }}><HatiWave /></div>
              {/* 3. burbuja de ejemplo */}
              <div style={{ display: 'flex', justifyContent: 'center', minHeight: 92, alignItems: 'center' }}>
                <div key={sel} className="tone-fade" style={{ maxWidth: 380, fontSize: 15.5, background: 'var(--fog)', color: 'var(--ink)', padding: '14px 16px', borderRadius: '20px 20px 20px 6px', borderLeft: '3px solid var(--mint)', lineHeight: 1.5 }}>{example}</div>
              </div>
              {/* 4. wheel picker */}
              <div style={{ marginTop: 'auto', paddingTop: 12 }}><ToneWheel value={sel} onChange={setSel} /></div>
              {/* 5. CTA */}
              <div style={{ marginTop: 16, flex: 'none' }}>
                <HS.Button variant="primary" fullWidth onClick={() => { onTone(sel); onBack(); }}>Usar este tono</HS.Button>
              </div>
            </div>
          </div>
        </div>
      </window.Portal>
    </React.Fragment>
  );
}

function NotifScreen({ onBack }) {
  const [pago, setPago] = React.useState(true);
  const [tramites, setTramites] = React.useState(true);
  const [reportes, setReportes] = React.useState(true);
  const [pagosConf, setPagosConf] = React.useState(true);
  const [muni, setMuni] = React.useState(false);
  return (
    <SubScreen title="Notificaciones" onBack={onBack}>
      <NotifSection label="Recordatorios de pago">
        <NotifRow label="Avísame antes de vencer" sub="Te recordamos tus saldos a tiempo" on={pago} set={setPago} last />
      </NotifSection>
      <NotifSection label="Tu actividad">
        <NotifRow label="Trámites" sub="Cambios de estado de tus solicitudes" on={tramites} set={setTramites} />
        <NotifRow label="Reportes" sub="Avances de lo que reportas en tu calle" on={reportes} set={setReportes} />
        <NotifRow label="Confirmaciones de pago" sub="Comprobantes al completar un pago" on={pagosConf} set={setPagosConf} last />
      </NotifSection>
      <NotifSection label="Del Municipio">
        <NotifRow label="Novedades y eventos" sub="Anuncios del Municipio de Panamá" on={muni} set={setMuni} last />
      </NotifSection>
    </SubScreen>
  );
}

/* Métodos de pago — flujo completo (lista + sheets + modales) en Metodos.jsx. */
function MetodosScreen({ onBack }) {
  return <window.MetodosFlow onBack={onBack} />;
}

/* Avatar del usuario: foto (cover), ícono de personaje (contain) o inicial. */
function AvatarView({ avatar, name, size = 64, bg = '#fff' }) {
  const st = { width: size, height: size, borderRadius: '50%', overflow: 'hidden', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg };
  if (avatar && avatar.src) {
    return <span style={st}><img src={avatar.src} alt="" style={{ width: '100%', height: '100%', objectFit: avatar.type === 'photo' ? 'cover' : 'contain', padding: avatar.type === 'icon' ? Math.round(size * 0.06) : 0, boxSizing: 'border-box', display: 'block' }} /></span>;
  }
  return <span style={{ ...st, color: 'var(--blue)', fontWeight: 800, fontSize: Math.round(size * 0.42), fontFamily: 'var(--font-heading)' }}>{(name || 'V')[0].toUpperCase()}</span>;
}

/* Ondas concéntricas del hero — mismas del inicio (splash), en blanco a baja
   opacidad + destellos mint dispersos. Puramente decorativo. */
function HeroWaves() {
  const ring = (d) => ({ position: 'absolute', top: '38%', left: '50%', width: d, height: d, marginTop: -d / 2, marginLeft: -d / 2, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.17)' });
  const spark = (top, left, s = 8) => ({ position: 'absolute', top, left, width: s, height: s, borderRadius: '50%', background: 'var(--mint)', boxShadow: '0 0 12px 2px rgba(4,214,156,.55)', opacity: .9 });
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      <div style={ring(180)} />
      <div style={ring(300)} />
      <div style={ring(430)} />
      <div style={ring(570)} />
      <span style={spark('20%', '15%')} />
      <span style={spark('30%', '82%', 7)} />
      <span style={spark('68%', '24%', 6)} />
    </div>
  );
}

/* Anillo de progreso del perfil. Anima stroke-dashoffset al cambiar pct. */
function ProgressRing({ pct, verify, checkRef, confettiRef, name, avatar, complete }) {
  const size = 132, stroke = 7;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  const inner = size - stroke * 2 - 12;
  return (
    <div style={{ position: 'relative', width: size, height: size + 12, display: 'flex', justifyContent: 'center' }}>
      {/* confetti layer, centered on avatar */}
      <div ref={confettiRef} style={{ position: 'absolute', left: '50%', top: size / 2, width: 0, height: 0, overflow: 'visible', pointerEvents: 'none', zIndex: 4 }} />
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--fog)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--mint)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)' }} />
      </svg>
      <div style={{ position: 'absolute', left: '50%', top: stroke + 6, transform: 'translateX(-50%)' }}>
        <AvatarView avatar={avatar} name={name} size={inner} />
      </div>
      {/* % pill at ring bottom — cambia a mint al llegar a 100% */}
      <div style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)', background: complete ? 'var(--mint)' : 'var(--night)', color: complete ? '#08351f' : '#fff', borderRadius: 999, padding: '3px 12px', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-heading)', boxShadow: '0 4px 12px rgba(0,0,0,.22)', transition: 'background .4s ease, color .4s ease' }}>{pct}%</div>
    </div>
  );
}

/* Confeti "boom" — ~30 partículas irradiando desde el centro del avatar. */
function fireConfetti(host) {
  if (!host) return;
  const colors = ['#0051FF', '#04D69C', '#12295F', '#6E9BFF', '#ffffff'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const w = 6 + Math.random() * 7;
    p.style.cssText = 'position:absolute;left:0;top:0;width:' + w + 'px;height:' + (w * 0.5 + 2) + 'px;border-radius:2px;background:' + colors[i % colors.length] + ';';
    host.appendChild(p);
    const ang = Math.random() * Math.PI * 2;
    const dist = 66 + Math.random() * 90;
    const x = Math.cos(ang) * dist, y = Math.sin(ang) * dist;
    const rot = Math.random() * 720 - 360;
    const anim = p.animate([
      { transform: 'translate(-50%,-50%) rotate(0deg)', opacity: 1 },
      { transform: 'translate(calc(-50% + ' + x + 'px),calc(-50% + ' + y + 'px)) rotate(' + rot + 'deg)', opacity: 0 },
    ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(.15,.6,.3,1)' });
    anim.onfinish = () => p.remove();
  }
}

function ProfileTab({ user, tone, onTone, onOpenHistory, verify = 'Sin verificar', onStartKyc, profile: profileProp, onSaveProfile, onBack, onCompletaDatos }) {
  const [screen, setScreen] = React.useState(null);
  const [modal, setModal] = React.useState(null); // 'logout' | 'delete'
  const [profileLocal, setProfileLocal] = React.useState(profileProp || {
    name: user.name || 'Carlos Mendoza', phone: '+507 6123 4567', email: 'carlos@correo.com',
    contribuyente: '8-901-2345', emName: '', emPhone: '', avatar: null,
  });
  const profile = profileProp || profileLocal;
  const saveProfile = onSaveProfile || setProfileLocal;
  const checkRef = React.useRef(null);
  const confettiRef = React.useRef(null);
  const prevVerify = React.useRef(verify);

  React.useEffect(() => {
    const was = prevVerify.current;
    prevVerify.current = verify;
    if (verify === 'Verificado' && was !== 'Verificado') {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (checkRef.current) checkRef.current.animate([{ transform: 'scale(.5)' }, { transform: 'scale(1.2)', offset: .6 }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' });
      fireConfetti(confettiRef.current);
    }
  }, [verify]);

  if (screen === 'tono') return <ToneScreen tone={tone} onTone={onTone} name={user.name} onBack={() => setScreen(null)} />;
  if (screen === 'notif') return <NotifScreen onBack={() => setScreen(null)} />;
  if (screen === 'metodos') return <MetodosScreen onBack={() => setScreen(null)} />;
  if (screen === 'editar') return <window.EditProfileScreen initial={profile} onSave={(p) => saveProfile(p)} onBack={() => setScreen(null)} />;

  const toneLabel = tone === 'usted' ? 'Usted · formal' : tone === 'breve' ? 'Directo' : 'Tú · cercano';
  const name = profile.name || 'Vecino';
  /* Progreso: nombre · celular · correo (20% c/u) + identidad verificada (40%). */
  let pct = 0;
  if (profile.name) pct += 20;
  if (profile.phone) pct += 20;
  if (profile.email) pct += 20;
  if (verify === 'Verificado') pct += 40;
  const complete = pct === 100;
  /* Pasos pendientes para la tarjeta "Completa tu perfil". */
  const steps = [];
  if (!profile.name || !profile.phone || !profile.email) steps.push('datos');
  if (verify !== 'Verificado') steps.push('kyc');

  /* check de verificación junto al nombre (3 estados) */
  const verifyCheck = (() => {
    if (verify === 'Verificado') return (
      <span ref={checkRef} title="Verificado" style={{ display: 'inline-flex', width: 24, height: 24, borderRadius: '50%', background: 'var(--mint)', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <HS.Icon name="check" size={15} color="#08351f" strokeWidth={2.4} />
      </span>
    );
    if (verify === 'En revisión') return (
      <span title="En revisión" style={{ display: 'inline-flex', width: 24, height: 24, borderRadius: '50%', background: '#0051FF', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <HS.Icon name="historial" size={15} color="#fff" strokeWidth={2} />
      </span>
    );
    return (
      <span title="Sin verificar" style={{ display: 'inline-flex', width: 24, height: 24, borderRadius: '50%', background: 'var(--fog)', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <HS.Icon name="check" size={15} color="var(--concrete)" strokeWidth={2.4} />
      </span>
    );
  })();

  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      {/* hero full-width, edge-to-edge — gradiente claro azul+mint (estilo login) */}
      <div className="hati-rise" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0 0 32px 32px', padding: 'calc(env(safe-area-inset-top) + clamp(30px,6vw,42px)) clamp(22px,5vw,30px) clamp(28px,5vw,34px)', background: 'var(--white)', color: 'var(--ink)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '78%', background: 'radial-gradient(120% 100% at 18% 0%, rgba(0,81,255,.26), transparent 62%), radial-gradient(110% 95% at 92% 4%, rgba(4,214,156,.28), transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
          {onBack && <button aria-label="Volver" onClick={onBack} className="hati-press" style={{ position: 'absolute', top: 'calc(env(safe-area-inset-top) + clamp(14px,3vw,18px))', left: 'clamp(16px,4vw,20px)', zIndex: 3, width: 40, height: 40, borderRadius: '50%', background: 'var(--white)', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><HS.Icon name="volver" size={20} color="var(--navy)" /></button>}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ProgressRing pct={pct} verify={verify} checkRef={checkRef} confettiRef={confettiRef} name={name} avatar={profile.avatar} complete={complete} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginTop: 16 }}>
              <span style={{ fontWeight: 800, fontSize: 'clamp(21px,3vw,25px)', letterSpacing: '-.01em', fontFamily: 'var(--font-heading)' }}>{name}</span>
              {verifyCheck}
            </div>
            {complete ? (
              <span className="badge-pop" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 12, background: 'var(--mint)', color: '#08351f', borderRadius: 999, padding: '6px 14px', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                <HS.Icon name="check" size={14} color="#08351f" strokeWidth={2.6} />Cuenta verificada
              </span>
            ) : (
              <span style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)' }}>{verify === 'En revisión' ? 'Estamos revisando tu identidad' : 'Termina de verificar tu cuenta'}</span>
            )}
            <button aria-label="Editar perfil" onClick={() => setScreen('editar')} className="hati-press" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 16, background: 'var(--white)', border: '1.5px solid var(--line)', color: 'var(--navy)', padding: '9px 18px', borderRadius: 'var(--r-pill)', fontFamily: 'inherit', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
              <HS.Icon name="editar" size={15} color="var(--navy)" />Editar
            </button>
          </div>
      </div>

      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto', padding: 'clamp(20px,4vw,26px) clamp(16px,4vw,32px) 72px' }}>
        {/* completa tu perfil — lista los pasos pendientes; desaparece al completar todo */}
        {steps.length > 0 && (
          <div className="hati-rise" style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 22, marginBottom: 24 }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', margin: '0 0 16px', fontFamily: 'var(--font-heading)' }}>Completa tu perfil</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((s, i) => {
                const isKyc = s === 'kyc';
                const isDatos = s === 'datos';
                const icon = isDatos ? 'perfil' : 'shield';
                const label = isDatos ? 'Completa tus datos' : 'Verifica tu identidad';
                return (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: i > 0 ? 14 : 0, borderTop: i > 0 ? '1px solid var(--line)' : 'none' }}>
                    <span style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name={icon} size={22} color="var(--blue)" /></span>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 15.5 }}>{label}</span>
                    {isDatos
                      ? <HS.Button variant="primary" onClick={onCompletaDatos}>Completar</HS.Button>
                      : verify === 'En revisión'
                        ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--primary-surface)', color: '#0051FF', borderRadius: 999, padding: '7px 13px', fontSize: 13, fontWeight: 700, flex: 'none' }}><HS.Icon name="historial" size={15} color="#0051FF" />En revisión</span>
                        : <HS.Button variant="primary" onClick={onStartKyc}>Verificar</HS.Button>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* número de contribuyente */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name="tramites" size={22} color="var(--blue)" /></span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Número de contribuyente</div>
            {profile.contribuyente
              ? <div style={{ fontWeight: 700, fontSize: 16, marginTop: 3, fontVariantNumeric: 'tabular-nums' }}>{profile.contribuyente}</div>
              : <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 3, lineHeight: 1.45 }}>Pendiente · se asigna al pagar o tramitar</div>}
          </span>
          {profile.contribuyente && <span title="Asignado por el Municipio" style={{ display: 'inline-flex', width: 30, height: 30, borderRadius: '50%', background: 'var(--fog)', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name="check" size={16} color="var(--ink-soft)" strokeWidth={2.2} /></span>}
        </div>

        {/* configuración */}
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 10 }}>Configuración</div>
        <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '4px 20px' }}>
          <Row icon="chat" label="Cómo te habla Hati" value={toneLabel} onClick={() => setScreen('tono')} />
          <Row icon="historial" label="Historial de conversaciones" onClick={onOpenHistory} />
          <Row icon="tarjeta" label="Métodos de pago" value="Visa •••• 4821 · Yappy" onClick={() => setScreen('metodos')} />
          <Row icon="campana" label="Notificaciones" onClick={() => setScreen('notif')} last />
        </div>

        {/* cuenta */}
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: '24px 0 10px' }}>Cuenta</div>
        <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '4px 20px' }}>
          <button onClick={() => setModal('logout')} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', padding: '15px 4px', cursor: 'pointer', fontFamily: 'inherit' }}>
            <span style={{ width: 38, height: 38, borderRadius: 'var(--r-sm)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name="volver" size={20} color="var(--blue)" /></span>
            <span style={{ flex: 1, fontWeight: 600, fontSize: 15 }}>Cerrar sesión</span>
          </button>
          <button onClick={() => setModal('delete')} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: '15px 4px', cursor: 'pointer', fontFamily: 'inherit' }}>
            <span style={{ width: 38, height: 38, borderRadius: 'var(--r-sm)', background: 'var(--error-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HS.Icon name="cerrar" size={20} color="var(--error)" /></span>
            <span style={{ flex: 1, fontWeight: 600, fontSize: 15, color: 'var(--error)' }}>Eliminar cuenta</span>
          </button>
        </div>
      </div>

      {/* cuenta modals */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={() => setModal(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)' }} />
          <div style={{ position: 'relative', background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: 24, boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 400 }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 'var(--r-md)', marginBottom: 16, background: modal === 'delete' ? 'var(--error-surface)' : 'var(--primary-surface)' }}>
              <HS.Icon name={modal === 'delete' ? 'cerrar' : 'volver'} size={24} color={modal === 'delete' ? 'var(--error)' : 'var(--blue)'} />
            </span>
            <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 8 }}>{modal === 'delete' ? '¿Eliminar tu cuenta?' : '¿Cerrar sesión?'}</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 22 }}>{modal === 'delete' ? 'Esto borra tu cuenta y tus datos del Municipio. No se puede deshacer.' : 'Tendrás que volver a ingresar con tu teléfono o correo la próxima vez.'}</p>
            <HS.Button variant="primary" fullWidth style={modal === 'delete' ? { background: 'var(--error)' } : undefined} onClick={() => setModal(null)}>{modal === 'delete' ? 'Sí, eliminar cuenta' : 'Cerrar sesión'}</HS.Button>
            <div style={{ height: 10 }} />
            <HS.Button variant="ghost" fullWidth onClick={() => setModal(null)}>Cancelar</HS.Button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { HomeTab, HistoryTab, ProfileTab, SubScreen, AvatarView });
