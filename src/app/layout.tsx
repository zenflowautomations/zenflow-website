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
  title: "ZenFlow Automations | AI Voice & Chat Receptionists for Spas",
  description:
    "Enterprise-grade AI receptionists that answer calls, book appointments, and capture leads around the clock. Never miss another booking or inquiry.",
  keywords: [
    "AI receptionist",
    "AI voice agent",
    "spa automation",
    "automated booking",
    "chat receptionist",
    "voice AI",
    "spa management",
    "ZenFlow Automations",
  ],
  authors: [{ name: "ZenFlow Automations" }],
  openGraph: {
    title: "ZenFlow Automations | AI Voice & Chat Receptionists for Spas",
    description:
      "Enterprise-grade AI receptionists that answer calls, book appointments, and capture leads around the clock.",
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