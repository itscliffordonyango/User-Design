import { Link } from "react-router";
import { Home } from "lucide-react";

export function WireframeError() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white border-b p-4 flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded">
          <Home className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold">Wireframe: Error States</h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Error State 1: Invalid Phone Number */}
          <div>
            <h3 className="text-lg font-bold mb-4">1. Invalid Phone Number</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-2">
                  <div className="h-6 bg-gray-300 rounded mx-auto" style={{ width: 150 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 240 }}></div>
                </div>

                {/* Phone Number Input - ERROR STATE */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-red-500 bg-red-50 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-5 h-5 bg-red-400 rounded-full"></div>
                  </div>
                  {/* Error Message */}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="h-3 bg-red-400 rounded flex-1"></div>
                  </div>
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

                <div className="flex justify-end">
                  <div className="h-4 bg-gray-400 rounded" style={{ width: 140 }}></div>
                </div>

                {/* Login Button - Disabled */}
                <div className="h-12 bg-gray-400 rounded-lg"></div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
              <p className="text-sm font-semibold text-red-600 mb-2">Error Trigger:</p>
              <p className="text-sm text-gray-600">Phone number less than 10 digits or invalid format</p>
              <p className="text-sm font-semibold text-red-600 mb-2 mt-3">Error Message:</p>
              <p className="text-sm text-gray-600">"Please enter a valid 10-digit phone number starting with 07 or 01"</p>
            </div>
          </div>

          {/* Error State 2: Incorrect Password */}
          <div>
            <h3 className="text-lg font-bold mb-4">2. Incorrect Password</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Alert Banner */}
                <div className="border-2 border-red-300 bg-red-50 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-red-400 rounded" style={{ width: "100%" }}></div>
                    <div className="h-3 bg-red-400 rounded" style={{ width: "80%" }}></div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-2">
                  <div className="h-6 bg-gray-300 rounded mx-auto" style={{ width: 150 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 240 }}></div>
                </div>

                {/* Phone Number Input - SUCCESS */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-green-500 bg-green-50 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Password Input - ERROR STATE */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 100 }}></div>
                  <div className="h-14 border-2 border-red-500 bg-red-50 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                  {/* Error Message */}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="h-3 bg-red-400 rounded flex-1"></div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="h-4 bg-blue-400 rounded" style={{ width: 140 }}></div>
                </div>

                <div className="h-12 bg-gray-800 rounded-lg"></div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
              <p className="text-sm font-semibold text-red-600 mb-2">Error Trigger:</p>
              <p className="text-sm text-gray-600">Password does not match account</p>
              <p className="text-sm font-semibold text-red-600 mb-2 mt-3">Error Message:</p>
              <p className="text-sm text-gray-600">"Incorrect password. You have 2 attempts remaining."</p>
              <p className="text-sm font-semibold text-blue-600 mb-2 mt-3">Helpful Action:</p>
              <p className="text-sm text-gray-600">Forgot Password link becomes highlighted/blue</p>
            </div>
          </div>

          {/* Error State 3: Network Error */}
          <div>
            <h3 className="text-lg font-bold mb-4">3. Network Error</h3>
            <div className="bg-white rounded-lg shadow-lg" style={{ width: 360 }}>
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-4">
                  <div className="w-20 h-20 border-4 border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">LOGO</span>
                  </div>
                </div>

                {/* Alert Banner */}
                <div className="border-2 border-yellow-300 bg-yellow-50 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-yellow-400 rounded" style={{ width: "100%" }}></div>
                    <div className="h-3 bg-yellow-400 rounded" style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-2">
                  <div className="h-6 bg-gray-300 rounded mx-auto" style={{ width: 150 }}></div>
                  <div className="h-3 bg-gray-200 rounded mx-auto" style={{ width: 240 }}></div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" style={{ width: 120 }}></div>
                  <div className="h-14 border-2 border-gray-400 rounded-lg flex items-center px-4 gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                  </div>
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

                <div className="flex justify-end">
                  <div className="h-4 bg-gray-400 rounded" style={{ width: 140 }}></div>
                </div>

                {/* Login Button with Retry */}
                <div className="h-12 bg-gray-800 rounded-lg flex items-center justify-center gap-2 px-4">
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"></div>
                  <div className="h-4 bg-gray-600 rounded" style={{ width: 100 }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
              <p className="text-sm font-semibold text-yellow-600 mb-2">Error Trigger:</p>
              <p className="text-sm text-gray-600">No internet connection or server timeout</p>
              <p className="text-sm font-semibold text-yellow-600 mb-2 mt-3">Error Message:</p>
              <p className="text-sm text-gray-600">"Connection failed. Please check your internet and try again."</p>
              <p className="text-sm font-semibold text-blue-600 mb-2 mt-3">Button State:</p>
              <p className="text-sm text-gray-600">Shows "Retrying..." with loading spinner</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Error State Design Principles</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-[#00A651] mb-2">1. Specific Error Messages</p>
              <p className="text-gray-600 mb-3">
                Replace vague messages like "Login failed" with specific, actionable guidance that tells users exactly what went wrong and how to fix it.
              </p>
              
              <p className="font-semibold text-[#00A651] mb-2">2. Visual Differentiation</p>
              <p className="text-gray-600 mb-3">
                Use color coding: Red for errors, Yellow for warnings, Green for success. Border color changes indicate which field has the issue.
              </p>

              <p className="font-semibold text-[#00A651] mb-2">3. Inline Validation</p>
              <p className="text-gray-600">
                Show errors directly below the problematic field, not just at the top of the form, so users can fix issues immediately.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#00A651] mb-2">4. Preserve User Input</p>
              <p className="text-gray-600 mb-3">
                Never clear form fields when showing errors. Users should only need to correct the specific field with an error.
              </p>

              <p className="font-semibold text-[#00A651] mb-2">5. Progressive Disclosure</p>
              <p className="text-gray-600 mb-3">
                After password errors, make the "Forgot Password" link more prominent to guide users toward a solution.
              </p>

              <p className="font-semibold text-[#00A651] mb-2">6. Attempt Tracking</p>
              <p className="text-gray-600">
                Show remaining login attempts to prevent lockouts and reduce user anxiety.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to="/wireframes/login"
            className="flex-1 px-4 py-3 bg-white border-2 border-[#00A651] text-[#00A651] rounded-lg hover:bg-[#00A651]/5 transition-colors text-center font-medium"
          >
            ← Back to Login
          </Link>
          <Link
            to="/wireframes/forgot-password"
            className="flex-1 px-4 py-3 bg-[#00A651] text-white rounded-lg hover:bg-[#008F45] transition-colors text-center font-medium"
          >
            Forgot Password Flow →
          </Link>
        </div>
      </div>
    </div>
  );
}
