// Sanad PROVIDER — home, online toggle, incoming request, accept/decline

function ScrProvHome({ theme: t, online = true }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110 }}>
        <div style={{ padding: '8px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="أحمد ع" size={44} theme={t} />
            <div>
              <div style={{ fontSize: 12, color: t.inkSoft }}>مرحبًا</div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>أحمد العتيبي</div>
            </div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: t.surface, border: `1px solid ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <SanadIcon name="bell" size={18} />
            <div style={{ position: 'absolute', top: 8, insetInlineEnd: 8, width: 8, height: 8, borderRadius: 4, background: t.danger, border: `1.5px solid ${t.surface}` }} />
          </div>
        </div>

        {/* online toggle hero */}
        <div style={{ padding: '0 16px 14px' }}>
          <button data-tab="provIncoming" style={{
            width: '100%', textAlign: 'start', border: 'none', cursor: 'pointer',
            background: online
              ? `linear-gradient(135deg, ${t.success} 0%, #056149 100%)`
              : `linear-gradient(135deg, ${t.ink} 0%, #2a2a2a 100%)`,
            color: '#fff', borderRadius: t.radius.card, padding: 20,
            boxShadow: online ? '0 12px 28px rgba(4,120,87,0.25)' : '0 12px 28px rgba(0,0,0,0.18)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>{online ? 'أنت متاح للطلبات' : 'أنت غير متاح'}</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{online ? 'مستعد للعمل' : 'انقر للعودة'}</div>
              </div>
              <div style={{ width: 56, height: 32, borderRadius: 16, background: 'rgba(255,255,255,0.25)', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', top: 3, [online ? 'insetInlineStart' : 'insetInlineEnd']: 3,
                  width: 26, height: 26, borderRadius: 13, background: '#fff' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              {[
                { l: 'أرباح اليوم', v: '٤٢٧ ر.س' },
                { l: 'مهام', v: '٧' },
                { l: 'تقييم', v: '٤٫٩' },
              ].map((s, i, a) => (
                <div key={i} style={{ flex: 1, paddingInlineEnd: i < a.length - 1 ? 14 : 0,
                  borderInlineEnd: i < a.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none' }}>
                  <div className="latin" style={{ fontSize: 16, fontWeight: 700 }}>{s.v}</div>
                  <div style={{ fontSize: 10.5, opacity: 0.75 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </button>
        </div>

        {/* upcoming queue */}
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
              </Card>
            ))}
          </div>
        </div>

        {/* shortcuts */}
        <div style={{ padding: '0 16px' }}>
          <SectionTitle theme={t}>اختصارات</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { l: 'الأرباح', i: 'card', c: t.primary, k: 'provEarnings' },
              { l: 'المهام', i: 'list', c: t.accent, k: 'provTask' },
              { l: 'التقييمات', i: 'starFill', c: '#E0A823', k: 'provRatings' },
              { l: 'الإعدادات', i: 'settings', c: t.inkMuted, k: 'provSettings' },
            ].map(q => (
              <button key={q.l} data-tab={q.k} style={{ background: t.surface, border: `1px solid ${t.border}`,
                borderRadius: 18, padding: 14, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
                textAlign: 'start', fontFamily: 'inherit' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: q.c + '18', color: q.c,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SanadIcon name={q.i} size={18} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: t.ink }}>{q.l}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProvTabBar active="home" theme={t} />
    </Screen>
  );
}

function ScrProvOffline({ theme: t }) { return <ScrProvHome theme={t} online={false} />; }

function ScrProvIncoming({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.fazaa;
  return (
    <Screen theme={t} bg="#0F1414">
      <StatusBar theme={t} dark />
      <div style={{ flex: 1, position: 'relative' }}>
        <MapPlaceholder theme={t} height="100%" style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
        <div style={{ position: 'absolute', top: 60, insetInlineStart: 20, insetInlineEnd: 20,
          background: 'rgba(15,20,20,0.85)', backdropFilter: 'blur(8px)', borderRadius: 18, padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: t.success, boxShadow: `0 0 0 4px ${t.success}40` }} />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>طلب جديد قريب منك</div>
          <div className="mono" style={{ fontSize: 11, opacity: 0.7 }}>00:18</div>
        </div>
      </div>
      <div style={{ background: t.surface, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: '20px 20px 26px',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
          <ServiceTile service={s} size={52} theme={t} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: t.inkSoft, fontWeight: 500 }}>{s.name}</div>
            <div style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>صيدلية الدواء</div>
            <div style={{ fontSize: 12, color: t.inkMuted, marginTop: 2 }}>حي الياسمين، الرياض</div>
          </div>
          <div style={{ textAlign: 'end' }}>
            <div className="latin" style={{ fontSize: 18, fontWeight: 700, color: t.primary }}>٣٥ ر.س</div>
            <div style={{ fontSize: 11, color: t.inkSoft }}>تقديري</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {[
            { l: 'المسافة', v: '٢٫٤ كم', i: 'pin' },
            { l: 'المدة', v: '~٢٠ د', i: 'clock' },
            { l: 'النوع', v: 'صيدلية', i: 'pharmacy' },
          ].map((r, i) => (
            <div key={i} style={{ flex: 1, background: t.bgMuted, borderRadius: 12, padding: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: t.inkSoft, fontSize: 10.5, marginBottom: 4 }}>
                <SanadIcon name={r.i} size={12} /><span>{r.l}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{r.v}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button theme={t} variant="surface" size="lg" style={{ flex: 1 }} icon="close">رفض</Button>
          <Button theme={t} variant="primary" size="lg" style={{ flex: 2 }} icon="check">قبول الطلب</Button>
        </div>
      </div>
    </Screen>
  );
}

function ScrProvDecline({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="سبب الرفض" />
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 14, color: t.inkMuted, lineHeight: 1.7 }}>اختر سبب رفض الطلب — يساعدنا على تحسين توزيع المهام:</div>
        {['بعيد عن موقعي', 'مشغول حاليًا', 'لا أقدّم هذه الخدمة', 'وقت غير مناسب', 'سبب آخر'].map((r, i) => (
          <button key={i} style={{ width: '100%', textAlign: 'start', padding: 16, background: t.surface,
            border: `1.5px solid ${i === 0 ? t.primary : t.border}`, borderRadius: t.radius.field, fontFamily: 'inherit',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14 }}>
            <span style={{ fontWeight: 500 }}>{r}</span>
            <div style={{ width: 20, height: 20, borderRadius: 10, border: `2px solid ${i === 0 ? t.primary : t.border}`,
              background: i === 0 ? t.primary : 'transparent' }} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <Button full theme={t} variant="primary" size="lg">تأكيد الرفض</Button>
      </div>
    </Screen>
  );
}

// Bottom tab bar for provider app
function ProvTabBar({ active = 'home', theme: t }) {
  t = t || useTheme();
  const items = [
    { k: 'provHome', l: 'الرئيسية', i: 'home', a: 'home' },
    { k: 'provTask', l: 'المهام', i: 'list', a: 'tasks' },
    { k: 'provEarnings', l: 'الأرباح', i: 'card', a: 'earnings' },
    { k: 'provProfile', l: 'حسابي', i: 'user', a: 'profile' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, insetInlineStart: 0, insetInlineEnd: 0,
      paddingBottom: 22, paddingTop: 10,
      background: t.surface, borderTop: `1px solid ${t.border}`,
      display: 'flex', justifyContent: 'space-around',
      borderTopLeftRadius: 24, borderTopRightRadius: 24, zIndex: 5,
    }}>
      {items.map(it => {
        const on = it.a === active;
        return (
          <button key={it.k} data-tab={it.k} style={{ background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: on ? t.primary : t.inkSoft, padding: '4px 12px', fontFamily: 'inherit' }}>
            <SanadIcon name={it.i} size={22} strokeWidth={on ? 2 : 1.6} />
            <span style={{ fontSize: 11, fontWeight: on ? 600 : 500 }}>{it.l}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { ScrProvHome, ScrProvOffline, ScrProvIncoming, ScrProvDecline, ProvTabBar });
