"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
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

const PRICE_PER_MIN = 0.5;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AICallReceptionistPage() {
  const [callsPerMonth, setCallsPerMonth] = useState(200);
  const [avgCallDuration, setAvgCallDuration] = useState(7);

  const estimatedMinutes = callsPerMonth * avgCallDuration;
  const estimatedVoiceCost = estimatedMinutes * PRICE_PER_MIN;

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  AI Voice Receptionist
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto"
              >
                Your Phone Lines,{" "}
                <span className="text-brand">Always Covered</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
              >
                A natural-sounding AI voice agent that answers every phone call
                your business receives. It speaks with callers, answers questions
                about your services and availability, books appointments directly
                into your calendar, and sends follow-up messages — 24 hours a
                day, 365 days a year.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                custom={3}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="h-12 px-8 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(101,155,255,0.3)] group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left: Detailed Description */}
              <motion.div
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
                  className="mt-6 font-heading text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  An AI that answers, books, and follows up — just like your
                  best front-desk employee
                </motion.h2>

                <motion.div
                  variants={fadeInUp}
                  custom={2}
                  className="mt-6 space-y-4 text-muted-foreground font-body text-sm sm:text-base leading-relaxed"
                >
                  <p>
                    Every time a customer calls your business, our AI voice
                    receptionist picks up — instantly. No hold music, no
                    voicemail, no missed opportunities. It understands natural
                    speech, responds conversationally, and handles the entire
                    interaction from greeting to booking.
                  </p>
                  <p>
                    The AI is trained on your specific business: your services,
                    your pricing, your hours, your policies. Callers get accurate
                    answers every time. When someone wants to book, the AI
                    checks real-time availability and creates the appointment
                    directly in your calendar or booking software.
                  </p>
                  <p>
                    After the call, the system automatically sends a follow-up
                    SMS with the booking details, a confirmation link, and any
                    relevant information. If a question is too complex, the AI
                    intelligently routes the call to a live team member or takes
                    a message for a callback.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right: Feature List */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={2}
                variants={fadeInUp}
              >
                <Card className="h-full border-brand/20 bg-card">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-muted">
                        <Phone className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">
                        Key Capabilities
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {[
                        "Natural, human-like voice conversations",
                        "Direct calendar and booking software integration",
                        "24/7 availability including after-hours and holidays",
                        "Intelligent routing for complex questions",
                        "Post-interaction SMS follow-ups",
                        "Multi-language support",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm font-body"
                        >
                          <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Estimator Section */}
        <section className="relative py-24 sm:py-32">
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
                  Cost Estimator
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              >
                Estimate your monthly voice cost
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
              >
                Voice usage is billed per minute at a flat rate. Adjust the
                sliders below to match your business call volume.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={3}
              variants={fadeInUp}
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
                          Adjust the sliders to match your business call volume
                          and see your estimated monthly voice cost.
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
                        {estimatedMinutes.toLocaleString()} minutes @ $
                        {PRICE_PER_MIN}/min
                      </p>

                      <div className="w-full space-y-3 text-left">
                        <div className="flex justify-between text-sm font-body py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Calls/month
                          </span>
                          <span className="font-medium">
                            {callsPerMonth.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-body py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Avg. duration
                          </span>
                          <span className="font-medium">
                            {avgCallDuration} min
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-body py-2">
                          <span className="text-muted-foreground">Rate</span>
                          <span className="font-medium">
                            ${PRICE_PER_MIN}/min
                          </span>
                        </div>
                      </div>

                      <p className="mt-6 text-xs text-muted-foreground font-body leading-relaxed">
                        Note: This is an estimated cost for monthly voice credits
                        only. Monthly maintenance and service fees are billed
                        separately.
                      </p>

                      <Button
                        onClick={scrollToContact}
                        className="w-full mt-6 h-11 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)]"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <ContactForm defaultPackage="voice-receptionist" />
      </main>

      <Footer />
    </div>
  );
}