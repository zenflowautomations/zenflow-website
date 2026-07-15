"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, ChevronDown, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Services", href: "/#services" },
      { label: "Industries", href: "/#industries" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isHashLink(href: string) {
  return href.startsWith("/#");
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeExpanded, setHomeExpanded] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileOpen(false);
      setHomeExpanded(false);
      if (isHashLink(href)) {
        e.preventDefault();
        const hash = href.replace("/", "");
        if (pathname !== "/") {
          window.location.href = href;
          return;
        }
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [pathname]
  );

  const isActive = (href: string) => {
    if (isHashLink(href)) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-semibold tracking-tight">
              <span className="text-brand">Zen</span>Flow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label} open={homeExpanded} onOpenChange={setHomeExpanded}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 text-sm font-body transition-colors rounded-md flex items-center gap-1 ${
                        isActive(link.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Home className="h-3.5 w-3.5" />
                      {link.label}
                      <ChevronDown className="h-3 w-3 opacity-50" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48 font-body">
                    {link.children.map((child, i) => (
                      <div key={child.label}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className="text-sm cursor-pointer"
                          >
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                        {i < link.children.length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-body transition-colors rounded-md ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}

            <Button
              asChild
              className="hidden md:inline-flex h-9 px-5 bg-brand hover:bg-brand-dark text-white font-body text-sm rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(101,155,255,0.3)]"
            >
              <Link href="/contact">Get Started</Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-9 w-9"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-background border-border p-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center justify-between px-6 mb-8">
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                      <span className="font-heading text-lg font-semibold">
                        <span className="text-brand">Zen</span>Flow
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-1 px-4">
                    {NAV_LINKS.map((link) =>
                      link.children ? (
                        <div key={link.label}>
                          <button
                            onClick={() => setHomeExpanded(!homeExpanded)}
                            className="w-full flex items-center justify-between px-4 py-3 text-base font-body text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <Home className="h-4 w-4" />
                              {link.label}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                homeExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {homeExpanded && (
                            <div className="ml-8 flex flex-col gap-0.5">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={(e) => handleNavClick(e, child.href)}
                                  className="px-4 py-2.5 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="px-4 py-3 text-base font-body text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
                  <div className="mt-auto p-6">
                    <Button
                      asChild
                      className="w-full h-11 bg-brand hover:bg-brand-dark text-white font-body rounded-full"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}