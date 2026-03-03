"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BOTTOM_NAV_ITEMS, isActiveRoute } from "@/lib/navigation";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "lg:hidden",
        "bg-background/85 backdrop-blur-xl border-t border-border/50",
        "pb-[env(safe-area-inset-bottom)]"
      )}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          if (item.isCreate) {
            return (
              <CreateButton key={item.href} href={item.href} active={active} />
            );
          }

          return (
            <BottomNavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={<item.icon strokeWidth={active ? 2.5 : 1.8} className="w-5 h-5" />}
              active={active}
            />
          );
        })}
      </div>
    </nav>
  );
}

interface BottomNavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

function BottomNavItem({ href, label, icon, active }: BottomNavItemProps) {
  return (
    <Link href={href} className="flex-1 flex justify-center">
      <motion.div
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative flex flex-col items-center justify-center gap-1 py-1 px-3"
      >
        {/* Pill background on active */}
        <AnimatePresence>
          {active && (
            <motion.div
              layoutId="bottom-nav-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="absolute inset-x-0 top-0.5 h-8 rounded-2xl bg-primary/10"
            />
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            color: active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            y: active ? -1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="relative z-10"
        >
          {icon}
        </motion.div>

        <motion.span
          animate={{
            color: active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            fontWeight: active ? 600 : 400,
          }}
          transition={{ duration: 0.15 }}
          className="relative z-10 text-[10px] leading-none"
        >
          {label}
        </motion.span>

        {/* Dot indicator */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 600, damping: 30, delay: 0.05 }}
              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

function CreateButton({ href, active }: { href: string; active: boolean }) {
  return (
    <Link href={href} className="flex-1 flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className={cn(
          "relative w-12 h-12 rounded-2xl",
          "flex items-center justify-center",
          "bg-gradient-to-br from-brand-500 via-violet-500 to-pink-500",
          active ? "shadow-glow" : "shadow-md"
        )}
      >
        <motion.div
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>

        {/* Glow ring on active */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-2xl ring-2 ring-primary/40 ring-offset-2 ring-offset-background"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
