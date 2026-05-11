// Sanad PROVIDER — task lifecycle: navigation → in-progress → complete

function ScrProvNavigation({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg="#0F1414">
      <StatusBar theme={t} dark />
      <div style={{ flex: 1, position: 'relative' }}>
        <MapPlaceholder theme={t} height="100%" style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />

        {/* nav banner */}
        <div style={{ position: 'absolute', top: 50, insetInlineStart: 14, insetInlineEnd: 14,
          background: t.primary, color: '#fff', borderRadius: 16, padding: '14px 16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="arrowR" size={22} color="#fff" strokeWidth={2.4} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="latin" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.1 }}>350m</div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>اتجه يمينًا إلى شارع الأمير سلطان</div>
          </div>
        </div>

        {/* ETA pill */}
        <div style={{ position: 'absolute', bottom: 230, insetInlineStart: '50%', transform: 'translateX(-50%)',
          background: t.surface, borderRadius: 20, padding: '8px 16px', boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: t.success }} />
          <span style={{ fontSize: 12, fontWeight: 600 }}>وصول خلال</span>
          <span className="latin" style={{ fontSize: 13, fontWeight: 700, color: t.primary }}>٧ د</span>
        </div>
      </div>

      <div style={{ background: t.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: '18px 20px 26px',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <Avatar name="نورا" size={44} theme={t} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600 }}>نورا الزهراني</div>
            <div style={{ fontSize: 11.5, color: t.inkMuted }}>صيدلية الدواء · ٣ منتجات</div>
          </div>
          <button style={{ width: 40, height: 40, borderRadius: 12, background: t.bgMuted, border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="phone" size={18} color={t.primary} />
          </button>
          <button style={{ width: 40, height: 40, borderRadius: 12, background: t.bgMuted, border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="chat" size={18} color={t.primary} />
          </button>
        </div>
        <Button full theme={t} variant="primary" size="lg" data-tab="provInProgress">وصلت إلى الموقع</Button>
      </div>
    </Screen>
  );
}

function ScrProvInProgress({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t} bg={t.bgMuted}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="مهمة جارية" right={<div style={{ fontSize: 11, padding: '4px 10px',
        background: t.success + '20', color: t.success, borderRadius: 10, fontWeight: 600 }}>قيد التنفيذ</div>} />
      <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', paddingBottom: 110 }}>
        <Card theme={t} padding={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ServiceTile service={window.SanadTokens.SERVICES.fazaa} size={44} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: t.inkSoft }}>طلب #ST-4827</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>صيدلية الدواء — نورا</div>
            </div>
            <div className="latin" style={{ fontSize: 16, fontWeight: 700, color: t.primary }}>٣٥ ر.س</div>
          </div>
        </Card>

        <SectionTitle theme={t}>قائمة المنتجات</SectionTitle>
        <Card theme={t} padding={0}>
          {[
            { n: 'بنادول إكسترا', q: '٢ علبة', ck: true },
            { n: 'فيتامين C', q: '١ علبة', ck: true },
            { n: 'كمادات لاصقة', q: '١ علبة', ck: false },
          ].map((it, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14,
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6,
                background: it.ck ? t.success : 'transparent', border: `1.5px solid ${it.ck ? t.success : t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {it.ck && <SanadIcon name="check" size={14} color="#fff" strokeWidth={2.5} />}
              </div>
              <div style={{ flex: 1, fontSize: 13.5, fontWeight: it.ck ? 500 : 600,
                textDecoration: it.ck ? 'line-through' : 'none', color: it.ck ? t.inkSoft : t.ink }}>{it.n}</div>
              <div style={{ fontSize: 12, color: t.inkMuted }}>{it.q}</div>
            </div>
          ))}
        </Card>

        <SectionTitle theme={t}>إضافة فاتورة</SectionTitle>
        <Card theme={t} padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: t.accentSoft, color: t.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SanadIcon name="camera" size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>التقط صورة الفاتورة</div>
            <div style={{ fontSize: 11.5, color: t.inkMuted }}>لإثبات المبلغ وحفظه للعميل</div>
          </div>
          <Button theme={t} variant="surface" size="sm">التقاط</Button>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, insetInlineStart: 0, insetInlineEnd: 0,
        background: t.surface, padding: '14px 16px 26px', borderTop: `1px solid ${t.border}` }}>
        <Button full theme={t} variant="primary" size="lg" data-tab="provComplete">إنهاء وتسليم للعميل</Button>
      </div>
    </Screen>
  );
}

function ScrProvComplete({ theme: t }) {
  t = t || useTheme();
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <div style={{ flex: 1, padding: '40px 24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18 }}>
        <div style={{ width: 96, height: 96, borderRadius: 48, background: t.success + '1A', color: t.success,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SanadIcon name="check" size={48} strokeWidth={2.4} />
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>تم إكمال المهمة</div>
          <div style={{ fontSize: 14, color: t.inkMuted, marginTop: 6 }}>شكرًا على عملك. تم إيداع الأرباح في محفظتك.</div>
        </div>

        <Card theme={t} padding={18} style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: t.inkSoft }}>إجمالي الأرباح</div>
            <div className="mono" style={{ fontSize: 10.5, color: t.inkSoft }}>#ST-4827</div>
          </div>
          <div className="latin" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', textAlign: 'center', color: t.primary }}>+ 35.00 ﷼</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
            {[
              { l: 'الأساسي', v: '٣٠ ر.س' },
              { l: 'بقشيش', v: '٥ ر.س' },
            ].map((s, i) => (
              <div key={i} style={{ background: t.bgMuted, padding: 10, borderRadius: 12, textAlign: 'center' }}>
                <div className="latin" style={{ fontSize: 14, fontWeight: 600 }}>{s.v}</div>
                <div style={{ fontSize: 10.5, color: t.inkSoft }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card theme={t} padding={16} style={{ width: '100%' }}>
          <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 10 }}>كيف كانت تجربة العميل؟</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {[1,2,3,4,5].map(n => (
              <SanadIcon key={n} name={n <= 4 ? 'starFill' : 'star'} size={32} color={n <= 4 ? '#E0A823' : t.border} />
            ))}
          </div>
        </Card>

        <div style={{ flex: 1 }} />
      </div>
      <div style={{ padding: '14px 24px 24px', display: 'flex', gap: 10 }}>
        <Button theme={t} variant="surface" size="lg" style={{ flex: 1 }}>الذهاب للسجل</Button>
        <Button theme={t} variant="primary" size="lg" style={{ flex: 1 }} data-tab="provHome">مهمة جديدة</Button>
      </div>
    </Screen>
  );
}

Object.assign(window, { ScrProvNavigation, ScrProvInProgress, ScrProvComplete });
