/* Hatillo — "Completa tus datos": pantalla adaptativa que pide SOLO los campos
   que faltan según el método de ingreso. El N° de contribuyente y la verificación
   de identidad NO se piden aquí — se solicitan al pagar o tramitar. El anillo
   refleja el avance del perfil en vivo. */
const CD = window.HatilloDesignSystem_5bedaa;

/* Campos que faltan por método de ingreso (datos básicos, sin contribuyente). */
const METHOD_FIELDS = {
  phone: ['name', 'email'],   // Celular → Nombre, Correo
  social: ['phone'],          // Google/Apple → Celular (el proveedor da el nombre)
  email: ['name', 'phone'],   // Correo → Nombre, Celular
};
const FIELD_DEF = {
  name: { label: 'Nombre completo', placeholder: 'Tu nombre', inputMode: 'text', icon: 'perfil' },
  phone: { label: 'Número de celular', placeholder: '+507 6000-0000', inputMode: 'tel', icon: 'placa' },
  email: { label: 'Correo electrónico', placeholder: 'tucorreo@ejemplo.com', inputMode: 'email', icon: 'correo' },
};
const METHOD_LABEL = {
  phone: 'Ingresaste con tu celular',
  social: 'Ingresaste con Google o Apple',
  email: 'Ingresaste con tu correo',
};

/* Anillo de progreso compacto (mismo cálculo que el perfil). */
function MiniRing({ pct }) {
  const size = 96, stroke = 7, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--fog)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={pct === 100 ? 'var(--mint)' : 'var(--blue)'} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} style={{ transition: 'stroke-dashoffset .6s cubic-bezier(.22,.61,.36,1), stroke .3s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 22, fontFamily: 'var(--font-heading)', color: pct === 100 ? '#08795a' : 'var(--blue)' }}>{pct}%</div>
    </div>
  );
}

function CDField({ def, value, onChange }) {
  const [foc, setFoc] = React.useState(false);
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 7 }}>{def.label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1.5px solid ' + (foc ? 'var(--blue)' : 'var(--line)'), boxShadow: foc ? '0 0 0 3px rgba(0,81,255,.14)' : 'none', borderRadius: 'var(--r-sm)', background: 'var(--white)', padding: '12px 14px', transition: 'border-color .18s ease, box-shadow .18s ease' }}>
        <CD.Icon name={def.icon} size={19} color="var(--ink-soft)" />
        <input value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)} placeholder={def.placeholder} inputMode={def.inputMode} style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', font: 'inherit', fontSize: 15, color: 'var(--ink)', minWidth: 0 }} />
      </div>
    </label>
  );
}

function CompletaDatosScreen({ profile, loginMethod = 'phone', verify = 'Sin verificar', onSave, onBack }) {
  const fields = METHOD_FIELDS[loginMethod] || METHOD_FIELDS.phone;
  const [d, setD] = React.useState(() => {
    const base = {};
    fields.forEach((f) => { base[f] = profile[f] || ''; });
    return base;
  });
  const set = (k, v) => setD((p) => ({ ...p, [k]: v }));

  const merged = { ...profile, ...d };
  let pct = 0;
  if (merged.name) pct += 20;
  if (merged.phone) pct += 20;
  if (merged.email) pct += 20;
  if (verify === 'Verificado') pct += 40;

  const allFilled = fields.every((f) => (d[f] || '').trim());

  return (
    <window.SubScreen title="Completa tus datos" onBack={onBack}>
      {/* anillo + avance */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 24 }}>
        <MiniRing pct={pct} />
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 14 }}>{METHOD_LABEL[loginMethod]}</div>
        <h2 style={{ fontSize: 'clamp(21px,4vw,25px)', fontWeight: 800, letterSpacing: '-.02em', margin: '6px 0 0', textWrap: 'balance' }}>Ya casi estás</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '8px 0 0', maxWidth: '32ch' }}>Solo necesitamos {fields.length > 1 ? 'unos datos más' : 'un dato más'} para terminar de configurar tu cuenta.</p>
      </div>

      {/* campos que faltan */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {fields.map((f) => <CDField key={f} def={FIELD_DEF[f]} value={d[f]} onChange={(v) => set(f, v)} />)}
      </div>

      {/* nota: contribuyente + identidad se piden al pagar/tramitar */}
      <div style={{ display: 'flex', gap: 12, background: 'var(--primary-surface)', borderRadius: 'var(--r-md)', padding: '14px 16px', marginTop: 20 }}>
        <CD.Icon name="info" size={18} color="var(--blue)" style={{ flex: 'none', marginTop: 1 }} />
        <p style={{ fontSize: 13.5, color: 'var(--navy)', lineHeight: 1.5, margin: 0 }}>Tu número de contribuyente y la verificación de identidad los pediremos cuando hagas tu primer pago o trámite.</p>
      </div>

      <div style={{ marginTop: 26 }}>
        <CD.Button variant="primary" fullWidth disabled={!allFilled} onClick={() => onSave(merged)}>Guardar y continuar</CD.Button>
      </div>
    </window.SubScreen>
  );
}

Object.assign(window, { CompletaDatosScreen });
