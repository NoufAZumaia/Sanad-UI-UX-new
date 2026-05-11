// Sanad USER canvas — all user-side screens laid out on the design canvas

const USER_SCREENS = [
  { sec: 'auth', id: 'splash', label: 'Splash', render: t => <ScrSplash theme={t} /> },
  { sec: 'auth', id: 'on1', label: 'Onboarding · 1', render: t => <ScrOnboard1 theme={t} /> },
  { sec: 'auth', id: 'on2', label: 'Onboarding · 2', render: t => <ScrOnboard2 theme={t} /> },
  { sec: 'auth', id: 'on3', label: 'Onboarding · 3', render: t => <ScrOnboard3 theme={t} /> },
  { sec: 'auth', id: 'auth-phone', label: 'Auth · Phone', render: t => <ScrAuthPhone theme={t} /> },
  { sec: 'auth', id: 'auth-otp', label: 'Auth · OTP', render: t => <ScrAuthOTP theme={t} /> },
  { sec: 'auth', id: 'profile-setup', label: 'Profile setup', render: t => <ScrProfileSetup theme={t} /> },

  { sec: 'home', id: 'home-a', label: 'Home · Hero', render: t => <ScrHomeA theme={t} /> },
  { sec: 'home', id: 'home-b', label: 'Home · Minimal', render: t => <ScrHomeB theme={t} /> },
  { sec: 'home', id: 'home-c', label: 'Home · Dashboard', render: t => <ScrHomeC theme={t} /> },
  { sec: 'home', id: 'services-all', label: 'All services', render: t => <ScrServicesAll theme={t} /> },
  { sec: 'home', id: 'notifications', label: 'Notifications', render: t => <ScrNotifications theme={t} /> },

  { sec: 'services', id: 'srv-fazaa', label: 'سند فزعة', render: t => <ScrServiceFazaa theme={t} /> },
  { sec: 'services', id: 'srv-jalees', label: 'سند جليس', render: t => <ScrServiceJalees theme={t} /> },
  { sec: 'services', id: 'srv-academic', label: 'سند أكاديمي', render: t => <ScrServiceAcademic theme={t} /> },
  { sec: 'services', id: 'srv-murafaqa', label: 'سند مرافقة', render: t => <ScrServiceMurafaqa theme={t} /> },

  { sec: 'request', id: 'req-fazaa', label: 'Request · Fazaa', render: t => <ScrRequestFazaa theme={t} /> },
  { sec: 'request', id: 'req-jalees', label: 'Request · Jalees', render: t => <ScrRequestJalees theme={t} /> },
  { sec: 'request', id: 'req-academic', label: 'Request · Academic', render: t => <ScrRequestAcademic theme={t} /> },
  { sec: 'request', id: 'req-murafaqa', label: 'Request · Murafaqa', render: t => <ScrRequestMurafaqa theme={t} /> },

  { sec: 'tracking', id: 'track-fazaa', label: 'Tracking · Fazaa', render: t => <ScrTrackingFazaa theme={t} /> },
  { sec: 'tracking', id: 'track-murafaqa', label: 'Tracking · Murafaqa', render: t => <ScrTrackingMurafaqa theme={t} /> },
  { sec: 'tracking', id: 'chat', label: 'Chat', render: t => <ScrChat theme={t} /> },
  { sec: 'tracking', id: 'call', label: 'Voice call', render: t => <ScrCall theme={t} /> },

  { sec: 'account', id: 'profile-a', label: 'Profile · Hero', render: t => <ScrProfileA theme={t} /> },
  { sec: 'account', id: 'profile-b', label: 'Profile · Stats', render: t => <ScrProfileB theme={t} /> },
  { sec: 'account', id: 'profile-c', label: 'Profile · Elder', render: t => <ScrProfileC theme={t} /> },
  { sec: 'account', id: 'settings', label: 'Settings', render: t => <ScrSettings theme={t} /> },
  { sec: 'account', id: 'rate', label: 'Rate service', render: t => <ScrRateService theme={t} /> },
  { sec: 'account', id: 'reviews', label: 'My reviews', render: t => <ScrReviewsList theme={t} /> },

  { sec: 'states', id: 'success', label: 'Success', render: t => <ScrSuccess theme={t} /> },
  { sec: 'states', id: 'error', label: 'Error', render: t => <ScrError theme={t} /> },
  { sec: 'states', id: 'empty', label: 'Empty', render: t => <ScrEmpty theme={t} /> },
  { sec: 'states', id: 'loading', label: 'Searching', render: t => <ScrLoading theme={t} /> },
];

const USER_SECTIONS = [
  { id: 'auth', title: '01 — Onboarding & Auth', sub: 'Splash, intro, login, profile setup' },
  { id: 'home', title: '02 — Home & Discovery', sub: '3 home variants + browser + notifications' },
  { id: 'services', title: '03 — Service Detail', sub: 'الخدمات الأربع' },
  { id: 'request', title: '04 — Request Creation', sub: 'تدفقات إنشاء الطلب' },
  { id: 'tracking', title: '05 — Tracking & Comms', sub: 'تتبع لحظي، محادثة، اتصال' },
  { id: 'account', title: '06 — Account & Reviews', sub: 'الحساب، الإعدادات، التقييمات' },
  { id: 'states', title: '07 — System States', sub: 'نجاح، خطأ، فارغ، تحميل' },
];

function UserCanvas({ theme }) {
  return (
    <DesignCanvas>
      {USER_SECTIONS.map(sec => {
        const items = USER_SCREENS.filter(s => s.sec === sec.id);
        return (
          <DCSection key={sec.id} id={sec.id} title={sec.title} subtitle={sec.sub}>
            {items.map(s => (
              <DCArtboard key={s.id} id={s.id} label={s.label} width={s.w || 390} height={s.h || 844}>
                <PhoneBezel theme={theme}>{s.render(theme)}</PhoneBezel>
              </DCArtboard>
            ))}
          </DCSection>
        );
      })}
    </DesignCanvas>
  );
}

window.SanadUserCanvas = UserCanvas;
