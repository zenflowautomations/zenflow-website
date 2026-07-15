"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

interface ContactFormProps {
  defaultPackage?: string;
  customId?: string;
}

export function ContactForm({ defaultPackage, customId }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name") as string,
          email: data.get("email") as string,
          phone: data.get("phone") as string,
          business: data.get("business") as string,
          package: data.get("package") as string,
          message: data.get("message") as string,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Submission failed");
      }

      setSubmitted(true);
      toast({
        title: "Message sent",
        description: "We will be in touch within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const id = customId || "contact";

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-hero opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-muted text-brand text-xs font-body font-medium tracking-wide">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Ready to automate your front line?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
            >
              Tell us about your business and we will reach out within 24
              hours to discuss how ZenFlow can protect your revenue and free
              up your team.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={3}
              className="mt-10 space-y-4"
            >
              {[
                { label: "Email", value: "hello@zenflowautomations.com" },
                { label: "Response Time", value: "Within 24 hours" },
                { label: "Availability", value: "Mon - Sat, 10 AM - 2 AM EST" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-sm font-body font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeInUp}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 rounded-2xl border border-border bg-card">
                <CheckCircle2 className="h-12 w-12 text-brand mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Thank you
                </h3>
                <p className="text-muted-foreground font-body text-sm max-w-sm">
                  Your message has been received. We will review your details
                  and get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full font-body"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-name`} className="font-body text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id={`${id}-name`}
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="h-11 rounded-lg bg-background border-border font-body text-sm placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-email`} className="font-body text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id={`${id}-email`}
                      name="email"
                      type="email"
                      required
                      placeholder="jane@yourbusiness.com"
                      className="h-11 rounded-lg bg-background border-border font-body text-sm placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-phone`} className="font-body text-sm font-medium">
                      Phone
                    </Label>
                    <Input
                      id={`${id}-phone`}
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-11 rounded-lg bg-background border-border font-body text-sm placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-business`} className="font-body text-sm font-medium">
                      Business Name
                    </Label>
                    <Input
                      id={`${id}-business`}
                      name="business"
                      placeholder="Your Business"
                      className="h-11 rounded-lg bg-background border-border font-body text-sm placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium">Interested In</Label>
                  <Select name="package" defaultValue={defaultPackage}>
                    <SelectTrigger className="h-11 rounded-lg bg-background border-border font-body text-sm">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voice-receptionist">AI Voice Receptionist</SelectItem>
                      <SelectItem value="chat-receptionist">AI Chat Receptionist</SelectItem>
                      <SelectItem value="automations">AI Automations</SelectItem>
                      <SelectItem value="full-package">Full Package (Total Zen)</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-message`} className="font-body text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id={`${id}-message`}
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your business and what you are looking for..."
                    className="rounded-lg bg-background border-border font-body text-sm placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-brand hover:bg-brand-dark text-white font-body font-medium rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}