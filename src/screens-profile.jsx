// Sanad — profile (3 variants), settings, ratings flow + reviews list

function ScrProfileA({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        {/* Hero header */}
        <div style={{
          background: `linear-gradient(160deg, ${t.primaryDeep || t.primary} 0%, ${t.primary} 60%, ${t.primary}cc 100%)`,
          padding: '20px 20px 60px', color: '#fff', position: 'relative',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>حسابي</div>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: 'rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="settings" size={18} color="#fff" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar name="عبدالله ف" size={68} color="#fff" style={{ background: 'rgba(255,255,255,0.22)', fontSize: 24 }} theme={t} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>عبدالله الفهد</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }} className="latin">+966 5X XXX XXXX</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8,
                background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: 999, fontSize: 11 }}>
                <SanadIcon name="shieldCheck" size={12} color="#fff" /> موثّق
              </div>
            </div>
          </div>
        </div>

        {/* Stats card overlapping header */}
        <div style={{ padding: '0 16px', marginTop: -40 }}>
          <Card theme={t} padding={16} elevated>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { v: '٢٧', l: 'طلب' },
                { v: '٤٫٩', l: 'تقييمك' },
                { v: '١٢٠', l: 'نقاط ولاء' },
              ].map((s, i, a) => (
                <div key={i} style={{ textAlign: 'center', padding: '4px 0',
                  borderInlineEnd: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                  <div className="latin" style={{ fontSize: 22, fontWeight: 700, color: t.ink, letterSpacing: '-0.02em' }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: t.inkMuted, marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Menu */}
        <div style={{ padding: '20px 16px 0' }}>
          <Card theme={t} padding={0} style={{ overflow: 'hidden', marginBottom: 12 }}>
            {[
              { i: 'list', l: 'طلباتي', d: '٢ جارية', c: t.primary },
              { i: 'card', l: 'طرق الدفع', d: 'مدى · ****٤٢٧٨', c: t.primary },
              { i: 'pin', l: 'العناوين', d: 'البيت، العمل', c: t.primary },
              { i: 'shield', l: 'الموثّقون', d: '٣ مفضّلون', c: t.primary },
            ].map((r, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: r.c + '14', color: r.c,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={r.i} size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{r.l}</div>
                  <div style={{ fontSize: 11.5, color: t.inkSoft, marginTop: 2 }}>{r.d}</div>
                </div>
                <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={16} color={t.inkSoft} />
              </div>
            ))}
          </Card>

          <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
            {[
              { i: 'bell', l: 'الإشعارات' },
              { i: 'globe', l: 'اللغة', d: 'العربية' },
              { i: 'settings', l: 'الإعدادات' },
              { i: 'logout', l: 'تسجيل الخروج', danger: true },
            ].map((r, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <SanadIcon name={r.i} size={18} color={r.danger ? t.danger : t.inkMuted} />
                <div style={{ flex: 1, fontSize: 14, color: r.danger ? t.danger : t.ink }}>{r.l}</div>
                {r.d && <div style={{ fontSize: 12, color: t.inkSoft }}>{r.d}</div>}
                <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={16} color={t.inkSoft} />
              </div>
            ))}
          </Card>
        </div>
      </div>
      <TabBar active="profile" theme={t} />
    </Screen>
  );
}

function ScrProfileB({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100, padding: '6px 20px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>حسابي</div>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: t.surface, border: `1px solid ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="settings" size={17} />
          </div>
        </div>

        <Card theme={t} padding={20} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <Avatar name="عبدالله ف" size={64} theme={t} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700 }}>عبدالله الفهد</div>
            <div style={{ fontSize: 12, color: t.inkMuted, marginTop: 2 }} className="latin">+966 5X XXX XXXX</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <Tag theme={t} color={t.success} soft={t.success + '18'} icon="shieldCheck" style={{ fontSize: 10.5 }}>موثّق</Tag>
              <Tag theme={t} color="#E0A823" soft="#E0A82318" icon="trophy" style={{ fontSize: 10.5 }}>عضو ذهبي</Tag>
            </div>
          </div>
        </Card>

        <SectionTitle theme={t}>نشاطك في سند</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 20 }}>
          {[
            { v: '٢٧', l: 'إجمالي الطلبات', i: 'list', c: t.primary },
            { v: '١٤', l: 'سند فزعة', i: 'errand', c: t.primary },
            { v: '٨', l: 'سند جليس', i: 'heart', c: t.accent },
            { v: '٥', l: 'سند مرافقة', i: 'shield', c: '#7A1E55' },
          ].map((s, i) => (
            <Card key={i} theme={t} padding={14}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: s.c + '18', color: s.c,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={s.i} size={16} />
                </div>
                <div style={{ fontSize: 11, color: t.inkMuted, fontWeight: 500 }}>{s.l}</div>
              </div>
              <div className="latin" style={{ fontSize: 24, fontWeight: 700, color: t.ink, letterSpacing: '-0.02em' }}>{s.v}</div>
            </Card>
          ))}
        </div>

        <SectionTitle theme={t}>اختصارات</SectionTitle>
        <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
          {[
            { i: 'card', l: 'طرق الدفع', d: 'مدى · ****٤٢٧٨' },
            { i: 'pin', l: 'العناوين', d: 'البيت، العمل' },
            { i: 'doc', l: 'الفواتير' },
            { i: 'starFill', l: 'تقييماتي' },
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <SanadIcon name={r.i} size={18} color={t.inkMuted} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{r.l}</div>
                {r.d && <div style={{ fontSize: 11.5, color: t.inkSoft, marginTop: 2 }}>{r.d}</div>}
              </div>
              <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={16} color={t.inkSoft} />
            </div>
          ))}
        </Card>
      </div>
      <TabBar active="profile" theme={t} />
    </Screen>
  );
}

function ScrProfileC({ theme: t }) {
  // Elder-friendly large profile
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="حسابي" back={false} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 100px' }}>
        <Card theme={t} padding={22} style={{ textAlign: 'center', marginBottom: 18 }}>
          <Avatar name="أم سعد" size={92} theme={t} style={{ margin: '0 auto 14px', fontSize: 32 }} />
          <div style={{ fontSize: 22, fontWeight: 700 }}>أم سعد العتيبي</div>
          <div style={{ fontSize: 14, color: t.inkMuted, marginTop: 6 }}>الرياض · حي الياسمين</div>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18 }}>
          {[
            { l: 'طلباتي', i: 'list', c: t.primary },
            { l: 'الإشعارات', i: 'bell', c: t.accent },
            { l: 'محادثاتي', i: 'chat', c: '#1E3A8A' },
            { l: 'الدعم', i: 'phone', c: t.success },
          ].map(b => (
            <div key={b.l} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 22,
              padding: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: b.c + '18', color: b.c,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name={b.i} size={26} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{b.l}</div>
            </div>
          ))}
        </div>

        <Button full theme={t} variant="surface" size="lg" icon="settings">الإعدادات</Button>
      </div>
      <TabBar active="profile" theme={t} />
    </Screen>
  );
}

function ScrSettings({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="الإعدادات" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 16px 30px' }}>
        <div style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500, marginBottom: 8, paddingInlineStart: 4 }}>الحساب</div>
        <Card theme={t} padding={0} style={{ overflow: 'hidden', marginBottom: 18 }}>
          {[
            { l: 'الاسم', d: 'عبدالله الفهد' },
            { l: 'رقم الجوال', d: '+966 5X XXX XXXX', latin: true },
            { l: 'البريد', d: 'abdullah@example.com', latin: true },
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px',
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <div style={{ fontSize: 14, color: t.ink }}>{r.l}</div>
              <div style={{ fontSize: 13, color: t.inkMuted }} className={r.latin ? 'latin' : ''}>{r.d}</div>
            </div>
          ))}
        </Card>

        <div style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500, marginBottom: 8, paddingInlineStart: 4 }}>التفضيلات</div>
        <Card theme={t} padding={0} style={{ overflow: 'hidden', marginBottom: 18 }}>
          {[
            { l: 'الوضع الليلي', i: 'moon', toggle: true, on: t.dark },
            { l: 'إشعارات الطلبات', i: 'bell', toggle: true, on: true },
            { l: 'إشعارات تسويقية', i: 'sparkle', toggle: true, on: false },
            { l: 'اللغة', i: 'globe', d: 'العربية' },
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <SanadIcon name={r.i} size={18} color={t.inkMuted} />
              <div style={{ flex: 1, fontSize: 14 }}>{r.l}</div>
              {r.toggle ? <Toggle on={r.on} theme={t} /> : <div style={{ fontSize: 13, color: t.inkSoft }}>{r.d}</div>}
            </div>
          ))}
        </Card>

        <div style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500, marginBottom: 8, paddingInlineStart: 4 }}>الخصوصية والأمان</div>
        <Card theme={t} padding={0} style={{ overflow: 'hidden', marginBottom: 18 }}>
          {[
            { l: 'تغيير كلمة المرور', i: 'shield' },
            { l: 'سياسة الخصوصية', i: 'doc' },
            { l: 'الشروط والأحكام', i: 'doc' },
            { l: 'حذف الحساب', i: 'close', danger: true },
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <SanadIcon name={r.i} size={18} color={r.danger ? t.danger : t.inkMuted} />
              <div style={{ flex: 1, fontSize: 14, color: r.danger ? t.danger : t.ink }}>{r.l}</div>
              <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={16} color={t.inkSoft} />
            </div>
          ))}
        </Card>

        <div style={{ textAlign: 'center', fontSize: 11, color: t.inkSoft }} className="mono">الإصدار ٢٫٠٫٠ · build 2406</div>
      </div>
    </Screen>
  );
}

function ScrRateService({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.fazaa;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="تقييم الخدمة" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 110px' }}>
        <Card theme={t} padding={20} style={{ textAlign: 'center', marginBottom: 18 }}>
          <ServiceTile service={s} size={56} theme={t} style={{ margin: '0 auto 12px' }} />
          <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 4 }}>تم إكمال طلبك بنجاح</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>صيدلية الدواء — حي الياسمين</div>
          <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 4 }} className="latin">#SF-2841 · ١٠ مايو ٢٠٢٦</div>
        </Card>

        <Card theme={t} padding={20} style={{ marginBottom: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>كيف كانت تجربتك؟</div>
          <div style={{ fontSize: 12, color: t.inkMuted, marginBottom: 18 }}>تقييمك يساعدنا على الاستمرار في تحسين الخدمة</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 18 }}>
            {[1,2,3,4,5].map(n => (
              <div key={n} style={{ width: 48, height: 48, borderRadius: 14,
                background: n <= 4 ? '#FFF7E0' : t.surface2, color: n <= 4 ? '#E0A823' : t.inkSoft,
                border: `1.5px solid ${n <= 4 ? '#E0A823' : t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name={n <= 4 ? 'starFill' : 'star'} size={24} color={n <= 4 ? '#E0A823' : t.inkSoft} />
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: t.success, fontWeight: 600 }}>تجربة ممتازة!</div>
        </Card>

        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>ما الذي أعجبك؟</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {[
            { l: 'سرعة التنفيذ', sel: true },
            { l: 'تواصل ممتاز', sel: true },
            { l: 'أمانة', sel: false },
            { l: 'لطف', sel: true },
            { l: 'دقّة', sel: false },
          ].map(c => (
            <Tag key={c.l} theme={t} color={c.sel ? '#fff' : t.ink} soft={c.sel ? t.primary : t.surface}
              style={{ border: `1px solid ${c.sel ? t.primary : t.border}`, padding: '8px 14px', fontSize: 13 }}>{c.l}</Tag>
          ))}
        </div>

        <Field theme={t} label="ملاحظاتك (اختياري)" placeholder="اكتب رأيك بالتفصيل…" />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}` }}>
        <Button full theme={t} variant="primary" size="lg">إرسال التقييم</Button>
      </div>
    </Screen>
  );
}

function ScrReviewsList({ theme: t }) {
  t = t || useTheme();
  const reviews = [
    { name: 'سعاد محمد', service: 'سند جليس', stars: 5, text: 'تجربة هادئة وراقية، أمي ارتاحت كثيرًا للجلسة. شكرًا لكم.', time: 'قبل ٣ أيام', tags: ['لطف', 'صبر'] },
    { name: 'أحمد العتيبي', service: 'سند فزعة', stars: 5, text: 'سريع جدًا في تنفيذ المشوار، والاتصال كان واضح طوال الوقت.', time: 'قبل أسبوع', tags: ['سرعة', 'أمانة'] },
    { name: 'محمد عبدالله', service: 'سند مرافقة', stars: 4, text: 'مرافق محترم ومتفهم لاحتياج الوالدة، الموعد ضاع شوي بسبب الزحام.', time: 'قبل أسبوعين', tags: ['تفهّم'] },
  ];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="تقييماتي" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 30px' }}>
        <Card theme={t} padding={18} style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="latin" style={{ fontSize: 36, fontWeight: 700, color: t.ink, lineHeight: 1, letterSpacing: '-0.03em' }}>٤٫٩</div>
            <Stars value={5} size={14} theme={t} />
            <div style={{ fontSize: 11, color: t.inkSoft, marginTop: 4 }}>٢٧ تقييمًا</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[5,4,3,2,1].map(n => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="latin" style={{ fontSize: 11, color: t.inkSoft, width: 8 }}>{n}</span>
                <SanadIcon name="starFill" size={11} color="#E0A823" />
                <div style={{ flex: 1, height: 5, background: t.bgMuted, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: ['90%','7%','3%','0%','0%'][5-n], background: '#E0A823' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {reviews.map((r, i) => (
            <Card key={i} theme={t} padding={16}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <Avatar name={r.name} size={40} theme={t} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: t.inkSoft }}>{r.service} · {r.time}</div>
                </div>
                <Stars value={r.stars} size={13} theme={t} />
              </div>
              <div style={{ fontSize: 13, color: t.inkMuted, lineHeight: 1.7, marginBottom: 10 }}>{r.text}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {r.tags.map(tg => (
                  <Tag key={tg} theme={t} color={t.primary} soft={t.primarySoft} style={{ fontSize: 10.5 }}>{tg}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}

window.ScrProfileA = ScrProfileA;
window.ScrProfileB = ScrProfileB;
window.ScrProfileC = ScrProfileC;
window.ScrSettings = ScrSettings;
window.ScrRateService = ScrRateService;
window.ScrReviewsList = ScrReviewsList;
