/* Hatillo — full-screen voice assistant with state machine:
   reposo → escuchando → procesando → respondiendo. Tap the orb to start/stop
   (never hold). The orb pulse + live transcription are real-time motion; the four
   states are delivered as frames. */
function ensureVoiceKf() {
  if (typeof document === 'undefined' || document.getElementById('hatillo-voice-kf')) return;
  const s = document.createElement('style');
  s.id = 'hatillo-voice-kf';
  s.textContent = `
    @keyframes hatilloEq { 0%,100%{height:12px} 50%{height:40px} }
    @keyframes hatilloPulse { 0%{box-shadow:0 0 0 0 rgba(4,214,156,.45),0 0 0 0 rgba(0,81,255,.35)} 100%{box-shadow:0 0 0 26px rgba(4,214,156,0),0 0 0 52px rgba(0,81,255,0)} }
    @keyframes hatilloSpinDot { 0%,80%,100%{opacity:.3;transform:translateY(0)} 40%{opacity:1;transform:translateY(-4px)} }
  `;
  document.head.appendChild(s);
}

function VoiceScreen({ onClose, onReply }) {
  const HR = window.HatilloDesignSystem_5bedaa;
  const [state, setState] = React.useState('reposo'); // reposo|escuchando|procesando|respondiendo
  const [words, setWords] = React.useState(0);
  const full = '¿Cuánto debo de mi placa 123456?'.split(' ');
  const timers = React.useRef([]);
  ensureVoiceKf();

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  React.useEffect(() => () => clearTimers(), []);

  function start() {
    clearTimers(); setWords(0); setState('escuchando');
    full.forEach((_, i) => timers.current.push(setTimeout(() => setWords(i + 1), 340 * (i + 1))));
    timers.current.push(setTimeout(() => stop(), 340 * full.length + 1000));
  }
  function stop() {
    clearTimers(); setState('procesando');
    timers.current.push(setTimeout(() => setState('respondiendo'), 1500));
  }
  function toggle() {
    if (state === 'escuchando') stop();
    else start();
  }

  const label = { reposo: 'Toca para hablar', escuchando: 'Escuchando… toca para detener', procesando: 'Procesando…', respondiendo: 'Hati responde' }[state];
  const transcript = full.slice(0, words).join(' ');
  const listening = state === 'escuchando';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--night)', color: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font)' }}>
      {/* close */}
      <div style={{ flex: 'none', display: 'flex', justifyContent: 'flex-end', padding: 16 }}>
        <button onClick={onClose} aria-label="Cerrar" style={{ width: 42, height: 42, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,.12)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HR.Icon name="cerrar" size={20} color="#fff" />
        </button>
      </div>

      {/* stage */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '0 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--concrete)' }}>{label}</div>

        {/* transcript / response */}
        <div style={{ minHeight: 96, maxWidth: 460, display: 'flex', alignItems: 'center' }}>
          {(state === 'escuchando' || state === 'procesando') && (
            <div style={{ fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, letterSpacing: '-.01em', lineHeight: 1.2 }}>
              {transcript || <span style={{ color: 'var(--concrete)' }}>…</span>}
            </div>
          )}
          {state === 'respondiendo' && (
            <div style={{ fontSize: 'clamp(18px,3vw,22px)', fontWeight: 600, lineHeight: 1.45 }}>
              Tienes un saldo pendiente de <b style={{ color: 'var(--mint)' }}>$45.00</b> por tu placa 123456. ¿Cómo quieres pagarlo?
            </div>
          )}
          {state === 'reposo' && (
            <div style={{ fontSize: 'clamp(18px,3vw,22px)', color: 'var(--concrete)', maxWidth: '20ch' }}>Pregúntame por un pago, un trámite o un reporte.</div>
          )}
        </div>

        {/* waveform (listening) */}
        <div style={{ height: 44, display: 'flex', alignItems: 'center', gap: 5, opacity: listening ? 1 : 0, transition: 'opacity .2s' }}>
          {[0, .1, .2, .3, .15, .05, .25, .12, .18].map((d, i) => (
            <span key={i} style={{ width: 5, borderRadius: 3, background: 'var(--mint)', height: 12, animation: listening ? `hatilloEq 1.1s ease-in-out ${d}s infinite` : 'none' }} />
          ))}
        </div>

        {/* orb */}
        <button onClick={toggle} aria-label={listening ? 'Detener' : 'Hablar'} style={{ width: 96, height: 96, borderRadius: '50%', border: 'none', cursor: 'pointer', background: state === 'reposo' ? 'rgba(0,81,255,.55)' : 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: listening ? 'hatilloPulse 1.4s ease-out infinite' : 'none', transition: 'background .2s' }}>
          {state === 'procesando' ? (
            <span style={{ display: 'flex', gap: 6 }}>
              {[0, .2, .4].map((d, i) => <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: '#fff', animation: `hatilloSpinDot 1.2s ${d}s infinite` }} />)}
            </span>
          ) : (
            <HR.Icon name="mic" size={38} color="#fff" strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* response quick replies */}
      <div style={{ flex: 'none', padding: '0 24px calc(28px + env(safe-area-inset-bottom))', display: 'flex', justifyContent: 'center', minHeight: 64 }}>
        {state === 'respondiendo' && (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Pagar con tarjeta', 'Pagar con Yappy'].map((o) => (
              <button key={o} onClick={() => onReply && onReply(o)} style={{ border: '1.5px solid rgba(255,255,255,.3)', background: 'rgba(255,255,255,.1)', color: '#fff', padding: '12px 18px', borderRadius: 'var(--r-pill)', fontSize: 15, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer' }}>{o}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.VoiceScreen = VoiceScreen;
