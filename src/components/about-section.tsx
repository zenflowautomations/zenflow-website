"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const VALUES = [
  {
    title: "Professional",
    description:
      "We communicate with the quiet confidence of experts who know how to solve your problem. Clear, precise, and always on-brand.",
  },
  {
    title: "Trustworthy",
    description:
      "We build AI systems that represent your business the way you would. Every interaction is tested to ensure accuracy and reliability.",
  },
  {
    title: "Innovative",
    description:
      "We stay at the forefront of AI voice, chat, and automation technology, continuously refining our agents to deliver better results for your business.",
  },
  {
    title: "Accessible",
    description:
      "Enterprise-level AI does not require enterprise-level budgets. We leverage an efficient operations model to deliver powerful results at a fraction of the cost.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Mission & Vision */}
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
                About ZenFlow
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              AI that frees businesses from repetitive work
            </motion.h2>

            <motion.div variants={fadeInUp} custom={2} className="mt-8 space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  We harness AI to free business owners from the stress of
                  missed calls, lost leads, and manual tasks. We seamlessly
                  blend intelligent technology alongside human teams, taking
                  over the repetitive workload of bookings, follow-ups, and
                  customer service so entrepreneurs can reclaim their time.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Our Vision
                </h3>
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  A world where service-based businesses operate in a perfect
                  state of flow. AI seamlessly absorbs the chaos of frontline
                  communication, entirely eliminating missed calls and lost
                  revenue, so that business owners are finally free to focus on
                  their craft, their clients, and their own growth.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Our Promise
                </h3>
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  Enterprise-grade AI automation at small-business prices. We
                  make advanced, revenue-saving technology accessible to
                  businesses that thought custom AI was out of their budget,
                  delivering the same powerful results as large firms with an
                  ROI you can feel from day one.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Values grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeInUp}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-brand/20 hover:shadow-[0_0_30px_rgba(101,155,255,0.04)]"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-muted flex items-center justify-center mb-4">
                  <span className="text-brand font-heading text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}