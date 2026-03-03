"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Video, Plus, MessageCircle, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/home", icon: Home, label: "Home" },
  { href: "/videos", icon: Video, label: "Videos" },
  { href: "/create", icon: Plus, label: "Create", isCreate: true },
  { href: "/chat", icon: MessageCircle, label: "Chat" },
  { href: "/profile", icon: User, label: "Profile" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "glass border-t border-border/50",
        "safe-bottom"
      )}
    >
      <div className="flex items-center justify-around h-[64px] px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

          if (item.isCreate) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-12 h-12 rounded-2xl bg-gradient-brand",
                    "flex items-center justify-center",
                    "shadow-glow transition-shadow duration-200",
                    isActive && "shadow-glow"
                  )}
                >
                  <item.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </motion.div>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 py-1"
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className="relative flex flex-col items-center gap-1"
              >
                <div
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-200",
                    isActive ? "bg-primary/12 text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon
                    className="w-5 h-5 transition-all duration-200"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>

                <span
                  className={cn(
                    "text-[10px] font-medium leading-none transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="bottom-nav-indicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
