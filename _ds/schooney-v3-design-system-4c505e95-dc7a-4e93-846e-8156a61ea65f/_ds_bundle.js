/* @ds-bundle: {"format":3,"namespace":"SchooneyV3DesignSystem_4c505e","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"d3a74081af8f","components/core/Avatar.jsx":"eb648851f1c2","components/core/Badge.jsx":"a85c5224ac91","components/core/Button.jsx":"3f7170edf971","components/core/Card.jsx":"284835d58b9f","components/core/Icon.jsx":"4c9f9bf2451c","components/core/Input.jsx":"83551ef0b9d4","components/core/Tabs.jsx":"3849c011b245","ui_kits/sch-web/App.jsx":"426260229960","ui_kits/sch-web/Screens.jsx":"79c08e984c2b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SchooneyV3DesignSystem_4c505e = window.SchooneyV3DesignSystem_4c505e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — circular initials chip. Pass a name (initials are derived) and one
 * of the user accent colours.
 */
function Avatar({
  name = '?',
  color = 'var(--user-green-1)',
  size = 36
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: color,
      color: 'var(--neutral-800)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: size * 0.38,
      fontWeight: 600,
      flexShrink: 0
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  default: {
    bg: 'var(--neutral-800)',
    fg: 'var(--neutral-0)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--neutral-100)',
    fg: 'var(--text-primary)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-primary)',
    bd: 'var(--border-secondary)'
  },
  brand: {
    bg: 'var(--surface-brand)',
    fg: 'var(--surface-brand-contrast)',
    bd: 'transparent'
  },
  destructive: {
    bg: 'var(--red-200)',
    fg: 'var(--neutral-0)',
    bd: 'transparent'
  },
  success: {
    bg: 'var(--green-dark-200)',
    fg: 'var(--neutral-800)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--yellow-300)',
    fg: 'var(--neutral-800)',
    bd: 'transparent'
  },
  info: {
    bg: 'var(--blue-200)',
    fg: 'var(--neutral-800)',
    bd: 'transparent'
  }
};

/**
 * Badge — compact status / category chip. 6px radius, bold 12px label.
 */
function Badge({
  variant = 'default',
  children,
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 9px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${v.bd}`,
      background: v.bg,
      color: v.fg,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '16px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const VARIANTS = {
  default: {
    bg: 'var(--surface-card)',
    bd: 'var(--border-secondary)',
    fg: 'var(--text-primary)',
    shadow: 'var(--shadow-sm)'
  },
  earth: {
    bg: 'var(--earth-200)',
    bd: 'var(--earth-200)',
    fg: 'var(--text-primary)',
    shadow: 'none'
  },
  brand: {
    bg: 'var(--surface-brand)',
    bd: 'var(--surface-brand)',
    fg: 'var(--neutral-800)',
    shadow: 'none'
  },
  muted: {
    bg: 'var(--earth-100)',
    bd: 'var(--earth-100)',
    fg: 'var(--text-primary)',
    shadow: 'none'
  }
};

/**
 * Card — surface container. White by default on the earth canvas; earth/brand/
 * muted fills for accent panels. 16px radius, hairline border, optional click.
 */
function Card({
  variant = 'default',
  children,
  onClick,
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: v.bg,
      color: v.fg,
      border: `1px solid ${v.bd}`,
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: v.shadow,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--duration) var(--ease), box-shadow var(--duration) var(--ease)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — thin wrapper around a Lucide glyph. Renders an <i data-lucide> node;
 * call window.lucide.createIcons() after mount to hydrate it into an SVG.
 */
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      strokeWidth,
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
/**
 * Alert — inline notice on a white surface. Default (informational) or
 * destructive. Optional title and dismiss control.
 */
function Alert({
  variant = 'default',
  title,
  children,
  onDismiss
}) {
  const isDestructive = variant === 'destructive';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 12,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${isDestructive ? 'var(--border-danger)' : 'var(--border-secondary)'}`,
      background: 'var(--surface-card)',
      color: isDestructive ? 'var(--text-danger)' : 'var(--text-primary)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isDestructive ? 'alert-circle' : 'check-circle-2',
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.2,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      opacity: 0.85
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      opacity: 0.6,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--button-primary)',
    fg: 'var(--button-primary-fg)',
    bd: 'transparent',
    hover: '#000000'
  },
  brand: {
    bg: 'var(--button-brand)',
    fg: 'var(--button-brand-fg)',
    bd: 'transparent',
    hover: 'var(--gold-300)'
  },
  outline: {
    bg: 'var(--neutral-0)',
    fg: 'var(--text-primary)',
    bd: 'var(--border-secondary)',
    hover: 'var(--neutral-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-primary)',
    bd: 'transparent',
    hover: 'var(--neutral-100)'
  },
  destructive: {
    bg: 'var(--button-danger)',
    fg: 'var(--button-danger-fg)',
    bd: 'transparent',
    hover: '#E02828'
  }
};
const SIZES = {
  sm: {
    h: 32,
    px: 12,
    fs: 13
  },
  md: {
    h: 40,
    px: 16,
    fs: 14
  },
  lg: {
    h: 48,
    px: 20,
    fs: 16
  }
};

/**
 * Button — the primary action element. Five variants, three sizes, optional
 * leading/trailing icons. 6px radius, 150ms hover.
 */
function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  disabled = false,
  onClick,
  type = 'button',
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: s.h,
      padding: `0 ${s.px}px`,
      fontSize: s.fs,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${v.bd}`,
      background: disabled ? v.bg : hover ? v.hover : v.bg,
      color: v.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: s.fs + 2
  }), children, rightIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: s.fs + 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with optional icons, hint and error states.
 * 40px height, 6px radius, border darkens to text-primary on focus.
 */
function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  style = {},
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--border-danger)' : focus ? 'var(--text-primary)' : 'var(--border-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 40,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      background: props.disabled ? 'var(--neutral-100)' : 'var(--neutral-0)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      transition: 'border-color var(--duration-fast) var(--ease)',
      opacity: props.disabled ? 0.6 : 1
    }
  }, leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: 16,
    color: "var(--icon-secondary)"
  }), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    onFocus: e => {
      setFocus(true);
      props.onFocus && props.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur && props.onBlur(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-primary)',
      height: '100%'
    }
  })), rightIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: 16,
    color: "var(--icon-secondary)"
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--text-danger)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — segmented control. Controlled: pass `value` and `onChange`.
 */
function Tabs({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      gap: 2,
      background: 'var(--neutral-100)',
      borderRadius: 'var(--radius-md)'
    }
  }, items.map(it => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        padding: '6px 14px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: active ? 'var(--neutral-0)' : 'transparent',
        color: 'var(--text-primary)',
        fontSize: 13,
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--duration-fast) var(--ease)',
        whiteSpace: 'nowrap'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sch-web/App.jsx
try { (() => {
// Schooney V3 web UI kit — app shell / state machine
function App() {
  const [user, setUser] = React.useState(null);
  const [route, setRoute] = React.useState('dashboard');
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  if (!user) return /*#__PURE__*/React.createElement(SignIn, {
    onSignIn: setUser
  });
  const titles = {
    dashboard: 'Dashboard',
    scholarships: 'Scholarships',
    applications: 'Applications',
    messages: 'Messages',
    calendar: 'Calendar'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      minHeight: '100vh',
      background: 'var(--surface-primary)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: route,
    onNav: setRoute,
    user: user,
    onSignOut: () => setUser(null)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: titles[route] || 'Schooney'
  }), route === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    user: user
  }), route === 'scholarships' && /*#__PURE__*/React.createElement(Scholarships, null), route !== 'dashboard' && route !== 'scholarships' && /*#__PURE__*/React.createElement(Placeholder, {
    title: titles[route]
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sch-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sch-web/Screens.jsx
try { (() => {
// Schooney V3 web UI kit — screens. Components come from the compiled DS bundle.
const {
  Button,
  Input,
  Badge,
  Card,
  Avatar,
  Tabs,
  Alert,
  Icon
} = window.SchooneyV3DesignSystem_4c505e;
function Logo({
  size = 32,
  radius = 8,
  font = 16
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: 'var(--surface-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--neutral-800)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: font,
      flexShrink: 0
    }
  }, "S");
}
function SignIn({
  onSignIn
}) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!email || !pw) {
      setErr('Please enter both fields');
      return;
    }
    onSignIn({
      email,
      name: email.split('@')[0] || 'Friend'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-secondary)',
      padding: 32,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 44,
    radius: 12,
    font: 22
  })), /*#__PURE__*/React.createElement("h3", null, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 4,
      marginBottom: 24
    }
  }, "Sign in to continue to Schooney."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr('');
    },
    leftIcon: "mail"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    value: pw,
    onChange: e => {
      setPw(e.target.value);
      setErr('');
    },
    leftIcon: "lock",
    error: err
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "lg",
    type: "submit",
    style: {
      width: '100%',
      marginTop: 4
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    leftIcon: "github",
    style: {
      width: '100%'
    }
  }, "Continue with GitHub")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "Create one"))));
}
function Sidebar({
  active,
  onNav,
  user,
  onSignOut
}) {
  const items = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'scholarships',
    label: 'Scholarships',
    icon: 'graduation-cap'
  }, {
    id: 'applications',
    label: 'Applications',
    icon: 'file-text'
  }, {
    id: 'messages',
    label: 'Messages',
    icon: 'mail'
  }, {
    id: 'calendar',
    label: 'Calendar',
    icon: 'calendar'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-secondary)',
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      gap: 4,
      height: '100vh',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 8px 16px'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, "Schooney")), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: active === it.id ? 'var(--surface-primary)' : 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: active === it.id ? 600 : 500,
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease)',
      width: '100%'
    },
    onMouseEnter: e => {
      if (active !== it.id) e.currentTarget.style.background = 'var(--neutral-50)';
    },
    onMouseLeave: e => {
      if (active !== it.id) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16,
    color: "var(--icon-primary)"
  }), it.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      borderTop: '1px solid var(--border-secondary)',
      paddingTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: user.name,
    color: "var(--user-green-1)",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.email)), /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    title: "Sign out",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--icon-secondary)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 16
  }))));
}
function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      borderBottom: '1px solid var(--border-secondary)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search",
    leftIcon: "search",
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    leftIcon: "bell"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "md",
    leftIcon: "plus"
  }, "New application")));
}
function Dashboard({
  user
}) {
  const stats = [{
    label: 'Active applications',
    value: '12',
    delta: '+3 this week',
    icon: 'file-text'
  }, {
    label: 'Interviews scheduled',
    value: '4',
    delta: 'Next: Tue 10:00',
    icon: 'calendar'
  }, {
    label: 'Matched scholarships',
    value: '28',
    delta: '+6 new',
    icon: 'graduation-cap'
  }, {
    label: 'Deadlines this month',
    value: '7',
    delta: '2 urgent',
    icon: 'alert-circle'
  }];
  const activity = [{
    who: 'Niran P.',
    color: 'var(--user-green-1)',
    action: 'submitted an application to',
    what: 'Thammasat Merit Fund',
    when: '2h ago'
  }, {
    who: 'Admin',
    color: 'var(--user-pink-1)',
    action: 'requested documents for',
    what: 'Bangkok Bank Grant',
    when: '5h ago'
  }, {
    who: 'Pim W.',
    color: 'var(--user-blue-1)',
    action: 'commented on',
    what: 'CU International 2026',
    when: 'Yesterday'
  }, {
    who: 'System',
    color: 'var(--user-yellow-1)',
    action: 'matched you with',
    what: '6 new scholarships',
    when: '2d ago'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    title: "Your scholarship matches refreshed",
    onDismiss: () => {}
  }, "We found 6 new opportunities that fit your profile. Have a look when you're ready."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Good morning, ", user.name.split(' ')[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '4px 0 0'
    }
  }, "Here's what's happening with your applications today.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 14,
    color: "var(--icon-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, s.delta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h5", null, "Recent activity"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    rightIcon: "arrow-right"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderBottom: i < activity.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.who,
    color: a.color,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, a.who), " ", a.action, " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, a.what)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, a.when)))))), /*#__PURE__*/React.createElement(Card, {
    variant: "earth"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand",
    style: {
      marginBottom: 12
    }
  }, "Due soon"), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 6
    }
  }, "Finish your profile"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      opacity: 0.8,
      margin: '0 0 16px'
    }
  }, "You're 2 steps away from unlocking 12 more scholarship matches."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--neutral-0)',
      borderRadius: 999,
      overflow: 'hidden',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60%',
      height: '100%',
      background: 'var(--surface-brand)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 16
    }
  }, "60% complete"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    rightIcon: "arrow-right"
  }, "Continue"))));
}
function Scholarships() {
  const [tab, setTab] = React.useState('matches');
  const all = [{
    name: 'Thammasat Merit Fund',
    amount: '฿120,000',
    deadline: 'Apr 30',
    level: 'Undergraduate',
    status: 'matches',
    badge: ['success', 'Match']
  }, {
    name: 'Bangkok Bank Grant',
    amount: '฿80,000',
    deadline: 'May 10',
    level: 'Graduate',
    status: 'applied',
    badge: ['info', 'In review']
  }, {
    name: 'CU International 2026',
    amount: 'Full ride',
    deadline: 'May 15',
    level: 'Undergraduate',
    status: 'matches',
    badge: ['success', 'Match']
  }, {
    name: 'Mahidol Medical Prep',
    amount: '฿60,000',
    deadline: 'Jun 01',
    level: 'Undergraduate',
    status: 'applied',
    badge: ['warning', 'Action needed']
  }, {
    name: 'KX Innovation Fellowship',
    amount: '฿150,000',
    deadline: 'Jun 12',
    level: 'Graduate',
    status: 'saved',
    badge: ['secondary', 'Saved']
  }, {
    name: 'TU Creative Arts',
    amount: '฿45,000',
    deadline: 'Jul 05',
    level: 'Undergraduate',
    status: 'matches',
    badge: ['success', 'Match']
  }];
  const rows = all.filter(r => r.status === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Scholarships"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '4px 0 0'
    }
  }, "Browse matches curated for your profile.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leftIcon: "filter"
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    leftIcon: "arrow-up-down"
  }, "Sort"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'matches',
      label: `Matches · ${all.filter(r => r.status === 'matches').length}`
    }, {
      value: 'applied',
      label: `Applied · ${all.filter(r => r.status === 'applied').length}`
    }, {
      value: 'saved',
      label: `Saved · ${all.filter(r => r.status === 'saved').length}`
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--neutral-50)',
      borderBottom: '1px solid var(--border-secondary)'
    }
  }, ['Scholarship', 'Amount', 'Level', 'Deadline', 'Status', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      letterSpacing: '0.02em',
      textTransform: 'uppercase'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, r.amount), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, r.level), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, r.deadline), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: r.badge[0]
  }, r.badge[1])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    rightIcon: "arrow-right"
  }, "View"))))))));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      margin: 0
    }
  }, "This screen isn't defined in the source Figma \u2014 included here to show nav behaviour.")));
}
Object.assign(window, {
  SignIn,
  Sidebar,
  TopBar,
  Dashboard,
  Scholarships,
  Placeholder,
  Logo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sch-web/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
