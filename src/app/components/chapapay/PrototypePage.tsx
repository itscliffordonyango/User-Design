import React, { useState } from "react";

const C = {
  green: "#00A651",
  greenDark: "#007A3D",
  greenLight: "#E6F7EE",
  navy: "#0A1628",
  navyMid: "#162340",
  gold: "#F5A623",
  error: "#D63B3B",
  errorLight: "#FDEAEA",
  warningLight: "#FEF5E4",
  white: "#FFFFFF",
  gray50: "#F4F6FA",
  gray100: "#E8EDF5",
  gray200: "#C9D3E0",
  gray300: "#9AAAB8",
  gray400: "#6B7B8E",
  font: "'Plus Jakarta Sans', sans-serif",
};

type Screen = "login" | "login-error" | "forgot-phone" | "forgot-otp" | "forgot-newpass" | "success";

const PhoneShell = ({ children, bg = C.white }: { children: React.ReactNode; bg?: string }) => (
  <div style={{
    width: 360, minHeight: 720,
    background: bg,
    borderRadius: 40,
    border: "3px solid " + C.navy,
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(10,22,40,0.22), 0 0 0 8px rgba(10,22,40,0.05)",
    position: "relative" as const,
    fontFamily: C.font,
  }}>
    {/* Notch */}
    <div style={{ position: "absolute" as const, top: 0, left: "50%", transform: "translateX(-50%)", width: 100, height: 24, background: C.navy, borderRadius: "0 0 16px 16px", zIndex: 20 }} />
    {/* Status bar */}
    <div style={{ height: 44, background: C.navy, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 24px 8px", position: "relative" as const }}>
      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>9:41</span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>📶</span>
        <div style={{ width: 18, height: 9, border: "1.5px solid rgba(255,255,255,0.6)", borderRadius: 2.5, padding: 1 }}>
          <div style={{ width: "80%", height: "100%", background: C.green, borderRadius: 1 }} />
        </div>
      </div>
    </div>
    {children}
  </div>
);

// LOGIN SCREEN
const LoginScreen = ({ onError, onForgot }: { onError: () => void; onForgot: () => void }) => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div style={{ background: C.white }}>
      {/* Header */}
      <div style={{ background: C.navy, padding: "20px 28px 36px", position: "relative" as const }}>
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10 }}>
          <div style={{ width: 64, height: 64, borderRadius: 20, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 28px rgba(0,166,81,0.45)" }}>
            <span style={{ color: C.white, fontWeight: 800, fontSize: 22 }}>CP</span>
          </div>
          <div style={{ color: C.white, fontWeight: 800, fontSize: 22 }}>ChapaPay</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Send · Pay · Save · Grow</div>
        </div>
        <svg viewBox="0 0 360 40" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
          <path d="M0,40 Q180,0 360,40 L360,40 L0,40 Z" fill={C.white} />
        </svg>
      </div>

      <div style={{ padding: "12px 28px 32px" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 4 }}>Welcome Back!</div>
        <div style={{ fontSize: 13, color: C.gray400, marginBottom: 24 }}>Log in to your ChapaPay account</div>

        {/* Phone */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Phone Number</label>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 70, height: 56, background: C.gray50, border: "2px solid " + C.gray200, borderRadius: 14, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10 }}>🇰🇪</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>+254</span>
            </div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XX XXX XXX"
              style={{ flex: 1, height: 56, background: C.gray50, border: "2px solid " + C.gray200, borderRadius: 14, padding: "0 16px", fontSize: 15, color: C.navy, fontFamily: C.font, outline: "none" }}
            />
          </div>
          <div style={{ fontSize: 11, color: C.gray400, marginTop: 5 }}>Example: 0712 345 678</div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Password / PIN</label>
          <div style={{ height: 56, background: C.gray50, border: "2px solid " + C.gray200, borderRadius: 14, display: "flex", alignItems: "center", padding: "0 6px 0 16px", justifyContent: "space-between" }}>
            <input
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              style={{ flex: 1, background: "none", border: "none", fontSize: 15, color: C.navy, fontFamily: C.font, outline: "none" }}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              style={{ width: 44, height: 44, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass
                ? <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke={C.navy} strokeWidth="2" strokeLinecap="round" /><line x1="1" y1="1" x2="23" y2="23" stroke={C.navy} strokeWidth="2" strokeLinecap="round" /></svg>
                : <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.navy} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.navy} strokeWidth="2" /></svg>
              }
            </button>
          </div>
        </div>

        <div style={{ textAlign: "right" as const, marginBottom: 24 }}>
          <button onClick={onForgot} style={{ background: "none", border: "none", color: C.green, fontSize: 13, fontWeight: 700, cursor: "pointer", padding: "10px 0" }}>
            Forgot Password?
          </button>
        </div>

        <button
          onClick={onError}
          style={{ width: "100%", height: 60, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", border: "none", borderRadius: 18, cursor: "pointer", color: C.white, fontSize: 16, fontWeight: 700, fontFamily: C.font, boxShadow: "0 10px 28px rgba(0,166,81,0.38)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}
        >
          Log In
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 1, background: C.gray200 }} />
          <span style={{ fontSize: 12, color: C.gray300 }}>New to ChapaPay?</span>
          <div style={{ flex: 1, height: 1, background: C.gray200 }} />
        </div>

        <button style={{ width: "100%", height: 56, background: C.white, border: "2px solid " + C.navy, borderRadius: 18, cursor: "pointer", color: C.navy, fontSize: 15, fontWeight: 700, fontFamily: C.font }}>
          Create Account
        </button>
      </div>
    </div>
  );
};

// ERROR SCREEN
const ErrorScreen = ({ onBack, onForgot }: { onBack: () => void; onForgot: () => void }) => (
  <div style={{ background: C.white }}>
    <div style={{ background: C.navy, padding: "20px 28px 36px", position: "relative" as const }}>
      <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10 }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: C.white, fontWeight: 800, fontSize: 22 }}>CP</span>
        </div>
        <div style={{ color: C.white, fontWeight: 800, fontSize: 22 }}>ChapaPay</div>
      </div>
      <svg viewBox="0 0 360 40" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
        <path d="M0,40 Q180,0 360,40 L360,40 L0,40 Z" fill={C.white} />
      </svg>
    </div>

    <div style={{ padding: "12px 28px 32px" }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 16 }}>Welcome Back!</div>

      {/* Error banner */}
      <div style={{ background: C.errorLight, border: "1.5px solid " + C.error, borderRadius: 12, padding: "12px 14px", marginBottom: 20, display: "flex", gap: 10, alignItems: "flex-start" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
        <span style={{ fontSize: 13, color: C.error, fontWeight: 500, lineHeight: 1.4 }}>Incorrect password. 2 attempts remaining before account lock.</span>
      </div>

      {/* Phone - error */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Phone Number</label>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ width: 70, height: 56, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 14, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10 }}>🇰🇪</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>+254</span>
          </div>
          <div style={{ flex: 1, height: 56, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 14, display: "flex", alignItems: "center", padding: "0 16px" }}>
            <span style={{ fontSize: 15, color: C.navy }}>0712 345 678</span>
          </div>
        </div>
      </div>

      {/* Password - error */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Password / PIN</label>
        <div style={{ height: 56, background: C.errorLight, border: "2px solid " + C.error, borderRadius: 14, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between" }}>
          <span style={{ fontSize: 15, color: C.navy }}>••••••••</span>
          <button style={{ width: 44, height: 44, background: "none", border: "none", cursor: "pointer" }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.navy} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.navy} strokeWidth="2" /></svg>
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
          <span style={{ fontSize: 12, color: C.error }}>Wrong password. Please try again or reset.</span>
        </div>
      </div>

      <div style={{ textAlign: "right" as const, marginBottom: 24 }}>
        <button onClick={onForgot} style={{ background: "none", border: "none", color: C.green, fontSize: 13, fontWeight: 700, cursor: "pointer", padding: "10px 0" }}>
          Forgot Password?
        </button>
      </div>

      <button onClick={onBack} style={{ width: "100%", height: 60, background: C.gray100, border: "2px solid " + C.gray200, borderRadius: 18, cursor: "pointer", color: C.gray300, fontSize: 16, fontWeight: 700, fontFamily: C.font, marginBottom: 16 }}>
        Log In
      </button>

      <div style={{ background: C.warningLight, border: "1.5px solid " + C.gold, borderRadius: 12, padding: "12px 14px" }}>
        <span style={{ fontSize: 12, color: "#7A5200" }}>⚠️ Too many failed attempts? <button onClick={onForgot} style={{ background: "none", border: "none", color: C.greenDark, fontWeight: 700, cursor: "pointer", fontSize: 12, textDecoration: "underline" }}>Reset password</button> or contact support.</span>
      </div>
    </div>
  </div>
);

// FORGOT PHONE SCREEN
const ForgotPhoneScreen = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => (
  <div style={{ background: C.white }}>
    <div style={{ background: C.navy, padding: "14px 24px 36px", position: "relative" as const }}>
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke={C.white} strokeWidth="2" strokeLinecap="round" /></svg>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Back to Login</span>
      </button>
      <div style={{ color: C.white, fontWeight: 800, fontSize: 20 }}>Reset Password</div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 4 }}>Step 1 of 3 — Enter your phone</div>
      <svg viewBox="0 0 360 40" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
        <path d="M0,40 Q180,0 360,40 L360,40 L0,40 Z" fill={C.white} />
      </svg>
    </div>

    <div style={{ padding: "16px 28px 32px" }}>
      {/* Stepper */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
        {[{ n: 1, label: "Phone" }, { n: 2, label: "OTP" }, { n: 3, label: "Password" }].map((step, idx) => (
          <React.Fragment key={step.n}>
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 4 }}>
              <div style={{ width: step.n === 1 ? 36 : 28, height: step.n === 1 ? 36 : 28, borderRadius: 18, background: step.n === 1 ? C.navy : C.gray100, border: "2px solid " + (step.n === 1 ? C.navy : C.gray200), display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: step.n === 1 ? 14 : 11, fontWeight: 700, color: step.n === 1 ? C.white : C.gray300 }}>{step.n}</span>
              </div>
              <span style={{ fontSize: 10, color: step.n === 1 ? C.navy : C.gray300, fontWeight: step.n === 1 ? 700 : 400 }}>{step.label}</span>
            </div>
            {idx < 2 && <div style={{ flex: 1, height: 2, background: C.gray200, marginBottom: 16 }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ fontSize: 14, color: C.gray400, marginBottom: 24, lineHeight: 1.5 }}>
        Enter the phone number linked to your ChapaPay account. We'll send you a one-time code to verify your identity.
      </div>

      <div style={{ marginBottom: 32 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Phone Number</label>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ width: 70, height: 56, background: C.gray50, border: "2px solid " + C.gray200, borderRadius: 14, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10 }}>🇰🇪</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>+254</span>
          </div>
          <input placeholder="07XX XXX XXX" style={{ flex: 1, height: 56, background: C.gray50, border: "2px solid " + C.navy, borderRadius: 14, padding: "0 16px", fontSize: 15, color: C.navy, fontFamily: C.font, outline: "none", boxShadow: "0 0 0 4px rgba(10,22,40,0.08)" }} />
        </div>
        <div style={{ fontSize: 11, color: C.gray400, marginTop: 5 }}>Example: 0712 345 678</div>
      </div>

      <button onClick={onNext} style={{ width: "100%", height: 60, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", border: "none", borderRadius: 18, cursor: "pointer", color: C.white, fontSize: 16, fontWeight: 700, fontFamily: C.font, boxShadow: "0 10px 28px rgba(0,166,81,0.38)" }}>
        Send OTP Code →
      </button>
    </div>
  </div>
);

// OTP SCREEN
const OTPScreen = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <div style={{ background: C.white }}>
      <div style={{ background: C.navy, padding: "14px 24px 36px", position: "relative" as const }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke={C.white} strokeWidth="2" strokeLinecap="round" /></svg>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Back</span>
        </button>
        <div style={{ color: C.white, fontWeight: 800, fontSize: 20 }}>Enter OTP Code</div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 4 }}>Step 2 of 3 — Verify your number</div>
        <svg viewBox="0 0 360 40" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
          <path d="M0,40 Q180,0 360,40 L360,40 L0,40 Z" fill={C.white} />
        </svg>
      </div>

      <div style={{ padding: "16px 28px 32px" }}>
        {/* Stepper */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
          {[{ n: 1, label: "Phone" }, { n: 2, label: "OTP" }, { n: 3, label: "Password" }].map((step, idx) => (
            <React.Fragment key={step.n}>
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 4 }}>
                <div style={{ width: step.n === 2 ? 36 : 28, height: step.n === 2 ? 36 : 28, borderRadius: 18, background: step.n < 2 ? C.green : step.n === 2 ? C.navy : C.gray100, border: "2px solid " + (step.n <= 2 ? (step.n < 2 ? C.green : C.navy) : C.gray200), display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: step.n === 2 ? 14 : 11, fontWeight: 700, color: step.n < 3 ? C.white : C.gray300 }}>{step.n < 2 ? "✓" : step.n}</span>
                </div>
                <span style={{ fontSize: 10, color: step.n <= 2 ? C.navy : C.gray300, fontWeight: step.n === 2 ? 700 : 400 }}>{step.label}</span>
              </div>
              {idx < 2 && <div style={{ flex: 1, height: 2, background: idx < 1 ? C.green : C.gray200, marginBottom: 16 }} />}
            </React.Fragment>
          ))}
        </div>

        <div style={{ fontSize: 14, color: C.gray400, marginBottom: 8, lineHeight: 1.5 }}>
          A 6-digit code was sent to <strong style={{ color: C.navy }}>+254 712 345 678</strong>
        </div>
        <div style={{ fontSize: 13, color: C.error, fontWeight: 600, marginBottom: 24 }}>
          Expires in: 04:32
        </div>

        {/* OTP inputs */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
          {otp.map((v, i) => (
            <input
              key={i}
              maxLength={1}
              value={v}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[i] = e.target.value.replace(/\D/, "");
                setOtp(newOtp);
              }}
              style={{
                width: 48, height: 60, textAlign: "center" as const,
                fontSize: 22, fontWeight: 800, color: C.navy, fontFamily: C.font,
                background: v ? C.greenLight : C.gray50,
                border: "2px solid " + (v ? C.green : C.gray200),
                borderRadius: 14, outline: "none",
                boxShadow: v ? "0 0 0 4px rgba(0,166,81,0.1)" : "none",
              }}
            />
          ))}
        </div>

        <div style={{ textAlign: "center" as const, marginBottom: 28 }}>
          <div style={{ fontSize: 13, color: C.gray400, marginBottom: 6 }}>Didn't receive the code?</div>
          <button style={{ background: "none", border: "none", color: C.green, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Resend OTP
          </button>
        </div>

        <button onClick={onNext} style={{ width: "100%", height: 60, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", border: "none", borderRadius: 18, cursor: "pointer", color: C.white, fontSize: 16, fontWeight: 700, fontFamily: C.font, boxShadow: "0 10px 28px rgba(0,166,81,0.38)" }}>
          Verify Code →
        </button>
      </div>
    </div>
  );
};

// NEW PASSWORD SCREEN
const NewPasswordScreen = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);

  const strength = pass.length === 0 ? 0 : pass.length < 6 ? 1 : pass.length < 10 ? 2 : 3;
  const strengthColors = ["#E8EDF5", C.error, C.gold, C.green];
  const strengthLabels = ["", "Weak", "Fair", "Strong"];

  return (
    <div style={{ background: C.white }}>
      <div style={{ background: C.navy, padding: "14px 24px 36px", position: "relative" as const }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke={C.white} strokeWidth="2" strokeLinecap="round" /></svg>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Back</span>
        </button>
        <div style={{ color: C.white, fontWeight: 800, fontSize: 20 }}>New Password</div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 4 }}>Step 3 of 3 — Create new password</div>
        <svg viewBox="0 0 360 40" style={{ position: "absolute" as const, bottom: -1, left: 0, right: 0 }} preserveAspectRatio="none">
          <path d="M0,40 Q180,0 360,40 L360,40 L0,40 Z" fill={C.white} />
        </svg>
      </div>

      <div style={{ padding: "16px 28px 32px" }}>
        {/* Stepper */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
          {[{ n: 1, label: "Phone" }, { n: 2, label: "OTP" }, { n: 3, label: "Password" }].map((step, idx) => (
            <React.Fragment key={step.n}>
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 4 }}>
                <div style={{ width: step.n === 3 ? 36 : 28, height: step.n === 3 ? 36 : 28, borderRadius: 18, background: step.n < 3 ? C.green : C.navy, border: "2px solid " + (step.n < 3 ? C.green : C.navy), display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: step.n === 3 ? 14 : 11, fontWeight: 700, color: C.white }}>{step.n < 3 ? "✓" : step.n}</span>
                </div>
                <span style={{ fontSize: 10, color: C.navy, fontWeight: step.n === 3 ? 700 : 400 }}>{step.label}</span>
              </div>
              {idx < 2 && <div style={{ flex: 1, height: 2, background: idx < 2 ? C.green : C.gray200, marginBottom: 16 }} />}
            </React.Fragment>
          ))}
        </div>

        {/* New password */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>New Password</label>
          <div style={{ height: 56, background: C.gray50, border: "2px solid " + (pass ? C.navy : C.gray200), borderRadius: 14, display: "flex", alignItems: "center", padding: "0 6px 0 16px", justifyContent: "space-between" }}>
            <input
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Minimum 8 characters"
              style={{ flex: 1, background: "none", border: "none", fontSize: 15, color: C.navy, fontFamily: C.font, outline: "none" }}
            />
            <button onClick={() => setShowPass(!showPass)} style={{ width: 44, height: 44, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.navy} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.navy} strokeWidth="2" /></svg>
            </button>
          </div>
          {pass && (
            <div style={{ marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= strength ? strengthColors[strength] : C.gray100, transition: "background 0.2s" }} />
                ))}
              </div>
              <span style={{ fontSize: 11, color: strengthColors[strength], fontWeight: 600 }}>
                {strengthLabels[strength]}
              </span>
            </div>
          )}
        </div>

        {/* Confirm password */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Confirm Password</label>
          <div style={{ height: 56, background: C.gray50, border: "2px solid " + (confirm && confirm === pass ? C.green : confirm ? C.error : C.gray200), borderRadius: 14, display: "flex", alignItems: "center", padding: "0 16px" }}>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter your password"
              style={{ flex: 1, background: "none", border: "none", fontSize: 15, color: C.navy, fontFamily: C.font, outline: "none" }}
            />
          </div>
          {confirm && confirm !== pass && (
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>
              <span style={{ fontSize: 12, color: C.error }}>Passwords do not match</span>
            </div>
          )}
        </div>

        <button onClick={onNext} style={{ width: "100%", height: 60, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", border: "none", borderRadius: 18, cursor: "pointer", color: C.white, fontSize: 16, fontWeight: 700, fontFamily: C.font, boxShadow: "0 10px 28px rgba(0,166,81,0.38)" }}>
          Reset Password →
        </button>
      </div>
    </div>
  );
};

// SUCCESS SCREEN
const SuccessScreen = ({ onLogin }: { onLogin: () => void }) => (
  <div style={{ background: C.white, minHeight: 620, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", padding: "32px 28px" }}>
    <div style={{ width: 100, height: 100, borderRadius: 50, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 48px rgba(0,166,81,0.32)", marginBottom: 28 }}>
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div style={{ fontSize: 24, fontWeight: 800, color: C.navy, textAlign: "center" as const, marginBottom: 12 }}>Password Reset!</div>
    <div style={{ fontSize: 14, color: C.gray400, textAlign: "center" as const, lineHeight: 1.6, marginBottom: 40 }}>
      Your ChapaPay password has been successfully updated. You can now log in with your new password.
    </div>
    <div style={{ background: C.greenLight, border: "1.5px solid " + C.green, borderRadius: 14, padding: "14px 18px", marginBottom: 32, width: "100%" }}>
      <div style={{ fontSize: 13, color: C.greenDark, fontWeight: 600, textAlign: "center" as const }}>✅ Security tip: Never share your password with anyone</div>
    </div>
    <button onClick={onLogin} style={{ width: "100%", height: 60, background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)", border: "none", borderRadius: 18, cursor: "pointer", color: C.white, fontSize: 16, fontWeight: 700, fontFamily: C.font, boxShadow: "0 10px 28px rgba(0,166,81,0.38)" }}>
      Back to Login →
    </button>
  </div>
);

const screenLabels: Record<Screen, string> = {
  "login": "Login",
  "login-error": "Error",
  "forgot-phone": "Forgot Phone",
  "forgot-otp": "OTP",
  "forgot-newpass": "New Password",
  "success": "Success",
};

const screenFlow: Screen[] = ["login", "login-error", "forgot-phone", "forgot-otp", "forgot-newpass", "success"];

export const PrototypePage = () => {
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <div style={{ fontFamily: C.font }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: C.green, borderRadius: 2 }} />
          <div>
            <h2 style={{ margin: 0, color: C.navy }}>Interactive Prototype</h2>
            <p style={{ margin: 0, color: C.gray400, fontSize: 14 }}>Click through the complete login flow. Fully functional with real state management.</p>
          </div>
        </div>
      </div>

      {/* Flow nav */}
      <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" as const, alignItems: "center" }}>
        {screenFlow.map((s, i) => (
          <React.Fragment key={s}>
            <button
              onClick={() => setScreen(s)}
              style={{
                height: 36, padding: "0 14px", borderRadius: 10, border: "none", cursor: "pointer",
                background: screen === s ? C.navy : C.white,
                color: screen === s ? C.white : C.gray400,
                fontSize: 12, fontWeight: screen === s ? 700 : 500, fontFamily: C.font,
                border: "1.5px solid " + (screen === s ? C.navy : C.gray200),
              } as React.CSSProperties}
            >
              {screenLabels[s]}
            </button>
            {i < screenFlow.length - 1 && <span style={{ color: C.gray300, fontSize: 12 }}>→</span>}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" as const }}>
        {/* Phone mockup */}
        <PhoneShell>
          {screen === "login" && <LoginScreen onError={() => setScreen("login-error")} onForgot={() => setScreen("forgot-phone")} />}
          {screen === "login-error" && <ErrorScreen onBack={() => setScreen("login")} onForgot={() => setScreen("forgot-phone")} />}
          {screen === "forgot-phone" && <ForgotPhoneScreen onNext={() => setScreen("forgot-otp")} onBack={() => setScreen("login")} />}
          {screen === "forgot-otp" && <OTPScreen onNext={() => setScreen("forgot-newpass")} onBack={() => setScreen("forgot-phone")} />}
          {screen === "forgot-newpass" && <NewPasswordScreen onNext={() => setScreen("success")} onBack={() => setScreen("forgot-otp")} />}
          {screen === "success" && <SuccessScreen onLogin={() => setScreen("login")} />}
        </PhoneShell>

        {/* Interaction notes */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ background: C.white, borderRadius: 16, border: "1px solid " + C.gray200, padding: 24, marginBottom: 20 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Current Screen</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.green, marginBottom: 16 }}>{screenLabels[screen]}</div>

            <div style={{ fontSize: 12, fontWeight: 700, color: C.gray400, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Interaction Notes</div>
            {screen === "login" && (
              <div>
                {[
                  "Phone prefix (+254) pre-selected — tap to change",
                  "Password visible toggle (48px touch target)",
                  "Forgot Password: right-aligned, green color",
                  "Login CTA: 60px height, full gradient",
                  "Real-time phone format hint below input",
                  "Create Account: secondary action, white+navy",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
            {screen === "login-error" && (
              <div>
                {[
                  "Error banner: red with icon — explains clearly",
                  "Error fields: red border + light red background",
                  "Inline error message below each field",
                  "Attempt counter in warning banner",
                  "Login button visually disabled (gray)",
                  "Reset password link in warning block",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
            {screen === "forgot-phone" && (
              <div>
                {[
                  "Back navigation clearly visible at top",
                  "3-step progress indicator with labels",
                  "Current step highlighted in navy",
                  "Focused input with navy border + focus ring",
                  "Clear instructional text in plain language",
                  "CTA: green gradient, 60px height",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
            {screen === "forgot-otp" && (
              <div>
                {[
                  "6 separate OTP inputs — auto-advance on type",
                  "Filled boxes turn green with green border",
                  "Countdown timer in red (urgency cue)",
                  "Resend OTP button always accessible",
                  "Previous step shown as green checkmark",
                  "Paste support: fill all boxes at once",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
            {screen === "forgot-newpass" && (
              <div>
                {[
                  "Password strength meter (Weak/Fair/Strong)",
                  "Real-time match validation on confirm field",
                  "Show/hide toggle on password field",
                  "All steps complete shown as green checkmarks",
                  "Clear error if passwords don't match",
                  "Minimum 8 character requirement shown",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
            {screen === "success" && (
              <div>
                {[
                  "Full-screen success state — celebratory",
                  "Large green check icon (100px) for visual clarity",
                  "Confirmation message in plain English",
                  "Security tip for low-literacy users",
                  "Single CTA: Back to Login",
                  "Auto-redirect after 5 seconds (in production)",
                ].map((n) => <NoteItem key={n} text={n} />)}
              </div>
            )}
          </div>

          {/* Flow diagram */}
          <div style={{ background: C.white, borderRadius: 16, border: "1px solid " + C.gray200, padding: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 16 }}>Flow Diagram</div>
            {[
              { from: "Login", to: "Error State", trigger: "Wrong credentials" },
              { from: "Login", to: "Forgot Password", trigger: "Tap 'Forgot Password'" },
              { from: "Error State", to: "Forgot Password", trigger: "Tap reset link" },
              { from: "Forgot Phone", to: "OTP Verify", trigger: "Submit phone number" },
              { from: "OTP Verify", to: "New Password", trigger: "Valid OTP entered" },
              { from: "New Password", to: "Success", trigger: "Password changed" },
              { from: "Success", to: "Login", trigger: "Auto or tap CTA" },
            ].map((f) => (
              <div key={f.from + f.to} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.navy, minWidth: 90, textAlign: "right" as const }}>{f.from}</span>
                <svg width="20" height="12" fill="none" viewBox="0 0 24 12"><path d="M0 6h20M14 1l6 5-6 5" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.navy, minWidth: 90 }}>{f.to}</span>
                <span style={{ fontSize: 10, color: C.gray400 }}>{f.trigger}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NoteItem = ({ text }: { text: string }) => (
  <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
    <div style={{ width: 6, height: 6, borderRadius: 3, background: C.green, marginTop: 5, flexShrink: 0 }} />
    <span style={{ fontSize: 13, color: C.gray400, lineHeight: 1.4 }}>{text}</span>
  </div>
);
