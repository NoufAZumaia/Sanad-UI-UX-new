// Sanad PROVIDER — earnings, ratings, profile/settings

function ScrProvEarnings({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="الأرباح" />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110 }}>
        {/* hero balance */}
        <div style={{ padding: '6px 16px 14px' }}>
          <div style={{ background: `linear-gradient(135deg, ${t.primary} 0%, ${t.primaryDark} 100%)`,
            borderRadius: t.radius.card, padding: '20px 22px', color: '#fff' }}>
            <div style={{ fontSize: 12.5, opacity: 0.8 }}>الرصيد الحالي</div>
            <div className="latin" style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 4 }}>1,247.50 ﷼</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button style={{ flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,0.18)',
                border: 'none', borderRadius: 12, color: '#fff', fontFamily: 'inherit', fontSize: 13,
                fontWeight: 600, cursor: 'pointer' }}>سحب الأرباح</button>
              <button style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.18)',
                border: 'none', borderRadius: 12, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SanadIcon name="card" size={18} color="#fff" />
              </button>
            </div>
          </div>
        </div>

        {/* period tabs */}
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ display: 'flex', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, padding: 4 }}>
            {['اليوم', 'الأسبوع', 'الشهر', 'الكل'].map((p, i) => {
              const on = i === 1;
              return (
                <button key={p} style={{ flex: 1, padding: '8px 0', background: on ? t.ink : 'transparent',
                  color: on ? t.surface : t.inkMuted, border: 'none', borderRadius: 8, fontSize: 12,
                  fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>{p}</button>
              );
            })}
          </div>
        </div>

        {/* chart */}
        <div style={{ padding: '0 16px 14px' }}>
          <Card theme={t} padding={16}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 11, color: t.inkSoft }}>أرباح الأسبوع</div>
                <div className="latin" style={{ fontSize: 24, fontWeight: 700 }}>2,847 ﷼</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: t.success, fontWeight: 600 }}>
                <SanadIcon name="trendUp" size={12} /><span className="latin">+12.4%</span>
              </div>
            </div>
            <BarChart theme={t} values={[280, 410, 320, 540, 380, 470, 447]} labels={['س','ح','ن','ث','ر','خ','ج']} />
          </Card>
        </div>

        {/* recent payouts */}
        <div style={{ padding: '0 16px 14px' }}>
          <SectionTitle theme={t} action="عرض الكل">المعاملات الأخيرة</SectionTitle>
          <Card theme={t} padding={0}>
            {[
              { d: 'صيدلية الدواء', t1: 'اليوم ٢:٠٠ م', a: '+35.00', pos: true },
              { d: 'مرافقة طبية', t1: 'أمس ١٠:٣٠ ص', a: '+120.00', pos: true },
              { d: 'سحب إلى حساب الأهلي', t1: 'أمس ٨:٠٠ ص', a: '-500.00', pos: false },
              { d: 'سوبرماركت بنده', t1: 'الإثنين', a: '+85.50', pos: true },
              { d: 'وثائق رسمية', t1: 'الأحد', a: '+150.00', pos: true },
            ].map((tx, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14,
                borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10,
                  background: tx.pos ? t.success + '18' : t.danger + '18',
                  color: tx.pos ? t.success : t.danger,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={tx.pos ? 'arrowDown' : 'arrowUp'} size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{tx.d}</div>
                  <div style={{ fontSize: 11, color: t.inkSoft }}>{tx.t1}</div>
                </div>
                <div className="latin" style={{ fontSize: 14, fontWeight: 700,
                  color: tx.pos ? t.success : t.danger }}>{tx.a} ﷼</div>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <ProvTabBar active="earnings" theme={t} />
    </Screen>
  );
}

function BarChart({ theme: t, values, labels }) {
  const max = Math.max(...values);
  return (
    <div style={{ display: 'flex', gap: 8, height: 110, alignItems: 'flex-end' }}>
      {values.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: `${(v / max) * 100}%`,
              background: i === values.length - 1 ? t.primary : t.primary + '40',
              borderRadius: '8px 8px 4px 4px' }} />
          </div>
          <div style={{ fontSize: 10, color: t.inkSoft }}>{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

function ScrProvRatings({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="التقييمات" />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
        <div style={{ padding: '6px 16px 14px' }}>
          <Card theme={t} padding={20} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="latin" style={{ fontSize: 48, fontWeight: 700, color: t.primary, letterSpacing: '-0.02em' }}>4.9</div>
              <div style={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
                {[1,2,3,4,5].map(n => <SanadIcon key={n} name="starFill" size={14} color="#E0A823" />)}
              </div>
              <div style={{ fontSize: 11, color: t.inkSoft, marginTop: 4 }}>من ٢٤٧ تقييم</div>
            </div>
            <div style={{ flex: 1.4 }}>
              {[
                { n: 5, p: 82 },
                { n: 4, p: 12 },
                { n: 3, p: 4 },
                { n: 2, p: 1 },
                { n: 1, p: 1 },
              ].map(r => (
                <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="latin" style={{ fontSize: 11, width: 12 }}>{r.n}</span>
                  <SanadIcon name="starFill" size={10} color="#E0A823" />
                  <div style={{ flex: 1, height: 6, background: t.bgMuted, borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: r.p + '%', height: '100%', background: t.primary, borderRadius: 3 }} />
                  </div>
                  <span className="latin" style={{ fontSize: 10, color: t.inkSoft, width: 26, textAlign: 'end' }}>{r.p}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ padding: '0 16px 14px' }}>
          <SectionTitle theme={t}>تقييمات حديثة</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { n: 'نورا الزهراني', s: 5, c: 'سريع ومحترف، شكراً لك!', d: 'اليوم' },
              { n: 'محمد الفهد', s: 5, c: 'خدمة ممتازة وفي الوقت المحدد.', d: 'أمس' },
              { n: 'سارة العيسى', s: 4, c: 'كل شيء كان جيد.', d: 'الإثنين' },
            ].map((r, i) => (
              <Card key={i} theme={t} padding={14}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Avatar name={r.n.split(' ')[0]} size={36} theme={t} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ display: 'flex', gap: 1 }}>
                        {[1,2,3,4,5].map(n => <SanadIcon key={n} name={n <= r.s ? 'starFill' : 'star'} size={10} color={n <= r.s ? '#E0A823' : t.border} />)}
                      </div>
                      <span style={{ fontSize: 11, color: t.inkSoft }}>{r.d}</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: t.ink, lineHeight: 1.6 }}>{r.c}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

function ScrProvProfile({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110 }}>
        <div style={{ padding: '20px 24px 14px', background: t.surface, borderBottom: `1px solid ${t.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <Avatar name="أحمد ع" size={62} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700 }}>أحمد العتيبي</div>
              <div style={{ fontSize: 12.5, color: t.inkMuted }}>عضو منذ ٢٠٢٣ · مقدّم خدمة موثّق</div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
                <SanadIcon name="starFill" size={12} color="#E0A823" />
                <span className="latin" style={{ fontSize: 12, fontWeight: 600 }}>4.9</span>
                <span style={{ fontSize: 11, color: t.inkSoft }}>· ٢٤٧ مهمة</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '8px 10px', background: t.success + '15', borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 6 }}>
              <SanadIcon name="check" size={14} color={t.success} strokeWidth={2.4} />
              <div style={{ fontSize: 11, color: t.success, fontWeight: 600 }}>هوية موثّقة</div>
            </div>
            <div style={{ flex: 1, padding: '8px 10px', background: t.primary + '15', borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 6 }}>
              <SanadIcon name="shield" size={14} color={t.primary} />
              <div style={{ fontSize: 11, color: t.primary, fontWeight: 600 }}>وثائق مكتملة</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '14px 16px' }}>
          <SectionTitle theme={t}>إعدادات الحساب</SectionTitle>
          <Card theme={t} padding={0}>
            {[
              { l: 'الخدمات التي أقدّمها', s: '٤ خدمات نشطة', i: 'settings' },
              { l: 'مناطق العمل', s: 'الرياض · ٣ مناطق', i: 'pin' },
              { l: 'أوقات التوفر', s: 'يوميًا ٧ص–١٠م', i: 'clock' },
              { l: 'الحساب البنكي', s: 'البنك الأهلي ••• ٤٢٧٨', i: 'card' },
              { l: 'الإشعارات', s: 'مفعّلة', i: 'bell' },
              { l: 'الدعم والمساعدة', s: '', i: 'chat' },
            ].map((r, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14,
                borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.bgMuted, color: t.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={r.i} size={17} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{r.l}</div>
                  {r.s && <div style={{ fontSize: 11, color: t.inkSoft }}>{r.s}</div>}
                </div>
                <SanadIcon name={t.dir === 'rtl' ? 'chevL' : 'chevR'} size={16} color={t.inkSoft} />
              </div>
            ))}
          </Card>
        </div>
      </div>
      <ProvTabBar active="profile" theme={t} />
    </Screen>
  );
}

function ScrProvSettings({ theme: t }) { return ScrProvProfile({ theme: t }); }

function ScrProvTaskList({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="المهام" />
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ display: 'flex', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, padding: 4 }}>
          {['نشطة', 'قادمة', 'مكتملة'].map((p, i) => {
            const on = i === 0;
            return (
              <button key={p} style={{ flex: 1, padding: '8px 0', background: on ? t.ink : 'transparent',
                color: on ? t.surface : t.inkMuted, border: 'none', borderRadius: 8, fontSize: 12,
                fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>{p}</button>
            );
          })}
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 16px', overflowY: 'auto', paddingBottom: 110 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { svc: window.SanadTokens.SERVICES.fazaa, t1: 'صيدلية الدواء', sub: 'نورا الزهراني', time: 'جارية', amt: '٣٥', st: 'active' },
            { svc: window.SanadTokens.SERVICES.murafaqa, t1: 'مرافقة طبية', sub: 'الملك فيصل', time: '٩:٣٠ ص', amt: '١٢٠', st: 'queued' },
            { svc: window.SanadTokens.SERVICES.fazaa, t1: 'سوبرماركت', sub: 'هايبر بنده', time: '٥:٠٠ م', amt: '٨٥', st: 'queued' },
          ].map((q, i) => (
            <Card key={i} theme={t} padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <ServiceTile service={q.svc} size={44} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{q.t1}</div>
                  {q.st === 'active' && <div style={{ fontSize: 9.5, padding: '2px 6px',
                    background: t.success + '20', color: t.success, borderRadius: 6, fontWeight: 600 }}>جارية</div>}
                </div>
                <div style={{ fontSize: 11.5, color: t.inkMuted }}>{q.sub} · {q.time}</div>
              </div>
              <div className="latin" style={{ fontSize: 14, fontWeight: 700, color: t.primary }}>{q.amt} ﷼</div>
            </Card>
          ))}
        </div>
      </div>
      <ProvTabBar active="tasks" theme={t} />
    </Screen>
  );
}

Object.assign(window, { ScrProvEarnings, ScrProvRatings, ScrProvProfile, ScrProvSettings, ScrProvTaskList });
