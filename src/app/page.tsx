"use client";

import { useState, useCallback, useSyncExternalStore, useEffect } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { IndustriesSection } from "@/components/industries-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const emptySubscribe = () => () => {};

function useHasVisited(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("zenflow_visited") === "true",
    () => false
  );
}

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const isReturning = useHasVisited();

  // Mark visited on first render (client-only side effect, no setState)
  useEffect(() => {
    if (!sessionStorage.getItem("zenflow_visited")) {
      sessionStorage.setItem("zenflow_visited", "true");
    }
  }, []);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <>
      {!splashDone && (
        <SplashScreen
          onComplete={handleSplashComplete}
          isReturning={isReturning}
        />
      )}

      {showContent && (
        <div className="min-h-screen flex flex-col noise-overlay relative">
          <Navigation />

          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HeroSection />
            </motion.div>
            <ServicesSection />
            <IndustriesSection />
            <HowItWorksSection />
            <FaqSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}