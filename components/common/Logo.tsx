import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { wrap: "w-7 h-7 rounded-lg", icon: "w-3.5 h-3.5", text: "text-base" },
  md: { wrap: "w-8 h-8 rounded-xl", icon: "w-4 h-4",   text: "text-lg"  },
  lg: { wrap: "w-12 h-12 rounded-2xl", icon: "w-6 h-6", text: "text-2xl" },
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      <div
        className={cn(
          s.wrap,
          "bg-gradient-to-br from-brand-500 via-violet-500 to-pink-500",
          "flex items-center justify-center flex-shrink-0"
        )}
      >
        <Zap className={cn(s.icon, "text-white fill-white")} />
      </div>
      {showText && (
        <span
          className={cn(
            s.text,
            "font-bold tracking-tight",
            "bg-gradient-to-r from-brand-500 via-violet-500 to-pink-500 bg-clip-text text-transparent"
          )}
        >
          SuperApp
        </span>
      )}
    </div>
  );
}
