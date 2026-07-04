"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"]];
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Surya Pandi home"><span className="brand-avatar"><span className="brand-avatar-image"><Image src="/images/potrait.jpg" alt="Surya Pandi" fill sizes="36px" priority /></span></span><b>Surya Pandi</b></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>)}</nav>
    <Link href="/contact" className="availability desktop-only"><i /> Available for work</Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{links.map(([label, href], index) => <Link key={href} href={href}><small>0{index + 1}</small>{label}</Link>)}</motion.nav>}</AnimatePresence>
  </header>;
}
