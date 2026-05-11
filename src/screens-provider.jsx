// Sanad — provider dashboard concept (2 screens)

function ScrProviderDash({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 30 }}>
        <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500 }}>لوحة المقدّم</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 2 }}>أحمد العتيبي</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', background: t.success + '18', color: t.success,
            padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
            <span style={{ width: 7, height: 7, borderRadius: 3.5, background: t.success }} /> متاح
          </div>
        </div>

        {/* Earnings hero */}
        <div style={{ padding: '0 16px 14px' }}>
          <div style={{
            background: `linear-gradient(135deg, ${t.ink} 0%, #1B2926 100%)`, color: '#fff', borderRadius: t.radius.card,
            padding: 18,
          }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>أرباح اليوم</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
              <span className="latin" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em' }}>٤٢٧</span>
              <span style={{ fontSize: 14, opacity: 0.7 }}>ر.س</span>
              <span style={{ marginInlineStart: 'auto', fontSize: 11, color: '#86EFAC' }}>+١٢٪ عن أمس</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {[
                { l: 'مهام', v: '٧' },
                { l: 'ساعات', v: '٥٫٢' },
                { l: 'تقييم', v: '٤٫٩' },
              ].map((s, i, a) => (
                <div key={i} style={{ flex: 1, paddingInlineEnd: i < a.length - 1 ? 10 : 0,
                  borderInlineEnd: i < a.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                  <div className="latin" style={{ fontSize: 17, fontWeight: 700 }}>{s.v}</div>
                  <div style={{ fontSize: 10.5, opacity: 0.7 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active task */}
        <div style={{ padding: '0 16px 14px' }}>
          <SectionTitle theme={t}>المهمة الحالية</SectionTitle>
          <Card theme={t} padding={16} style={{ borderColor: t.primary + '40', background: t.primarySoft + '60' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <ServiceTile service={window.SanadTokens.SERVICES.fazaa} size={44} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>صيدلية الدواء — حي الياسمين</div>
                <div style={{ fontSize: 11.5, color: t.inkMuted, marginTop: 2 }}>سند فزعة · #SF-2841 · بدأت ١٠:٣٠ ص</div>
              </div>
              <Tag theme={t} color={t.primary} soft="#fff">جارية</Tag>
            </div>
            <div style={{ height: 6, background: t.bgMuted, borderRadius: 3, marginBottom: 8, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '60%', background: t.primary }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: t.inkSoft, marginBottom: 12 }}>
              <span>تم الاستلام</span><span>في الطريق إلى المستفيد</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button theme={t} variant="surface" size="sm" full icon="phone">اتصال</Button>
              <Button theme={t} variant="primary" size="sm" full icon="check">إنهاء المهمة</Button>
            </div>
          </Card>
        </div>

        {/* Queue */}
        <div style={{ padding: '0 16px 14px' }}>
          <SectionTitle theme={t} action="الكل">طلبات قادمة (٣)</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { s: window.SanadTokens.SERVICES.murafaqa, t1: 'مرافقة طبية', d: 'الملك فيصل التخصصي', time: '٩:٣٠ ص', dist: '٤٫٢ كم' },
              { s: window.SanadTokens.SERVICES.fazaa, t1: 'سوبرماركت', d: 'هايبر بنده — الياسمين', time: '٥:٠٠ م', dist: '١٫٨ كم' },
              { s: window.SanadTokens.SERVICES.fazaa, t1: 'وثائق', d: 'الأحوال المدنية', time: 'غدًا ١٠ ص', dist: '٧ كم' },
            ].map((q, i) => (
              <Card key={i} theme={t} padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <ServiceTile service={q.s} size={40} theme={t} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{q.t1}</div>
                  <div style={{ fontSize: 11.5, color: t.inkMuted }}>{q.d}</div>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{q.time}</div>
                  <div className="latin" style={{ fontSize: 10.5, color: t.inkSoft }}>{q.dist}</div>
                </div>
                <Button theme={t} variant="primary" size="sm">قبول</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

function ScrProviderTask({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.fazaa;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="مهمة جارية" action={<Tag theme={t} color={t.success} soft={t.success + '18'}>نشطة</Tag>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 100px' }}>
        <MapPlaceholder theme={t} height={200} style={{ marginBottom: 14 }} />

        <Card theme={t} padding={16} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="عبدالله ف" size={44} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>عبدالله الفهد</div>
              <div style={{ fontSize: 11.5, color: t.inkMuted }} className="latin">+966 5X XXX XXXX</div>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: s.color, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="phone" size={16} color="#fff" />
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: t.surface2, border: `1px solid ${t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="chat" size={16} />
            </div>
          </div>
        </Card>

        <Card theme={t} padding={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 12 }}>تفاصيل المهمة</div>
          {[
            { l: 'النوع', v: 'صيدلية' },
            { l: 'الانطلاق', v: 'حي الياسمين، الرياض' },
            { l: 'الوجهة', v: 'صيدلية الدواء — طريق الملك فهد' },
            { l: 'القيمة', v: '٣٥ ر.س' },
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0',
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <span style={{ fontSize: 12.5, color: t.inkMuted }}>{r.l}</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <Card theme={t} padding={16}>
          <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 12 }}>إثبات التنفيذ</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <PhotoSlot theme={t} height={100} label="صورة الإيصال" style={{ flex: 1 }} />
            <PhotoSlot theme={t} height={100} label="صورة المنتج" style={{ flex: 1 }} />
          </div>
        </Card>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}`,
        display: 'flex', gap: 10 }}>
        <Button theme={t} variant="surface" size="lg" style={{ flex: 1 }}>إيقاف</Button>
        <Button theme={t} variant="primary" size="lg" icon="check" style={{ flex: 1.5 }}>إنهاء المهمة</Button>
      </div>
    </Screen>
  );
}

window.ScrProviderDash = ScrProviderDash;
window.ScrProviderTask = ScrProviderTask;
