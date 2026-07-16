import Link from "next/link";
import { Github, Linkedin, Mail, Smartphone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Braneee",
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://www.linkedin.com/in/gibranrais/",
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-bg-subtle py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Left Column: Brand & Professional Statement */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 font-sans text-lg font-bold text-text-primary tracking-tight group">
              <img src="/grhi-logo.png" className="h-7.5 w-7.5 rounded-lg object-cover shadow-md shadow-primary-500/10 group-hover:scale-105 transition-transform duration-200" alt="GRHI Logo" />
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                GRHI
              </span>
            </Link>
            <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-sm leading-relaxed">
              Engineering native-feeling, high-performance mobile applications using Flutter and designing secure, scalable backend architectures.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-text-tertiary">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/" className="font-sans text-xs sm:text-sm text-text-secondary hover:text-primary-500 hover:translate-x-0.5 transition-all duration-200">Home</Link>
              <Link href="/projects" className="font-sans text-xs sm:text-sm text-text-secondary hover:text-primary-500 hover:translate-x-0.5 transition-all duration-200">Projects</Link>
              <Link href="/blog" className="font-sans text-xs sm:text-sm text-text-secondary hover:text-primary-500 hover:translate-x-0.5 transition-all duration-200">Blog</Link>
              <Link href="/resume" className="font-sans text-xs sm:text-sm text-text-secondary hover:text-primary-500 hover:translate-x-0.5 transition-all duration-200">Resume</Link>
              <Link href="/contact" className="font-sans text-xs sm:text-sm text-text-secondary hover:text-primary-500 hover:translate-x-0.5 transition-all duration-200">Contact</Link>
            </div>
          </div>

          {/* Right Column: Connect & Social channels */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-text-tertiary">
              Connect
            </span>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-subtle text-text-secondary hover:border-primary-500 hover:text-primary-500 hover:scale-105 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:raishilmy0@gmail.com"
              className="group inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-primary-500 transition-colors w-fit border border-border/80 bg-bg-subtle/40 px-3 py-1.5 rounded-lg hover:border-primary-500"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>raishilmy0@gmail.com</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-border/60 pt-6 md:flex-row gap-4">
          <p className="font-sans text-[11px] text-text-tertiary">
            &copy; {currentYear} Gibran Rais Hilmy Iskandar. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-text-tertiary">
            Engineered with precision using Next.js 14 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
