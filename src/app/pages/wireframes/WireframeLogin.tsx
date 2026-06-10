import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

export function WireframeLogin() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white border-b p-4 flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded">
          <Home className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold">Wireframe: Login Screen</h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mobile Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">Mobile Preview (360 × 800px)</h2>
            <div className="bg-white rounded-lg shadow-lg mx-auto" style={{ width: 360, minHeight: 800 }}>
              {/* Wireframe Login Screen */}
              <div className="p-6 space-y-6">
                {/* Logo Area */}
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-24 h-24 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">LOGO</span>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-2">
                  <div className="h-8 bg-gray-300 rounded mx-auto" style={{ width: 200 }}></div>
                  <div className="h-4 bg-gray-200 rounded mx-auto" style={{ width: 280 }}></div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded" style={{ width: 180 }}></div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 100 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <div className="h-4 bg-gray-400 rounded" style={{ width: 140 }}></div>
                </div>

                {/* Login Button */}
                <div className="h-12 bg-gray-800 rounded-lg"></div>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="h-4 bg-gray-200 rounded" style={{ width: 40 }}></div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Create Account Link */}
                <div className="text-center">
                  <div className="h-4 bg-gray-300 rounded mx-auto" style={{ width: 200 }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Annotations */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Layout Specifications</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-[#00A651]">Logo Area</p>
                  <p className="text-gray-600">96px × 96px • Top padding: 32px</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651]">Welcome Text</p>
                  <p className="text-gray-600">Heading: 32px • Subtext: 16px • Center aligned</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651]">Input Fields</p>
                  <p className="text-gray-600">Height: 56px (48px minimum) • Full width • 2px border</p>
                  <p className="text-gray-600">Left icon: 20px • Right icon/toggle: 24px</p>
                  <p className="text-gray-600">Horizontal padding: 16px • Gap: 12px</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651]">Login Button</p>
                  <p className="text-gray-600">Height: 48px (minimum touch target) • Full width</p>
                  <p className="text-gray-600">Font: 16px semibold • Rounded: 8px</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651]">Links</p>
                  <p className="text-gray-600">Forgot Password: Right-aligned • 16px</p>
                  <p className="text-gray-600">Create Account: Center-aligned • 16px</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651]">Spacing</p>
                  <p className="text-gray-600">Container padding: 24px</p>
                  <p className="text-gray-600">Element gap: 24px</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Component Hierarchy</h3>
              <div className="space-y-2 text-sm font-mono">
                <div>└─ Container (360px × 800px)</div>
                <div className="pl-4">├─ Logo Section</div>
                <div className="pl-4">├─ Welcome Text Section</div>
                <div className="pl-4">├─ Phone Input Component</div>
                <div className="pl-8">├─ Label</div>
                <div className="pl-8">├─ Input Field (with icon)</div>
                <div className="pl-8">└─ Helper Text</div>
                <div className="pl-4">├─ Password Input Component</div>
                <div className="pl-8">├─ Label</div>
                <div className="pl-8">├─ Input Field (with icons)</div>
                <div className="pl-8">└─ Toggle Button</div>
                <div className="pl-4">├─ Forgot Password Link</div>
                <div className="pl-4">├─ Primary Button</div>
                <div className="pl-4">├─ Divider</div>
                <div className="pl-4">└─ Create Account Link</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">User Flow</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00A651] text-white flex items-center justify-center font-bold">1</div>
                  <p>User enters phone number</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00A651] text-white flex items-center justify-center font-bold">2</div>
                  <p>User enters password/PIN</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00A651] text-white flex items-center justify-center font-bold">3</div>
                  <p>User taps Login button</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">?</div>
                  <p>Alternative: Tap "Forgot Password"</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">?</div>
                  <p>Alternative: Tap "Create Account"</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="/wireframes/error"
                className="flex-1 px-4 py-3 bg-[#00A651] text-white rounded-lg hover:bg-[#008F45] transition-colors text-center font-medium"
              >
                View Error States →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
