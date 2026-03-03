"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Mail, Search, X } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Logo } from "@/components/common/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px]",
        "bg-background/80 backdrop-blur-xl border-b border-border/50"
      )}
    >
      <div className="flex items-center gap-3 h-full px-4 max-w-screen-2xl mx-auto">

        {/* Logo — hide on mobile when searching */}
        <AnimatePresence initial={false}>
          {!searchFocused && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex-shrink-0 overflow-hidden sm:overflow-visible sm:opacity-100 sm:w-auto"
            >
              <Logo size="md" showText />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search */}
        <motion.div
          layout
          className="flex-1 max-w-md mx-auto"
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        >
          <div
            className={cn(
              "relative flex items-center h-9 rounded-xl transition-all duration-200",
              "bg-surface border",
              searchFocused
                ? "border-primary/50 ring-2 ring-primary/20 shadow-glow-sm"
                : "border-border/60"
            )}
          >
            <Search
              className={cn(
                "absolute left-3 w-4 h-4 transition-colors duration-200",
                searchFocused ? "text-primary" : "text-muted-foreground"
              )}
            />
            <input
              ref={inputRef}
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search SuperApp..."
              className={cn(
                "w-full h-full pl-9 pr-8 text-sm bg-transparent",
                "placeholder:text-muted-foreground",
                "focus:outline-none"
              )}
            />
            <AnimatePresence>
              {searchValue && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  onMouseDown={clearSearch}
                  className="absolute right-2.5 w-4 h-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Action Icons */}
        <div className="flex items-center gap-0.5 flex-shrink-0">
          <TopNavIconButton icon={<Bell className="w-5 h-5" />} badge={3} label="Notifications" />
          <TopNavIconButton icon={<Mail className="w-5 h-5" />} badge={7} label="Messages" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

interface TopNavIconButtonProps {
  icon: React.ReactNode;
  badge?: number;
  label: string;
  onClick?: () => void;
}

function TopNavIconButton({ icon, badge, label, onClick }: TopNavIconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={label}
      className={cn(
        "relative w-9 h-9 flex items-center justify-center rounded-xl",
        "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
        "transition-colors duration-150"
      )}
    >
      {icon}
      {badge && badge > 0 ? (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center leading-none"
        >
          {badge > 99 ? "99+" : badge}
        </motion.span>
      ) : null}
    </motion.button>
  );
}
