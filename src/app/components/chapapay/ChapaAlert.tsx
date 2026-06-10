import { ReactNode } from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "../ui/utils";

interface ChapaAlertProps {
  variant: "error" | "warning" | "success" | "info";
  children: ReactNode;
  className?: string;
}

export function ChapaAlert({ variant, children, className }: ChapaAlertProps) {
  const config = {
    error: {
      icon: AlertCircle,
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-800",
      iconColor: "text-red-500",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-800",
      iconColor: "text-yellow-500",
    },
    success: {
      icon: CheckCircle,
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      textColor: "text-green-800",
      iconColor: "text-green-500",
    },
    info: {
      icon: Info,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-800",
      iconColor: "text-blue-500",
    },
  };

  const { icon: Icon, bgColor, borderColor, textColor, iconColor } = config[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border-2",
        bgColor,
        borderColor,
        className
      )}
    >
      <Icon className={cn("w-6 h-6 flex-shrink-0 mt-0.5", iconColor)} aria-hidden="true" />
      <p className={cn("text-sm font-medium flex-1", textColor)}>{children}</p>
    </div>
  );
}
