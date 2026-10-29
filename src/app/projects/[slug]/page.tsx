import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

type ProjectParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Gibran Rais Hilmy Iskandar`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="project-detail section-pad">
      <div className="section-shell">
        <Link href="/projects" className="text-link">
          ← Kembali ke semua proyek
        </Link>
        <div className="project-detail-heading">
          <div>
            <p className="eyebrow">{project.platform} / PROYEK</p>
            <h1>
              {project.title}
              <span className="accent-dot">.</span>
            </h1>
          </div>
          <p>{project.summary}</p>
        </div>
        <div className="project-detail-image">
          <Image
            src={project.image}
            alt={`Tampilan proyek ${project.title}`}
            fill
            sizes="(max-width: 760px) 100vw, 1200px"
            className="project-screenshot"
            priority
          />
        </div>
        <div className="project-detail-bottom">
          <div>
            <p className="eyebrow">TEKNOLOGI</p>
            <ul className="tag-row">
              {project.stack.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-detail-links">
            {project.githubUrl && (
              <a
                className="pill-button dark-button"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat kode ↗
              </a>
            )}
            {project.storeUrl && (
              <a
                className="pill-button"
                href={project.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat di Play Store ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
