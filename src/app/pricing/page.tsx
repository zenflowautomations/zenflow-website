"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Phone, MessageSquare, Zap, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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

/* ------------------------------------------------------------------ */
/*  Package data types                                                */
/* ------------------------------------------------------------------ */
interface Package {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

interface ServiceSection {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent?: boolean;
  packages: Package[];
  addOn?: {
    text: string;
    subtext: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const SERVICE_SECTIONS: ServiceSection[] = [
  {
    id: "voice",
    label: "AI Voice Receptionist",
    title: "Voice Packages",
    subtitle:
      "A natural-sounding AI voice agent that answers every call, books appointments, and handles follow-ups — so you never miss a lead.",
    icon: <Phone className="h-5 w-5" />,
    accent: true,
    packages: [
      {
        name: "Starter",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Perfect for small businesses getting started with AI voice",
        features: [
          "AI voice call answering",
          "Up to [XXX] minutes/month included",
          "Basic call routing",
          "Appointment booking",
          "Email notifications",
        ],
      },
      {
        name: "Professional",
        price: "$XXX",
        priceNote: "one-time setup + $0.50/min",
        description:
          "For growing businesses that need full voice coverage",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "AI voice call answering",
          "Unlimited call minutes",
          "Intelligent call routing",
          "Direct calendar booking",
          "Post-visit SMS follow-ups",
          "Custom voice persona",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Unlimited voice with custom integrations and priority support",
        features: [
          "Everything in Professional",
          "Custom voice cloning",
          "CRM & software integrations",
          "Multi-location support",
          "Dedicated account manager",
          "Advanced analytics & reporting",
          "Custom call flows",
          "SLA guarantee",
        ],
      },
    ],
    addOn: {
      text: "Add Chat Receptionist for $XXX setup + $XXX/mo",
      subtext: "Add 24/7 chat coverage alongside your voice receptionist",
    },
  },
  {
    id: "chat",
    label: "AI Chat Receptionist",
    title: "Chat Packages",
    subtitle:
      "24/7 chat coverage for your website and social media DMs. Answers inquiries, delivers booking links, and routes complex questions to your team.",
    icon: <MessageSquare className="h-5 w-5" />,
    packages: [
      {
        name: "Starter",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Get started with AI chat on your website",
        features: [
          "Website chat widget",
          "FAQ handling",
          "Booking link delivery",
          "Basic customization",
          "Monthly performance report",
        ],
      },
      {
        name: "Professional",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Full chat coverage across web and social channels",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Website chat widget",
          "Instagram & Facebook DM automation",
          "FAQ handling & booking links",
          "Software integration",
          "Lead capture & qualification",
          "Custom chat persona",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Advanced chat AI with custom integrations and unlimited channels",
        features: [
          "Everything in Professional",
          "Multi-platform coverage",
          "Custom CRM integrations",
          "Advanced lead routing",
          "A/B tested conversation flows",
          "Dedicated account manager",
          "Analytics dashboard",
          "SLA guarantee",
        ],
      },
    ],
  },
  {
    id: "automations",
    label: "AI Automations",
    title: "Automation Packages",
    subtitle:
      "Custom workflow automations that eliminate manual tasks, connect your tools, and keep your operations running smoothly on autopilot.",
    icon: <Zap className="h-5 w-5" />,
    packages: [
      {
        name: "Starter",
        price: "$XXX",
        priceNote: "one-time setup",
        description:
          "Automate your first key workflow end to end",
        features: [
          "Up to [X] automated workflows",
          "Basic trigger-action design",
          "Email / SMS notifications",
          "Calendar sync",
          "Documentation & handoff",
        ],
      },
      {
        name: "Professional",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Comprehensive automation suite for growing businesses",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Up to [X] automated workflows",
          "Multi-step workflow design",
          "Software integrations",
          "No-show prevention",
          "Review request automation",
          "Lead nurturing sequences",
          "Ongoing optimization",
        ],
      },
      {
        name: "Enterprise",
        price: "$XXX",
        priceNote: "one-time setup + $XXX/mo",
        description:
          "Full-scale automation with custom integrations and dedicated support",
        features: [
          "Unlimited workflows",
          "Custom API integrations",
          "Advanced conditional logic",
          "Multi-location support",
          "Dedicated automation engineer",
          "Monthly strategy sessions",
          "Analytics & ROI tracking",
          "SLA guarantee",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

function PackageCard({
  pkg,
  sectionIndex,
  packageIndex,
}: {
  pkg: Package;
  sectionIndex: number;
  packageIndex: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={sectionIndex * 3 + packageIndex}
      variants={fadeInUp}
    >
      <Card
        className={`relative group h-full transition-all duration-300 bg-card overflow-hidden ${
          pkg.highlighted
            ? "border-brand/30 shadow-[0_0_50px_rgba(101,155,255,0.08)] scale-[1.02] lg:scale-105"
            : "border-border hover:border-brand/15"
        }`}
      >
        {pkg.highlighted && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
        )}
        <CardContent className="p-6 sm:p-8 flex flex-col h-full">
          {pkg.badge && (
            <Badge className="self-start mb-3 bg-brand text-white font-body text-[10px] px-2.5 py-0.5 rounded-full border-0">
              {pkg.badge}
            </Badge>
          )}

          <h3 className="font-heading text-lg font-semibold">{pkg.name}</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mt-2 mb-6">
            {pkg.description}
          </p>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-3xl font-bold">
                {pkg.price}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body mt-1">
              {pkg.priceNote}
            </p>
          </div>

          <ul className="space-y-2.5 mb-8 flex-1">
            {pkg.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm font-body"
              >
                <Check className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                <span className="text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className={`w-full h-11 font-body font-medium rounded-full transition-all duration-200 ${
              pkg.highlighted
                ? "bg-brand hover:bg-brand-dark text-white hover:shadow-[0_0_20px_rgba(101,155,255,0.3)] group/btn"
                : "bg-secondary hover:bg-secondary/80 text-foreground"
            }`}
          >
            <Link href="/contact">
              Get Started
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform ${pkg.highlighted ? "group-hover/btn:translate-x-1" : ""}`}
              />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero header */}
        <section className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  Pricing
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              >
                Simple, transparent pricing
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto"
              >
                Choose the service and package that fits your business. Every
                plan includes a one-time setup and the ongoing support you need
                to succeed.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Service sections */}
        {SERVICE_SECTIONS.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className={`relative py-16 sm:py-24 ${si > 0 ? "border-t border-border" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section header */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mb-12 sm:mb-16"
              >
                <motion.div
                  variants={fadeInUp}
                  custom={0}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-muted">
                    <span className="text-brand">{section.icon}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-3 py-1 rounded-full"
                  >
                    {section.label}
                  </Badge>
                </motion.div>
                <motion.h2
                  variants={fadeInUp}
                  custom={1}
                  className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  custom={2}
                  className="mt-3 text-muted-foreground font-body text-sm sm:text-base leading-relaxed max-w-2xl"
                >
                  {section.subtitle}
                </motion.p>
              </motion.div>

              {/* Package cards */}
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {section.packages.map((pkg, pi) => (
                  <PackageCard
                    key={pkg.name}
                    pkg={pkg}
                    sectionIndex={si}
                    packageIndex={pi}
                  />
                ))}
              </div>

              {/* Add-on (only for voice) */}
              {section.addOn && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={si * 3 + 3}
                  variants={fadeInUp}
                  className="mt-8"
                >
                  <div className="border border-dashed border-brand/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Plus className="h-4 w-4 text-brand shrink-0" />
                      <span className="text-sm font-body font-medium text-brand">
                        {section.addOn.text}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body sm:ml-auto sm:text-right">
                      {section.addOn.subtext}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        ))}

        {/* Custom / Enterprise CTA */}
        <section className="relative py-16 sm:py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Card className="border-brand/20 bg-card overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
                  <CardContent className="p-8 sm:p-12 text-center">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                      Need something custom?
                    </h2>
                    <p className="mt-3 text-muted-foreground font-body text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                      Have unique requirements or need a tailored solution?
                      Let&apos;s talk.
                    </p>
                    <div className="mt-8">
                      <Button
                        asChild
                        className="h-11 px-8 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)] group/btn"
                      >
                        <Link href="/contact">
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}