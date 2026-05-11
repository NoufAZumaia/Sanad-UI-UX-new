// Sanad — onboarding, auth, splash screens
// Exposes individual screen components used by both prototype and canvas.

// ── Splash ──────────────────────────────────────────────────
function ScrSplash({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.surface} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <Logo size={120} />
        <div style={{ textAlign: 'center', maxWidth: 280 }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: t.ink, marginBottom: 6 }}>سنــد</div>
          <div style={{ fontSize: 14, color: t.inkMuted, lineHeight: 1.6 }}>رفقة تسندك في كل خطوة</div>
        </div>
      </div>
      <div style={{ padding: '28px 24px 40px', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 11, color: t.inkSoft, letterSpacing: '0.1em' }}>الإصدار ٢٫٠٫٠</div>
      </div>
    </Screen>
  );
}

// ── Onboarding ──────────────────────────────────────────────
function OnboardSlide({ theme: t, idx = 0, total = 3, illustration, title, body, variant = 'illustration' }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '6px 20px' }}>
        <div style={{ fontSize: 13, color: t.inkSoft, fontWeight: 500 }}>تخطّي</div>
      </div>
      <div style={{ flex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ marginTop: 8 }}>{illustration}</div>
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, color: t.ink, lineHeight: 1.3, marginBottom: 12, letterSpacing: '-0.02em' }}>{title}</div>
          <div style={{ fontSize: 15, color: t.inkMuted, lineHeight: 1.7 }}>{body}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 8 }}>
          <ProgressDots count={total} active={idx} theme={t} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="ghost" theme={t}>السابق</Button>
            <Button variant="primary" iconRight={t.dir === 'rtl' ? 'arrowL' : 'arrowR'} theme={t}>{idx === total - 1 ? 'ابدأ الآن' : 'التالي'}</Button>
          </div>
        </div>
      </div>
    </Screen>
  );
}

function OnboardIllustration1({ theme: t }) {
  t = t || useTheme();
  return (
    <div style={{ height: 320, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* big rounded card with service tiles arranged */}
      <div style={{ position: 'absolute', inset: '20px 0', borderRadius: 32,
        background: `linear-gradient(180deg, ${t.primaryTint} 0%, ${t.surface2} 100%)`,
        border: `1px solid ${t.border}`,
      }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: 20 }}>
        {Object.values(window.SanadTokens.SERVICES).map(s => (
          <div key={s.key} style={{
            background: t.surface, borderRadius: 22, padding: 16,
            border: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', gap: 10,
            boxShadow: '0 4px 14px rgba(15,20,20,0.04)',
            transform: ['fazaa', 'academic'].includes(s.key) ? 'translateY(-12px)' : 'translateY(8px)',
          }}>
            <ServiceTile service={s} size={42} theme={t} />
            <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnboardIllustration2({ theme: t }) {
  t = t || useTheme();
  return (
    <div style={{ height: 320, position: 'relative' }}>
      <MapPlaceholder height={250} theme={t} />
      <div style={{
        position: 'absolute', bottom: 30, insetInlineStart: 16, insetInlineEnd: 16,
        background: t.surface, borderRadius: 22, padding: 14,
        border: `1px solid ${t.border}`,
        boxShadow: '0 8px 24px rgba(15,20,20,0.08)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <Avatar name="أحمد م" size={44} theme={t} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>أحمد محمد</div>
          <div style={{ fontSize: 12, color: t.inkMuted }}>وصل إلى الصيدلية الآن</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: t.primarySoft, color: t.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="phone" size={18} />
        </div>
      </div>
    </div>
  );
}

function OnboardIllustration3({ theme: t }) {
  t = t || useTheme();
  return (
    <div style={{ height: 320, padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { name: 'سند فزعة', state: 'في الطريق', tag: 'جارٍ', color: t.primary },
        { name: 'سند جليس', state: 'انتهت بنجاح', tag: 'مكتمل', color: t.success },
        { name: 'سند مرافقة', state: 'غدًا ١٠:٠٠ ص', tag: 'مجدول', color: t.accent },
      ].map((it, i) => (
        <div key={i} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 22,
          padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 8, height: 40, borderRadius: 4, background: it.color }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{it.name}</div>
            <div style={{ fontSize: 12, color: t.inkMuted }}>{it.state}</div>
          </div>
          <Tag color={it.color} soft={it.color + '22'} theme={t}>{it.tag}</Tag>
        </div>
      ))}
    </div>
  );
}

function ScrOnboard1({ theme: t }) {
  t = t || useTheme();
  return <OnboardSlide theme={t} idx={0}
    illustration={<OnboardIllustration1 theme={t} />}
    title="أربع خدمات سند، تحت يدك"
    body="فزعة، جليس، أكاديمي، ومرافقة — اطلب ما تحتاج، نحن نسندك في الباقي." />;
}
function ScrOnboard2({ theme: t }) {
  t = t || useTheme();
  return <OnboardSlide theme={t} idx={1}
    illustration={<OnboardIllustration2 theme={t} />}
    title="مندوب مؤهل، تتبّع لحظي"
    body="نختار لك مقدّمي خدمة موثوقين، وتتابع تقدّم الطلب لحظة بلحظة." />;
}
function ScrOnboard3({ theme: t }) {
  t = t || useTheme();
  return <OnboardSlide theme={t} idx={2}
    illustration={<OnboardIllustration3 theme={t} />}
    title="كل طلباتك في مكان واحد"
    body="تابع طلباتك الجارية، المجدولة، والمكتملة، وقيّم كل تجربة." />;
}

// ── Auth: phone ─────────────────────────────────────────────
function ScrAuthPhone({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Logo size={56} />
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' }}>أهلًا بك في سند</div>
          <div style={{ fontSize: 14, color: t.inkMuted, marginTop: 8, lineHeight: 1.7 }}>أدخل رقم جوالك للمتابعة. سنرسل رمز التحقق لمرة واحدة.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field theme={t} label="رقم الجوال" value="5X XXX XXXX" placeholder="5X XXX XXXX" icon="phone" hint="نستخدم الرقم لإرسال رمز التحقق فقط." />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px' }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${t.primary}`, background: t.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="check" size={12} color="#fff" strokeWidth={2.5} />
            </div>
            <div style={{ fontSize: 12.5, color: t.inkMuted, lineHeight: 1.6 }}>أوافق على <span style={{ color: t.primary, fontWeight: 600 }}>الشروط والأحكام</span> و<span style={{ color: t.primary, fontWeight: 600 }}>سياسة الخصوصية</span></div>
          </div>
        </div>
        <Button full theme={t} variant="primary" size="lg">إرسال رمز التحقق</Button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 1, background: t.border }} />
          <div style={{ fontSize: 12, color: t.inkSoft }}>أو</div>
          <div style={{ flex: 1, height: 1, background: t.border }} />
        </div>
        <Button full theme={t} variant="surface" size="lg" icon="user">المتابعة كزائر</Button>
        <div style={{ flex: 1 }} />
        <div style={{ textAlign: 'center', fontSize: 13, color: t.inkMuted }}>
          مقدّم خدمة؟ <span style={{ color: t.primary, fontWeight: 600 }}>سجّل من هنا</span>
        </div>
      </div>
    </Screen>
  );
}

// ── Auth: OTP ───────────────────────────────────────────────
function ScrAuthOTP({ theme: t }) {
  t = t || useTheme();
  const code = ['٤', '٢', '٧', '_'];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="رمز التحقق" />
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' }}>أدخل الرمز المرسل</div>
          <div style={{ fontSize: 14, color: t.inkMuted, marginTop: 8, lineHeight: 1.7 }}>أرسلنا رمزًا مكوّنًا من ٤ خانات إلى<br /><span className="latin" style={{ color: t.ink, fontWeight: 600, direction: 'ltr', display: 'inline-block' }}>+966 5X XXX XXXX</span></div>
        </div>
        <div dir="ltr" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {code.map((d, i) => (
            <div key={i} style={{
              width: 64, height: 76, borderRadius: t.radius.field,
              background: t.surface, border: `1.5px solid ${d === '_' ? t.primary : t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 30, fontWeight: 700, color: t.ink,
              boxShadow: d === '_' ? `0 0 0 4px ${t.primarySoft}` : 'none',
            }}>{d === '_' ? '' : d}</div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: 13.5, color: t.inkMuted }}>
          لم يصلك الرمز؟ <span style={{ color: t.primary, fontWeight: 600 }}>إعادة الإرسال خلال ٠٠:٢٨</span>
        </div>
        <Button full theme={t} variant="primary" size="lg">تأكيد ومتابعة</Button>
      </div>
    </Screen>
  );
}

// ── Auth: profile setup ────────────────────────────────────
function ScrProfileSetup({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="إكمال الملف" />
      <div style={{ padding: '0 24px 8px' }}>
        <StepBar theme={t} steps={3} active={1} />
        <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 8 }}>الخطوة ٢ من ٣</div>
      </div>
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 96, height: 96, borderRadius: 48, background: t.primarySoft, color: t.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="user" size={40} />
            </div>
            <div style={{ position: 'absolute', bottom: -2, insetInlineEnd: -2, width: 32, height: 32, borderRadius: 16,
              background: t.primary, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${t.bg}` }}>
              <SanadIcon name="plus" size={18} color="#fff" />
            </div>
          </div>
          <div style={{ fontSize: 13, color: t.inkSoft }}>أضف صورة (اختياري)</div>
        </div>
        <Field theme={t} label="الاسم الكامل" placeholder="مثال: عبدالله الفهد" icon="user" />
        <Field theme={t} label="البريد الإلكتروني (اختياري)" placeholder="example@email.com" />
        <div>
          <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 8, fontWeight: 500 }}>المدينة</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة', 'أبها'].map((c, i) => (
              <Tag key={c} theme={t} color={i === 0 ? '#fff' : t.ink} soft={i === 0 ? t.primary : t.surface}
                style={{ border: `1px solid ${i === 0 ? t.primary : t.border}`, padding: '8px 14px', fontSize: 13 }}>{c}</Tag>
            ))}
          </div>
        </div>
        <Button full theme={t} variant="primary" size="lg">متابعة</Button>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  ScrSplash, ScrOnboard1, ScrOnboard2, ScrOnboard3,
  ScrAuthPhone, ScrAuthOTP, ScrProfileSetup,
});
