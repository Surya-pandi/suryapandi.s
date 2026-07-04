"use client";

import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const capabilities = [
  {
    title: "Full Stack Development",
    detail: "Responsive Next.js applications with clean interfaces, practical features, and end-to-end implementation.",
  },
  {
    title: "Supabase & SQL",
    detail: "Authentication, role-based dashboards, structured data, file storage, search, and application backends.",
  },
  {
    title: "AI-Assisted Solutions",
    detail: "Prompt engineering and AI-assisted workflows using ChatGPT, Claude, and Gemini to solve real product problems.",
  },
  {
    title: "Deployment & Workflow",
    detail: "Production deployment with Vercel and Render, supported by Git, GitHub, documentation, and implementation planning.",
  },
];

export function CapabilitiesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="capabilities-showcase section-pad">
      <div className="capabilities-content">
        <p className="section-kicker light"><span>(B)</span> Technical capabilities</p>
        <div className="capabilities-heading">
          <h2>What I can do for you</h2>
          <p>I build complete web products, connecting thoughtful interfaces with reliable backends, AI-assisted workflows, and production deployment.</p>
        </div>

        <div className="capability-list">
          {capabilities.map((capability, index) => {
            const isOpen = active === index;
            return (
              <div className={`capability-item ${isOpen ? "active" : ""}`} key={capability.title}>
                <button
                  className="capability-toggle"
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isOpen}
                  aria-controls={`capability-${index}`}
                >
                  <span className="capability-number">{index + 1}.</span>
                  <span className="capability-title">{capability.title}</span>
                  <ChevronUp />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="capability-answer"
                      id={`capability-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{capability.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="capabilities-visual" aria-hidden="true">
        <motion.div
          className="capability-photo"
          animate={{ rotate: [-4, 2, -2, 4][active], y: active * 4 }}
          transition={{ type: "spring", stiffness: 100, damping: 16 }}
        >
          <Image src="/images/project-coral.jpg" alt="" fill sizes="(max-width: 800px) 85vw, 38vw" />
          <div className="capability-photo-label"><span>Workspace</span><span>Build / Learn / Ship</span></div>
        </motion.div>
        <motion.div
          className="capability-orbit"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        ><i /></motion.div>
      </div>
    </section>
  );
}
