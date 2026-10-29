import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { certificates } from "@/content/certificates";

export const metadata: Metadata = {
  title: `CV | ${profile.name}`,
  description: `Ringkasan pengalaman, pendidikan, proyek, dan sertifikat ${profile.name}.`,
};

export default function ResumePage() {
  return (
    <article className="resume-page section-pad">
      <div className="section-shell">
        <div className="resume-header">
          <div>
            <p className="eyebrow">PROFIL / CV</p>
            <h1>
              {profile.name}
              <span className="accent-dot">.</span>
            </h1>
            <p className="resume-role">Software engineer · Mobile developer</p>
          </div>
          <a className="pill-button dark-button" href="/CV_GRHI.pdf" download>
            Unduh CV PDF ↗
          </a>
        </div>

        <div className="resume-grid">
          <aside className="resume-side">
            <section aria-labelledby="resume-contact">
              <h2 id="resume-contact">Kontak</h2>
              <ul className="resume-links">
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </section>
            <section aria-labelledby="resume-stack">
              <h2 id="resume-stack">Stack</h2>
              <ul className="tag-row">
                {profile.stack.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="resume-certificates">
              <h2 id="resume-certificates">Sertifikat pilihan</h2>
              <ul className="resume-links">
                {certificates.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <div className="resume-main">
            <section aria-labelledby="resume-about">
              <h2 id="resume-about">Ringkasan</h2>
              <p>{profile.intro}</p>
              <p>{profile.approach}</p>
            </section>
            <section aria-labelledby="resume-experience">
              <h2 id="resume-experience">Pengalaman</h2>
              {experience.map((item) => (
                <div className="resume-entry" key={item.role}>
                  <p className="eyebrow">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="resume-organization">{item.organization}</p>
                  <p>{item.summary}</p>
                </div>
              ))}
            </section>
            <section aria-labelledby="resume-education">
              <h2 id="resume-education">Pendidikan</h2>
              {education.map((item) => (
                <div className="resume-entry" key={item.period}>
                  <p className="eyebrow">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="resume-organization">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </section>
            <section aria-labelledby="resume-projects">
              <h2 id="resume-projects">Proyek pilihan</h2>
              {featuredProjects.map((project) => (
                <div className="resume-entry" key={project.slug}>
                  <p className="eyebrow">{project.platform}</p>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title} ↗
                    </Link>
                  </h3>
                  <p>{project.summary}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
