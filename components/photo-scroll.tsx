"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function PhotoScroll() {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 75, damping: 24, mass: 0.35 });

  // The complete stack travels through the viewport as one object.
  const y = useTransform(smooth, [0, 0.12, 0.5, 0.88, 1], ["-78vh", "-24vh", "17vh", "78vh", "110vh"]);
  const rotateZ = useTransform(smooth, [0, 0.5, 1], [-7, 1.5, 9]);
  const rotateX = useTransform(smooth, [0, 0.5, 1], [14, 0, -14]);
  const rotateY = useTransform(smooth, [0, 0.35, 0.65, 1], [-10, -3, 7, -5]);
  const scale = useTransform(smooth, [0, 0.18, 0.5, 0.82, 1], [0.78, 0.9, 1, 0.92, 0.78]);
  const opacity = useTransform(smooth, [0, 0.06, 0.94, 1], [0, 1, 1, 0]);

  return (
    <section className="photo-scroll" ref={section}>
      <div className="photo-sticky">
        <div className="hero-copy">
          <p className="eyebrow"><span /> FULL STACK DEVELOPER + AI GENERALIST</p>
          <h1>Building<br /><i>useful</i> <span>systems</span></h1>
          <div className="hero-subcopy">
            <p>I build modern web applications with Next.js, Supabase, clean UI/UX, AI-assisted workflows, and production deployment.</p>
            <a href="#selected-work">Scroll to explore <b>&darr;</b></a>
          </div>
        </div>

        <div className="card-stage" aria-label="Portrait card moving from top to bottom as the page scrolls">
          <motion.div className="card-rig" style={{ y, rotateZ, scale, opacity }}>
            <div className="photo-back photo-back-one" />
            <div className="photo-back photo-back-two" />
            <motion.div className="portrait-card" style={{ rotateX, rotateY }}>
              <div className="portrait-top"><span>Based in India</span><span>&copy; 2026</span></div>
              <Image src="/images/profile.jpg" alt="Surya Pandi" fill priority sizes="(max-width: 700px) 70vw, 34vw" />
              <div className="portrait-bottom">
                <span>Surya<br />Pandi</span>
                <small>Full stack<br />developer</small>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-index"><span>TOP</span><motion.i style={{ scaleX: scrollYProgress }} /><span>BOTTOM</span></div>
      </div>
    </section>
  );
}
