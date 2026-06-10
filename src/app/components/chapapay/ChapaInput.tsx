import { InputHTMLAttributes, forwardRef, useState } from "react";
import { Eye, EyeOff, Phone, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "../ui/utils";

interface ChapaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  icon?: "phone" | "lock";
  showPasswordToggle?: boolean;
}

export const ChapaInput = forwardRef<HTMLInputElement, ChapaInputProps>(
  ({ className, label, error, success, icon, showPasswordToggle, type: initialType, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const type = showPasswordToggle && showPassword ? "text" : initialType;

    const IconComponent = icon === "phone" ? Phone : icon === "lock" ? Lock : null;

    return (
      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative">
          {IconComponent && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <IconComponent className="w-5 h-5" aria-hidden="true" />
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              // Base styles
              "w-full h-14 rounded-lg border-2 px-4 text-base transition-all",
              "focus:outline-none focus:ring-4 focus:ring-offset-1",
              "touch-manipulation",
              // Icon padding
              IconComponent && "pl-12",
              showPasswordToggle && "pr-12",
              // States
              error && [
                "border-red-500 bg-red-50",
                "focus:border-red-500 focus:ring-red-500/20",
              ],
              success && [
                "border-green-500 bg-green-50",
                "focus:border-green-500 focus:ring-green-500/20",
              ],
              !error && !success && [
                "border-gray-300 bg-white",
                "focus:border-[#00A651] focus:ring-[#00A651]/20",
              ],
              className
            )}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A651] rounded p-1 touch-manipulation"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Eye className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          )}
          {error && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
            </div>
          )}
          {success && !showPasswordToggle && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm font-medium text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

ChapaInput.displayName = "ChapaInput";
