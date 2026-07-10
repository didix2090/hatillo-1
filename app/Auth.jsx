/* Hatillo — brand mark + auth screens.
   Onboarding: blue hero (real white logo + "Redescubre tu ciudad. Hatillo en tu
   bolsillo") with the phone number field inline (no phone CTA), plus correo and
   Apple/Google. OTP only for phone & email.
   Note: uploads/hatillo_blanco.png is a WHITE logo (used on blue). On light screens
   we fall back to the geometric house mark until a colored logo is supplied. */
const H = window.HatilloDesignSystem_5bedaa;
const LOGO_WHITE = 'assets/hatillo_blanco.png';
const LOGO_BLUE = 'assets/hatillo-logo-azul.svg';

/* Official Hatillo isotype (house with a negative "1"), extracted from the app-icon master. */
const HATILLO_ISO = 'M10.03,95.28l-10.03-5.44.06-20.43,55.49-21.81c-2.43-7.91,1.3-12.8,7.77-15.46,12.68-5.21,26.36-6.73,40.17-3.4L176.51,0l24.6,24.6-.16,18.16-9.94,3.95-.02,136.26H9.99s.04-87.69.04-87.69ZM100.02,161.87l-.03-96.42-21.99,8.72v87.81s22.01-.11,22.01-.11Z';
function HatilloMark({ size = 44, tile = false }) {
  const w = size, h = size * (182.98 / 201.11);
  const svg = (
    <svg viewBox="0 0 201.11 182.98" width={w} height={h} aria-hidden="true" style={{ display: 'block' }}>
      <path fillRule="evenodd" d={HATILLO_ISO} fill={tile ? '#fff' : 'currentColor'} />
    </svg>
  );
  if (!tile) return svg;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size + 20, height: size + 20, borderRadius: size * 0.42, background: 'var(--blue)' }}>{svg}</span>
  );
}

/* Decorative orbit of service glyphs. Fills its (positioned) parent. */
function OrbitArt({ cx = '50%' }) {
  const ring = (d) => ({ position: 'absolute', top: '50%', left: cx, width: d, height: d, marginTop: -d / 2, marginLeft: -d / 2, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)' });
  const chip = (x, y, bg, icon, color, size = 54) => (
    <span style={{ position: 'absolute', left: `calc(${cx} + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%,-50%)', width: size, height: size, borderRadius: '30%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 26px -10px rgba(0,0,0,.35)' }}>
      <H.Icon name={icon} size={size * 0.5} color={color} strokeWidth={1.9} />
    </span>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }} aria-hidden="true">
      <div style={ring(220)} />
      <div style={ring(340)} />
      <div style={ring(470)} />
      <span style={{ position: 'absolute', top: '50%', left: cx, transform: 'translate(-50%,-50%)', width: 72, height: 72, borderRadius: 24, background: '#fff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 40px -12px rgba(0,0,0,.4)' }}>
        <HatilloMark size={38} tile={false} />
      </span>
      {chip(-110, -80, 'var(--mint)', 'tarjeta', 'var(--night)')}
      {chip(115, -60, '#fff', 'ubicacion', 'var(--blue)')}
      {chip(-115, 70, '#fff', 'tramites', 'var(--navy)')}
      {chip(120, 85, 'var(--mint)', 'campana', 'var(--night)', 48)}
    </div>
  );
}

const AppleGlyph = () => (<img src="assets/icons/apple.svg" alt="" width="19" height="19" style={{ display: 'block' }} />);
const GoogleGlyph = () => (<img src="assets/icons/google.svg" alt="" width="19" height="19" style={{ display: 'block' }} />);

/* Detecta el país por el prefijo "+" (coincidencia de código más largo).
   El bundle no re-exporta detectCountry en el namespace, así que lo hacemos aquí. */
function detectCountryFromInput(input) {
  const s = String(input || '').replace(/[^\d+]/g, '');
  if (!s.startsWith('+')) return null;
  const rest = s.slice(1);
  const list = (H.COUNTRIES) || [];
  let best = null, bestLen = 0;
  for (const co of list) {
    const dial = co.dial.replace(/\D/g, '');
    if (dial && rest.startsWith(dial) && dial.length > bestLen) { best = co; bestLen = dial.length; }
  }
  return best;
}

/* Formateo "as-you-type" del número nacional según el país. */
function fmtNationalPhone(input, country) {
  const n = String(input || '').replace(/\D/g, '');
  const dial = country && country.dial ? country.dial.replace(/\D/g, '') : '';
  if (dial === '507') { const d = n.slice(0, 8); return d.length > 4 ? d.slice(0, 4) + '-' + d.slice(4) : d; }
  if (dial === '1') { const d = n.slice(0, 10); if (d.length > 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6); if (d.length > 3) return '(' + d.slice(0, 3) + ') ' + d.slice(3); if (d.length) return '(' + d.slice(0, 3); return d; }
  const d = n.slice(0, 14); return d.replace(/(.{3,4})(?=.)/g, '$1 ').trim();
}

/* Campo de celular limpio: bandera + código inline (sin fondo gris) · divisor
   hairline · input. Foco azul sólido (no gradiente — ese es solo para Hati). */
function CleanPhoneField({ country, value, onChange, onOpenPicker, placeholder = 'Número de celular' }) {
  const [foc, setFoc] = React.useState(false);
  const c = country || { dial: '+507', flag: '🇵🇦' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid ' + (foc ? 'var(--blue)' : 'var(--line)'), boxShadow: foc ? '0 0 0 3px rgba(0,81,255,.14)' : 'none', borderRadius: 'var(--r-sm)', background: 'var(--white)', transition: 'border-color .18s ease, box-shadow .18s ease', padding: '4px 14px 4px 12px' }}>
      <button type="button" onClick={onOpenPicker} aria-label="Cambiar país" style={{ display: 'flex', alignItems: 'center', gap: 7, border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: 16, fontWeight: 600, color: 'var(--ink)', padding: '8px 2px', flex: 'none' }}>
        <span style={{ fontSize: 22, lineHeight: 1 }}>{c.flag}</span>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{c.dial}</span>
        <span style={{ width: 7, height: 7, borderRight: '2px solid var(--ink-soft)', borderBottom: '2px solid var(--ink-soft)', transform: 'rotate(45deg)', marginLeft: 1, marginTop: -3 }} />
      </button>
      <span style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)', margin: '6px 12px' }} />
      <input value={value} onChange={(e) => onChange && onChange(e.target.value)} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)} placeholder={placeholder} inputMode="tel" style={{ flex: 1, border: 'none', outline: 'none', font: 'inherit', fontSize: 16, color: 'var(--ink)', minWidth: 0, background: 'transparent' }} />
    </div>
  );
}

/* Get Started options — phone field inline (no phone CTA), then correo + Apple/Google. */
function GetStartedOptions({ country, onOpenCountry, onPhone, onEmail, onProvider }) {
  const [phone, setPhone] = React.useState('');
  const c = country || (H.COUNTRIES && H.COUNTRIES[0]) || { iso: 'PA', name: 'Panamá', dial: '+507', flag: '🇵🇦' };
  const digits = phone.replace(/\D/g, '').length;
  const change = (raw) => {
    // Entrada internacional: detectar país desde el prefijo "+" y dejar en el
    // campo solo la parte nacional (el código lo "carga" la bandera).
    if (String(raw).trim().startsWith('+')) {
      const d = detectCountryFromInput(raw);
      if (d) {
        if (d.iso !== c.iso) onOpenCountry(d, true);
        const all = raw.replace(/\D/g, '');
        const dial = d.dial.replace(/\D/g, '');
        const nat = all.startsWith(dial) ? all.slice(dial.length) : all;
        setPhone(fmtNationalPhone(nat, d));
      } else {
        setPhone(raw.replace(/[^\d+\s()\-]/g, ''));
      }
      return;
    }
    setPhone(fmtNationalPhone(raw, c));
  };
  const iconBtn = (glyph, label, onClick) => (
    <button onClick={onClick} aria-label={label} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 12px', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', background: 'var(--white)', cursor: 'pointer' }}>{glyph}</button>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ fontSize: 'clamp(19px,2.6vw,23px)', fontWeight: 600, letterSpacing: '-.01em', color: 'var(--ink)', margin: '0 0 4px', lineHeight: 1.25 }}>Habla con Hati y resuelve todo</p>
      <CleanPhoneField country={c} value={phone} onChange={change} onOpenPicker={() => onOpenCountry(null, false)} placeholder="Número de celular" />
      <H.Button variant="primary" fullWidth disabled={digits < 7} onClick={() => onPhone(phone)}>Continuar</H.Button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '6px 0 2px' }}>
        <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        <span style={{ flex: 'none', fontSize: 12, color: 'var(--ink-soft)', fontWeight: 600, whiteSpace: 'nowrap' }}>o entra rápido con</span>
        <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
      <button onClick={onEmail} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: '14px 16px', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', background: 'var(--white)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>
        <img src="assets/icons/email.svg" alt="" width="20" height="20" style={{ display: 'block' }} />Correo electrónico
      </button>
      <div style={{ display: 'flex', gap: 12 }}>
        {iconBtn(<AppleGlyph />, 'Continuar con Apple', onProvider)}
        {iconBtn(<GoogleGlyph />, 'Continuar con Google', onProvider)}
      </div>
    </div>
  );
}

function HeroLogo({ h }) {
  return <img src={LOGO_BLUE} alt="Hatillo" style={{ height: h, width: 'auto', display: 'block' }} />;
}

/* Gradiente azul + mint difuminado en la parte superior, sobre fondo blanco. */
function TopGlow() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '46%', background: 'radial-gradient(120% 100% at 18% 0%, rgba(0,81,255,.28), transparent 62%), radial-gradient(110% 95% at 92% 4%, rgba(4,214,156,.30), transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
  );
}

/* Hero claro — fondo blanco, gradiente azul+mint arriba, logo azul + tagline. */
function HeroBlue({ compact }) {
  return (
    <React.Fragment>
      <TopGlow />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: compact ? 'flex-end' : 'center', padding: compact ? '30px 26px 34px' : 'clamp(28px,5vw,64px)', zIndex: 3 }}>
        <HeroLogo h={compact ? 52 : 68} />
      </div>
    </React.Fragment>
  );
}

/* Welcome intro — isotipo circular con anillo mint, luego el nombre sube. */
function WelcomeScreen({ onDone }) {
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(onDone, reduce ? 1750 : 2600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--page)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="wc-stage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 104, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="wc-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid var(--mint)' }} />
          <img className="wc-iso" src="assets/hatillo-appicon-master.svg" alt="" width="104" height="104" style={{ display: 'block', borderRadius: '50%', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 2 }} />
        </div>
        <span className="wc-name" style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 40, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1 }}>Hatillo</span>
      </div>
    </div>
  );
}

/* 1. Onboarding */
function Onboarding({ country, onOpenCountry, onPhone, onEmail, onProvider }) {
  const wide = window.useIsWide(860);
  const opts = <GetStartedOptions country={country} onOpenCountry={onOpenCountry} onPhone={onPhone} onEmail={onEmail} onProvider={onProvider} />;
  if (wide) {
    return (
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ flex: 1, position: 'relative', background: 'var(--page)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <HeroBlue />
        </div>
        <div style={{ flex: '0 0 42%', maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(28px,4vw,64px)', background: 'var(--page)', borderLeft: '1px solid var(--line)' }}>{opts}</div>
      </div>
    );
  }
  return (
    <div style={{ flex: 1, minHeight: 0, background: 'var(--page)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}><HeroBlue compact /></div>
      <div style={{ flex: 'none', background: 'var(--page)', padding: '10px 22px calc(40px + env(safe-area-inset-bottom))', position: 'relative', zIndex: 4 }}>
        {opts}
      </div>
    </div>
  );
}

/* Auth step canvas — top-aligned (not floating in the middle), generous spacing. */
function AuthStep({ children, onBack }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, background: 'var(--page)' }}>
      <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px' }}>
        <button onClick={onBack} aria-label="Volver" style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 6, display: 'flex' }}>
          <H.Icon name="volver" size={24} color="var(--navy)" />
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 440, margin: '0 auto', padding: 'clamp(12px,3vh,40px) 24px 40px' }}>{children}</div>
      </div>
    </div>
  );
}

function StepMark() {
  return <span style={{ display: 'inline-flex', marginBottom: 20 }}><HatilloMark size={40} tile /></span>;
}

/* 2. Email entry (enriched) — con dropdown de sugerencia de dominio */
function EmailLogin({ onContinue, onBack }) {
  const em = window.useEmailDomainSuggestions();
  const email = em.value;
  const ok = /.+@.+\..+/.test(email);
  // Solo marcamos error ante algo que sí lo amerite (espacios, caracteres no
  // válidos o más de un "@"), NO por estar incompleto mientras escribe.
  const hasSpace = /\s/.test(email);
  const badChar = /[^a-zA-Z0-9._%+\-@]/.test(email);
  const doubleAt = (email.match(/@/g) || []).length > 1;
  const showError = email.length > 0 && (hasSpace || badChar || doubleAt);
  const errorMsg = hasSpace
    ? 'El correo no puede contener espacios.'
    : doubleAt
      ? 'El correo solo puede tener un “@”.'
      : 'Ese carácter no es válido en un correo.';
  return (
    <AuthStep onBack={onBack}>
      <StepMark />
      <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', fontWeight: 800, letterSpacing: '-.01em' }}>Continúa con tu correo</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.55, margin: '10px 0 24px' }}>Te enviaremos un código de acceso de un solo uso. Sin contraseñas que memorizar.</p>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8 }}>Correo electrónico</div>
      <div style={{ position: 'relative' }}>
        <H.Field value={email} placeholder="tucorreo@ejemplo.com" state={showError ? 'error' : 'default'} errorMessage={errorMsg} leading={<H.Icon name="correo" size={18} color="var(--ink-soft)" />} onChange={em.onChange} onFocus={em.onFocus} onBlur={em.onBlur} onKeyDown={em.onKeyDown} />
        {em.isOpen && (
          <ul style={{ listStyle: 'none', margin: '6px 0 0', padding: 4, position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 20, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)' }}>
            {em.suggestions.map((s, i) => (
              <li key={s}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => em.onSelect(s)}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 15, padding: '11px 12px', borderRadius: 'var(--r-sm)', background: i === em.activeIndex ? 'var(--primary-surface)' : 'transparent', color: i === em.activeIndex ? 'var(--primary)' : 'var(--ink)' }}
                >
                  <H.Icon name="correo" size={16} color="var(--concrete)" />{s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={{ height: 22 }} />
      <H.Button variant="primary" fullWidth disabled={!ok} onClick={() => onContinue(email)}>Enviar código</H.Button>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', textAlign: 'center', marginTop: 18, lineHeight: 1.5 }}>Al continuar aceptas los Términos y el Aviso de Privacidad del Municipio de Panamá.</p>
    </AuthStep>
  );
}

/* 3. OTP (enriched) — phone (WhatsApp) & email only */
function Otp({ onVerify, onBack, dest, channel = 'email' }) {
  const [code, setCode] = React.useState('');
  const [secs, setSecs] = React.useState(30);
  React.useEffect(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secs]);
  const done = code.replace(/\s/g, '').length >= 4;
  const isWa = channel === 'whatsapp';
  return (
    <AuthStep onBack={onBack}>
      <StepMark />
      <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', fontWeight: 800, letterSpacing: '-.01em' }}>Verifica tu código</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.55, margin: '10px 0 26px' }}>
        {isWa
          ? <>Te enviamos un código de 4 dígitos por <b style={{ color: 'var(--ink)' }}>WhatsApp</b> al <b style={{ color: 'var(--ink)' }}>{dest || 'tu celular'}</b>. Ingrésalo para entrar; caduca en 10 minutos.</>
          : <>Enviamos un código de 4 dígitos a <b style={{ color: 'var(--ink)' }}>{dest || 'tu correo'}</b>. Ingrésalo para entrar; caduca en 10 minutos.</>}
      </p>
      <H.OtpInput length={4} value={code} onChange={setCode} onComplete={onVerify} />
      <div style={{ height: 24 }} />
      <H.Button variant="primary" fullWidth disabled={!done} onClick={() => onVerify(code)}>Verificar</H.Button>
      <div style={{ textAlign: 'center', marginTop: 18, fontSize: 14, color: 'var(--ink-soft)' }}>
        {secs > 0 ? <>Reenviar código en <b style={{ color: 'var(--ink)' }}>0:{String(secs).padStart(2, '0')}</b></> : <button onClick={() => setSecs(30)} style={{ border: 'none', background: 'transparent', color: 'var(--blue)', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14 }}>Reenviar código</button>}
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', textAlign: 'center', marginTop: 22, lineHeight: 1.5 }}>
        {isWa
          ? '¿No lo recibiste? Revisa que tu número de WhatsApp sea correcto o vuelve para cambiarlo.'
          : '¿No lo recibiste? Revísalo en tu bandeja de entrada y en la carpeta de spam, o vuelve para cambiar tu correo.'}
      </p>
    </AuthStep>
  );
}

/* Country picker (full screen) */
function CountryPickerScreen({ value, onSelect, onClose }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', background: 'var(--white)' }}>
      <H.CountrySelector value={value} onSelect={onSelect} onClose={onClose} />
    </div>
  );
}

Object.assign(window, { HatilloMark, WelcomeScreen, Onboarding, CountryPickerScreen, EmailLogin, Otp });
