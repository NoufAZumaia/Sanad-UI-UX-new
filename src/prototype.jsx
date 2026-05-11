// Sanad — Prototype (interactive single-phone flow)

const { useState: usePS, useEffect: useEffectP } = React;

// Routes wire each screen key to a render fn that receives nav helpers.
// Most screens are static — we wrap them with onClick handlers post-hoc on common buttons.
function makeRoutes(theme) {
  return {
    splash:        { render: () => <ScrSplash theme={theme} />, next: 'onboard1', auto: 1500 },
    onboard1:      { render: () => <ScrOnboard1 theme={theme} />, next: 'onboard2' },
    onboard2:      { render: () => <ScrOnboard2 theme={theme} />, next: 'onboard3' },
    onboard3:      { render: () => <ScrOnboard3 theme={theme} />, next: 'authPhone' },
    authPhone:     { render: () => <ScrAuthPhone theme={theme} />, next: 'authOtp' },
    authOtp:       { render: () => <ScrAuthOTP theme={theme} />, next: 'profileSetup' },
    profileSetup:  { render: () => <ScrProfileSetup theme={theme} />, next: 'home' },

    home:          { render: () => <ScrHomeA theme={theme} />, next: 'services' },
    services:      { render: () => <ScrServicesAll theme={theme} />, next: 'serviceFazaa' },
    serviceFazaa:  { render: () => <ScrServiceFazaa theme={theme} />, next: 'requestFazaa' },
    serviceJalees: { render: () => <ScrServiceJalees theme={theme} />, next: 'requestJalees' },
    serviceAcademic:{ render: () => <ScrServiceAcademic theme={theme} />, next: 'requestAcademic' },
    serviceMurafaqa:{ render: () => <ScrServiceMurafaqa theme={theme} />, next: 'requestMurafaqa' },

    requestFazaa:    { render: () => <ScrRequestFazaa theme={theme} />, next: 'loading' },
    requestJalees:   { render: () => <ScrRequestJalees theme={theme} />, next: 'loading' },
    requestAcademic: { render: () => <ScrRequestAcademic theme={theme} />, next: 'success' },
    requestMurafaqa: { render: () => <ScrRequestMurafaqa theme={theme} />, next: 'loading' },

    loading:       { render: () => <ScrLoading theme={theme} />, next: 'success', auto: 2200 },
    success:       { render: () => <ScrSuccess theme={theme} />, next: 'tracking' },
    tracking:      { render: () => <ScrTrackingFazaa theme={theme} />, next: 'chat' },
    chat:          { render: () => <ScrChat theme={theme} />, next: 'rate' },
    notifs:        { render: () => <ScrNotifications theme={theme} />, next: 'home' },
    rate:          { render: () => <ScrRateService theme={theme} />, next: 'reviews' },
    reviews:       { render: () => <ScrReviewsList theme={theme} />, next: 'home' },
    profile:       { render: () => <ScrProfileA theme={theme} />, next: 'settings' },
    settings:      { render: () => <ScrSettings theme={theme} />, next: 'profile' },
    empty:         { render: () => <ScrEmpty theme={theme} />, next: 'home' },
    error:         { render: () => <ScrError theme={theme} />, next: 'home' },
    provider:      { render: () => <ScrProviderDash theme={theme} />, next: 'providerTask' },
    providerTask:  { render: () => <ScrProviderTask theme={theme} />, next: 'provider' },
  };
}

const ROUTE_GROUPS = [
  { label: 'البداية', items: [
    { k: 'splash', l: 'Splash' },
    { k: 'onboard1', l: 'Onboarding 1' },
    { k: 'onboard2', l: 'Onboarding 2' },
    { k: 'onboard3', l: 'Onboarding 3' },
    { k: 'authPhone', l: 'تسجيل الدخول' },
    { k: 'authOtp', l: 'رمز التحقق' },
    { k: 'profileSetup', l: 'إعداد الملف' },
  ]},
  { label: 'الرئيسية', items: [
    { k: 'home', l: 'الرئيسية' },
    { k: 'services', l: 'كل الخدمات' },
    { k: 'notifs', l: 'الإشعارات' },
  ]},
  { label: 'الخدمات', items: [
    { k: 'serviceFazaa', l: 'سند فزعة' },
    { k: 'serviceJalees', l: 'سند جليس' },
    { k: 'serviceAcademic', l: 'سند أكاديمي' },
    { k: 'serviceMurafaqa', l: 'سند مرافقة' },
  ]},
  { label: 'الطلب', items: [
    { k: 'requestFazaa', l: 'طلب فزعة' },
    { k: 'requestJalees', l: 'طلب جليس' },
    { k: 'requestAcademic', l: 'طلب أكاديمي' },
    { k: 'requestMurafaqa', l: 'طلب مرافقة' },
  ]},
  { label: 'الحالات', items: [
    { k: 'loading', l: 'بحث' },
    { k: 'success', l: 'نجاح' },
    { k: 'error', l: 'خطأ' },
    { k: 'empty', l: 'فارغ' },
  ]},
  { label: 'التتبع', items: [
    { k: 'tracking', l: 'تتبع المشوار' },
    { k: 'chat', l: 'محادثة' },
    { k: 'rate', l: 'تقييم' },
    { k: 'reviews', l: 'قائمة التقييمات' },
  ]},
  { label: 'الحساب', items: [
    { k: 'profile', l: 'حسابي' },
    { k: 'settings', l: 'الإعدادات' },
  ]},
  { label: 'مقدّم الخدمة', items: [
    { k: 'provider', l: 'لوحة المقدّم' },
    { k: 'providerTask', l: 'مهمة جارية' },
  ]},
];

function Prototype({ theme }) {
  const [route, setRoute] = usePS('home');
  const [history, setHistory] = usePS([]);
  const routes = useMemo(() => makeRoutes(theme), [theme]);
  const cur = routes[route] || routes.home;

  useEffectP(() => {
    if (cur.auto && cur.next) {
      const t = setTimeout(() => go(cur.next), cur.auto);
      return () => clearTimeout(t);
    }
  }, [route]);

  function go(next) {
    if (!next || !routes[next]) return;
    setHistory(h => [...h, route]);
    setRoute(next);
  }
  function back() {
    setHistory(h => {
      const prev = h[h.length - 1];
      if (prev) setRoute(prev);
      return h.slice(0, -1);
    });
  }

  // Click capture: any button/cta inside the phone advances.
  function onPhoneClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    // Don't auto-advance on clearly-non-nav buttons (e.g. tab bar — handled separately)
    const tabbar = e.target.closest('[data-tab]');
    if (tabbar) {
      const k = tabbar.getAttribute('data-tab');
      if (k) go(k);
      return;
    }
    if (cur.next) go(cur.next);
  }

  return (
    <div data-screen-label={`Prototype · ${route}`}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, padding: 32 }}>
      {/* Route map (left) */}
      <div style={{ width: 260, alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 14, maxHeight: 800, overflowY: 'auto', paddingInlineEnd: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.inkSoft, letterSpacing: '0.08em', textTransform: 'uppercase' }}>FLOWS</div>
        {ROUTE_GROUPS.map(g => (
          <div key={g.label}>
            <div style={{ fontSize: 11, color: theme.inkSoft, marginBottom: 6, fontWeight: 600 }}>{g.label}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {g.items.map(it => {
                const on = route === it.k;
                return (
                  <div key={it.k} onClick={() => { setHistory(h => [...h, route]); setRoute(it.k); }}
                    style={{
                      padding: '7px 10px', borderRadius: 8, cursor: 'pointer',
                      background: on ? theme.ink : 'transparent', color: on ? theme.surface : theme.ink,
                      fontSize: 12.5, fontWeight: on ? 600 : 500,
                    }}>{it.l}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Phone (center) */}
      <div onClick={onPhoneClick} style={{ cursor: 'pointer' }}>
        <PhoneBezel theme={theme}>
          {cur.render()}
        </PhoneBezel>
      </div>

      {/* Side controls */}
      <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.inkSoft, letterSpacing: '0.08em', textTransform: 'uppercase' }}>NAV</div>
        <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 16, padding: 16, fontSize: 13 }}>
          <div style={{ color: theme.inkSoft, fontSize: 11, marginBottom: 4 }}>المسار الحالي</div>
          <div style={{ fontWeight: 600 }} className="latin">{route}</div>
          <div style={{ height: 1, background: theme.border, margin: '12px 0' }} />
          <div style={{ color: theme.inkSoft, fontSize: 11, marginBottom: 4 }}>التالي عند الضغط</div>
          <div style={{ fontWeight: 600 }} className="latin">{cur.next || '—'}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={back} disabled={!history.length}
            style={{ flex: 1, height: 40, borderRadius: 12, background: theme.surface, border: `1px solid ${theme.border}`,
              color: history.length ? theme.ink : theme.inkSoft, fontFamily: 'inherit', fontWeight: 500, cursor: history.length ? 'pointer' : 'default' }}>
            ← السابق
          </button>
          <button onClick={() => cur.next && go(cur.next)}
            style={{ flex: 1, height: 40, borderRadius: 12, background: theme.ink, border: 'none',
              color: theme.surface, fontFamily: 'inherit', fontWeight: 500, cursor: 'pointer' }}>
            التالي →
          </button>
        </div>
        <div style={{ fontSize: 11.5, color: theme.inkSoft, lineHeight: 1.7 }}>
          اضغط على أي زر داخل التطبيق ليأخذك إلى الشاشة التالية في التدفق، أو اختر شاشة من القائمة جانبًا.
        </div>
      </div>
    </div>
  );
}

window.SanadPrototype = Prototype;
