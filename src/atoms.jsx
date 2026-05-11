// Sanad — atoms (Button, Card, Field, Tag, Avatar, Stars, NavBar, TabBar, ProgressDots, etc.)

const { useState, useMemo } = React;

// ── shared base style helpers ─────────────────────────────────
function useTheme() {
  return window.__sanadTheme || window.SanadTokens.buildTheme({
    palette: 'teal', cardStyle: 'rounded', density: 'cozy', dark: false, font: 'plex', rtl: true,
  });
}

function Button({ children, variant = 'primary', size = 'md', icon, iconRight, full, onClick, style = {}, theme: t }) {
  t = t || useTheme();
  const heights = { sm: 40, md: t.density.btnH, lg: 60 };
  const fonts = { sm: 14, md: 16, lg: 17 };
  const variants = {
    primary:   { bg: t.primary, fg: '#fff', border: 'transparent' },
    secondary: { bg: t.surface, fg: t.primary, border: t.primary },
    ghost:     { bg: 'transparent', fg: t.ink, border: 'transparent' },
    soft:      { bg: t.primarySoft, fg: t.primaryDeep || t.primary, border: 'transparent' },
    danger:    { bg: t.danger, fg: '#fff', border: 'transparent' },
    surface:   { bg: t.surface2, fg: t.ink, border: t.border },
    dark:      { bg: t.ink, fg: t.surface, border: 'transparent' },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      height: heights[size],
      padding: size === 'lg' ? '0 26px' : '0 18px',
      borderRadius: t.radius.button,
      background: v.bg,
      color: v.fg,
      border: `1.5px solid ${v.border}`,
      fontFamily: t.font,
      fontWeight: 600,
      fontSize: fonts[size],
      letterSpacing: '-0.01em',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      width: full ? '100%' : undefined,
      transition: 'transform 0.1s ease',
      ...style,
    }}>
      {icon && <SanadIcon name={icon} size={20} />}
      <span>{children}</span>
      {iconRight && <SanadIcon name={iconRight} size={18} />}
    </button>
  );
}

function Card({ children, style = {}, padding, elevated, theme: t }) {
  t = t || useTheme();
  return (
    <div style={{
      background: t.surface,
      borderRadius: t.radius.card,
      border: `1px solid ${t.border}`,
      padding: padding ?? t.density.padCard,
      boxShadow: elevated
        ? '0 1px 0 rgba(0,0,0,0.02), 0 8px 28px rgba(15,20,20,0.06)'
        : '0 1px 0 rgba(0,0,0,0.02)',
      ...style,
    }}>{children}</div>
  );
}

function SectionTitle({ children, action, theme: t, style }) {
  t = t || useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '6px 4px 10px', ...style }}>
      <div style={{ fontWeight: 600, fontSize: 16, color: t.ink, letterSpacing: '-0.01em' }}>{children}</div>
      {action && <div style={{ fontSize: 13, color: t.primary, fontWeight: 500 }}>{action}</div>}
    </div>
  );
}

function Tag({ children, color, soft, icon, theme: t, style }) {
  t = t || useTheme();
  const c = color || t.primary;
  const bg = soft || t.primarySoft;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: t.radius.chip,
      background: bg, color: c,
      fontSize: 12.5, fontWeight: 500,
      ...style,
    }}>
      {icon && <SanadIcon name={icon} size={14} />}
      {children}
    </span>
  );
}

function Field({ label, value, placeholder, icon, hint, error, type = 'text', readOnly, theme: t, style }) {
  t = t || useTheme();
  return (
    <label style={{ display: 'block', ...style }}>
      {label && <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 8, fontWeight: 500 }}>{label}</div>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: t.density.fieldH,
        padding: '0 14px',
        background: t.surface,
        border: `1.5px solid ${error ? t.danger : t.border}`,
        borderRadius: t.radius.field,
      }}>
        {icon && <SanadIcon name={icon} size={18} color={t.inkSoft} />}
        <input type={type} defaultValue={value} placeholder={placeholder} readOnly={readOnly}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: t.font, fontSize: 15, color: t.ink,
            textAlign: t.dir === 'rtl' ? 'right' : 'left',
          }} />
      </div>
      {(hint || error) && <div style={{ fontSize: 12, color: error ? t.danger : t.inkSoft, marginTop: 6 }}>{error || hint}</div>}
    </label>
  );
}

function Avatar({ name, size = 40, color, theme: t, style }) {
  t = t || useTheme();
  const c = color || t.primary;
  const initials = (name || '؟').split(' ').slice(0, 2).map(s => s[0]).join('');
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: c + '22', color: c,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: size * 0.4, flexShrink: 0,
      ...style,
    }}>{initials}</div>
  );
}

function Stars({ value = 0, size = 16, total = 5, color = '#E0A823', theme: t }) {
  t = t || useTheme();
  return (
    <span style={{ display: 'inline-flex', gap: 2, color }}>
      {Array.from({ length: total }).map((_, i) => (
        <SanadIcon key={i} name={i < value ? 'starFill' : 'star'} size={size} color={i < value ? color : t.inkSoft} />
      ))}
    </span>
  );
}

// Service icon tile (large gradient-soft icon container)
function ServiceTile({ service, size = 56, theme: t, style }) {
  t = t || useTheme();
  return (
    <div style={{
      width: size, height: size, borderRadius: t.radius.tile,
      background: service.soft, color: service.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      ...style,
    }}>
      <SanadIcon name={service.icon} size={size * 0.5} strokeWidth={1.7} />
    </div>
  );
}

// Top app bar — internal phone navbar
function TopBar({ title, back = true, action, dark, theme: t, style }) {
  t = t || useTheme();
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 16px 6px', height: 52, ...style,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: t.surface, border: `1px solid ${t.border}`,
        display: back ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}>
        <SanadIcon name={t.dir === 'rtl' ? 'chevR' : 'chevL'} size={18} color={t.ink} />
      </div>
      <div style={{ fontWeight: 600, fontSize: 16, color: t.ink }}>{title}</div>
      <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {action}
      </div>
    </div>
  );
}

// Bottom tab bar
function TabBar({ active = 'home', theme: t }) {
  t = t || useTheme();
  const items = [
    { k: 'home', l: 'الرئيسية', i: 'home' },
    { k: 'orders', l: 'طلباتي', i: 'list' },
    { k: 'chat', l: 'المحادثات', i: 'chat' },
    { k: 'profile', l: 'حسابي', i: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, insetInlineStart: 0, insetInlineEnd: 0,
      paddingBottom: 22, paddingTop: 10,
      background: t.surface, borderTop: `1px solid ${t.border}`,
      display: 'flex', justifyContent: 'space-around',
      borderTopLeftRadius: 24, borderTopRightRadius: 24,
      zIndex: 5,
    }}>
      {items.map(it => {
        const on = it.k === active;
        return (
          <div key={it.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: on ? t.primary : t.inkSoft, padding: '4px 12px',
          }}>
            <SanadIcon name={it.i} size={22} strokeWidth={on ? 2 : 1.6} />
            <span style={{ fontSize: 11, fontWeight: on ? 600 : 500 }}>{it.l}</span>
          </div>
        );
      })}
    </div>
  );
}

// Progress dots/segments for onboarding
function ProgressDots({ count = 3, active = 0, theme: t }) {
  t = t || useTheme();
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          height: 6, borderRadius: 3,
          width: i === active ? 24 : 6,
          background: i === active ? t.primary : t.border,
          transition: 'all 0.2s',
        }} />
      ))}
    </div>
  );
}

// Step bar (1 of 4)
function StepBar({ steps, active = 0, theme: t }) {
  t = t || useTheme();
  return (
    <div style={{ display: 'flex', gap: 6, padding: '6px 0' }}>
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 4, borderRadius: 2,
          background: i <= active ? t.primary : t.border,
        }} />
      ))}
    </div>
  );
}

// Logo (uses attached blue gradient png)
function Logo({ size = 64, withMark = true, style }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      <img src="assets/sanad-logo.png" alt="سنــد" style={{ height: size, width: 'auto', display: 'block' }} />
    </div>
  );
}

// Map placeholder — stylized streets
function MapPlaceholder({ height = 200, theme: t, route = true, style }) {
  t = t || useTheme();
  const stroke = t.dark ? '#243030' : '#D8E3DC';
  const water = t.dark ? '#0F1A1A' : '#E5EFE9';
  return (
    <div style={{ position: 'relative', height, borderRadius: t.radius.tile, overflow: 'hidden',
      background: t.dark ? '#101716' : '#EEF3EE', border: `1px solid ${t.border}`, ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="none" style={{ display: 'block' }}>
        <rect width="400" height="240" fill={t.dark ? '#101716' : '#EEF3EE'}/>
        <path d="M0 60 H 400" stroke={stroke} strokeWidth="20" opacity="0.9"/>
        <path d="M0 150 H 400" stroke={stroke} strokeWidth="14" opacity="0.7"/>
        <path d="M0 200 H 400" stroke={stroke} strokeWidth="10" opacity="0.6"/>
        <path d="M120 0 V 240" stroke={stroke} strokeWidth="16" opacity="0.8"/>
        <path d="M260 0 V 240" stroke={stroke} strokeWidth="12" opacity="0.7"/>
        <path d="M340 0 V 240" stroke={stroke} strokeWidth="8" opacity="0.6"/>
        <path d="M0 240 L 80 200 L 130 220 L 200 180 L 260 210 L 400 170 L 400 240 Z" fill={water} opacity="0.6"/>
        {route && (
          <g>
            <path d="M40 200 Q 120 140, 200 130 T 360 60" stroke={t.primary} strokeWidth="4" fill="none" strokeDasharray="0" strokeLinecap="round"/>
            <circle cx="40" cy="200" r="7" fill={t.primary}/>
            <circle cx="40" cy="200" r="3" fill="#fff"/>
            <circle cx="360" cy="60" r="9" fill={t.accent}/>
            <circle cx="360" cy="60" r="3.5" fill="#fff"/>
          </g>
        )}
      </svg>
    </div>
  );
}

// Profile placeholder — striped beige square with mono label
function PhotoSlot({ height = 140, label = 'profile photo', theme: t, style, rounded }) {
  t = t || useTheme();
  return (
    <div style={{
      height,
      borderRadius: rounded ?? t.radius.tile,
      backgroundImage: `repeating-linear-gradient(45deg, ${t.bgMuted} 0 8px, ${t.surface2} 8px 16px)`,
      border: `1px dashed ${t.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: t.inkSoft, fontSize: 11, letterSpacing: '0.05em',
      fontFamily: 'IBM Plex Mono, ui-monospace, monospace',
      ...style,
    }}>{label}</div>
  );
}

// Divider
function Divider({ theme: t, style }) {
  t = t || useTheme();
  return <div style={{ height: 1, background: t.border, margin: '8px 0', ...style }} />;
}

// Toggle
function Toggle({ on, theme: t }) {
  t = t || useTheme();
  return (
    <div style={{
      width: 44, height: 26, borderRadius: 999,
      background: on ? t.primary : t.bgMuted,
      position: 'relative', flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: 3, [on ? (t.dir === 'rtl' ? 'left' : 'right') : (t.dir === 'rtl' ? 'right' : 'left')]: 3,
        width: 20, height: 20, borderRadius: 999, background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </div>
  );
}

// Phone-screen wrapper with consistent padding & RTL direction
function Screen({ children, bg, theme: t, style }) {
  t = t || useTheme();
  return (
    <div dir={t.dir} style={{
      width: '100%', height: '100%', overflow: 'hidden',
      background: bg ?? t.bg,
      color: t.ink,
      fontFamily: t.font,
      display: 'flex', flexDirection: 'column',
      ...style,
    }}>{children}</div>
  );
}

// Status bar (custom, since we sometimes overlay our own)
function StatusBar({ dark, time = '٩:٤١', theme: t }) {
  t = t || useTheme();
  const c = dark ? '#fff' : t.ink;
  return (
    <div style={{
      height: 44, padding: '0 22px',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      paddingBottom: 8, fontSize: 14, fontWeight: 600, color: c,
    }}>
      <div className="latin">{time}</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 19 12"><rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/><rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/><rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/><rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/></svg>
        <svg width="14" height="10" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/><circle cx="8.5" cy="10.5" r="1.5" fill={c}/></svg>
        <svg width="22" height="10" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="20" height="9" rx="2" fill={c}/></svg>
      </div>
    </div>
  );
}

Object.assign(window, {
  SanadAtoms: { useTheme },
  Button, Card, SectionTitle, Tag, Field, Avatar, Stars, ServiceTile,
  TopBar, TabBar, ProgressDots, StepBar, Logo, MapPlaceholder, PhotoSlot,
  Divider, Toggle, Screen, StatusBar, useTheme,
});
