"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { z } from "zod";
import type { projectSchema } from "@/content/schema";

type Project = z.infer<typeof projectSchema>;

export default function ProjectArchive({ projects }: { projects: Project[] }) {
  const allPlatformsRef = useRef<HTMLButtonElement>(null);
  const [platform, setPlatform] = useState("Semua");
  const [technology, setTechnology] = useState("Semua");

  const platforms = [
    "Semua",
    ...new Set(projects.map((item) => item.platform)),
  ];
  const technologies = [
    ...new Set(projects.flatMap((item) => item.stack)),
  ].sort((a, b) => a.localeCompare(b, "id"));
  const filteredProjects = projects.filter(
    (item) =>
      (platform === "Semua" || item.platform === platform) &&
      (technology === "Semua" || item.stack.includes(technology)),
  );
  const hasFilter = platform !== "Semua" || technology !== "Semua";

  function resetFilters() {
    setPlatform("Semua");
    setTechnology("Semua");
    allPlatformsRef.current?.focus();
  }

  return (
    <>
      <div className="project-filters" aria-label="Filter proyek">
        <fieldset className="platform-filter">
          <legend className="eyebrow">PLATFORM</legend>
          <div className="platform-options">
            {platforms.map((option) => (
              <button
                type="button"
                ref={option === "Semua" ? allPlatformsRef : undefined}
                className={`filter-chip${platform === option ? " is-active" : ""}`}
                aria-pressed={platform === option}
                onClick={() => setPlatform(option)}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="technology-filter">
          <label className="eyebrow" htmlFor="technology-filter">
            TEKNOLOGI
          </label>
          <select
            id="technology-filter"
            value={technology}
            onChange={(event) => setTechnology(event.target.value)}
          >
            <option value="Semua">Semua teknologi</option>
            {technologies.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="project-filter-summary">
        <p role="status" aria-live="polite">
          Menampilkan {filteredProjects.length} dari {projects.length} proyek
        </p>
        {hasFilter && (
          <button type="button" onClick={resetFilters}>
            Hapus filter ↗
          </button>
        )}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`Tampilan proyek ${project.title}`}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="project-screenshot"
                />
              </div>
              <p className="eyebrow project-meta">
                {String(projects.indexOf(project) + 1).padStart(2, "0")} ·{" "}
                {project.platform}
              </p>
              <h2>
                <Link
                  className="project-card-link"
                  href={`/projects/${project.slug}`}
                >
                  {project.title}
                </Link>
              </h2>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.stack.slice(0, 3).map((tag) => (
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
      ) : (
        <div className="project-empty">
          <p>Tidak ada proyek untuk kombinasi ini.</p>
          <button type="button" onClick={resetFilters}>
            Lihat semua proyek ↗
          </button>
        </div>
      )}
    </>
  );
}
