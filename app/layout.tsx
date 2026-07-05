import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  metadataBase: new URL("https://suryapandi.com"),
  title: { default: "Surya Pandi S | Full Stack Developer & AI Generalist", template: "%s | Surya Pandi S" },
  description: "Surya Pandi S is a Full Stack Developer and AI Generalist from India who builds modern web applications with Next.js, Supabase, and clean UI/UX.",
  applicationName: "Surya Pandi S Portfolio",
  authors: [{ name: "Surya Pandi S", url: "https://suryapandi.com" }],
  creator: "Surya Pandi S",
  publisher: "Surya Pandi S",
  category: "technology",
  keywords: ["Surya Pandi S", "Surya Pandi", "Full Stack Developer", "Next.js developer", "Supabase", "AI Generalist", "JavaScript", "Python", "India"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Surya Pandi S Portfolio",
    title: "Surya Pandi S | Full Stack Developer & AI Generalist",
    description: "Portfolio of Surya Pandi S, building modern web applications with Next.js, Supabase, AI-assisted workflows, and clean UI/UX.",
    images: [{ url: "/images/profile.jpg", width: 1080, height: 1037, alt: "Surya Pandi S" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Pandi S | Full Stack Developer & AI Generalist",
    description: "Portfolio of Surya Pandi S, building modern web applications with Next.js, Supabase, and clean UI/UX.",
    images: ["/images/profile.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#0c0c0c", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollProgress /><PageTransition /><Header /><main>{children}</main><Footer /></body></html>;
}
