import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import { Phone, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";

export function DesignSystem() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">ChapaPay Design System</h2>
        <p className="text-gray-600">
          Reusable components optimized for Kenyan users and low-end Android devices
        </p>
      </div>

      {/* Color Palette */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Color Palette</h3>
        <Card className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-24 bg-[#00A86B] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#00A86B</div>
              <div className="text-xs text-gray-600">Primary / Jade Green</div>
            </div>
            <div>
              <div className="h-24 bg-[#008554] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#008554</div>
              <div className="text-xs text-gray-600">Primary Dark</div>
            </div>
            <div>
              <div className="h-24 bg-[#1A1A1A] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#1A1A1A</div>
              <div className="text-xs text-gray-600">Text Primary</div>
            </div>
            <div>
              <div className="h-24 bg-[#666666] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#666666</div>
              <div className="text-xs text-gray-600">Text Secondary</div>
            </div>
            <div>
              <div className="h-24 bg-[#DC2626] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#DC2626</div>
              <div className="text-xs text-gray-600">Error / Danger</div>
            </div>
            <div>
              <div className="h-24 bg-[#F59E0B] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#F59E0B</div>
              <div className="text-xs text-gray-600">Warning</div>
            </div>
            <div>
              <div className="h-24 bg-[#10B981] rounded-lg mb-2"></div>
              <div className="font-mono text-sm">#10B981</div>
              <div className="text-xs text-gray-600">Success</div>
            </div>
            <div>
              <div className="h-24 bg-[#F5F5F5] rounded-lg mb-2 border border-gray-200"></div>
              <div className="font-mono text-sm">#F5F5F5</div>
              <div className="text-xs text-gray-600">Background</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Typography</h3>
        <Card className="p-6 space-y-4">
          <div>
            <div className="text-3xl font-bold mb-1">Heading 1</div>
            <div className="text-sm text-gray-600 font-mono">32px / 700 / -0.5px</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">Heading 2</div>
            <div className="text-sm text-gray-600 font-mono">24px / 700 / -0.25px</div>
          </div>
          <div>
            <div className="text-xl font-semibold mb-1">Heading 3</div>
            <div className="text-sm text-gray-600 font-mono">20px / 600 / normal</div>
          </div>
          <div>
            <div className="text-base mb-1">Body Regular</div>
            <div className="text-sm text-gray-600 font-mono">16px / 400 / normal</div>
          </div>
          <div>
            <div className="text-sm mb-1">Small Text</div>
            <div className="text-sm text-gray-600 font-mono">14px / 400 / normal</div>
          </div>
          <div className="pt-4 border-t">
            <div className="font-semibold text-gray-900 mb-2">Accessibility Note:</div>
            <div className="text-sm text-gray-700">
              • Minimum font size: 16px for body text<br />
              • Line height: 1.5 for optimal readability<br />
              • High contrast ratios maintained (4.5:1 minimum)
            </div>
          </div>
        </Card>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Buttons</h3>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Primary Button</div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#00A86B] hover:bg-[#008554] text-white min-h-[56px] px-8 text-lg font-semibold"
                >
                  Login
                </Button>
                <div className="text-xs text-gray-600 self-center">
                  Min height: 56px • Min width: 48px • Font: 18px/600
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Secondary Button</div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="min-h-[56px] px-8 text-lg font-semibold border-2"
                >
                  Create Account
                </Button>
                <div className="text-xs text-gray-600 self-center">
                  Min height: 56px • Border: 2px
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Disabled State</div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  disabled
                  size="lg"
                  className="min-h-[56px] px-8 text-lg font-semibold"
                >
                  Login
                </Button>
                <div className="text-xs text-gray-600 self-center">
                  Opacity: 0.5 • Cursor: not-allowed
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="font-semibold text-gray-900 mb-2">Touch Target Specifications:</div>
              <div className="text-sm text-gray-700">
                • Minimum touch target: 48×48px (WCAG AA)<br />
                • Actual implementation: 56×56px minimum<br />
                • Spacing between targets: 16px minimum<br />
                • Optimized for "fat finger" interactions
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Input Fields */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Input Fields</h3>
        <Card className="p-6">
          <div className="space-y-6 max-w-md">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Default State</div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Enter phone number"
                  className="pl-12 h-14 text-base border-2"
                />
              </div>
              <div className="text-xs text-gray-600 mt-2">
                Height: 56px • Font: 16px • Padding: 16px • Icon: 20px
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Focused State</div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00A86B]" />
                <Input 
                  placeholder="Enter password"
                  className="pl-12 pr-12 h-14 text-base border-2 border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <div className="text-xs text-gray-600 mt-2">
                Border: 2px #00A86B • Ring: 2px #00A86B
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Error State</div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-600" />
                <Input 
                  placeholder="Enter phone number"
                  className="pl-12 h-14 text-base border-2 border-red-600 focus:ring-2 focus:ring-red-600"
                  value="07123"
                />
              </div>
              <div className="text-sm text-red-600 mt-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Phone number must be 10 digits
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Success State</div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600" />
                <Input 
                  placeholder="Enter phone number"
                  className="pl-12 h-14 text-base border-2 border-green-600"
                  value="0712345678"
                />
                <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Alerts */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alert Components</h3>
        <Card className="p-6">
          <div className="space-y-4 max-w-2xl">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Error Alert</div>
              <Alert className="border-red-600 bg-red-50">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-base text-red-900">
                  Invalid phone number or password. Please try again.
                </AlertDescription>
              </Alert>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Warning Alert</div>
              <Alert className="border-amber-600 bg-amber-50">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-base text-amber-900">
                  Your session will expire in 2 minutes. Please complete your login.
                </AlertDescription>
              </Alert>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-3">Success Alert</div>
              <Alert className="border-green-600 bg-green-50">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <AlertDescription className="text-base text-green-900">
                  Password reset successful. You can now login with your new password.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </Card>
      </section>

      {/* Icons */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Icon System</h3>
        <Card className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <Phone className="h-10 w-10 text-gray-700" />
              </div>
              <div className="font-medium">Phone</div>
              <div className="text-xs text-gray-600">40×40px</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <Lock className="h-10 w-10 text-gray-700" />
              </div>
              <div className="font-medium">Lock</div>
              <div className="text-xs text-gray-600">40×40px</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <Eye className="h-10 w-10 text-gray-700" />
              </div>
              <div className="font-medium">Eye (Show)</div>
              <div className="text-xs text-gray-600">40×40px</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <EyeOff className="h-10 w-10 text-gray-700" />
              </div>
              <div className="font-medium">Eye-Off (Hide)</div>
              <div className="text-xs text-gray-600">40×40px</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <AlertCircle className="h-10 w-10 text-red-600" />
              </div>
              <div className="font-medium">Alert Circle</div>
              <div className="text-xs text-gray-600">Error states</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <div className="font-medium">Check Circle</div>
              <div className="text-xs text-gray-600">Success states</div>
            </div>
            <div className="text-center">
              <div className="h-20 flex items-center justify-center mb-2">
                <AlertTriangle className="h-10 w-10 text-amber-600" />
              </div>
              <div className="font-medium">Alert Triangle</div>
              <div className="text-xs text-gray-600">Warning states</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <div className="font-semibold text-gray-900 mb-2">Icon Specifications:</div>
            <div className="text-sm text-gray-700">
              • Minimum touch target for interactive icons: 48×48px<br />
              • Visual icon size: 20-24px (default), 40px (decorative)<br />
              • Stroke width: 2px<br />
              • Color contrast ratio: 4.5:1 minimum
            </div>
          </div>
        </Card>
      </section>

      {/* Spacing System */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spacing & Layout</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">4px</div>
              <div className="h-8 bg-[#00A86B]" style={{ width: '4px' }}></div>
              <div className="text-sm text-gray-600">Minimal spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">8px</div>
              <div className="h-8 bg-[#00A86B]" style={{ width: '8px' }}></div>
              <div className="text-sm text-gray-600">Tight spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">16px</div>
              <div className="h-8 bg-[#00A86B]" style={{ width: '16px' }}></div>
              <div className="text-sm text-gray-600">Default spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">24px</div>
              <div className="h-8 bg-[#00A86B]" style={{ width: '24px' }}></div>
              <div className="text-sm text-gray-600">Section spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">32px</div>
              <div className="h-8 bg-[#00A86B]" style={{ width: '32px' }}></div>
              <div className="text-sm text-gray-600">Large spacing</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <div className="font-semibold text-gray-900 mb-2">Layout Guidelines:</div>
            <div className="text-sm text-gray-700">
              • Screen padding: 16px minimum<br />
              • Element spacing: 16px default<br />
              • Section spacing: 24-32px<br />
              • Touch target spacing: 16px minimum between interactive elements
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
