"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting">(
    "entering"
  );

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 400);
    const t2 = setTimeout(() => setPhase("exiting"), 2800);
    const t3 = setTimeout(() => onComplete(), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
        animate={{
          opacity: phase === "exiting" ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(101,155,255,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: phase === "visible" ? [1, 1.1, 1] : 1,
            opacity: phase === "entering" ? 0 : 1,
          }}
          transition={{
            duration: phase === "visible" ? 2 : 0.8,
            ease: "easeInOut",
          }}
        />

        {/* Brand name */}
        <motion.div className="flex flex-col items-center">
          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{
              opacity: phase === "entering" ? 0 : 1,
              y: phase === "entering" ? 24 : 0,
              filter: phase === "entering" ? "blur(8px)" : "blur(0px)",
            }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-brand">Zen</span>Flow
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="h-[1px] bg-brand/30 mt-4 mb-3"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: phase === "entering" ? 0 : 80,
              opacity: phase === "entering" ? 0 : 0.5,
            }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <motion.p
            className="font-heading text-sm sm:text-base font-medium tracking-[0.25em] uppercase text-white/30"
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: phase === "entering" ? 0 : 1,
              y: phase === "entering" ? 8 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Automations
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-body text-xs text-white/20 mt-14 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "entering" ? 0 : 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          AI Receptionists for Modern Spas
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}