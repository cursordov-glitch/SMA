"use client";

import { useRouter } from "next/navigation";
import { Bell, Mail, Search, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TopNav() {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px]",
        "glass border-b border-border/50",
        "safe-top"
      )}
    >
      <div className="flex items-center gap-3 h-full px-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-sm">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block gradient-text">
            SuperApp
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className={cn(
                "w-full h-9 pl-9 pr-4 text-sm",
                "bg-surface border border-border/60 rounded-xl",
                "placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
                "transition-all duration-200"
              )}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <NavIconButton icon={<Bell className="w-5 h-5" />} badge={3} label="Notifications" />
          <NavIconButton icon={<Mail className="w-5 h-5" />} badge={7} label="Messages" />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}

interface NavIconButtonProps {
  icon: React.ReactNode;
  badge?: number;
  label: string;
  onClick?: () => void;
}

function NavIconButton({ icon, badge, label, onClick }: NavIconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={cn(
        "relative w-9 h-9 flex items-center justify-center rounded-xl",
        "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
        "transition-all duration-200 active:scale-95"
      )}
    >
      {icon}
      {badge && badge > 0 ? (
        <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center leading-none shadow-glow-sm">
          {badge > 99 ? "99+" : badge}
        </span>
      ) : null}
    </button>
  );
}
