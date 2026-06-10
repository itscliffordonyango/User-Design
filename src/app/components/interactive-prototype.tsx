import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import { Phone, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";

type Screen = "login" | "login-error" | "forgot-password" | "otp" | "new-password" | "success";

export function InteractivePrototype() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [timer, setTimer] = useState(45);

  const handleLogin = () => {
    if (phoneNumber.length !== 10) {
      setCurrentScreen("login-error");
    } else {
      // Simulated successful login
      alert("Login successful! (This is a prototype)");
    }
  };

  const handleForgotPassword = () => {
    setCurrentScreen("forgot-password");
  };

  const handleSendCode = () => {
    setCurrentScreen("otp");
    // Start timer countdown
  };

  const handleVerifyOtp = () => {
    setCurrentScreen("new-password");
  };

  const handleResetPassword = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      setCurrentScreen("success");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otpCode];
    newOtp[index] = value.slice(-1);
    setOtpCode(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Interactive Prototype</h2>
        <p className="text-gray-600 mb-4">
          Click through the complete login and password reset flow
        </p>
        
        {/* Screen Navigator */}
        <div className="flex flex-wrap gap-2 bg-white p-4 rounded-lg border border-gray-200">
          <Button 
            variant={currentScreen === "login" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("login")}
            className={currentScreen === "login" ? "bg-[#00A86B]" : ""}
          >
            Login
          </Button>
          <Button 
            variant={currentScreen === "login-error" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("login-error")}
            className={currentScreen === "login-error" ? "bg-[#00A86B]" : ""}
          >
            Error State
          </Button>
          <Button 
            variant={currentScreen === "forgot-password" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("forgot-password")}
            className={currentScreen === "forgot-password" ? "bg-[#00A86B]" : ""}
          >
            Forgot Password
          </Button>
          <Button 
            variant={currentScreen === "otp" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("otp")}
            className={currentScreen === "otp" ? "bg-[#00A86B]" : ""}
          >
            OTP
          </Button>
          <Button 
            variant={currentScreen === "new-password" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("new-password")}
            className={currentScreen === "new-password" ? "bg-[#00A86B]" : ""}
          >
            New Password
          </Button>
          <Button 
            variant={currentScreen === "success" ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentScreen("success")}
            className={currentScreen === "success" ? "bg-[#00A86B]" : ""}
          >
            Success
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          {/* Mobile Frame */}
          <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl">
            <Card className="p-0 overflow-hidden bg-white" style={{ width: '360px' }}>
              <div style={{ width: '360px', minHeight: '800px' }} className="bg-gradient-to-b from-white to-gray-50">
                {/* Status Bar */}
                <div className="h-6 bg-gray-900 flex items-center justify-between px-3">
                  <div className="text-xs text-white">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                    <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                    <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                  </div>
                </div>

                {/* Content Based on Current Screen */}
                <div className="p-6">
                  {currentScreen === "login" && (
                    <div className="space-y-6">
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                          />
                          <button 
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Login Button */}
                      <div className="pt-2">
                        <Button 
                          className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold shadow-md"
                          onClick={handleLogin}
                        >
                          Login
                        </Button>
                      </div>

                      {/* Forgot Password */}
                      <div className="flex justify-center">
                        <button 
                          className="text-[#00A86B] font-medium text-base py-3 px-4 -m-4 hover:underline"
                          onClick={handleForgotPassword}
                        >
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
                  )}

                  {currentScreen === "login-error" && (
                    <div className="space-y-6">
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
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                        <Button 
                          className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold"
                          onClick={() => setCurrentScreen("login")}
                        >
                          Login
                        </Button>
                      </div>

                      {/* Forgot Password */}
                      <div className="flex justify-center">
                        <button 
                          className="text-[#00A86B] font-medium text-base py-3 px-4 -m-4 hover:underline"
                          onClick={handleForgotPassword}
                        >
                          Forgot Password?
                        </button>
                      </div>
                    </div>
                  )}

                  {currentScreen === "forgot-password" && (
                    <div className="space-y-6">
                      {/* Back Button */}
                      <div className="flex items-center gap-3 -mx-2">
                        <button 
                          className="p-2 hover:bg-gray-100 rounded-lg"
                          onClick={() => setCurrentScreen("login")}
                        >
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="pl-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                          />
                        </div>
                        <p className="text-sm text-gray-500">Enter your 10-digit phone number</p>
                      </div>

                      {/* Continue Button */}
                      <div className="pt-6">
                        <Button 
                          className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold"
                          onClick={handleSendCode}
                        >
                          Send Code
                        </Button>
                      </div>

                      {/* Help Text */}
                      <div className="text-center pt-4">
                        <p className="text-sm text-gray-600">
                          Remember your password?{" "}
                          <button 
                            className="text-[#00A86B] font-medium hover:underline"
                            onClick={() => setCurrentScreen("login")}
                          >
                            Login
                          </button>
                        </p>
                      </div>
                    </div>
                  )}

                  {currentScreen === "otp" && (
                    <div className="space-y-6">
                      {/* Back Button */}
                      <div className="flex items-center gap-3 -mx-2">
                        <button 
                          className="p-2 hover:bg-gray-100 rounded-lg"
                          onClick={() => setCurrentScreen("forgot-password")}
                        >
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
                          <span className="font-semibold text-gray-900">{phoneNumber || "0712 345 678"}</span>
                        </p>
                      </div>

                      {/* OTP Input */}
                      <div className="pt-4">
                        <div className="flex justify-center gap-2">
                          {otpCode.map((digit, index) => (
                            <Input
                              key={index}
                              id={`otp-${index}`}
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
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
                            Resend (0:{timer})
                          </button>
                        </p>
                      </div>

                      {/* Verify Button */}
                      <div className="pt-6">
                        <Button 
                          className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold"
                          onClick={handleVerifyOtp}
                        >
                          Verify Code
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentScreen === "new-password" && (
                    <div className="space-y-6">
                      {/* Back Button */}
                      <div className="flex items-center gap-3 -mx-2">
                        <button 
                          className="p-2 hover:bg-gray-100 rounded-lg"
                          onClick={() => setCurrentScreen("otp")}
                        >
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
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                          />
                          <button 
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Confirm Password Input */}
                      <div className="space-y-2">
                        <label className="text-base font-medium text-gray-900">Confirm Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-enter new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="pl-12 pr-12 h-14 text-base border-2 border-gray-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20"
                          />
                          <button 
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 -m-2"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Password Requirements */}
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <div className="text-sm font-medium text-gray-900 mb-2">Password must contain:</div>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${newPassword.length >= 8 ? 'text-green-600' : 'text-gray-400'}`} />
                            At least 8 characters
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${/[A-Z]/.test(newPassword) ? 'text-green-600' : 'text-gray-400'}`} />
                            One uppercase letter
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${/[0-9]/.test(newPassword) ? 'text-green-600' : 'text-gray-400'}`} />
                            One number
                          </li>
                        </ul>
                      </div>

                      {/* Reset Button */}
                      <div className="pt-2">
                        <Button 
                          className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold"
                          onClick={handleResetPassword}
                        >
                          Reset Password
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentScreen === "success" && (
                    <div className="min-h-[700px] flex items-center justify-center">
                      <div className="text-center space-y-6 p-6">
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
                          <Button 
                            className="w-full h-14 bg-[#00A86B] hover:bg-[#008554] text-white text-lg font-semibold"
                            onClick={() => setCurrentScreen("login")}
                          >
                            Go to Login
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Screen Label */}
          <div className="mt-4 text-center">
            <div className="inline-block bg-[#00A86B] text-white px-4 py-2 rounded-lg font-semibold">
              {currentScreen === "login" && "Login Screen"}
              {currentScreen === "login-error" && "Error State"}
              {currentScreen === "forgot-password" && "Step 1: Enter Phone"}
              {currentScreen === "otp" && "Step 2: OTP Verification"}
              {currentScreen === "new-password" && "Step 3: New Password"}
              {currentScreen === "success" && "Success State"}
            </div>
          </div>
        </div>
      </div>

      {/* Interaction Notes */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interaction Notes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">User Flows</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Happy Path:</strong> Login → (Success)</li>
              <li>• <strong>Error Path:</strong> Login → Error → Retry</li>
              <li>• <strong>Forgot Password:</strong> Enter Phone → OTP → New Password → Success → Login</li>
              <li>• <strong>Back Navigation:</strong> Available on all screens</li>
              <li>• <strong>Alternative Paths:</strong> Links to switch between flows</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Interactive Elements</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Password Toggle:</strong> Click eye icon to show/hide</li>
              <li>• <strong>Auto-Focus:</strong> OTP inputs advance automatically</li>
              <li>• <strong>Real-time Validation:</strong> Password requirements update live</li>
              <li>• <strong>Error States:</strong> Clear visual feedback on errors</li>
              <li>• <strong>Progress Indicators:</strong> Show current step in flow</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Accessibility Features</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• All inputs have visible labels</li>
              <li>• Error messages are announced</li>
              <li>• Touch targets meet WCAG AA (48px+)</li>
              <li>• High contrast colors (4.5:1 ratio)</li>
              <li>• Keyboard navigation supported</li>
              <li>• Focus states clearly visible</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Optimizations</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Large touch targets (56px minimum)</li>
              <li>• Spaced inputs prevent fat-finger errors</li>
              <li>• Number keyboard for phone input</li>
              <li>• Password visibility toggle</li>
              <li>• Clear error messages with examples</li>
              <li>• Minimal scrolling required</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
