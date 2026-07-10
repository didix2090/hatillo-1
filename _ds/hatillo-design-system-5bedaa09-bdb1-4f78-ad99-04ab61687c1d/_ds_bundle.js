/* @ds-bundle: {"format":4,"namespace":"HatilloDesignSystem_5bedaa","components":[{"name":"Accordion","sourcePath":"components/cards/Accordion.jsx"},{"name":"DomainCard","sourcePath":"components/cards/DomainCard.jsx"},{"name":"PaymentCard","sourcePath":"components/cards/PaymentCard.jsx"},{"name":"Receipt","sourcePath":"components/cards/Receipt.jsx"},{"name":"ServiceTile","sourcePath":"components/cards/ServiceTile.jsx"},{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"FeedbackButtons","sourcePath":"components/chat/FeedbackButtons.jsx"},{"name":"QuickReplies","sourcePath":"components/chat/QuickReplies.jsx"},{"name":"ToneToggle","sourcePath":"components/chat/ToneToggle.jsx"},{"name":"TypingIndicator","sourcePath":"components/chat/TypingIndicator.jsx"},{"name":"VoiceState","sourcePath":"components/chat/VoiceState.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"HATILLO_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"COUNTRIES","sourcePath":"components/forms/CountrySelector.jsx"},{"name":"CountrySelector","sourcePath":"components/forms/CountrySelector.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"OtpInput","sourcePath":"components/forms/OtpInput.jsx"},{"name":"PhoneField","sourcePath":"components/forms/PhoneField.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"}],"sourceHashes":{"components/cards/Accordion.jsx":"7b7b91c3a4d2","components/cards/DomainCard.jsx":"7cc1deff9aaa","components/cards/PaymentCard.jsx":"21215433dcd9","components/cards/Receipt.jsx":"34ce380fd3a2","components/cards/ServiceTile.jsx":"52f7493dcf11","components/chat/ChatBubble.jsx":"7f20af7eafa8","components/chat/FeedbackButtons.jsx":"a36874cd66b7","components/chat/QuickReplies.jsx":"283eebf6a9b9","components/chat/ToneToggle.jsx":"55662bc0acb2","components/chat/TypingIndicator.jsx":"53da0ae2e864","components/chat/VoiceState.jsx":"b311ee128658","components/core/Badge.jsx":"58005f165fb1","components/core/Button.jsx":"d5860a9af896","components/core/Chip.jsx":"3dc22e6520f2","components/core/Icon.jsx":"60cb2909bb61","components/core/IconButton.jsx":"8107c30b5dd1","components/feedback/Alert.jsx":"5aa75ec81035","components/feedback/EmptyState.jsx":"2871b67d5859","components/feedback/Toast.jsx":"87659e6f69af","components/forms/CountrySelector.jsx":"6469c3f6e558","components/forms/Field.jsx":"37d3a9e35c2d","components/forms/OtpInput.jsx":"0d1fcb16f6c6","components/forms/PhoneField.jsx":"4be9c3468ee1","components/navigation/BottomNav.jsx":"fb4a49d6ce18","ui_kits/asistente/App.jsx":"9e5781b42ac2","ui_kits/asistente/AppShell.jsx":"beb66aeff346","ui_kits/asistente/Auth.jsx":"0791c3634247","ui_kits/asistente/ChatThread.jsx":"842334bc2602","ui_kits/asistente/Shell.jsx":"f35679ac3cc2","ui_kits/asistente/data.jsx":"3aa0176d4ba3","ui_kits/asistente/icons.jsx":"b7e7a9f2d5ba","ui_kits/asistente/tweaks-panel.jsx":"6591467622ed","ui_kits/asistente/voice.jsx":"87166d6bc47c"},"inlinedExternals":[],"unexposedExports":[{"name":"detectCountry","sourcePath":"components/forms/CountrySelector.jsx"}]} */

(() => {

const __ds_ns = (window.HatilloDesignSystem_5bedaa = window.HatilloDesignSystem_5bedaa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — FAQ list of expandable items.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: i < items.length - 1 ? '1px solid var(--line)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 18px',
        fontWeight: 600,
        fontSize: 15,
        fontFamily: 'inherit',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        color: 'var(--ink)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--blue)',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1
      }
    }, isOpen ? '\u2013' : '+')), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        padding: '0 18px 16px',
        fontSize: 14,
        color: 'var(--ink-soft)',
        lineHeight: 1.55,
        margin: 0
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ChatBubble — assistant / user / system message bubble.
 */
function ChatBubble({
  from = 'assistant',
  children,
  style = {},
  ...rest
}) {
  if (from === 'system') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        alignSelf: 'center',
        background: 'transparent',
        border: '1px dashed var(--line)',
        color: 'var(--ink-soft)',
        fontSize: 13,
        borderRadius: 'var(--r-pill)',
        padding: '8px 16px',
        ...style
      }
    }, rest), children);
  }
  const isUser = from === 'user';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: '82%',
      padding: '14px 18px',
      fontSize: 15,
      lineHeight: 1.45,
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      background: isUser ? 'var(--blue)' : 'var(--fog)',
      color: isUser ? 'var(--white)' : 'var(--ink)',
      borderRadius: isUser ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
      borderLeft: isUser ? 'none' : '3px solid var(--mint)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/QuickReplies.jsx
try { (() => {
/**
 * QuickReplies — small pill suggestions shown under an assistant reply.
 */
function QuickReplies({
  options = [],
  onPick,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignSelf: align === 'right' ? 'flex-end' : 'flex-start',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, options.map(o => {
    const label = typeof o === 'string' ? o : o.label;
    const val = typeof o === 'string' ? o : o.value ?? o.label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onPick && onPick(val),
      style: {
        border: '1.5px solid var(--primary-border)',
        background: 'var(--primary-surface)',
        color: 'var(--primary)',
        padding: '9px 15px',
        borderRadius: 'var(--r-pill)',
        fontSize: 13.5,
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: 'pointer'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { QuickReplies });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/QuickReplies.jsx", error: String((e && e.message) || e) }); }

// components/chat/ToneToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ToneToggle — segmented control for the assistant's speaking tone.
 */
function ToneToggle({
  value = 'tu',
  options,
  onChange,
  style = {},
  ...rest
}) {
  const opts = options || [{
    id: 'tu',
    label: 'Tú (cercano)'
  }, {
    id: 'usted',
    label: 'Usted (formal)'
  }, {
    id: 'breve',
    label: 'Directo'
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      background: 'var(--fog)',
      borderRadius: 'var(--r-pill)',
      padding: 5,
      gap: 4,
      ...style
    }
  }, rest), opts.map(o => {
    const active = o.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => onChange && onChange(o.id),
      style: {
        border: 'none',
        background: active ? 'var(--blue)' : 'transparent',
        color: active ? '#fff' : 'var(--ink-soft)',
        fontFamily: 'inherit',
        fontWeight: 600,
        fontSize: 14,
        padding: '9px 20px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        transition: 'background .15s ease, color .15s ease'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { ToneToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ToneToggle.jsx", error: String((e && e.message) || e) }); }

// components/chat/TypingIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TypingIndicator — three-dot "assistant is writing" bubble.
 */
function TypingIndicator({
  style = {},
  ...rest
}) {
  ensureKeyframes();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap: 5,
      background: 'var(--fog)',
      borderRadius: '20px 20px 20px 6px',
      padding: '16px 18px',
      alignSelf: 'flex-start',
      borderLeft: '3px solid var(--mint)',
      ...style
    }
  }, rest), [0, 0.2, 0.4].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--concrete)',
      animation: `hatillo-blink 1.2s infinite`,
      animationDelay: `${d}s`
    }
  })));
}
function ensureKeyframes() {
  if (typeof document === 'undefined' || document.getElementById('hatillo-blink-kf')) return;
  const s = document.createElement('style');
  s.id = 'hatillo-blink-kf';
  s.textContent = '@keyframes hatillo-blink{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}';
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { TypingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/TypingIndicator.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* status -> [surface, text, border] */
const statusMap = {
  pending: ['var(--warning-surface)', 'var(--warning)'],
  processing: ['var(--primary-surface)', 'var(--primary)'],
  paid: ['var(--success-surface)', 'var(--success)'],
  done: ['var(--success-surface)', 'var(--success)'],
  overdue: ['var(--error-surface)', 'var(--error)']
};

/**
 * Badge — domain status pill with a leading dot.
 */
function Badge({
  status = 'pending',
  dot = true,
  children,
  style = {},
  ...rest
}) {
  const [bg, fg] = statusMap[status] || statusMap.pending;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      fontWeight: 700,
      padding: '6px 13px',
      borderRadius: 'var(--r-pill)',
      letterSpacing: '.01em',
      background: bg,
      color: fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'inherit',
  fontWeight: 700,
  fontSize: 15,
  border: 'none',
  cursor: 'pointer',
  padding: '14px 26px',
  borderRadius: 'var(--r-pill)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 9,
  lineHeight: 1,
  transition: 'background .15s ease, transform .06s ease',
  whiteSpace: 'nowrap'
};
const variants = {
  primary: {
    background: 'var(--blue)',
    color: 'var(--white)'
  },
  secondary: {
    background: 'var(--navy)',
    color: 'var(--white)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--blue)',
    border: '2px solid var(--blue)',
    padding: '12px 24px'
  },
  mint: {
    background: 'var(--mint)',
    color: 'var(--night)'
  },
  onblue: {
    background: 'var(--white)',
    color: 'var(--blue)'
  }
};

/**
 * Button — Hatillo pill CTA. One primary per screen.
 */
function Button({
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  children,
  style = {},
  ...rest
}) {
  const disabledStyle = disabled ? {
    background: 'var(--color-disabled-bg)',
    color: 'var(--color-disabled-text)',
    cursor: 'not-allowed'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...(fullWidth ? {
        width: '100%'
      } : {}),
      ...disabledStyle,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && leadingIcon, children, !loading && trailingIcon);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      border: '2px solid rgba(255,255,255,.4)',
      borderTopColor: '#fff',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'hatillo-spin .7s linear infinite'
    }
  });
}
if (typeof document !== 'undefined' && !document.getElementById('hatillo-spin-kf')) {
  const s = document.createElement('style');
  s.id = 'hatillo-spin-kf';
  s.textContent = '@keyframes hatillo-spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — quick-suggestion pill. Selectable.
 */
function Chip({
  selected = false,
  children,
  style = {},
  ...rest
}) {
  const s = selected ? {
    background: 'var(--primary-surface)',
    borderColor: 'var(--primary-border)',
    color: 'var(--primary)',
    fontWeight: 600
  } : {
    background: 'var(--white)',
    borderColor: 'var(--line)',
    color: 'var(--ink)',
    fontWeight: 500
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      border: '1.5px solid',
      padding: '10px 16px',
      borderRadius: 'var(--r-pill)',
      fontSize: 14,
      fontFamily: 'inherit',
      cursor: 'pointer',
      transition: 'border-color .15s ease, color .15s ease',
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hatillo line-icon set — stroke 1.7, round joins, no fill.
   Paths lifted verbatim from the Hatillo Guidelines 2026 spec. */
const HATILLO_ICONS = {
  pagos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "19",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10h19"
  })),
  tramites: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h8l4 4v14H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v4h4M9 12h6M9 16h4"
  })),
  reportes: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-6.5-4.4-6.5-10a6.5 6.5 0 0113 0C18.5 16.6 12 21 12 21z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "2.3"
  })),
  placa: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11h2M11 11h2M15 11h2"
  })),
  ibi: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11l8-6 8 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v9h12v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19v-5h4v5"
  })),
  pazysalvo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 4v5c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  shield: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 4v5c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V7z"
  }),
  camara: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13.5",
    r: "3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7l1.2-2h3.6L15 7"
  })),
  ubicacion: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  })),
  adjuntar: /*#__PURE__*/React.createElement("path", {
    d: "M21 12l-8.5 8.5a5 5 0 01-7-7L14 5a3.5 3.5 0 015 5l-9 9a1.5 1.5 0 01-2-2l8.5-8.5"
  }),
  historial: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3.5 2"
  })),
  alertas: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20a2 2 0 004 0"
  })),
  perfil: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20a7 7 0 0114 0"
  })),
  mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11a7 7 0 0014 0M12 18v3"
  })),
  enviar: /*#__PURE__*/React.createElement("path", {
    d: "M4 12l16-8-6 16-3-6-7-2z"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l4 4 10-10"
  }),
  cerrar: /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }),
  advertencia: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 16H3zM12 10v4M12 17h.01"
  }),
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 8h.01"
  })),
  util: /*#__PURE__*/React.createElement("path", {
    d: "M7 10v10H4V10zM7 10l4-7a2 2 0 013 2l-1 5h5a2 2 0 012 2.3l-1.2 6A2 2 0 0116.8 20H7"
  }),
  imagen: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l5-4 4 3 3-2 6 5"
  })),
  chat: /*#__PURE__*/React.createElement("path", {
    d: "M4 5h16v12H8l-4 4z"
  }),
  buscar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })),
  inicio: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11l8-6 8 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v9h12v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19v-5h4v5"
  })),
  correo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8l9 6 9-6"
  })),
  chevron: /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }),
  chevronDown: /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }),
  mas: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  editar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 20h4L18 10l-4-4L4 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 7l4 4"
  })),
  volver: /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  }),
  campana: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20a2 2 0 004 0"
  })),
  ayuda: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9.5a2.5 2.5 0 013.9-.7c1.2 1 .6 2.3-.4 3-.7.5-1 .9-1 1.7M12 17h.01"
  })),
  tarjeta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "19",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10h19"
  }))
};

/**
 * Icon — renders a Hatillo line glyph.
 * @param {{ name: string, size?: number, strokeWidth?: number, color?: string, className?: string, style?: object }} props
 */
function Icon({
  name,
  size = 24,
  strokeWidth = 1.7,
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) {
  const glyph = HATILLO_ICONS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true"
  }, rest), glyph || null);
}
Object.assign(__ds_scope, { HATILLO_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/DomainCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const iconTints = {
  b: {
    bg: '#EAF0FF',
    stroke: 'var(--blue)'
  },
  m: {
    bg: '#E1FAF1',
    stroke: '#08a075'
  },
  n: {
    bg: 'var(--fog)',
    stroke: 'var(--navy)'
  }
};

/**
 * DomainCard — trámite / reporte object returned in chat.
 */
function DomainCard({
  icon,
  tint = 'b',
  title,
  meta,
  badge = null,
  rowLabel,
  rowValue,
  style = {},
  ...rest
}) {
  const t = iconTints[tint] || iconTints.b;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--r-sm)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: t.bg
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    strokeWidth: 1.7,
    color: t.stroke
  }) : icon), badge), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, meta)), (rowLabel || rowValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      paddingTop: 12,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, rowLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, rowValue)));
}
Object.assign(__ds_scope, { DomainCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DomainCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PaymentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PaymentCard — in-chat balance card with amount and pay actions.
 */
function PaymentCard({
  label,
  amount,
  status = 'pendiente',
  meta,
  actions = null,
  badge = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: 20,
      boxShadow: 'var(--shadow)',
      maxWidth: 360,
      ...style
    }
  }, rest), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, badge), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 6,
      paddingRight: badge ? 96 : 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      fontFamily: 'var(--font-heading)'
    }
  }, amount, status && !badge && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--ink-soft)',
      marginLeft: 4
    }
  }, status)), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6,
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "placa",
    size: 16,
    strokeWidth: 1.7
  }), meta), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, actions));
}
Object.assign(__ds_scope, { PaymentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PaymentCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Receipt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Receipt — confirmed-payment receipt card.
 */
function Receipt({
  title = 'Pago confirmado',
  subtitle,
  lines = [],
  total,
  footer,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: 22,
      boxShadow: 'var(--shadow)',
      maxWidth: 360,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 16,
      borderBottom: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--mint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 22,
    strokeWidth: 2.4,
    color: "var(--night)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, subtitle))), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, l.k), /*#__PURE__*/React.createElement("span", null, l.v))), total && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--line)',
      marginTop: 6,
      paddingTop: 14,
      fontWeight: 800,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total pagado"), /*#__PURE__*/React.createElement("span", null, total)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 12
    }
  }, footer));
}
Object.assign(__ds_scope, { Receipt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Receipt.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  blue: {
    background: 'var(--blue)',
    color: 'var(--white)'
  },
  mint: {
    background: 'var(--mint)',
    color: 'var(--night)'
  },
  concrete: {
    background: 'var(--concrete)',
    color: 'var(--navy)'
  },
  navy: {
    background: 'var(--navy)',
    color: 'var(--white)'
  }
};

/**
 * ServiceTile — square home-screen service module with a line icon.
 */
function ServiceTile({
  icon,
  label,
  tone = 'blue',
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      borderRadius: 'var(--r-lg)',
      aspectRatio: '1 / 1',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      ...(tones[tone] || tones.blue),
      ...style
    }
  }, rest), typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 46,
    strokeWidth: 1.6
  }) : icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/chat/FeedbackButtons.jsx
try { (() => {
/**
 * FeedbackButtons — útil / no útil thumbs under an assistant reply.
 */
function FeedbackButtons({
  value = null,
  onVote,
  style = {}
}) {
  const btn = (vote, rotate) => {
    const active = value === vote;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onVote && onVote(vote),
      "aria-label": vote === 'up' ? 'Útil' : 'No útil',
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: `1px solid ${active ? 'var(--blue)' : 'var(--line)'}`,
        background: active ? 'var(--primary-surface)' : 'var(--white)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "util",
      size: 16,
      color: active ? 'var(--blue)' : 'var(--ink-soft)',
      style: rotate ? {
        transform: 'rotate(180deg)'
      } : undefined
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignSelf: 'flex-start',
      marginTop: -4,
      marginLeft: 4,
      ...style
    }
  }, btn('up', false), btn('down', true));
}
Object.assign(__ds_scope, { FeedbackButtons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/FeedbackButtons.jsx", error: String((e && e.message) || e) }); }

// components/chat/VoiceState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VoiceState — dark listening panel with an equalizer and mic orb.
 */
function VoiceState({
  transcript = '',
  note = 'Escuchando activamente al contribuyente.',
  style = {},
  ...rest
}) {
  ensureKeyframes();
  const bars = [0, 0.1, 0.2, 0.3, 0.15, 0.05, 0.25, 0.12];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--night)',
      borderRadius: 'var(--r-xl)',
      padding: 30,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--concrete)',
      marginBottom: 6
    }
  }, "Estado de voz"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--concrete)',
      fontSize: 13,
      marginBottom: 18
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      height: 52
    }
  }, bars.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 5,
      borderRadius: 3,
      background: 'var(--mint)',
      animation: 'hatillo-eq 1.1s ease-in-out infinite',
      animationDelay: `${d}s`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 74,
      height: 74,
      borderRadius: '50%',
      background: 'var(--blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 10px rgba(0,81,255,.16), 0 0 0 22px rgba(0,81,255,.08)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mic",
    size: 30,
    strokeWidth: 1.8,
    color: "#fff"
  })), transcript && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--concrete)'
    }
  }, transcript)));
}
function ensureKeyframes() {
  if (typeof document === 'undefined' || document.getElementById('hatillo-eq-kf')) return;
  const s = document.createElement('style');
  s.id = 'hatillo-eq-kf';
  s.textContent = '@keyframes hatillo-eq{0%,100%{height:14px}50%{height:48px}}';
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { VoiceState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/VoiceState.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  ghost: {
    background: 'var(--fog)',
    color: 'var(--navy)'
  },
  send: {
    background: 'var(--blue)',
    color: 'var(--white)'
  },
  plain: {
    background: 'transparent',
    color: 'var(--navy)'
  }
};

/**
 * IconButton — circular icon-only control (input bar, toolbars).
 */
function IconButton({
  icon,
  tone = 'ghost',
  size = 42,
  title,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    title: title,
    "aria-label": title,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s ease',
      ...(tones[tone] || tones.ghost),
      ...style
    }
  }, rest), typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.8
  }) : icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const map = {
  success: {
    surface: 'var(--success-surface)',
    color: 'var(--success)',
    border: 'var(--success-border)',
    icon: 'check'
  },
  error: {
    surface: 'var(--error-surface)',
    color: 'var(--error)',
    border: 'var(--error-border)',
    icon: 'cerrar'
  },
  warning: {
    surface: 'var(--warning-surface)',
    color: 'var(--warning)',
    border: 'var(--warning-border)',
    icon: 'advertencia'
  },
  primary: {
    surface: 'var(--primary-surface)',
    color: 'var(--primary)',
    border: 'var(--primary-border)',
    icon: 'info'
  }
};

/**
 * Alert — inline message tied to a semantic role.
 */
function Alert({
  variant = 'primary',
  children,
  style = {},
  ...rest
}) {
  const t = map[variant] || map.primary;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11,
      padding: '14px 16px',
      borderRadius: 'var(--r-md)',
      fontSize: 14,
      fontWeight: 500,
      border: `1px solid ${t.border}`,
      background: t.surface,
      color: t.color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    strokeWidth: 2.2,
    style: {
      flex: 'none',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EmptyState — dashed placeholder inviting the first action.
 */
function EmptyState({
  icon = 'chat',
  title,
  description,
  action = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      padding: '40px 20px',
      border: '2px dashed var(--line)',
      borderRadius: 'var(--r-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--fog)',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    strokeWidth: 1.6,
    color: "var(--concrete)"
  })), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      margin: '0 0 6px'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      maxWidth: '34ch',
      margin: '0 auto 18px'
    }
  }, description), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — dark confirmation snackbar with a colored icon dot.
 */
function Toast({
  tone = 'mint',
  icon = 'check',
  children,
  style = {},
  ...rest
}) {
  const dotBg = tone === 'info' ? 'var(--blue)' : 'var(--mint)';
  const bg = tone === 'info' ? 'var(--navy)' : 'var(--night)';
  const iconColor = tone === 'info' ? '#fff' : 'var(--night)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: bg,
      color: '#fff',
      padding: '14px 18px',
      borderRadius: 'var(--r-md)',
      fontSize: 14,
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: dotBg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    strokeWidth: 2.4,
    color: iconColor
  })), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/CountrySelector.jsx
try { (() => {
/* Shared country data (subset covering the region + common diaspora). */
const COUNTRIES = [{
  iso: 'PA',
  name: 'Panamá',
  dial: '+507',
  flag: '🇵🇦'
}, {
  iso: 'US',
  name: 'Estados Unidos',
  dial: '+1',
  flag: '🇺🇸'
}, {
  iso: 'CO',
  name: 'Colombia',
  dial: '+57',
  flag: '🇨🇴'
}, {
  iso: 'VE',
  name: 'Venezuela',
  dial: '+58',
  flag: '🇻🇪'
}, {
  iso: 'CR',
  name: 'Costa Rica',
  dial: '+506',
  flag: '🇨🇷'
}, {
  iso: 'MX',
  name: 'México',
  dial: '+52',
  flag: '🇲🇽'
}, {
  iso: 'ES',
  name: 'España',
  dial: '+34',
  flag: '🇪🇸'
}, {
  iso: 'PE',
  name: 'Perú',
  dial: '+51',
  flag: '🇵🇪'
}, {
  iso: 'EC',
  name: 'Ecuador',
  dial: '+593',
  flag: '🇪🇨'
}, {
  iso: 'CL',
  name: 'Chile',
  dial: '+56',
  flag: '🇨🇱'
}, {
  iso: 'AR',
  name: 'Argentina',
  dial: '+54',
  flag: '🇦🇷'
}, {
  iso: 'GT',
  name: 'Guatemala',
  dial: '+502',
  flag: '🇬🇹'
}, {
  iso: 'HN',
  name: 'Honduras',
  dial: '+504',
  flag: '🇭🇳'
}, {
  iso: 'NI',
  name: 'Nicaragua',
  dial: '+505',
  flag: '🇳🇮'
}, {
  iso: 'SV',
  name: 'El Salvador',
  dial: '+503',
  flag: '🇸🇻'
}, {
  iso: 'DO',
  name: 'Rep. Dominicana',
  dial: '+1',
  flag: '🇩🇴'
}, {
  iso: 'BR',
  name: 'Brasil',
  dial: '+55',
  flag: '🇧🇷'
}];

/** Find the country whose dial code best matches a leading string like "+1", "+507". */
function detectCountry(input) {
  const s = (input || '').replace(/[^\d+]/g, '');
  if (!s.startsWith('+')) return null;
  const sorted = [...COUNTRIES].sort((a, b) => b.dial.length - a.dial.length);
  return sorted.find(c => s.startsWith(c.dial)) || null;
}

/**
 * CountrySelector — full-screen searchable country list.
 */
function CountrySelector({
  value,
  onSelect,
  onClose,
  style = {}
}) {
  const [q, setQ] = React.useState('');
  const list = COUNTRIES.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.dial.includes(q));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Volver",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "volver",
    size: 22,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      background: 'var(--page)',
      borderRadius: 'var(--r-pill)',
      padding: '9px 14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "buscar",
    size: 18,
    color: "var(--ink-soft)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Buscar pa\xEDs o c\xF3digo\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 15,
      minWidth: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, list.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.iso,
    onClick: () => onSelect(c),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 18px',
      border: 'none',
      borderBottom: '1px solid var(--line)',
      background: c.iso === value ? 'var(--primary-surface)' : 'var(--white)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      lineHeight: 1
    }
  }, c.flag), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 500
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, c.dial))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      textAlign: 'center',
      color: 'var(--ink-soft)',
      fontSize: 14
    }
  }, "Sin resultados.")));
}
Object.assign(__ds_scope, { COUNTRIES, detectCountry, CountrySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CountrySelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — text input with focus/error states and optional error message.
 */
function Field({
  value,
  placeholder = '',
  state = 'default',
  errorMessage = '',
  leading = null,
  onChange,
  style = {},
  ...rest
}) {
  const border = state === 'error' ? 'var(--error)' : state === 'focus' ? 'var(--blue)' : 'var(--line)';
  const ring = state === 'focus' ? '0 0 0 3px rgba(0,81,255,.14)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: `1.5px solid ${border}`,
      borderRadius: 'var(--r-sm)',
      padding: '13px 16px',
      fontSize: 15,
      background: 'var(--white)',
      boxShadow: ring,
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  }, leading, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 15,
      color: 'var(--ink)',
      minWidth: 0
    }
  }, rest))), state === 'error' && errorMessage && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--error)',
      fontSize: 12,
      marginTop: 6,
      fontWeight: 500
    }
  }, errorMessage));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/OtpInput.jsx
try { (() => {
/**
 * OtpInput — fixed-length code entry with separate boxes.
 */
function OtpInput({
  length = 6,
  value = '',
  onChange,
  onComplete,
  autoFocus = true,
  style = {}
}) {
  const refs = React.useRef([]);
  const chars = value.split('').concat(Array(length).fill('')).slice(0, length);
  const setAt = (i, ch) => {
    const next = chars.slice();
    next[i] = ch;
    const joined = next.join('').slice(0, length);
    onChange && onChange(joined);
    if (ch && i < length - 1) refs.current[i + 1] && refs.current[i + 1].focus();
    if (joined.replace(/\s/g, '').length === length) onComplete && onComplete(joined);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(6px,2vw,10px)',
      ...style
    }
  }, Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    value: chars[i] || '',
    inputMode: "numeric",
    maxLength: 1,
    autoFocus: autoFocus && i === 0,
    onChange: e => {
      const d = e.target.value.replace(/\D/g, '').slice(-1);
      setAt(i, d);
    },
    onKeyDown: e => {
      if (e.key === 'Backspace' && !chars[i] && i > 0) refs.current[i - 1] && refs.current[i - 1].focus();
    },
    style: {
      width: 'clamp(40px, 13vw, 52px)',
      height: 'clamp(48px, 15vw, 60px)',
      textAlign: 'center',
      fontSize: 'clamp(20px, 6vw, 24px)',
      fontWeight: 700,
      fontFamily: 'inherit',
      color: 'var(--ink)',
      border: `1.5px solid ${chars[i] ? 'var(--blue)' : 'var(--line)'}`,
      borderRadius: 'var(--r-sm)',
      outline: 'none',
      background: 'var(--white)',
      transition: 'border-color .15s ease'
    }
  })));
}
Object.assign(__ds_scope, { OtpInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OtpInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhoneField.jsx
try { (() => {
/**
 * PhoneField — phone number entry with a tappable country flag + dial prefix.
 */
function PhoneField({
  country,
  value = '',
  onChange,
  onOpenPicker,
  placeholder = 'Número de teléfono',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1.5px solid var(--line)',
      borderRadius: 'var(--r-sm)',
      padding: '6px 14px 6px 8px',
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPicker,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: 'var(--page)',
      borderRadius: 'var(--r-sm)',
      padding: '9px 12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      lineHeight: 1
    }
  }, country ? country.flag : '🏳️'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, country ? country.dial : '+'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRight: '2px solid var(--ink-soft)',
      borderBottom: '2px solid var(--ink-soft)',
      transform: 'rotate(45deg)',
      marginLeft: 2,
      marginTop: -3
    }
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    inputMode: "tel",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      font: 'inherit',
      fontSize: 16,
      color: 'var(--ink)',
      minWidth: 0,
      background: 'transparent'
    }
  }));
}
Object.assign(__ds_scope, { PhoneField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhoneField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
const DEFAULT_TABS = [{
  id: 'inicio',
  label: 'Inicio',
  icon: 'chat'
}, {
  id: 'historial',
  label: 'Historial',
  icon: 'historial'
}, {
  id: 'perfil',
  label: 'Perfil',
  icon: 'perfil'
}];
const SparkleGlyph = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "#fff",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2c.5 4.6 2.8 6.9 7.4 7.4-4.6.5-6.9 2.8-7.4 7.4-.5-4.6-2.8-6.9-7.4-7.4C9.2 8.9 11.5 6.6 12 2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 13.5c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3Z",
  opacity: ".9"
}));
function TabBtn({
  t,
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange(t.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 4px',
      fontFamily: 'inherit',
      color: on ? 'var(--blue)' : 'var(--ink-soft)'
    }
  }, typeof t.icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 24,
    strokeWidth: on ? 2 : 1.7
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: on ? 700 : 500
    }
  }, t.label));
}
function CenterFab({
  fab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      minWidth: 84
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Hablar con Hati",
    onClick: fab.onPress,
    style: {
      position: 'absolute',
      top: -30,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: '4px solid var(--white)',
      background: 'var(--blue)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 14px 28px -8px rgba(0,81,255,.6)'
    }
  }, fab.glyph || /*#__PURE__*/React.createElement(SparkleGlyph, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--blue)',
      paddingBottom: 8
    }
  }, fab.label || 'Hati'));
}

/**
 * BottomNav — fixed bottom navigation. With `fab`, renders an elevated center
 * action (sparkle → new conversation, + secondary mic) between the middle tabs.
 */
function BottomNav({
  active = 'inicio',
  onChange,
  tabs = DEFAULT_TABS,
  fab = null,
  style = {}
}) {
  const mid = Math.ceil(tabs.length / 2);
  const items = fab ? [...tabs.slice(0, mid), {
    __fab: true
  }, ...tabs.slice(mid)] : tabs;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      flex: 'none',
      display: 'flex',
      alignItems: 'flex-end',
      borderTop: '1px solid var(--line)',
      background: 'var(--white)',
      padding: '6px clamp(8px,4vw,24px) max(8px, env(safe-area-inset-bottom))',
      overflow: 'visible',
      ...style
    }
  }, items.map((t, i) => t.__fab ? /*#__PURE__*/React.createElement(CenterFab, {
    key: "fab",
    fab: fab
  }) : /*#__PURE__*/React.createElement(TabBtn, {
    key: t.id,
    t: t,
    on: t.id === active,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/App.jsx
try { (() => {
/* Hatillo — top-level router wiring the whole flow together. */
function VoiceOverlay({
  onClose
}) {
  const HR = window.HatilloDesignSystem_5bedaa;
  React.useEffect(() => {
    const t = setTimeout(onClose, 3400);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--night)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(HR.VoiceState, {
    transcript: '\u201c¿Cuánto debo de mi placa?\u201d',
    style: {
      background: 'transparent',
      padding: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(HR.IconButton, {
    icon: /*#__PURE__*/React.createElement(HR.Icon, {
      name: "cerrar",
      size: 20,
      color: "#fff"
    }),
    tone: "plain",
    title: "Cerrar",
    onClick: onClose
  })));
}
function AppRoot() {
  const HR = window.HatilloDesignSystem_5bedaa;
  const FALLBACK_COUNTRY = {
    iso: 'PA',
    name: 'Panamá',
    dial: '+507',
    flag: '🇵🇦'
  };
  const countries = HR && HR.COUNTRIES || [FALLBACK_COUNTRY];
  const [route, setRoute] = React.useState('onboarding'); // onboarding|login|country|email|otp|app
  const [tab, setTab] = React.useState('inicio');
  const [chat, setChat] = React.useState(null); // { initialText }
  const [voice, setVoice] = React.useState(false);
  const [user, setUser] = React.useState({
    name: '',
    tone: 'tu'
  });
  const [country, setCountry] = React.useState(countries[0]);
  const [otpDest, setOtpDest] = React.useState('');
  const [t, setTweak] = window.useTweaks({
    homeStatus: 'Con deudas',
    notifDot: true,
    skeletons: false,
    offline: false
  });
  const homeStatus = t.homeStatus === 'Al día' ? 'alDia' : 'deudas';
  const setTone = t => setUser(u => ({
    ...u,
    tone: t
  }));
  const openChat = initialText => {
    setChat({
      initialText
    });
    setTab('inicio');
  };
  const backToTabs = () => setChat(null);
  const enterApp = () => {
    setUser(u => ({
      ...u,
      name: u.name || 'Carlos'
    }));
    setRoute('app');
  };
  const HI = window.HatilloIcons || {};
  const navTabs = [{
    id: 'inicio',
    label: 'Inicio',
    icon: HI.Home ? /*#__PURE__*/React.createElement(HI.Home, {
      size: 24
    }) : 'chat'
  }, {
    id: 'perfil',
    label: 'Perfil',
    icon: HI.User ? /*#__PURE__*/React.createElement(HI.User, {
      size: 24
    }) : 'perfil'
  }];

  /* ---- Auth routes (full-screen, no bottom nav) ---- */
  if (route === 'onboarding') {
    return /*#__PURE__*/React.createElement(window.AppShell, null, /*#__PURE__*/React.createElement(window.Onboarding, {
      country: country,
      onOpenCountry: (detected, silent) => {
        if (silent && detected) {
          setCountry(detected);
        } else {
          setRoute('country');
        }
      },
      onPhone: phone => {
        setOtpDest(country.dial + ' ' + (phone || '••• 4567'));
        setRoute('otp');
      },
      onEmail: () => setRoute('email'),
      onProvider: () => enterApp()
    }));
  }
  if (route === 'country') {
    return /*#__PURE__*/React.createElement(window.AppShell, {
      background: "var(--white)"
    }, /*#__PURE__*/React.createElement(window.CountryPickerScreen, {
      value: country.iso,
      onSelect: c => {
        setCountry(c);
        setRoute('onboarding');
      },
      onClose: () => setRoute('onboarding')
    }));
  }
  if (route === 'email') {
    return /*#__PURE__*/React.createElement(window.AppShell, null, /*#__PURE__*/React.createElement(window.EmailLogin, {
      onBack: () => setRoute('onboarding'),
      onContinue: () => {
        setOtpDest('tu correo');
        setRoute('otp');
      }
    }));
  }
  if (route === 'otp') {
    return /*#__PURE__*/React.createElement(window.AppShell, null, /*#__PURE__*/React.createElement(window.Otp, {
      dest: otpDest,
      onBack: () => setRoute('onboarding'),
      onVerify: () => enterApp()
    }));
  }

  /* ---- Main app ---- */
  const tweaks = /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Home"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Estado de cuenta",
    value: t.homeStatus,
    options: ['Con deudas', 'Al día'],
    onChange: v => setTweak('homeStatus', v)
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Novedad (punto rojo)",
    value: t.notifDot,
    onChange: v => setTweak('notifDot', v)
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Estados"
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Skeletons (cargando)",
    value: t.skeletons,
    onChange: v => setTweak('skeletons', v)
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Sin conexi\xF3n",
    value: t.offline,
    onChange: v => setTweak('offline', v)
  }));
  const offlineBar = t.offline ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: 'var(--night)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '9px 16px',
      fontSize: 13.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--warning)',
      flex: 'none'
    }
  }), "Sin conexi\xF3n \xB7 Reintentando\u2026") : null;
  return /*#__PURE__*/React.createElement(window.AppShell, null, offlineBar, chat ? /*#__PURE__*/React.createElement(window.ChatThread, {
    initialText: chat.initialText,
    userName: user.name,
    onSetName: n => setUser(u => ({
      ...u,
      name: n
    })),
    onBack: backToTabs,
    tone: user.tone,
    onTone: setTone,
    onOpenVoice: () => setVoice(true)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, tab === 'inicio' && /*#__PURE__*/React.createElement(window.HomeTab, {
    user: user,
    onOpenChat: openChat,
    status: homeStatus,
    notifDot: t.notifDot,
    skeletons: t.skeletons
  }), tab === 'historial' && /*#__PURE__*/React.createElement(window.HistoryTab, {
    onOpenChat: openChat,
    onBack: () => setTab('perfil')
  }), tab === 'perfil' && /*#__PURE__*/React.createElement(window.ProfileTab, {
    user: user,
    tone: user.tone,
    onTone: setTone,
    onOpenHistory: () => setTab('historial')
  })), /*#__PURE__*/React.createElement(HR.BottomNav, {
    active: tab,
    onChange: setTab,
    tabs: navTabs,
    fab: {
      onPress: () => openChat(''),
      label: 'Hati',
      glyph: HI.AiVoice ? /*#__PURE__*/React.createElement(HI.AiVoice, {
        size: 30,
        color: "#fff"
      }) : undefined
    }
  })), voice && /*#__PURE__*/React.createElement(window.VoiceScreen, {
    onClose: () => setVoice(false),
    onReply: o => {
      setVoice(false);
      openChat(o);
    }
  }), tweaks);
}
Object.assign(window, {
  AppRoot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/AppShell.jsx
try { (() => {
/* Full-bleed viewport shell for the Hatillo prototype. Fills the whole screen
   (no phone bezel, no letterbox) and hosts whatever screen is routed in.
   React is loaded globally (UMD). Responsive helper included. */

/** useIsWide(px) — true when viewport ≥ px. Drives desktop reflows. */
window.useIsWide = function useIsWide(px = 900) {
  const [wide, setWide] = React.useState(typeof window !== 'undefined' && window.innerWidth >= px);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= px);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [px]);
  return wide;
};
function AppShell({
  children,
  background = 'var(--page)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      minHeight: '100dvh',
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font)',
      background,
      color: 'var(--ink)',
      overflow: 'hidden'
    }
  }, children);
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/Auth.jsx
try { (() => {
/* Hatillo — brand mark + auth screens.
   Onboarding: blue hero (real white logo + "Redescubre tu ciudad. Hatillo en tu
   bolsillo") with the phone number field inline (no phone CTA), plus correo and
   Apple/Google. OTP only for phone & email.
   Note: uploads/hatillo_blanco.png is a WHITE logo (used on blue). On light screens
   we fall back to the geometric house mark until a colored logo is supplied. */
const H = window.HatilloDesignSystem_5bedaa;
const LOGO_WHITE = '../../assets/hatillo_blanco.png';
function HatilloMark({
  size = 44,
  tile = false
}) {
  const svg = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40",
    width: size,
    height: size,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6.5 L34 17 V32.5 a2.2 2.2 0 0 1 -2.2 2.2 H8.2 A2.2 2.2 0 0 1 6 32.5 V17 Z",
    fill: tile ? '#fff' : 'currentColor'
  }), /*#__PURE__*/React.createElement("text", {
    x: "20.4",
    y: "31.5",
    fontFamily: "var(--font)",
    fontSize: "17",
    fontWeight: "800",
    fill: "#0051FF",
    textAnchor: "middle"
  }, "1"));
  if (!tile) return svg;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 20,
      height: size + 20,
      borderRadius: size * 0.42,
      background: 'var(--blue)'
    }
  }, svg);
}

/* Decorative orbit of service glyphs. Fills its (positioned) parent. */
function OrbitArt({
  cx = '50%'
}) {
  const ring = d => ({
    position: 'absolute',
    top: '50%',
    left: cx,
    width: d,
    height: d,
    marginTop: -d / 2,
    marginLeft: -d / 2,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,.18)'
  });
  const chip = (x, y, bg, icon, color, size = 54) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: `calc(${cx} + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%,-50%)',
      width: size,
      height: size,
      borderRadius: '30%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 12px 26px -10px rgba(0,0,0,.35)'
    }
  }, /*#__PURE__*/React.createElement(H.Icon, {
    name: icon,
    size: size * 0.5,
    color: color,
    strokeWidth: 1.9
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      zIndex: 1
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: ring(220)
  }), /*#__PURE__*/React.createElement("div", {
    style: ring(340)
  }), /*#__PURE__*/React.createElement("div", {
    style: ring(470)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: cx,
      transform: 'translate(-50%,-50%)',
      width: 72,
      height: 72,
      borderRadius: 24,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 16px 40px -12px rgba(0,0,0,.4)'
    }
  }, /*#__PURE__*/React.createElement(HatilloMark, {
    size: 40
  })), chip(-110, -80, 'var(--mint)', 'tarjeta', 'var(--night)'), chip(115, -60, '#fff', 'ubicacion', 'var(--blue)'), chip(-115, 70, '#fff', 'tramites', 'var(--navy)'), chip(120, 85, 'var(--mint)', 'campana', 'var(--night)', 48));
}
const AppleGlyph = () => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/apple.svg",
  alt: "",
  width: "19",
  height: "19",
  style: {
    display: 'block'
  }
});
const GoogleGlyph = () => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/google.svg",
  alt: "",
  width: "19",
  height: "19",
  style: {
    display: 'block'
  }
});

/* Get Started options — phone field inline (no phone CTA), then correo + Apple/Google. */
function GetStartedOptions({
  country,
  onOpenCountry,
  onPhone,
  onEmail,
  onProvider
}) {
  const [phone, setPhone] = React.useState('');
  const c = country || H.COUNTRIES && H.COUNTRIES[0] || {
    iso: 'PA',
    name: 'Panamá',
    dial: '+507',
    flag: '🇵🇦'
  };
  const digits = phone.replace(/\D/g, '').length;
  const change = v => {
    setPhone(v);
    const d = H.detectCountry && H.detectCountry(v);
    if (d && d.iso !== c.iso) onOpenCountry(d, true);
  };
  const iconBtn = (glyph, label, onClick) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 12px',
      border: 'none',
      borderRadius: 'var(--r-md)',
      background: 'var(--page)',
      cursor: 'pointer'
    }
  }, glyph);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(22px,3vw,28px)',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, "Empecemos"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 15,
      margin: '-4px 0 6px',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Habla con Hati."), " Resuelve tus dudas y realiza tus tr\xE1mites, literalmente."), /*#__PURE__*/React.createElement(H.PhoneField, {
    country: c,
    value: phone,
    onChange: change,
    onOpenPicker: () => onOpenCountry(null, false)
  }), /*#__PURE__*/React.createElement(H.Button, {
    variant: "primary",
    fullWidth: true,
    disabled: digits < 7,
    onClick: () => onPhone(phone)
  }, "Continuar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '6px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontSize: 12,
      color: 'var(--ink-soft)',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, "o entra r\xE1pido con"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onEmail,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: '100%',
      padding: '14px 16px',
      border: 'none',
      borderRadius: 'var(--r-pill)',
      background: 'var(--page)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/email.svg",
    alt: "",
    width: "20",
    height: "20",
    style: {
      display: 'block'
    }
  }), "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, iconBtn(/*#__PURE__*/React.createElement(AppleGlyph, null), 'Continuar con Apple', onProvider), iconBtn(/*#__PURE__*/React.createElement(GoogleGlyph, null), 'Continuar con Google', onProvider)));
}
function HeroLogo({
  h
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: LOGO_WHITE,
    alt: "Hatillo",
    style: {
      height: h,
      width: 'auto',
      display: 'block'
    }
  });
}

/* Blue hero — logo + title on top, orbit confined to the space below (no collision). */
function HeroBlue({
  compact
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -80,
      top: -70,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, rgba(4,214,156,.5), transparent 62%)',
      zIndex: 0
    }
  }), compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      padding: '30px 26px 0',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(HeroLogo, {
    h: 30
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px,9vw,42px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.04,
      color: '#fff',
      margin: '22px 0 0',
      maxWidth: '13ch',
      textWrap: 'balance'
    }
  }, "Redescubre tu ciudad."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 17,
      color: '#fff',
      opacity: .92
    }
  }, "Hatillo en tu bolsillo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(OrbitArt, {
    cx: "50%"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OrbitArt, {
    cx: "82%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      padding: 'clamp(28px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(HeroLogo, {
    h: 38
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px,5vw,56px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.02,
      color: '#fff',
      margin: '28px 0 0',
      maxWidth: '12ch',
      textWrap: 'balance'
    }
  }, "Redescubre tu ciudad."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'clamp(16px,1.8vw,19px)',
      color: '#fff',
      opacity: .92
    }
  }, "Hatillo en tu bolsillo."))));
}

/* 1. Onboarding */
function Onboarding({
  country,
  onOpenCountry,
  onPhone,
  onEmail,
  onProvider
}) {
  const wide = window.useIsWide(860);
  const opts = /*#__PURE__*/React.createElement(GetStartedOptions, {
    country: country,
    onOpenCountry: onOpenCountry,
    onPhone: onPhone,
    onEmail: onEmail,
    onProvider: onProvider
  });
  if (wide) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        background: 'var(--blue)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(HeroBlue, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 42%',
        maxWidth: 520,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(28px,4vw,64px)',
        background: 'var(--white)'
      }
    }, opts));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      background: 'var(--blue)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(HeroBlue, {
    compact: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: 'var(--white)',
      borderRadius: '28px 28px 0 0',
      padding: '22px 22px calc(24px + env(safe-area-inset-bottom))',
      boxShadow: '0 -20px 50px -20px rgba(14,27,43,.4)',
      position: 'relative',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--line)',
      margin: '-6px auto 16px'
    }
  }), opts));
}

/* Auth step canvas — top-aligned (not floating in the middle), generous spacing. */
function AuthStep({
  children,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: 'var(--page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Volver",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(H.Icon, {
    name: "volver",
    size: 24,
    color: "var(--navy)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 440,
      margin: '0 auto',
      padding: 'clamp(12px,3vh,40px) 24px 40px'
    }
  }, children)));
}
function StepMark() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(HatilloMark, {
    size: 40,
    tile: true
  }));
}

/* 2. Email entry (enriched) */
function EmailLogin({
  onContinue,
  onBack
}) {
  const [email, setEmail] = React.useState('');
  const ok = /.+@.+\..+/.test(email);
  return /*#__PURE__*/React.createElement(AuthStep, {
    onBack: onBack
  }, /*#__PURE__*/React.createElement(StepMark, null), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,3vw,30px)',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, "Contin\xFAa con tu correo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 15,
      lineHeight: 1.55,
      margin: '10px 0 24px'
    }
  }, "Te enviaremos un c\xF3digo de acceso de un solo uso. Sin contrase\xF1as que memorizar."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 8
    }
  }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement(H.Field, {
    value: email,
    placeholder: "tucorreo@ejemplo.com",
    state: email && !ok ? 'error' : 'default',
    errorMessage: "Correo no v\xE1lido.",
    leading: /*#__PURE__*/React.createElement(H.Icon, {
      name: "correo",
      size: 18,
      color: "var(--ink-soft)"
    }),
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(H.Button, {
    variant: "primary",
    fullWidth: true,
    disabled: !ok,
    onClick: onContinue
  }, "Enviar c\xF3digo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      textAlign: 'center',
      marginTop: 18,
      lineHeight: 1.5
    }
  }, "Al continuar aceptas los T\xE9rminos y el Aviso de Privacidad del Municipio de Panam\xE1."));
}

/* 3. OTP (enriched) — phone & email only */
function Otp({
  onVerify,
  onBack,
  dest
}) {
  const [code, setCode] = React.useState('');
  const [secs, setSecs] = React.useState(30);
  React.useEffect(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secs]);
  const done = code.replace(/\s/g, '').length >= 4;
  return /*#__PURE__*/React.createElement(AuthStep, {
    onBack: onBack
  }, /*#__PURE__*/React.createElement(StepMark, null), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,3vw,30px)',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, "Verifica tu c\xF3digo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 15,
      lineHeight: 1.55,
      margin: '10px 0 26px'
    }
  }, "Enviamos un c\xF3digo de 4 d\xEDgitos a ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, dest || 'tu cuenta'), ". Ingr\xE9salo para entrar; caduca en 10 minutos."), /*#__PURE__*/React.createElement(H.OtpInput, {
    length: 4,
    value: code,
    onChange: setCode,
    onComplete: onVerify
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(H.Button, {
    variant: "primary",
    fullWidth: true,
    disabled: !done,
    onClick: () => onVerify(code)
  }, "Verificar"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 18,
      fontSize: 14,
      color: 'var(--ink-soft)'
    }
  }, secs > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "Reenviar c\xF3digo en ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "0:", String(secs).padStart(2, '0'))) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setSecs(30),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--blue)',
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 14
    }
  }, "Reenviar c\xF3digo")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      textAlign: 'center',
      marginTop: 22,
      lineHeight: 1.5
    }
  }, "\xBFNo lo recibiste? Revisa tu bandeja de spam o vuelve para cambiar tus datos."));
}

/* Country picker (full screen) */
function CountryPickerScreen({
  value,
  onSelect,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(H.CountrySelector, {
    value: value,
    onSelect: onSelect,
    onClose: onClose
  }));
}
Object.assign(window, {
  HatilloMark,
  Onboarding,
  CountryPickerScreen,
  EmailLogin,
  Otp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/Auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/ChatThread.jsx
try { (() => {
/* Hatillo — conversation thread + embedded flows (pago, trámite, reporte, FAQ). */
const HC = window.HatilloDesignSystem_5bedaa;
const DATA = window.HatilloData;
let _uid = 0;
const uid = () => 'm' + ++_uid;

/* Small Hati isotipo — house with a "1" in negative. */
function HatiMark({
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: size * 0.32,
      background: 'var(--blue)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40",
    width: size * 0.66,
    height: size * 0.66,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6.5 L34 17 V32.5 a2.2 2.2 0 0 1 -2.2 2.2 H8.2 A2.2 2.2 0 0 1 6 32.5 V17 Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("text", {
    x: "20.4",
    y: "31.5",
    fontFamily: "var(--font)",
    fontSize: "17",
    fontWeight: "800",
    fill: "#0051FF",
    textAnchor: "middle"
  }, "1")));
}

/* Static styled "map" placeholder with an adjustable pin. */
function MiniMap() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      background: 'linear-gradient(0deg, #e9eef0 0 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(#d5dce2 1px, transparent 1px), linear-gradient(90deg, #d5dce2 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '52%',
      left: 0,
      right: 0,
      height: 12,
      background: '#cfd8de'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '38%',
      width: 10,
      background: '#cfd8de'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-100%)',
      color: 'var(--blue)'
    }
  }, /*#__PURE__*/React.createElement(HC.Icon, {
    name: "ubicacion",
    size: 34,
    color: "var(--blue)",
    strokeWidth: 2
  })));
}
function PaymentSheet({
  saldo,
  onConfirm,
  onClose
}) {
  const [method, setMethod] = React.useState('card');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(14,27,43,.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: '24px 24px 0 0',
      padding: 'clamp(20px,4vw,28px)',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 520,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--line)',
      margin: '0 auto 18px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, saldo.concepto), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: '-.02em',
      margin: '4px 0 18px',
      fontFamily: 'var(--font-heading)'
    }
  }, DATA.fmt(saldo.monto)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, DATA.metodos.map(m => {
    const on = method === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => setMethod(m.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 16px',
        border: `1.5px solid ${on ? 'var(--blue)' : 'var(--line)'}`,
        borderRadius: 'var(--r-md)',
        background: on ? 'var(--primary-surface)' : 'var(--white)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(HC.Icon, {
      name: m.id === 'yappy' ? 'placa' : 'tarjeta',
      size: 22,
      color: "var(--navy)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 15
      }
    }, m.tipo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, m.detalle)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: `2px solid ${on ? 'var(--blue)' : 'var(--line)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'var(--blue)'
      }
    })));
  })), /*#__PURE__*/React.createElement(HC.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => onConfirm(method)
  }, "Pagar ", DATA.fmt(saldo.monto))));
}
function AttachSheet({
  onClose,
  onCamera,
  onFile,
  onPhoto
}) {
  const HI = window.HatilloIcons || {};
  const row = (Ic, title, sub, onClick) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      padding: '13px 14px',
      border: 'none',
      borderRadius: 'var(--r-md)',
      background: 'var(--white)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, Ic ? /*#__PURE__*/React.createElement(Ic, {
    size: 22,
    color: "var(--blue)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, sub)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(14,27,43,.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: '24px 24px 0 0',
      padding: '18px 16px calc(20px + env(safe-area-inset-bottom))',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 520,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--line)',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      padding: '0 4px 6px'
    }
  }, "Agregar"), row(HI.Camera, 'Abrir cámara', 'Toma una foto ahora', onCamera), row(HI.Clip, 'Adjuntar archivo', 'PDF, documentos y más', onFile), row(HI.Picture, 'Subir una foto', 'Desde tu galería', onPhoto)));
}
function ChatThread({
  initialText,
  userName,
  onSetName,
  onBack,
  tone,
  onTone,
  onOpenVoice
}) {
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [awaiting, setAwaiting] = React.useState(null); // 'name' | 'cedula' | 'direccion'
  const [quick, setQuick] = React.useState(null); // {options, handler}
  const [attachOpen, setAttachOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState({});
  const [tramite, setTramite] = React.useState({});
  const [paidIds, setPaidIds] = React.useState([]);
  const scroller = React.useRef(null);
  const started = React.useRef(false);
  const push = m => setMessages(x => [...x, {
    id: uid(),
    ...m
  }]);
  const say = (cb, delay = 1000) => {
    setTyping(true);
    setQuick(null);
    setTimeout(() => {
      setTyping(false);
      cb();
    }, delay);
  };
  React.useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!userName) {
      say(() => {
        push({
          from: 'assistant',
          kind: 'text',
          text: '¡Hola! Soy tu asistente del Municipio de Panamá. Antes de empezar, ¿cómo te digo?'
        });
        setAwaiting('name');
      }, 700);
    } else {
      if (initialText) {
        push({
          from: 'user',
          kind: 'text',
          text: initialText
        });
        route(initialText);
      } else greet();
    }
  }, []);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [messages, typing, quick]);
  function greet() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: `¿En qué te ayudo hoy, ${userName || ''}?`.replace(' ?', '?')
      });
      setQuick({
        options: DATA.chips.map(c => c.label),
        handler: t => submit(t)
      });
    }, 600);
  }
  function submit(text) {
    if (!text || !text.trim()) return;
    push({
      from: 'user',
      kind: 'text',
      text
    });
    if (awaiting === 'name') {
      const name = text.trim().split(' ')[0];
      onSetName(name);
      setAwaiting(null);
      say(() => {
        push({
          from: 'assistant',
          kind: 'text',
          text: `¡Un gusto, ${name}! Ya te reconozco. ¿Qué necesitas hacer hoy?`
        });
        setQuick({
          options: DATA.chips.map(c => c.label),
          handler: submit
        });
      }, 900);
      return;
    }
    if (awaiting === 'cedula') {
      setTramite(t => ({
        ...t,
        cedula: text
      }));
      setAwaiting(null);
      askActividad();
      return;
    }
    if (awaiting === 'direccion') {
      setTramite(t => ({
        ...t,
        direccion: text
      }));
      setAwaiting(null);
      finishTramite(text);
      return;
    }
    route(text);
  }
  function route(text) {
    const t = text.toLowerCase();
    if (/placa|debo|saldo|pagar|ibi|circulaci/.test(t)) return flowPago();
    if (/paz y salvo/.test(t)) return flowPazSalvo();
    if (/report|hueco|calle|da\u00f1|foto/.test(t)) return flowReporteStart();
    if (/tr\u00e1mite|tramite|aviso de operaci|operaci/.test(t)) return flowTramiteStart();
    if (/pregunta|faq|frecuent|ayuda/.test(t)) return flowFaq();
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Puedo ayudarte con pagos, trámites y reportes de tu calle. ¿Qué te gustaría hacer?',
        feedback: true
      });
      setQuick({
        options: DATA.chips.map(c => c.label),
        handler: submit
      });
    });
  }

  /* Pago — tappable choices, no sheet */
  function flowPago() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Revisé tu registro. Estos son tus saldos pendientes 👇'
      });
      push({
        from: 'assistant',
        kind: 'saldos'
      });
      const unpaid = DATA.saldos.filter(s => !paidIds.includes(s.id));
      if (unpaid.length > 1) {
        say(() => {
          push({
            from: 'assistant',
            kind: 'text',
            text: '¿Cuál quieres pagar primero?'
          });
          setQuick({
            align: 'right',
            options: unpaid.map(s => `${s.ref} · ${DATA.fmt(s.monto)}`),
            handler: v => {
              push({
                from: 'user',
                kind: 'text',
                text: v
              });
              const s = unpaid.find(x => v.includes(x.ref)) || unpaid[0];
              askMethod(s);
            }
          });
        }, 700);
      } else {
        askMethod(unpaid[0] || DATA.saldos[0]);
      }
    }, 1100);
  }
  function askMethod(saldo) {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: `Perfecto. ¿Cómo quieres pagar ${saldo.ref} (${DATA.fmt(saldo.monto)})?`
      });
      setQuick({
        align: 'right',
        options: ['Pagar con tarjeta', 'Pagar con Yappy'],
        handler: v => {
          push({
            from: 'user',
            kind: 'text',
            text: v
          });
          doPay(saldo, /yappy/i.test(v) ? 'yappy' : 'card');
        }
      });
    }, 700);
  }
  function doPay(saldo, method) {
    setPaidIds(p => [...p, saldo.id]);
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: '¡Listo! Tu pago se procesó correctamente.'
      });
      push({
        from: 'assistant',
        kind: 'receipt',
        saldo,
        method
      });
      push({
        from: 'assistant',
        kind: 'toast',
        text: 'Guardé el comprobante en tu historial.'
      });
      askResolved();
    }, 1200);
  }

  /* Paz y Salvo */
  function flowPazSalvo() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Estás al día con el Municipio, así que generé tu Paz y Salvo al instante.'
      });
      push({
        from: 'assistant',
        kind: 'domain',
        data: {
          icon: 'pazysalvo',
          tint: 'm',
          title: 'Paz y Salvo municipal',
          meta: 'Constancia #PS-7781',
          badge: 'done',
          badgeText: 'Emitido',
          rowLabel: 'Válido hasta',
          rowValue: '31 dic 2026'
        }
      });
      askResolved();
    }, 1100);
  }

  /* Trámite */
  function flowTramiteStart() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Con gusto. ¿Qué trámite quieres iniciar?'
      });
      setQuick({
        align: 'right',
        options: DATA.tramiteTipos,
        handler: v => {
          push({
            from: 'user',
            kind: 'text',
            text: v
          });
          setTramite({
            tipo: v
          });
          askCedula();
        }
      });
    }, 1000);
  }
  function askCedula() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Perfecto. Primero, ¿cuál es tu número de cédula?'
      });
      setAwaiting('cedula');
    }, 700);
  }
  function askActividad() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Gracias. ¿Qué tipo de actividad realizas?'
      });
      setQuick({
        align: 'right',
        options: DATA.actividades,
        handler: t => {
          setTramite(x => ({
            ...x,
            actividad: t
          }));
          push({
            from: 'user',
            kind: 'text',
            text: t
          });
          askDireccion();
        }
      });
    }, 700);
  }
  function askDireccion() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Muy bien. Por último, ¿cuál es la dirección del local?'
      });
      setAwaiting('direccion');
    }, 700);
  }
  function finishTramite() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Envié tu solicitud. Aquí está tu trámite; te aviso cuando cambie de estado.'
      });
      push({
        from: 'assistant',
        kind: 'domain',
        data: {
          icon: 'tramites',
          tint: 'b',
          title: tramite.tipo || 'Aviso de Operación',
          meta: 'Solicitud #AO-20984',
          badge: 'processing',
          badgeText: 'En proceso',
          rowLabel: 'Actualizado',
          rowValue: 'Hace un momento'
        }
      });
      askResolved();
    }, 1200);
  }

  /* Reporte */
  function flowReporteStart() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Con gusto. Adjunta una foto del problema y lo analizo por ti.'
      });
      setQuick({
        options: ['📷 Adjuntar foto'],
        handler: () => attachPhoto()
      });
    }, 900);
  }
  function attachPhoto() {
    push({
      from: 'user',
      kind: 'photo'
    });
    say(() => {
      push({
        from: 'assistant',
        kind: 'analyze'
      });
      setQuick({
        options: ['Sí, es correcto', 'Tomar otra foto'],
        handler: t => {
          push({
            from: 'user',
            kind: 'text',
            text: t
          });
          if (/correcto/i.test(t)) confirmUbicacion();else flowReporteStart();
        }
      });
    }, 1500);
  }
  function confirmUbicacion() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Confirma la ubicación en el mapa para enviar tu reporte.'
      });
      push({
        from: 'assistant',
        kind: 'map'
      });
      setQuick({
        options: ['Confirmar ubicación'],
        handler: () => finishReporte()
      });
    }, 900);
  }
  function finishReporte() {
    push({
      from: 'user',
      kind: 'text',
      text: 'Confirmar ubicación'
    });
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Reporte enviado. Ya está en proceso y una cuadrilla lo atenderá.'
      });
      push({
        from: 'assistant',
        kind: 'domain',
        data: {
          icon: 'reportes',
          tint: 'm',
          title: 'Deterioro en la vía',
          meta: 'Calle 50 · Reporte #R-4471',
          badge: 'processing',
          badgeText: 'En proceso',
          rowLabel: 'Cuadrilla',
          rowValue: 'Asignada'
        }
      });
      push({
        from: 'assistant',
        kind: 'toast',
        text: 'Te avisaremos cuando lo resuelvan.'
      });
      askResolved();
    }, 1200);
  }

  /* FAQ */
  function flowFaq() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Estas son las preguntas más frecuentes:'
      });
      push({
        from: 'assistant',
        kind: 'faqs'
      });
    }, 800);
  }

  /* Proactive close + feedback (once per task) */
  function askResolved() {
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: '¿Resolví lo que necesitabas?'
      });
      setQuick({
        align: 'right',
        options: ['Sí, gracias', 'Necesito más ayuda'],
        handler: v => {
          push({
            from: 'user',
            kind: 'text',
            text: v
          });
          if (/necesito/i.test(v)) greet();else say(() => push({
            from: 'assistant',
            kind: 'text',
            text: 'Gracias por tu opinión 🙌 Aquí estaré cuando me necesites.'
          }), 600);
        }
      });
    }, 900);
  }

  /* Attach (+) menu */
  function onAttachMedia() {
    setAttachOpen(false);
    attachPhoto();
  }
  function onAttachFile() {
    setAttachOpen(false);
    push({
      from: 'user',
      kind: 'file',
      name: 'documento.pdf',
      size: '240 KB'
    });
    say(() => {
      push({
        from: 'assistant',
        kind: 'text',
        text: 'Recibí tu archivo y lo adjunté a tu solicitud. ¿Algo más?'
      });
    }, 900);
  }
  const wide = window.useIsWide(900);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      borderBottom: '1px solid var(--line)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 860,
      margin: '0 auto',
      padding: '8px clamp(12px,4vw,28px) 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Volver",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(HC.Icon, {
    name: "volver",
    size: 22,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(HatiMark, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: '-.01em'
    }
  }, "Hati")))), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 820,
      margin: '0 auto',
      padding: 'clamp(16px,3vw,28px) clamp(12px,4vw,28px) 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HC.ChatBubble, {
    from: "system"
  }, "Hoy \xB7 9:41"), messages.map((m, i) => {
    const showAvatar = m.from === 'assistant' && (i === 0 || messages[i - 1].from !== 'assistant');
    return /*#__PURE__*/React.createElement(Message, {
      key: m.id,
      m: m,
      showAvatar: showAvatar,
      feedback: feedback,
      setFeedback: setFeedback,
      paidIds: paidIds
    });
  }), typing && /*#__PURE__*/React.createElement(HC.TypingIndicator, null), quick && !typing && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 38,
      alignSelf: 'flex-start',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement(HC.QuickReplies, {
    options: quick.options,
    align: "left",
    onPick: v => quick.handler(v)
  })))), /*#__PURE__*/React.createElement(ChatInput, {
    onSend: submit,
    onVoice: onOpenVoice,
    onAttach: () => setAttachOpen(true),
    placeholder: awaiting === 'cedula' ? 'Número de cédula…' : awaiting === 'direccion' ? 'Dirección del local…' : 'Hablando con Hati…'
  }), attachOpen && /*#__PURE__*/React.createElement(AttachSheet, {
    onClose: () => setAttachOpen(false),
    onCamera: onAttachMedia,
    onPhoto: onAttachMedia,
    onFile: onAttachFile
  }));
}
function Message({
  m,
  showAvatar,
  feedback,
  setFeedback,
  paidIds
}) {
  const D = window.HatilloData;
  const AV = 30,
    GAP = 8;
  if (m.kind === 'text') {
    if (m.from === 'assistant') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          gap: GAP,
          alignSelf: 'flex-start',
          maxWidth: '86%'
        }
      }, showAvatar ? /*#__PURE__*/React.createElement(HatiMark, {
        size: AV
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          width: AV,
          flex: 'none'
        }
      }), /*#__PURE__*/React.createElement(HC.ChatBubble, {
        from: "assistant",
        style: {
          maxWidth: '100%'
        }
      }, m.text)), m.feedback && /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: AV + GAP
        }
      }, /*#__PURE__*/React.createElement(HC.FeedbackButtons, {
        value: feedback[m.id] || null,
        onVote: v => setFeedback(f => ({
          ...f,
          [m.id]: v
        }))
      })));
    }
    return /*#__PURE__*/React.createElement(HC.ChatBubble, {
      from: m.from
    }, m.text);
  }
  if (m.kind === 'photo') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-end',
        maxWidth: '60%',
        borderRadius: 18,
        overflow: 'hidden',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 120,
        background: 'linear-gradient(135deg,#3a4a5e,#0E1B2B)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(HC.Icon, {
      name: "imagen",
      size: 34,
      color: "rgba(255,255,255,.6)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--blue)',
        color: '#fff',
        fontSize: 12,
        padding: '9px 14px',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", null, "hueco-calle50.jpg"), /*#__PURE__*/React.createElement("span", null, "1.2 MB")));
  }
  if (m.kind === 'file') {
    const Clip = (window.HatilloIcons || {}).Clip;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-end',
        maxWidth: '70%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--blue)',
        color: '#fff',
        borderRadius: '18px 18px 6px 18px',
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 8,
        background: 'rgba(255,255,255,.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, Clip ? /*#__PURE__*/React.createElement(Clip, {
      size: 18,
      color: "#fff"
    }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, m.name || 'documento.pdf'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        opacity: .85
      }
    }, m.size || '240 KB')));
  }
  if (m.kind === 'saldos') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignSelf: 'flex-start',
        width: '100%',
        maxWidth: 420
      }
    }, D.saldos.map(s => {
      const paid = paidIds.includes(s.id);
      return /*#__PURE__*/React.createElement(HC.PaymentCard, {
        key: s.id,
        label: s.concepto,
        amount: D.fmt(s.monto),
        status: null,
        meta: `${s.ref} · Vence ${s.vence}`,
        style: {
          maxWidth: 420,
          opacity: paid ? .6 : 1
        },
        badge: paid ? /*#__PURE__*/React.createElement(HC.Badge, {
          status: "paid"
        }, "Pagado") : /*#__PURE__*/React.createElement(HC.Badge, {
          status: "pending"
        }, "Pendiente")
      });
    }));
  }
  if (m.kind === 'receipt') {
    return /*#__PURE__*/React.createElement(HC.Receipt, {
      subtitle: `${m.saldo.concepto} · ${m.saldo.ref}`,
      lines: [{
        k: 'Monto',
        v: D.fmt(m.saldo.monto)
      }, {
        k: 'Método',
        v: m.method === 'yappy' ? 'Yappy' : 'Tarjeta •••• 4821'
      }],
      total: D.fmt(m.saldo.monto),
      footer: "Ref. TXN-8830012 \xB7 07 jul 2026",
      style: {
        maxWidth: 420
      }
    });
  }
  if (m.kind === 'toast') return /*#__PURE__*/React.createElement(HC.Toast, {
    tone: "mint",
    icon: "check"
  }, m.text);
  if (m.kind === 'domain') {
    const d = m.data;
    return /*#__PURE__*/React.createElement(HC.DomainCard, {
      icon: d.icon,
      tint: d.tint,
      title: d.title,
      meta: d.meta,
      badge: /*#__PURE__*/React.createElement(HC.Badge, {
        status: d.badge
      }, d.badgeText),
      rowLabel: d.rowLabel,
      rowValue: d.rowValue,
      style: {
        maxWidth: 420
      }
    });
  }
  if (m.kind === 'faqs') return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(HC.Accordion, {
    items: D.faqs
  }));
  if (m.kind === 'analyze') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 420,
        background: 'var(--white)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-lg)',
        padding: 18,
        alignSelf: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--blue)',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(HC.Icon, {
      name: "info",
      size: 16,
      color: "var(--blue)"
    }), "An\xE1lisis autom\xE1tico"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 16
      }
    }, "Deterioro en la v\xEDa p\xFAblica"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-soft)',
        margin: '4px 0 0'
      }
    }, "Detect\xE9 un hueco en el asfalto de tama\xF1o medio. \xBFEst\xE1 correcta la informaci\xF3n?"));
  }
  if (m.kind === 'map') return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, null));
  return null;
}
function ChatInput({
  onSend,
  onVoice,
  onAttach,
  placeholder
}) {
  const [text, setText] = React.useState('');
  const send = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      borderTop: '1px solid var(--line)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 820,
      margin: '0 auto',
      padding: '10px clamp(12px,4vw,28px) clamp(12px,2vw,18px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-pill)',
      padding: '6px 6px 6px 8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAttach,
    "aria-label": "Agregar",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--fog)',
      color: 'var(--navy)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(HC.Icon, {
    name: "mas",
    size: 22,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    },
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      font: 'inherit',
      fontSize: 15,
      minWidth: 0,
      background: 'transparent'
    }
  }), text.trim() ? /*#__PURE__*/React.createElement(HC.IconButton, {
    icon: "enviar",
    tone: "send",
    title: "Enviar",
    size: 40,
    onClick: send
  }) : /*#__PURE__*/React.createElement(HC.IconButton, {
    icon: "mic",
    tone: "ghost",
    title: "Voz",
    size: 40,
    onClick: onVoice
  }))));
}
Object.assign(window, {
  ChatThread
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/ChatThread.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/Shell.jsx
try { (() => {
/* Hatillo — Home, Historial and Perfil tabs. */
const HS = window.HatilloDesignSystem_5bedaa;
const HDATA = window.HatilloData;
const TONE_PREVIEW = {
  tu: '¡Hola, {n}! Tienes $45.00 pendientes de tu placa. ¿Lo pagamos ahora?',
  usted: 'Buenos días, Sr. {n}. Usted tiene $45.00 pendientes por su placa. ¿Desea proceder con el pago?',
  breve: '{n} · Pendiente $45.00 — impuesto de circulación. ¿Pagar?'
};

/* ---------- Home ---------- */
function SmallChip({
  label,
  accent,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 'none',
      whiteSpace: 'nowrap',
      padding: '8px 15px',
      borderRadius: 999,
      fontSize: 13,
      fontWeight: accent ? 700 : 600,
      fontFamily: 'inherit',
      cursor: 'pointer',
      border: '1px solid ' + (accent ? 'var(--primary-border)' : 'var(--line)'),
      background: accent ? 'var(--primary-surface)' : 'var(--white)',
      color: accent ? 'var(--primary)' : 'var(--ink-soft)'
    }
  }, label);
}
function Sk({
  w = '100%',
  h = 16,
  r = 8,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: r,
      background: 'linear-gradient(90deg, var(--fog) 25%, #eef2f5 37%, var(--fog) 63%)',
      backgroundSize: '400% 100%',
      animation: 'hatiShimmer 1.4s ease infinite',
      ...style
    }
  });
}
function HomeTab({
  user,
  onOpenChat,
  status = 'deudas',
  notifDot = true,
  skeletons = false
}) {
  const name = user.name || 'vecino';
  const chips = [{
    label: 'Pagar mi placa',
    accent: true
  }, {
    label: 'Paz y Salvo'
  }, {
    label: 'Reportar'
  }, {
    label: 'Trámites'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 760,
      margin: '0 auto',
      padding: 'clamp(14px,3vw,28px) clamp(16px,4vw,32px) 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notificaciones",
    style: {
      position: 'relative',
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--line)',
      background: 'var(--white)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "campana",
    size: 20,
    color: "var(--navy)"
  }), notifDot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 11,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--error)',
      border: '1.5px solid var(--white)'
    }
  }))), skeletons ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(6px,1.5vw,14px)'
    }
  }, /*#__PURE__*/React.createElement(Sk, {
    w: "90%",
    h: 40,
    r: 12
  }), /*#__PURE__*/React.createElement(Sk, {
    w: "65%",
    h: 40,
    r: 12,
    style: {
      marginTop: 10
    }
  }), /*#__PURE__*/React.createElement(Sk, {
    w: "100%",
    h: 86,
    r: 20,
    style: {
      marginTop: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Sk, {
    w: 120,
    h: 40,
    r: 999
  }), /*#__PURE__*/React.createElement(Sk, {
    w: 100,
    h: 40,
    r: 999
  }), /*#__PURE__*/React.createElement(Sk, {
    w: 90,
    h: 40,
    r: 999
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(28px,5.2vw,46px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.05,
      margin: 'clamp(6px,1.5vw,14px) 0 0',
      maxWidth: '15ch',
      textWrap: 'balance'
    }
  }, "\xA1Hola, ", name, "! \xBFEn qu\xE9 te puedo ayudar hoy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(20px,3vw,30px)'
    }
  }, status === 'deudas' ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--night)',
      color: '#fff',
      borderRadius: 'var(--r-lg)',
      padding: 'clamp(16px,2.5vw,22px)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 190
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--mint)'
    }
  }, "Pendiente"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(16px,2vw,19px)',
      fontWeight: 600,
      marginTop: 4
    }
  }, "Tienes $45.00 de tu placa 123456.")), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "mint",
    onClick: () => onOpenChat('Pagar mi placa')
  }, "Pagar ahora")) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--success-surface)',
      color: 'var(--success)',
      borderRadius: 'var(--r-md)',
      padding: '13px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "pazysalvo",
    size: 20,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 160,
      fontSize: 15,
      fontWeight: 600
    }
  }, "Est\xE1s al d\xEDa \xB7 Paz y salvo con el Municipio"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpenChat('Quiero mi Paz y Salvo'),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--success)',
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'inherit',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Ver constancia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'clamp(20px,3vw,28px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 4,
      scrollbarWidth: 'none'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(SmallChip, {
    key: c.label,
    label: c.label,
    accent: c.accent,
    onClick: () => onOpenChat(c.label)
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 4,
      width: 44,
      background: 'linear-gradient(90deg, transparent, var(--page))',
      pointerEvents: 'none'
    }
  })))));
}

/* ---------- Historial ---------- */
function HistoryTab({
  onOpenChat,
  onBack
}) {
  const [q, setQ] = React.useState('');
  const [groups, setGroups] = React.useState(() => HDATA.historial.map(g => ({
    ...g,
    items: g.items.map(it => ({
      ...it
    }))
  })));
  const [menuItem, setMenuItem] = React.useState(null);
  const [renameItem, setRenameItem] = React.useState(null);
  const [renameText, setRenameText] = React.useState('');
  const [delItem, setDelItem] = React.useState(null);
  const view = groups.map(g => ({
    ...g,
    items: g.items.filter(it => it.titulo.toLowerCase().includes(q.toLowerCase()))
  })).filter(g => g.items.length);
  const empty = view.length === 0;
  const applyRename = () => {
    setGroups(gs => gs.map(g => ({
      ...g,
      items: g.items.map(it => it.id === renameItem.id ? {
        ...it,
        titulo: renameText.trim() || it.titulo
      } : it)
    })));
    setRenameItem(null);
  };
  const applyDelete = () => {
    setGroups(gs => gs.map(g => ({
      ...g,
      items: g.items.filter(it => it.id !== delItem.id)
    })));
    setDelItem(null);
  };
  const badgeText = e => e === 'paid' ? 'Pagado' : e === 'processing' ? 'En proceso' : 'Resuelto';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 760,
      margin: '0 auto',
      padding: 'clamp(16px,3vw,28px) clamp(16px,4vw,32px) 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 18
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Volver",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "volver",
    size: 24,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(24px,3vw,30px)',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, "Historial")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-pill)',
      padding: '12px 16px',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "buscar",
    size: 18,
    color: "var(--ink-soft)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Buscar en tus conversaciones\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 15,
      minWidth: 0
    }
  })), empty ? /*#__PURE__*/React.createElement(HS.EmptyState, {
    icon: "chat",
    title: "A\xFAn no tienes conversaciones",
    description: "Preg\xFAntame por un pago, un tr\xE1mite o rep\xF3rtame algo de tu calle. Empezamos cuando quieras.",
    action: /*#__PURE__*/React.createElement(HS.Button, {
      variant: "primary",
      onClick: () => onOpenChat('')
    }, "Iniciar conversaci\xF3n")
  }) : view.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.grupo,
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 12
    }
  }, g.grupo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      padding: '16px 12px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpenChat(it.titulo),
    style: {
      flex: 1,
      minWidth: 0,
      display: 'block',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, it.titulo), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--concrete)',
      flex: 'none'
    }
  }, it.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      marginTop: 6
    }
  }, it.prev)), /*#__PURE__*/React.createElement(HS.Badge, {
    status: it.estado
  }, badgeText(it.estado)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuItem(it),
    "aria-label": "Opciones",
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 20,
      fontWeight: 700,
      flex: 'none',
      lineHeight: 1
    }
  }, "\u22EF")))))), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => onOpenChat(''),
    style: {
      marginTop: 8
    }
  }, "Nueva conversaci\xF3n")), menuItem && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 70,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenuItem(null),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(14,27,43,.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: '24px 24px 0 0',
      padding: '18px 16px calc(20px + env(safe-area-inset-bottom))',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 520,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--line)',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      padding: '0 4px 10px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, menuItem.titulo), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setRenameText(menuItem.titulo);
      setRenameItem(menuItem);
      setMenuItem(null);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '14px 14px',
      border: 'none',
      borderRadius: 'var(--r-md)',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      fontSize: 15,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "editar",
    size: 20,
    color: "var(--navy)"
  }), "Renombrar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDelItem(menuItem);
      setMenuItem(null);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '14px 14px',
      border: 'none',
      borderRadius: 'var(--r-md)',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--error)'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "cerrar",
    size: 20,
    color: "var(--error)"
  }), "Borrar"))), renameItem && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setRenameItem(null),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(14,27,43,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: 'var(--r-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-lg)',
      width: '100%',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-.01em',
      marginBottom: 6
    }
  }, "Renombrar conversaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      marginBottom: 16
    }
  }, "Elige un nombre que te ayude a encontrarla."), /*#__PURE__*/React.createElement(HS.Field, {
    value: renameText,
    onChange: e => setRenameText(e.target.value),
    state: "focus"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(HS.Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => setRenameItem(null)
  }, "Cancelar"), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: applyRename
  }, "OK")))), delItem && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setDelItem(null),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(14,27,43,.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--white)',
      borderRadius: 'var(--r-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-lg)',
      width: '100%',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-.01em',
      marginBottom: 6
    }
  }, "\xBFBorrar esta conversaci\xF3n?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      lineHeight: 1.5,
      marginBottom: 20
    }
  }, "Se elimina de aqu\xED, pero guardamos un respaldo por si acaso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HS.Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => setDelItem(null)
  }, "Cancelar"), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "primary",
    fullWidth: true,
    style: {
      background: 'var(--error)'
    },
    onClick: applyDelete
  }, "Borrar")))));
}

/* ---------- Perfil ---------- */
function Row({
  icon,
  label,
  value,
  onClick,
  last
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      borderBottom: last ? 'none' : '1px solid var(--line)',
      padding: '15px 4px',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--r-sm)',
      background: 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: icon,
    size: 20,
    color: "var(--blue)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, label), value && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, value)), onClick && /*#__PURE__*/React.createElement(HS.Icon, {
    name: "chevron",
    size: 18,
    color: "var(--concrete)"
  }));
}
function Switch({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    "aria-label": "Activar",
    style: {
      width: 46,
      height: 28,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: on ? 'var(--blue)' : 'var(--concrete)',
      position: 'relative',
      transition: 'background .15s ease',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .15s ease'
    }
  }));
}
function SubScreen({
  title,
  onBack,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 720,
      margin: '0 auto',
      padding: 'clamp(12px,3vw,24px) clamp(16px,4vw,32px) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Volver",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "volver",
    size: 24,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(22px,3vw,28px)',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, title)), children));
}
const NotifSection = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
    marginBottom: 10
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--white)',
    border: '1px solid var(--line)',
    borderRadius: 'var(--r-lg)',
    padding: '4px 20px'
  }
}, children));
function NotifRow({
  label,
  sub,
  on,
  set,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '15px 4px',
      borderBottom: last ? 'none' : '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 3
    }
  }, sub)), /*#__PURE__*/React.createElement(Switch, {
    on: on,
    onChange: set
  }));
}
function ToneScreen({
  tone,
  onTone,
  name,
  onBack
}) {
  const opts = [{
    id: 'tu',
    t: 'Tú · cercano',
    d: 'Cálido y de tú a tú, usando tu nombre.'
  }, {
    id: 'usted',
    t: 'Usted · formal',
    d: 'Respetuoso y con trato formal.'
  }, {
    id: 'breve',
    t: 'Directo',
    d: 'Al grano, sin rodeos.'
  }];
  const preview = (TONE_PREVIEW[tone] || TONE_PREVIEW.tu).replace('{n}', name || 'vecino');
  return /*#__PURE__*/React.createElement(SubScreen, {
    title: "C\xF3mo te habla Hati",
    onBack: onBack
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)',
      lineHeight: 1.5,
      margin: '-6px 0 20px'
    }
  }, "Elige el trato que prefieras. Puedes cambiarlo cuando quieras."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, opts.map(o => {
    const on = tone === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => onTone(o.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        textAlign: 'left',
        width: '100%',
        background: on ? 'var(--primary-surface)' : 'var(--white)',
        border: '1.5px solid ' + (on ? 'var(--primary-border)' : 'var(--line)'),
        borderRadius: 'var(--r-md)',
        padding: '16px 18px',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: on ? 'var(--primary)' : 'var(--ink)'
      }
    }, o.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-soft)',
        marginTop: 4
      }
    }, o.d)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '2px solid ' + (on ? 'var(--blue)' : 'var(--line)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--blue)'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '24px 0 10px'
    }
  }, "Vista previa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      background: 'var(--fog)',
      padding: '16px 18px',
      borderRadius: 'var(--r-md)',
      borderLeft: '3px solid var(--blue)',
      lineHeight: 1.5
    }
  }, preview));
}
function NotifScreen({
  onBack
}) {
  const [pago, setPago] = React.useState(true);
  const [tramites, setTramites] = React.useState(true);
  const [reportes, setReportes] = React.useState(true);
  const [pagosConf, setPagosConf] = React.useState(true);
  const [muni, setMuni] = React.useState(false);
  return /*#__PURE__*/React.createElement(SubScreen, {
    title: "Notificaciones",
    onBack: onBack
  }, /*#__PURE__*/React.createElement(NotifSection, {
    label: "Recordatorios de pago"
  }, /*#__PURE__*/React.createElement(NotifRow, {
    label: "Av\xEDsame antes de vencer",
    sub: "Te recordamos tus saldos a tiempo",
    on: pago,
    set: setPago,
    last: true
  })), /*#__PURE__*/React.createElement(NotifSection, {
    label: "Tu actividad"
  }, /*#__PURE__*/React.createElement(NotifRow, {
    label: "Tr\xE1mites",
    sub: "Cambios de estado de tus solicitudes",
    on: tramites,
    set: setTramites
  }), /*#__PURE__*/React.createElement(NotifRow, {
    label: "Reportes",
    sub: "Avances de lo que reportas en tu calle",
    on: reportes,
    set: setReportes
  }), /*#__PURE__*/React.createElement(NotifRow, {
    label: "Confirmaciones de pago",
    sub: "Comprobantes al completar un pago",
    on: pagosConf,
    set: setPagosConf,
    last: true
  })), /*#__PURE__*/React.createElement(NotifSection, {
    label: "Del Municipio"
  }, /*#__PURE__*/React.createElement(NotifRow, {
    label: "Novedades y eventos",
    sub: "Anuncios del Municipio de Panam\xE1",
    on: muni,
    set: setMuni,
    last: true
  })));
}
function MetodosScreen({
  onBack
}) {
  const metodos = [{
    id: 'card',
    tipo: 'Visa',
    detalle: '•••• 4821',
    icon: 'tarjeta'
  }, {
    id: 'yappy',
    tipo: 'Yappy',
    detalle: '+507 6123 4567',
    icon: 'placa'
  }];
  return /*#__PURE__*/React.createElement(SubScreen, {
    title: "M\xE9todos de pago",
    onBack: onBack
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 18
    }
  }, metodos.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-sm)',
      background: 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: m.icon,
    size: 20,
    color: "var(--blue)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, m.tipo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, m.detalle))))), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "ghost",
    fullWidth: true
  }, "Agregar m\xE9todo"));
}
function ProfileTab({
  user,
  tone,
  onTone,
  onOpenHistory
}) {
  const [screen, setScreen] = React.useState(null);
  const [verified, setVerified] = React.useState(false);
  if (screen === 'tono') return /*#__PURE__*/React.createElement(ToneScreen, {
    tone: tone,
    onTone: onTone,
    name: user.name,
    onBack: () => setScreen(null)
  });
  if (screen === 'notif') return /*#__PURE__*/React.createElement(NotifScreen, {
    onBack: () => setScreen(null)
  });
  if (screen === 'metodos') return /*#__PURE__*/React.createElement(MetodosScreen, {
    onBack: () => setScreen(null)
  });
  const toneLabel = tone === 'usted' ? 'Usted · formal' : tone === 'breve' ? 'Directo' : 'Tú · cercano';
  const name = user.name || 'Vecino';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 720,
      margin: '0 auto',
      padding: 'clamp(14px,3vw,24px) clamp(16px,4vw,32px) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-xl)',
      padding: 'clamp(22px,4vw,30px)',
      background: 'linear-gradient(155deg, #2E6BFF 0%, #0051FF 45%, #0037B0 100%)',
      color: '#fff',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 300,
      height: 300,
      right: -70,
      bottom: -120,
      background: 'var(--mint)',
      filter: 'blur(85px)',
      opacity: .55,
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 240,
      height: 240,
      left: -80,
      top: -100,
      background: '#4d86ff',
      filter: 'blur(80px)',
      opacity: .6,
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      top: 'clamp(16px,3vw,22px)',
      right: 'clamp(16px,3vw,22px)',
      zIndex: 3,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(255,255,255,.16)',
      border: '1px solid rgba(255,255,255,.3)',
      color: '#fff',
      padding: '9px 15px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "editar",
    size: 15,
    color: "#fff"
  }), "Editar perfil"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 26,
      flex: 'none'
    }
  }, name[0].toUpperCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: .9
    }
  }, "\xA1Qu\xE9 gusto verte! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 'clamp(22px,3vw,26px)',
      letterSpacing: '-.01em',
      marginTop: 2,
      fontFamily: 'var(--font-heading)'
    }
  }, name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 20px',
      marginTop: 18,
      fontSize: 14,
      opacity: .92
    }
  }, /*#__PURE__*/React.createElement("span", null, "+507 6123 4567"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: "correo",
    size: 15,
    color: "rgba(255,255,255,.85)"
  }), "carlos@correo.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: 20,
      marginBottom: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--r-md)',
      background: verified ? 'var(--success-surface)' : 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(HS.Icon, {
    name: verified ? 'pazysalvo' : 'shield',
    size: 24,
    color: verified ? 'var(--success)' : 'var(--blue)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Verifica tu identidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 3,
      lineHeight: 1.45
    }
  }, "Confirma tu c\xE9dula para pagar y hacer tr\xE1mites.")), verified ? /*#__PURE__*/React.createElement(HS.Badge, {
    status: "done"
  }, "Verificado") : /*#__PURE__*/React.createElement(HS.Button, {
    variant: "primary",
    onClick: () => setVerified(true)
  }, "Verificar")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 10
    }
  }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: '4px 20px'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "chat",
    label: "C\xF3mo te habla Hati",
    value: toneLabel,
    onClick: () => setScreen('tono')
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "historial",
    label: "Historial de conversaciones",
    onClick: onOpenHistory
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "tarjeta",
    label: "M\xE9todos de pago",
    value: "Visa \u2022\u2022\u2022\u2022 4821 \xB7 Yappy",
    onClick: () => setScreen('metodos')
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "campana",
    label: "Notificaciones",
    onClick: () => setScreen('notif'),
    last: true
  }))));
}
Object.assign(window, {
  HomeTab,
  HistoryTab,
  ProfileTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/data.jsx
try { (() => {
/* Sample data for the Hatillo assistant prototype. Currency: B/. (Balboa, USD-pegged). */
window.HatilloData = {
  fmt: n => '$' + n.toFixed(2),
  saldos: [{
    id: 'placa',
    concepto: 'Impuesto de circulación',
    monto: 45.0,
    ref: 'Placa 123456',
    vence: '30 jun 2026',
    estado: 'pending'
  }, {
    id: 'ibi',
    concepto: 'IBI · Bien inmueble',
    monto: 128.5,
    ref: 'Finca 45789',
    vence: '15 jul 2026',
    estado: 'pending'
  }],
  chips: [{
    label: 'Pagar mi placa',
    intent: 'pago'
  }, {
    label: 'Sacar Paz y Salvo',
    intent: 'pazysalvo'
  }, {
    label: 'Reportar en mi calle',
    intent: 'reporte'
  }, {
    label: 'Trámites',
    intent: 'tramite'
  }, {
    label: 'Preguntas frecuentes',
    intent: 'faq'
  }],
  actividades: ['Comercio al por menor', 'Servicios profesionales', 'Restaurante / fonda', 'Taller o manufactura'],
  tramiteTipos: ['Aviso de Operación', 'Permiso de construcción', 'Registro de negocio'],
  faqs: [{
    q: '¿Cómo saco el Aviso de Operación?',
    a: 'Lo puedes iniciar aquí mismo: necesitas cédula, tipo de actividad y dirección del local. Te guío paso a paso.'
  }, {
    q: '¿Cuándo vence el pago de mi placa?',
    a: 'El impuesto de circulación vence según el último dígito de tu placa. Dime tu número y te digo la fecha exacta.'
  }, {
    q: '¿Qué es el Paz y Salvo municipal?',
    a: 'Es la constancia de que no debes al Municipio. Te lo genero al instante si estás al día.'
  }, {
    q: '¿Puedo pagar con Yappy?',
    a: 'Sí. En cualquier pago puedes elegir tarjeta o Yappy — la billetera móvil más usada en Panamá.'
  }],
  historial: [{
    grupo: 'Hoy',
    items: [{
      id: 'c1',
      titulo: 'Pago placa 123456',
      prev: 'Comprobante TXN-8830012 · $45.00',
      estado: 'paid',
      time: '9:41'
    }, {
      id: 'c2',
      titulo: 'Reporte — hueco Calle 50',
      prev: 'En proceso · Cuadrilla asignada',
      estado: 'processing',
      time: '8:10'
    }]
  }, {
    grupo: 'Esta semana',
    items: [{
      id: 'c3',
      titulo: 'Aviso de Operación',
      prev: 'Solicitud #AO-20984 · En proceso',
      estado: 'processing',
      time: 'Lun'
    }, {
      id: 'c4',
      titulo: 'Paz y Salvo municipal',
      prev: 'Constancia #PS-7781 · Emitido',
      estado: 'done',
      time: 'Dom'
    }]
  }],
  metodos: [{
    id: 'card',
    tipo: 'Tarjeta',
    detalle: 'Visa •••• 4821'
  }, {
    id: 'yappy',
    tipo: 'Yappy',
    detalle: '+507 6123 4567'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/icons.jsx
try { (() => {
/* Hatillo — brand fill-icons supplied by the user (nav, AI/voice, attach actions).
   Rendered inline so they inherit `color` (fill: currentColor) for active states. */
function svgIcon(viewBox, children) {
  return function IconCmp({
    size = 24,
    color = 'currentColor',
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: viewBox,
      width: size,
      height: size,
      fill: color,
      style: {
        display: 'block',
        ...style
      },
      "aria-hidden": "true"
    }, children);
  };
}
const Home = svgIcon('0 0 24 24', /*#__PURE__*/React.createElement("path", {
  d: "m19.79,7.83l-5.54-4.75c-1.25-1.07-3.24-1.07-4.49,0l-5.54,4.75c-.61.52-.96,1.28-.96,2.09v9.08c0,1.52,1.23,2.75,2.75,2.75h12c1.52,0,2.75-1.23,2.75-2.75v-9.08c0-.8-.35-1.57-.96-2.09Zm-5.54,12.42h-4.5v-4.25c0-.69.56-1.25,1.25-1.25h2c.69,0,1.25.56,1.25,1.25v4.25Zm5-1.25c0,.69-.56,1.25-1.25,1.25h-2.25v-4.25c0-1.52-1.23-2.75-2.75-2.75h-2c-1.52,0-2.75,1.23-2.75,2.75v4.25h-2.25c-.69,0-1.25-.56-1.25-1.25v-9.08c0-.37.16-.71.44-.95l5.54-4.75c.35-.3.8-.47,1.27-.47s.92.17,1.27.47l5.54,4.75c.28.24.44.58.44.95v9.08Z"
}));
const History = svgIcon('0 0 24 24', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m13,7.25c-.41,0-.75.34-.75.75v3.46c0,.59.29,1.13.78,1.46l2.55,1.7c.13.08.27.13.42.13.24,0,.48-.12.62-.33.23-.34.14-.81-.21-1.04l-2.55-1.7c-.07-.05-.11-.12-.11-.21v-3.46c0-.41-.34-.75-.75-.75Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13,3.25c-4.22,0-7.81,3.01-8.59,7.09l-.88-.88c-.29-.29-.77-.29-1.06,0s-.29.77,0,1.06l2.02,2c.14.14.33.22.53.22h0c.2,0,.39-.08.53-.22l1.98-2c.29-.29.29-.77,0-1.06-.29-.29-.77-.29-1.06,0l-.4.4c.91-2.99,3.7-5.13,6.93-5.13,4,0,7.25,3.25,7.25,7.25s-3.25,7.25-7.25,7.25c-2.21,0-4.28-.99-5.65-2.72-.26-.32-.73-.38-1.05-.12-.32.26-.38.73-.12,1.05,1.66,2.09,4.15,3.28,6.83,3.28,4.82,0,8.75-3.92,8.75-8.75S17.82,3.25,13,3.25Z"
})));
const User = svgIcon('0 0 24 24', /*#__PURE__*/React.createElement("path", {
  d: "M12 11.75c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75-4.75 2.13-4.75 4.75 2.13 4.75 4.75 4.75zm0-8c1.79 0 3.25 1.46 3.25 3.25s-1.46 3.25-3.25 3.25-3.25-1.46-3.25-3.25 1.46-3.25 3.25-3.25zM15 13.25h-6c-3.17 0-5.75 2.58-5.75 5.75 0 1.52 1.23 2.75 2.75 2.75h12c1.52 0 2.75-1.23 2.75-2.75 0-3.17-2.58-5.75-5.75-5.75zm3 7H6c-.69 0-1.25-.56-1.25-1.25 0-2.34 1.91-4.25 4.25-4.25h6c2.34 0 4.25 1.91 4.25 4.25 0 .69-.56 1.25-1.25 1.25z"
}));

/* AI + voice mark. Rendered monochrome so it reads white on the blue FAB. */
const AiVoice = svgIcon('0 0 48 48', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M42.563 1.752c-.126-.612-1-.612-1.125 0a3.45 3.45 0 0 1-2.686 2.685c-.612.126-.612 1 0 1.126a3.45 3.45 0 0 1 2.686 2.685c.125.612 1 .612 1.125 0a3.45 3.45 0 0 1 2.685-2.685c.612-.126.612-1 0-1.126a3.45 3.45 0 0 1-2.685-2.685m-6.625 5.835c-.209-1.02-1.667-1.02-1.875 0a5.74 5.74 0 0 1-4.476 4.476c-1.02.208-1.02 1.666 0 1.875a5.74 5.74 0 0 1 4.476 4.475c.208 1.02 1.666 1.02 1.875 0a5.74 5.74 0 0 1 4.475-4.475c1.02-.209 1.02-1.667 0-1.875a5.74 5.74 0 0 1-4.475-4.476"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.317 8.535a1.5 1.5 0 0 0 1.366-2.671zm7.712 14.873a1.5 1.5 0 1 0-2.886-.816zm-25.9 4.604a1.5 1.5 0 0 0-2.258 1.976zm.603 2.967 1.129-.987zm26.536 0 1.129.988zm2.86-.991a1.5 1.5 0 0 0-2.257-1.976zM25.5 38a1.5 1.5 0 0 0-3 0zm-3 5a1.5 1.5 0 0 0 3 0zm-2.5-.5a1.5 1.5 0 0 0 0 3zm8 3a1.5 1.5 0 0 0 0-3zM14.5 20v-3h-3v3zm9.5 9.5a9.5 9.5 0 0 1-9.5-9.5h-3c0 6.904 5.596 12.5 12.5 12.5zm0-25c-6.904 0-12.5 5.596-12.5 12.5h3A9.5 9.5 0 0 1 24 7.5zm0 3c1.558 0 3.024.374 4.317 1.035l1.366-2.671A12.45 12.45 0 0 0 24 4.5zm9.143 15.092A9.505 9.505 0 0 1 24 29.5v3c5.724 0 10.546-3.846 12.03-9.092zM7.87 29.988l1.732 1.98 2.258-1.976-1.732-1.98zm30.526 1.98 1.732-1.98-2.258-1.976-1.732 1.98zM24 38.5a19.13 19.13 0 0 0 14.397-6.533l-2.258-1.975A16.13 16.13 0 0 1 24 35.5zM9.603 31.967A19.13 19.13 0 0 0 24 38.5v-3a16.13 16.13 0 0 1-12.14-5.508zM22.5 38v5h3v-5zM20 45.5h8v-3h-8z"
})));
const Camera = svgIcon('0 0 24 24', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m12,7.75c-2.62,0-4.75,2.13-4.75,4.75s2.13,4.75,4.75,4.75,4.75-2.13,4.75-4.75-2.13-4.75-4.75-4.75Zm0,8c-1.79,0-3.25-1.46-3.25-3.25s1.46-3.25,3.25-3.25,3.25,1.46,3.25,3.25-1.46,3.25-3.25,3.25Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19,5.25h-1.17c-.33,0-.65-.13-.88-.37l-.83-.83c-.52-.52-1.21-.81-1.94-.81h-4.34c-.73,0-1.42.29-1.94.81l-.83.83c-.23.23-.55.37-.88.37h-1.17c-1.52,0-2.75,1.23-2.75,2.75v10c0,1.52,1.23,2.75,2.75,2.75h14c1.52,0,2.75-1.23,2.75-2.75v-10c0-1.52-1.23-2.75-2.75-2.75Zm1.25,12.75c0,.69-.56,1.25-1.25,1.25H5c-.69,0-1.25-.56-1.25-1.25v-10c0-.69.56-1.25,1.25-1.25h1.17c.73,0,1.42-.29,1.94-.81l.83-.83c.23-.23.55-.37.88-.37h4.34c.33,0,.65.13.88.37l.83.83c.52.52,1.21.81,1.94.81h1.17c.69,0,1.25.56,1.25,1.25v10Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "9",
  r: "1"
})));
const Clip = svgIcon('0 0 100 100', /*#__PURE__*/React.createElement("path", {
  d: "M68.25,67.85a17.86,17.86,0,1,1-35.71,0V25.37a10.91,10.91,0,1,1,21.82,0V65.66a4,4,0,0,1-8,0V28.44h-7V65.66a11,11,0,0,0,22,0V25.37a17.91,17.91,0,1,0-35.82,0V67.85a24.86,24.86,0,1,0,49.71,0V28.44h-7Z"
}));
const Picture = svgIcon('0 0 24 24', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m18,3.25H6c-1.52,0-2.75,1.23-2.75,2.75v12c0,1.52,1.23,2.75,2.75,2.75h12c1.52,0,2.75-1.23,2.75-2.75V6c0-1.52-1.23-2.75-2.75-2.75Zm-12,1.5h12c.69,0,1.25.56,1.25,1.25v9.6l-2.22-1.74c-.6-.47-1.42-.5-2.05-.08l-1.89,1.26-2.86-2.86c-.66-.66-1.81-.66-2.47,0l-3.01,3.01V6c0-.69.56-1.25,1.25-1.25Zm12,14.5H6c-.69,0-1.25-.56-1.25-1.25v-.69l4.07-4.07c.1-.1.26-.1.35,0l4.29,4.29c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77,0-1.06l-.35-.35,1.64-1.09c.09-.06.21-.05.29.01l3.14,2.47v.5c0,.69-.56,1.25-1.25,1.25Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14,11.75c1.52,0,2.75-1.23,2.75-2.75s-1.23-2.75-2.75-2.75-2.75,1.23-2.75,2.75,1.23,2.75,2.75,2.75Zm0-4c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25.56-1.25,1.25-1.25Z"
})));
window.HatilloIcons = {
  Home,
  History,
  User,
  AiVoice,
  Camera,
  Clip,
  Picture
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asistente/voice.jsx
try { (() => {
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
function VoiceScreen({
  onClose,
  onReply
}) {
  const HR = window.HatilloDesignSystem_5bedaa;
  const [state, setState] = React.useState('reposo'); // reposo|escuchando|procesando|respondiendo
  const [words, setWords] = React.useState(0);
  const full = '¿Cuánto debo de mi placa 123456?'.split(' ');
  const timers = React.useRef([]);
  ensureVoiceKf();
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  React.useEffect(() => () => clearTimers(), []);
  function start() {
    clearTimers();
    setWords(0);
    setState('escuchando');
    full.forEach((_, i) => timers.current.push(setTimeout(() => setWords(i + 1), 340 * (i + 1))));
    timers.current.push(setTimeout(() => stop(), 340 * full.length + 1000));
  }
  function stop() {
    clearTimers();
    setState('procesando');
    timers.current.push(setTimeout(() => setState('respondiendo'), 1500));
  }
  function toggle() {
    if (state === 'escuchando') stop();else start();
  }
  const label = {
    reposo: 'Toca para hablar',
    escuchando: 'Escuchando… toca para detener',
    procesando: 'Procesando…',
    respondiendo: 'Hati responde'
  }[state];
  const transcript = full.slice(0, words).join(' ');
  const listening = state === 'escuchando';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--night)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,.12)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HR.Icon, {
    name: "cerrar",
    size: 20,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 28,
      padding: '0 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--concrete)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 96,
      maxWidth: 460,
      display: 'flex',
      alignItems: 'center'
    }
  }, (state === 'escuchando' || state === 'procesando') && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(22px,4vw,30px)',
      fontWeight: 700,
      letterSpacing: '-.01em',
      lineHeight: 1.2
    }
  }, transcript || /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--concrete)'
    }
  }, "\u2026")), state === 'respondiendo' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(18px,3vw,22px)',
      fontWeight: 600,
      lineHeight: 1.45
    }
  }, "Tienes un saldo pendiente de ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--mint)'
    }
  }, "$45.00"), " por tu placa 123456. \xBFC\xF3mo quieres pagarlo?"), state === 'reposo' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(18px,3vw,22px)',
      color: 'var(--concrete)',
      maxWidth: '20ch'
    }
  }, "Preg\xFAntame por un pago, un tr\xE1mite o un reporte.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      opacity: listening ? 1 : 0,
      transition: 'opacity .2s'
    }
  }, [0, .1, .2, .3, .15, .05, .25, .12, .18].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 5,
      borderRadius: 3,
      background: 'var(--mint)',
      height: 12,
      animation: listening ? `hatilloEq 1.1s ease-in-out ${d}s infinite` : 'none'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-label": listening ? 'Detener' : 'Hablar',
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: state === 'reposo' ? 'rgba(0,81,255,.55)' : 'var(--blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: listening ? 'hatilloPulse 1.4s ease-out infinite' : 'none',
      transition: 'background .2s'
    }
  }, state === 'procesando' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [0, .2, .4].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#fff',
      animation: `hatilloSpinDot 1.2s ${d}s infinite`
    }
  }))) : /*#__PURE__*/React.createElement(HR.Icon, {
    name: "mic",
    size: 38,
    color: "#fff",
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '0 24px calc(28px + env(safe-area-inset-bottom))',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 64
    }
  }, state === 'respondiendo' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, ['Pagar con tarjeta', 'Pagar con Yappy'].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => onReply && onReply(o),
    style: {
      border: '1.5px solid rgba(255,255,255,.3)',
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      padding: '12px 18px',
      borderRadius: 'var(--r-pill)',
      fontSize: 15,
      fontWeight: 700,
      fontFamily: 'inherit',
      cursor: 'pointer'
    }
  }, o)))));
}
window.VoiceScreen = VoiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asistente/voice.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.DomainCard = __ds_scope.DomainCard;

__ds_ns.PaymentCard = __ds_scope.PaymentCard;

__ds_ns.Receipt = __ds_scope.Receipt;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.FeedbackButtons = __ds_scope.FeedbackButtons;

__ds_ns.QuickReplies = __ds_scope.QuickReplies;

__ds_ns.ToneToggle = __ds_scope.ToneToggle;

__ds_ns.TypingIndicator = __ds_scope.TypingIndicator;

__ds_ns.VoiceState = __ds_scope.VoiceState;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.HATILLO_ICONS = __ds_scope.HATILLO_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.COUNTRIES = __ds_scope.COUNTRIES;

__ds_ns.CountrySelector = __ds_scope.CountrySelector;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.OtpInput = __ds_scope.OtpInput;

__ds_ns.PhoneField = __ds_scope.PhoneField;

__ds_ns.BottomNav = __ds_scope.BottomNav;

})();
