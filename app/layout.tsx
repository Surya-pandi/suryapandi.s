import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  metadataBase: new URL("https://suryapandi.com"),
  title: { default: "Surya Pandi S - Full Stack Developer", template: "%s - Surya Pandi" },
  description: "Portfolio of Surya Pandi S, a Full Stack Developer and AI Generalist building Next.js and Supabase applications.",
  keywords: ["Full Stack Developer", "Next.js developer", "Supabase", "AI Generalist", "JavaScript", "Python", "India"],
  openGraph: {
    title: "Surya Pandi S - Full Stack Developer",
    description: "Next.js, Supabase, AI-assisted development, and end-to-end deployment.",
    images: ["/images/profile.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#0c0c0c", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollProgress /><PageTransition /><Header /><main>{children}</main><Footer /></body></html>;
}
