"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="page-enter"
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
