// Sanad — empty / error / success / loading states + notifications + chat

function ScrNotifications2({ theme: t }) {
  t = t || useTheme();
  const groups = [
    { label: 'اليوم', items: [
      { i: 'check', c: t.success, t: 'تم قبول طلبك', d: 'سند فزعة · صيدلية الدواء', time: 'الآن' },
      { i: 'truck', c: t.primary, t: 'مقدّم الخدمة في الطريق', d: 'يصل خلال ١٢ دقيقة', time: 'قبل ٣ د' },
      { i: 'starFill', c: '#E0A823', t: 'قيّم تجربتك', d: 'جلسة سند جليس مع سعاد محمد', time: 'قبل ساعة' },
    ]},
    { label: 'هذا الأسبوع', items: [
      { i: 'doc', c: t.accent, t: 'شهادة تدريب جاهزة', d: 'سند أكاديمي · المحاسبة', time: 'الإثنين' },
      { i: 'shield', c: '#7A1E55', t: 'موعد مرافقة بعد غد', d: 'الملك فيصل التخصصي · ٩:٣٠ ص', time: 'الأحد' },
      { i: 'sparkle', c: t.primary, t: 'عرض جديد', d: 'خصم ١٥٪ على أول طلب فزعة', time: 'السبت' },
    ]},
  ];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="الإشعارات" action={<span style={{ fontSize: 12, color: t.primary, fontWeight: 600 }}>تعليم الكل</span>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 16px 30px' }}>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11.5, color: t.inkSoft, fontWeight: 600, marginBottom: 8, paddingInlineStart: 6 }}>{g.label}</div>
            <Card theme={t} padding={0} style={{ overflow: 'hidden' }}>
              {g.items.map((n, i, a) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 14px',
                  borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none',
                  background: i === 0 && gi === 0 ? t.primarySoft + '40' : 'transparent' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: n.c + '18', color: n.c,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <SanadIcon name={n.i} size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600, flex: 1 }}>{n.t}</div>
                      <div style={{ fontSize: 10.5, color: t.inkSoft, whiteSpace: 'nowrap' }}>{n.time}</div>
                    </div>
                    <div style={{ fontSize: 12, color: t.inkMuted, marginTop: 3 }}>{n.d}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}

function ScrChat2({ theme: t }) {
  t = t || useTheme();
  const messages = [
    { from: 'them', text: 'السلام عليكم، أنا في طريقي للصيدلية الآن.', time: '١٠:٢٨ ص' },
    { from: 'me', text: 'وعليكم السلام، يعطيك العافية.', time: '١٠:٢٩ ص' },
    { from: 'them', text: 'الدواء متوفر الحمدلله، هل تحتاج شيء إضافي؟', time: '١٠:٣٤ ص' },
    { from: 'me', text: 'لا فقط الدواء، شكراً.', time: '١٠:٣٤ ص' },
    { from: 'them', text: 'تمام، خلصت ورجعت لك. الموقع المرفق هو نفس البيت؟', time: '١٠:٤١ ص' },
  ];
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px',
        borderBottom: `1px solid ${t.border}`, background: t.surface }}>
        <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name={t.dir === 'rtl' ? 'chevR' : 'chevL'} size={20} />
        </div>
        <Avatar name="أحمد ع" size={38} theme={t} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>أحمد العتيبي</div>
          <div style={{ fontSize: 11, color: t.success, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: t.success }} /> متصل · في الطريق
          </div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 11, background: t.success + '18', color: t.success,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="phone" size={16} color={t.success} />
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 11, background: t.surface2, border: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="more" size={16} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', background: t.bgMuted,
        display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ alignSelf: 'center', fontSize: 10.5, color: t.inkSoft, background: t.surface,
          padding: '4px 12px', borderRadius: 999, marginBottom: 6 }}>اليوم · ١٠:٢٧ ص</div>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-start' : 'flex-end',
            marginBottom: 2 }}>
            <div style={{ maxWidth: '78%', padding: '10px 14px',
              background: m.from === 'me' ? t.primary : t.surface,
              color: m.from === 'me' ? '#fff' : t.ink,
              borderRadius: m.from === 'me' ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
              border: m.from === 'me' ? 'none' : `1px solid ${t.border}`,
              fontSize: 13.5, lineHeight: 1.6 }}>
              {m.text}
              <div style={{ fontSize: 10, marginTop: 4, opacity: 0.7,
                color: m.from === 'me' ? 'rgba(255,255,255,0.85)' : t.inkSoft }} className="latin">{m.time}</div>
            </div>
          </div>
        ))}

        <div style={{ alignSelf: 'flex-end', display: 'flex', gap: 6, padding: '6px 14px', background: t.surface,
          borderRadius: '18px 18px 18px 6px', border: `1px solid ${t.border}` }}>
          {[0,1,2].map(d => (
            <span key={d} style={{ width: 6, height: 6, borderRadius: 3, background: t.inkSoft, opacity: 0.5,
              animation: `sanadDot 1.2s ${d * 0.15}s infinite` }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '10px 14px 22px', background: t.surface,
        borderTop: `1px solid ${t.border}`, alignItems: 'center' }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: t.surface2, border: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="paperclip" size={16} />
        </div>
        <div style={{ flex: 1, background: t.bgMuted, borderRadius: 999, padding: '11px 16px',
          fontSize: 13, color: t.inkSoft }}>اكتب رسالتك…</div>
        <div style={{ width: 42, height: 42, borderRadius: 14, background: t.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="send" size={18} color="#fff" />
        </div>
      </div>
      <style>{`@keyframes sanadDot { 0%, 60%, 100% { opacity: 0.3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }`}</style>
    </Screen>
  );
}

function ScrSuccess({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: t.success + '18',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
          position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 12, borderRadius: 999, background: t.success + '28' }} />
          <div style={{ position: 'relative', width: 64, height: 64, borderRadius: 32, background: t.success,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="check" size={32} color="#fff" />
          </div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>تم إرسال طلبك بنجاح</div>
        <div style={{ fontSize: 14, color: t.inkMuted, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
          سيتواصل معك مقدّم الخدمة قريبًا. يمكنك متابعة الطلب من شاشة التتبع.
        </div>
        <Card theme={t} padding={14} style={{ width: '100%', maxWidth: 320, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
            <span style={{ color: t.inkMuted }}>رقم الطلب</span>
            <span style={{ fontWeight: 600 }} className="latin">#SF-2841</span>
          </div>
          <div style={{ height: 1, background: t.border, margin: '10px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
            <span style={{ color: t.inkMuted }}>الوقت المتوقّع</span>
            <span style={{ fontWeight: 600 }}>خلال ١٥ دقيقة</span>
          </div>
        </Card>
        <Button full theme={t} variant="primary" size="lg" style={{ maxWidth: 320 }}>متابعة الطلب</Button>
        <div style={{ fontSize: 13, color: t.primary, fontWeight: 600, marginTop: 14 }}>العودة للرئيسية</div>
      </div>
    </Screen>
  );
}

function ScrError({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: 28, background: t.danger + '18',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
          <SanadIcon name="warn" size={42} color={t.danger} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>تعذّر إكمال الطلب</div>
        <div style={{ fontSize: 13.5, color: t.inkMuted, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
          حدث خطأ في الاتصال أثناء تأكيد الدفع. الرجاء التأكد من الاتصال والمحاولة مرة أخرى.
        </div>
        <Button full theme={t} variant="primary" size="lg" style={{ maxWidth: 320 }} icon="refresh">إعادة المحاولة</Button>
        <Button theme={t} variant="ghost" size="md" style={{ marginTop: 8 }}>تواصل مع الدعم</Button>
      </div>
    </Screen>
  );
}

function ScrEmpty({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="طلباتي" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 140, height: 140, borderRadius: '50%', background: t.surface2,
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
          border: `1.5px dashed ${t.border}` }}>
          <SanadIcon name="list" size={56} color={t.inkSoft} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>لا توجد طلبات بعد</div>
        <div style={{ fontSize: 13.5, color: t.inkMuted, lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
          ابدأ أول طلب لك من إحدى خدماتنا الأربع — سند فزعة، جليس، أكاديمي، أو مرافقة.
        </div>
        <Button full theme={t} variant="primary" size="lg" style={{ maxWidth: 280 }} icon="plus">طلب جديد</Button>
      </div>
      <TabBar active="orders" theme={t} />
    </Screen>
  );
}

function ScrLoading({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="جاري البحث" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 130, height: 130, marginBottom: 24 }}>
          {[0,1,2].map(r => (
            <div key={r} style={{ position: 'absolute', inset: 0, borderRadius: '50%',
              border: `2px solid ${t.primary}`, opacity: 0.3 - r * 0.08,
              animation: `sanadPulse 2.4s ${r * 0.6}s infinite` }} />
          ))}
          <div style={{ position: 'absolute', inset: '30%', borderRadius: '50%', background: t.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="search" size={28} color="#fff" />
          </div>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>نبحث لك عن أقرب مقدّم</div>
        <div style={{ fontSize: 13.5, color: t.inkMuted, lineHeight: 1.7, maxWidth: 260 }}>
          هذا قد يستغرق دقيقة. يمكنك البقاء في الشاشة وسنعلمك بمجرد القبول.
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 28 }}>
          {[0,1,2].map(d => (
            <span key={d} style={{ width: 8, height: 8, borderRadius: 4, background: t.primary,
              animation: `sanadBounce 1.4s ${d * 0.2}s infinite` }} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes sanadPulse { 0% { transform: scale(0.6); opacity: 0.6; } 100% { transform: scale(1.4); opacity: 0; } }
        @keyframes sanadBounce { 0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
      `}</style>
    </Screen>
  );
}

// Override tracking's chat & notifications with these polished versions
window.ScrNotificationsV2 = ScrNotifications;
window.ScrChatV2 = ScrChat;
window.ScrNotifications = ScrNotifications;
window.ScrChat = ScrChat;
window.ScrSuccess = ScrSuccess;
window.ScrError = ScrError;
window.ScrEmpty = ScrEmpty;
window.ScrLoading = ScrLoading;
