import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../ui/utils";

interface ChapaPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "disabled";
  size?: "default" | "large";
}

export const ChapaPrimaryButton = forwardRef<HTMLButtonElement, ChapaPrimaryButtonProps>(
  ({ className, variant = "primary", size = "default", children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || variant === "disabled"}
        className={cn(
          // Base styles - WCAG AA compliant
          "w-full rounded-lg font-semibold transition-all duration-200 touch-manipulation",
          "focus:outline-none focus:ring-4 focus:ring-offset-2",
          // Minimum touch target: 48px height
          size === "large" ? "h-14 text-lg" : "h-12 text-base",
          // Variant styles
          variant === "primary" && [
            "bg-[#00A651] text-white",
            "hover:bg-[#008F45] active:bg-[#007A3D]",
            "focus:ring-[#00A651]/30",
            "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed",
          ],
          variant === "secondary" && [
            "bg-white text-[#00A651] border-2 border-[#00A651]",
            "hover:bg-[#00A651]/5 active:bg-[#00A651]/10",
            "focus:ring-[#00A651]/30",
          ],
          variant === "disabled" && [
            "bg-gray-300 text-gray-500 cursor-not-allowed",
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ChapaPrimaryButton.displayName = "ChapaPrimaryButton";
