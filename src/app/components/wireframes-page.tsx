import { Card } from "./ui/card";

export function WireframesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Low-Fidelity Wireframes</h2>
        <p className="text-gray-600">
          Structure and layout exploration for ChapaPay login experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Screen A: Login Screen */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen A: Login</h3>
          <Card className="p-4 bg-white">
            <div className="border-2 border-gray-300" style={{ width: '360px', aspectRatio: '360/800' }}>
              {/* Status Bar */}
              <div className="h-6 bg-gray-200 border-b border-gray-300"></div>
              
              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Logo */}
                <div className="flex justify-center py-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-xs text-gray-600">LOGO</div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="space-y-2">
                  <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2 pt-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-14 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-3">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-14 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-between px-3">
                    <div className="flex items-center flex-1">
                      <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Login Button */}
                <div className="pt-4">
                  <div className="h-14 bg-gray-400 rounded flex items-center justify-center">
                    <div className="h-5 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-center pt-2">
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 py-4">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-8"></div>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                {/* Create Account */}
                <div className="h-14 bg-white border-2 border-gray-300 rounded flex items-center justify-center">
                  <div className="h-5 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 text-sm text-gray-700">
            <strong>Elements:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>ChapaPay logo (120×120px)</li>
              <li>Welcome text + subtitle</li>
              <li>Phone number input (56px height)</li>
              <li>Password input with toggle (56px height)</li>
              <li>Primary login button (56px height)</li>
              <li>Forgot password link (large touch target)</li>
              <li>Divider with "OR" text</li>
              <li>Create account button (56px height)</li>
            </ul>
          </div>
        </div>

        {/* Screen B: Error States */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen B: Error States</h3>
          <Card className="p-4 bg-white">
            <div className="border-2 border-gray-300" style={{ width: '360px', aspectRatio: '360/800' }}>
              {/* Status Bar */}
              <div className="h-6 bg-gray-200 border-b border-gray-300"></div>
              
              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Logo */}
                <div className="flex justify-center py-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-xs text-gray-600">LOGO</div>
                  </div>
                </div>

                {/* Alert Box */}
                <div className="bg-red-50 border-2 border-red-300 rounded p-3 flex gap-2">
                  <div className="w-5 h-5 bg-red-300 rounded flex-shrink-0 mt-0.5"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-4 bg-red-200 rounded w-full"></div>
                    <div className="h-4 bg-red-200 rounded w-4/5"></div>
                  </div>
                </div>

                {/* Phone Input - Error */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-14 bg-red-50 border-2 border-red-400 rounded flex items-center px-3">
                    <div className="w-5 h-5 bg-red-300 rounded mr-2"></div>
                    <div className="h-4 bg-red-200 rounded w-20"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-300 rounded"></div>
                    <div className="h-3 bg-red-200 rounded w-48"></div>
                  </div>
                </div>

                {/* Password Input - Error */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-14 bg-red-50 border-2 border-red-400 rounded flex items-center justify-between px-3">
                    <div className="flex items-center flex-1">
                      <div className="w-5 h-5 bg-red-300 rounded mr-2"></div>
                      <div className="h-4 bg-red-200 rounded w-24"></div>
                    </div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-300 rounded"></div>
                    <div className="h-3 bg-red-200 rounded w-40"></div>
                  </div>
                </div>

                {/* Additional Error Examples */}
                <div className="pt-6 space-y-4">
                  <div className="text-xs font-semibold text-gray-600 uppercase">Network Error</div>
                  <div className="bg-amber-50 border-2 border-amber-300 rounded p-3 flex gap-2">
                    <div className="w-5 h-5 bg-amber-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-4 bg-amber-200 rounded w-full"></div>
                      <div className="h-4 bg-amber-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 text-sm text-gray-700">
            <strong>Error Types:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Invalid phone number format</li>
              <li>Incorrect password</li>
              <li>Network connection error</li>
              <li>Account locked (too many attempts)</li>
              <li>Each error has clear, specific message</li>
              <li>Error states use red (#DC2626)</li>
              <li>Warning states use amber (#F59E0B)</li>
            </ul>
          </div>
        </div>

        {/* Screen C: Forgot Password Flow */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen C: Forgot Password</h3>
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-4 bg-white">
              <div className="text-sm font-semibold text-gray-600 mb-2">STEP 1: Enter Phone</div>
              <div className="border-2 border-gray-300" style={{ width: '360px', height: '300px' }}>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="h-5 bg-gray-300 rounded w-32"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-300 rounded w-48"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-14 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-3">
                      <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>

                  <div className="h-14 bg-gray-400 rounded"></div>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-4 bg-white">
              <div className="text-sm font-semibold text-gray-600 mb-2">STEP 2: OTP Verification</div>
              <div className="border-2 border-gray-300" style={{ width: '360px', height: '300px' }}>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="h-5 bg-gray-300 rounded w-40"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>

                  <div className="flex justify-center gap-2 pt-4">
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-14 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>

                  <div className="h-14 bg-gray-400 rounded"></div>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-4 bg-white">
              <div className="text-sm font-semibold text-gray-600 mb-2">STEP 3: New Password</div>
              <div className="border-2 border-gray-300" style={{ width: '360px', height: '300px' }}>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="h-5 bg-gray-300 rounded w-36"></div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-14 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-between px-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                      </div>
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-36"></div>
                    <div className="h-14 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-between px-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                      </div>
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div className="h-14 bg-gray-400 rounded"></div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            <strong>Flow Steps:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Step 1: User enters phone number</li>
              <li>Step 2: 6-digit OTP verification (large inputs)</li>
              <li>Step 3: Create new password + confirm</li>
              <li>Success confirmation screen</li>
              <li>Back button on all screens</li>
              <li>Resend OTP option (with timer)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wireframe Specifications */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wireframe Specifications</h3>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Layout Constraints</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Screen width: 360px (baseline)</li>
                <li>• Screen height: 800px (baseline)</li>
                <li>• Content padding: 16px all sides</li>
                <li>• Element spacing: 16px vertical</li>
                <li>• Section spacing: 24px vertical</li>
                <li>• Maximum content width: 600px</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Component Sizing</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Input fields: 56px height minimum</li>
                <li>• Buttons: 56px height minimum</li>
                <li>• Touch targets: 48px minimum (56px preferred)</li>
                <li>• Icons: 20-24px (in inputs), 40px (standalone)</li>
                <li>• Logo: 80-120px</li>
                <li>• Font size: 16px minimum</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Accessibility Notes</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• All interactive elements labeled</li>
                <li>• Clear visual hierarchy</li>
                <li>• Adequate spacing for fat-finger taps</li>
                <li>• Error messages near relevant inputs</li>
                <li>• Focus states clearly indicated</li>
                <li>• High contrast maintained</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">User Flow Notes</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Login is primary action (most prominent)</li>
                <li>• Forgot password easily discoverable</li>
                <li>• Create account is secondary option</li>
                <li>• Error recovery is straightforward</li>
                <li>• Back navigation always available</li>
                <li>• Progress indicators for multi-step flows</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
