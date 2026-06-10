import { Link } from "react-router";
import { Smartphone, Layers, Accessibility, Monitor, BookOpen } from "lucide-react";

export function DesignOverview() {
  const sections = [
    {
      title: "Low-Fidelity Wireframes",
      description: "Structural layouts showing information hierarchy and user flow",
      icon: Layers,
      links: [
        { to: "/wireframes/login", label: "Login Screen" },
        { to: "/wireframes/error", label: "Error States" },
        { to: "/wireframes/forgot-password", label: "Forgot Password Flow" },
      ],
    },
    {
      title: "High-Fidelity Mockups",
      description: "Polished fintech-grade mobile UI with brand styling",
      icon: Smartphone,
      links: [
        { to: "/high-fidelity/login", label: "Login Screen" },
        { to: "/high-fidelity/error", label: "Error States" },
        { to: "/high-fidelity/forgot-password", label: "Forgot Password Flow" },
      ],
    },
    {
      title: "Design System",
      description: "Reusable components with specifications and usage guidelines",
      icon: BookOpen,
      links: [{ to: "/design-system", label: "View Design System" }],
    },
    {
      title: "Accessibility Specifications",
      description: "WCAG AA compliance, touch targets, and inclusive design",
      icon: Accessibility,
      links: [{ to: "/accessibility", label: "View Accessibility Specs" }],
    },
    {
      title: "Responsive Layout Demo",
      description: "Responsive behavior across 360px, 390px, and 414px devices",
      icon: Monitor,
      links: [{ to: "/responsive", label: "View Responsive Demo" }],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#00A651] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">ChapaPay Login Redesign</h1>
          <p className="text-lg text-white/90">
            Complete Figma-Ready Design System & Prototype
          </p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Design Challenge</h3>
              <p className="text-gray-600 mb-3">
                Redesign the ChapaPay login experience to improve success rates from 62% to 85%
                and reduce login time from 45s to 15s.
              </p>
              <h3 className="font-semibold text-lg mb-2">Key Issues Addressed</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Phone number input validation</li>
                <li>• Password visibility toggle</li>
                <li>• Large, accessible touch targets (48px+)</li>
                <li>• Clear, specific error messages</li>
                <li>• Prominent Forgot Password option</li>
                <li>• Responsive layout for Android devices</li>
                <li>• High contrast for low vision users</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Target Users</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">Mary, 45 - Vegetable Trader</p>
                  <p className="text-gray-600">Low vision, needs large text & high contrast</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">James, 30 - Boda Boda Rider</p>
                  <p className="text-gray-600">Frequently forgets passwords, needs quick login</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">Peter, 52 - Farmer</p>
                  <p className="text-gray-600">Large fingers, limited English, slow internet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#00A651]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#00A651]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="px-4 py-2 bg-[#00A651] text-white rounded-lg hover:bg-[#008F45] transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Target Devices</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 360 × 800px (base)</li>
                <li>• 390 × 844px</li>
                <li>• 414 × 896px</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• WCAG AA compliant</li>
                <li>• 48px minimum touch targets</li>
                <li>• 16px minimum font size</li>
                <li>• 4.5:1 contrast ratio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Platform</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mobile Web</li>
                <li>• Chrome on Android</li>
                <li>• Progressive Enhancement</li>
                <li>• Touch-optimized</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
