/* Hatillo — Editar perfil (pantalla completa) + hoja de foto de perfil.
   Los campos se editan directamente. Foco azul plano (el gradiente azul→mint
   queda reservado a la barra de Hati). */
const EP = window.HatilloDesignSystem_5bedaa;

/* Los 9 íconos de personajes + la foto de la persona son las opciones de avatar. */
const AVATAR_ICONS = [
  { id: 'pikachu', src: 'assets/avatars/pikachu.png' },
  { id: 'bulbasaur', src: 'assets/avatars/bulbasaur.png' },
  { id: 'squirtle', src: 'assets/avatars/squirtle.png' },
  { id: 'chikorita', src: 'assets/avatars/chikorita.png' },
  { id: 'eevee', src: 'assets/avatars/eevee.png' },
  { id: 'jigglypuff', src: 'assets/avatars/jigglypuff.png' },
  { id: 'togepi', src: 'assets/avatars/togepi.png' },
  { id: 'poliwag', src: 'assets/avatars/poliwag.png' },
  { id: 'torchic', src: 'assets/avatars/torchic.png' },
];

function LockGlyph({ size = 16, color = 'var(--ink-soft)' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* Campo editable con foco azul plano; soporta estado bloqueado (read-only). */
function EditField({ label, value, onChange, placeholder, inputMode, leading, note, locked }) {
  const [foc, setFoc] = React.useState(false);
  return (
    <div>
      {label && <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 7 }}>{label}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1.5px solid ' + (foc && !locked ? 'var(--blue)' : 'var(--line)'), boxShadow: foc && !locked ? '0 0 0 3px rgba(0,81,255,.14)' : 'none', borderRadius: 'var(--r-sm)', background: locked ? 'var(--fog)' : 'var(--white)', padding: '12px 14px', transition: 'border-color .18s ease, box-shadow .18s ease' }}>
        {leading}
        <input
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={() => setFoc(true)}
          onBlur={() => setFoc(false)}
          placeholder={placeholder}
          inputMode={inputMode}
          readOnly={locked}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', font: 'inherit', fontSize: 15, color: locked ? 'var(--ink-soft)' : 'var(--ink)', minWidth: 0, cursor: locked ? 'not-allowed' : 'text' }}
        />
        {locked && <LockGlyph />}
      </div>
      {note && <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '7px 2px 0' }}>{note}</p>}
    </div>
  );
}

/* Hoja (bottom sheet) para elegir foto de perfil. */
function PhotoSheet({ current, onPick, onClose }) {
  const upRef = React.useRef(null);
  const camRef = React.useRef(null);
  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) { onPick({ type: 'photo', src: URL.createObjectURL(f) }); onClose(); }
  };
  const selectedIcon = current && current.type === 'icon' ? current.id : null;
  const bigBtn = (icon, label, onClick) => (
    <button onClick={onClick} className="hati-press" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 10px', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', background: 'var(--white)', cursor: 'pointer', fontFamily: 'inherit' }}>
      <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><EP.Icon name={icon} size={22} color="var(--blue)" /></span>
      <span style={{ fontSize: 14, fontWeight: 700 }}>{label}</span>
    </button>
  );
  return (
    <window.Portal>
    <div style={{ position: 'fixed', inset: 0, zIndex: 130, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div className="mp-overlay" onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)', animation: 'mpFade .2s ease' }} />
      <div className="mp-sheet" style={{ position: 'relative', background: 'var(--white)', borderRadius: '26px 26px 0 0', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto', maxHeight: '92vh', display: 'flex', flexDirection: 'column', animation: 'mpSheetUp .28s cubic-bezier(.22,.61,.36,1)' }}>
        <div style={{ flex: 'none', padding: '12px 22px 6px' }}>
          <div style={{ width: 42, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 14px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.01em', margin: 0, fontFamily: 'var(--font-heading)' }}>Foto de perfil</h2>
            <button onClick={onClose} aria-label="Cerrar" style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--fog)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none' }}>
              <EP.Icon name="cerrar" size={18} color="var(--navy)" />
            </button>
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '8px 22px calc(22px + env(safe-area-inset-bottom))' }}>
          <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '0 0 16px' }}>Elige un personaje o usa una foto tuya.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
            {AVATAR_ICONS.map((a) => {
              const on = selectedIcon === a.id;
              return (
                <button key={a.id} onClick={() => onPick({ type: 'icon', id: a.id, src: a.src })} aria-label={'Elegir ' + a.id} aria-pressed={on} className="hati-press" style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '50%', border: on ? '3px solid var(--blue)' : '1px solid var(--line)', background: 'var(--white)', cursor: 'pointer', padding: on ? 4 : 6, boxShadow: on ? '0 0 0 3px rgba(0,81,255,.14)' : 'none', transition: 'border-color .15s, box-shadow .15s, transform .08s ease' }}>
                  <img src={a.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  {on && <span className="badge-pop" style={{ position: 'absolute', right: -3, bottom: -3, width: 26, height: 26, borderRadius: '50%', background: 'var(--blue)', border: '3px solid var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)' }}><EP.Icon name="check" size={14} color="#fff" strokeWidth={2.8} /></span>}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {bigBtn('imagen', 'Subir foto', () => upRef.current && upRef.current.click())}
            {bigBtn('camara', 'Tomar foto', () => camRef.current && camRef.current.click())}
          </div>
          <input ref={upRef} type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
          <input ref={camRef} type="file" accept="image/*" capture="user" onChange={onFile} style={{ display: 'none' }} />
        </div>
      </div>
    </div>
    </window.Portal>
  );
}

function EditProfileScreen({ initial, onSave, onBack }) {
  const [d, setD] = React.useState(initial);
  const [sheet, setSheet] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const set = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const AV = window.AvatarView;

  const save = () => { onSave(d); setOk(true); };

  /* El modal de éxito se cierra solo a los 4s (sin exigir otro clic). */
  React.useEffect(() => {
    if (!ok) return;
    const t = setTimeout(() => { setOk(false); onBack(); }, 2000);
    return () => clearTimeout(t);
  }, [ok]);

  return (
    <window.SubScreen title="Editar perfil" onBack={onBack}>
      {/* avatar con badge de cámara */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 26 }}>
        <div style={{ position: 'relative' }}>
          <span style={{ display: 'block', borderRadius: '50%', boxShadow: 'var(--shadow)', border: '1px solid var(--line)' }}>
            <AV avatar={d.avatar} name={d.name} size={104} bg="var(--white)" />
          </span>
          <button onClick={() => setSheet(true)} aria-label="Cambiar foto de perfil" style={{ position: 'absolute', right: -2, bottom: -2, width: 38, height: 38, borderRadius: '50%', background: 'var(--blue)', border: '3px solid var(--page)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <EP.Icon name="camara" size={18} color="#fff" />
          </button>
        </div>
        <button onClick={() => setSheet(true)} style={{ marginTop: 12, background: 'transparent', border: 'none', color: 'var(--blue)', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Cambiar foto</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <EditField label="Nombre" value={d.name} onChange={(v) => set('name', v)} placeholder="Tu nombre" />
        <EditField label="Número de contribuyente" value={d.contribuyente} locked note="Asignado por el Municipio. No se puede editar." />
        <EditField label="Celular" value={d.phone} onChange={(v) => set('phone', v)} inputMode="tel" placeholder="+507 6000-0000" note="Si cambias tu celular, te enviaremos un código para confirmarlo." />
        <EditField label="Correo" value={d.email} onChange={(v) => set('email', v)} inputMode="email" placeholder="tucorreo@ejemplo.com" />
      </div>

      {/* contacto de emergencia */}
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: '30px 0 6px' }}>Contacto de emergencia · opcional</div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '0 0 16px' }}>A quién avisar si hiciera falta.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <EditField label="Nombre del contacto" value={d.emName} onChange={(v) => set('emName', v)} placeholder="Nombre y apellido" />
        <EditField label="Celular del contacto" value={d.emPhone} onChange={(v) => set('emPhone', v)} inputMode="tel" placeholder="+507 6000-0000" />
      </div>

      <div style={{ marginTop: 28 }}>
        <EP.Button variant="primary" fullWidth onClick={save}>Guardar cambios</EP.Button>
      </div>

      {sheet && <PhotoSheet current={d.avatar} onPick={(a) => set('avatar', a)} onClose={() => setSheet(false)} />}

      {ok && (
        <window.Portal>
        <div style={{ position: 'fixed', inset: 0, zIndex: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="mp-overlay" onClick={() => { setOk(false); onBack(); }} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)', animation: 'mpFade .2s ease' }} />
          <div className="hati-rise" style={{ position: 'relative', background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: 28, boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 380, textAlign: 'center' }}>
            <span className="mp-pop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 68, height: 68, borderRadius: '50%', background: 'var(--mint)', margin: '0 auto 18px', animation: 'mpPop .45s ease' }}>
              <EP.Icon name="check" size={34} color="#08351f" strokeWidth={2.6} />
            </span>
            <h3 style={{ fontSize: 21, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>Guardado con éxito</h3>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.55, margin: 0 }}>Tus cambios ya están al día.</p>
          </div>
        </div>
        </window.Portal>
      )}
    </window.SubScreen>
  );
}

Object.assign(window, { EditProfileScreen });
