"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What exactly does an AI receptionist do?",
    answer:
      "An AI receptionist handles the same tasks as a human front-desk worker: it answers phone calls and chat messages, responds to common questions about your services, pricing, and hours, and books appointments directly into your existing calendar software. It operates 24/7, ensuring you never miss a lead, even during peak hours, after closing, or on holidays.",
  },
  {
    question: "Will the AI sound robotic or unnatural to my clients?",
    answer:
      "No. Our AI voice agents are built with natural-language voice technology that speaks with a calm, professional tone. Your clients will experience a conversation that feels human-like and polished. For our Total Zen tier, we also offer custom voice cloning so the AI can sound exactly like your best team member.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "The full process typically takes 1 to 2 weeks. This includes the discovery and onboarding phase, building and configuring your AI agent, rigorous testing to ensure it handles every scenario correctly, and final deployment. We make sure everything works perfectly before going live.",
  },
  {
    question: "Does it integrate with my existing booking software?",
    answer:
      "Yes. We integrate directly with popular booking platforms and CRMs used across industries. Whether you use Vagaro, Mindbody, Square Appointments, Dentrix, or custom solutions, your AI receptionist can check availability and book appointments in real time without requiring any changes to your current setup.",
  },
  {
    question: "What happens when the AI encounters a question it cannot answer?",
    answer:
      "The AI is configured with intelligent routing. If a caller or chatter asks something outside its knowledge base, the system routes the conversation to a human team member. This ensures your clients always receive accurate, helpful responses while the AI handles the repetitive, high-volume inquiries autonomously.",
  },
  {
    question: "Is this a replacement for my staff?",
    answer:
      "Not at all. Our AI agents are designed to work alongside your human team, not replace them. They absorb the repetitive, high-volume workload so your staff can focus on providing an exceptional in-person experience for clients who are physically at your business. Think of it as a tireless assistant that handles the phones and chats so your team doesn't have to.",
  },
  {
    question: "What if I need to update information like pricing or hours?",
    answer:
      "You can request updates at any time and we will apply them promptly. Changes to pricing, hours, services, or any other information the AI references can be updated in your ongoing maintenance plan. Our goal is to keep your AI agent accurate and current.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We currently specialize in Spas & Wellness and Dental Clinics, with more industries being added soon. Our AI receptionist and automation technology is applicable to any service-based business that relies on phone calls, appointments, and customer communication. If your industry isn't listed, reach out — we'd love to explore how we can help.",
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

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} custom={0}>
            <Badge
              variant="outline"
              className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
            >
              FAQ
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Common questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          >
            Straightforward answers to the questions business owners ask most.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={3}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="font-body text-left text-base sm:text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}