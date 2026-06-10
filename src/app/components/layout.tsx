import { Outlet, Link, useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function Layout() {
  const location = useLocation();
  
  const tabs = [
    { path: "/", label: "Design System" },
    { path: "/wireframes", label: "Wireframes" },
    { path: "/high-fidelity", label: "High-Fidelity" },
    { path: "/prototype", label: "Interactive Prototype" },
    { path: "/accessibility", label: "Accessibility" },
    { path: "/responsive", label: "Responsive" },
  ];

  const getCurrentTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab?.path || "/";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ChapaPay Login Redesign</h1>
              <p className="text-sm text-gray-600 mt-1">Complete Figma Design Project • 2024</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Kenya Fintech</div>
              <div className="text-xs text-gray-500">500,000+ Users</div>
            </div>
          </div>
          
          <Tabs value={getCurrentTab()} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              {tabs.map((tab) => (
                <Link key={tab.path} to={tab.path}>
                  <TabsTrigger value={tab.path} className="whitespace-nowrap">
                    {tab.label}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}
