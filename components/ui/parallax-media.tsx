"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function ParallaxMedia({
  children,
  className,
  distance = 14,
}: Readonly<{ children: React.ReactNode; className?: string; distance?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div className="absolute -inset-y-5 inset-x-0" style={reduceMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
