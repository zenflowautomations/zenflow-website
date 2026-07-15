import type { Metadata } from "next";
import { Inter, Manrope, Lexend_Deca } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZenFlow Automations | AI Automation Agency — Voice, Chat & Workflow Agents",
  description:
    "Enterprise-grade AI automations, voice agents, and chat receptionists for service-based businesses. We build custom AI systems that handle calls, book appointments, and automate workflows across industries.",
  keywords: [
    "AI automation agency",
    "AI receptionist",
    "AI voice agent",
    "AI chat agent",
    "automated booking",
    "AI automations",
    "voice AI",
    "workflow automation",
    "ZenFlow Automations",
    "AI for spas",
    "AI for dental clinics",
  ],
  authors: [{ name: "ZenFlow Automations" }],
  openGraph: {
    title: "ZenFlow Automations | AI Automation Agency — Voice, Chat & Workflow Agents",
    description:
      "Enterprise-grade AI automations, voice agents, and chat receptionists for service-based businesses across industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} ${lexendDeca.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}