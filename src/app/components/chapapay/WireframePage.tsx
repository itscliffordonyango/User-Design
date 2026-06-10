import React, { useState } from "react";

const WireframePhone = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5A6A85", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {label}
    </div>
    <div
      className="relative overflow-hidden shadow-2xl"
      style={{
        width: 280,
        height: 560,
        borderRadius: 32,
        border: "2px solid #C9D3E0",
        background: "#F8F9FB",
      }}
    >
      {/* Status bar */}
      <div style={{ height: 28, background: "#E8EDF5", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
        <div style={{ width: 40, height: 6, background: "#C9D3E0", borderRadius: 3 }} />
        <div style={{ width: 24, height: 6, background: "#C9D3E0", borderRadius: 3 }} />
      </div>
      {children}
    </div>
  </div>
);

const WFBox = ({ w, h, label, style }: { w?: number | string; h?: number | string; label?: string; style?: React.CSSProperties }) => (
  <div
    style={{
      width: w ?? "100%",
      height: h ?? 40,
      border: "1.5px solid #9AAAB8",
      borderRadius: 6,
      background: "#EEF1F7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    {label && (
      <span style={{ fontSize: 10, color: "#6B7B8E", fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center", padding: "0 4px" }}>
        {label}
      </span>
    )}
  </div>
);

const WFText = ({ children, size = 11, weight = 400, color = "#4A5568" }: { children: React.ReactNode; size?: number; weight?: number; color?: string }) => (
  <p style={{ fontSize: size, fontWeight: weight, color, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>{children}</p>
);

const WFDivider = () => <div style={{ height: 1, background: "#C9D3E0", margin: "8px 0" }} />;

// Screen A: Login
const ScreenA = () => (
  <WireframePhone label="Screen A — Login">
    <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Logo */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <WFBox w={48} h={48} style={{ borderRadius: 12, background: "#CBD5E1" }} />
        <WFText size={14} weight={700} color="#0A1628">ChapaPay</WFText>
        <WFText size={10} color="#5A6A85">Send · Pay · Save</WFText>
      </div>

      {/* Welcome */}
      <div style={{ textAlign: "center" }}>
        <WFText size={15} weight={700} color="#0A1628">Welcome Back</WFText>
        <WFText size={10} color="#5A6A85">Log in to your account</WFText>
      </div>

      <WFDivider />

      {/* Phone field */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <WFText size={10} weight={600} color="#0A1628">Phone Number *</WFText>
        <div style={{ display: "flex", gap: 4 }}>
          <WFBox w={44} h={44} label="+254" style={{ flexShrink: 0 }} />
          <WFBox h={44} label="07XX XXX XXX" style={{ flex: 1 }} />
        </div>
        <WFText size={9} color="#5A6A85">e.g. 0712 345 678</WFText>
      </div>

      {/* Password field */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <WFText size={10} weight={600} color="#0A1628">Password / PIN *</WFText>
        <div style={{ display: "flex", gap: 4 }}>
          <WFBox h={44} label="Enter your password" style={{ flex: 1 }} />
          <WFBox w={44} h={44} label="👁" style={{ flexShrink: 0 }} />
        </div>
      </div>

      {/* Forgot password */}
      <div style={{ textAlign: "right" }}>
        <WFText size={10} color="#007A3D">Forgot Password?</WFText>
      </div>

      {/* Login button */}
      <WFBox h={52} label="LOG IN →" style={{ background: "#C9D3E0", borderRadius: 12, border: "2px solid #9AAAB8" }} />

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, height: 1, background: "#C9D3E0" }} />
        <WFText size={9} color="#9AAAB8">OR</WFText>
        <div style={{ flex: 1, height: 1, background: "#C9D3E0" }} />
      </div>

      {/* Create account */}
      <div style={{ textAlign: "center" }}>
        <WFText size={10} color="#5A6A85">Don't have an account?</WFText>
        <WFText size={10} weight={600} color="#007A3D">Create Account</WFText>
      </div>
    </div>
  </WireframePhone>
);

// Screen B: Error States
const ScreenB = () => (
  <WireframePhone label="Screen B — Error States">
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <WFText size={14} weight={700} color="#0A1628">Welcome Back</WFText>
      </div>

      {/* Error banner - Network */}
      <div style={{ background: "#FDEAEA", border: "1.5px solid #D63B3B", borderRadius: 8, padding: "8px 12px" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <WFBox w={14} h={14} style={{ borderRadius: 7, background: "#D63B3B", border: "none", flexShrink: 0 }} />
          <WFText size={10} weight={600} color="#D63B3B">No internet connection. Please check your network.</WFText>
        </div>
      </div>

      {/* Phone field - error */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <WFText size={10} weight={600} color="#0A1628">Phone Number</WFText>
        <div style={{ display: "flex", gap: 4 }}>
          <WFBox w={44} h={44} label="+254" style={{ flexShrink: 0, borderColor: "#D63B3B" }} />
          <WFBox h={44} label="0790 000 0" style={{ flex: 1, borderColor: "#D63B3B", background: "#FFF5F5" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <WFBox w={10} h={10} style={{ borderRadius: 5, background: "#D63B3B", border: "none", flexShrink: 0 }} />
          <WFText size={9} color="#D63B3B">Invalid phone number. Use format: 07XX XXX XXX</WFText>
        </div>
      </div>

      {/* Password field - error */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <WFText size={10} weight={600} color="#0A1628">Password / PIN</WFText>
        <div style={{ display: "flex", gap: 4 }}>
          <WFBox h={44} label="••••••••" style={{ flex: 1, borderColor: "#D63B3B", background: "#FFF5F5" }} />
          <WFBox w={44} h={44} label="👁" style={{ flexShrink: 0 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <WFBox w={10} h={10} style={{ borderRadius: 5, background: "#D63B3B", border: "none", flexShrink: 0 }} />
          <WFText size={9} color="#D63B3B">Wrong password. 2 attempts remaining.</WFText>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <WFText size={10} color="#007A3D">Forgot Password?</WFText>
      </div>

      {/* Disabled login button */}
      <WFBox h={52} label="LOG IN →" style={{ background: "#E8EDF5", borderRadius: 12, border: "1.5px dashed #9AAAB8" }} />

      {/* Attempt counter */}
      <div style={{ background: "#FEF5E4", border: "1.5px solid #F5A623", borderRadius: 8, padding: "8px 12px" }}>
        <WFText size={9} color="#B07816">Too many failed attempts? Reset your password or contact support.</WFText>
      </div>
    </div>
  </WireframePhone>
);

// Screen C: Forgot Password Flow
const ForgotStep1 = () => (
  <WireframePhone label="Step 1 — Enter Phone">
    <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <WFBox w={32} h={32} label="←" style={{ borderRadius: 8, flexShrink: 0 }} />
        <WFText size={14} weight={700} color="#0A1628">Reset Password</WFText>
      </div>

      {/* Steps indicator */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <div style={{
              width: i === 1 ? 28 : 20,
              height: i === 1 ? 28 : 20,
              borderRadius: 14,
              background: i === 1 ? "#0A1628" : "#E8EDF5",
              border: "1.5px solid " + (i === 1 ? "#0A1628" : "#C9D3E0"),
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <WFText size={9} weight={700} color={i === 1 ? "#fff" : "#9AAAB8"}>{i}</WFText>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: "#E8EDF5" }} />}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <WFText size={8} color="#0A1628">Phone</WFText>
        <WFText size={8} color="#9AAAB8">Verify OTP</WFText>
        <WFText size={8} color="#9AAAB8">New Password</WFText>
      </div>

      <WFDivider />

      <div>
        <WFText size={11} color="#5A6A85">Enter your registered phone number. We'll send you a one-time code.</WFText>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <WFText size={10} weight={600} color="#0A1628">Phone Number</WFText>
        <div style={{ display: "flex", gap: 4 }}>
          <WFBox w={44} h={44} label="+254" style={{ flexShrink: 0 }} />
          <WFBox h={44} label="07XX XXX XXX" style={{ flex: 1 }} />
        </div>
      </div>

      <WFBox h={52} label="SEND OTP →" style={{ background: "#C9D3E0", borderRadius: 12, border: "2px solid #9AAAB8", marginTop: 8 }} />
    </div>
  </WireframePhone>
);

const ForgotStep2 = () => (
  <WireframePhone label="Step 2 — OTP Verify">
    <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <WFBox w={32} h={32} label="←" style={{ borderRadius: 8, flexShrink: 0 }} />
        <WFText size={14} weight={700} color="#0A1628">Verify OTP</WFText>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <div style={{
              width: i === 2 ? 28 : 20,
              height: i === 2 ? 28 : 20,
              borderRadius: 14,
              background: i === 1 ? "#00A651" : i === 2 ? "#0A1628" : "#E8EDF5",
              border: "1.5px solid " + (i <= 2 ? (i === 1 ? "#00A651" : "#0A1628") : "#C9D3E0"),
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <WFText size={9} weight={700} color={i <= 2 ? "#fff" : "#9AAAB8"}>{i === 1 ? "✓" : i}</WFText>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: i < 2 ? "#00A651" : "#E8EDF5" }} />}
          </React.Fragment>
        ))}
      </div>

      <div>
        <WFText size={11} color="#5A6A85">A 6-digit code was sent to +254 07XX XXX XXX</WFText>
      </div>

      {/* OTP boxes */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <WFBox key={i} w={34} h={48} label={i === 1 ? "5" : ""} style={{ borderRadius: 10, borderColor: i === 1 ? "#0A1628" : "#C9D3E0" }} />
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <WFText size={10} color="#5A6A85">Didn't receive code?</WFText>
        <WFText size={10} weight={600} color="#007A3D">Resend in 00:45</WFText>
      </div>

      <WFBox h={52} label="VERIFY →" style={{ background: "#C9D3E0", borderRadius: 12, border: "2px solid #9AAAB8" }} />
    </div>
  </WireframePhone>
);

const ForgotStep3 = () => (
  <WireframePhone label="Step 3 — New Password">
    <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <WFBox w={32} h={32} label="←" style={{ borderRadius: 8, flexShrink: 0 }} />
        <WFText size={14} weight={700} color="#0A1628">New Password</WFText>
      </div>

      {/* Steps - all complete or active */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <div style={{
              width: i === 3 ? 28 : 20,
              height: i === 3 ? 28 : 20,
              borderRadius: 14,
              background: i < 3 ? "#00A651" : "#0A1628",
              border: "none",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <WFText size={9} weight={700} color="#fff">{i < 3 ? "✓" : i}</WFText>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: "#00A651" }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <WFText size={10} weight={600} color="#0A1628">New Password</WFText>
          <div style={{ display: "flex", gap: 4 }}>
            <WFBox h={44} label="Minimum 8 characters" style={{ flex: 1 }} />
            <WFBox w={44} h={44} label="👁" style={{ flexShrink: 0 }} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <WFText size={10} weight={600} color="#0A1628">Confirm Password</WFText>
          <div style={{ display: "flex", gap: 4 }}>
            <WFBox h={44} label="Re-enter password" style={{ flex: 1 }} />
            <WFBox w={44} h={44} label="👁" style={{ flexShrink: 0 }} />
          </div>
        </div>

        {/* Password strength */}
        <div>
          <WFText size={9} color="#5A6A85">Password strength:</WFText>
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            {["Weak", "Fair", "Strong"].map((s, i) => (
              <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: i === 0 ? "#C9D3E0" : "#E8EDF5" }} />
            ))}
          </div>
        </div>
      </div>

      <WFBox h={52} label="RESET PASSWORD →" style={{ background: "#C9D3E0", borderRadius: 12, border: "2px solid #9AAAB8" }} />
    </div>
  </WireframePhone>
);

export const WireframePage = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: "#00A651", borderRadius: 2 }} />
          <div>
            <h2 style={{ margin: 0, color: "#0A1628" }}>Low-Fidelity Wireframes</h2>
            <p style={{ margin: 0, color: "#5A6A85", fontSize: 14 }}>Structural layout exploration — all screens at 280×560px (scaled from 360×800px)</p>
          </div>
        </div>
      </div>

      {/* Section A + B */}
      <div style={{ marginBottom: 48 }}>
        <h3 style={{ color: "#0A1628", marginBottom: 4 }}>Login & Error States</h3>
        <p style={{ color: "#5A6A85", fontSize: 13, marginBottom: 24 }}>Screen A shows the default login state. Screen B shows all three error conditions simultaneously.</p>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <ScreenA />
          <ScreenB />
        </div>
      </div>

      {/* Section C */}
      <div>
        <h3 style={{ color: "#0A1628", marginBottom: 4 }}>Forgot Password Flow (3 Steps)</h3>
        <p style={{ color: "#5A6A85", fontSize: 13, marginBottom: 24 }}>Linear 3-step flow with clear progress indicators. Step 1: Phone entry → Step 2: OTP → Step 3: New password.</p>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <ForgotStep1 />
          <ForgotStep2 />
          <ForgotStep3 />
        </div>
      </div>

      {/* Annotations */}
      <div style={{ marginTop: 48, background: "#F4F6FA", border: "1px solid #C9D3E0", borderRadius: 12, padding: 24 }}>
        <h4 style={{ color: "#0A1628", marginTop: 0, marginBottom: 16 }}>Wireframe Annotations</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {[
            { icon: "📱", title: "Phone prefix selector", desc: "Pre-populated +254 (Kenya). Tap to change for roaming users." },
            { icon: "👁", title: "Password visibility toggle", desc: "48×48px touch target. Toggles between masked and plain text." },
            { icon: "🔴", title: "Inline error messages", desc: "Appear below the offending field, not in a toast. Icon + descriptive text." },
            { icon: "📶", title: "Network error banner", desc: "Full-width top banner. Auto-dismisses when connectivity restored." },
            { icon: "⬜", title: "OTP input grid", desc: "6 separate 48px boxes. Auto-advance on entry. Paste supported." },
            { icon: "📊", title: "Progress stepper", desc: "Shows completed steps in green. Tapping back navigates without losing data." },
          ].map((a) => (
            <div key={a.title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 18 }}>{a.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0A1628", marginBottom: 2 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "#5A6A85" }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
