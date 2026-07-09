"use client";

import { useState, useCallback } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FaqSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
    // Small delay so splash fade-out finishes before content appears
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

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
            <HowItWorksSection />
            <PricingSection />
            <FaqSection />
            <AboutSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}