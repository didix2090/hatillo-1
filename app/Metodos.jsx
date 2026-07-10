/* Hatillo — Métodos de pago. Experiencia friendly con bottom sheets y modales,
   todo al alcance del pulgar. Tarjetas (Visa / Mastercard / Clave) y Yappy.
   Light, marca azul #0051FF / mint, moneda "$". */
const MP = window.HatilloDesignSystem_5bedaa;

/* Portal a document.body: los overlays con position:fixed deben escapar de
   cualquier ancestro transformado (.app-enter / .hati-rise), que de lo contrario
   los atrapa como bloque contenedor y los descuadra. */
function Portal({ children }) {
  const elRef = React.useRef(null);
  if (!elRef.current) elRef.current = document.createElement('div');
  React.useEffect(() => {
    const el = elRef.current;
    document.body.appendChild(el);
    return () => { if (el.parentNode) el.parentNode.removeChild(el); };
  }, []);
  return ReactDOM.createPortal(children, elRef.current);
}
window.Portal = Portal;

const MP_CSS = `
  @keyframes mpSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes mpFade { from { opacity: 0; } to { opacity: 1; } }
  @keyframes mpPop { 0% { transform: scale(.6); } 60% { transform: scale(1.08); } 100% { transform: scale(1); } }
  .mp-field-wrap { position: relative; }
  .mp-field { width: 100%; box-sizing: border-box; border: 1.5px solid var(--line); border-radius: var(--r-sm); padding: 13px 15px; font: inherit; font-size: 15px; background: var(--white); color: var(--ink); outline: none; transition: border-color .2s ease, box-shadow .2s ease; }
  .mp-field::placeholder { color: var(--concrete); }
  .mp-field:disabled { background: var(--fog); color: var(--ink-soft); }
  .mp-field-wrap:focus-within .mp-field { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(0,81,255,.14); }
  @media (prefers-reduced-motion: reduce) { .mp-sheet, .mp-overlay, .mp-pop { animation: none !important; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('mp-css')) {
  const s = document.createElement('style'); s.id = 'mp-css'; s.textContent = MP_CSS; document.head.appendChild(s);
}

const BRANDS = {
  visa: { label: 'Visa', src: 'assets/brands/visa.png' },
  mastercard: { label: 'Mastercard', src: 'assets/brands/mastercard.png' },
  clave: { label: 'Clave', src: 'assets/brands/clave.svg' },
  yappy: { label: 'Yappy', src: 'assets/brands/yappy.svg' },
};

function BrandLogo({ brand, h = 20 }) {
  const b = BRANDS[brand]; if (!b) return null;
  return <img src={b.src} alt={b.label} style={{ height: h, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />;
}

/* Tile de marca en la fila (chip). Fondo blanco con borde; el logo respira dentro. */
function BrandTile({ brand }) {
  return (
    <span style={{ width: 54, height: 38, borderRadius: 10, background: 'var(--white)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', padding: '0 7px', boxShadow: 'var(--shadow)' }}>
      <BrandLogo brand={brand} h={brand === 'yappy' ? 16 : brand === 'clave' ? 22 : 15} />
    </span>
  );
}

function Star({ on }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={on ? 'var(--mint)' : 'none'} stroke={on ? 'var(--mint)' : 'var(--concrete)'} strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L12 17.9l-5.25 2.76 1-5.86L3.5 9.66l5.9-.86z" />
    </svg>
  );
}

const detectBrand = (num) => {
  const n = (num || '').replace(/\D/g, '');
  if (/^4/.test(n)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(n)) return 'mastercard';
  if (n.length >= 2) return 'clave';
  return null;
};
const groupCard = (v) => (v || '').replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
const fmtExp = (v) => { const n = (v || '').replace(/\D/g, '').slice(0, 4); return n.length > 2 ? n.slice(0, 2) + '/' + n.slice(2) : n; };
const fmtPhone = (v) => { const n = (v || '').replace(/\D/g, '').slice(0, 8); return n.length > 4 ? n.slice(0, 4) + '-' + n.slice(4) : n; };

/* ---------- Campos ---------- */
function GField({ label, right, children }) {
  return (
    <label style={{ display: 'block' }}>
      {label && (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{label}</span>
          {right}
        </div>
      )}
      <div className="mp-field-wrap">{children}</div>
    </label>
  );
}

function Check({ on, onChange, children }) {
  return (
    <button type="button" onClick={() => onChange(!on)} style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', background: 'transparent', border: 'none', padding: '4px 0', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
      <span style={{ width: 24, height: 24, borderRadius: 7, border: '2px solid ' + (on ? 'var(--blue)' : 'var(--line)'), background: on ? 'var(--blue)' : 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'background .15s, border-color .15s' }}>
        {on && <MP.Icon name="check" size={15} color="#fff" strokeWidth={2.6} />}
      </span>
      <span style={{ fontSize: 15, color: 'var(--ink)' }}>{children}</span>
    </button>
  );
}

/* Panel de escaneo inline (dentro del sheet, no navega). */
function ScanPanel({ onClose }) {
  const c = (pos) => {
    const base = { position: 'absolute', width: 26, height: 26, borderColor: 'var(--mint)', borderStyle: 'solid', borderWidth: 0 };
    const m = {
      tl: { top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3, borderTopLeftRadius: 9 },
      tr: { top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3, borderTopRightRadius: 9 },
      bl: { bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3, borderBottomLeftRadius: 9 },
      br: { bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3, borderBottomRightRadius: 9 },
    };
    return <span style={{ ...base, ...m[pos] }} />;
  };
  return (
    <div style={{ position: 'relative', background: '#0A121D', borderRadius: 'var(--r-md)', padding: 18, overflow: 'hidden' }}>
      <button onClick={onClose} aria-label="Cerrar escaneo" style={{ position: 'absolute', top: 10, right: 10, zIndex: 2, width: 32, height: 32, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <MP.Icon name="cerrar" size={16} color="#fff" />
      </button>
      <div style={{ position: 'relative', height: 128, borderRadius: 10, background: 'radial-gradient(120% 90% at 50% 30%, #16273b, #0A121D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '78%', aspectRatio: '1.586 / 1' }}>
          {c('tl')}{c('tr')}{c('bl')}{c('br')}
        </div>
      </div>
      <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 13.5, textAlign: 'center', margin: '12px 0 0', lineHeight: 1.5 }}>Coloca tu tarjeta dentro del marco</p>
    </div>
  );
}

/* ---------- Bottom sheet: agregar / editar ---------- */
function MethodSheet({ mode, method, onClose, onSave }) {
  const editing = mode === 'edit';
  const [kind, setKind] = React.useState(method ? method.kind : 'card');
  const [holder, setHolder] = React.useState(method && method.holder || '');
  const [number, setNumber] = React.useState('');
  const [exp, setExp] = React.useState(method && method.exp || '');
  const [cvv, setCvv] = React.useState('');
  const [phone, setPhone] = React.useState(method && method.phone || '');
  const [fav, setFav] = React.useState(method ? !!method.favorite : false);
  const [scan, setScan] = React.useState(false);
  const cvvRef = React.useRef(null);

  const brand = editing && method.kind === 'card' ? method.brand : detectBrand(number);
  const canSaveCard = editing ? holder.trim() && exp.length === 5 : holder.trim() && number.replace(/\D/g, '').length >= 13 && exp.length === 5 && cvv.length >= 3;
  const canSaveYappy = phone.replace(/\D/g, '').length >= 7;

  const submit = () => {
    if (kind === 'card') {
      if (!canSaveCard) return;
      const digits = number.replace(/\D/g, '');
      onSave({ ...(method || {}), kind: 'card', brand: brand || 'clave', holder: holder.trim(), exp, favorite: fav, last4: editing ? method.last4 : digits.slice(-4) });
    } else {
      if (!canSaveYappy) return;
      onSave({ ...(method || {}), kind: 'yappy', brand: 'yappy', phone, favorite: fav });
    }
  };

  return (
    <Portal>
    <div style={{ position: 'fixed', inset: 0, zIndex: 130, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div className="mp-overlay" onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)', animation: 'mpFade .2s ease' }} />
      <div className="mp-sheet" style={{ position: 'relative', background: 'var(--white)', borderRadius: '26px 26px 0 0', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto', maxHeight: '92vh', display: 'flex', flexDirection: 'column', animation: 'mpSheetUp .28s cubic-bezier(.22,.61,.36,1)' }}>
        {/* header */}
        <div style={{ flex: 'none', padding: '12px 20px 8px' }}>
          <div style={{ width: 42, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 14px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.01em', margin: 0, fontFamily: 'var(--font-heading)' }}>{editing ? 'Editar método' : 'Nuevo método'}</h2>
            <button onClick={onClose} aria-label="Cerrar" style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--fog)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none' }}>
              <MP.Icon name="cerrar" size={18} color="var(--navy)" />
            </button>
          </div>
        </div>

        {/* body (scrolls) */}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '8px 20px calc(20px + env(safe-area-inset-bottom))' }}>
          {/* toggle Tarjeta / Yappy (solo al agregar) */}
          {!editing && (
            <div style={{ display: 'flex', gap: 6, background: 'var(--fog)', borderRadius: 'var(--r-pill)', padding: 4, marginBottom: 20 }}>
              {[['card', 'Tarjeta'], ['yappy', 'Yappy']].map(([id, lbl]) => {
                const on = kind === id;
                return <button key={id} onClick={() => setKind(id)} style={{ flex: 1, padding: '10px 0', borderRadius: 'var(--r-pill)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14.5, fontWeight: 700, background: on ? 'var(--white)' : 'transparent', color: on ? 'var(--blue)' : 'var(--ink-soft)', boxShadow: on ? 'var(--shadow)' : 'none', transition: 'background .15s, color .15s' }}>{lbl}</button>;
              })}
            </div>
          )}

          {kind === 'card' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <GField label="Nombre completo">
                <input className="mp-field" value={holder} onChange={(e) => setHolder(e.target.value)} placeholder="Como aparece en la tarjeta" />
              </GField>

              <GField label="Número de tarjeta" right={!editing && (
                <button onClick={() => setScan((s) => !s)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: 'var(--blue)', fontWeight: 700, fontSize: 12.5, padding: 0 }}>
                  <MP.Icon name="camara" size={15} color="var(--blue)" />Escanear tarjeta
                </button>
              )}>
                <input className="mp-field" style={{ paddingRight: 84, fontVariantNumeric: 'tabular-nums', letterSpacing: '.02em' }} inputMode="numeric"
                  value={editing ? '•••• •••• •••• ' + method.last4 : groupCard(number)}
                  onChange={(e) => setNumber(e.target.value)} disabled={editing} placeholder="1234 5678 9012 3456" />
                {brand && (
                  <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', height: 30, minWidth: 44, borderRadius: 7, background: 'var(--white)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 7px' }}>
                    <BrandLogo brand={brand} h={brand === 'clave' ? 18 : brand === 'yappy' ? 13 : 13} />
                  </span>
                )}
              </GField>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: '1 1 0', minWidth: 0 }}>
                  <GField label="M/A">
                    <input className="mp-field" style={{ width: '100%', boxSizing: 'border-box' }} inputMode="numeric" value={exp} onChange={(e) => { const v = fmtExp(e.target.value); setExp(v); if (v.length === 5 && cvvRef.current) cvvRef.current.focus(); }} placeholder="MM/AA" />
                  </GField>
                </div>
                <div style={{ flex: '1 1 0', minWidth: 0 }}>
                  <GField label="CVV">
                    <input ref={cvvRef} className="mp-field" style={{ width: '100%', boxSizing: 'border-box' }} inputMode="numeric"
                      value={editing ? '•••' : cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))} disabled={editing} placeholder="123" />
                  </GField>
                </div>
              </div>

              {scan && !editing && <ScanPanel onClose={() => setScan(false)} />}

              <Check on={fav} onChange={setFav}>Guardar como favorita</Check>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, color: 'var(--ink-soft)' }}>
                <MP.Icon name="info" size={16} color="var(--concrete)" />
                <span>Aceptamos Visa, Mastercard y Clave.</span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0 4px' }}>
                <span style={{ height: 34, display: 'flex', alignItems: 'center' }}><BrandLogo brand="yappy" h={30} /></span>
              </div>
              <GField label="Número de celular Yappy">
                <input className="mp-field" inputMode="numeric" value={phone} onChange={(e) => setPhone(fmtPhone(e.target.value))} placeholder="6000-0000" />
              </GField>
              <div style={{ display: 'flex', gap: 10, background: 'var(--primary-surface)', borderRadius: 'var(--r-md)', padding: '14px 16px' }}>
                <MP.Icon name="info" size={18} color="var(--blue)" style={{ flex: 'none', marginTop: 1 }} />
                <p style={{ fontSize: 13.5, color: 'var(--navy)', lineHeight: 1.5, margin: 0 }}>Usa el celular asociado a tu cuenta de Yappy. Confirmarás cada pago desde tu app de Yappy.</p>
              </div>
              <Check on={fav} onChange={setFav}>Guardar como favorito</Check>
            </div>
          )}

          <div style={{ marginTop: 24 }}>
            <MP.Button variant="primary" fullWidth disabled={kind === 'card' ? !canSaveCard : !canSaveYappy} onClick={submit}>
              {kind === 'card' ? 'Guardar tarjeta' : 'Guardar Yappy'}
            </MP.Button>
          </div>
        </div>
      </div>
    </div>
    </Portal>
  );
}

/* ---------- Modales ---------- */
function CenterModal({ children, onClose }) {
  return (
    <Portal>
    <div style={{ position: 'fixed', inset: 0, zIndex: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="mp-overlay" onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)', animation: 'mpFade .2s ease' }} />
      <div className="hati-rise" style={{ position: 'relative', background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: 28, boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 380, textAlign: 'center' }}>{children}</div>
    </div>
    </Portal>
  );
}

function SuccessModal({ method, onClose }) {
  const label = BRANDS[method.brand] ? BRANDS[method.brand].label : 'método';
  const isCard = method.kind === 'card';
  const detail = isCard ? `Tu ${label} •••• ${method.last4} ya está lista.` : 'Tu Yappy ya está listo.';
  React.useEffect(() => { const t = setTimeout(onClose, 2000); return () => clearTimeout(t); }, []);
  return (
    <CenterModal onClose={onClose}>
      <span className="mp-pop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 68, height: 68, borderRadius: '50%', background: 'var(--mint)', margin: '0 auto 18px', animation: 'mpPop .45s ease' }}>
        <MP.Icon name="check" size={34} color="#08351f" strokeWidth={2.6} />
      </span>
      <h3 style={{ fontSize: 21, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>¡Método guardado!</h3>
      <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.55, margin: 0 }}>{detail} La próxima vez pagas en un toque.</p>
      <div style={{ height: 3, borderRadius: 2, background: 'var(--fog)', marginTop: 20, overflow: 'hidden' }}><div style={{ height: '100%', background: 'var(--mint)', animation: 'okBar 2s linear forwards' }} /></div>
    </CenterModal>
  );
}

function DeleteModal({ method, onCancel, onConfirm }) {
  const label = BRANDS[method.brand] ? BRANDS[method.brand].label : 'método';
  const isCard = method.kind === 'card';
  return (
    <CenterModal>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 'var(--r-md)', background: 'var(--error-surface)', margin: '0 auto 18px' }}>
        <MP.Icon name="cerrar" size={28} color="var(--error)" />
      </span>
      <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>{isCard ? '¿Eliminar esta tarjeta?' : '¿Eliminar este método?'}</h3>
      <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '0 0 22px' }}>
        {isCard ? `Quitaremos tu ${label} •••• ${method.last4}.` : `Quitaremos tu ${label} ${method.phone}.`} Podrás volver a agregarla cuando quieras.
      </p>
      <MP.Button variant="primary" fullWidth style={{ background: 'var(--error)' }} onClick={onConfirm}>Sí, eliminar</MP.Button>
      <div style={{ height: 10 }} />
      <MP.Button variant="ghost" fullWidth onClick={onCancel}>Cancelar</MP.Button>
    </CenterModal>
  );
}

/* ---------- Fila de método ---------- */
function MethodRow({ m, onFav, onEdit, onDelete }) {
  const [menu, setMenu] = React.useState(false);
  const isCard = m.kind === 'card';
  const title = isCard ? '•••• ' + m.last4 : 'Yappy';
  const sub = isCard ? `${m.holder} · ${m.exp}` : '+507 ' + m.phone;
  return (
    <div style={{ position: 'relative', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow)', padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <BrandTile brand={m.brand} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: 16, fontVariantNumeric: 'tabular-nums' }}>{title}</span>
            {m.favorite && <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', color: 'var(--mint-ink, #08795a)', background: 'var(--success-surface)', borderRadius: 999, padding: '3px 9px' }}>Favorita</span>}
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
        </div>
        <button onClick={() => onFav(m.id)} aria-label={m.favorite ? 'Quitar favorita' : 'Marcar favorita'} style={{ width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none' }}><Star on={m.favorite} /></button>
        <button onClick={() => setMenu((v) => !v)} aria-label="Opciones" style={{ width: 34, height: 38, borderRadius: 10, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--ink-soft)', fontSize: 22, fontWeight: 700, lineHeight: 1, flex: 'none' }}>⋯</button>
      </div>
      {menu && (
        <React.Fragment>
          <div onClick={() => setMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 10 }} />
          <div style={{ position: 'absolute', top: 56, right: 16, zIndex: 11, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', padding: 6, minWidth: 168 }}>
            <button onClick={() => { setMenu(false); onEdit(m); }} style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', padding: '11px 12px', border: 'none', borderRadius: 'var(--r-sm)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 14.5, fontWeight: 600 }}><MP.Icon name="editar" size={18} color="var(--navy)" />Editar</button>
            <button onClick={() => { setMenu(false); onDelete(m); }} style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', padding: '11px 12px', border: 'none', borderRadius: 'var(--r-sm)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 14.5, fontWeight: 600, color: 'var(--error)' }}><MP.Icon name="cerrar" size={18} color="var(--error)" />Eliminar</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

/* ---------- Pantalla principal ---------- */
function MetodosFlow({ onBack }) {
  const [methods, setMethods] = React.useState([
    { id: 'm1', kind: 'card', brand: 'visa', last4: '4821', holder: 'Carlos Mendoza', exp: '12/28', favorite: true },
    { id: 'm2', kind: 'card', brand: 'mastercard', last4: '7702', holder: 'Carlos Mendoza', exp: '09/27', favorite: false },
    { id: 'm3', kind: 'yappy', brand: 'yappy', phone: '6123-4567', favorite: false },
  ]);
  const [sheet, setSheet] = React.useState(null);   // {mode, method}
  const [success, setSuccess] = React.useState(null);
  const [del, setDel] = React.useState(null);

  // Favorita exclusiva: al marcar una, se desmarca el resto.
  const toggleFav = (id) => setMethods((ms) => {
    const target = ms.find((m) => m.id === id);
    const turningOn = !target.favorite;
    return ms.map((m) => ({ ...m, favorite: m.id === id ? turningOn : (turningOn ? false : m.favorite) }));
  });

  const save = (data) => {
    setMethods((ms) => {
      let next;
      if (data.id && ms.some((m) => m.id === data.id)) next = ms.map((m) => (m.id === data.id ? { ...m, ...data } : m));
      else next = [...ms, { ...data, id: 'm' + Date.now() }];
      if (data.favorite) next = next.map((m) => ({ ...m, favorite: m.id === (data.id || next[next.length - 1].id) }));
      return next;
    });
    setSheet(null);
    setSuccess(data);
  };
  const confirmDelete = () => { setMethods((ms) => ms.filter((m) => m.id !== del.id)); setDel(null); };

  return (
    <window.SubScreen title="Métodos de pago" onBack={onBack}>
      {methods.length === 0 ? (
        <window.HatiEmptyState icon="tarjeta" title="Aún no tienes métodos de pago" lines={['Agrega una tarjeta o Yappy', 'para pagar más rápido.']} cta={{ label: 'Agregar método', onClick: () => setSheet({ mode: 'add' }) }} />
      ) : (
        <React.Fragment>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '-6px 0 20px' }}>Guarda tus tarjetas y Yappy para pagar en un toque. Elige tu favorita para tenerla siempre a mano.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
            {methods.map((m) => <MethodRow key={m.id} m={m} onFav={toggleFav} onEdit={(mm) => setSheet({ mode: 'edit', method: mm })} onDelete={(mm) => setDel(mm)} />)}
          </div>
          <MP.Button variant="primary" fullWidth onClick={() => setSheet({ mode: 'add' })}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><MP.Icon name="mas" size={19} color="#fff" />Agregar método</span>
          </MP.Button>
        </React.Fragment>
      )}

      {sheet && <MethodSheet mode={sheet.mode} method={sheet.method} onClose={() => setSheet(null)} onSave={save} />}
      {success && <SuccessModal method={success} onClose={() => setSuccess(null)} />}
      {del && <DeleteModal method={del} onCancel={() => setDel(null)} onConfirm={confirmDelete} />}
    </window.SubScreen>
  );
}

Object.assign(window, { MetodosFlow });
