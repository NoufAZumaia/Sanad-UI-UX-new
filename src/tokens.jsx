// Sanad — design tokens
// Five palettes, two card styles, two densities, two themes, two directions.
// Tweakable at runtime via window.__sanadTweaks (set by App).

const PALETTES = {
  teal: {
    name: 'تيل',
    primary: '#0F766E',
    primaryDeep: '#0B5A55',
    primarySoft: '#CCFBF1',
    primaryTint: '#F0FDFA',
    accent: '#C9B79C',           // beige
    accentSoft: '#F0E9D9',
    success: '#047857',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#1E3A8A',
    // surfaces (light)
    bg: '#F5F3EE',
    bgMuted: '#EDE9DD',
    surface: '#FFFFFF',
    surface2: '#FBF9F4',
    border: '#E5E0D2',
    // ink
    ink: '#0F1414',
    inkMuted: '#5C625F',
    inkSoft: '#8A908C',
  },
  emerald: {
    name: 'زمرّدي',
    primary: '#047857',
    primaryDeep: '#03543F',
    primarySoft: '#D1FADF',
    primaryTint: '#ECFDF5',
    accent: '#A8856A',
    accentSoft: '#F0E5D8',
    success: '#15803D',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#1E3A8A',
    bg: '#F4F2EC',
    bgMuted: '#EBE7DA',
    surface: '#FFFFFF',
    surface2: '#FAF8F2',
    border: '#E1DCCC',
    ink: '#0E1612',
    inkMuted: '#586059',
    inkSoft: '#878D87',
  },
  beige: {
    name: 'بيج دافئ',
    primary: '#7A5A36',
    primaryDeep: '#5A4128',
    primarySoft: '#F0E5D2',
    primaryTint: '#FBF6EC',
    accent: '#0F766E',
    accentSoft: '#CCFBF1',
    success: '#15803D',
    warn: '#B45309',
    danger: '#B91C1C',
    info: '#1E3A8A',
    bg: '#FAF6EC',
    bgMuted: '#F1EAD8',
    surface: '#FFFFFF',
    surface2: '#FDFAF2',
    border: '#E8DDC4',
    ink: '#1A140B',
    inkMuted: '#665A47',
    inkSoft: '#968A75',
  },
};

const DARK_OVERRIDES = {
  teal: {
    bg: '#0A0F0F',
    bgMuted: '#10171A',
    surface: '#141C1D',
    surface2: '#1A2425',
    border: '#26312F',
    ink: '#F1EFE8',
    inkMuted: '#A6B0AC',
    inkSoft: '#6F7773',
    primarySoft: '#143F3B',
    primaryTint: '#0E2B28',
    accentSoft: '#2B271C',
  },
  emerald: {
    bg: '#0A100D',
    bgMuted: '#0F1714',
    surface: '#141D18',
    surface2: '#192520',
    border: '#26332C',
    ink: '#EEF1EC',
    inkMuted: '#A4AEA8',
    inkSoft: '#6E7672',
    primarySoft: '#0F3F30',
    primaryTint: '#0A2C22',
    accentSoft: '#2A2418',
  },
  beige: {
    bg: '#0F0C06',
    bgMuted: '#15110A',
    surface: '#1B1610',
    surface2: '#221C13',
    border: '#322A1C',
    ink: '#F3EEDF',
    inkMuted: '#B6AC95',
    inkSoft: '#7F7766',
    primarySoft: '#3F2F1A',
    primaryTint: '#2B2012',
    accentSoft: '#0E2624',
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
    color: '#0F766E',
    soft: '#CCFBF1',
    icon: 'errand',
  },
  jalees: {
    key: 'jalees',
    name: 'سند جليس',
    sub: 'مرافقة اجتماعية ودعم نفسي',
    en: 'Companionship',
    color: '#7A5A36',
    soft: '#F0E5D2',
    icon: 'heart',
  },
  academic: {
    key: 'academic',
    name: 'سند أكاديمي',
    sub: 'تدريب جامعي ميداني',
    en: 'Academic training',
    color: '#1E3A8A',
    soft: '#DBE4FF',
    icon: 'cap',
  },
  murafaqa: {
    key: 'murafaqa',
    name: 'سند مرافقة',
    sub: 'مرافقة المواعيد الطبية والحكومية',
    en: 'Appointment escort',
    color: '#7A1E55',
    soft: '#F4DCEB',
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
