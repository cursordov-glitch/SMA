"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padded?: boolean;
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-none",
};

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
};

export function PageShell({
  children,
  className,
  maxWidth = "md",
  padded = true,
}: PageShellProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "min-h-full w-full mx-auto",
        maxWidthMap[maxWidth],
        padded && "px-4 py-5 md:px-6 md:py-6 lg:px-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
