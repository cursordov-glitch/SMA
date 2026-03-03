"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SIDE_NAV_ITEMS, isActiveRoute } from "@/lib/navigation";
import { Logo } from "@/components/common/Logo";

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden lg:flex",
        "fixed left-0 top-[60px] bottom-0 z-40",
        "flex-col",
        "border-r border-border/50",
        "bg-background/80 backdrop-blur-xl",
        "w-[72px] xl:w-[240px]",
        "transition-[width] duration-300 ease-in-out"
      )}
    >
      <nav className="flex flex-col gap-1 p-3 flex-1 pt-4 overflow-y-auto">
        {SIDE_NAV_ITEMS.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          if (item.isCreate) {
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02, opacity: 0.92 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-3 my-0.5",
                    "bg-gradient-to-r from-brand-500 via-violet-500 to-pink-500",
                    "text-white font-semibold text-sm",
                    "justify-center xl:justify-start",
                    active ? "shadow-glow" : "shadow-md"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="hidden xl:block truncate">{item.label}</span>
                </motion.div>
              </Link>
            );
          }

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5",
                  "text-sm transition-colors duration-150",
                  "justify-center xl:justify-start",
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                )}
              >
                {/* Active left border indicator */}
                <AnimatePresence>
                  {active && (
                    <motion.div
                      layoutId="side-nav-indicator"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary"
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{ scale: active ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex-shrink-0"
                >
                  <item.icon
                    className="w-5 h-5"
                    strokeWidth={active ? 2.5 : 1.8}
                  />
                </motion.div>

                <span className="hidden xl:block truncate">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
