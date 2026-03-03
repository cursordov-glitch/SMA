"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlaceholderPageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  phase?: string;
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
};

export function PlaceholderPage({
  icon,
  title,
  description,
  gradient,
  phase,
}: PlaceholderPageProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex items-center justify-center min-h-[calc(100vh-140px)] lg:min-h-[calc(100vh-80px)]"
    >
      <div className="text-center space-y-6 max-w-sm px-4">
        {/* Icon */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div
            className={cn(
              "w-20 h-20 rounded-3xl flex items-center justify-center",
              "bg-gradient-to-br",
              gradient,
              "text-white shadow-glass-lg"
            )}
          >
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Phase badge */}
        {phase && (
          <motion.div variants={itemVariants} className="flex justify-center">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                "bg-surface border border-border/60",
                "text-xs font-medium text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-gradient-to-br flex-shrink-0",
                  gradient
                )}
              />
              Coming in {phase}
            </span>
          </motion.div>
        )}

        {/* Decorative grid skeleton */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-2 mt-4 opacity-30 pointer-events-none select-none"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-xl bg-muted"
              style={{ opacity: 1 - i * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
