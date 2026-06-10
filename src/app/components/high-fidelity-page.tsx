import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import { Phone, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";

export function HighFidelityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">High-Fidelity Mobile UI</h2>
        <p className="text-gray-600">
          Production-ready designs optimized for 360×800px mobile screens
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Screen 1: Login Default */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Login Screen (Default)</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50">
              {/* Status Bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                <div className="text-xs text-white">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-24 h-24 bg-[#00A86B] rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-white text-2xl font-bold">CP</div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-2 pb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                  <p className="text-base text-gray-600">Login to continue to ChapaPay</p>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-900">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="0712345678"
                      className="pl-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-900">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      type="password"
                      placeholder="Enter your password"
                      className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2">
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <div className="pt-2">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold shadow-md">
                    Login
                  </Button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-center">
                  <button className="text-[#00A86B] font-medium text-base py-3 px-4 -m-4 hover:underline">
                    Forgot Password?
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="text-sm text-gray-500 font-medium">OR</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                {/* Create Account */}
                <Button 
                  variant="outline" 
                  className="w-full h-14 border-2 border-gray-300 text-gray-900 text-lg font-semibold hover:bg-gray-50"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">Design Specifications:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• Screen: 360×800px</li>
              <li>• Logo: 96×96px, 16px border-radius</li>
              <li>• Heading: 32px/bold</li>
              <li>• Body: 16px/regular</li>
              <li>• Inputs: 56px height, 16px font</li>
              <li>• Buttons: 56px height, 18px font</li>
              <li>• Padding: 24px all sides</li>
              <li>• Spacing: 24px between sections</li>
            </ul>
          </div>
        </div>

        {/* Screen 2: Login with Error */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Login Screen (Error State)</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50">
              {/* Status Bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                <div className="text-xs text-white">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center pt-6 pb-2">
                  <div className="w-20 h-20 bg-[#00A86B] rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-white text-xl font-bold">CP</div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-1">
                  <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                  <p className="text-sm text-gray-600">Login to continue to ChapaPay</p>
                </div>

                {/* Error Alert */}
                <Alert className="border-red-600 bg-red-50">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-base text-red-900 font-medium">
                    Invalid phone number or password. Please check and try again.
                  </AlertDescription>
                </Alert>

                {/* Phone Input - Error */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-900">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-600" />
                    <Input 
                      value="071234"
                      className="pl-12 h-14 text-base border-2 border-red-600 bg-red-50 focus:ring-2 focus:ring-red-600/20 text-red-900"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Phone number must be 10 digits (e.g., 0712345678)</span>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-900">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      type="password"
                      value="••••••••"
                      className="pl-12 pr-12 h-14 text-base border-2 border-gray-300"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2">
                      <Eye className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <div className="pt-2">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold">
                    Login
                  </Button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-center">
                  <button className="text-[#00A86B] font-medium text-base py-3 px-4 -m-4 hover:underline">
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">Error State Features:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• Alert banner with clear message</li>
              <li>• Red border on invalid input</li>
              <li>• Red icon in error field</li>
              <li>• Inline error text with icon</li>
              <li>• Specific guidance (format example)</li>
              <li>• High contrast error colors</li>
              <li>• Error persists until corrected</li>
            </ul>
          </div>
        </div>

        {/* Screen 3: Forgot Password Step 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Forgot Password (Step 1)</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50">
              {/* Status Bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                <div className="text-xs text-white">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Back Button */}
                <div className="flex items-center gap-3 -mx-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="h-6 w-6 text-gray-900" />
                  </button>
                  <span className="text-lg font-semibold text-gray-900">Reset Password</span>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                  <div className="h-1 flex-1 bg-gray-200 rounded"></div>
                  <div className="h-1 flex-1 bg-gray-200 rounded"></div>
                </div>

                {/* Step Info */}
                <div className="space-y-3 pt-4">
                  <h2 className="text-2xl font-bold text-gray-900">Enter Your Phone Number</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We'll send you a verification code to reset your password. Make sure you have access to this number.
                  </p>
                </div>

                {/* Phone Input */}
                <div className="space-y-2 pt-4">
                  <label className="text-base font-medium text-gray-900">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="0712345678"
                      className="pl-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                    />
                  </div>
                  <p className="text-sm text-gray-500">Enter your 10-digit phone number</p>
                </div>

                {/* Continue Button */}
                <div className="pt-6">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold">
                    Send Code
                  </Button>
                </div>

                {/* Help Text */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Remember your password?{" "}
                    <button className="text-[#00A86B] font-medium hover:underline">
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">Flow Features:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• Clear back navigation</li>
              <li>• Progress indicator (Step 1/3)</li>
              <li>• Descriptive heading</li>
              <li>• Helper text for context</li>
              <li>• Input format guidance</li>
              <li>• Clear CTA button</li>
              <li>• Escape route to login</li>
            </ul>
          </div>
        </div>

        {/* Screen 4: OTP Verification */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">OTP Verification (Step 2)</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50">
              {/* Status Bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                <div className="text-xs text-white">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Back Button */}
                <div className="flex items-center gap-3 -mx-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="h-6 w-6 text-gray-900" />
                  </button>
                  <span className="text-lg font-semibold text-gray-900">Verify Code</span>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                  <div className="h-1 flex-1 bg-gray-200 rounded"></div>
                </div>

                {/* Step Info */}
                <div className="space-y-3 pt-4">
                  <h2 className="text-2xl font-bold text-gray-900">Enter Verification Code</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We sent a 6-digit code to<br />
                    <span className="font-semibold text-gray-900">0712 345 678</span>
                  </p>
                </div>

                {/* OTP Input */}
                <div className="pt-4">
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Input
                        key={i}
                        maxLength={1}
                        className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20 p-0"
                      />
                    ))}
                  </div>
                </div>

                {/* Resend Code */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600">
                    Didn't receive the code?{" "}
                    <button className="text-[#00A86B] font-medium hover:underline">
                      Resend (0:45)
                    </button>
                  </p>
                </div>

                {/* Verify Button */}
                <div className="pt-6">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold">
                    Verify Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">OTP Features:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• 6 individual input boxes (large)</li>
              <li>• Each box: 48×56px</li>
              <li>• Auto-focus on next box</li>
              <li>• Shows phone number sent to</li>
              <li>• Resend option with timer</li>
              <li>• Large touch targets</li>
              <li>• Clear visual feedback</li>
            </ul>
          </div>
        </div>

        {/* Screen 5: New Password */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Create New Password (Step 3)</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50">
              {/* Status Bar */}
              <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                <div className="text-xs text-white">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Back Button */}
                <div className="flex items-center gap-3 -mx-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft className="h-6 w-6 text-gray-900" />
                  </button>
                  <span className="text-lg font-semibold text-gray-900">New Password</span>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                  <div className="h-1 flex-1 bg-[#00A86B] rounded"></div>
                </div>

                {/* Step Info */}
                <div className="space-y-3 pt-4">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Password</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Choose a strong password that you haven't used before.
                  </p>
                </div>

                {/* New Password Input */}
                <div className="space-y-2 pt-2">
                  <label className="text-base font-medium text-gray-900">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      type="password"
                      placeholder="Enter new password"
                      className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2">
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-900">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      type="password"
                      placeholder="Re-enter new password"
                      className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2">
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-2">Password must contain:</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                      One uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                      One number
                    </li>
                  </ul>
                </div>

                {/* Reset Button */}
                <div className="pt-2">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold">
                    Reset Password
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">Password Features:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• Two password fields (new + confirm)</li>
              <li>• Toggle visibility on both</li>
              <li>• Password requirements shown</li>
              <li>• Real-time validation feedback</li>
              <li>• Clear requirements checklist</li>
              <li>• Accessible labels and hints</li>
            </ul>
          </div>
        </div>

        {/* Screen 6: Success State */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Password Reset Success</h3>
          <Card className="p-0 overflow-hidden bg-white mx-auto" style={{ width: '360px' }}>
            <div style={{ width: '360px', minHeight: '700px' }} className="bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
              {/* Content */}
              <div className="p-6 text-center space-y-6">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                {/* Success Message */}
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900">Success!</h2>
                  <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                    Your password has been reset successfully. You can now login with your new password.
                  </p>
                </div>

                {/* Login Button */}
                <div className="pt-4">
                  <Button className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold">
                    Go to Login
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-semibold text-gray-900 mb-2">Success Features:</div>
            <ul className="space-y-1 text-gray-700">
              <li>• Large success icon (96×96px)</li>
              <li>• Clear success heading</li>
              <li>• Confirmation message</li>
              <li>• Single clear CTA</li>
              <li>• Centered layout</li>
              <li>• Positive color scheme</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Specifications Summary */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Design Specifications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Screen Dimensions</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Target Width:</span>
                <span className="font-mono font-semibold">360px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Height:</span>
                <span className="font-mono font-semibold">800px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status Bar:</span>
                <span className="font-mono font-semibold">24px height</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Content Padding:</span>
                <span className="font-mono font-semibold">24px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Width:</span>
                <span className="font-mono font-semibold">600px</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Touch Targets</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Primary Buttons:</span>
                <span className="font-mono font-semibold">56×56px min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Input Fields:</span>
                <span className="font-mono font-semibold">56px height</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Text Links:</span>
                <span className="font-mono font-semibold">48×48px min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Icon Buttons:</span>
                <span className="font-mono font-semibold">48×48px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Spacing:</span>
                <span className="font-mono font-semibold">16px min</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Typography Scale</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Large Heading:</span>
                <span className="font-mono font-semibold">32px / 700</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Medium Heading:</span>
                <span className="font-mono font-semibold">24px / 700</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Small Heading:</span>
                <span className="font-mono font-semibold">20px / 600</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Body Text:</span>
                <span className="font-mono font-semibold">16px / 400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Small Text:</span>
                <span className="font-mono font-semibold">14px / 400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Button Text:</span>
                <span className="font-mono font-semibold">18px / 600</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Color Usage</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Primary Actions:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#00A86B] rounded"></div>
                  <span className="font-mono font-semibold">#00A86B</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Error States:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#DC2626] rounded"></div>
                  <span className="font-mono font-semibold">#DC2626</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Success States:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded"></div>
                  <span className="font-mono font-semibold">#10B981</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Text Primary:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#1A1A1A] rounded border"></div>
                  <span className="font-mono font-semibold">#1A1A1A</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Text Secondary:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#666666] rounded"></div>
                  <span className="font-mono font-semibold">#666666</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
