import { useState } from "react";
import { Link } from "react-router";
import { Home, Smartphone } from "lucide-react";
import { ChapaLogo } from "../../components/chapapay/ChapaLogo";
import { ChapaInput } from "../../components/chapapay/ChapaInput";
import { ChapaPrimaryButton } from "../../components/chapapay/ChapaPrimaryButton";

export function HighFidelityLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [viewportWidth, setViewportWidth] = useState<360 | 390 | 414>(360);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded">
            <Home className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold">High-Fidelity: Login Screen</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewportWidth(360)}
            className={`px-3 py-1 text-sm rounded ${viewportWidth === 360 ? "bg-[#00A651] text-white" : "bg-gray-200"}`}
          >
            360px
          </button>
          <button
            onClick={() => setViewportWidth(390)}
            className={`px-3 py-1 text-sm rounded ${viewportWidth === 390 ? "bg-[#00A651] text-white" : "bg-gray-200"}`}
          >
            390px
          </button>
          <button
            onClick={() => setViewportWidth(414)}
            className={`px-3 py-1 text-sm rounded ${viewportWidth === 414 ? "bg-[#00A651] text-white" : "bg-gray-200"}`}
          >
            414px
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mobile Preview */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-bold">
                Interactive Prototype ({viewportWidth}px)
              </h2>
            </div>
            
            <div 
              className="bg-white rounded-2xl shadow-2xl mx-auto overflow-hidden"
              style={{ width: viewportWidth, minHeight: 800 }}
            >
              {/* Status Bar */}
              <div className="bg-[#00A651] h-6 px-4 flex items-center justify-between text-white text-xs">
                <span>9:41</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 border border-white rounded-sm"></div>
                  <div className="w-4 h-3 border border-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Login Screen */}
              <div className="p-6 bg-gradient-to-b from-[#00A651]/5 to-white min-h-[774px]">
                {/* Logo */}
                <div className="flex justify-center pt-8 pb-6">
                  <ChapaLogo className="w-28 h-28" />
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Karibu ChapaPay
                  </h1>
                  <p className="text-base text-gray-600">
                    Send money, pay bills, save securely
                  </p>
                </div>

                {/* Login Form */}
                <div className="space-y-5">
                  <ChapaInput
                    label="Phone Number"
                    type="tel"
                    icon="phone"
                    placeholder="0712 345 678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    aria-label="Enter your phone number"
                  />

                  <ChapaInput
                    label="Password / PIN"
                    type="password"
                    icon="lock"
                    placeholder="Enter your password"
                    showPasswordToggle
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Enter your password or PIN"
                  />

                  <div className="flex justify-end">
                    <Link
                      to="/high-fidelity/forgot-password"
                      className="text-base font-medium text-[#00A651] hover:text-[#008F45] underline focus:outline-none focus:ring-2 focus:ring-[#00A651] rounded px-2 py-1 touch-manipulation"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <ChapaPrimaryButton
                    variant="primary"
                    size="large"
                    onClick={() => alert("Login successful!")}
                  >
                    Login
                  </ChapaPrimaryButton>

                  <div className="flex items-center gap-3 py-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Don't have an account?{" "}
                      <button className="font-semibold text-[#00A651] hover:text-[#008F45] underline focus:outline-none focus:ring-2 focus:ring-[#00A651] rounded px-2 py-1 touch-manipulation">
                        Create Account
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Specifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#00A651] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold">Primary Green</p>
                    <p className="text-sm text-gray-600">#00A651</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#008F45] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold">Green Hover</p>
                    <p className="text-sm text-gray-600">#008F45</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#007A3D] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold">Green Active</p>
                    <p className="text-sm text-gray-600">#007A3D</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold">Accent Gold</p>
                    <p className="text-sm text-gray-600">#FFD700</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-300"></div>
                  <div>
                    <p className="font-semibold">Background</p>
                    <p className="text-sm text-gray-600">#FFFFFF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold mb-1">Karibu ChapaPay</p>
                  <p className="text-sm text-gray-600">Heading 1: 32px / Bold / Leading 40px</p>
                </div>
                <div>
                  <p className="text-base mb-1">Send money, pay bills, save securely</p>
                  <p className="text-sm text-gray-600">Body: 16px / Regular / Leading 24px</p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-1">Login Button</p>
                  <p className="text-sm text-gray-600">Button: 16px / Semibold</p>
                </div>
                <div>
                  <p className="text-sm mb-1">Helper text and labels</p>
                  <p className="text-sm text-gray-600">Small: 14px / Medium / Leading 20px</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Spacing System</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Container padding</span>
                  <span className="font-semibold">24px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Element gap (vertical)</span>
                  <span className="font-semibold">20px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Input height</span>
                  <span className="font-semibold">56px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Button height (large)</span>
                  <span className="font-semibold">56px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Button height (default)</span>
                  <span className="font-semibold">48px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Border radius (inputs/buttons)</span>
                  <span className="font-semibold">8px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Border width</span>
                  <span className="font-semibold">2px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Focus ring width</span>
                  <span className="font-semibold">4px</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Component States</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Input - Default</p>
                  <p className="text-gray-600">Border: #D1D5DB (gray-300) • Background: White</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Input - Focused</p>
                  <p className="text-gray-600">Border: #00A651 • Ring: #00A651/20</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Input - Error</p>
                  <p className="text-gray-600">Border: #EF4444 • Background: #FEE2E2</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Input - Success</p>
                  <p className="text-gray-600">Border: #10B981 • Background: #D1FAE5</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Button - Hover</p>
                  <p className="text-gray-600">Background darkens to #008F45</p>
                </div>
                <div>
                  <p className="font-semibold text-[#00A651] mb-1">Button - Disabled</p>
                  <p className="text-gray-600">Background: #D1D5DB • Text: #6B7280</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="/high-fidelity/error"
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
