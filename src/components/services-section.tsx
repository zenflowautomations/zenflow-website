"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Workflow,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    title: "AI Voice Receptionist",
    description:
      "A natural-sounding AI voice agent that answers every phone call your business receives. It speaks with callers, answers questions about your services and availability, and books appointments directly into your calendar. No more missed calls, no more lost revenue, no more overwhelmed front desks.",
    features: [
      "Natural, human-like voice conversations",
      "Direct calendar and booking software integration",
      "Post-interaction SMS follow-ups",
      "Intelligent routing for complex questions",
      "24/7 availability including after-hours and holidays",
    ],
    icon: Phone,
    href: "/ai-call-receptionist",
    accent: true,
  },
  {
    title: "AI Chat Receptionist",
    description:
      "A 24/7 AI chat agent deployed on your website and social media DMs. It responds instantly to inquiries about pricing, location, hours, and services. When a question requires a human touch, it routes the conversation to your team seamlessly.",
    features: [
      "Website chat widget integration",
      "Instagram and Facebook DM automation",
      "FAQ handling with intelligent routing",
      "Direct booking link delivery",
      "CRM and software integration with your existing tools",
    ],
    icon: MessageSquare,
    href: "/ai-chat-receptionist",
    accent: false,
  },
  {
    title: "AI Automations",
    description:
      "Custom automated workflows that connect your AI agents to the rest of your business operations. From no-show prevention sequences and automated review generation to multi-step follow-up campaigns, we build the systems that keep your business running without manual effort.",
    features: [
      "No-show prevention SMS sequences",
      "Automated post-appointment review requests",
      "Custom workflow design with Make.com",
      "CRM and booking system integrations",
      "Ongoing optimization and maintenance",
    ],
    icon: Workflow,
    href: "/ai-automations",
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

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Our Services
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            What we build for you
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          >
            Three core AI solutions designed to handle your frontline
            communication, protect your revenue, and eliminate repetitive
            tasks — tailored to your industry.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeInUp}
            >
              <Card
                className={`relative group h-full transition-all duration-300 border-border bg-card overflow-hidden ${
                  service.accent
                    ? "border-brand/30 shadow-[0_0_40px_rgba(101,155,255,0.08)]"
                    : "hover:border-brand/15 hover:shadow-[0_0_30px_rgba(101,155,255,0.04)]"
                }`}
              >
                {service.accent && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
                )}
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-muted">
                      <service.icon className="h-5 w-5 text-brand" />
                    </div>
                    {service.accent && (
                      <Badge className="bg-brand text-white font-body text-[10px] px-2.5 py-0.5 rounded-full border-0">
                        Core Offering
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm font-body">
                        <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full h-11 font-body font-medium rounded-full transition-all duration-200 group/btn ${
                      service.accent
                        ? "bg-brand hover:bg-brand-dark text-white hover:shadow-[0_0_20px_rgba(101,155,255,0.3)]"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                    }`}
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}