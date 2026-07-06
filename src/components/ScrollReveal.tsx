"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      whileInView={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : delay }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
