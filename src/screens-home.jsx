// Sanad — home dashboard (3 variations) + service selection list

// ─── Home variant A: hero greeting + grid ───────────────────
function ScrHomeA({ theme: t }) {
  t = t || useTheme();
  const services = Object.values(window.SanadTokens.SERVICES);
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        {/* greeting */}
        <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="عبدالله ف" size={44} theme={t} />
            <div>
              <div style={{ fontSize: 13, color: t.inkMuted }}>مساء الخير،</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>عبدالله الفهد</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: t.surface, border: `1px solid ${t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <SanadIcon name="bell" size={18} color={t.ink} />
              <div style={{ position: 'absolute', top: 8, insetInlineEnd: 8, width: 8, height: 8, borderRadius: 4, background: t.danger, border: `1.5px solid ${t.surface}` }} />
            </div>
          </div>
        </div>

        {/* hero card — current request */}
        <div style={{ padding: '0 16px 20px' }}>
          <div style={{
            background: `linear-gradient(135deg, ${t.primaryDeep || t.primary} 0%, ${t.primary} 100%)`,
            color: '#fff', borderRadius: t.radius.card, padding: 18,
            boxShadow: '0 12px 28px rgba(15,118,110,0.22)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Tag theme={t} color="#fff" soft="rgba(255,255,255,0.18)" style={{ backdropFilter: 'blur(4px)' }}>طلب جارٍ</Tag>
              <div style={{ fontSize: 11, opacity: 0.85 }} className="mono">#SF-2841</div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>صيدلية الدواء — حي الياسمين</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 14 }}>المندوب أحمد في الطريق — يصل خلال ١٢ دقيقة</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.12)', borderRadius: 14 }}>
              <Avatar name="أحمد م" size={36} color="#fff" style={{ background: 'rgba(255,255,255,0.22)' }} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>أحمد العتيبي</div>
                <div style={{ fontSize: 11, opacity: 0.85 }}>تويوتا كامري · أ ب ج ١٢٣٤</div>
              </div>
              <div style={{ width: 34, height: 34, borderRadius: 17, background: 'rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name="phone" size={16} color="#fff" />
              </div>
              <div style={{ width: 34, height: 34, borderRadius: 17, background: 'rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name="chat" size={16} color="#fff" />
              </div>
            </div>
          </div>
        </div>

        {/* services grid */}
        <div style={{ padding: '0 16px' }}>
          <SectionTitle theme={t} action="عرض الكل">خدمات سند</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {services.map(s => (
              <Card key={s.key} theme={t} padding={16} style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 140 }}>
                <ServiceTile service={s} size={48} theme={t} />
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{s.name}</div>
                  <div style={{ fontSize: 11.5, color: t.inkMuted, lineHeight: 1.5 }}>{s.sub}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* quick actions strip */}
        <div style={{ padding: '20px 16px 0' }}>
          <SectionTitle theme={t}>اختصارات</SectionTitle>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {[
              { l: 'صيدلية', i: 'pharmacy', c: t.primary },
              { l: 'سوبرماركت', i: 'cart', c: t.accent },
              { l: 'موعد طبي', i: 'hospital', c: '#7A1E55' },
              { l: 'وثائق', i: 'doc', c: '#1E3A8A' },
            ].map(q => (
              <div key={q.l} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16,
                padding: 12, display: 'flex', alignItems: 'center', gap: 10, minWidth: 130 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: q.c + '18', color: q.c,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={q.i} size={18} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{q.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active="home" theme={t} />
    </Screen>
  );
}

// ─── Home variant B: minimal list-led ───────────────────────
function ScrHomeB({ theme: t }) {
  t = t || useTheme();
  const services = Object.values(window.SanadTokens.SERVICES);
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100, padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <Logo size={36} />
          <div style={{ width: 40, height: 40, borderRadius: 20, background: t.surface, border: `1px solid ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <SanadIcon name="bell" size={18} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, color: t.inkMuted, marginBottom: 4 }}>أهلًا، عبدالله</div>
          <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>كيف نقدر نسندك<br />اليوم؟</div>
        </div>

        <Field theme={t} placeholder="ابحث عن خدمة، مكان، أو طلب…" icon="search" style={{ marginBottom: 20 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {services.map(s => (
            <div key={s.key} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: t.radius.card,
              padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <ServiceTile service={s} size={52} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 2 }}>{s.name}</div>
                <div style={{ fontSize: 12.5, color: t.inkMuted, lineHeight: 1.5 }}>{s.sub}</div>
              </div>
              <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={18} color={t.inkSoft} />
            </div>
          ))}
        </div>

        <SectionTitle theme={t} action="الكل">أحدث طلباتك</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { s: 'سند فزعة', d: 'صيدلية الدواء', tag: 'جارٍ', c: t.primary, time: 'الآن' },
            { s: 'سند جليس', d: 'جلسة قراءة — أم سعد', tag: 'مكتمل', c: t.success, time: 'أمس' },
          ].map((it, i) => (
            <div key={i} style={{ background: t.surface2, borderRadius: 16, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 8, height: 36, borderRadius: 4, background: it.c }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{it.d}</div>
                <div style={{ fontSize: 11.5, color: t.inkMuted }}>{it.s} · {it.time}</div>
              </div>
              <Tag theme={t} color={it.c} soft={it.c + '1F'}>{it.tag}</Tag>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" theme={t} />
    </Screen>
  );
}

// ─── Home variant C: dense dashboard ───────────────────────
function ScrHomeC({ theme: t }) {
  t = t || useTheme();
  const services = Object.values(window.SanadTokens.SERVICES);
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: t.inkSoft }} className="mono">RIYADH · ٢٦°</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>مرحبًا بعودتك</div>
          </div>
          <Avatar name="ع ف" size={42} theme={t} />
        </div>

        {/* stats row */}
        <div style={{ padding: '0 16px 16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'طلبات هذا الشهر', v: '٧', c: t.primary },
            { l: 'جلسات', v: '٣', c: t.accent },
            { l: 'تقييمك', v: '٤٫٩', c: '#E0A823' },
          ].map((s, i) => (
            <div key={i} style={{ background: t.surface, borderRadius: 18, padding: 12, border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: s.c, letterSpacing: '-0.02em' }}>{s.v}</div>
              <div style={{ fontSize: 10.5, color: t.inkMuted, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* horizontal services strip */}
        <div style={{ padding: '0 16px 16px' }}>
          <SectionTitle theme={t}>اختر الخدمة</SectionTitle>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
            {services.map(s => (
              <div key={s.key} style={{
                minWidth: 150, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 22,
                padding: 14, display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <ServiceTile service={s} size={44} theme={t} />
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: t.inkMuted, lineHeight: 1.5, height: 30 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* upcoming */}
        <div style={{ padding: '0 16px' }}>
          <SectionTitle theme={t} action="التقويم">القادم اليوم وغدًا</SectionTitle>
          <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
            {[
              { t1: 'موعد مستشفى الملك فيصل', t2: 'سند مرافقة · ٩:٣٠ ص', tag: 'اليوم', c: '#7A1E55' },
              { t1: 'جلسة قراءة — والدة', t2: 'سند جليس · ٤:٠٠ م', tag: 'اليوم', c: t.accent },
              { t1: 'برنامج محاسبة — تدريب', t2: 'سند أكاديمي · ٨:٣٠ ص', tag: 'الأحد', c: '#1E3A8A' },
            ].map((row, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 20, background: row.c + '1A', color: row.c,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name="calendar" size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{row.t1}</div>
                  <div style={{ fontSize: 11.5, color: t.inkMuted }}>{row.t2}</div>
                </div>
                <Tag theme={t} color={row.c} soft={row.c + '14'} style={{ fontSize: 11 }}>{row.tag}</Tag>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <TabBar active="home" theme={t} />
    </Screen>
  );
}

window.ScrHomeA = ScrHomeA;
window.ScrHomeB = ScrHomeB;
window.ScrHomeC = ScrHomeC;
