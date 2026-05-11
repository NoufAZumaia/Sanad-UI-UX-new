// Sanad PROVIDER — interactive prototype flow

const PROV_SCREENS = {
  splash:      { c: 'ScrProvSplash',      next: 'login',         label: '00 Splash' },
  login:       { c: 'ScrProvLogin',       next: 'register',      label: '01 Login' },
  register:    { c: 'ScrProvRegister',    next: 'documents',     label: '02 Register' },
  documents:   { c: 'ScrProvDocuments',   next: 'pending',       label: '03 Documents' },
  pending:     { c: 'ScrProvPending',     next: 'provHome',      label: '04 Pending review' },
  provHome:    { c: 'ScrProvHome',        next: 'provIncoming',  label: '05 Home (online)' },
  provOffline: { c: 'ScrProvOffline',     next: 'provHome',      label: '06 Home (offline)' },
  provIncoming:{ c: 'ScrProvIncoming',    next: 'provNavigation',label: '07 Incoming request' },
  provDecline: { c: 'ScrProvDecline',     next: 'provHome',      label: '08 Decline reason' },
  provNavigation:{c:'ScrProvNavigation',  next: 'provInProgress',label: '09 Navigation' },
  provInProgress:{c:'ScrProvInProgress',  next: 'provComplete',  label: '10 In progress' },
  provComplete:{ c: 'ScrProvComplete',    next: 'provHome',      label: '11 Complete' },
  provEarnings:{ c: 'ScrProvEarnings',    next: 'provHome',      label: '12 Earnings' },
  provRatings: { c: 'ScrProvRatings',     next: 'provHome',      label: '13 Ratings' },
  provProfile: { c: 'ScrProvProfile',     next: 'provSettings',  label: '14 Profile' },
  provSettings:{ c: 'ScrProvSettings',    next: 'provHome',      label: '15 Settings' },
  provTask:    { c: 'ScrProvTaskList',    next: 'provInProgress',label: '16 Task list' },
};

const PROV_ORDER = Object.keys(PROV_SCREENS);

function SanadProviderPrototype({ theme }) {
  const t = theme;
  const [cur, setCur] = React.useState('splash');
  const [showPicker, setShowPicker] = React.useState(false);

  const goTo = (k) => { if (PROV_SCREENS[k]) { setCur(k); window.scrollTo(0, 0); } };
  const next = () => goTo(PROV_SCREENS[cur].next);
  const prev = () => {
    const idx = PROV_ORDER.indexOf(cur);
    if (idx > 0) goTo(PROV_ORDER[idx - 1]);
  };

  // tap-anywhere-to-advance + data-tab routing
  const onScreenClick = (e) => {
    const target = e.target.closest('[data-tab]');
    if (target) { goTo(target.getAttribute('data-tab')); return; }
    next();
  };

  const Comp = window[PROV_SCREENS[cur].c];
  const idx = PROV_ORDER.indexOf(cur);

  return (
    <div data-screen-label={PROV_SCREENS[cur].label} style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      gap: 24, padding: '40px 24px 80px',
      minHeight: 'calc(100vh - 70px)',
    }}>
      {/* left rail — screen picker */}
      <div style={{ width: 240, position: 'sticky', top: 90, maxHeight: 'calc(100vh - 110px)', overflowY: 'auto' }}>
        <div style={{ fontSize: 11, color: t.inkSoft, textTransform: 'uppercase', letterSpacing: '0.08em',
          fontWeight: 600, marginBottom: 10, paddingInlineStart: 8 }}>تدفق مقدّم الخدمة</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PROV_ORDER.map((k, i) => {
            const on = k === cur;
            return (
              <button key={k} onClick={() => goTo(k)} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
                background: on ? t.ink : 'transparent', color: on ? t.surface : t.inkMuted,
                border: 'none', borderRadius: 8, textAlign: 'start', cursor: 'pointer',
                fontFamily: 'inherit', fontSize: 12.5, fontWeight: on ? 600 : 500,
              }}>
                <span className="latin" style={{ fontSize: 10, opacity: 0.6, width: 18 }}>{String(i).padStart(2,'0')}</span>
                <span>{PROV_SCREENS[k].label.replace(/^\d+\s+/, '')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* phone */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div onClick={onScreenClick} style={{ cursor: 'pointer' }}>
          <PhoneFrame theme={t}>
            <Comp theme={t} />
          </PhoneFrame>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={prev} disabled={idx === 0} style={{
            padding: '8px 14px', borderRadius: 10, border: `1px solid ${t.border}`,
            background: t.surface, color: t.ink, cursor: idx === 0 ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit', fontSize: 12, fontWeight: 600, opacity: idx === 0 ? 0.4 : 1,
          }}>← Prev</button>
          <div className="mono" style={{ fontSize: 11, color: t.inkSoft, minWidth: 56, textAlign: 'center' }}>
            {String(idx + 1).padStart(2,'0')} / {PROV_ORDER.length}
          </div>
          <button onClick={next} style={{
            padding: '8px 14px', borderRadius: 10, border: `1px solid ${t.primary}`,
            background: t.primary, color: '#fff', cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
          }}>Next →</button>
        </div>
        <div style={{ fontSize: 11, color: t.inkSoft, textAlign: 'center', maxWidth: 240, lineHeight: 1.5 }}>
          انقر على الشاشة للانتقال للخطوة التالية، أو استخدم القائمة الجانبية.
        </div>
      </div>

      {/* right context */}
      <div style={{ width: 240, position: 'sticky', top: 90 }}>
        <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ fontSize: 11, color: t.inkSoft, textTransform: 'uppercase', letterSpacing: '0.08em',
            fontWeight: 600, marginBottom: 8 }}>الحالي</div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>{PROV_SCREENS[cur].label}</div>
          <div style={{ fontSize: 11, color: t.inkSoft, marginTop: 6 }}>
            <span className="mono">{cur}</span>
          </div>
          <div style={{ height: 1, background: t.border, margin: '12px 0' }} />
          <div style={{ fontSize: 11, color: t.inkSoft, lineHeight: 1.7 }}>
            <div><strong style={{ color: t.ink }}>التالي:</strong> <span className="mono">{PROV_SCREENS[cur].next}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SanadProviderPrototype = SanadProviderPrototype;
window.PROV_SCREENS = PROV_SCREENS;
window.PROV_ORDER = PROV_ORDER;
