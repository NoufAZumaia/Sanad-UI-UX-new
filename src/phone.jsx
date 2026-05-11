// Phone — wraps a screen in a phone-shaped frame.
// Two flavors: Bezel (full iPhone with status/home indicator) and Plain (just the rounded screen rect, used inside iOS frame elsewhere).

const PHONE_W = 390;
const PHONE_H = 844;

function PhoneBezel({ children, theme: t, label, dark, scale = 1, style }) {
  t = t || useTheme();
  return (
    <div style={{
      width: PHONE_W * scale,
      height: PHONE_H * scale,
      ...style,
    }}>
      <div style={{
        width: PHONE_W, height: PHONE_H,
        transform: `scale(${scale})`, transformOrigin: 'top right',
        borderRadius: 52, overflow: 'hidden', position: 'relative',
        background: t.bg,
        boxShadow: dark
          ? '0 30px 60px rgba(0,0,0,0.45), inset 0 0 0 8px #0a0a0a, 0 0 0 1.5px #1a1a1a'
          : '0 30px 60px rgba(15,20,20,0.18), inset 0 0 0 8px #0e1414, 0 0 0 1.5px #1c2222',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 34, borderRadius: 22, background: '#000', zIndex: 50,
        }} />
        {/* Screen content */}
        <div style={{ position: 'absolute', inset: 8, borderRadius: 44, overflow: 'hidden', background: t.bg }}>
          {children}
        </div>
        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          width: 134, height: 5, borderRadius: 999, background: t.dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.25)', zIndex: 60,
        }} />
      </div>
    </div>
  );
}

window.PhoneBezel = PhoneBezel;
window.PHONE_W = PHONE_W;
window.PHONE_H = PHONE_H;
