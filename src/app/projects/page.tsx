"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Shield, Terminal, Github } from "lucide-react";

type FilterPlatform = "All" | "Mobile" | "Web" | "Backend" | "Fullstack";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterPlatform>("All");

  const filters: { label: string; value: FilterPlatform }[] = [
    { label: "All Projects", value: "All" },
    { label: "Mobile (Flutter)", value: "Mobile" },
    { label: "Web Apps", value: "Web" },
    { label: "Backends", value: "Backend" },
    { label: "Full-stack", value: "Fullstack" }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.platform === activeFilter;
  });

  const getPlatformDetails = (platform: string) => {
    switch (platform) {
      case "Mobile":
        return {
          icon: <Smartphone className="h-3.5 w-3.5" />,
          colorClass: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 border-emerald-500/20",
        };
      case "Web":
        return {
          icon: <Globe className="h-3.5 w-3.5" />,
          colorClass: "bg-blue-500/10 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 border-blue-500/20",
        };
      case "Backend":
        return {
          icon: <Terminal className="h-3.5 w-3.5" />,
          colorClass: "bg-amber-500/10 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border-amber-500/20",
        };
      default:
        return {
          icon: <Shield className="h-3.5 w-3.5" />,
          colorClass: "bg-purple-500/10 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400 border-purple-500/20",
        };
    }
  };

  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/5 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-primary-500 uppercase mb-3 block">
            SELECTED WORKS
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Project Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            An organized archive of 7 projects built across different platforms, highlighting mobile engineering with Flutter and full-stack solutions.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-border/60 pb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === filter.value
                  ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/10 scale-103"
                  : "bg-surface/60 border-border/80 text-text-secondary hover:bg-bg-subtle hover:text-text-primary hover:scale-102"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid of Projects */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const platform = getPlatformDetails(project.platform);
            
            return (
              <Card
                key={project.slug}
                className="flex flex-col justify-between h-full bg-surface/40 hover:bg-surface border border-border/80 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 p-0 overflow-hidden rounded-2xl group"
              >
                {/* Website/App Screenshot Preview */}
                <div className="w-full aspect-[16/10] overflow-hidden border-b border-border/60 relative bg-bg-subtle">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Card Content block with padding */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${platform.colorClass}`}>
                        {platform.icon}
                        <span>{project.platform}</span>
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-primary-600 animate-pulse-slow">
                          Featured App
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-sans text-lg font-bold text-text-primary group-hover:text-primary-500 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-primary-500 mt-1">
                      {project.tagline}
                    </p>

                    {/* Description text */}
                    <p className="font-sans text-xs sm:text-sm text-text-secondary mt-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1 mt-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] font-mono rounded-full">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-[10px] font-mono text-text-tertiary rounded-full">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Footer Link Options */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border/60">
                    <Link href={`/projects/${project.slug}`} className="flex-grow">
                      <span className="flex items-center justify-center gap-1.5 w-full rounded-lg border border-border/80 bg-bg-subtle py-2 text-center text-xs font-bold text-text-primary hover:border-primary-300 hover:text-primary-500 transition-all duration-200 cursor-pointer">
                        <span>Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-bg-subtle text-text-secondary hover:border-primary-500 hover:text-primary-500 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border/60 rounded-2xl bg-surface/20">
            <p className="font-sans text-sm text-text-tertiary">No projects archived in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
