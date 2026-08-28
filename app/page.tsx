import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PhotoScroll } from "@/components/photo-scroll";
import { Reveal } from "@/components/reveal";
import { CapabilitiesShowcase } from "@/components/capabilities-showcase";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://suryapandi.com/#person",
      name: "Surya Pandi S",
      alternateName: "Surya Pandi",
      url: "https://suryapandi.com/",
      image: "https://suryapandi.com/images/profile.jpg",
      jobTitle: "Full Stack Developer and AI Generalist",
      description: "B.Tech Information Technology student and full stack developer building modern web applications with Next.js and Supabase.",
      email: "mailto:suryapandi779@gmail.com",
      sameAs: [
        "https://github.com/Surya-pandi",
        "https://linkedin.com/in/surya-pandis",
      ],
      knowsAbout: ["Next.js", "Supabase", "Full Stack Development", "UI/UX", "AI-assisted development", "JavaScript", "Python"],
    },
    {
      "@type": "WebSite",
      "@id": "https://suryapandi.com/#website",
      url: "https://suryapandi.com/",
      name: "Surya Pandi S Portfolio",
      description: "The professional portfolio of Surya Pandi S, Full Stack Developer and AI Generalist.",
      inLanguage: "en-IN",
      author: { "@id": "https://suryapandi.com/#person" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <PhotoScroll />
      <div className="ticker" aria-hidden="true">
        <div>FULL STACK DEVELOPMENT <i>&#10022;</i> AI-ASSISTED BUILDING <i>&#10022;</i> NEXT.JS + SUPABASE <i>&#10022;</i> FULL STACK DEVELOPMENT <i>&#10022;</i></div>
      </div>

      <section className="home-intro section-pad">
        <Reveal className="section-kicker"><span>(A)</span> Professional summary</Reveal>
        <Reveal className="intro-statement">
          I&apos;m Surya Pandi S, <span className="degree-article">A</span> B.Tech Information Technology student and fresher <em>full stack developer</em> building clean, useful web applications.
        </Reveal>
        <Reveal className="intro-foot">
          <p>I work with Next.js, Supabase, AI-assisted development, prompt engineering, and end-to-end deployment on Vercel and Render.</p>
          <Link href="/about" className="text-link">View my profile <ArrowUpRight /></Link>
        </Reveal>
      </section>

      <CapabilitiesShowcase />

      <section className="quote-band">
        <p>Creative problem solver. Fast learner. Team collaborator.</p>
        <h2>From an idea to a <i>deployed</i> product.</h2>
      </section>
    </>
  );
}
