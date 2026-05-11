// Sanad — tracking, notifications, chat, voice call

function ScrTrackingFazaa({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.fazaa;
  return (
    <Screen theme={t} bg={t.surface}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="متابعة الطلب" />
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <MapPlaceholder theme={t} height="100%" style={{ borderRadius: 0, height: '100%' }} />
        {/* Status pill on map */}
        <div style={{ position: 'absolute', top: 16, left: 16, right: 16,
          background: t.surface, borderRadius: 999, padding: '10px 16px',
          boxShadow: '0 6px 20px rgba(15,20,20,0.12)',
          display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: t.success }} />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>المندوب في الطريق إليك</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: s.color }} className="latin">١٢ د</div>
        </div>

        {/* Bottom sheet */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
          background: t.surface, borderTopLeftRadius: t.radius.sheet, borderTopRightRadius: t.radius.sheet,
          padding: '16px 20px 26px', boxShadow: '0 -8px 24px rgba(15,20,20,0.08)' }}>
          <div style={{ width: 48, height: 4, borderRadius: 2, background: t.bgMuted, margin: '0 auto 14px' }} />

          {/* timeline */}
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <div style={{ position: 'absolute', insetInlineStart: 11, top: 8, bottom: 8, width: 2, background: t.bgMuted }} />
            {[
              { l: 'تم استلام الطلب', t: '١٠:٣٠ ص', done: true },
              { l: 'في طريق الصيدلية', t: '١٠:٣٤ ص', done: true },
              { l: 'تم الاستلام', t: '١٠:٤٢ ص', done: true, active: true },
              { l: 'في الطريق إليك', t: 'الآن', done: false },
              { l: 'تم التسليم', t: '—', done: false },
            ].map((st, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0', position: 'relative' }}>
                <div style={{ width: 24, height: 24, borderRadius: 12, background: st.done ? s.color : t.surface,
                  border: `2px solid ${st.done ? s.color : t.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  {st.done && <SanadIcon name="check" size={12} color="#fff" strokeWidth={2.5} />}
                </div>
                <div style={{ flex: 1, fontSize: 13.5, fontWeight: st.active ? 600 : 500, color: st.done ? t.ink : t.inkSoft }}>{st.l}</div>
                <div className="latin" style={{ fontSize: 11.5, color: t.inkSoft }}>{st.t}</div>
              </div>
            ))}
          </div>

          {/* driver */}
          <div style={{ background: t.surface2, border: `1px solid ${t.border}`, borderRadius: 18, padding: 12,
            display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="أحمد م" size={44} color={s.color} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>أحمد العتيبي</div>
              <div style={{ fontSize: 11.5, color: t.inkMuted }}>تويوتا كامري · أ ب ج ١٢٣٤</div>
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 14, background: s.color, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="phone" size={18} color="#fff" />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 14, background: t.surface, border: `1.5px solid ${t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="chat" size={18} color={t.ink} />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}

function ScrTrackingMurafaqa({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.murafaqa;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="متابعة الرحلة" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 30px' }}>
        <Card theme={t} padding={16} style={{ marginBottom: 14, background: s.soft, borderColor: s.color + '40' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 24, background: '#fff', color: s.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="walk" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>المرافِق في طريقه إليك</div>
              <div style={{ fontSize: 12, color: t.inkMuted }}>الوصول المتوقع ٩:٢٥ ص</div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: s.color }} className="latin">٨ د</div>
          </div>
        </Card>

        <MapPlaceholder theme={t} height={260} style={{ marginBottom: 14 }} />

        <Card theme={t} padding={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 12 }}>تفاصيل الموعد</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: t.inkMuted }}>المستشفى</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>الملك فيصل التخصصي</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: t.inkMuted }}>القسم</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>الباطنية — د. أحمد</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: t.inkMuted }}>الموعد</span>
              <span style={{ fontSize: 13, fontWeight: 600 }} className="latin">٩:٣٠ ص — ١٢ مايو</span>
            </div>
          </div>
        </Card>

        <Card theme={t} padding={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="محمد ع" size={44} color={s.color} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>محمد عبدالله</div>
              <div style={{ fontSize: 11.5, color: t.inkMuted }}>مرافق طبي معتمد</div>
            </div>
            <Stars value={5} theme={t} />
          </div>
          <Divider theme={t} />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button theme={t} variant="surface" size="sm" icon="chat" full>محادثة</Button>
            <Button theme={t} variant="primary" size="sm" icon="phone" full style={{ background: s.color }}>اتصال</Button>
          </div>
        </Card>
      </div>
    </Screen>
  );
}

function ScrChat({ theme: t }) {
  t = t || useTheme();
  const messages = [
    { from: 'them', text: 'السلام عليكم، أنا أحمد. وصلت للصيدلية الآن.', time: '١٠:٤٢' },
    { from: 'them', text: 'هل تحتاج شيء إضافي؟', time: '١٠:٤٢' },
    { from: 'me', text: 'وعليكم السلام. لا، يكفي ما هو في الوصفة. شكرًا.', time: '١٠:٤٤' },
    { from: 'them', text: 'تمام. سأرسل لك صورة الإيصال قبل التحرّك.', time: '١٠:٤٥' },
    { from: 'them', img: true, time: '١٠:٤٦' },
    { from: 'me', text: 'استلمت — في انتظارك.', time: '١٠:٤٧' },
  ];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px 12px',
        background: t.surface, borderBottom: `1px solid ${t.border}` }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: t.surface2, border: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name={t.dir === 'rtl' ? 'chevR' : 'chevL'} size={16} />
        </div>
        <Avatar name="أحمد م" size={40} theme={t} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>أحمد العتيبي</div>
          <div style={{ fontSize: 11, color: t.success, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: t.success }} /> متصل الآن
          </div>
        </div>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: t.primarySoft, color: t.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="phone" size={17} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ textAlign: 'center', fontSize: 11, color: t.inkSoft, marginBottom: 8 }}>اليوم</div>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
            {m.img ? (
              <div style={{ width: 180, height: 110, borderRadius: 16,
                backgroundImage: `repeating-linear-gradient(45deg, ${t.bgMuted} 0 8px, ${t.surface2} 8px 16px)`,
                border: `1px solid ${t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.inkSoft, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}>
                receipt.jpg
              </div>
            ) : (
              <div style={{
                maxWidth: '78%',
                background: m.from === 'me' ? t.primary : t.surface,
                color: m.from === 'me' ? '#fff' : t.ink,
                border: m.from === 'me' ? 'none' : `1px solid ${t.border}`,
                padding: '10px 14px', borderRadius: 18,
                borderBottomRightRadius: m.from === 'me' && t.dir === 'rtl' ? 4 : 18,
                borderBottomLeftRadius: m.from === 'me' && t.dir === 'ltr' ? 4 : (m.from === 'them' && t.dir === 'rtl' ? 4 : 18),
                fontSize: 13.5, lineHeight: 1.55,
              }}>
                {m.text}
                <div style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }} className="latin">{m.time}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 12px 22px', display: 'flex', alignItems: 'center', gap: 8,
        background: t.surface, borderTop: `1px solid ${t.border}` }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: t.surface2, border: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="paperclip" size={18} />
        </div>
        <div style={{ flex: 1, height: 44, borderRadius: 22, background: t.surface2, border: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8 }}>
          <SanadIcon name="mic" size={16} color={t.inkSoft} />
          <span style={{ fontSize: 13, color: t.inkSoft }}>اكتب رسالة…</span>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 22, background: t.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="send" size={18} color="#fff" />
        </div>
      </div>
    </Screen>
  );
}

function ScrCall({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.dark ? '#0A1414' : '#0F1F1D'}>
      <StatusBar theme={t} dark />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        padding: '60px 24px 50px', position: 'relative' }}>
        {/* bg gradient */}
        <div style={{ position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 20%, ${t.primary}40 0%, transparent 60%)` }} />
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 6 }}>سند فزعة · مكالمة جارية</div>
          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>أحمد العتيبي</div>
          <div className="latin" style={{ fontSize: 14, opacity: 0.8 }}>٠٠:٠٢:١٤</div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ width: 160, height: 160, borderRadius: 80,
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar name="أحمد م" size={120} color="#fff" style={{ background: 'rgba(255,255,255,0.2)', fontSize: 40 }} theme={t} />
          </div>
          <div style={{ position: 'absolute', inset: -20, borderRadius: 100, border: '2px solid rgba(255,255,255,0.15)' }} />
          <div style={{ position: 'absolute', inset: -40, borderRadius: 120, border: '1px solid rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ position: 'relative', display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          {[
            { i: 'mic', l: 'كتم', danger: false },
            { i: 'video', l: 'كاميرا', danger: false },
            { i: 'close', l: 'إنهاء', danger: true, big: true },
            { i: 'chat', l: 'محادثة', danger: false },
            { i: 'user', l: 'إضافة', danger: false },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: b.big ? 68 : 52, height: b.big ? 68 : 52,
                borderRadius: '50%',
                background: b.danger ? t.danger : 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
              }}>
                <SanadIcon name={b.i} size={b.big ? 24 : 20} color="#fff" />
              </div>
              <div style={{ fontSize: 11, color: '#fff', opacity: 0.7 }}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

function ScrNotifications({ theme: t }) {
  t = t || useTheme();
  const groups = [
    { title: 'اليوم', items: [
      { i: 'pin', c: t.primary, t: 'وصل المندوب إلى وجهتك', d: 'سند فزعة · طلب #SF-2841', time: 'قبل ٥ د', unread: true },
      { i: 'check', c: t.success, t: 'تم استلام طلبك', d: 'سند فزعة · حي الياسمين', time: 'قبل ١٢ د', unread: true },
      { i: 'chat', c: t.accent, t: 'رسالة جديدة من أحمد', d: 'تمام. سأرسل لك صورة الإيصال…', time: 'قبل ١٤ د' },
    ]},
    { title: 'هذا الأسبوع', items: [
      { i: 'starFill', c: '#E0A823', t: 'لا تنسَ تقييم الجلسة', d: 'سند جليس · مع سعاد محمد', time: 'أمس' },
      { i: 'graduation', c: '#1E3A8A', t: 'تم قبول طلب التدريب', d: 'برنامج محاسبة تطبيقي', time: 'أول أمس' },
      { i: 'calendar', c: '#7A1E55', t: 'تذكير بالموعد الطبي غدًا', d: 'الملك فيصل التخصصي · ٩:٣٠ ص', time: 'الجمعة' },
    ]},
  ];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="الإشعارات" action={<div style={{ fontSize: 12, color: t.primary, fontWeight: 600 }}>قراءة الكل</div>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 30px' }}>
        {groups.map(g => (
          <div key={g.title} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500, marginBottom: 10, paddingInlineStart: 4 }}>{g.title}</div>
            <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
              {g.items.map((n, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 14, position: 'relative',
                  borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: n.c + '18', color: n.c,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <SanadIcon name={n.i} size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: t.ink }}>{n.t}</div>
                      <div style={{ fontSize: 11, color: t.inkSoft, flexShrink: 0 }}>{n.time}</div>
                    </div>
                    <div style={{ fontSize: 12, color: t.inkMuted, marginTop: 4, lineHeight: 1.5 }}>{n.d}</div>
                  </div>
                  {n.unread && <div style={{ position: 'absolute', top: 18, insetInlineEnd: 14, width: 8, height: 8, borderRadius: 4, background: t.primary }} />}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}

window.ScrTrackingFazaa = ScrTrackingFazaa;
window.ScrTrackingMurafaqa = ScrTrackingMurafaqa;
window.ScrChat = ScrChat;
window.ScrCall = ScrCall;
window.ScrNotifications = ScrNotifications;
