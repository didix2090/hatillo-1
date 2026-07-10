/* Hatillo — conversation thread + embedded flows (pago, trámite, reporte, FAQ). */
const HC = window.HatilloDesignSystem_5bedaa;
const DATA = window.HatilloData;

let _uid = 0;
const uid = () => 'm' + (++_uid);

/* BlurText — anima el saludo palabra por palabra (blur+fade+desliz desde arriba)
   en cascada. `parts`: [{text, color}]. Respeta prefers-reduced-motion via CSS. */
function BlurText({ parts, delay = 90, style }) {
  let wi = 0;
  return (
    <h1 style={{ fontSize: 'clamp(24px,4.6vw,32px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.22, margin: 0, textWrap: 'balance', ...style }}>
      {parts.map((p, pi) => p.text.split(' ').filter(Boolean).map((w) => {
        const idx = wi++;
        return <span key={pi + '-' + idx} className="blur-word" style={{ color: p.color, marginRight: '0.26em', animationDelay: (idx * delay) + 'ms' }}>{w}</span>;
      }))}
    </h1>
  );
}

/* Small Hati isotipo — house with a "1" in negative. */
function HatiMark({ size = 26 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: size * 0.32, background: 'var(--blue)', flex: 'none' }}>
      <svg viewBox="0 0 40 40" width={size * 0.66} height={size * 0.66} aria-hidden="true">
        <path d="M20 6.5 L34 17 V32.5 a2.2 2.2 0 0 1 -2.2 2.2 H8.2 A2.2 2.2 0 0 1 6 32.5 V17 Z" fill="#fff" />
        <text x="20.4" y="31.5" fontFamily="var(--font)" fontSize="17" fontWeight="800" fill="#0051FF" textAnchor="middle">1</text>
      </svg>
    </span>
  );
}

/* Static styled "map" placeholder with an adjustable pin. */
function MiniMap() {
  return (
    <div style={{ position: 'relative', height: 150, borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--line)', background: 'linear-gradient(0deg, #e9eef0 0 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#d5dce2 1px, transparent 1px), linear-gradient(90deg, #d5dce2 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: .8 }} />
      <div style={{ position: 'absolute', top: '52%', left: 0, right: 0, height: 12, background: '#cfd8de' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '38%', width: 10, background: '#cfd8de' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-100%)', color: 'var(--blue)' }}>
        <HC.Icon name="ubicacion" size={34} color="var(--blue)" strokeWidth={2} />
      </div>
    </div>
  );
}

function PaymentSheet({ saldo, onConfirm, onClose }) {
  const [method, setMethod] = React.useState('card');
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.4)' }} />
      <div style={{ position: 'relative', background: 'var(--white)', borderRadius: '24px 24px 0 0', padding: 'clamp(20px,4vw,28px)', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 18px' }} />
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{saldo.concepto}</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', margin: '4px 0 18px', fontFamily: 'var(--font-heading)' }}>{DATA.fmt(saldo.monto)}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {DATA.metodos.map((m) => {
            const on = method === m.id;
            return (
              <button key={m.id} onClick={() => setMethod(m.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', border: `1.5px solid ${on ? 'var(--blue)' : 'var(--line)'}`, borderRadius: 'var(--r-md)', background: on ? 'var(--primary-surface)' : 'var(--white)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                <HC.Icon name={m.id === 'yappy' ? 'placa' : 'tarjeta'} size={22} color="var(--navy)" />
                <span style={{ flex: 1 }}><b style={{ fontSize: 15 }}>{m.tipo}</b><div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{m.detalle}</div></span>
                <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${on ? 'var(--blue)' : 'var(--line)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{on && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--blue)' }} />}</span>
              </button>
            );
          })}
        </div>
        <HC.Button variant="primary" fullWidth onClick={() => onConfirm(method)}>Pagar {DATA.fmt(saldo.monto)}</HC.Button>
      </div>
    </div>
  );
}

function AttachSheet({ onClose, onCamera, onFile, onPhoto }) {
  const HI = window.HatilloIcons || {};
  const row = (Ic, title, sub, onClick) => (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '13px 14px', border: 'none', borderRadius: 'var(--r-md)', background: 'var(--white)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
      <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{Ic ? <Ic size={22} color="var(--blue)" /> : null}</span>
      <span style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 15 }}>{title}</div><div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{sub}</div></span>
    </button>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.4)' }} />
      <div style={{ position: 'relative', background: 'var(--white)', borderRadius: '24px 24px 0 0', padding: '18px 16px calc(20px + env(safe-area-inset-bottom))', boxShadow: 'var(--shadow-lg)', maxWidth: 520, width: '100%', margin: '0 auto' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--line)', margin: '0 auto 14px' }} />
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', padding: '0 4px 6px' }}>Agregar</div>
        {row(HI.Camera, 'Abrir cámara', 'Toma una foto ahora', onCamera)}
        {row(HI.Clip, 'Adjuntar archivo', 'PDF, documentos y más', onFile)}
        {row(HI.Picture, 'Subir una foto', 'Desde tu galería', onPhoto)}
      </div>
    </div>
  );
}

function ChatThread({ initialText, userName, onSetName, onBack, tone, onTone, onOpenVoice, onOpenMenu, onOpenNotif, notifDot }) {
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [awaiting, setAwaiting] = React.useState(null); // 'name' | 'cedula' | 'direccion'
  const [quick, setQuick] = React.useState(null); // {options, handler}
  const [attachOpen, setAttachOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState({});
  const [tramite, setTramite] = React.useState({});
  const [paidIds, setPaidIds] = React.useState([]);
  const [arrendPaid, setArrendPaid] = React.useState(false);
  const arrendTries = React.useRef(0);
  const scrollerApi = React.useRef(null);
  const started = React.useRef(false);

  const push = (m) => setMessages((x) => [...x, { id: uid(), ...m }]);
  const say = (cb, delay = 1000) => { setTyping(true); setQuick(null); setTimeout(() => { setTyping(false); cb(); }, delay); };

  React.useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!userName) {
      say(() => { push({ from: 'assistant', kind: 'text', text: '¡Hola! Soy tu asistente del Municipio de Panamá. Antes de empezar, ¿cómo te digo?' }); setAwaiting('name'); }, 700);
    } else {
      if (initialText) { push({ from: 'user', kind: 'text', text: initialText }); route(initialText); }
      // sin texto inicial: se deja el estado vacío (saludo centrado); la conversación
      // arranca cuando el usuario envía su primer mensaje.
    }
  }, []);

  function greet() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: `¿En qué te ayudo hoy, ${userName || ''}?`.replace(' ?', '?') });
    }, 600);
  }

  function submit(text) {
    if (!text || !text.trim()) return;
    push({ from: 'user', kind: 'text', text });
    if (awaiting === 'name') {
      const name = text.trim().split(' ')[0];
      onSetName(name); setAwaiting(null);
      say(() => { push({ from: 'assistant', kind: 'text', text: `¡Un gusto, ${name}! Ya te reconozco. Cuéntame, ¿cómo te ayudo hoy?` }); }, 900);
      return;
    }
    if (awaiting === 'cedula') { setTramite((t) => ({ ...t, cedula: text })); setAwaiting(null); askActividad(); return; }
    if (awaiting === 'direccion') { setTramite((t) => ({ ...t, direccion: text })); setAwaiting(null); finishTramite(text); return; }
    if (awaiting && awaiting.indexOf('arrend_') === 0) { setAwaiting(null); handleArrendSearch(text); return; }
    route(text);
  }

  function route(text) {
    const t = text.toLowerCase();
    // Small talk / saludo — respuesta cálida directa, sin recuadros ni chips.
    if (/^\s*(hola|buenas|buenos d[ií]as|buenas tardes|buenas noches|hey|qué tal|que tal|holi|saludos)\b/.test(t) || /^\s*(gracias|muchas gracias|ok|vale|perfecto)\s*$/.test(t)) {
      say(() => { push({ from: 'assistant', kind: 'text', text: '¡Hola! ¿Cómo estás? ¡Cuéntame cómo te ayudo hoy!' }); }, 700);
      return;
    }
    if (/arrend|cementerio|nicho|cripta|funerar|b\u00f3veda|boveda|difunt/.test(t)) {
      if (/familiar|de un|otra persona|mi (mam|pap|abuel|t\u00eda|tia|herman|esposo|esposa|suegr|t\u00edo|tio)/.test(t)) return flowArrendFamiliar();
      return flowArrendPropio();
    }
    if (/placa|debo|saldo|pagar|ibi|circulaci/.test(t)) return flowPago();
    if (/paz y salvo/.test(t)) return flowPazSalvo();
    if (/report|hueco|calle|da\u00f1|foto/.test(t)) return flowReporteStart();
    if (/tr\u00e1mite|tramite|aviso de operaci|operaci/.test(t)) return flowTramiteStart();
    if (/pregunta|faq|frecuent|ayuda/.test(t)) return flowFaq();
    say(() => { push({ from: 'assistant', kind: 'text', text: 'Puedo ayudarte con pagos, trámites y reportes de tu calle. Dime qué necesitas y lo resolvemos.', feedback: true }); });
  }

  /* Pago — tappable choices, no sheet */
  function flowPago() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Revisé tu registro. Estos son tus saldos pendientes 👇' });
      push({ from: 'assistant', kind: 'saldos' });
      const unpaid = DATA.saldos.filter((s) => !paidIds.includes(s.id));
      if (unpaid.length > 1) {
        say(() => {
          push({ from: 'assistant', kind: 'text', text: '¿Cuál quieres pagar primero?' });
          setQuick({ align: 'right', options: unpaid.map((s) => `${s.ref} · ${DATA.fmt(s.monto)}`), handler: (v) => { push({ from: 'user', kind: 'text', text: v }); const s = unpaid.find((x) => v.includes(x.ref)) || unpaid[0]; askMethod(s); } });
        }, 700);
      } else {
        askMethod(unpaid[0] || DATA.saldos[0]);
      }
    }, 1100);
  }
  function askMethod(saldo) {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: `Perfecto. ¿Cómo quieres pagar ${saldo.ref} (${DATA.fmt(saldo.monto)})?` });
      setQuick({ align: 'right', options: ['Pagar con tarjeta', 'Pagar con Yappy'], handler: (v) => { push({ from: 'user', kind: 'text', text: v }); doPay(saldo, /yappy/i.test(v) ? 'yappy' : 'card'); } });
    }, 700);
  }
  function doPay(saldo, method) {
    setPaidIds((p) => [...p, saldo.id]);
    say(() => {
      push({ from: 'assistant', kind: 'text', text: '¡Listo! Tu pago se procesó correctamente.' });
      push({ from: 'assistant', kind: 'receipt', saldo, method });
      push({ from: 'assistant', kind: 'toast', text: 'Guardé el comprobante en tu historial.' });
      askResolved();
    }, 1200);
  }

  /* Paz y Salvo */
  function flowPazSalvo() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Estás al día con el Municipio, así que generé tu Paz y Salvo al instante.' });
      push({ from: 'assistant', kind: 'domain', data: { icon: 'pazysalvo', tint: 'm', title: 'Paz y Salvo municipal', meta: 'Constancia #PS-7781', badge: 'done', badgeText: 'Emitido', rowLabel: 'Válido hasta', rowValue: '31 dic 2026' } });
      askResolved();
    }, 1100);
  }

  /* Trámite */
  function flowTramiteStart() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Con gusto. ¿Qué trámite quieres iniciar?' });
      setQuick({ align: 'right', options: DATA.tramiteTipos, handler: (v) => { push({ from: 'user', kind: 'text', text: v }); setTramite({ tipo: v }); askCedula(); } });
    }, 1000);
  }
  function askCedula() { say(() => { push({ from: 'assistant', kind: 'text', text: 'Perfecto. Primero, ¿cuál es tu número de cédula?' }); setAwaiting('cedula'); }, 700); }
  function askActividad() {
    say(() => { push({ from: 'assistant', kind: 'text', text: 'Gracias. ¿Qué tipo de actividad realizas?' }); setQuick({ align: 'right', options: DATA.actividades, handler: (t) => { setTramite((x) => ({ ...x, actividad: t })); push({ from: 'user', kind: 'text', text: t }); askDireccion(); } }); }, 700);
  }
  function askDireccion() { say(() => { push({ from: 'assistant', kind: 'text', text: 'Muy bien. Por último, ¿cuál es la dirección del local?' }); setAwaiting('direccion'); }, 700); }
  function finishTramite() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Envié tu solicitud. Aquí está tu trámite; te aviso cuando cambie de estado.' });
      push({ from: 'assistant', kind: 'domain', data: { icon: 'tramites', tint: 'b', title: (tramite.tipo || 'Aviso de Operación'), meta: 'Solicitud #AO-20984', badge: 'processing', badgeText: 'En proceso', rowLabel: 'Actualizado', rowValue: 'Hace un momento' } });
      askResolved();
    }, 1200);
  }

  /* Reporte */
  function flowReporteStart() {
    say(() => { push({ from: 'assistant', kind: 'text', text: 'Con gusto. Adjunta una foto del problema y lo analizo por ti.' }); setQuick({ options: ['📷 Adjuntar foto'], handler: () => attachPhoto() }); }, 900);
  }
  function attachPhoto() {
    push({ from: 'user', kind: 'photo' });
    say(() => {
      push({ from: 'assistant', kind: 'analyze' });
      setQuick({ options: ['Sí, es correcto', 'Tomar otra foto'], handler: (t) => { push({ from: 'user', kind: 'text', text: t }); if (/correcto/i.test(t)) confirmUbicacion(); else flowReporteStart(); } });
    }, 1500);
  }
  function confirmUbicacion() {
    say(() => { push({ from: 'assistant', kind: 'text', text: 'Confirma la ubicación en el mapa para enviar tu reporte.' }); push({ from: 'assistant', kind: 'map' }); setQuick({ options: ['Confirmar ubicación'], handler: () => finishReporte() }); }, 900);
  }
  function finishReporte() {
    push({ from: 'user', kind: 'text', text: 'Confirmar ubicación' });
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Reporte enviado. Ya está en proceso y una cuadrilla lo atenderá.' });
      push({ from: 'assistant', kind: 'domain', data: { icon: 'reportes', tint: 'm', title: 'Deterioro en la vía', meta: 'Calle 50 · Reporte #R-4471', badge: 'processing', badgeText: 'En proceso', rowLabel: 'Cuadrilla', rowValue: 'Asignada' } });
      push({ from: 'assistant', kind: 'toast', text: 'Te avisaremos cuando lo resuelvan.' });
      askResolved();
    }, 1200);
  }

  /* FAQ */
  function flowFaq() { say(() => { push({ from: 'assistant', kind: 'text', text: 'Estas son las preguntas más frecuentes:' }); push({ from: 'assistant', kind: 'faqs' }); }, 800); }

  /* Funerarias — arrendamientos de cementerio. Registro respetuoso y sereno. */
  function flowArrendPropio() {
    setArrendPaid(false);
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Revisé el registro; este es el arrendamiento a tu nombre.' });
      push({ from: 'assistant', kind: 'arrendamiento', data: DATA.arrendamiento });
    }, 1100);
  }
  function flowArrendFamiliar() {
    setArrendPaid(false);
    arrendTries.current = 0;
    say(() => {
      push({ from: 'assistant', kind: 'text', text: 'Con gusto te ayudo con el arrendamiento de un familiar. ¿Con qué dato lo buscamos?' });
      setQuick({ align: 'right', options: ['Nombre del difunto', 'Cédula', 'Ubicación'], handler: (v) => { push({ from: 'user', kind: 'text', text: v }); askArrendDato(v); } });
    }, 1000);
  }
  function askArrendDato(tipo) {
    const kind = /c\u00e9dula|cedula/i.test(tipo) ? 'cedula' : /ubicaci/i.test(tipo) ? 'ubicacion' : 'nombre';
    const prompt = kind === 'cedula'
      ? 'Escribe la cédula del titular del contrato.'
      : kind === 'ubicacion'
        ? 'Indica la ubicación: pabellón, fila y nicho.'
        : 'Escribe el nombre completo del difunto, tal como aparece en el registro.';
    say(() => { push({ from: 'assistant', kind: 'text', text: prompt }); setAwaiting('arrend_' + kind); }, 700);
  }
  function handleArrendSearch() {
    arrendTries.current += 1;
    if (arrendTries.current < 2) {
      say(() => {
        push({ from: 'assistant', kind: 'warn', text: 'No encontré ese titular con ese dato. A veces es una tilde o una letra de diferencia; revísalo con calma y volvemos a intentar.' });
        setQuick({ options: ['Reintentar', 'Buscar por cédula', 'Por ubicación'], handler: (v) => { push({ from: 'user', kind: 'text', text: v }); if (/c\u00e9dula|cedula/i.test(v)) askArrendDato('Cédula'); else if (/ubicaci/i.test(v)) askArrendDato('Ubicación'); else askArrendDato('Nombre del difunto'); } });
      }, 1200);
    } else {
      say(() => {
        push({ from: 'assistant', kind: 'text', text: 'La encontré. Este es el arrendamiento a su nombre.' });
        push({ from: 'assistant', kind: 'arrendamiento', data: DATA.arrendamientoFamiliar });
      }, 1300);
    }
  }
  function payArrend(method, data) {
    if (arrendPaid) return;
    setArrendPaid(true);
    setQuick(null);
    push({ from: 'user', kind: 'text', text: method === 'yappy' ? 'Pagar con Yappy' : 'Pagar con tarjeta' });
    say(() => {
      push({ from: 'assistant', kind: 'toast', text: 'El arrendamiento quedó al día.' });
      push({ from: 'assistant', kind: 'arrendReceipt', data, method });
      push({ from: 'assistant', kind: 'toast', text: 'Guardé el comprobante en tu historial.' });
      say(() => push({ from: 'assistant', kind: 'text', text: `Te avisaré antes del próximo vencimiento (periodo ${data.proximo || '2027'}). Aquí estaré cuando me necesites.` }), 1000);
    }, 1200);
  }

  /* Proactive close + feedback (once per task) */
  function askResolved() {
    say(() => {
      push({ from: 'assistant', kind: 'text', text: '¿Resolví lo que necesitabas?' });
      setQuick({ align: 'right', options: ['Sí, gracias', 'Necesito más ayuda'], handler: (v) => { push({ from: 'user', kind: 'text', text: v }); if (/necesito/i.test(v)) greet(); else say(() => push({ from: 'assistant', kind: 'text', text: 'Gracias por tu opinión 🙌 Aquí estaré cuando me necesites.' }), 600); } });
    }, 900);
  }

  /* Attach (+) menu */
  function onAttachMedia() { setAttachOpen(false); attachPhoto(); }
  function onAttachFile() {
    setAttachOpen(false);
    push({ from: 'user', kind: 'file', name: 'documento.pdf', size: '240 KB' });
    say(() => { push({ from: 'assistant', kind: 'text', text: 'Recibí tu archivo y lo adjunté a tu solicitud. ¿Algo más?' }); }, 900);
  }

  const wide = window.useIsWide(900);
  const isEmpty = !!userName && messages.length === 0 && !typing && !awaiting && !quick;

  return (
    <>
      {/* top bar: isotipo (menú) · Hati · campana (notificaciones) — sin fondo, parte de la pantalla */}
      <div style={{ flex: 'none' }}>
        <div style={{ width: '100%', maxWidth: 860, margin: '0 auto', padding: 'calc(env(safe-area-inset-top) + 8px) clamp(12px,4vw,20px) 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={onOpenMenu} aria-label="Abrir menú" className="hati-press" style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 2, display: 'flex', borderRadius: 10 }}><window.Isotipo size={34} /></button>
          <div style={{ flex: 1, fontWeight: 700, fontSize: 17, letterSpacing: '-.01em' }}>Hati</div>
          <button onClick={onOpenNotif} aria-label="Notificaciones" className="hati-press" style={{ position: 'relative', width: 42, height: 42, borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <HC.Icon name="alertas" size={23} color="var(--navy)" />
            {notifDot && <span style={{ position: 'absolute', top: 7, right: 8, width: 12, height: 12, borderRadius: '50%', background: '#C42A2E', border: '2px solid var(--white)' }} />}
          </button>
        </div>
      </div>

      {/* messages */}
      {isEmpty ? (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px clamp(28px,7vw,40px)' }}>
          <div className="hati-rise" style={{ maxWidth: '18ch' }}>
            <BlurText parts={[
              { text: '¡Hola!', color: 'var(--ink)' },
              { text: 'Preguntar no cuesta nada, dímelo.', color: '#0051FF' },
            ]} />
          </div>
        </div>
      ) : (
      <window.MessageScroller
        autoScroll
        defaultScrollPosition="last-anchor"
        previousItemPeek={64}
        preserveScrollOnPrepend
        apiRef={scrollerApi}
        ariaLabel="Conversación con Hati"
        innerStyle={{ width: '100%', maxWidth: 820, margin: '0 auto', padding: 'clamp(16px,3vw,28px) clamp(12px,4vw,28px) 12px', display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <HC.ChatBubble from="system">Hoy · 9:41</HC.ChatBubble>
        {messages.map((m, i) => {
          const showAvatar = m.from === 'assistant' && (i === 0 || messages[i - 1].from !== 'assistant');
          return (
            <window.MessageScroller.Item key={m.id} id={m.id} scrollAnchor={m.from === 'user'}>
              <Message m={m} showAvatar={showAvatar} feedback={feedback} setFeedback={setFeedback} paidIds={paidIds} onCardAction={payArrend} arrendPaid={arrendPaid} />
            </window.MessageScroller.Item>
          );
        })}
        {typing && <HC.TypingIndicator />}
        {quick && !typing && <div style={{ alignSelf: 'flex-start', maxWidth: '100%' }}><HC.QuickReplies options={quick.options} align="left" onPick={(v) => quick.handler(v)} /></div>}
      </window.MessageScroller>
      )}

      {/* input */}
      <ChatInput onSend={submit} onVoice={onOpenVoice} onAttach={() => setAttachOpen(true)} placeholder={awaiting === 'cedula' ? 'Número de cédula…' : awaiting === 'direccion' ? 'Dirección del local…' : null} />

      {attachOpen && <AttachSheet onClose={() => setAttachOpen(false)} onCamera={onAttachMedia} onPhoto={onAttachMedia} onFile={onAttachFile} />}
    </>
  );
}

function Message({ m, showAvatar, feedback, setFeedback, paidIds, onCardAction, arrendPaid }) {
  const D = window.HatilloData;
  const AV = 30, GAP = 8;
  if (m.kind === 'text') {
    if (m.from === 'assistant') {
      return (
        <>
          <div style={{ alignSelf: 'flex-start', maxWidth: '92%', fontSize: 16, lineHeight: 1.55, color: 'var(--ink)' }}>{m.text}</div>
          {m.feedback && <div><HC.FeedbackButtons value={feedback[m.id] || null} onVote={(v) => setFeedback((f) => ({ ...f, [m.id]: v }))} /></div>}
        </>
      );
    }
    return <HC.ChatBubble from={m.from}>{m.text}</HC.ChatBubble>;
  }
  if (m.kind === 'photo') {
    return (
      <div style={{ alignSelf: 'flex-end', maxWidth: '60%', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)' }}>
        <div style={{ height: 120, background: 'linear-gradient(135deg,#3a4a5e,#0E1B2B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><HC.Icon name="imagen" size={34} color="rgba(255,255,255,.6)" /></div>
        <div style={{ background: 'var(--blue)', color: '#fff', fontSize: 12, padding: '9px 14px', display: 'flex', justifyContent: 'space-between' }}><span>hueco-calle50.jpg</span><span>1.2 MB</span></div>
      </div>
    );
  }
  if (m.kind === 'file') {
    const Clip = (window.HatilloIcons || {}).Clip;
    return (
      <div style={{ alignSelf: 'flex-end', maxWidth: '70%', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--blue)', color: '#fff', borderRadius: '18px 18px 6px 18px', padding: '12px 14px' }}>
        <span style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{Clip ? <Clip size={18} color="#fff" /> : null}</span>
        <span><div style={{ fontWeight: 700, fontSize: 14 }}>{m.name || 'documento.pdf'}</div><div style={{ fontSize: 12, opacity: .85 }}>{m.size || '240 KB'}</div></span>
      </div>
    );
  }
  if (m.kind === 'saldos') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignSelf: 'flex-start', width: '100%', maxWidth: 420 }}>
        {D.saldos.map((s) => {
          const paid = paidIds.includes(s.id);
          return (
            <HC.PaymentCard key={s.id} label={s.concepto} amount={D.fmt(s.monto)} status={null} meta={`${s.ref} · Vence ${s.vence}`} style={{ maxWidth: 420, opacity: paid ? .6 : 1 }}
              badge={paid ? <HC.Badge status="paid">Pagado</HC.Badge> : <HC.Badge status="pending">Pendiente</HC.Badge>} />
          );
        })}
      </div>
    );
  }
  if (m.kind === 'receipt') {
    return <HC.Receipt subtitle={`${m.saldo.concepto} · ${m.saldo.ref}`} lines={[{ k: 'Monto', v: D.fmt(m.saldo.monto) }, { k: 'Método', v: m.method === 'yappy' ? 'Yappy' : 'Tarjeta •••• 4821' }]} total={D.fmt(m.saldo.monto)} footer="Ref. TXN-8830012 · 07 jul 2026" style={{ maxWidth: 420 }} />;
  }
  if (m.kind === 'toast') return <HC.Toast tone="mint" icon="check">{m.text}</HC.Toast>;
  if (m.kind === 'domain') {
    const d = m.data;
    return <HC.DomainCard icon={d.icon} tint={d.tint} title={d.title} meta={d.meta} badge={<HC.Badge status={d.badge}>{d.badgeText}</HC.Badge>} rowLabel={d.rowLabel} rowValue={d.rowValue} style={{ maxWidth: 420 }} />;
  }
  if (m.kind === 'faqs') return <div style={{ width: '100%', maxWidth: 420 }}><HC.Accordion items={D.faqs} /></div>;
  if (m.kind === 'analyze') {
    return (
      <div style={{ width: '100%', maxWidth: 420, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 18, alignSelf: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}><HC.Icon name="info" size={16} color="var(--blue)" />Análisis automático</div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>Deterioro en la vía pública</div>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '4px 0 0' }}>Detecté un hueco en el asfalto de tamaño medio. ¿Está correcta la información?</p>
      </div>
    );
  }
  if (m.kind === 'map') return <div style={{ width: '100%', maxWidth: 420, alignSelf: 'flex-start' }}><MiniMap /></div>;
  if (m.kind === 'warn') {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, alignSelf: 'flex-start', maxWidth: '90%' }}>
        <span style={{ width: 30, flex: 'none' }} />
        <div style={{ display: 'flex', gap: 10, background: '#FFF4E1', color: '#9A5B00', border: '1px solid rgba(154,91,0,.20)', borderRadius: '20px 20px 20px 6px', padding: '13px 15px', fontSize: 14.5, lineHeight: 1.5 }}>
          <span style={{ flex: 'none', marginTop: 1 }}><HC.Icon name="advertencia" size={18} color="#9A5B00" /></span>
          <span>{m.text}</span>
        </div>
      </div>
    );
  }
  if (m.kind === 'arrendamiento') {
    const a = m.data;
    const badge = a.estado === 'paid'
      ? <HC.Badge status="paid">Al día</HC.Badge>
      : a.estado === 'overdue'
        ? <HC.Badge status="overdue">Vencido</HC.Badge>
        : <HC.Badge status="pending">Pendiente</HC.Badge>;
    const row = (icon, eyebrow, lines) => (
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0' }}>
        <span style={{ width: 34, height: 34, borderRadius: 'var(--r-sm)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}><HC.Icon name={icon} size={18} color="var(--blue)" /></span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 3 }}>{eyebrow}</div>
          {lines.map((l, i) => <div key={i} style={{ fontSize: 14.5, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--ink)' : 'var(--ink-soft)', lineHeight: 1.45 }}>{l}</div>)}
        </div>
      </div>
    );
    return (
      <div style={{ width: '100%', maxWidth: 440, alignSelf: 'flex-start', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow)', padding: 'clamp(16px,4vw,20px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', maxWidth: '62%' }}>{a.concepto}</div>
          {badge}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, margin: '8px 0 2px' }}>
          <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', fontFamily: 'var(--font-heading)' }}>{D.fmt(a.monto)}</span>
          <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>· periodo {a.periodo}</span>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', marginTop: 12 }}>
          {row('ubicacion', 'Espacio', [a.espacio])}
          <div style={{ borderTop: '1px dashed var(--line)' }} />
          {row('perfil', 'Difunto', [a.difunto.nombre, a.difunto.inhumacion, a.difunto.resolucion])}
          <div style={{ borderTop: '1px dashed var(--line)' }} />
          {row('tramites', 'Contrato', [a.contrato.vigencia, a.contrato.titular])}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          <HC.Button variant="primary" fullWidth disabled={arrendPaid} onClick={() => onCardAction && onCardAction('card', a)}>Pagar con tarjeta</HC.Button>
          <HC.Button variant="secondary" fullWidth disabled={arrendPaid} onClick={() => onCardAction && onCardAction('yappy', a)}>Pagar con Yappy</HC.Button>
        </div>
      </div>
    );
  }
  if (m.kind === 'arrendReceipt') {
    const a = m.data;
    return <HC.Receipt subtitle={`${a.concepto} · ${a.ref}`} lines={[{ k: 'Espacio', v: a.espacio }, { k: 'Método', v: m.method === 'yappy' ? 'Yappy' : 'Tarjeta •••• 4821' }]} total={D.fmt(a.monto)} footer="Ref. TXN-8830147 · 08 jul 2026" style={{ maxWidth: 440 }} />;
  }
  return null;
}

const PH_EXAMPLES = [
  '¿Cuál es mi saldo pendiente?',
  'Quiero reportar un hueco.',
  '¿Cómo saco mi Paz y Salvo?',
  '¿Cuánto debo de mi placa?',
  'Quiero pagar mi IBI.',
];

/* Placeholder rotativo: el strip se desplaza hacia arriba (actual sale, siguiente
   entra desde abajo) cada ~2.5s en loop. Se detiene al enfocar o escribir.
   Con prefers-reduced-motion muestra un ejemplo fijo, sin animación. */
function RotatingPlaceholder({ paused }) {
  const reduce = React.useRef(typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;
  const LH = 22;
  const [idx, setIdx] = React.useState(0);
  const [anim, setAnim] = React.useState(true);
  const strip = React.useMemo(() => [...PH_EXAMPLES, PH_EXAMPLES[0]], []);

  React.useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 2500);
    return () => clearTimeout(t);
  }, [idx, paused, reduce]);

  React.useEffect(() => {
    if (reduce) return;
    if (idx === PH_EXAMPLES.length) {
      const t = setTimeout(() => { setAnim(false); setIdx(0); }, 480);
      return () => clearTimeout(t);
    }
    setAnim(true);
  }, [idx, reduce]);

  if (reduce) {
    return <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--concrete)', fontSize: 15, pointerEvents: 'none', whiteSpace: 'nowrap' }}>{PH_EXAMPLES[0]}</span>;
  }
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', height: LH, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{ transform: `translateY(${-idx * LH}px)`, transition: anim ? 'transform .48s cubic-bezier(.22,.61,.36,1)' : 'none' }}>
        {strip.map((p, i) => (
          <div key={i} style={{ height: LH, lineHeight: LH + 'px', color: 'var(--concrete)', fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p}</div>
        ))}
      </div>
    </div>
  );
}

function ChatInput({ onSend, onVoice, onAttach, placeholder }) {
  const [text, setText] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef(null);
  const send = () => { if (text.trim()) { onSend(text); setText(''); if (inputRef.current) inputRef.current.blur(); } };
  const rotating = !placeholder; // placeholder fijo solo en estados "awaiting"
  const showRotator = rotating && !text && !focused;
  return (
    <div style={{ flex: 'none' }}>
      <div style={{ width: '100%', maxWidth: 820, margin: '0 auto', padding: '10px clamp(12px,4vw,28px) clamp(12px,2vw,18px)' }}>
        <div className="chat-input">
          <button onClick={onAttach} aria-label="Agregar" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'var(--fog)', color: 'var(--navy)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><HC.Icon name="mas" size={22} color="var(--navy)" /></button>
          <div style={{ position: 'relative', flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
            {showRotator && <RotatingPlaceholder paused={focused || !!text} />}
            <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }} placeholder={rotating ? '' : placeholder} aria-label="Escribe tu mensaje" style={{ flex: 1, border: 'none', outline: 'none', font: 'inherit', fontSize: 16, minWidth: 0, background: 'transparent' }} />
          </div>
          {text.trim()
            ? <HC.IconButton icon="enviar" tone="send" title="Enviar" size={40} onClick={send} />
            : <button className="mic-btn" onClick={onVoice} aria-label="Voz" title="Voz" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'background .2s ease, color .2s ease' }}><HC.Icon name="mic" size={22} color="currentColor" /></button>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ChatThread });
