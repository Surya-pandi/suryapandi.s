import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata = { title: "Contact", description: "Contact Surya Pandi for full stack development opportunities and projects." };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-intro">
        <p className="section-kicker"><span>(03)</span> Contact</p>
        <h1>LET&apos;S BUILD<br /><i>SOMETHING.</i></h1>
        <p className="contact-lede">I am open to fresher roles, internships, collaborations, and full stack development projects.</p>
        <div className="contact-details">
          <a href="mailto:suryapandi779@gmail.com"><Mail /> suryapandi779@gmail.com <ArrowUpRight /></a>
          <a href="tel:+919360946221"><Phone /> +91 93609 46221 <ArrowUpRight /></a>
          <a href="https://github.com/Surya-pandi" target="_blank" rel="noreferrer"><Github /> github.com/Surya-pandi <ArrowUpRight /></a>
          <a href="https://linkedin.com/in/surya-pandis" target="_blank" rel="noreferrer"><Linkedin /> linkedin.com/in/surya-pandis <ArrowUpRight /></a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
