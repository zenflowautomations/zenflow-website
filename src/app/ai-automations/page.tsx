"use client";

import { motion } from "framer-motion";
import { Check, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

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
  "No-show prevention SMS sequences",
  "Automated post-appointment review requests",
  "Custom workflow design with Make.com",
  "CRM and booking system integrations",
  "Multi-step follow-up campaigns",
  "Ongoing optimization and maintenance",
];

const INDUSTRIES = [
  {
    name: "Spas & Wellness",
    tagline: "From booking to review, fully automated",
    description:
      "Automate the entire client journey — from the moment they book to the review they leave. Our spa automations handle reminders, onboarding, rebooking prompts, and loyalty rewards so your staff can focus on delivering exceptional treatments.",
    automations: [
      "Appointment reminder & no-show prevention",
      "Post-visit review request automation",
      "New client onboarding sequence",
      "Rebooking & retention campaigns",
      "Birthday & loyalty rewards",
    ],
    accent: true,
  },
  {
    name: "Dental Clinics",
    tagline: "Keep your schedule packed, effortlessly",
    description:
      "Dental practices thrive on full schedules. Our automations recover cancelled slots, send preparation reminders, verify insurance details, and run patient reactivation campaigns — all without your team lifting a finger.",
    automations: [
      "Cancellation slot recovery sequence",
      "Pre-appointment preparation reminders",
      "Insurance verification automation",
      "Patient follow-up after procedures",
      "Recall & reactivation campaigns",
    ],
    accent: false,
  },
];

export default function AIAutomationsPage() {
  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  AI Automations
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Automate Everything Between the First Click and the Follow-Up
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-6 text-base sm:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto"
              >
                Custom automated workflows that connect your AI agents to your
                business operations. From no-show prevention to multi-step
                follow-up campaigns, we build the systems that keep your business
                running without manual effort.
              </motion.p>
              <motion.div variants={fadeInUp} custom={3} className="mt-8 flex justify-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-muted">
                  <Workflow className="h-7 w-7 text-brand" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col justify-center"
              >
                <motion.h2
                  variants={fadeInUp}
                  custom={0}
                  className="font-heading text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Workflows that work while you sleep
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  custom={1}
                  className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
                >
                  Every missed follow-up is a missed opportunity. Our AI
                  automations eliminate the gaps between first contact and
                  long-term retention by building intelligent, multi-step
                  workflows that run 24/7. Whether it&apos;s a no-show prevention
                  sequence triggered by a calendar event or a review request
                  sent after an appointment, every touchpoint is automated,
                  personalized, and optimized for conversions.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  custom={2}
                  className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
                >
                  We design custom workflows using Make.com that integrate
                  seamlessly with your CRM, booking software, and
                  communication channels. And unlike set-it-and-forget-it
                  tools, we continuously monitor and optimize every
                  automation to ensure it delivers measurable results for
                  your business.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={3}
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

        {/* Industry Examples Section */}
        <section id="examples" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-radial-hero opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  Industry Examples
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              >
                See how automations work across industries
              </motion.h2>
            </motion.div>

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

                      <div className="flex flex-wrap gap-2.5 flex-1">
                        {industry.automations.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-background/80 text-xs font-body text-foreground/70 transition-colors group-hover:border-brand/15"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <ContactForm defaultPackage="automations" />
      </main>

      <Footer />
    </div>
  );
}