"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone, MessageSquare, Mic, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const PRICE_PER_MIN = 0.5;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function PricingSection() {
  const [callsPerMonth, setCallsPerMonth] = useState(200);
  const [avgCallDuration, setAvgCallDuration] = useState(7);

  const estimatedMinutes = callsPerMonth * avgCallDuration;
  const estimatedVoiceCost = estimatedMinutes * PRICE_PER_MIN;

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
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
              Pricing
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          >
            A one-time setup fee gets you started. Voice usage is billed per
            minute at a flat rate. Use the estimator below to see your monthly
            cost based on your call volume.
          </motion.p>
        </motion.div>

        {/* Estimator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={3}
          variants={fadeInUp}
          className="mb-16 sm:mb-20"
        >
          <Card className="border-brand/20 bg-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
            <CardContent className="p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-10">
                {/* Controls */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      Monthly Cost Estimator
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Adjust the sliders to match your spa&apos;s call volume and see your estimated monthly voice cost.
                    </p>
                  </div>

                  {/* Calls per month slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-body text-sm font-medium">
                        Calls per month
                      </Label>
                      <span className="font-heading text-lg font-bold text-brand">
                        {callsPerMonth.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[callsPerMonth]}
                      onValueChange={([val]) => setCallsPerMonth(val)}
                      min={50}
                      max={2000}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground font-body">
                      <span>50</span>
                      <span>2,000</span>
                    </div>
                  </div>

                  {/* Average call duration slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-body text-sm font-medium">
                        Avg. call duration
                      </Label>
                      <span className="font-heading text-lg font-bold text-brand">
                        {avgCallDuration} min
                      </span>
                    </div>
                    <Slider
                      value={[avgCallDuration]}
                      onValueChange={([val]) => setAvgCallDuration(val)}
                      min={3}
                      max={15}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground font-body">
                      <span>3 min</span>
                      <span>15 min</span>
                    </div>
                  </div>
                </div>

                {/* Estimate summary */}
                <div className="lg:min-w-[280px] p-6 sm:p-8 rounded-2xl border border-border bg-background/50 flex flex-col items-center text-center">
                  <p className="text-sm text-muted-foreground font-body mb-1">
                    Estimated monthly voice cost
                  </p>
                  <p className="font-heading text-5xl font-bold text-brand mb-1">
                    {formatCurrency(estimatedVoiceCost)}
                  </p>
                  <p className="text-xs text-muted-foreground font-body mb-6">
                    {estimatedMinutes.toLocaleString()} minutes @ ${PRICE_PER_MIN}/min
                  </p>

                  <div className="w-full space-y-3 text-left">
                    <div className="flex justify-between text-sm font-body py-2 border-b border-border">
                      <span className="text-muted-foreground">Calls/month</span>
                      <span className="font-medium">{callsPerMonth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-body py-2 border-b border-border">
                      <span className="text-muted-foreground">Avg. duration</span>
                      <span className="font-medium">{avgCallDuration} min</span>
                    </div>
                    <div className="flex justify-between text-sm font-body py-2">
                      <span className="text-muted-foreground">Rate</span>
                      <span className="font-medium">${PRICE_PER_MIN}/min</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-6 h-11 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)]"
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
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Package Cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Zen Chat */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={4}
            variants={fadeInUp}
          >
            <Card className="relative group h-full transition-all duration-300 border-border bg-card overflow-hidden hover:border-brand/15">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-muted">
                    <MessageSquare className="h-4 w-4 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Zen Chat
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  AI Chat Receptionist
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  24/7 chat coverage for your website and social media DMs. Answers inquiries, delivers booking links, and routes complex questions to your team.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold">$499</span>
                    <span className="text-muted-foreground font-body text-sm">setup</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    $199/mo maintenance
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    "Website chat widget",
                    "Instagram & Facebook DMs",
                    "FAQ handling & booking links",
                    "Software integration",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                      <Check className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full h-11 bg-secondary hover:bg-secondary/80 text-foreground font-body font-medium rounded-full"
                >
                  <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Flow State */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={5}
            variants={fadeInUp}
          >
            <Card className="relative group h-full transition-all duration-300 border-brand/30 bg-card overflow-hidden shadow-[0_0_50px_rgba(101,155,255,0.08)] scale-[1.02] lg:scale-105">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <Badge className="self-start mb-3 bg-brand text-white font-body text-[10px] px-2.5 py-0.5 rounded-full border-0">
                  Most Popular
                </Badge>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-muted">
                    <Phone className="h-4 w-4 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Flow State
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  AI Voice Receptionist
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  A natural-sounding AI voice agent that answers every phone call, books appointments directly into your calendar, and sends post-visit follow-ups.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold">$1,499</span>
                    <span className="text-muted-foreground font-body text-sm">setup</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    ${PRICE_PER_MIN}/min voice usage
                  </p>
                </div>

                <ul className="space-y-2.5 mb-4 flex-1">
                  {[
                    "AI voice call answering",
                    "Natural, human-like conversation",
                    "Direct calendar booking",
                    "Post-visit SMS follow-ups",
                    "Intelligent routing",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                      <Check className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Add-on */}
                <div className="border border-dashed border-brand/20 rounded-xl p-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Plus className="h-3.5 w-3.5 text-brand" />
                    <span className="text-xs font-body font-medium text-brand">
                      Add Zen Chat for $399 setup + $199/mo
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-body mt-1 ml-5.5">
                    Add 24/7 chat coverage to your voice receptionist
                  </p>
                </div>

                <Button
                  asChild
                  className="w-full h-11 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)] group/btn"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Total Zen */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={6}
            variants={fadeInUp}
          >
            <Card className="relative group h-full transition-all duration-300 border-border bg-card overflow-hidden hover:border-brand/15">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-muted">
                    <Mic className="h-4 w-4 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Total Zen
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  Complete Front-Desk Automation
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  The full package. Voice and chat receptionists, custom voice cloning, automated review generation, no-show prevention, and unlimited voice minutes.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold">$3,499</span>
                    <span className="text-muted-foreground font-body text-sm">setup</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    $899/mo (unlimited voice included)
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    "AI voice + chat receptionists",
                    "Unlimited voice minutes",
                    "Custom voice cloning",
                    "Automated review generation",
                    "No-show prevention SMS",
                    "Priority support & optimization",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                      <Check className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full h-11 bg-secondary hover:bg-secondary/80 text-foreground font-body font-medium rounded-full"
                >
                  <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}