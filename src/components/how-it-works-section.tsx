"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Cpu,
  PhoneCall,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Discovery & Onboarding",
    description:
      "We learn your business inside out — your booking links, FAQs, tone preferences, and operational specifics. You tell us how you want your AI to sound and what questions it should handle.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Agent Build",
    description:
      "Our team architects and builds a custom AI voice and chat agent tailored to your business. We configure intelligent routing, calendar integration, and conversation flows specific to your industry.",
  },
  {
    step: "03",
    icon: PhoneCall,
    title: "Testing & Quality Assurance",
    description:
      "Before going live, we rigorously test every interaction. We ensure the AI sounds professional, handles tasks correctly, and manages edge cases just the way your team would.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Ongoing Support",
    description:
      "Your AI agent goes live on your phones, website, and social channels. We monitor performance, optimize conversations, and provide ongoing maintenance as your business evolves.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-radial-hero opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} custom={0}>
            <Badge
              variant="outline"
              className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
            >
              How It Works
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            From discovery to deployment
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          >
            A straightforward four-step process to get your custom AI agent
            live and handling your frontline communication.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeInUp}
              className="relative"
            >
              <div className="group p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-brand/20 hover:shadow-[0_0_30px_rgba(101,155,255,0.04)] h-full">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-muted border border-brand/10 transition-colors group-hover:border-brand/20">
                    <item.icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="font-heading text-sm font-medium text-brand/60 tracking-wider">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}