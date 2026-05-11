// Sanad — service selection / details screens

function ScrServicesAll({ theme: t }) {
  t = t || useTheme();
  const services = Object.values(window.SanadTokens.SERVICES);
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="جميع الخدمات" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 100px' }}>
        <Field theme={t} placeholder="ابحث عن خدمة…" icon="search" style={{ marginBottom: 16 }} />
        <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
          {['الكل', 'مشاوير', 'مرافقة', 'مرافقة طبية', 'تدريب'].map((c, i) => (
            <Tag key={c} theme={t}
              color={i === 0 ? '#fff' : t.ink}
              soft={i === 0 ? t.primary : t.surface}
              style={{ border: `1px solid ${i === 0 ? t.primary : t.border}`, padding: '8px 14px', fontSize: 13 }}>{c}</Tag>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {services.map(s => (
            <Card key={s.key} theme={t} padding={16}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <ServiceTile service={s} size={56} theme={t} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <div style={{ fontSize: 15.5, fontWeight: 600 }}>{s.name}</div>
                    <Tag theme={t} color={t.success} soft={t.success + '18'} style={{ fontSize: 10.5 }}>متاح الآن</Tag>
                  </div>
                  <div style={{ fontSize: 12.5, color: t.inkMuted, lineHeight: 1.6 }}>{s.sub}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10, fontSize: 11.5, color: t.inkSoft }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <SanadIcon name="starFill" size={12} color="#E0A823" /> ٤٫٨
                    </span>
                    <span>·</span>
                    <span>يبدأ من ٣٥ ر.س</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// Generic service detail header
function ServiceDetail({ theme: t, service, hero, features, audiences, pricing }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title={service.name} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110 }}>
        {/* Hero */}
        <div style={{ padding: '4px 20px 18px' }}>
          <div style={{
            background: `linear-gradient(160deg, ${service.soft} 0%, ${t.surface} 90%)`,
            borderRadius: t.radius.card, padding: 22, position: 'relative', overflow: 'hidden',
            border: `1px solid ${t.border}`,
          }}>
            <ServiceTile service={service} size={64} theme={t} style={{ marginBottom: 14 }} />
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.02em' }}>{service.name}</div>
            <div style={{ fontSize: 13.5, color: t.inkMuted, lineHeight: 1.7 }}>{hero}</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 12, color: t.inkMuted }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <SanadIcon name="starFill" size={14} color="#E0A823" />
                <span style={{ color: t.ink, fontWeight: 600 }}>٤٫٨</span> (١٫٢ ألف)
              </div>
              <div>·</div>
              <div>متاح الآن</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ padding: '0 20px 14px' }}>
          <SectionTitle theme={t}>تفاصيل الخدمة</SectionTitle>
          <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 14,
                borderBottom: i < features.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: service.soft, color: service.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <SanadIcon name="check" size={16} strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1, fontSize: 13.5, lineHeight: 1.6 }}>{f}</div>
              </div>
            ))}
          </Card>
        </div>

        {/* Audiences */}
        <div style={{ padding: '0 20px 14px' }}>
          <SectionTitle theme={t}>الفئات المستفيدة</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {audiences.map(a => (
              <Tag key={a} theme={t} color={service.color} soft={service.soft} style={{ padding: '8px 14px', fontSize: 12.5 }}>{a}</Tag>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div style={{ padding: '0 20px 14px' }}>
          <SectionTitle theme={t}>التكلفة التقديرية</SectionTitle>
          <Card theme={t} padding={16}>
            {pricing.map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0',
                borderBottom: i < pricing.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ fontSize: 13.5, color: t.ink }}>{p.l}</div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }} className="latin">{p.v}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}` }}>
        <Button full theme={t} variant="primary" size="lg" iconRight={t.dir === 'rtl' ? 'arrowL' : 'arrowR'}
          style={{ background: service.color }}>
          طلب الخدمة الآن
        </Button>
      </div>
    </Screen>
  );
}

function ScrServiceFazaa({ theme: t }) {
  t = t || useTheme();
  return <ServiceDetail theme={t} service={window.SanadTokens.SERVICES.fazaa}
    hero="مشاوير ومهام يومية ينفّذها مندوب موثوق نيابةً عنك: صيدلية، سوبر ماركت، وثائق رسمية، وتوصيل المستندات."
    features={[
      'اختر نوع المشوار وحدد مواقع الانطلاق والوجهة.',
      'وثّق الطلب بالصور والإيصال بعد تنفيذ المشوار.',
      'تتبّع لحظي لحالة الطلب على الخريطة.',
      'قيّم المندوب بعد إتمام المشوار.',
    ]}
    audiences={['كبار السن', 'الأسر', 'ذوو الإعاقة', 'الموظفون']}
    pricing={[
      { l: 'مشوار قصير (داخل الحي)', v: '٣٥ ر.س' },
      { l: 'مشوار متوسط', v: '٦٠ ر.س' },
      { l: 'وثائق رسمية', v: 'حسب الجهة' },
    ]} />;
}

function ScrServiceJalees({ theme: t }) {
  t = t || useTheme();
  return <ServiceDetail theme={t} service={window.SanadTokens.SERVICES.jalees}
    hero="مرافقة اجتماعية ودعم نفسي: قراءة، حوار، تذكير بالأدوية، ودعم خلال الجلسات الترفيهية والعلاجية."
    features={[
      'اختر نوع التفاعل: قراءة، حوار، ألعاب ذهنية، أو مساعدة في الحركة.',
      'حدّد مدة الجلسة ومكانها — في المنزل أو افتراضيًا.',
      'تواصل مباشر بالصوت أو الرسائل خلال الجلسة.',
      'ملاحظات مدوّنة من مقدّم الخدمة بعد كل جلسة.',
    ]}
    audiences={['كبار السن', 'الأسر', 'ذوو الإعاقة', 'الأطفال', 'مرضى']}
    pricing={[
      { l: 'جلسة ساعة', v: '٦٠ ر.س' },
      { l: 'جلسة نصف يوم', v: '١٥٠ ر.س' },
      { l: 'باقة أسبوعية', v: '٣٨٠ ر.س' },
    ]} />;
}

function ScrServiceAcademic({ theme: t }) {
  t = t || useTheme();
  return <ServiceDetail theme={t} service={window.SanadTokens.SERVICES.academic}
    hero="برامج تدريب ميداني لطلاب الجامعات تحت إشراف أكاديمي مباشر، تساعدك على ربط الدراسة بسوق العمل."
    features={[
      'استعراض البرامج التدريبية المتاحة حسب التخصص.',
      'معرفة تفاصيل البرنامج، المدة، والمتطلبات.',
      'التقديم عبر التطبيق ومتابعة حالة الطلب.',
      'الحصول على شهادة معتمدة بعد إتمام التدريب.',
    ]}
    audiences={['طلاب الجامعات', 'الخريجون الجدد', 'الباحثون عن تدريب']}
    pricing={[
      { l: 'برنامج تدريب صيفي', v: 'مجاني' },
      { l: 'برنامج متخصص', v: '٢٥٠ ر.س' },
      { l: 'إصدار الشهادة', v: 'مشمول' },
    ]} />;
}

function ScrServiceMurafaqa({ theme: t }) {
  t = t || useTheme();
  return <ServiceDetail theme={t} service={window.SanadTokens.SERVICES.murafaqa}
    hero="مرافقة المواعيد الطبية والحكومية والاجتماعية، مع دعم خلال التنقل والانتظار وإنجاز الإجراءات."
    features={[
      'حجز الموعد وتحديد عدد المرافقين.',
      'مرافق مدرّب ومتفاهم مع احتياج المستفيد.',
      'تتبّع الرحلة وتحديثات لحظية للوصول.',
      'تلخيص الزيارة وتقييم الخدمة بعد الانتهاء.',
    ]}
    audiences={['كبار السن', 'مرضى', 'ذوو الإعاقة', 'الأسر']}
    pricing={[
      { l: 'مرافقة طبية (٣ ساعات)', v: '٧٠ ر.س' },
      { l: 'مرافقة حكومية', v: '٩٠ ر.س' },
      { l: 'حالة طارئة', v: '+٣٠٪' },
    ]} />;
}

window.ScrServicesAll = ScrServicesAll;
window.ScrServiceFazaa = ScrServiceFazaa;
window.ScrServiceJalees = ScrServiceJalees;
window.ScrServiceAcademic = ScrServiceAcademic;
window.ScrServiceMurafaqa = ScrServiceMurafaqa;
