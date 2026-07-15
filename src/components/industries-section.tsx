"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MessageSquare,
  Workflow,
  CalendarCheck,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    name: "Spas & Wellness",
    tagline: "Focus on relaxation, not ring tones",
    description:
      "From boutique med-spas to large wellness centers, we handle appointment booking, service inquiries, no-show prevention, and review generation — so your front desk stays calm even during peak hours.",
    automations: [
      { icon: Phone, label: "AI Voice Receptionist" },
      { icon: MessageSquare, label: "AI Chat Receptionist" },
      { icon: CalendarCheck, label: "Automated Booking" },
      { icon: Star, label: "Review Generation" },
      { icon: Clock, label: "No-Show Prevention" },
      { icon: Workflow, label: "Workflow Automations" },
    ],
    accent: true,
  },
  {
    name: "Dental Clinics",
    tagline: "Every patient call answered, every slot filled",
    description:
      "Dental practices lose thousands to missed calls and unfilled cancellations. Our AI agents answer calls, book and reschedule appointments, handle insurance FAQs, and run follow-up sequences to keep your schedule packed.",
    automations: [
      { icon: Phone, label: "AI Voice Receptionist" },
      { icon: MessageSquare, label: "AI Chat Receptionist" },
      { icon: CalendarCheck, label: "Automated Booking" },
      { icon: Workflow, label: "Cancellation Recovery" },
      { icon: Clock, label: "Appointment Reminders" },
      { icon: Sparkles, label: "Patient Follow-Ups" },
    ],
    accent: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />

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
              Industries We Serve
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Built for your industry
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          >
            We tailor every AI agent and automation to the unique needs of
            your industry. Here&apos;s where we specialize right now.
          </motion.p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeInUp}
            >
              <Card
                className={`relative group h-full transition-all duration-300 border-border bg-card overflow-hidden ${
                  industry.accent
                    ? "border-brand/30 shadow-[0_0_40px_rgba(101,155,255,0.08)]"
                    : "hover:border-brand/15 hover:shadow-[0_0_30px_rgba(101,155,255,0.04)]"
                }`}
              >
                {industry.accent && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
                )}

                <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                  {/* Name + tagline */}
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand font-body font-medium">
                      {industry.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  {/* Automation tags */}
                  <div className="flex flex-wrap gap-2.5 mb-8 flex-1">
                    {industry.automations.map((item) => (
                      <div
                        key={item.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/80 text-xs font-body text-foreground/70 transition-colors group-hover:border-brand/15"
                      >
                        <item.icon className="h-3 w-3 text-brand/70" />
                        {item.label}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full h-11 font-body font-medium rounded-full transition-all duration-200 group/btn ${
                      industry.accent
                        ? "bg-brand hover:bg-brand-dark text-white hover:shadow-[0_0_20px_rgba(101,155,255,0.3)]"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                    }`}
                  >
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Get Started for {industry.name.split(" ")[0]}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More industries coming soon */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          custom={2}
        >
          <p className="text-sm text-muted-foreground font-body">
            More industries coming soon. Don&apos;t see yours?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-brand font-medium hover:underline"
            >
              Let us know
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}