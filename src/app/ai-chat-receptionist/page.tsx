"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Check,
  ClipboardList,
  Cpu,
  PhoneCall,
  Rocket,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const FEATURES = [
  "Website chat widget integration",
  "Instagram and Facebook DM automation",
  "FAQ handling with intelligent routing",
  "Direct booking link delivery",
  "CRM and software integration",
  "24/7 availability",
];

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "You Share Your Info",
    description:
      "You provide your FAQs, service details, booking links, pricing, and brand tone. We learn exactly how you want your AI to represent your business.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "We Build Your Chat Agent",
    description:
      "Our team designs and configures a custom AI chat agent trained on your specific business data, conversation flows, and escalation rules.",
  },
  {
    step: "03",
    icon: PhoneCall,
    title: "Testing & Refinement",
    description:
      "We test every scenario — common questions, edge cases, and routing logic — to make sure the bot responds accurately before it goes live.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go Live & Monitor",
    description:
      "Your chat agent deploys on your website and social channels. We monitor performance, optimize responses, and provide ongoing maintenance.",
  },
];

export default function AIChatReceptionistPage() {
  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-radial-hero" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  <MessageSquare className="h-3 w-3 mr-1.5" />
                  AI Chat Receptionist
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto"
              >
                Instant Responses,{" "}
                <span className="text-brand">Every Conversation</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
              >
                An AI-powered chat agent that lives on your website and social
                media DMs — answering questions, capturing leads, and delivering
                booking links around the clock, so you never miss an opportunity.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              {/* Left: Description */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.h2
                  variants={fadeInUp}
                  custom={0}
                  className="font-heading text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Your always-on digital{" "}
                  <span className="text-brand">front desk</span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  custom={1}
                  className="mt-6 text-base text-muted-foreground font-body leading-relaxed"
                >
                  Every second a visitor waits for a reply is a second they
                  might leave. Our AI Chat Receptionist engages instantly — on
                  your website chat widget, Instagram DMs, and Facebook
                  Messenger — providing accurate answers about your services,
                  pricing, hours, and availability.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  custom={2}
                  className="mt-4 text-base text-muted-foreground font-body leading-relaxed"
                >
                  When a conversation needs a human, the AI routes it
                  intelligently to your team with full context. When it does not
                  need a human, it captures the lead, delivers your booking link,
                  and logs everything into your CRM — automatically.
                </motion.p>
              </motion.div>

              {/* Right: Features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={2}
                variants={fadeInUp}
              >
                <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
                  <h3 className="font-heading text-lg font-semibold mb-6">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-4">
                    {FEATURES.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm font-body"
                      >
                        <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Onboarding Process Section */}
        <section id="process" className="relative py-24 sm:py-32">
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
                From info to live chat in days
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
              >
                Getting your AI chat receptionist up and running is a
                straightforward four-step process. We handle the heavy lifting —
                you just provide the knowledge.
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

        {/* Contact Form CTA */}
        <ContactForm defaultPackage="chat-receptionist" />
      </main>

      <Footer />
    </div>
  );
}