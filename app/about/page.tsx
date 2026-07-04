import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const tools = ["Next.js", "Supabase", "SQL", "JavaScript", "Python", "C", "Git/GitHub", "Vercel", "Render", "ChatGPT", "Claude", "Gemini"];

export const metadata = { title: "About", description: "About Surya Pandi, a Full Stack Developer and AI Generalist." };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <p className="section-kicker light"><span>(01)</span> Professional profile</p>
        <h1>FULL STACK<br /><i>AI GENERALIST.</i></h1>
        <div className="page-hero-bottom"><p>B.Tech Information Technology student building practical, modern web applications.</p><ArrowDown /></div>
      </section>

      <section className="about-story section-pad">
        <Reveal className="about-portrait">
          <div className="portrait-sticker">Build<br />and learn &#10022;</div>
          <Image src="/images/profile.jpg" alt="Portrait of Surya Pandi" fill sizes="(max-width: 800px) 90vw, 42vw" priority />
        </Reveal>
        <div className="about-copy">
          <Reveal><p className="section-kicker"><span>(A)</span> Professional summary</p></Reveal>
          <Reveal><h2>I build complete web products with a strong sense of <em>UI/UX.</em></h2></Reveal>
          <Reveal>
            <p>I am a motivated B.Tech Information Technology student and fresher full stack developer with hands-on experience in Next.js and Supabase.</p>
            <p>My interests include AI-assisted development, prompt engineering, clean interfaces, project documentation, and end-to-end deployment on Vercel and Render.</p>
          </Reveal>
          <Reveal><Link href="/contact" className="text-link">Connect with me <ArrowUpRight /></Link></Reveal>
        </div>
      </section>

      <section className="resume-details section-pad">
        <Reveal className="resume-panel">
          <div className="resume-panel-title"><GraduationCap /><p className="section-kicker light"><span>(B)</span> Education</p></div>
          <h3>B.Tech - Information Technology</h3>
          <p>Park College of Engineering and Technology</p>
          <span>2023 - 2027</span>
          <div className="education-row"><div><b>HSC</b><p>Government Higher Secondary School, Kalveerampalayam</p></div><span>Completed</span></div>
          <div className="education-row"><div><b>SSLC</b><p>PSG High School, Vedapatti</p></div><span>Completed</span></div>
        </Reveal>
        <Reveal className="resume-panel">
          <div className="resume-panel-title"><Sparkles /><p className="section-kicker light"><span>(C)</span> Experience & activities</p></div>
          <ul>
            <li>Practical project experience in full stack web development, UI/UX design, AI tools, and deployment workflows.</li>
            <li>Builds college, business, recruitment, and management system concepts using Next.js and Supabase.</li>
            <li>Creates AI prompts, project documentation, website content, and technical implementation plans.</li>
          </ul>
        </Reveal>
      </section>

      <section className="stats-band">
        <div><strong>2027</strong><span>B.Tech graduation</span></div>
        <div><strong>04</strong><span>Live projects</span></div>
        <div><strong>12+</strong><span>Core tools</span></div>
        <div><strong>100%</strong><span>Learning mindset</span></div>
      </section>

      <section className="tools-section section-pad">
        <Reveal><p className="section-kicker light"><span>(D)</span> Technical skills</p><h2>Tools to build.<br /><i>AI to accelerate.</i></h2></Reveal>
        <div className="tool-cloud">{tools.map((tool, index) => <span key={tool} className={`tool tool-${index % 4}`}>{tool}</span>)}</div>
      </section>
    </>
  );
}
