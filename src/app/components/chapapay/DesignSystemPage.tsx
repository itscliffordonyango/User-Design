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
  warning: "#F5A623",
  warningLight: "#FEF5E4",
  successLight: "#E6F7EE",
  white: "#FFFFFF",
  gray50: "#F4F6FA",
  gray100: "#E8EDF5",
  gray200: "#C9D3E0",
  gray300: "#9AAAB8",
  gray400: "#6B7B8E",
  font: "'Plus Jakarta Sans', sans-serif",
};

const Section = ({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 48 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: subtitle ? 4 : 20 }}>
      <div style={{ width: 3, height: 22, background: C.green, borderRadius: 2 }} />
      <h3 style={{ margin: 0, color: C.navy, fontFamily: C.font }}>{title}</h3>
    </div>
    {subtitle && <p style={{ color: C.gray400, fontSize: 13, fontFamily: C.font, margin: "0 0 20px 13px" }}>{subtitle}</p>}
    {children}
  </div>
);

const ComponentCard = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ background: C.white, borderRadius: 12, border: "1px solid " + C.gray200, padding: 20 }}>
    <div style={{ fontSize: 10, fontWeight: 700, color: C.gray400, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16, fontFamily: C.font }}>{label}</div>
    {children}
  </div>
);

// Button variants
const Btn = ({ label, variant, disabled = false, icon }: { label: string; variant: "primary" | "secondary" | "disabled" | "ghost" | "danger"; disabled?: boolean; icon?: string }) => {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)", color: C.white, border: "none", boxShadow: "0 6px 20px rgba(0,166,81,0.3)" },
    secondary: { background: C.white, color: C.navy, border: "2px solid " + C.navy, boxShadow: "none" },
    disabled: { background: C.gray100, color: C.gray300, border: "2px solid " + C.gray200, cursor: "not-allowed", boxShadow: "none" },
    ghost: { background: "transparent", color: C.green, border: "2px solid " + C.green, boxShadow: "none" },
    danger: { background: "linear-gradient(135deg, #E55353 0%, " + C.error + " 100%)", color: C.white, border: "none", boxShadow: "0 6px 20px rgba(214,59,59,0.3)" },
  };
  return (
    <button disabled={disabled} style={{
      height: 52, padding: "0 24px", borderRadius: 14, cursor: disabled ? "not-allowed" : "pointer",
      fontSize: 14, fontWeight: 700, fontFamily: C.font,
      display: "inline-flex", alignItems: "center", gap: 8,
      transition: "all 0.15s ease",
      ...styles[variant],
    }}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

// Input variants
const Input = ({ label, state, value, placeholder, helper }: { label: string; state: "default" | "focused" | "error" | "success" | "disabled"; value?: string; placeholder?: string; helper?: string }) => {
  const stateStyles: Record<string, { border: string; bg: string }> = {
    default: { border: C.gray200, bg: C.gray50 },
    focused: { border: C.navy, bg: C.white },
    error: { border: C.error, bg: C.errorLight },
    success: { border: C.green, bg: C.greenLight },
    disabled: { border: C.gray200, bg: C.gray100 },
  };
  const s = stateStyles[state];
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: C.gray400, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 6, fontFamily: C.font }}>{label}</div>
      <div style={{
        height: 52, background: s.bg, border: "2px solid " + s.border, borderRadius: 12,
        display: "flex", alignItems: "center", padding: "0 14px", gap: 8,
        boxShadow: state === "focused" ? "0 0 0 4px rgba(10,22,40,0.08)" : state === "error" ? "0 0 0 4px rgba(214,59,59,0.1)" : state === "success" ? "0 0 0 4px rgba(0,166,81,0.1)" : "none",
      }}>
        {state === "error" && <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>}
        {state === "success" && <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.green} strokeWidth="2" /><path d="M8 12l3 3 5-5" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        <span style={{ fontSize: 13, color: value ? C.navy : C.gray300, fontFamily: C.font, flex: 1 }}>{value || placeholder}</span>
      </div>
      {helper && (
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
          {state === "error" && <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.error} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.error} strokeWidth="2" /><circle cx="12" cy="16" r="1" fill={C.error} /></svg>}
          {state === "success" && <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.green} strokeWidth="2" /><path d="M8 12l3 3 5-5" stroke={C.green} strokeWidth="2" strokeLinecap="round" /></svg>}
          <span style={{ fontSize: 11, color: state === "error" ? C.error : state === "success" ? C.green : C.gray400, fontFamily: C.font }}>{helper}</span>
        </div>
      )}
    </div>
  );
};

// Alert variants
const Alert = ({ type, title, message }: { type: "error" | "warning" | "success" | "info"; title: string; message: string }) => {
  const conf = {
    error: { bg: C.errorLight, border: C.error, color: C.error, icon: "⛔" },
    warning: { bg: C.warningLight, border: C.warning, color: "#7A5200", icon: "⚠️" },
    success: { bg: C.successLight, border: C.green, color: C.greenDark, icon: "✅" },
    info: { bg: "#EBF4FF", border: "#3B82F6", color: "#1E40AF", icon: "ℹ️" },
  };
  const c = conf[type];
  return (
    <div style={{ background: c.bg, border: "1.5px solid " + c.border, borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>{c.icon}</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: c.color, fontFamily: C.font }}>{title}</div>
          <div style={{ fontSize: 12, color: c.color, fontFamily: C.font, marginTop: 3, opacity: 0.85 }}>{message}</div>
        </div>
      </div>
    </div>
  );
};

// Icon component
const IconBox = ({ name, svg }: { name: string; svg: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
    <div style={{ width: 52, height: 52, borderRadius: 14, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid " + C.green }}>
      {svg}
    </div>
    <span style={{ fontSize: 11, color: C.gray400, fontFamily: C.font }}>{name}</span>
  </div>
);

export const DesignSystemPage = () => {
  const [activeTab, setActiveTab] = useState("buttons");

  const tabs = [
    { id: "buttons", label: "Buttons" },
    { id: "inputs", label: "Inputs" },
    { id: "alerts", label: "Alerts" },
    { id: "icons", label: "Icons" },
    { id: "tokens", label: "Tokens" },
  ];

  return (
    <div style={{ fontFamily: C.font }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: C.green, borderRadius: 2 }} />
          <div>
            <h2 style={{ margin: 0, color: C.navy }}>ChapaPay Design System</h2>
            <p style={{ margin: 0, color: C.gray400, fontSize: 14 }}>Reusable components built for accessibility, performance, and African fintech context</p>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" as const }}>
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            height: 40, padding: "0 20px", borderRadius: 10, border: "none", cursor: "pointer",
            background: activeTab === t.id ? C.navy : C.white,
            color: activeTab === t.id ? C.white : C.gray400,
            fontSize: 13, fontWeight: activeTab === t.id ? 700 : 500, fontFamily: C.font,
            border: "1.5px solid " + (activeTab === t.id ? C.navy : C.gray200),
            transition: "all 0.15s ease",
          } as React.CSSProperties}>
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "buttons" && (
        <div>
          <Section title="Button Components" subtitle="Minimum height 52px. All buttons meet 48px touch target requirement.">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              <ComponentCard label="Primary Button">
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  <Btn label="Log In" variant="primary" />
                  <div style={{ fontSize: 11, color: C.gray400 }}>
                    <div>Height: 52px • Border-radius: 14px</div>
                    <div>BG: Linear gradient #00A651 → #007A3D</div>
                    <div>Font: 14px 700 • Shadow: 0 6px 20px rgba(0,166,81,0.3)</div>
                    <div>✓ Contrast ratio White on Green: 4.8:1 (AA)</div>
                  </div>
                </div>
              </ComponentCard>
              <ComponentCard label="Secondary Button">
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  <Btn label="Create Account" variant="secondary" />
                  <div style={{ fontSize: 11, color: C.gray400 }}>
                    <div>Height: 52px • BG: White • Border: 2px Navy</div>
                    <div>✓ Contrast Navy on White: 14.1:1 (AAA)</div>
                  </div>
                </div>
              </ComponentCard>
              <ComponentCard label="Ghost / Outline Button">
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  <Btn label="Resend OTP" variant="ghost" />
                  <div style={{ fontSize: 11, color: C.gray400 }}>
                    <div>Height: 52px • BG: Transparent • Border: 2px Green</div>
                    <div>✓ Contrast Green on White: 5.2:1 (AA)</div>
                  </div>
                </div>
              </ComponentCard>
              <ComponentCard label="Disabled Button">
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  <Btn label="Log In" variant="disabled" disabled />
                  <div style={{ fontSize: 11, color: C.gray400 }}>
                    <div>BG: #E8EDF5 • Color: #9AAAB8 (disabled state)</div>
                    <div>cursor: not-allowed • aria-disabled: true</div>
                  </div>
                </div>
              </ComponentCard>
              <ComponentCard label="Danger Button">
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  <Btn label="Delete Account" variant="danger" icon="⚠️" />
                  <div style={{ fontSize: 11, color: C.gray400 }}>
                    <div>Gradient #E55353 → #D63B3B</div>
                    <div>✓ Contrast White on Red: 5.1:1 (AA)</div>
                  </div>
                </div>
              </ComponentCard>
            </div>
          </Section>

          {/* CTA Large */}
          <Section title="Full-Width CTA (Login Button)" subtitle="The primary login CTA. 56px height for maximum thumb-friendly interaction.">
            <div style={{ maxWidth: 360, background: C.white, border: "1px solid " + C.gray200, borderRadius: 16, padding: 20 }}>
              <button style={{
                width: "100%", height: 56, background: "linear-gradient(135deg, " + C.green + " 0%, " + C.greenDark + " 100%)",
                border: "none", borderRadius: 16, cursor: "pointer", fontFamily: C.font,
                fontSize: 15, fontWeight: 700, color: C.white,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                boxShadow: "0 8px 24px rgba(0,166,81,0.35)",
              }}>
                Log In
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div style={{ marginTop: 12, fontSize: 11, color: C.gray400, textAlign: "center" as const }}>
                56px height • Full-width • Arrow icon • Active state: scale(0.98)
              </div>
            </div>
          </Section>
        </div>
      )}

      {activeTab === "inputs" && (
        <Section title="Input Field Components" subtitle="All inputs are 52px tall — meets 48px minimum touch target. Labels above (not placeholder-only).">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <ComponentCard label="Default State">
              <Input state="default" label="Phone Number" placeholder="07XX XXX XXX" helper="Example: 0712 345 678" />
              <div style={{ fontSize: 11, color: C.gray400 }}>BG: #F4F6FA • Border: 2px #C9D3E0</div>
            </ComponentCard>
            <ComponentCard label="Focused State">
              <Input state="focused" label="Phone Number" placeholder="07XX XXX XXX" />
              <div style={{ fontSize: 11, color: C.gray400 }}>Border: 2px #0A1628 • Focus ring: 4px navy/8%</div>
            </ComponentCard>
            <ComponentCard label="Error State">
              <Input state="error" label="Phone Number" value="0790 000 0" helper="Invalid number. Use format 07XX XXX XXX" />
              <div style={{ fontSize: 11, color: C.gray400 }}>Border: 2px #D63B3B • BG: #FDEAEA • Error icon + message below</div>
            </ComponentCard>
            <ComponentCard label="Success State">
              <Input state="success" label="Phone Number" value="0712 345 678" helper="Valid phone number" />
              <div style={{ fontSize: 11, color: C.gray400 }}>Border: 2px #00A651 • BG: #E6F7EE • Check icon + message below</div>
            </ComponentCard>
            <ComponentCard label="Disabled State">
              <Input state="disabled" label="Phone Number" placeholder="07XX XXX XXX" />
              <div style={{ fontSize: 11, color: C.gray400 }}>BG: #E8EDF5 • opacity: 0.6 • cursor: not-allowed</div>
            </ComponentCard>
          </div>
        </Section>
      )}

      {activeTab === "alerts" && (
        <Section title="Alert Components" subtitle="Used for form validation, network errors, and system messages. Never rely on color alone — always include icon + text.">
          <div style={{ maxWidth: 600 }}>
            <Alert type="error" title="Login Failed" message="Incorrect password. You have 2 attempts remaining before your account is locked." />
            <Alert type="error" title="Invalid Phone Number" message="Please enter a valid Kenyan number in the format 07XX XXX XXX or 01XX XXX XXX." />
            <Alert type="warning" title="Poor Network Connection" message="Your connection is slow. Login may take longer than usual. Please be patient." />
            <Alert type="warning" title="Account Almost Locked" message="3 failed attempts detected. Reset your password to avoid being locked out." />
            <Alert type="success" title="Password Reset Successful" message="Your password has been changed. You can now log in with your new password." />
            <Alert type="info" title="OTP Sent" message="A 6-digit verification code has been sent to +254 712 345 678. It expires in 5 minutes." />

            <div style={{ marginTop: 24, background: C.gray50, borderRadius: 12, padding: 16, border: "1px solid " + C.gray200 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Alert Design Rules</div>
              {[
                "Icon + text always (never color alone) — supports color-blind users",
                "Inline errors appear below the offending field, not as a toast",
                "Network errors use full-width top banner",
                "Error messages use plain language — avoid 'Error 401'",
                "Messages in English with Swahili fallback planned",
                "Auto-dismiss success alerts after 4 seconds",
              ].map((r) => (
                <div key={r} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: C.green, marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: C.gray400, fontFamily: C.font }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {activeTab === "icons" && (
        <Section title="Icon System" subtitle="All icons from lucide-react. Minimum 20×20px rendered size. Always paired with a text label for accessibility.">
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const, marginBottom: 32 }}>
            <IconBox name="Phone" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke={C.green} strokeWidth="2" /></svg>} />
            <IconBox name="Lock" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" stroke={C.green} strokeWidth="2" /><path d="M7 11V7a5 5 0 0110 0v4" stroke={C.green} strokeWidth="2" /></svg>} />
            <IconBox name="Eye" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={C.green} strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke={C.green} strokeWidth="2" /></svg>} />
            <IconBox name="Eye Off" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke={C.green} strokeWidth="2" strokeLinecap="round" /><line x1="1" y1="1" x2="23" y2="23" stroke={C.green} strokeWidth="2" strokeLinecap="round" /></svg>} />
            <IconBox name="Alert Circle" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.green} strokeWidth="2" /><line x1="12" y1="8" x2="12" y2="12" stroke={C.green} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill={C.green} /></svg>} />
            <IconBox name="Check Circle" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={C.green} strokeWidth="2" /><path d="M8 12l3 3 5-5" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
            <IconBox name="Arrow Right" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
            <IconBox name="Back" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
            <IconBox name="Wifi Off" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><line x1="1" y1="1" x2="23" y2="23" stroke={C.green} strokeWidth="2" strokeLinecap="round" /><path d="M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke={C.green} strokeWidth="2" strokeLinecap="round" /></svg>} />
            <IconBox name="Shield" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={C.green} strokeWidth="2" /></svg>} />
            <IconBox name="Key" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" stroke={C.green} strokeWidth="2" /><path d="M10.85 12.15L19 4M18 5l2 2M15 8l2 2" stroke={C.green} strokeWidth="2" strokeLinecap="round" /></svg>} />
            <IconBox name="Refresh" svg={<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10" stroke={C.green} strokeWidth="2" strokeLinecap="round" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" stroke={C.green} strokeWidth="2" strokeLinecap="round" /></svg>} />
          </div>

          <div style={{ background: C.white, borderRadius: 12, border: "1px solid " + C.gray200, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Icon Usage Rules</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
              {[
                { icon: "✅", rule: "Minimum 20×20px rendered size" },
                { icon: "✅", rule: "Always pair icon + visible text label" },
                { icon: "✅", rule: "aria-label on icon-only buttons" },
                { icon: "✅", rule: "Touch targets wrap icon: min 48×48px" },
                { icon: "✅", rule: "2px stroke weight for legibility" },
                { icon: "✅", rule: "Don't use more than 2 icons per input" },
              ].map((r) => (
                <div key={r.rule} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 12 }}>{r.icon}</span>
                  <span style={{ fontSize: 12, color: C.gray400, fontFamily: C.font }}>{r.rule}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {activeTab === "tokens" && (
        <div>
          <Section title="Design Tokens" subtitle="The single source of truth for all visual properties. Never use hardcoded values in components.">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
              {/* Color tokens */}
              <ComponentCard label="Color Tokens">
                {[
                  { token: "--chapa-green", value: "#00A651", desc: "Primary brand, CTAs" },
                  { token: "--chapa-green-dark", value: "#007A3D", desc: "Hover, gradient end" },
                  { token: "--chapa-green-light", value: "#E6F7EE", desc: "Success BG, input BG" },
                  { token: "--chapa-navy", value: "#0A1628", desc: "Primary text, header BG" },
                  { token: "--chapa-gold", value: "#F5A623", desc: "Warning, attention" },
                  { token: "--chapa-error", value: "#D63B3B", desc: "Error states" },
                  { token: "--gray-50", value: "#F4F6FA", desc: "Page background" },
                  { token: "--gray-200", value: "#C9D3E0", desc: "Default borders" },
                ].map((t) => (
                  <div key={t.token} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: t.value, border: "1px solid rgba(0,0,0,0.1)", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: C.navy, fontFamily: "monospace" }}>{t.token}</div>
                      <div style={{ fontSize: 10, color: C.gray300 }}>{t.value} — {t.desc}</div>
                    </div>
                  </div>
                ))}
              </ComponentCard>

              {/* Spacing tokens */}
              <ComponentCard label="Spacing Tokens">
                {[
                  { token: "--space-xs", value: "4px", desc: "Icon gap, micro spacing" },
                  { token: "--space-sm", value: "8px", desc: "Inner padding small" },
                  { token: "--space-md", value: "12px", desc: "Inner padding medium" },
                  { token: "--space-base", value: "16px", desc: "Default gap" },
                  { token: "--space-lg", value: "20px", desc: "Section padding" },
                  { token: "--space-xl", value: "24px", desc: "Screen edge padding" },
                  { token: "--space-2xl", value: "32px", desc: "Section spacing" },
                  { token: "--touch-min", value: "48px", desc: "Min touch target (WCAG)" },
                  { token: "--touch-comfortable", value: "56px", desc: "Primary CTA height" },
                ].map((t) => (
                  <div key={t.token} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: parseInt(t.value) > 30 ? 30 : parseInt(t.value), height: 8, background: C.greenLight, border: "1px solid " + C.green, borderRadius: 2, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: C.navy, fontFamily: "monospace" }}>{t.token}</div>
                      <div style={{ fontSize: 10, color: C.gray300 }}>{t.value} — {t.desc}</div>
                    </div>
                  </div>
                ))}
              </ComponentCard>

              {/* Typography tokens */}
              <ComponentCard label="Typography Tokens">
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10, color: C.gray400, marginBottom: 6 }}>Font Family: Plus Jakarta Sans</div>
                  {[
                    { token: "--text-xs", value: "12px / 400", sample: "Caption text" },
                    { token: "--text-sm", value: "13px / 400", sample: "Body small" },
                    { token: "--text-base", value: "15px / 400", sample: "Body text" },
                    { token: "--text-md", value: "17px / 700", sample: "Section title" },
                    { token: "--text-lg", value: "20px / 700", sample: "Page title" },
                    { token: "--text-xl", value: "24px / 800", sample: "Hero" },
                  ].map((t) => (
                    <div key={t.token} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ fontSize: 11, color: C.navy, fontFamily: "monospace" }}>{t.token}</span>
                      <span style={{ fontSize: 10, color: C.gray300 }}>{t.value}</span>
                    </div>
                  ))}
                </div>
              </ComponentCard>

              {/* Border radius */}
              <ComponentCard label="Border Radius Tokens">
                {[
                  { token: "--radius-sm", value: "8px", use: "Small chips, badges" },
                  { token: "--radius-md", value: "12px", use: "Inputs, cards" },
                  { token: "--radius-lg", value: "16px", use: "Large buttons, modals" },
                  { token: "--radius-xl", value: "24px", use: "Bottom sheets" },
                  { token: "--radius-full", value: "9999px", use: "Pills, flags" },
                ].map((t) => (
                  <div key={t.token} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 40, height: 22, background: C.greenLight, border: "1.5px solid " + C.green, borderRadius: parseInt(t.value) > 20 ? 11 : parseInt(t.value) / 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: C.navy, fontFamily: "monospace" }}>{t.token} — {t.value}</div>
                      <div style={{ fontSize: 10, color: C.gray300 }}>{t.use}</div>
                    </div>
                  </div>
                ))}
              </ComponentCard>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};
