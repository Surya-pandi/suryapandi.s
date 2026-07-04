import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PhotoScroll } from "@/components/photo-scroll";
import { Reveal } from "@/components/reveal";
import { CapabilitiesShowcase } from "@/components/capabilities-showcase";

export default function Home() {
  return (
    <>
      <PhotoScroll />
      <div className="ticker" aria-hidden="true">
        <div>FULL STACK DEVELOPMENT <i>&#10022;</i> AI-ASSISTED BUILDING <i>&#10022;</i> NEXT.JS + SUPABASE <i>&#10022;</i> FULL STACK DEVELOPMENT <i>&#10022;</i></div>
      </div>

      <section className="home-intro section-pad">
        <Reveal className="section-kicker"><span>(A)</span> Professional summary</Reveal>
        <Reveal className="intro-statement">
          I&apos;m Surya, a B.Tech Information Technology student and fresher <em>full stack developer</em> building clean, useful web applications.
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
