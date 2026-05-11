// Sanad — custom thin-stroke icon set
// 24x24 viewBox, currentColor strokes. Pass size + color via props.

function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.6, fill }) {
  const p = { stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const f = (extra = {}) => ({ ...p, fill: fill || 'none', ...extra });
  const I = ICONS[name];
  if (!I) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      <I p={p} f={f} />
    </svg>
  );
}

const ICONS = {
  errand: ({ p }) => (
    <g {...p}>
      <path d="M3 17h2l1.5-7h11L19 17h2"/>
      <path d="M6.5 10V8a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v2"/>
      <circle cx="7" cy="18" r="2"/>
      <circle cx="17" cy="18" r="2"/>
    </g>
  ),
  heart: ({ p }) => (
    <g {...p}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>
    </g>
  ),
  cap: ({ p }) => (
    <g {...p}>
      <path d="M2 9l10-4 10 4-10 4-10-4z"/>
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"/>
      <path d="M22 9v5"/>
    </g>
  ),
  shield: ({ p }) => (
    <g {...p}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
      <path d="M9 12l2 2 4-4"/>
    </g>
  ),
  home: ({ p }) => (
    <g {...p}>
      <path d="M3 11l9-7 9 7"/>
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>
    </g>
  ),
  bell: ({ p }) => (
    <g {...p}>
      <path d="M6 8a6 6 0 1 1 12 0v3l2 4H4l2-4V8z"/>
      <path d="M10 19a2 2 0 0 0 4 0"/>
    </g>
  ),
  user: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/>
    </g>
  ),
  list: ({ p }) => (
    <g {...p}>
      <path d="M4 6h16M4 12h16M4 18h10"/>
    </g>
  ),
  search: ({ p }) => (
    <g {...p}>
      <circle cx="11" cy="11" r="6"/>
      <path d="M16 16l4 4"/>
    </g>
  ),
  chat: ({ p }) => (
    <g {...p}>
      <path d="M4 5h16v11H9l-5 4V5z"/>
      <circle cx="9" cy="10.5" r=".7" fill="currentColor"/>
      <circle cx="13" cy="10.5" r=".7" fill="currentColor"/>
      <circle cx="17" cy="10.5" r=".7" fill="currentColor"/>
    </g>
  ),
  phone: ({ p }) => (
    <g {...p}>
      <path d="M5 4h3l2 5-2 1a10 10 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>
    </g>
  ),
  mic: ({ p }) => (
    <g {...p}>
      <rect x="9" y="3" width="6" height="11" rx="3"/>
      <path d="M5 11a7 7 0 0 0 14 0"/>
      <path d="M12 18v3"/>
    </g>
  ),
  video: ({ p }) => (
    <g {...p}>
      <rect x="3" y="6" width="13" height="12" rx="2"/>
      <path d="M16 10l5-3v10l-5-3z"/>
    </g>
  ),
  pin: ({ p }) => (
    <g {...p}>
      <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </g>
  ),
  clock: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </g>
  ),
  calendar: ({ p }) => (
    <g {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M3 10h18M8 3v4M16 3v4"/>
    </g>
  ),
  star: ({ p, f }) => (
    <g {...f({ stroke: 'currentColor' })}>
      <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6L3.2 9.4l6.1-.9L12 3z"/>
    </g>
  ),
  starFill: ({ p }) => (
    <g fill="currentColor" stroke="none">
      <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6L3.2 9.4l6.1-.9L12 3z"/>
    </g>
  ),
  check: ({ p }) => (
    <g {...p}>
      <path d="M5 12l4 4L19 7"/>
    </g>
  ),
  checkCircle: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 12l3 3 5-6"/>
    </g>
  ),
  close: ({ p }) => (
    <g {...p}>
      <path d="M6 6l12 12M18 6L6 18"/>
    </g>
  ),
  plus: ({ p }) => (
    <g {...p}>
      <path d="M12 5v14M5 12h14"/>
    </g>
  ),
  arrowR: ({ p }) => (
    <g {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </g>
  ),
  arrowL: ({ p }) => (
    <g {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6"/>
    </g>
  ),
  chevR: ({ p }) => (
    <g {...p}>
      <path d="M9 6l6 6-6 6"/>
    </g>
  ),
  chevL: ({ p }) => (
    <g {...p}>
      <path d="M15 6l-6 6 6 6"/>
    </g>
  ),
  chevD: ({ p }) => (
    <g {...p}>
      <path d="M6 9l6 6 6-6"/>
    </g>
  ),
  pharmacy: ({ p }) => (
    <g {...p}>
      <rect x="4" y="4" width="16" height="16" rx="3"/>
      <path d="M12 8v8M8 12h8"/>
    </g>
  ),
  cart: ({ p }) => (
    <g {...p}>
      <path d="M3 4h2l2 12h12"/>
      <path d="M7 8h14l-2 6H8"/>
      <circle cx="9" cy="20" r="1.5"/>
      <circle cx="17" cy="20" r="1.5"/>
    </g>
  ),
  doc: ({ p }) => (
    <g {...p}>
      <path d="M6 3h8l4 4v14H6z"/>
      <path d="M14 3v4h4"/>
      <path d="M9 12h6M9 16h4"/>
    </g>
  ),
  hospital: ({ p }) => (
    <g {...p}>
      <path d="M4 21V8l8-5 8 5v13"/>
      <path d="M12 11v6M9 14h6"/>
    </g>
  ),
  gov: ({ p }) => (
    <g {...p}>
      <path d="M3 21h18M5 10v8M9 10v8M15 10v8M19 10v8"/>
      <path d="M12 3l9 6H3z"/>
    </g>
  ),
  book: ({ p }) => (
    <g {...p}>
      <path d="M4 4h7v16H6a2 2 0 0 1-2-2z"/>
      <path d="M20 4h-7v16h5a2 2 0 0 0 2-2z"/>
    </g>
  ),
  pill: ({ p }) => (
    <g {...p}>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/>
      <path d="M9 6l6 12" />
    </g>
  ),
  walk: ({ p }) => (
    <g {...p}>
      <circle cx="13" cy="4.5" r="1.6"/>
      <path d="M9 13l3-5 4 2-2 4 3 6M9 22l-1-5 4-3"/>
    </g>
  ),
  paperclip: ({ p }) => (
    <g {...p}>
      <path d="M20 12l-7 7a4 4 0 0 1-6-6l8-8a3 3 0 0 1 4 4l-8 8a2 2 0 0 1-3-3l7-7"/>
    </g>
  ),
  send: ({ p }) => (
    <g {...p}>
      <path d="M21 3L3 11l7 2 2 7z"/>
      <path d="M21 3L10 13"/>
    </g>
  ),
  settings: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M19 12c0 .6 0 1.1-.1 1.6l2 1.6-2 3.4-2.5-1a7 7 0 0 1-2.7 1.6l-.4 2.6h-4l-.4-2.6a7 7 0 0 1-2.7-1.6l-2.5 1-2-3.4 2-1.6c-.1-.5-.1-1-.1-1.6s0-1.1.1-1.6l-2-1.6 2-3.4 2.5 1a7 7 0 0 1 2.7-1.6l.4-2.6h4l.4 2.6a7 7 0 0 1 2.7 1.6l2.5-1 2 3.4-2 1.6c.1.5.1 1 .1 1.6z"/>
    </g>
  ),
  card: ({ p }) => (
    <g {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2"/>
      <path d="M3 10h18M7 15h4"/>
    </g>
  ),
  shieldCheck: ({ p }) => (
    <g {...p}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
      <path d="M9 12l2 2 4-4"/>
    </g>
  ),
  alert: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v6M12 17h0"/>
    </g>
  ),
  empty: ({ p }) => (
    <g {...p}>
      <rect x="4" y="6" width="16" height="13" rx="2"/>
      <path d="M4 11h16M9 15h6"/>
    </g>
  ),
  sparkle: ({ p }) => (
    <g {...p}>
      <path d="M12 4l1.5 5L18 10l-4.5 1L12 16l-1.5-5L6 10l4.5-1z"/>
      <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>
    </g>
  ),
  graduation: ({ p }) => (
    <g {...p}>
      <path d="M2 9l10-4 10 4-10 4-10-4z"/>
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"/>
    </g>
  ),
  trophy: ({ p }) => (
    <g {...p}>
      <path d="M8 4h8v6a4 4 0 0 1-8 0z"/>
      <path d="M5 6H3v2a3 3 0 0 0 3 3M19 6h2v2a3 3 0 0 1-3 3"/>
      <path d="M9 18h6M12 14v4M8 21h8"/>
    </g>
  ),
  logout: ({ p }) => (
    <g {...p}>
      <path d="M9 4H5v16h4M19 12H10M16 8l4 4-4 4"/>
    </g>
  ),
  globe: ({ p }) => (
    <g {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </g>
  ),
  moon: ({ p }) => (
    <g {...p}>
      <path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10z"/>
    </g>
  ),
  receipt: ({ p }) => (
    <g {...p}>
      <path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-2z"/>
      <path d="M8 8h8M8 12h8M8 16h5"/>
    </g>
  ),
  filter: ({ p }) => (
    <g {...p}>
      <path d="M3 5h18l-7 9v6l-4-2v-4z"/>
    </g>
  ),
  share: ({ p }) => (
    <g {...p}>
      <circle cx="6" cy="12" r="2.5"/>
      <circle cx="18" cy="6" r="2.5"/>
      <circle cx="18" cy="18" r="2.5"/>
      <path d="M8 11l8-4M8 13l8 4"/>
    </g>
  ),
};

window.SanadIcon = Icon;
window.SanadIcons = ICONS;
