// Sanad — design tokens
// Five palettes, two card styles, two densities, two themes, two directions.
// Tweakable at runtime via window.__sanadTweaks (set by App).

const PALETTES = {
  teal: {
    name: 'أزرق',
    primary: '#3D5CE0',
    primaryDeep: '#14318F',
    primarySoft: '#DDE4FB',
    primaryTint: '#EEF2FE',
    accent: '#8CA0E6',           // periwinkle (from logo)
    accentSoft: '#E8ECFB',
    success: '#047857',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#14318F',
    // surfaces (light)
    bg: '#F4F6FC',
    bgMuted: '#E8ECF7',
    surface: '#FFFFFF',
    surface2: '#F7F9FE',
    border: '#DDE3F2',
    // ink
    ink: '#0E152B',
    inkMuted: '#56607F',
    inkSoft: '#8A93AD',
  },
  emerald: {
    name: 'أزرق عميق',
    primary: '#14318F',
    primaryDeep: '#13245C',
    primarySoft: '#D4DEF6',
    primaryTint: '#EAEFFB',
    accent: '#7E8FD4',
    accentSoft: '#E1E6F8',
    success: '#15803D',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#14318F',
    bg: '#F3F5FC',
    bgMuted: '#E6EAF6',
    surface: '#FFFFFF',
    surface2: '#F6F8FE',
    border: '#DBE1F2',
    ink: '#0C1430',
    inkMuted: '#525C7C',
    inkSoft: '#878FAB',
  },
  beige: {
    name: 'سماوي',
    primary: '#5B7BF0',
    primaryDeep: '#2E47B5',
    primarySoft: '#E0E7FE',
    primaryTint: '#F2F5FF',
    accent: '#3D5CE0',
    accentSoft: '#DDE4FB',
    success: '#15803D',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#14318F',
    bg: '#F5F7FE',
    bgMuted: '#EAEEFB',
    surface: '#FFFFFF',
    surface2: '#FAFBFF',
    border: '#DFE5F6',
    ink: '#0E1530',
    inkMuted: '#566085',
    inkSoft: '#8B94B2',
  },
};

const DARK_OVERRIDES = {
  teal: {
    bg: '#070A14',
    bgMuted: '#0C1020',
    surface: '#121831',
    surface2: '#19203D',
    border: '#272F4E',
    ink: '#EEF1F9',
    inkMuted: '#A7AEC6',
    inkSoft: '#6E7591',
    primarySoft: '#1E2A66',
    primaryTint: '#141C45',
    accentSoft: '#1C2550',
  },
  emerald: {
    bg: '#060912',
    bgMuted: '#0B0F1E',
    surface: '#10162E',
    surface2: '#171E3A',
    border: '#252D4B',
    ink: '#ECEFF8',
    inkMuted: '#A4ABC4',
    inkSoft: '#6C728E',
    primarySoft: '#1A255C',
    primaryTint: '#121A40',
    accentSoft: '#1A2350',
  },
  beige: {
    bg: '#080B16',
    bgMuted: '#0D1222',
    surface: '#141A35',
    surface2: '#1B2240',
    border: '#2A3252',
    ink: '#EFF2FA',
    inkMuted: '#A9B0C8',
    inkSoft: '#707794',
    primarySoft: '#22307A',
    primaryTint: '#172052',
    accentSoft: '#1E2858',
  },
};

const RADII = {
  rounded: { card: 28, button: 18, chip: 999, field: 16, sheet: 32, tile: 24 },
  squared: { card: 14, button: 10, chip: 8, field: 8, sheet: 18, tile: 12 },
};

const DENSITIES = {
  cozy:    { padCard: 20, padScreen: 20, gap: 14, listRow: 64, fieldH: 56, btnH: 56 },
  compact: { padCard: 14, padScreen: 14, gap: 10, listRow: 52, fieldH: 48, btnH: 48 },
};

const FONTS = {
  plex:  "'IBM Plex Sans Arabic', 'IBM Plex Sans', system-ui, sans-serif",
  tajawal: "'Tajawal', 'IBM Plex Sans', system-ui, sans-serif",
  noto:  "'Noto Sans Arabic', 'IBM Plex Sans', system-ui, sans-serif",
  cairo: "'Cairo', 'IBM Plex Sans', system-ui, sans-serif",
};

// Service brands
const SERVICES = {
  fazaa: {
    key: 'fazaa',
    name: 'سند فزعة',
    sub: 'مشاوير ومهام يومية',
    en: 'Errands & transport',
    color: '#3D5CE0',
    soft: '#DDE4FB',
    icon: 'errand',
  },
  jalees: {
    key: 'jalees',
    name: 'سند جليس',
    sub: 'مرافقة اجتماعية ودعم نفسي',
    en: 'Companionship',
    color: '#6A53C8',
    soft: '#E7E2FA',
    icon: 'heart',
  },
  academic: {
    key: 'academic',
    name: 'سند أكاديمي',
    sub: 'تدريب جامعي ميداني',
    en: 'Academic training',
    color: '#14318F',
    soft: '#D7DEF6',
    icon: 'cap',
  },
  murafaqa: {
    key: 'murafaqa',
    name: 'سند مرافقة',
    sub: 'مرافقة المواعيد الطبية والحكومية',
    en: 'Appointment escort',
    color: '#2E73C9',
    soft: '#DCE8F7',
    icon: 'shield',
  },
};

function buildTheme(t) {
  const base = PALETTES[t.palette] || PALETTES.teal;
  const palette = t.dark ? { ...base, ...DARK_OVERRIDES[t.palette] } : base;
  const radius = RADII[t.cardStyle] || RADII.rounded;
  const density = DENSITIES[t.density] || DENSITIES.cozy;
  const font = FONTS[t.font] || FONTS.plex;
  return {
    ...palette,
    radius, density, font, dir: t.rtl ? 'rtl' : 'ltr', dark: !!t.dark,
    services: SERVICES,
  };
}

window.SanadTokens = { PALETTES, DARK_OVERRIDES, RADII, DENSITIES, FONTS, SERVICES, buildTheme };
