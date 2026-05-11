// Sanad — App shell: tabs (Prototype / Canvas / Design system) + Tweaks panel

const { useState: useAS, useEffect: useAE, useMemo: useAM } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "teal",
  "cardStyle": "rounded",
  "density": "cozy",
  "font": "plex",
  "rtl": true,
  "dark": false,
  "view": "prototype"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const theme = useAM(() => window.SanadTokens.buildTheme(t), [t.palette, t.cardStyle, t.density, t.font, t.rtl, t.dark]);
  // Expose for any non-React readers
  useAE(() => { window.__sanadTweaks = t; window.__sanadTheme = theme; });

  const tabs = [
    { k: 'prototype', l: 'Prototype', sub: 'تدفق تفاعلي' },
    { k: 'canvas', l: 'Canvas', sub: 'كل الشاشات' },
  ];

  const fontFamilies = {
    plex: "'IBM Plex Sans Arabic'",
    tajawal: "'Tajawal'",
    noto: "'Noto Sans Arabic'",
    cairo: "'Cairo'",
  };

  return (
    <div dir={t.rtl ? 'rtl' : 'ltr'} style={{
      minHeight: '100vh', background: theme.bg, color: theme.ink, fontFamily: theme.font,
      transition: 'background 0.2s',
    }}>
      {/* Top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 28px',
        background: theme.bg + 'EE', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Logo size={42} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>سَنَد</div>
            <div className="latin" style={{ fontSize: 10.5, color: theme.inkSoft, letterSpacing: '0.08em', textTransform: 'uppercase' }}>App redesign · v2.0</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 4, padding: 4, background: theme.surface,
          border: `1px solid ${theme.border}`, borderRadius: 14 }}>
          {tabs.map(tab => {
            const on = t.view === tab.k;
            return (
              <button key={tab.k} onClick={() => setTweak('view', tab.k)} style={{
                padding: '8px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
                background: on ? theme.ink : 'transparent', color: on ? theme.surface : theme.ink,
                fontFamily: 'inherit', fontWeight: 600, fontSize: 13,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,
              }}>
                <span>{tab.l}</span>
                <span style={{ fontSize: 9.5, opacity: 0.65, fontWeight: 400 }}>{tab.sub}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11.5, color: theme.inkSoft }}>
          <span className="latin" style={{ padding: '5px 10px', background: theme.surface,
            border: `1px solid ${theme.border}`, borderRadius: 8 }}>{t.palette} · {t.cardStyle} · {t.density}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ minHeight: 'calc(100vh - 70px)' }}>
        {t.view === 'prototype' && <Prototype theme={theme} />}
        {t.view === 'canvas' && <Canvas theme={theme} />}
      </div>

      {/* Tweaks */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor label="Color" value={t.palette}
          options={[
            ['#0F766E', '#CCFBF1', '#C9B79C'],
            ['#047857', '#D1FADF', '#A8856A'],
            ['#7A5A36', '#F0E5D2', '#0F766E'],
          ]}
          onChange={(_, idx) => setTweak('palette', ['teal','emerald','beige'][idx])} />
        <TweakRadio label="Card style" value={t.cardStyle}
          options={['rounded', 'squared']}
          onChange={(v) => setTweak('cardStyle', v)} />
        <TweakRadio label="Density" value={t.density}
          options={['cozy', 'compact']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSection label="Type" />
        <TweakSelect label="Arabic font" value={t.font}
          options={[
            { value: 'plex', label: 'IBM Plex Arabic' },
            { value: 'tajawal', label: 'Tajawal' },
            { value: 'noto', label: 'Noto Sans Arabic' },
            { value: 'cairo', label: 'Cairo' },
          ]}
          onChange={(v) => setTweak('font', v)} />
        <TweakSection label="Display" />
        <TweakToggle label="Dark mode" value={t.dark}
          onChange={(v) => setTweak('dark', v)} />
        <TweakToggle label="RTL (Arabic)" value={t.rtl}
          onChange={(v) => setTweak('rtl', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
