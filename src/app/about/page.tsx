"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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

const FOUNDERS = [
  {
    image: "/shaheer.JPG",
    name: "Shaheer",
    title: "Owner",
    badge: "Owner",
    bio: "A 22-year-old AI and business enthusiast leading a talented team that builds powerful automations. Shaheer brings the vision and technical direction that drives ZenFlow forward.",
  },
  {
    image: "/talha.JPG",
    name: "Talha",
    title: "Co-Owner",
    badge: "Co-Owner",
    bio: "22 years old and Shaheer's cousin, Talha leads the growth team. He's responsible for expanding ZenFlow's reach and bringing AI solutions to new businesses every day.",
  },
  {
    image: "/momin.png",
    name: "Momin",
    title: "Co-Owner",
    badge: "Co-Owner",
    bio: "23 years old and a childhood friend of Shaheer and Talha, Momin manages all operations. He ensures every project runs smoothly from onboarding to launch and beyond.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col noise-overlay relative">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* ---- Origin Section ---- */}
        <section id="origin" className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-radial-hero opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  Our Story
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              >
                How ZenFlow Began
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                custom={2}
                className="mt-8 space-y-5 text-muted-foreground font-body text-sm sm:text-base leading-relaxed"
              >
                <p>
                  It started with a simple observation: businesses were losing
                  revenue every single day — not because their services weren&apos;t
                  good, but because they couldn&apos;t answer every call, respond to
                  every message, or follow up with every lead. As someone deeply
                  immersed in AI and automation technology, the solution felt
                  obvious. The challenge was making it accessible.
                </p>
                <p>
                  Enterprise-grade AI systems existed, but they came with
                  enterprise-grade price tags that put them out of reach for the
                  small and mid-sized service businesses that needed them most.
                  That gap became the founding idea behind ZenFlow Automations —
                  an agency built to bring the same powerful AI voice agents, chat
                  receptionists, and workflow automations to businesses of every
                  size, at a fraction of the traditional cost.
                </p>
                <p>
                  What began as a solo vision quickly became a team effort. Two
                  close friends — Talha and Momin — shared the belief that AI
                  shouldn&apos;t be a luxury reserved for large corporations. Together,
                  the three of us built ZenFlow from the ground up. Based in
                  Pakistan, we leverage a world-class technical talent pool and an
                  efficient operations model to deliver solutions that rival
                  agencies charging five times as much. Our clients get
                  cutting-edge AI without the bloated invoices — and that&apos;s
                  exactly how we intend to keep it.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---- Meet the Founders Section ---- */}
        <section
          id="team"
          className="relative py-16 sm:py-24 border-t border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div variants={fadeInUp} custom={0}>
                <Badge
                  variant="outline"
                  className="border-brand/20 bg-brand-muted text-brand font-body text-xs tracking-wide px-4 py-1.5 rounded-full"
                >
                  The Team
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="mt-6 font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              >
                Meet the Founders
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-3 text-muted-foreground font-body text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
              >
                Three partners, one mission — to bring AI automation to every
                service business.
              </motion.p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {FOUNDERS.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  variants={fadeInUp}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-brand/20 hover:shadow-[0_0_30px_rgba(101,155,255,0.04)]">
                    {/* Photo fills entire card */}
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />

                    {/* Gradient overlay — dark gradient works over the photo in both themes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
                          {founder.name}
                        </h3>
                        <Badge className="bg-brand/20 text-brand border-brand/30 font-body text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                          {founder.badge}
                        </Badge>
                      </div>

                      <p className="text-sm text-white/70 font-body mb-2.5">
                        {founder.title}
                      </p>

                      <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed line-clamp-3">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}