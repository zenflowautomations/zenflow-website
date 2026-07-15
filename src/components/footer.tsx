"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const FOOTER_LINKS = {
  Services: [
    { label: "AI Voice Receptionist", href: "/ai-call-receptionist" },
    { label: "AI Chat Receptionist", href: "/ai-chat-receptionist" },
    { label: "AI Automations", href: "/ai-automations" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "Industries", href: "/#industries" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block">
                <span className="font-heading text-xl font-semibold tracking-tight">
                  <span className="text-brand">Zen</span>Flow
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground font-body leading-relaxed">
                Enterprise-grade AI agents and automations for service-based
                businesses. We handle the frontline communication so you can
                focus on what matters most.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-9 w-9 rounded-full border-border hover:border-brand/30 hover:bg-brand-muted"
                >
                  <a
                    href="https://instagram.com/zenflowautomations"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-heading text-sm font-semibold mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            {new Date().getFullYear()} ZenFlow Automations. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            AI Automation Agency
          </p>
        </div>
      </div>
    </footer>
  );
}