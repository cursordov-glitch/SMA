import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { container: "w-7 h-7 rounded-lg", icon: "w-3.5 h-3.5", text: "text-base" },
  md: { container: "w-9 h-9 rounded-xl", icon: "w-4.5 h-4.5", text: "text-lg" },
  lg: { container: "w-12 h-12 rounded-2xl", icon: "w-6 h-6", text: "text-2xl" },
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          s.container,
          "bg-gradient-brand flex items-center justify-center shadow-glow-sm flex-shrink-0"
        )}
      >
        <Zap className={cn(s.icon, "text-white fill-white")} />
      </div>
      {showText && (
        <span className={cn(s.text, "font-bold tracking-tight gradient-text")}>
          SuperApp
        </span>
      )}
    </div>
  );
}
