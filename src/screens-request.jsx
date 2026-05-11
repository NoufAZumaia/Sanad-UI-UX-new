// Sanad — request creation flow (one screen per service)

function ScrRequestFazaa({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.fazaa;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="طلب سند فزعة" />
      <div style={{ padding: '0 20px 6px' }}>
        <StepBar theme={t} steps={4} active={1} />
        <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 8 }}>الخطوة ٢ من ٤ — تفاصيل المشوار</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>
        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>نوع المشوار</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          {[
            { l: 'صيدلية', i: 'pharmacy', sel: true },
            { l: 'سوبرماركت', i: 'cart' },
            { l: 'وثائق رسمية', i: 'doc' },
            { l: 'أخرى', i: 'errand' },
          ].map(o => (
            <div key={o.l} style={{
              background: o.sel ? s.soft : t.surface, color: o.sel ? s.color : t.ink,
              border: `1.5px solid ${o.sel ? s.color : t.border}`, borderRadius: 18, padding: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <SanadIcon name={o.i} size={20} color={o.sel ? s.color : t.inkMuted} />
              <div style={{ fontSize: 13.5, fontWeight: o.sel ? 600 : 500 }}>{o.l}</div>
            </div>
          ))}
        </div>

        <Field theme={t} label="الموقع الانطلاق" placeholder="حي الياسمين، الرياض" icon="pin" style={{ marginBottom: 12 }} />
        <Field theme={t} label="الوجهة" placeholder="صيدلية الدواء — طريق الملك فهد" icon="pin" style={{ marginBottom: 12 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          <Field theme={t} label="وقت التنفيذ" value="أقرب وقت متاح" icon="clock" readOnly />
          <Field theme={t} label="عدد الأكياس" value="٢" icon="cart" readOnly />
        </div>

        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>صور أو مستندات (اختياري)</div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <PhotoSlot theme={t} height={84} label="إيصال الصيدلية" rounded={t.radius.tile} style={{ flex: 1 }} />
          <div style={{ width: 84, height: 84, borderRadius: t.radius.tile, border: `1.5px dashed ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.inkSoft }}>
            <SanadIcon name="plus" size={22} />
          </div>
        </div>

        <Field theme={t} label="ملاحظات إضافية" placeholder="مثال: أحتاج إيصال ضريبي" />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}`,
        display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.inkSoft }}>التكلفة التقديرية</div>
          <div style={{ fontSize: 18, fontWeight: 700 }} className="latin">٣٥ <span style={{ fontSize: 12, fontWeight: 500, color: t.inkMuted }}>ر.س</span></div>
        </div>
        <Button theme={t} variant="primary" size="lg" iconRight={t.dir === 'rtl' ? 'arrowL' : 'arrowR'}
          style={{ background: s.color, flex: 1.2 }}>تأكيد الطلب</Button>
      </div>
    </Screen>
  );
}

function ScrRequestJalees({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.jalees;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="جدولة جلسة جليس" />
      <div style={{ padding: '0 20px 6px' }}>
        <StepBar theme={t} steps={3} active={1} />
        <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 8 }}>الخطوة ٢ من ٣</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>
        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>نوع التفاعل</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
          {[
            { l: 'تفاعل اجتماعي', sel: true },
            { l: 'قراءة', sel: false },
            { l: 'ألعاب ذهنية', sel: false },
            { l: 'دعم نفسي', sel: false },
          ].map(o => (
            <Tag key={o.l} theme={t} color={o.sel ? '#fff' : t.ink} soft={o.sel ? s.color : t.surface}
              style={{ border: `1px solid ${o.sel ? s.color : t.border}`, padding: '10px 16px', fontSize: 13, fontWeight: o.sel ? 600 : 500 }}>{o.l}</Tag>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          <Field theme={t} label="التاريخ" value="١٥ مايو ٢٠٢٦" icon="calendar" readOnly />
          <Field theme={t} label="الساعة" value="٤:٠٠ م" icon="clock" readOnly />
        </div>

        {/* duration slider */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500 }}>مدة الجلسة</div>
            <div style={{ fontSize: 13, fontWeight: 600 }} className="latin">١ ساعة</div>
          </div>
          <div style={{ height: 6, background: t.bgMuted, borderRadius: 3, position: 'relative' }}>
            <div style={{ position: 'absolute', insetInlineStart: 0, top: 0, height: 6, width: '40%', background: s.color, borderRadius: 3 }} />
            <div style={{ position: 'absolute', insetInlineStart: 'calc(40% - 10px)', top: -7, width: 20, height: 20, borderRadius: 10, background: '#fff', border: `2px solid ${s.color}`, boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: t.inkSoft }}>
            <span>٣٠ د</span><span>١ س</span><span>٢ س</span><span>٣ س</span>
          </div>
        </div>

        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>المكان</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          {[
            { l: 'في المنزل', i: 'home', sel: true },
            { l: 'افتراضي', i: 'video', sel: false },
          ].map(o => (
            <div key={o.l} style={{
              background: o.sel ? s.soft : t.surface, color: o.sel ? s.color : t.ink,
              border: `1.5px solid ${o.sel ? s.color : t.border}`, borderRadius: 18, padding: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <SanadIcon name={o.i} size={20} color={o.sel ? s.color : t.inkMuted} />
              <div style={{ fontSize: 13.5, fontWeight: o.sel ? 600 : 500 }}>{o.l}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>اختر مقدّم الخدمة</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { n: 'سعاد محمد', s: 'مرافِقة معتمدة', y: '٧ سنوات خبرة', r: '٤٫٩', sel: true },
            { n: 'هديل العتيبي', s: 'أخصائية اجتماعية', y: '٤ سنوات', r: '٤٫٧', sel: false },
          ].map(p => (
            <div key={p.n} style={{
              border: `1.5px solid ${p.sel ? s.color : t.border}`, borderRadius: 18, padding: 14,
              display: 'flex', alignItems: 'center', gap: 12, background: p.sel ? s.soft + '40' : t.surface,
            }}>
              <Avatar name={p.n} size={44} color={s.color} theme={t} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{p.n}</div>
                <div style={{ fontSize: 11.5, color: t.inkMuted }}>{p.s} · {p.y}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <SanadIcon name="starFill" size={14} color="#E0A823" />
                <span className="latin" style={{ fontSize: 12.5, fontWeight: 600 }}>{p.r}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}`,
        display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.inkSoft }}>التكلفة التقديرية</div>
          <div style={{ fontSize: 18, fontWeight: 700 }} className="latin">٦٠ <span style={{ fontSize: 12, fontWeight: 500, color: t.inkMuted }}>ر.س</span></div>
        </div>
        <Button theme={t} variant="primary" size="lg" style={{ background: s.color, flex: 1.2 }}>تأكيد الجدولة</Button>
      </div>
    </Screen>
  );
}

function ScrRequestAcademic({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.academic;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="تقديم على البرنامج" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>
        <Card theme={t} padding={16} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <ServiceTile service={s} size={48} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>برنامج محاسبة تطبيقي</div>
              <div style={{ fontSize: 12, color: t.inkMuted }}>جامعة الملك سعود · ١٢٠ ساعة</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <Tag theme={t} color={s.color} soft={s.soft} style={{ fontSize: 10.5 }}>٠١/٠٦ — ٣١/٠٨</Tag>
                <Tag theme={t} color={t.ink} soft={t.surface2} style={{ fontSize: 10.5, border: `1px solid ${t.border}` }}>صيفي</Tag>
              </div>
            </div>
          </div>
        </Card>

        <SectionTitle theme={t}>المتطلبات</SectionTitle>
        <Card theme={t} padding={0} style={{ overflow: 'hidden', marginBottom: 16 }}>
          {[
            'مستوى دراسي لا يقل عن ٣',
            'موافقة الجامعة',
            'إجادة استخدام الحاسب',
          ].map((r, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14,
              borderBottom: i < a.length - 1 ? `1px solid ${t.border}` : 'none' }}>
              <SanadIcon name="checkCircle" size={18} color={s.color} />
              <div style={{ fontSize: 13.5 }}>{r}</div>
            </div>
          ))}
        </Card>

        <SectionTitle theme={t}>بياناتك للتقديم</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <Field theme={t} label="الجامعة" value="جامعة الملك سعود" readOnly />
          <Field theme={t} label="التخصص" value="محاسبة" readOnly />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Field theme={t} label="المعدل" value="٤٫٢ / ٥" readOnly />
            <Field theme={t} label="المستوى" value="السابع" readOnly />
          </div>
          <div style={{ background: t.surface, border: `1.5px dashed ${t.border}`, borderRadius: t.radius.field, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: s.soft, color: s.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SanadIcon name="paperclip" size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>إرفاق السجل الأكاديمي</div>
              <div style={{ fontSize: 11.5, color: t.inkSoft }}>PDF أو صورة — حتى ٥ م.ب</div>
            </div>
            <Button theme={t} variant="surface" size="sm">رفع</Button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}` }}>
        <Button full theme={t} variant="primary" size="lg" style={{ background: s.color }}>تقديم الطلب</Button>
      </div>
    </Screen>
  );
}

function ScrRequestMurafaqa({ theme: t }) {
  t = t || useTheme();
  const s = window.SanadTokens.SERVICES.murafaqa;
  return (
    <Screen theme={t}>
      <StatusBar theme={t} />
      <TopBar theme={t} title="حجز مرافقة" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 110px' }}>
        <div style={{ fontSize: 13, color: t.inkMuted, fontWeight: 500, marginBottom: 8 }}>نوع المرافقة</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 18 }}>
          {[
            { l: 'طبية', i: 'hospital', sel: true },
            { l: 'حكومية', i: 'gov', sel: false },
            { l: 'اجتماعية', i: 'walk', sel: false },
          ].map(o => (
            <div key={o.l} style={{
              background: o.sel ? s.soft : t.surface, color: o.sel ? s.color : t.ink,
              border: `1.5px solid ${o.sel ? s.color : t.border}`, borderRadius: 18, padding: '14px 8px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            }}>
              <SanadIcon name={o.i} size={22} color={o.sel ? s.color : t.inkMuted} />
              <div style={{ fontSize: 12.5, fontWeight: o.sel ? 600 : 500 }}>{o.l}</div>
            </div>
          ))}
        </div>

        <Field theme={t} label="الموقع" value="مستشفى الملك فيصل التخصصي" icon="hospital" readOnly style={{ marginBottom: 12 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
          <Field theme={t} label="التاريخ" value="١٢ مايو ٢٠٢٦" icon="calendar" readOnly />
          <Field theme={t} label="الوقت" value="٩:٣٠ ص" icon="clock" readOnly />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          <Field theme={t} label="عدد المرافقين" value="١" readOnly />
          <Field theme={t} label="مدّة متوقّعة" value="٣ ساعات" icon="clock" readOnly />
        </div>

        <Card theme={t} padding={14} style={{ marginBottom: 14, background: s.soft, borderColor: s.color + '40' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="محمد ع" size={44} color={s.color} theme={t} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>محمد عبدالله</div>
              <div style={{ fontSize: 11.5, color: t.inkMuted }}>مرافق طبي معتمد · رقم السيارة ١٢٣٤</div>
            </div>
            <SanadIcon name="checkCircle" size={20} color={s.color} />
          </div>
        </Card>

        <Field theme={t} label="ملاحظات للمرافق" placeholder="مثال: المريضة على كرسي متحرك" />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 26px', background: t.surface, borderTop: `1px solid ${t.border}`,
        display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.inkSoft }}>التكلفة التقديرية</div>
          <div style={{ fontSize: 18, fontWeight: 700 }} className="latin">٧٠ <span style={{ fontSize: 12, fontWeight: 500, color: t.inkMuted }}>ر.س</span></div>
        </div>
        <Button theme={t} variant="primary" size="lg" style={{ background: s.color, flex: 1.2 }}>تأكيد الحجز</Button>
      </div>
    </Screen>
  );
}

window.ScrRequestFazaa = ScrRequestFazaa;
window.ScrRequestJalees = ScrRequestJalees;
window.ScrRequestAcademic = ScrRequestAcademic;
window.ScrRequestMurafaqa = ScrRequestMurafaqa;
