import { Link } from "react-router";
import { Home } from "lucide-react";

export function WireframeForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white border-b p-4 flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded">
          <Home className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold">Wireframe: Forgot Password Flow</h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Flow Diagram */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-6">Complete Password Recovery Flow</h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <div className="w-32 h-24 border-2 border-gray-400 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-600 font-bold text-xs">STEP 1</span>
              </div>
              <p className="text-sm font-medium">Enter Phone</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-32 h-24 border-2 border-gray-400 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-600 font-bold text-xs">STEP 2</span>
              </div>
              <p className="text-sm font-medium">Verify OTP</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-32 h-24 border-2 border-gray-400 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-600 font-bold text-xs">STEP 3</span>
              </div>
              <p className="text-sm font-medium">New Password</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-32 h-24 border-2 border-green-500 bg-green-50 rounded-lg flex items-center justify-center mb-2">
                <span className="text-green-600 font-bold text-xs">SUCCESS</span>
              </div>
              <p className="text-sm font-medium">Login</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1: Enter Phone Number */}
          <div>
            <h3 className="text-lg font-bold mb-4">Step 1: Enter Phone Number</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Back Button */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded" style={{ width: 60 }}></div>
                </div>

                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-center space-y-3">
                  <div className="h-7 bg-gray-800 rounded mx-auto" style={{ width: 200 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 280 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 240 }}></div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded" style={{ width: 220 }}></div>
                </div>

                {/* Continue Button */}
                <div className="h-12 bg-gray-800 rounded-lg"></div>

                {/* Additional Help */}
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="text-center space-y-2">
                    <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 180 }}></div>
                    <div className="h-4 bg-blue-400 rounded mx-auto" style={{ width: 140 }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm text-sm">
              <p className="font-semibold mb-2">Interactions:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Back button returns to Login</li>
                <li>• Phone validated in real-time</li>
                <li>• Button disabled until valid phone entered</li>
                <li>• "Contact Support" opens help dialog</li>
              </ul>
            </div>
          </div>

          {/* Step 2: OTP Verification */}
          <div>
            <h3 className="text-lg font-bold mb-4">Step 2: Verify OTP</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Back Button */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded" style={{ width: 60 }}></div>
                </div>

                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-center space-y-3">
                  <div className="h-7 bg-gray-800 rounded mx-auto" style={{ width: 180 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 280 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 200 }}></div>
                </div>

                {/* OTP Input Boxes */}
                <div className="flex justify-center gap-3">
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                  <div className="w-14 h-14 border-2 border-gray-400 rounded-lg bg-white"></div>
                </div>

                {/* Timer */}
                <div className="text-center">
                  <div className="h-4 bg-gray-300 rounded mx-auto" style={{ width: 140 }}></div>
                </div>

                {/* Verify Button */}
                <div className="h-12 bg-gray-800 rounded-lg"></div>

                {/* Resend OTP */}
                <div className="text-center space-y-2">
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 160 }}></div>
                  <div className="h-4 bg-blue-400 rounded mx-auto" style={{ width: 120 }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm text-sm">
              <p className="font-semibold mb-2">Features:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• 6-digit OTP code</li>
                <li>• Auto-focus next box</li>
                <li>• 60-second countdown timer</li>
                <li>• Resend option after timer expires</li>
                <li>• Large touch targets (56px boxes)</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Create New Password */}
          <div>
            <h3 className="text-lg font-bold mb-4">Step 3: Create New Password</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-center space-y-3">
                  <div className="h-7 bg-gray-800 rounded mx-auto" style={{ width: 220 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 280 }}></div>
                </div>

                {/* New Password Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded flex-1"></div>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 140 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Reset Password Button */}
                <div className="h-12 bg-gray-800 rounded-lg"></div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm text-sm">
              <p className="font-semibold mb-2">Password Requirements:</p>
              <ul className="space-y-1 text-gray-600">
                <li>✓ At least 8 characters</li>
                <li>✓ Contains a number</li>
                <li>✓ Contains a special character</li>
                <li>• Real-time validation</li>
                <li>• Visual checkmarks when met</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Forgot Password Flow Design Decisions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#00A651] mb-1">1. Clear Progress Indication</p>
                <p className="text-gray-600">
                  Users always know which step they're on (1 of 3, 2 of 3, etc.) reducing confusion and abandonment.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#00A651] mb-1">2. SMS OTP Instead of Email</p>
                <p className="text-gray-600">
                  Phone-based verification is faster and more accessible for Kenyan users who may not regularly check email.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#00A651] mb-1">3. Large OTP Input Boxes</p>
                <p className="text-gray-600">
                  56px touch targets for each digit make it easy for users with large fingers to enter codes accurately.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#00A651] mb-1">4. Visual Password Requirements</p>
                <p className="text-gray-600">
                  Real-time feedback with checkmarks helps users create valid passwords on the first try.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#00A651] mb-1">5. Resend OTP Option</p>
                <p className="text-gray-600">
                  Accounts for SMS delivery delays common in areas with poor connectivity.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#00A651] mb-1">6. Contact Support Escape Hatch</p>
                <p className="text-gray-600">
                  Users who don't have access to their phone number can still get help instead of being locked out.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to="/wireframes/error"
            className="flex-1 px-4 py-3 bg-white border-2 border-[#00A651] text-[#00A651] rounded-lg hover:bg-[#00A651]/5 transition-colors text-center font-medium"
          >
            ← Back to Error States
          </Link>
          <Link
            to="/high-fidelity/login"
            className="flex-1 px-4 py-3 bg-[#00A651] text-white rounded-lg hover:bg-[#008F45] transition-colors text-center font-medium"
          >
            View High-Fidelity Mockups →
          </Link>
        </div>
      </div>
    </div>
  );
}
