// Sanad PROVIDER — canvas view (all screens grid)

function SanadProviderCanvas({ theme }) {
  const t = theme;
  const sections = [
    { id: 'auth', title: 'التسجيل والتفعيل', screens: ['splash', 'login', 'register', 'documents', 'pending'] },
    { id: 'home', title: 'الرئيسية والاتصال', screens: ['provHome', 'provOffline', 'provIncoming', 'provDecline'] },
    { id: 'task', title: 'تنفيذ المهمة', screens: ['provNavigation', 'provInProgress', 'provComplete'] },
    { id: 'wallet', title: 'الأرباح والتقييمات', screens: ['provEarnings', 'provRatings', 'provTask'] },
    { id: 'account', title: 'الحساب والإعدادات', screens: ['provProfile'] },
  ];

  return (
    <DesignCanvas title="Sanad · مقدّم الخدمة" theme={theme}>
      {sections.map(sec => (
        <DCSection key={sec.id} id={sec.id} title={sec.title}>
          {sec.screens.map(k => {
            const Comp = window[window.PROV_SCREENS[k].c];
            const label = window.PROV_SCREENS[k].label;
            return (
              <DCArtboard key={k} id={k} label={label} width={340} height={720}>
                <PhoneFrame theme={t}><Comp theme={t} /></PhoneFrame>
              </DCArtboard>
            );
          })}
        </DCSection>
      ))}
    </DesignCanvas>
  );
}

window.SanadProviderCanvas = SanadProviderCanvas;
