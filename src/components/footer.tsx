"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Services: [
    { label: "AI Voice Receptionist", href: "#services" },
    { label: "AI Chat Receptionist", href: "#services" },
    { label: "AI Automations", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <span className="font-heading text-xl font-semibold tracking-tight">
                <span className="text-brand">Zen</span>Flow
              </span>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground font-body leading-relaxed">
                Enterprise-grade AI receptionists for modern spas. We handle the
                frontline communication so you can focus on what matters most.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-8 px-4 rounded-full text-xs font-body border-border hover:border-brand/30"
                >
                  <a
                    href="https://instagram.com/zenflowautomations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
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
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
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
            AI Receptionists for Modern Spas
          </p>
        </div>
      </div>
    </footer>
  );
}