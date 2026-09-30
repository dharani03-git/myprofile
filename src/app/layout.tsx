import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Cursor } from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Dharani G | AI Engineer | Full-Stack Developer | AI Automation",
  description: "Portfolio of Dharani G — AI Engineer and Full-Stack Developer building AI-powered applications, automation workflows, data-driven systems, and modern web experiences.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "AI Automation",
    "Machine Learning",
    "Python",
    "React.js",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "AI Agents",
    "Web Scraping",
    "CRM Development",
    "Automation",
    "Computer Vision",
    "Voice AI",
    "Shopify"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black overflow-x-hidden w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <div className="fixed inset-0 z-[9997] bg-scanlines opacity-[0.02] pointer-events-none" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
