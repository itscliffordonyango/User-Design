import React, { useState } from "react";

// ChapaPay brand constants
const C = {
  green: "#00A651",
  greenDark: "#007A3D",
  greenLight: "#E6F7EE",
  navy: "#0A1628",
  navyMid: "#162340",
  gold: "#F5A623",
  error: "#D63B3B",
  errorLight: "#FDEAEA",
  warning: "#F5A623",
  warningLight: "#FEF5E4",
  white: "#FFFFFF",
  gray50: "#F4F6FA",
  gray100: "#E8EDF5",
  gray200: "#C9D3E0",
  gray300: "#9AAAB8",
  gray400: "#6B7B8E",
  font: "'Plus Jakarta Sans', sans-serif",
};

const Phone = ({ children, label, screenSize = "360" }: { children: React.ReactNode; label: string; screenSize?: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div style={{ color: C.gray400, fontFamily: C.font, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
      {label}
    </div>
    <div style={{ fontSize: 10, color: C.gray300, fontFamily: C.font, marginTop: -8 }}>{screenSize}px width</div>
    <div
      className="relative overflow-hidden"
      style={{
        width: 280,
        height: 580,
        borderRadius: 36,
        border: "3px solid " + C.navy,
        background: C.gray50,
        boxShadow: "0 32px 64px rgba(10,22,40,0.18), 0 0 0 6px rgba(10,22,40,0.06)",
        position: "relative",
      }}
    >
      {/* Notch */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 20, background: C.navy, borderRadius: "0 0 14px 14px", zIndex: 10 }} />
      {/* Status bar */}
      <div style={{ height: 36, background: C.navy, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 16px 6px", zIndex: 5 }}>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 9, fontFamily: C.font, fontWeight: 600 }}>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <div style={{ width: 14, height: 7, border: "1.5px solid rgba(255,255,255,0.6)", borderRadius: 2, position: "relative" as const }}>
            <div style={{ width: "75%", height: "100%", background: "#00A651", borderRadius: 1 }} />
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 8, fontFamily: C.font }}>📶</div>
        </div>
      </div>
      {children}
    </div>
  </div>
);

// Main Login HiFi Screen
const HiFiLogin = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <Phone label="Login — Default State">
      <div style={{ background: C.white, height: "calc(100% - 36px)", display: "flex", flexDirection: "column", overflowY: "auto" as const }}>
        {/* Navy header with logo */}
        <div style={{ background: C.navy, padding: "20px 24px 28px", position: "relative" as const }}>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 24px rgba(0,166,81,0.4)"
            }}>
              <span style={{ color: C.white, fontWeight: 800, fontSize: 18, fontFamily: C.font }}>CP</span>
            </div>
            <div style={{ textAlign: "center" as const }}>
              <div style={{ color: C.white, fontWeight: 800, fontSize: 18, fontFamily: C.font }}>ChapaPay</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, fontFamily: C.font, marginTop: 2 }}>Send · Pay · Save · Grow</div>
            </div>
          </div>
          {/* Wave curve */}
          <svg viewBox="0 0 280 32" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
            <path d="M0,32 Q140,0 280,32 L280,32 L0,32 Z" fill={C.white} />
          </svg>
        </div>

        {/* Form area */}
        <div style={{ padding: "8px 24px 24px", flex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: C.navy, fontFamily: C.font }}>Welcome Back!</div>
            <div style={{ fontSize: 12, color: C.gray400, fontFamily: C.font, marginTop: 2 }}>Login to your ChapaPay account</div>
          </div>

          {/* Phone input */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.navy, fontFamily: C.font, marginBottom: 6 }}>
              Phone Number
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{
                width: 60, height: 52, background: C.gray50, border: "2px solid " + C.gray200,
                borderRadius: 12, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center",
                flexShrink: 0, cursor: "pointer"
              }}>
                <span style={{ fontSize: 8, color: C.gray400, fontFamily: C.font }}>🇰🇪</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.navy, fontFamily: C.font }}>+254</span>
              </div>
              <div style={{
                flex: 1, height: 52, background: C.gray50, border: "2px solid " + C.gray200,
                borderRadius: 12, display: "flex", alignItems: "center", padding: "0 14px",
                gap: 8
              }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill={C.gray300} /></svg>
                <span style={{ fontSize: 12, color: C.gray300, fontFamily: C.font }}>07XX XXX XXX</span>
              </div>
            </div>
            <div style={{ fontSize: 10, color: C.gray400, fontFamily: C.font, marginTop: 4 }}>Example: 0712 345 678</div>
          </div>

          {/* Password input */}
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.navy, fontFamily: C.font, marginBottom: 6 }}>
              Password / PIN
            </label>
            <div style={{
              height: 52, background: C.gray50, border: "2px solid " + C.gray200,
              borderRadius: 12, display: "flex", alignItems: "center", padding: "0 14px",
              gap: 8, justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" stroke={C.gray300} strokeWidth="2" /><path d="M7 11V7a5 5 0 0110 0v4" stroke={C.gray300} strokeWidth="2" /></svg>
                <span style={{ fontSize: 12, color: C.gray300, fontFamily: C.font }}>
                  {showPass ? "mypassword" : "••••••••••"}
                </span>
              </div>
              <button
                onClick={() => setShowPass(!showPass)}
                style={{ width: 36, height: 36, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8 }}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass
                  ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" stroke={C.navy} strokeWidth="2" strokeLinecap="round" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke={C.navy} strokeWidth="2" strokeLinecap="round" /><line x1="1" y1="1" x2="23" y2="23" stroke={C.navy} strokeWidth="2" strokeLinecap="round" /></svg>
                  : <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.navy} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.navy} strokeWidth="2" /></svg>
                }
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div style={{ textAlign: "right" as const, marginBottom: 20 }}>
            <button style={{ background: "none", border: "none", color: C.green, fontSize: 12, fontWeight: 600, fontFamily: C.font, cursor: "pointer", padding: "8px 0" }}>
              Forgot Password?
            </button>
          </div>

          {/* Login button */}
          <button style={{
            width: "100%", height: 56,
            background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
            border: "none", borderRadius: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: "0 8px 24px rgba(0,166,81,0.35)",
          }}>
            <span style={{ color: C.white, fontSize: 15, fontWeight: 700, fontFamily: C.font }}>Log In</span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "16px 0" }}>
            <div style={{ flex: 1, height: 1, background: C.gray200 }} />
            <span style={{ fontSize: 11, color: C.gray300, fontFamily: C.font }}>New to ChapaPay?</span>
            <div style={{ flex: 1, height: 1, background: C.gray200 }} />
          </div>

          <button style={{
            width: "100%", height: 52, background: C.white, border: "2px solid " + C.navy,
            borderRadius: 16, cursor: "pointer", color: C.navy, fontSize: 14, fontWeight: 700, fontFamily: C.font
          }}>
            Create Account
          </button>
        </div>
      </div>
    </Phone>
  );
};

// Error state screen
const HiFiError = () => (
  <Phone label="Login — Error State">
    <div style={{ background: C.white, height: "calc(100% - 36px)", display: "flex", flexDirection: "column", overflowY: "auto" as const }}>
      <div style={{ background: C.navy, padding: "20px 24px 28px", position: "relative" as const }}>
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.white, fontWeight: 800, fontSize: 18, fontFamily: C.font }}>CP</span>
          </div>
          <div style={{ color: C.white, fontWeight: 800, fontSize: 18, fontFamily: C.font }}>ChapaPay</div>
        </div>
        <svg viewBox="0 0 280 32" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
          <path d="M0,32 Q140,0 280,32 L280,32 L0,32 Z" fill={C.white} />
        </svg>
      </div>

      <div style={{ padding: "8px 24px 24px" }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: C.navy, fontFamily: C.font }}>Welcome Back!</div>
        </div>

        {/* Network error banner */}
        <div style={{ background: C.errorLight, border: "1.5px solid " + C.error, borderRadius: 10, padding: "10px 12px", marginBottom: 14, display: "flex", gap: 8, alignItems: "flex-start" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
          <span style={{ fontSize: 11, color: C.error, fontFamily: C.font, fontWeight: 500 }}>No internet. Check your connection and try again.</span>
        </div>

        {/* Phone field - error */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.navy, fontFamily: C.font, marginBottom: 6 }}>Phone Number</label>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 60, height: 52, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 12, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 8, fontFamily: C.font }}>🇰🇪</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.navy, fontFamily: C.font }}>+254</span>
            </div>
            <div style={{ flex: 1, height: 52, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 14px" }}>
              <span style={{ fontSize: 12, color: C.navy, fontFamily: C.font }}>0790 000 0</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
            <span style={{ fontSize: 11, color: C.error, fontFamily: C.font }}>Invalid number. Use format 07XX XXX XXX</span>
          </div>
        </div>

        {/* Password field - error */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: C.navy, fontFamily: C.font, marginBottom: 6 }}>Password / PIN</label>
          <div style={{ height: 52, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 14px", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: C.navy, fontFamily: C.font }}>••••••••</span>
            <button style={{ width: 36, height: 36, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.navy} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.navy} strokeWidth="2" /></svg>
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
            <span style={{ fontSize: 11, color: C.error, fontFamily: C.font }}>Incorrect password. 2 attempts left.</span>
          </div>
        </div>

        <div style={{ textAlign: "right" as const, marginBottom: 16 }}>
          <button style={{ background: "none", border: "none", color: C.green, fontSize: 12, fontWeight: 600, fontFamily: C.font, cursor: "pointer" }}>Forgot Password?</button>
        </div>

        <button style={{
          width: "100%", height: 56,
          background: C.gray100, border: "2px solid " + C.gray200,
          borderRadius: 16, color: C.gray300, fontSize: 15, fontWeight: 700, fontFamily: C.font,
          cursor: "not-allowed"
        }}>
          Log In
        </button>

        <div style={{ background: C.warningLight, border: "1.5px solid " + C.warning, borderRadius: 10, padding: "10px 12px", marginTop: 12 }}>
          <span style={{ fontSize: 10, color: "#7A5200", fontFamily: C.font }}>⚠️ Account will be locked after 3 failed attempts. Reset password to avoid lockout.</span>
        </div>
      </div>
    </div>
  </Phone>
);

// OTP Screen
const HiFiOTP = () => {
  const [otp, setOtp] = useState(["5", "3", "", "", "", ""]);
  return (
    <Phone label="OTP Verification">
      <div style={{ background: C.white, height: "calc(100% - 36px)", display: "flex", flexDirection: "column", overflowY: "auto" as const }}>
        <div style={{ background: C.navy, padding: "14px 20px 28px", position: "relative" as const }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: C.font }}>Back</span>
          </button>
          <div style={{ marginTop: 10, color: C.white, fontWeight: 800, fontSize: 17, fontFamily: C.font }}>Verify Your Phone</div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontFamily: C.font, marginTop: 4 }}>
            Code sent to +254 712 345 678
          </div>
          <svg viewBox="0 0 280 32" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
            <path d="M0,32 Q140,0 280,32 L280,32 L0,32 Z" fill={C.white} />
          </svg>
        </div>

        <div style={{ padding: "16px 24px 24px" }}>
          {/* Step indicator */}
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 20 }}>
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div style={{
                  width: i === 2 ? 32 : 24, height: i === 2 ? 32 : 24, borderRadius: 16,
                  background: i < 2 ? C.green : i === 2 ? C.navy : C.gray100,
                  border: "2px solid " + (i <= 2 ? (i < 2 ? C.green : C.navy) : C.gray200),
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ color: i < 2 ? C.white : i === 2 ? C.white : C.gray300, fontSize: i === 2 ? 12 : 10, fontWeight: 700, fontFamily: C.font }}>
                    {i < 2 ? "✓" : i}
                  </span>
                </div>
                {i < 3 && <div style={{ flex: 1, height: 2, background: i < 2 ? C.green : C.gray200, borderRadius: 1 }} />}
              </React.Fragment>
            ))}
          </div>

          <div style={{ fontSize: 14, fontWeight: 600, color: C.navy, fontFamily: C.font, marginBottom: 6 }}>Enter 6-digit OTP</div>
          <div style={{ fontSize: 12, color: C.gray400, fontFamily: C.font, marginBottom: 20 }}>
            The code expires in <span style={{ color: C.error, fontWeight: 600 }}>04:32</span>
          </div>

          {/* OTP inputs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {otp.map((v, i) => (
              <div key={i} style={{
                width: 38, height: 52, background: v ? C.greenLight : C.gray50,
                border: "2px solid " + (v ? C.green : i === 2 ? C.navy : C.gray200),
                borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.navy, fontFamily: C.font }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" as const, marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: C.gray400, fontFamily: C.font }}>Didn't receive code?</div>
            <button style={{ background: "none", border: "none", color: C.green, fontSize: 13, fontWeight: 700, fontFamily: C.font, cursor: "pointer", marginTop: 4 }}>
              Resend OTP
            </button>
          </div>

          <button style={{
            width: "100%", height: 56,
            background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
            border: "none", borderRadius: 16, cursor: "pointer",
            color: C.white, fontSize: 15, fontWeight: 700, fontFamily: C.font,
            boxShadow: "0 8px 24px rgba(0,166,81,0.35)",
          }}>
            Verify Code
          </button>
        </div>
      </div>
    </Phone>
  );
};

// Password Reset Success
const HiFiSuccess = () => (
  <Phone label="Reset Success">
    <div style={{ background: C.white, height: "calc(100% - 36px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
      {/* Success animation placeholder */}
      <div style={{
        width: 88, height: 88, borderRadius: 44,
        background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 16px 40px rgba(0,166,81,0.3)", marginBottom: 24
      }}>
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, fontFamily: C.font, textAlign: "center" as const, marginBottom: 8 }}>Password Reset!</div>
      <div style={{ fontSize: 13, color: C.gray400, fontFamily: C.font, textAlign: "center" as const, marginBottom: 32, lineHeight: 1.5 }}>
        Your password has been successfully reset. You can now log in with your new password.
      </div>

      <button style={{
        width: "100%", height: 56,
        background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
        border: "none", borderRadius: 16, cursor: "pointer",
        color: C.white, fontSize: 15, fontWeight: 700, fontFamily: C.font,
        boxShadow: "0 8px 24px rgba(0,166,81,0.35)",
      }}>
        Back to Login
      </button>
    </div>
  </Phone>
);

export const HighFidelityPage = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: C.green, borderRadius: 2 }} />
          <div>
            <h2 style={{ margin: 0, color: C.navy }}>High-Fidelity Mobile UI</h2>
            <p style={{ margin: 0, color: C.gray400, fontSize: 14 }}>Production-ready screens at 360×800px target — all touch targets ≥48px, WCAG AA compliant</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 28, flexWrap: "wrap" as const, marginBottom: 48 }}>
        <HiFiLogin />
        <HiFiError />
        <HiFiOTP />
        <HiFiSuccess />
      </div>

      {/* Spacing & Typography specs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
        {/* Color Palette */}
        <div style={{ background: C.white, borderRadius: 16, padding: 20, border: "1px solid " + C.gray200 }}>
          <h4 style={{ color: C.navy, marginTop: 0, marginBottom: 16 }}>Color Palette</h4>
          {[
            { name: "Primary Green", hex: C.green, text: C.white },
            { name: "Green Dark", hex: C.greenDark, text: C.white },
            { name: "Navy", hex: C.navy, text: C.white },
            { name: "Green Light", hex: C.greenLight, text: C.greenDark },
            { name: "Error Red", hex: C.error, text: C.white },
            { name: "Gold/Warning", hex: C.gold, text: C.navy },
            { name: "Surface Gray", hex: C.gray50, text: C.navy },
          ].map((col) => (
            <div key={col.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: col.hex, border: "1px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.navy }}>{col.name}</div>
                <div style={{ fontSize: 11, color: C.gray400 }}>{col.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Typography scale */}
        <div style={{ background: C.white, borderRadius: 16, padding: 20, border: "1px solid " + C.gray200 }}>
          <h4 style={{ color: C.navy, marginTop: 0, marginBottom: 16 }}>Typography Scale</h4>
          {[
            { name: "H1 Display", size: "28px", weight: 800, sample: "ChapaPay" },
            { name: "H2 Title", size: "20px", weight: 700, sample: "Welcome Back!" },
            { name: "H3 Section", size: "17px", weight: 700, sample: "Phone Number" },
            { name: "Body Base", size: "15px", weight: 400, sample: "Enter your number" },
            { name: "Label", size: "12px", weight: 600, sample: "PHONE NUMBER" },
            { name: "Caption", size: "11px", weight: 400, sample: "Example: 0712 345 678" },
          ].map((t) => (
            <div key={t.name} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: parseInt(t.size), fontWeight: t.weight, color: C.navy, fontFamily: C.font }}>{t.sample}</span>
                <span style={{ fontSize: 10, color: C.gray400 }}>{t.size}/{t.weight}</span>
              </div>
              <div style={{ fontSize: 10, color: C.gray300, marginTop: 2 }}>{t.name}</div>
            </div>
          ))}
        </div>

        {/* Spacing system */}
        <div style={{ background: C.white, borderRadius: 16, padding: 20, border: "1px solid " + C.gray200 }}>
          <h4 style={{ color: C.navy, marginTop: 0, marginBottom: 16 }}>Spacing & Touch Targets</h4>
          {[
            { label: "Touch target min", value: "48px", note: "WCAG 2.5.5 AAA" },
            { label: "Touch target comfortable", value: "56px", note: "Recommended" },
            { label: "Input height", value: "52px", note: "Phone + Password" },
            { label: "CTA button height", value: "56px", note: "Primary action" },
            { label: "Screen padding H", value: "24px", note: "Both sides" },
            { label: "Content gap", value: "14px", note: "Between fields" },
            { label: "Border radius", value: "12–16px", note: "Inputs & buttons" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid " + C.gray100 }}>
              <div>
                <div style={{ fontSize: 12, color: C.navy, fontWeight: 500 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: C.gray300 }}>{s.note}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.green }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
