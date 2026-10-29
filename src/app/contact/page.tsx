import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <section
      className="contact-page section-pad"
      aria-labelledby="contact-page-title"
    >
      <div className="section-shell">
        <div className="contact-page-heading">
          <p className="eyebrow">MARI BERBINCANG</p>
          <h1 id="contact-page-title">
            Ceritakan idemu<span className="accent-dot">.</span>
          </h1>
          <p>
            Punya proyek mobile, web, atau backend? Tulis pesan singkat dan
            siapkan draf email untuk menghubungi saya.
          </p>
        </div>

        <div className="contact-page-layout">
          <aside
            className="contact-page-info"
            aria-label="Pilihan kontak langsung"
          >
            <p className="eyebrow">KONTAK LANGSUNG</p>
            <h2>Lebih nyaman lewat email?</h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} ↗
            </a>
            <p>Anda juga bisa melihat pekerjaan dan profil profesional saya.</p>
            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <Link className="contact-back" href="/projects">
              ← Lihat proyek
            </Link>
          </aside>

          <div className="contact-page-form">
            <div className="contact-form-heading">
              <p className="eyebrow">FORMULIR EMAIL</p>
              <h2>Mulai percakapan</h2>
              <p>
                Formulir ini menyiapkan draf di aplikasi email Anda. Pesan baru
                terkirim setelah Anda menekan Kirim di aplikasi tersebut.
              </p>
            </div>
            <ContactForm recipient={profile.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
