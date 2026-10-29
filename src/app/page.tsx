import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { education } from "@/content/education";
import { certificates } from "@/content/certificates";
import HomeMotion from "@/components/home/HomeMotion";
import TechStackStrip from "@/components/home/TechStackStrip";

export default function Home() {
  return (
    <>
      <HomeMotion />
      <section
        className="portfolio-hero section-shell"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow">Hai, nama saya {profile.shortName}</p>
          <h1 id="hero-title">
            Saya bikin aplikasi mobile<span className="accent-dot">.</span>
          </h1>
          <p className="hero-description">{profile.intro}</p>
          <a className="pill-button" href="#karya">
            Lihat karya saya <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div
          className="lanyard-scene"
          aria-label={`Kartu profil ${profile.name}`}
        >
          <div className="lanyard-strap" aria-hidden="true" />
          <div className="lanyard-clip" aria-hidden="true" />
          <div className="lanyard-card">
            <span className="card-slot" aria-hidden="true" />
            <p className="eyebrow card-kicker">ID KARTU DEVELOPER</p>
            <div className="portrait-frame">
              <Image
                src={profile.photo}
                alt={`Potret ${profile.name}`}
                fill
                sizes="(max-width: 760px) 240px, 260px"
                priority
                className="portrait-image"
              />
            </div>
            <h2>{profile.name}</h2>
            <p className="card-role">Software engineer · Mobile</p>
            <div className="barcode" aria-hidden="true" />
            <p className="availability">TERBUKA UNTUK PROYEK</p>
          </div>
        </div>
      </section>
      <TechStackStrip />
      <section
        id="karya"
        className="projects-section section-pad"
        aria-labelledby="projects-title"
      >
        <div className="section-shell">
          <div className="section-heading" data-home-reveal>
            <div>
              <p className="eyebrow">01 / PILIHAN KARYA</p>
              <h2 id="projects-title">
                Karya terbaru<span className="accent-dot">.</span>
              </h2>
            </div>
            <Link href="/projects" className="text-link">
              Lihat semua proyek ↗
            </Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article
                className="project-card"
                key={project.slug}
                data-home-reveal="card"
              >
                <div className={`project-image project-image-${index + 1}`}>
                  <Image
                    src={project.image}
                    alt={`Tampilan proyek ${project.title}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="project-screenshot"
                  />
                </div>
                <p className="eyebrow project-meta">
                  {String(index + 1).padStart(2, "0")} · {project.platform}
                </p>
                <h3>
                  <Link
                    className="project-card-link"
                    href={`/projects/${project.slug}`}
                  >
                    {project.title}
                  </Link>
                </h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="stack"
        className="stack-section section-pad"
        aria-labelledby="stack-title"
      >
        <div className="section-shell stack-layout" data-home-reveal>
          <div>
            <p className="eyebrow">02 / PENDEKATAN</p>
            <h2 id="stack-title">
              Cara saya bekerja<span className="accent-dot">.</span>
            </h2>
            <p>{profile.approach}</p>
          </div>
          <ul className="stack-list">
            {profile.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="pendidikan"
        className="education-section section-pad"
        aria-labelledby="education-title"
      >
        <div className="section-shell">
          <div className="section-heading" data-home-reveal>
            <div>
              <p className="eyebrow">03 / PERJALANAN</p>
              <h2 id="education-title">
                Pendidikan<span className="accent-dot">.</span>
              </h2>
            </div>
          </div>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.period} data-home-reveal>
                <span className="timeline-date">{item.period}</span>
                <span className="timeline-node" aria-hidden="true" />
                <div className="timeline-card">
                  <span className="tag">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-school">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        id="sertifikat"
        className="certificates-section section-pad"
        aria-labelledby="certificates-title"
      >
        <div className="section-shell">
          <div className="section-heading" data-home-reveal>
            <div>
              <p className="eyebrow">04 / PEMBELAJARAN</p>
              <h2 id="certificates-title">
                Sertifikat<span className="accent-dot">.</span>
              </h2>
            </div>
          </div>
          <div className="folder">
            <span className="folder-tab">Folder sertifikat</span>
            <div className="certificate-grid">
              {certificates.map((item) => (
                <a
                  className="certificate-card"
                  data-home-reveal="card"
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="certificate-seal" aria-hidden="true">
                    ✳
                  </span>
                  <p className="eyebrow">SERTIFIKAT</p>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <span className="credential-link">Lihat dokumen ↗</span>
                </a>
              ))}
            </div>
            <Link href="/resume" className="pill-button dark-button">
              Lihat CV dan sertifikat ↗
            </Link>
          </div>
        </div>
      </section>
      <section
        id="kontak"
        className="contact-section section-pad"
        aria-labelledby="contact-title"
      >
        <div className="section-shell" data-home-reveal>
          <p className="eyebrow">Punya ide aplikasi?</p>
          <h2 id="contact-title">
            <Link href="/contact">
              Ayo bikin aplikasinya<span className="accent-dot">.</span>
            </Link>
          </h2>
          <p>
            Terbuka untuk diskusi proyek mobile, web, dan backend. Klik judul
            untuk menyiapkan pesan.
          </p>
        </div>
      </section>
    </>
  );
}
