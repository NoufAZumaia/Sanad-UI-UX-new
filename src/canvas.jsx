// Sanad — Canvas (all screens laid out, multi-section)

const SCREENS = [
  // Brand & Foundations
  { sec: 'foundations', id: 'tokens', label: '1. Design tokens', w: 1180, h: 720, render: t => <TokensSheet theme={t} /> },
  { sec: 'foundations', id: 'components', label: '2. Components', w: 1180, h: 880, render: t => <ComponentsSheet theme={t} /> },

  // Onboarding & Auth
  { sec: 'auth', id: 'splash', label: 'Splash', render: t => <ScrSplash theme={t} /> },
  { sec: 'auth', id: 'on1', label: 'Onboarding · 1', render: t => <ScrOnboard1 theme={t} /> },
  { sec: 'auth', id: 'on2', label: 'Onboarding · 2', render: t => <ScrOnboard2 theme={t} /> },
  { sec: 'auth', id: 'on3', label: 'Onboarding · 3', render: t => <ScrOnboard3 theme={t} /> },
  { sec: 'auth', id: 'auth-phone', label: 'Auth · Phone', render: t => <ScrAuthPhone theme={t} /> },
  { sec: 'auth', id: 'auth-otp', label: 'Auth · OTP', render: t => <ScrAuthOTP theme={t} /> },
  { sec: 'auth', id: 'profile-setup', label: 'Profile setup', render: t => <ScrProfileSetup theme={t} /> },

  // Home variations
  { sec: 'home', id: 'home-a', label: 'Home · Hero', render: t => <ScrHomeA theme={t} /> },
  { sec: 'home', id: 'home-b', label: 'Home · Minimal', render: t => <ScrHomeB theme={t} /> },
  { sec: 'home', id: 'home-c', label: 'Home · Dashboard', render: t => <ScrHomeC theme={t} /> },
  { sec: 'home', id: 'services-all', label: 'All services', render: t => <ScrServicesAll theme={t} /> },
  { sec: 'home', id: 'notifications', label: 'Notifications', render: t => <ScrNotifications theme={t} /> },

  // Services
  { sec: 'services', id: 'srv-fazaa', label: 'سند فزعة', render: t => <ScrServiceFazaa theme={t} /> },
  { sec: 'services', id: 'srv-jalees', label: 'سند جليس', render: t => <ScrServiceJalees theme={t} /> },
  { sec: 'services', id: 'srv-academic', label: 'سند أكاديمي', render: t => <ScrServiceAcademic theme={t} /> },
  { sec: 'services', id: 'srv-murafaqa', label: 'سند مرافقة', render: t => <ScrServiceMurafaqa theme={t} /> },

  // Request flows
  { sec: 'request', id: 'req-fazaa', label: 'Request · Fazaa', render: t => <ScrRequestFazaa theme={t} /> },
  { sec: 'request', id: 'req-jalees', label: 'Request · Jalees', render: t => <ScrRequestJalees theme={t} /> },
  { sec: 'request', id: 'req-academic', label: 'Request · Academic', render: t => <ScrRequestAcademic theme={t} /> },
  { sec: 'request', id: 'req-murafaqa', label: 'Request · Murafaqa', render: t => <ScrRequestMurafaqa theme={t} /> },

  // Tracking & comms
  { sec: 'tracking', id: 'track-fazaa', label: 'Tracking · Fazaa', render: t => <ScrTrackingFazaa theme={t} /> },
  { sec: 'tracking', id: 'track-murafaqa', label: 'Tracking · Murafaqa', render: t => <ScrTrackingMurafaqa theme={t} /> },
  { sec: 'tracking', id: 'chat', label: 'Chat', render: t => <ScrChat theme={t} /> },
  { sec: 'tracking', id: 'call', label: 'Voice call', render: t => <ScrCall theme={t} /> },

  // Account
  { sec: 'account', id: 'profile-a', label: 'Profile · Hero', render: t => <ScrProfileA theme={t} /> },
  { sec: 'account', id: 'profile-b', label: 'Profile · Stats', render: t => <ScrProfileB theme={t} /> },
  { sec: 'account', id: 'profile-c', label: 'Profile · Elder', render: t => <ScrProfileC theme={t} /> },
  { sec: 'account', id: 'settings', label: 'Settings', render: t => <ScrSettings theme={t} /> },
  { sec: 'account', id: 'rate', label: 'Rate service', render: t => <ScrRateService theme={t} /> },
  { sec: 'account', id: 'reviews', label: 'My reviews', render: t => <ScrReviewsList theme={t} /> },

  // States
  { sec: 'states', id: 'success', label: 'Success', render: t => <ScrSuccess theme={t} /> },
  { sec: 'states', id: 'error', label: 'Error', render: t => <ScrError theme={t} /> },
  { sec: 'states', id: 'empty', label: 'Empty', render: t => <ScrEmpty theme={t} /> },
  { sec: 'states', id: 'loading', label: 'Searching', render: t => <ScrLoading theme={t} /> },

  // Provider
  { sec: 'provider', id: 'prov-dash', label: 'Provider · Dashboard', render: t => <ScrProviderDash theme={t} /> },
  { sec: 'provider', id: 'prov-task', label: 'Provider · Task', render: t => <ScrProviderTask theme={t} /> },
];

const SECTIONS = [
  { id: 'foundations', title: '01 — Foundations', sub: 'Tokens & component library' },
  { id: 'auth', title: '02 — Onboarding & Auth', sub: 'Splash, intro, login & profile setup' },
  { id: 'home', title: '03 — Home & Discovery', sub: '3 home variants + service browser + notifications' },
  { id: 'services', title: '04 — Service Detail', sub: 'Each of the 4 sanad services' },
  { id: 'request', title: '05 — Request Creation', sub: 'Service-specific request flows' },
  { id: 'tracking', title: '06 — Tracking & Comms', sub: 'Live tracking, chat, voice call' },
  { id: 'account', title: '07 — Account & Reviews', sub: '3 profile variants, settings, ratings' },
  { id: 'states', title: '08 — System States', sub: 'Success, error, empty, loading' },
  { id: 'provider', title: '09 — Provider Side', sub: 'Optional provider-side concept' },
];

// ── Foundation sheets ────────────────────────────────────────
function TokensSheet({ theme: t }) {
  const palettes = window.SanadTokens.PALETTES;
  return (
    <div dir="rtl" style={{ width: '100%', height: '100%', background: t.surface, padding: 36, color: t.ink,
      fontFamily: t.font, overflow: 'hidden' }}>
      <div style={{ fontSize: 12, color: t.inkSoft, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }} className="latin">DESIGN TOKENS</div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>أساس نظام التصميم</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 28 }}>
        {/* Palettes */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Color palettes</div>
          {Object.entries(palettes).map(([k, p]) => (
            <div key={k} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: t.inkSoft, marginBottom: 6 }} className="latin">{k} · {p.name}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {[
                  ['primary', p.primary], ['primaryDeep', p.primaryDeep], ['primarySoft', p.primarySoft],
                  ['accent', p.accent], ['ink', p.ink], ['surface', p.surface], ['border', p.border],
                ].map(([n, c]) => (
                  <div key={n} style={{ flex: 1 }}>
                    <div style={{ height: 56, borderRadius: 12, background: c, border: `1px solid ${p.border}` }} />
                    <div className="latin" style={{ fontSize: 9, color: t.inkSoft, marginTop: 4, textAlign: 'center' }}>{c.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Type */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Typography (IBM Plex Sans Arabic)</div>
          {[
            { l: 'Display 32', s: 32, w: 700 },
            { l: 'Title 24', s: 24, w: 700 },
            { l: 'H1 20', s: 20, w: 600 },
            { l: 'H2 16', s: 16, w: 600 },
            { l: 'Body 14', s: 14, w: 400 },
            { l: 'Caption 12', s: 12, w: 500 },
            { l: 'Mono 11', s: 11, w: 400, mono: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '6px 0',
              borderBottom: `1px dashed ${t.border}` }}>
              <div className="latin" style={{ width: 70, fontSize: 10, color: t.inkSoft }}>{r.l}</div>
              <div className={r.mono ? 'mono' : ''} style={{ fontSize: r.s, fontWeight: r.w, lineHeight: 1.2 }}>سَنَدُك يبدأ هنا</div>
            </div>
          ))}
        </div>

        {/* Spacing & radii */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Radii & spacing</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'flex-end' }}>
            {[
              { l: 'sm 8', r: 8 }, { l: 'md 12', r: 12 }, { l: 'lg 16', r: 16 }, { l: 'xl 22', r: 22 }, { l: '2xl 28', r: 28 },
            ].map(r => (
              <div key={r.l} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ height: 56, borderRadius: r.r, background: t.primarySoft, border: `1px solid ${t.primary}40` }} />
                <div className="latin" style={{ fontSize: 9, color: t.inkSoft, marginTop: 4 }}>{r.l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Spacing scale</div>
          {[4, 8, 12, 16, 20, 24, 32].map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div className="latin" style={{ width: 28, fontSize: 10, color: t.inkSoft, textAlign: 'right' }}>{n}</div>
              <div style={{ height: 8, width: n * 6, background: t.ink, opacity: 0.7, borderRadius: 2 }} />
            </div>
          ))}
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, margin: '20px 0 8px' }}>Elevation</div>
          {[
            { l: 'flat', sh: 'none' },
            { l: 'card', sh: '0 1px 0 rgba(0,0,0,0.02)' },
            { l: 'elevated', sh: '0 8px 28px rgba(15,20,20,0.08)' },
            { l: 'sheet', sh: '0 -8px 24px rgba(15,20,20,0.10)' },
          ].map(e => (
            <div key={e.l} style={{ height: 36, marginBottom: 10, background: t.surface, borderRadius: 10,
              border: `1px solid ${t.border}`, boxShadow: e.sh, display: 'flex', alignItems: 'center', padding: '0 14px',
              fontSize: 11.5, color: t.inkMuted }} className="latin">{e.l}</div>
          ))}
        </div>
      </div>

      {/* Service brand row */}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Service brand colors</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {Object.values(window.SanadTokens.SERVICES).map(s => (
            <div key={s.key} style={{ background: s.soft, padding: 16, borderRadius: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
              <ServiceTile service={s} size={48} theme={t} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: s.color }}>{s.name}</div>
                <div className="latin" style={{ fontSize: 10, color: t.inkSoft, marginTop: 2 }}>{s.color.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComponentsSheet({ theme: t }) {
  return (
    <div dir="rtl" style={{ width: '100%', height: '100%', background: t.surface, padding: 36, color: t.ink,
      fontFamily: t.font, overflow: 'hidden' }}>
      <div style={{ fontSize: 12, color: t.inkSoft, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }} className="latin">COMPONENT LIBRARY</div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>المكونات الأساسية</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Buttons</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Button theme={t} variant="primary" size="lg" full>زر أساسي</Button>
            <Button theme={t} variant="secondary" size="md" full>زر ثانوي</Button>
            <Button theme={t} variant="surface" size="md" full icon="phone">سطح + أيقونة</Button>
            <Button theme={t} variant="soft" size="md" full>زر هادئ</Button>
            <Button theme={t} variant="ghost" size="sm">زر شفاف</Button>
            <Button theme={t} variant="dark" size="md" full>زر داكن</Button>
            <Button theme={t} variant="danger" size="md" full>زر تحذير</Button>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Form fields</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Field theme={t} label="حقل عادي" placeholder="اكتب هنا…" />
            <Field theme={t} label="حقل بأيقونة" placeholder="رقم الجوال" icon="phone" />
            <Field theme={t} label="حقل بخطأ" placeholder="—" error="هذا الحقل مطلوب" />
            <div>
              <div style={{ fontSize: 13, color: t.inkMuted, marginBottom: 8, fontWeight: 500 }}>شرائح اختيار</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['الكل', 'مشاوير', 'مرافقة', 'تدريب'].map((c, i) => (
                  <Tag key={c} theme={t} color={i === 0 ? '#fff' : t.ink} soft={i === 0 ? t.primary : t.surface}
                    style={{ border: `1px solid ${i === 0 ? t.primary : t.border}`, padding: '7px 12px' }}>{c}</Tag>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Toggle on theme={t} />
              <Toggle on={false} theme={t} />
              <span style={{ fontSize: 12, color: t.inkSoft }}>Toggles</span>
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Tags & badges</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            <Tag theme={t}>افتراضي</Tag>
            <Tag theme={t} color={t.success} soft={t.success + '18'} icon="check">مكتمل</Tag>
            <Tag theme={t} color={t.warn} soft={t.warn + '18'}>قيد المعالجة</Tag>
            <Tag theme={t} color={t.danger} soft={t.danger + '18'} icon="warn">ملغى</Tag>
            <Tag theme={t} color={t.info} soft={t.info + '18'} icon="shieldCheck">موثّق</Tag>
            <Tag theme={t} color="#E0A823" soft="#FFF7E0" icon="trophy">عضو ذهبي</Tag>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Avatars & stars</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Avatar name="أحمد م" size={32} theme={t} />
            <Avatar name="عبدالله ف" size={40} theme={t} />
            <Avatar name="سعاد م" size={48} color={t.accent} theme={t} />
            <Avatar name="نوف س" size={56} color="#7A1E55" theme={t} />
          </div>
          <Stars value={4} size={18} theme={t} />

          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, margin: '18px 0 12px' }}>Service tiles</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {Object.values(window.SanadTokens.SERVICES).map(s => (
              <ServiceTile key={s.key} service={s} size={48} theme={t} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Cards</div>
          <Card theme={t} padding={16} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <ServiceTile service={window.SanadTokens.SERVICES.fazaa} size={44} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>سند فزعة</div>
                <div style={{ fontSize: 11.5, color: t.inkMuted }}>مشاوير ومهام يومية</div>
              </div>
              <Tag theme={t}>متاح</Tag>
            </div>
          </Card>
          <Card theme={t} padding={16} elevated>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: t.inkSoft }}>طلب جارٍ</span>
              <span className="mono" style={{ fontSize: 11, color: t.inkSoft }}>#SF-2841</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>صيدلية الدواء</div>
            <div style={{ fontSize: 11.5, color: t.inkMuted }}>المندوب أحمد · يصل خلال ١٢ دقيقة</div>
          </Card>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, marginBottom: 12 }}>Progress</div>
          <div style={{ marginBottom: 14 }}><StepBar theme={t} steps={4} active={1} /></div>
          <div style={{ marginBottom: 14 }}><ProgressDots theme={t} count={3} active={1} /></div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.inkMuted, margin: '14px 0 12px' }}>Tab bar</div>
          <div style={{ position: 'relative', height: 80, background: t.bg, border: `1px solid ${t.border}`, borderRadius: 12, overflow: 'hidden' }}>
            <TabBar theme={t} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Canvas wrapper ───────────────────────────────────────────
function Canvas({ theme }) {
  return (
    <DCCanvas
      title="Sanad — App redesign"
      subtitle="٤٠ شاشة عبر ٤ خدمات · RTL · IBM Plex Sans Arabic"
      defaultZoom={0.4}
    >
      {SECTIONS.map(sec => (
        <DCSection key={sec.id} id={sec.id} title={sec.title} subtitle={sec.sub}>
          {SCREENS.filter(s => s.sec === sec.id).map(s => {
            const isFoundation = sec.id === 'foundations';
            const w = s.w || 390;
            const h = s.h || 844;
            return (
              <DCArtboard key={s.id} id={s.id} label={s.label} width={w} height={h}>
                {isFoundation
                  ? <div style={{ width: '100%', height: '100%' }}>{s.render(theme)}</div>
                  : <PhoneBezel theme={theme}>{s.render(theme)}</PhoneBezel>}
              </DCArtboard>
            );
          })}
        </DCSection>
      ))}
    </DCCanvas>
  );
}

window.SanadCanvas = Canvas;
