import { useState } from "react";
import { WireframePage } from "./components/chapapay/WireframePage";
import { HighFidelityPage } from "./components/chapapay/HighFidelityPage";
import { DesignSystemPage } from "./components/chapapay/DesignSystemPage";
import { PrototypePage } from "./components/chapapay/PrototypePage";
import { AccessibilityPage } from "./components/chapapay/AccessibilityPage";

/* MARKER-MAKE-KIT-INVOKED */
/* No @make-kits package installed — using Tailwind + Radix primitives */

const C = {
  green: "#00A651",
  greenDark: "#007A3D",
  greenLight: "#E6F7EE",
  navy: "#0A1628",
  navyMid: "#162340",
  white: "#FFFFFF",
  gray50: "#F4F6FA",
  gray100: "#E8EDF5",
  gray200: "#C9D3E0",
  gray400: "#6B7B8E",
  font: "'Plus Jakarta Sans', sans-serif",
};

type Tab = "wireframes" | "hifi" | "design-system" | "prototype" | "accessibility";

const tabs: { id: Tab; label: string; icon: string; desc: string }[] = [
  { id: "wireframes", label: "Wireframes", icon: "⬜", desc: "Lo-fi screens A, B & Forgot flow" },
  { id: "hifi", label: "High-Fidelity", icon: "✨", desc: "Polished mobile UI + specs" },
  { id: "design-system", label: "Design System", icon: "🎨", desc: "Components, tokens & icons" },
  { id: "prototype", label: "Prototype", icon: "▶️", desc: "Interactive clickthrough" },
  { id: "accessibility", label: "Accessibility", icon: "♿", desc: "WCAG AA + persona mapping" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("wireframes");

  return (
    <div style={{ minHeight: "100vh", background: C.gray50, fontFamily: C.font }}>
      {/* Top header */}
      <header style={{
        background: C.navy,
        padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
        position: "sticky" as const, top: 0, zIndex: 100,
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 11,
            background: "linear-gradient(135deg," + C.green + " 0%," + C.greenDark + " 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,166,81,0.4)"
          }}>
            <span style={{ color: C.white, fontWeight: 800, fontSize: 13 }}>CP</span>
          </div>
          <div>
            <div style={{ color: C.white, fontWeight: 800, fontSize: 16 }}>ChapaPay</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Login Redesign — Figma Design Document</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {[
            { label: "Login Success Rate", current: "62%", target: "85%" },
            { label: "Avg Login Time", current: "45s", target: "15s" },
          ].map((m) => (
            <div key={m.label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "6px 14px", textAlign: "center" as const }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{m.label}</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 2 }}>
                <span style={{ color: "#FF6B6B", fontSize: 13, fontWeight: 700 }}>{m.current}</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>→</span>
                <span style={{ color: C.green, fontSize: 13, fontWeight: 700 }}>{m.target}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Tab navigation */}
      <div style={{
        background: C.white,
        borderBottom: "1px solid " + C.gray200,
        padding: "0 32px",
        display: "flex", gap: 0,
        overflowX: "auto" as const,
        position: "sticky" as const, top: 64, zIndex: 99,
      }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              height: 56, padding: "0 20px", border: "none", cursor: "pointer", background: "none",
              borderBottom: "3px solid " + (activeTab === t.id ? C.green : "transparent"),
              color: activeTab === t.id ? C.navy : C.gray400,
              fontSize: 14, fontWeight: activeTab === t.id ? 700 : 500, fontFamily: C.font,
              display: "flex", alignItems: "center", gap: 8,
              transition: "all 0.15s ease",
              whiteSpace: "nowrap" as const,
            }}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab description bar */}
      <div style={{ background: C.greenLight, borderBottom: "1px solid rgba(0,166,81,0.2)", padding: "10px 32px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: C.green }} />
        <span style={{ fontSize: 13, color: C.greenDark, fontWeight: 500 }}>
          {tabs.find((t) => t.id === activeTab)?.desc}
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 16 }}>
          {["360px ✓", "390px ✓", "414px ✓"].map((r) => (
            <span key={r} style={{ fontSize: 11, color: C.greenDark, fontWeight: 600 }}>{r}</span>
          ))}
          <span style={{ fontSize: 11, color: C.greenDark, fontWeight: 600 }}>WCAG AA ✓</span>
        </div>
      </div>

      {/* Main content */}
      <main style={{ padding: "40px 32px", maxWidth: 1400, margin: "0 auto" }}>
        {activeTab === "wireframes" && <WireframePage />}
        {activeTab === "hifi" && <HighFidelityPage />}
        {activeTab === "design-system" && <DesignSystemPage />}
        {activeTab === "prototype" && <PrototypePage />}
        {activeTab === "accessibility" && <AccessibilityPage />}
      </main>

      {/* Footer */}
      <footer style={{ background: C.navy, padding: "24px 32px", marginTop: 40 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 16 }}>
          <div>
            <div style={{ color: C.white, fontWeight: 700, fontSize: 14 }}>ChapaPay Login Redesign</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>
              UX Design Document · Clifford Onyango · June 2026
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Screens", value: "8" },
              { label: "Components", value: "24+" },
              { label: "WCAG Level", value: "AA" },
              { label: "Target Width", value: "360px" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" as const }}>
                <div style={{ color: C.green, fontWeight: 800, fontSize: 16 }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
