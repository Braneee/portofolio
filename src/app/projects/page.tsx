import ProjectArchive from "@/components/projects/ProjectArchive";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <section
      className="projects-section section-pad"
      aria-labelledby="all-projects-title"
    >
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ARSIP KARYA</p>
            <h1 id="all-projects-title">
              Semua proyek<span className="accent-dot">.</span>
            </h1>
          </div>
          <p className="archive-intro">
            Aplikasi mobile, web, dan backend yang saya kerjakan.
          </p>
        </div>
        <ProjectArchive projects={projects} />
      </div>
    </section>
  );
}
