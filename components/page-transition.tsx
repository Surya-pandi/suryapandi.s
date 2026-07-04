"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "cover" | "reveal";

const panels = ["#d6ff52", "#baa8ff", "#ff684f", "#0c0c0c"];

function pageName(path: string) {
  if (path === "/") return "Home";
  return path.split("/").filter(Boolean).at(-1)?.replaceAll("-", " ") ?? "Page";
}

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [destination, setDestination] = useState("Home");
  const transitioning = useRef(false);
  const pendingPath = useRef("");

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      event.preventDefault();
      if (transitioning.current) return;
      if (reduceMotion) {
        router.push(`${url.pathname}${url.search}${url.hash}`);
        return;
      }

      transitioning.current = true;
      pendingPath.current = url.pathname;
      setDestination(pageName(url.pathname));
      setPhase("cover");
      router.prefetch(url.pathname);

      window.setTimeout(() => router.push(`${url.pathname}${url.search}${url.hash}`), 760);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [reduceMotion, router]);

  useEffect(() => {
    if (!transitioning.current || pathname !== pendingPath.current) return;
    const timer = window.setTimeout(() => setPhase("reveal"), 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const timer = window.setTimeout(() => {
      transitioning.current = false;
      pendingPath.current = "";
      setPhase("idle");
    }, 820);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <div className={`page-transition-layer phase-${phase}`} aria-hidden="true">
      <div className="transition-panels">
        {panels.map((color, index) => (
          <motion.div
            className="transition-panel"
            key={color}
            style={{ backgroundColor: color }}
            initial={false}
            animate={{ y: phase === "idle" ? "105%" : phase === "cover" ? "0%" : "-105%" }}
            transition={{
              duration: phase === "cover" ? 0.58 : 0.68,
              delay: phase === "cover" ? index * 0.055 : (panels.length - index - 1) * 0.045,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        ))}
      </div>
      <motion.div
        className="transition-label"
        initial={false}
        animate={{ opacity: phase === "cover" ? 1 : 0, scale: phase === "cover" ? 1 : 0.86 }}
        transition={{ duration: 0.28, delay: phase === "cover" ? 0.32 : 0 }}
      >
        <span>SP</span>
        <p>Opening / {destination}</p>
      </motion.div>
    </div>
  );
}
