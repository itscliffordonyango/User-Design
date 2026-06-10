import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { DesignSystem } from "./components/design-system";
import { WireframesPage } from "./components/wireframes-page";
import { HighFidelityPage } from "./components/high-fidelity-page";
import { InteractivePrototype } from "./components/interactive-prototype";
import { AccessibilitySpecs } from "./components/accessibility-specs";
import { ResponsiveDemo } from "./components/responsive-demo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DesignSystem },
      { path: "wireframes", Component: WireframesPage },
      { path: "high-fidelity", Component: HighFidelityPage },
      { path: "prototype", Component: InteractivePrototype },
      { path: "accessibility", Component: AccessibilitySpecs },
      { path: "responsive", Component: ResponsiveDemo },
    ],
  },
]);
