/* Hatillo — Verificación de identidad (KYC). Pantallas dedicadas, no chat.
   Flujo: intro/consentimiento → captura de cédula → selfie/liveness →
   validando → EN REVISIÓN (con estado de error de captura). En light;
   las pantallas de cámara usan un visor oscuro (es la cámara, no dark mode). */
const KYS = window.HatilloDesignSystem_5bedaa;

/* Marco guía rectangular con esquinas en mint (captura de cédula). */
function CornerFrame() {
  const corner = (pos) => {
    const base = { position: 'absolute', width: 30, height: 30, borderColor: 'var(--mint)', borderStyle: 'solid', borderWidth: 0 };
    const map = {
      tl: { top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3, borderTopLeftRadius: 10 },
      tr: { top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3, borderTopRightRadius: 10 },
      bl: { bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3, borderBottomLeftRadius: 10 },
      br: { bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3, borderBottomRightRadius: 10 },
    };
    return <span style={{ ...base, ...map[pos] }} />;
  };
  return (
    <div style={{ position: 'relative', width: 'min(78vw, 320px)', aspectRatio: '1.586 / 1', borderRadius: 12, background: 'rgba(255,255,255,.04)', boxShadow: '0 0 0 100vmax rgba(4,10,20,.55)' }}>
      {corner('tl')}{corner('tr')}{corner('bl')}{corner('br')}
    </div>
  );
}

/* Chrome común de las pantallas de cámara (visor oscuro). */
function CameraScreen({ step, instruction, guide, onClose, onShutter }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0A121D', color: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* subtle camera texture */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 50% 20%, #16273b 0%, #0A121D 70%)', pointerEvents: 'none' }} />
      {/* top bar */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', padding: 'calc(14px + env(safe-area-inset-top)) 18px 14px' }}>
        <button onClick={onClose} aria-label="Cerrar" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <KYS.Icon name="cerrar" size={20} color="#fff" />
        </button>
        <span style={{ margin: '0 auto', paddingRight: 40, fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--mint)' }}>{step}</span>
      </div>
      {/* viewport */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26, padding: '0 24px' }}>
        {guide}
        <p style={{ maxWidth: 320, textAlign: 'center', fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,.9)', margin: 0 }}>{instruction}</p>
      </div>
      {/* shutter */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', padding: '20px 0 calc(30px + env(safe-area-inset-bottom))' }}>
        <button onClick={onShutter} aria-label="Capturar" style={{ width: 74, height: 74, borderRadius: '50%', border: '4px solid rgba(255,255,255,.35)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }}>
          <span style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', transition: 'transform .12s ease' }} />
        </button>
      </div>
    </div>
  );
}

/* Óvalo guía para el rostro (selfie / liveness). */
function FaceOval() {
  return (
    <div style={{ position: 'relative', width: 'min(62vw, 232px)', aspectRatio: '0.8 / 1' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid var(--mint)', boxShadow: '0 0 0 100vmax rgba(4,10,20,.55)' }} />
      <div style={{ position: 'absolute', inset: 10, borderRadius: '50%', border: '1px dashed rgba(255,255,255,.35)' }} />
    </div>
  );
}

function StepPill({ n, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{ flex: 'none', width: 30, height: 30, borderRadius: '50%', background: 'var(--primary-surface)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, fontFamily: 'var(--font-heading)' }}>{n}</span>
      <span style={{ fontSize: 15, lineHeight: 1.4, color: 'var(--ink)' }}>{text}</span>
    </div>
  );
}

function KycFlow({ onClose, onSubmitted, simulateError = false }) {
  const [step, setStep] = React.useState('intro'); // intro|cedula|selfie|validando|revision|error

  React.useEffect(() => {
    if (step !== 'validando') return;
    const t = setTimeout(() => setStep(simulateError ? 'error' : 'revision'), 2000);
    return () => clearTimeout(t);
  }, [step, simulateError]);

  const shell = (bg, children) => (
    <div style={{ position: 'fixed', inset: 0, zIndex: 120, background: bg, animation: 'kycIn .25s ease' }}>{children}</div>
  );

  /* ---- Intro / consentimiento ---- */
  if (step === 'intro') {
    return shell('var(--page)', (
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ maxWidth: 460, margin: '0 auto', minHeight: '100%', display: 'flex', flexDirection: 'column', padding: 'calc(14px + env(safe-area-inset-top)) 24px calc(24px + env(safe-area-inset-bottom))' }}>
          <button onClick={onClose} aria-label="Cerrar" style={{ alignSelf: 'flex-start', width: 40, height: 40, marginLeft: -8, borderRadius: '50%', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <KYS.Icon name="cerrar" size={22} color="var(--navy)" />
          </button>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 8 }}>
            <span style={{ width: 72, height: 72, borderRadius: 20, background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <KYS.Icon name="shield" size={38} color="var(--blue)" strokeWidth={1.6} />
            </span>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.1, margin: 0 }}>Verifica tu identidad</h1>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '8px 0 26px' }}>Un paso rápido para confirmar que eres tú. Solo toma un momento.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <StepPill n="1" text="Toma una foto de tu cédula" />
              <StepPill n="2" text="Tómate una selfie" />
              <StepPill n="3" text="Validamos que coincidan" />
            </div>
            <div style={{ display: 'flex', gap: 12, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', padding: '16px 18px', marginTop: 28 }}>
              <KYS.Icon name="info" size={20} color="var(--blue)" style={{ flex: 'none', marginTop: 1 }} />
              <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: 0 }}>Tus datos se usan únicamente para validar tu identidad ante el Municipio y se guardan de forma segura.</p>
            </div>
          </div>
          <KYS.Button variant="primary" fullWidth onClick={() => setStep('cedula')} style={{ marginTop: 28 }}>Comenzar</KYS.Button>
        </div>
      </div>
    ));
  }

  /* ---- Captura de cédula ---- */
  if (step === 'cedula') {
    return shell('#0A121D', (
      <CameraScreen
        step="Paso 1 de 2"
        guide={<CornerFrame />}
        instruction="Coloca el frente de tu cédula dentro del marco. Busca buena luz y evita reflejos."
        onClose={onClose}
        onShutter={() => setStep('selfie')}
      />
    ));
  }

  /* ---- Selfie / liveness ---- */
  if (step === 'selfie') {
    return shell('#0A121D', (
      <CameraScreen
        step="Paso 2 de 2"
        guide={<FaceOval />}
        instruction="Centra tu rostro dentro del óvalo y parpadea cuando estés listo."
        onClose={onClose}
        onShutter={() => setStep('validando')}
      />
    ));
  }

  /* ---- Validando (loading breve) ---- */
  if (step === 'validando') {
    return shell('var(--page)', (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24 }}>
        <span style={{ width: 54, height: 54, borderRadius: '50%', border: '4px solid var(--fog)', borderTopColor: 'var(--blue)', animation: 'hatillo-spin .8s linear infinite' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 19, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Validando tu identidad…</div>
          <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 6 }}>Esto toma solo unos segundos.</div>
        </div>
      </div>
    ));
  }

  /* ---- Error de captura ---- */
  if (step === 'error') {
    return shell('var(--page)', (
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ maxWidth: 440, margin: '0 auto', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'calc(14px + env(safe-area-inset-top)) 24px calc(24px + env(safe-area-inset-bottom))' }}>
          <span style={{ width: 74, height: 74, borderRadius: 22, background: 'var(--error-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
            <KYS.Icon name="advertencia" size={38} color="var(--error)" strokeWidth={1.6} />
          </span>
          <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>No pudimos leer la imagen</h1>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '10px 0 30px' }}>Repite la captura con mejor luz y sin reflejos. Asegúrate de que la cédula se vea completa.</p>
          <KYS.Button variant="primary" fullWidth onClick={() => setStep('cedula')}>Reintentar</KYS.Button>
          <div style={{ height: 10 }} />
          <KYS.Button variant="ghost" fullWidth onClick={onClose}>Cancelar</KYS.Button>
        </div>
      </div>
    ));
  }

  /* ---- EN REVISIÓN ---- */
  return shell('var(--page)', (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <div style={{ maxWidth: 440, margin: '0 auto', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'calc(14px + env(safe-area-inset-top)) 24px calc(24px + env(safe-area-inset-bottom))' }}>
        <span style={{ width: 82, height: 82, borderRadius: 24, background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <KYS.Icon name="historial" size={42} color="#0051FF" strokeWidth={1.7} />
        </span>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0051FF', marginBottom: 10 }}>En revisión</div>
        <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Recibimos tu solicitud</h1>
        <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '12px 0 32px' }}>Nuestro equipo está revisando tu identidad. Te avisaremos en cuanto quede verificada.</p>
        <KYS.Button variant="primary" fullWidth onClick={onSubmitted}>Volver a mi perfil</KYS.Button>
      </div>
    </div>
  ));
}

Object.assign(window, { KycFlow });
