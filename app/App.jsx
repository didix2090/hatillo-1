/* Hatillo — top-level router wiring the whole flow together. */
function VoiceOverlay({ onClose }) {
  const HR = window.HatilloDesignSystem_5bedaa;
  React.useEffect(() => { const t = setTimeout(onClose, 3400); return () => clearTimeout(t); }, []);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--night)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <HR.VoiceState transcript={'\u201c¿Cuánto debo de mi placa?\u201d'} style={{ background: 'transparent', padding: 0 }} />
      </div>
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <HR.IconButton icon={<HR.Icon name="cerrar" size={20} color="#fff" />} tone="plain" title="Cerrar" onClick={onClose} />
      </div>
    </div>
  );
}

/* Nav inferior de 3 (Inicio · FAB Hati · Perfil).
   FAB anclado con su centro sobre el borde superior de la barra (mitad dentro,
   mitad fuera), sin hueco; nav con overflow visible para no recortarlo. */
const HATILLO_NAV_H = 66;
function HatilloNav({ active, onChange, onFab }) {
  const HI = window.HatilloIcons || {};
  const tab = (id, label, IconCmp) => {
    const on = active === id;
    return (
      <button onClick={() => onChange(id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, border: 'none', background: 'transparent', cursor: 'pointer', padding: '8px 4px', minHeight: 44, fontFamily: 'inherit', color: on ? 'var(--blue)' : 'var(--ink-soft)' }}>
        {IconCmp ? <IconCmp size={24} color={on ? 'var(--blue)' : 'var(--ink-soft)'} /> : null}
        <span style={{ fontSize: 11, fontWeight: on ? 700 : 500 }}>{label}</span>
      </button>
    );
  };
  return (
    <nav style={{ position: 'relative', flex: 'none', height: HATILLO_NAV_H, display: 'flex', alignItems: 'center', borderTop: '1px solid var(--line)', background: 'var(--white)', overflow: 'visible', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {tab('inicio', 'Inicio', HI.Home)}
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', paddingBottom: 9, minWidth: 84 }}>
        <button aria-label="Hablar con Hati" onClick={onFab} style={{ position: 'absolute', left: '50%', top: 0, transform: 'translate(-50%,-50%)', width: 60, height: 60, borderRadius: '50%', border: '4px solid #fff', background: 'var(--blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px -6px rgba(0,81,255,.55)' }}>
          <img src="assets/icons/hati-voice-icon.svg" width="28" height="28" style={{ display: 'block' }} alt="" />
        </button>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)' }}>Hati</span>
      </div>
      {tab('perfil', 'Perfil', HI.User)}
    </nav>
  );
}

function AppRoot() {
  const HR = window.HatilloDesignSystem_5bedaa;
  const FALLBACK_COUNTRY = { iso: 'PA', name: 'Panamá', dial: '+507', flag: '🇵🇦' };
  const countries = (HR && HR.COUNTRIES) || [FALLBACK_COUNTRY];
  const [route, setRoute] = React.useState('welcome'); // welcome|onboarding|login|country|email|otp|app
  const [screen, setScreen] = React.useState('chat'); // chat|perfil|notif|historial
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [chatKey, setChatKey] = React.useState(0);
  const [chat, setChat] = React.useState({ initialText: '' });
  const [voice, setVoice] = React.useState(false);
  const [user, setUser] = React.useState({ name: '', tone: 'tu' });
  const [country, setCountry] = React.useState(countries[0]);
  const [otpDest, setOtpDest] = React.useState('');
  const [otpChannel, setOtpChannel] = React.useState('email');
  const [loginMethod, setLoginMethod] = React.useState('social');
  const [profile, setProfile] = React.useState({
    name: 'Carlos Mendoza',
    phone: '+507 6123 4567',
    email: 'carlos@correo.com',
    contribuyente: '8-901-2345',
    emName: '',
    emPhone: '',
    avatar: null,
  });
  const [t, setTweak] = window.useTweaks({ homeStatus: 'Con deudas', notifDot: true, skeletons: false, offline: false, verify: 'Sin verificar', kycError: false, emptyPreview: 'Ninguno', completaDemo: 'Ninguno' });
  const [kyc, setKyc] = React.useState(false);
  const homeStatus = t.homeStatus === 'Al día' ? 'alDia' : 'deudas';

  const setTone = (t) => setUser((u) => ({ ...u, tone: t }));
  const RECIENTE_TEXT = { pago: '¿Cuánto debo de mi placa?', reporte: 'Quiero reportar un hueco.', tramite: 'Quiero iniciar un Aviso de Operación.', pazysalvo: '¿Cómo saco mi Paz y Salvo?', funeraria: 'Arrendamiento de cementerio' };
  const openChat = (initialText) => { setChat({ initialText: initialText || '' }); setChatKey((k) => k + 1); setScreen('chat'); setDrawerOpen(false); };
  const newChat = () => openChat('');
  const enterApp = () => { setUser((u) => ({ ...u, name: u.name || 'Carlos' })); setRoute('app'); };
  /* Demo: simula una cuenta nueva por método y abre "Completa tus datos". */
  const CLEAR_BY_METHOD = { phone: { name: '', email: '' }, social: { phone: '' }, email: { name: '', phone: '' } };
  const startCompleta = (method) => { setLoginMethod(method); setProfile((p) => ({ ...p, ...CLEAR_BY_METHOD[method] })); setScreen('completa'); setDrawerOpen(false); };
  const DEMO_METHOD = { Celular: 'phone', 'Google/Apple': 'social', Correo: 'email' };
  const HI = window.HatilloIcons || {};
  const navTabs = [
    { id: 'inicio', label: 'Inicio', icon: HI.Home ? <HI.Home size={24} /> : 'chat' },
    { id: 'perfil', label: 'Perfil', icon: HI.User ? <HI.User size={24} /> : 'perfil' },
  ];

  /* ---- Auth routes (full-screen, no bottom nav) ---- */
  if (route === 'welcome') {
    return <window.AppShell background="var(--white)"><window.WelcomeScreen onDone={() => setRoute('onboarding')} /></window.AppShell>;
  }
  if (route === 'onboarding') {
    return (
      <window.AppShell>
        <window.Onboarding
          country={country}
          onOpenCountry={(detected, silent) => { if (silent && detected) { setCountry(detected); } else { setRoute('country'); } }}
          onPhone={(phone) => { setLoginMethod('phone'); setOtpChannel('whatsapp'); setOtpDest(country.dial + ' ' + (phone || '••• 4567')); setRoute('otp'); }}
          onEmail={() => { setLoginMethod('email'); setOtpChannel('email'); setRoute('email'); }}
          onProvider={() => { setLoginMethod('social'); enterApp(); }}
        />
      </window.AppShell>
    );
  }
  if (route === 'country') {
    return <window.AppShell background="var(--white)"><window.CountryPickerScreen value={country.iso} onSelect={(c) => { setCountry(c); setRoute('onboarding'); }} onClose={() => setRoute('onboarding')} /></window.AppShell>;
  }
  if (route === 'email') {
    return <window.AppShell><window.EmailLogin onBack={() => setRoute('onboarding')} onContinue={(em) => { setOtpChannel('email'); setOtpDest(em || 'tu correo'); setRoute('otp'); }} /></window.AppShell>;
  }
  if (route === 'otp') {
    return <window.AppShell><window.Otp dest={otpDest} channel={otpChannel} onBack={() => setRoute('onboarding')} onVerify={() => enterApp()} /></window.AppShell>;
  }

  /* ---- Main app ---- */
  const tweaks = (
    <window.TweaksPanel>
      <window.TweakSection label="Home" />
      <window.TweakRadio label="Estado de cuenta" value={t.homeStatus} options={['Con deudas', 'Al día']} onChange={(v) => setTweak('homeStatus', v)} />
      <window.TweakToggle label="Novedad (punto rojo)" value={t.notifDot} onChange={(v) => setTweak('notifDot', v)} />
      <window.TweakSection label="Perfil" />
      <window.TweakSelect label="Completar datos (demo)" value={t.completaDemo} options={['Ninguno', 'Celular', 'Google/Apple', 'Correo']} onChange={(v) => { setTweak('completaDemo', v); if (v !== 'Ninguno') startCompleta(DEMO_METHOD[v]); }} />
      <window.TweakRadio label="Verificación" value={t.verify} options={['Sin verificar', 'En revisión', 'Verificado']} onChange={(v) => setTweak('verify', v)} />
      <window.TweakToggle label="KYC: error de captura" value={t.kycError} onChange={(v) => setTweak('kycError', v)} />
      <window.TweakSection label="Estados" />
      <window.TweakToggle label="Skeletons (cargando)" value={t.skeletons} onChange={(v) => setTweak('skeletons', v)} />
      <window.TweakToggle label="Sin conexión" value={t.offline} onChange={(v) => setTweak('offline', v)} />
      <window.TweakSection label="Empty states" />
      <window.TweakSelect label="Previa" value={t.emptyPreview} options={['Ninguno', 'Historial', 'Sin resultados', 'Notificaciones', 'Métodos de pago', 'Actividad', 'Sin conexión']} onChange={(v) => setTweak('emptyPreview', v)} />
    </window.TweaksPanel>
  );
  const offlineBar = t.offline ? (
    <div style={{ flex: 'none', background: 'var(--night)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '9px 16px', fontSize: 13.5, fontWeight: 600 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--warning)', flex: 'none' }} />
      Sin conexión · Reintentando…
    </div>
  ) : null;
  const EMPTY_PREVIEW = {
    Historial: { icon: 'chat', title: 'Aún no tienes conversaciones', lines: ['Pregúntale a Hati por un pago, un', 'trámite o repórtale algo de tu calle.'], cta: { label: 'Nueva conversación', onClick: () => openChat('') } },
    'Sin resultados': { variant: 'eyes', title: 'No encontramos nada', lines: ['Probemos con otras palabras', 'o revisa cómo lo escribiste.'] },
    Notificaciones: { icon: 'campana', title: 'Sin novedades por ahora', lines: ['Aquí te avisaremos sobre tus', 'pagos, trámites y reportes.'] },
    'Métodos de pago': { icon: 'tarjeta', title: 'Aún no tienes métodos de pago', lines: ['Agrega una tarjeta o Yappy', 'para pagar más rápido.'], cta: { label: 'Agregar método', onClick: () => setTweak('emptyPreview', 'Ninguno') } },
    Actividad: { icon: 'tramites', title: 'Todavía no hay actividad', lines: ['Cuando pagues, hagas un trámite', 'o reportes algo, aparecerá aquí.'], cta: { label: 'Hablar con Hati', onClick: () => openChat('') } },
    'Sin conexión': { variant: 'wifi', tone: 'warning', title: 'Sin conexión', lines: ['Revisa tu internet', 'e inténtalo de nuevo.'], cta: { label: 'Reintentar', onClick: () => setTweak('emptyPreview', 'Ninguno') } },
  };
  const previewES = t.emptyPreview !== 'Ninguno' ? EMPTY_PREVIEW[t.emptyPreview] : null;
  return (
    <window.AppShell>
      <div className="app-enter" style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      {offlineBar}
      {previewES ? (
        <window.HatiEmptyState {...previewES} />
      ) : screen === 'completa' ? (
        <window.CompletaDatosScreen profile={profile} loginMethod={loginMethod} verify={t.verify} onSave={(p) => { setProfile(p); if (p.name) setUser((u) => ({ ...u, name: (p.name || '').split(' ')[0] })); setTweak('completaDemo', 'Ninguno'); setScreen('chat'); }} onBack={() => { setTweak('completaDemo', 'Ninguno'); setScreen('chat'); }} />
      ) : screen === 'perfil' ? (
        <window.ProfileTab user={user} tone={user.tone} onTone={setTone} onOpenHistory={() => setScreen('historial')} verify={t.verify} onStartKyc={() => setKyc(true)} profile={profile} onSaveProfile={setProfile} onBack={() => setScreen('chat')} onCompletaDatos={() => startCompleta(loginMethod)} />
      ) : screen === 'notif' ? (
        <window.NotificationsScreen onBack={() => setScreen('chat')} onPay={() => openChat('¿Cuánto debo de mi placa?')} />
      ) : screen === 'historial' ? (
        <window.HistoryTab onOpenChat={openChat} onBack={() => setScreen('chat')} />
      ) : (
        <window.ChatThread
          key={chatKey}
          initialText={chat.initialText}
          userName={user.name}
          onSetName={(n) => setUser((u) => ({ ...u, name: n }))}
          tone={user.tone}
          onTone={setTone}
          onOpenVoice={() => setVoice(true)}
          onOpenMenu={() => setDrawerOpen(true)}
          onOpenNotif={() => setScreen('notif')}
          notifDot={t.notifDot}
        />
      )}
      {voice && <window.VoiceScreen onClose={() => setVoice(false)} onReply={(o) => { setVoice(false); openChat(o); }} />}
      {kyc && <window.KycFlow simulateError={t.kycError} onClose={() => setKyc(false)} onSubmitted={() => { setTweak('verify', 'En revisión'); setKyc(false); }} />}
      </div>
      <window.SideDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        userName={profile.name}
        avatar={profile.avatar}
        onInicio={newChat}
        onHistorial={() => { setScreen('historial'); setDrawerOpen(false); }}
        onProfile={() => { setScreen('perfil'); setDrawerOpen(false); }}
        onOpenReciente={(r) => openChat(RECIENTE_TEXT[r.intent] || r.titulo)}
      />
      {tweaks}
    </window.AppShell>
  );
}

Object.assign(window, { AppRoot });
