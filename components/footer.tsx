import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p>Open to opportunities and collaborations</p>
        <Link href="/contact" className="footer-cta">Let&apos;s build<br />something <ArrowUpRight /></Link>
      </div>
      <div className="footer-bottom">
        <strong>&#10033;</strong>
        <p>Surya Pandi S - Full Stack Developer &amp; AI Generalist</p>
        <div>
          <a href="https://linkedin.com/in/surya-pandis" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Surya-pandi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:suryapandi779@gmail.com">Email</a>
        </div>
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
