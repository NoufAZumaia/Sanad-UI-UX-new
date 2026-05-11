// Sanad PROVIDER (مقدّم الخدمة) — auth & onboarding screens

function ScrProvSplash({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.surface}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <Logo size={120} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 600 }}>سنــد · مقدّم الخدمة</div>
          <div style={{ fontSize: 13, color: t.inkMuted, marginTop: 6 }}>مساحة عمل المندوبين</div>
        </div>
      </div>
      <div style={{ padding: '0 24px 40px', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 11, color: t.inkSoft, letterSpacing: '0.1em' }}>SANAD PROVIDER · v2.0</div>
      </div>
    </Screen>
  );
}

function ScrProvLogin({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Logo size={52} />
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' }}>أهلًا بك يا مقدّم الخدمة</div>
          <div style={{ fontSize: 14, color: t.inkMuted, marginTop: 8, lineHeight: 1.7 }}>سجّل دخولك للوصول إلى لوحة المهام والأرباح.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field theme={t} label="رقم الجوال" value="5X XXX XXXX" placeholder="5X XXX XXXX" icon="phone" />
          <Field theme={t} label="كلمة المرور" placeholder="••••••••" icon="shield" type="password" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${t.primary}`, background: t.primary,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name="check" size={12} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{ color: t.inkMuted }}>تذكرني</span>
            </div>
            <span style={{ color: t.primary, fontWeight: 600 }}>نسيت كلمة المرور؟</span>
          </div>
        </div>
        <Button full theme={t} variant="primary" size="lg">تسجيل الدخول</Button>
        <div style={{ flex: 1 }} />
        <div style={{ textAlign: 'center', fontSize: 13, color: t.inkMuted }}>
          جديد على سند؟ <span style={{ color: t.primary, fontWeight: 600 }}>سجّل كمقدّم خدمة</span>
        </div>
      </div>
    </Screen>
  );
}

function ScrProvRegister({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="انضم كمقدّم خدمة" />
      <div style={{ padding: '0 24px 8px' }}>
        <StepBar theme={t} steps={4} active={1} />
        <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 8 }}>الخطوة ٢ من ٤ · المعلومات الشخصية</div>
      </div>
      <div style={{ flex: 1, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
        <Field theme={t} label="الاسم الكامل" placeholder="مثال: أحمد العتيبي" icon="user" />
        <Field theme={t} label="رقم الهوية" placeholder="١XXXXXXXXX" icon="card" />
        <Field theme={t} label="رقم الجوال" placeholder="5X XXX XXXX" icon="phone" />
        <div>
          <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 8, fontWeight: 500 }}>الخدمات التي ستقدّمها</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {Object.values(window.SanadTokens.SERVICES).map((s, i) => (
              <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12,
                background: i < 2 ? s.soft : t.surface, border: `1.5px solid ${i < 2 ? s.color : t.border}`,
                borderRadius: t.radius.field }}>
                <ServiceTile service={s} size={32} theme={t} />
                <div style={{ fontSize: 12.5, fontWeight: 600, flex: 1 }}>{s.name}</div>
                {i < 2 && <SanadIcon name="check" size={16} color={s.color} strokeWidth={2.5} />}
              </div>
            ))}
          </div>
        </div>
        <Button full theme={t} variant="primary" size="lg" iconRight={t.dir === 'rtl' ? 'arrowL' : 'arrowR'}>متابعة</Button>
      </div>
    </Screen>
  );
}

function ScrProvDocuments({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="رفع الوثائق" />
      <div style={{ padding: '0 24px 8px' }}>
        <StepBar theme={t} steps={4} active={2} />
        <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 8 }}>الخطوة ٣ من ٤ · الوثائق المطلوبة</div>
      </div>
      <div style={{ flex: 1, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
        {[
          { l: 'صورة الهوية الوطنية', st: 'تم الرفع', c: t.success },
          { l: 'رخصة القيادة', st: 'تم الرفع', c: t.success },
          { l: 'استمارة السيارة', st: 'بانتظار الرفع', c: t.warn },
          { l: 'شهادة عدم محكومية', st: 'اختياري', c: t.inkSoft },
        ].map((d, i) => (
          <Card key={i} theme={t} padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: d.c + '18', color: d.c,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="doc" size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>{d.l}</div>
              <div style={{ fontSize: 11.5, color: d.c, fontWeight: 500 }}>{d.st}</div>
            </div>
            <Button theme={t} variant="surface" size="sm">{d.st === 'تم الرفع' ? 'تعديل' : 'رفع'}</Button>
          </Card>
        ))}
        <Button full theme={t} variant="primary" size="lg" style={{ marginTop: 8 }}>إرسال للمراجعة</Button>
      </div>
    </Screen>
  );
}

function ScrProvPending({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, padding: '40px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, textAlign: 'center' }}>
        <div style={{ width: 88, height: 88, borderRadius: 44, background: t.warn + '1A', color: t.warn,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="clock" size={40} />
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>تحت المراجعة</div>
          <div style={{ fontSize: 14, color: t.inkMuted, lineHeight: 1.7 }}>يتم التحقق من وثائقك حاليًا. سنبلّغك عبر إشعار خلال ٢٤–٤٨ ساعة.</div>
        </div>
        <Card theme={t} padding={16} style={{ width: '100%', textAlign: 'start' }}>
          <div style={{ fontSize: 12, color: t.inkSoft, marginBottom: 8 }}>حالة الطلب</div>
          {[
            { l: 'تم استلام الطلب', d: 'الإثنين ١٠:٣٠ ص', done: true },
            { l: 'مراجعة الوثائق', d: 'جارية الآن', done: false, active: true },
            { l: 'التفعيل', d: 'لاحقًا', done: false },
          ].map((s, i, a) => (
            <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i < a.length - 1 ? 12 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <div style={{ width: 18, height: 18, borderRadius: 9,
                  background: s.done ? t.success : s.active ? t.warn : t.border,
                  border: `2px solid ${s.active ? t.warn + '40' : 'transparent'}` }} />
                {i < a.length - 1 && <div style={{ width: 2, flex: 1, background: t.border, marginTop: 2 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < a.length - 1 ? 8 : 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{s.l}</div>
                <div style={{ fontSize: 11.5, color: t.inkSoft }}>{s.d}</div>
              </div>
            </div>
          ))}
        </Card>
        <Button full theme={t} variant="surface" size="lg">تواصل مع الدعم</Button>
      </div>
    </Screen>
  );
}

Object.assign(window, { ScrProvSplash, ScrProvLogin, ScrProvRegister, ScrProvDocuments, ScrProvPending });
