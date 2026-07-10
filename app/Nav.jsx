/* Hatillo — chrome chat-first: isotipo, drawer lateral y Notificaciones. */
const NV = window.HatilloDesignSystem_5bedaa;
const NDATA = window.HatilloData;

/* Isotipo oficial (tile azul con la casa "1"). */
function Isotipo({ size = 30, radius }) {
  return <img src="assets/hatillo-appicon-master.svg" alt="Hatillo" width={size} height={size} style={{ display: 'block', borderRadius: radius != null ? radius : Math.round(size * 0.28) }} />;
}
window.Isotipo = Isotipo;

const TINT = {
  b: { bg: 'var(--primary-surface)', fg: 'var(--blue)' },
  m: { bg: 'var(--success-surface)', fg: '#08795a' },
  w: { bg: 'var(--warning-surface)', fg: 'var(--warning)' },
};

/* ---------- Drawer lateral ---------- */
function SideDrawer({ open, onClose, userName, avatar, onInicio, onHistorial, onProfile, onOpenReciente }) {
  const AV = window.AvatarView;
  const HI = window.HatilloIcons || {};
  const recientes = (NDATA && NDATA.recientes) || [];
  const item = (glyph, label, onClick) => (
    <button onClick={onClick} className="hati-press" style={{ display: 'flex', alignItems: 'center', gap: 13, width: '100%', padding: '13px 14px', border: 'none', borderRadius: 'var(--r-md)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 15.5, fontWeight: 600, color: 'var(--ink)' }}>
      {glyph}{label}
    </button>
  );
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 120, pointerEvents: open ? 'auto' : 'none' }} aria-hidden={!open}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(14,27,43,.45)', opacity: open ? 1 : 0, transition: 'opacity .28s ease' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '82%', maxWidth: 340, background: 'var(--white)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', transform: open ? 'translateX(0)' : 'translateX(-102%)', transition: 'transform .3s cubic-bezier(.22,.61,.36,1)' }}>
        {/* header — el wordmark ya incluye el isotipo */}
        <div style={{ flex: 'none', display: 'flex', alignItems: 'center', padding: 'calc(env(safe-area-inset-top) + 18px) 18px 16px' }}>
          <img src="assets/hatillo-logo-azul.svg" alt="hatillo®" style={{ height: 26, width: 'auto', display: 'block' }} />
        </div>

        {/* nav principal */}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '4px 12px 12px' }}>
          {item(HI.Home ? <HI.Home size={22} color="var(--navy)" /> : <NV.Icon name="chat" size={22} color="var(--navy)" />, 'Inicio', onInicio)}
          {item(<NV.Icon name="historial" size={22} color="var(--navy)" />, 'Historial', onHistorial)}

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', padding: '18px 14px 8px' }}>Recientes</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recientes.map((r) => (
              <button key={r.id} onClick={() => onOpenReciente(r)} className="hati-press" style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', padding: '11px 14px', border: 'none', borderRadius: 'var(--r-md)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                <NV.Icon name="chat" size={18} color="var(--ink-soft)" />
                <span style={{ flex: 1, minWidth: 0, fontSize: 14.5, color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.titulo}</span>
                <span style={{ fontSize: 12, color: 'var(--concrete)', flex: 'none' }}>{r.time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* perfil fijo abajo */}
        <button onClick={onProfile} className="hati-press" style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px calc(env(safe-area-inset-bottom) + 16px)', borderTop: '1px solid var(--line)', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
          {AV ? <AV avatar={avatar} name={userName} size={40} bg="var(--primary-surface)" /> : null}
          <span style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>{userName || 'Vecino'}</div>
          </span>
          <NV.Icon name="volver" size={18} color="var(--concrete)" style={{ transform: 'scaleX(-1)' }} />
        </button>
      </div>
    </div>
  );
}
window.SideDrawer = SideDrawer;

/* ---------- Notificaciones ---------- */
function NotifRow({ n }) {
  const tint = TINT[n.tint] || TINT.b;
  return (
    <div className="hati-press" style={{ display: 'flex', gap: 13, padding: '14px', borderRadius: 'var(--r-md)', background: n.unread ? 'var(--primary-surface)' : 'transparent', alignItems: 'flex-start' }}>
      <span style={{ width: 40, height: 40, borderRadius: 'var(--r-sm)', background: tint.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><NV.Icon name={n.icon} size={20} color={tint.fg} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ flex: 1, fontWeight: 700, fontSize: 15, lineHeight: 1.35 }}>{n.titulo}</span>
          <span style={{ fontSize: 12, color: 'var(--concrete)', flex: 'none' }}>{n.time}</span>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '4px 0 0' }}>{n.detalle}</p>
      </div>
      {n.unread && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--blue)', flex: 'none', marginTop: 6 }} />}
    </div>
  );
}

function NotificationsScreen({ onBack, onPay }) {
  const N = (NDATA && NDATA.notificaciones) || { actividad: [], municipio: [] };
  const saldo = N.saldo;
  const sectionLabel = (t) => <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: '26px 4px 8px' }}>{t}</div>;
  return (
    <window.SubScreen title="Notificaciones" onBack={onBack}>
      {/* destacado: saldo pendiente */}
      {saldo && (
        <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow)', padding: 18, marginBottom: 4 }}>
          <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
            <span style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--warning-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><NV.Icon name="pagos" size={22} color="var(--warning)" /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-.01em', fontFamily: 'var(--font-heading)' }}>{saldo.titulo}</div>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '5px 0 0' }}>{saldo.detalle}</p>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <NV.Button variant="primary" fullWidth onClick={onPay}>Pagar ahora</NV.Button>
          </div>
        </div>
      )}

      {sectionLabel('Tu actividad')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {N.actividad.map((n) => <NotifRow key={n.id} n={n} />)}
      </div>

      {sectionLabel('Del Municipio')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 20 }}>
        {N.municipio.map((n) => <NotifRow key={n.id} n={n} />)}
      </div>
    </window.SubScreen>
  );
}
window.NotificationsScreen = NotificationsScreen;
