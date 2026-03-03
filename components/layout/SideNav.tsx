"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Video,
  Plus,
  MessageCircle,
  User,
  Compass,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/home", icon: Home, label: "Home" },
  { href: "/explore", icon: Compass, label: "Explore" },
  { href: "/videos", icon: Video, label: "Videos" },
  { href: "/create", icon: Plus, label: "Create", isCreate: true },
  { href: "/chat", icon: MessageCircle, label: "Chat" },
  { href: "/profile", icon: User, label: "Profile" },
] as const;

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-[60px] bottom-0 z-40 flex-col items-center border-r border-border/50 bg-background/80 backdrop-blur-xl transition-all duration-300 w-[72px] lg:w-[240px]">
      <nav className="flex flex-col gap-1 p-3 w-full flex-1 pt-4">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          if (item.isCreate) {
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl p-3 my-1",
                    "bg-gradient-brand text-white shadow-glow",
                    "transition-shadow duration-200 hover:shadow-glow",
                    "justify-center lg:justify-start"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="hidden lg:block text-sm font-semibold">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          }

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 rounded-xl p-3 relative",
                  "transition-all duration-200",
                  "justify-center lg:justify-start",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                )}
              >
                <item.icon
                  className="w-5 h-5 flex-shrink-0"
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="hidden lg:block text-sm font-medium">
                  {item.label}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="side-nav-indicator"
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-primary"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
