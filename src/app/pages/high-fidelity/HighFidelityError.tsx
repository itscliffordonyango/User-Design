import { useState } from "react";
import { Link } from "react-router";
import { Home } from "lucide-react";
import { ChapaLogo } from "../../components/chapapay/ChapaLogo";
import { ChapaInput } from "../../components/chapapay/ChapaInput";
import { ChapaPrimaryButton } from "../../components/chapapay/ChapaPrimaryButton";
import { ChapaAlert } from "../../components/chapapay/ChapaAlert";

export function HighFidelityError() {
  const [activeError, setActiveError] = useState<"phone" | "password" | "network">("phone");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded">
            <Home className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold">High-Fidelity: Error States</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveError("phone")}
            className={`px-3 py-1 text-sm rounded ${activeError === "phone" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          >
            Phone Error
          </button>
          <button
            onClick={() => setActiveError("password")}
            className={`px-3 py-1 text-sm rounded ${activeError === "password" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          >
            Password Error
          </button>
          <button
            onClick={() => setActiveError("network")}
            className={`px-3 py-1 text-sm rounded ${activeError === "network" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
          >
            Network Error
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mobile Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Error State: {activeError === "phone" ? "Invalid Phone" : activeError === "password" ? "Incorrect Password" : "Network Error"}
            </h2>
            
            <div className="bg-white rounded-2xl shadow-2xl mx-auto overflow-hidden" style={{ width: 360 }}>
              {/* Status Bar */}
              <div className="bg-[#00A651] h-6 px-4 flex items-center justify-between text-white text-xs">
                <span>9:41</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 border border-white rounded-sm"></div>
                </div>
              </div>

              {/* Login Screen with Errors */}
              <div className="p-6 bg-gradient-to-b from-[#00A651]/5 to-white min-h-[774px]">
                <div className="flex justify-center pt-8 pb-6">
                  <ChapaLogo className="w-28 h-28" />
                </div>

                {/* Alert for password/network errors */}
                {activeError === "password" && (
                  <div className="mb-6">
                    <ChapaAlert variant="error">
                      Incorrect password. You have 2 attempts remaining before your account is temporarily locked.
                    </ChapaAlert>
                  </div>
                )}

                {activeError === "network" && (
                  <div className="mb-6">
                    <ChapaAlert variant="warning">
                      Connection failed. Please check your internet connection and try again.
                    </ChapaAlert>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Karibu ChapaPay
                  </h1>
                  <p className="text-base text-gray-600">
                    Send money, pay bills, save securely
                  </p>
                </div>

                <div className="space-y-5">
                  <ChapaInput
                    label="Phone Number"
                    type="tel"
                    icon="phone"
                    placeholder="0712 345 678"
                    value={activeError === "phone" ? "071234" : "0712345678"}
                    error={activeError === "phone" ? "Please enter a valid 10-digit phone number starting with 07 or 01" : undefined}
                    success={activeError !== "phone"}
                    readOnly
                  />

                  <ChapaInput
                    label="Password / PIN"
                    type="password"
                    icon="lock"
                    placeholder="Enter your password"
                    showPasswordToggle
                    value="••••••••"
                    error={activeError === "password" ? "Password is incorrect. Please try again." : undefined}
                    readOnly
                  />

                  <div className="flex justify-end">
                    <Link
                      to="/high-fidelity/forgot-password"
                      className={`text-base font-medium underline focus:outline-none focus:ring-2 focus:ring-[#00A651] rounded px-2 py-1 touch-manipulation ${
                        activeError === "password" 
                          ? "text-blue-600 hover:text-blue-700 animate-pulse" 
                          : "text-[#00A651] hover:text-[#008F45]"
                      }`}
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <ChapaPrimaryButton
                    variant={activeError === "phone" ? "disabled" : "primary"}
                    size="large"
                    disabled={activeError === "phone"}
                  >
                    {activeError === "network" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Retrying...
                      </span>
                    ) : (
                      "Login"
                    )}
                  </ChapaPrimaryButton>

                  <div className="flex items-center gap-3 py-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Don't have an account?{" "}
                      <button className="font-semibold text-[#00A651] hover:text-[#008F45] underline">
                        Create Account
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Specifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Error Message Guidelines</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-red-600 mb-2">❌ Bad Error Messages</p>
                  <div className="space-y-1 text-gray-600 bg-red-50 p-3 rounded">
                    <p>• "Login failed"</p>
                    <p>• "Invalid credentials"</p>
                    <p>• "Error 401"</p>
                    <p>• "Something went wrong"</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-green-600 mb-2">✓ Good Error Messages</p>
                  <div className="space-y-1 text-gray-600 bg-green-50 p-3 rounded">
                    <p>• "Please enter a valid 10-digit phone number starting with 07 or 01"</p>
                    <p>• "Incorrect password. You have 2 attempts remaining"</p>
                    <p>• "Connection failed. Please check your internet and try again"</p>
                    <p>• "This phone number is not registered. Please create an account"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Phone Number Validation Rules</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Must be exactly 10 digits</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Must start with 07 (Safaricom, Airtel) or 01 (Telkom)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Auto-format as user types: 0712 345 678</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Real-time validation (on blur)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Show green checkmark when valid</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00A651]">✓</span>
                  <p className="text-gray-600">Disable login button until valid</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Password Error Behavior</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">1.</span>
                  <p className="text-gray-600">Show error message below password field</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">2.</span>
                  <p className="text-gray-600">Display remaining attempts (3 total)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">3.</span>
                  <p className="text-gray-600">Make "Forgot Password" link more prominent (blue, pulse animation)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">4.</span>
                  <p className="text-gray-600">Show alert banner at top for added visibility</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">5.</span>
                  <p className="text-gray-600">Don't clear the password field (let user see length)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">6.</span>
                  <p className="text-gray-600">After 3 failed attempts: 15-minute lockout</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Network Error Handling</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-gray-600">Show warning (not error) for network issues</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-gray-600">Automatically retry up to 3 times with exponential backoff</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-gray-600">Show loading spinner on button during retry</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-gray-600">Preserve form data during network issues</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-gray-600">Provide option to continue offline if applicable</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="/high-fidelity/login"
                className="flex-1 px-4 py-3 bg-white border-2 border-[#00A651] text-[#00A651] rounded-lg hover:bg-[#00A651]/5 transition-colors text-center font-medium"
              >
                ← Back to Login
              </Link>
              <Link
                to="/high-fidelity/forgot-password"
                className="flex-1 px-4 py-3 bg-[#00A651] text-white rounded-lg hover:bg-[#008F45] transition-colors text-center font-medium"
              >
                Forgot Password →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
