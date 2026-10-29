import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { profile } from "@/content/profile";
const links = [
  { href: "/#karya", label: "Karya" },
  { href: "/#stack", label: "Stack" },
  { href: "/#pendidikan", label: "Pendidikan" },
  { href: "/#sertifikat", label: "Sertifikat" },
  { href: "/#kontak", label: "Kontak" },
];
export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="section-shell nav-inner" aria-label="Navigasi utama">
        <Link className="brand" href="/">
          <Logo className="brand-logo" />
          <span>{profile.handle}</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Mari bicara ↗
        </a>
      </nav>
    </header>
  );
}
