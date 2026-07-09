"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-hero" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(101,155,255,0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(101,155,255,0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -25, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-muted text-brand text-xs font-body font-medium tracking-wide">
            <Phone className="h-3 w-3" />
            AI Voice & Chat Receptionists
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Your AI Receptionist,{" "}
          <span className="text-brand">Always On</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Enterprise-grade AI voice and chat agents that answer every call, book
          appointments, and capture leads around the clock. Stop losing revenue to
          missed calls and overwhelmed front desks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-8 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(101,155,255,0.3)] group"
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 font-body font-medium rounded-full border-border hover:border-brand/30 hover:bg-brand-muted transition-all duration-200"
          >
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
            >
              See How It Works
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          {[
            { value: "24/7", label: "Availability" },
            { value: "< 1s", label: "Response Time" },
            { value: "98%", label: "Booking Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-brand">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 mb-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-brand"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}