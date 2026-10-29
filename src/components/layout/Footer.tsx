import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { profile } from "@/content/profile";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-identity">
          <Link href="/" aria-label="Beranda">
            <Logo className="brand-logo" />
          </Link>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <Link href="/projects">Semua proyek</Link>
          <Link href="/resume">CV</Link>
          <Link href="/contact">Kontak</Link>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
