"use client";

import { notFound, useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Github, Globe, Smartphone, Shield, CheckCircle, Lightbulb, HelpCircle, Layers, ArrowUpRight } from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    
    let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
    let inCodeBlock = false;
    let codeLines: string[] = [];

    const flushList = (key: string | number) => {
      if (!currentList) return;
      const ListTag = currentList.type;
      elements.push(
        <ListTag key={key} className={`pl-6 my-4 space-y-2 font-sans text-sm text-text-secondary ${currentList.type === "ul" ? "list-disc" : "list-decimal"}`}>
          {currentList.items.map((item, idx) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx}>
                {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-text-primary">{part}</strong> : part)}
              </li>
            );
          })}
        </ListTag>
      );
      currentList = null;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Handle Code Block
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${i}`} className="bg-bg-subtle border border-border rounded-lg p-4 my-6 font-mono text-xs overflow-x-auto text-text-secondary">
              <code>{codeLines.join("\n")}</code>
            </pre>
          );
          codeLines = [];
          inCodeBlock = false;
        } else {
          flushList(`list-${i}`);
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Empty line
      if (trimmed === "") {
        flushList(`list-${i}`);
        continue;
      }

      // Headers
      if (trimmed.startsWith("### ")) {
        flushList(`list-${i}`);
        elements.push(
          <h3 key={`h3-${i}`} className="font-sans text-xl font-bold text-text-primary mt-8 mb-4 border-b border-border pb-2">
            {trimmed.replace("### ", "")}
          </h3>
        );
        continue;
      }

      if (trimmed.startsWith("## ")) {
        flushList(`list-${i}`);
        elements.push(
          <h2 key={`h2-${i}`} className="font-sans text-2xl font-bold text-text-primary mt-10 mb-5 border-b border-border pb-2">
            {trimmed.replace("## ", "")}
          </h2>
        );
        continue;
      }

      // Unordered list items
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const itemContent = trimmed.replace(/^[*+-]\s+/, "");
        if (currentList && currentList.type === "ul") {
          currentList.items.push(itemContent);
        } else {
          flushList(`list-${i}`);
          currentList = { type: "ul", items: [itemContent] };
        }
        continue;
      }

      // Ordered list items
      if (/^\d+\.\s/.test(trimmed)) {
        const itemContent = trimmed.replace(/^\d+\.\s+/, "");
        if (currentList && currentList.type === "ol") {
          currentList.items.push(itemContent);
        } else {
          flushList(`list-${i}`);
          currentList = { type: "ol", items: [itemContent] };
        }
        continue;
      }

      // Normal paragraph
      flushList(`list-${i}`);
      const parts = trimmed.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={`p-${i}`} className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
          {parts.map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="font-semibold text-text-primary">{part}</strong> : part)}
        </p>
      );
    }

    flushList("list-final");
    return elements;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Breadcrumb & Navigation */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-text-tertiary hover:text-primary-500 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="border-b border-border pb-8 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-md bg-bg-subtle border border-border px-2.5 py-0.5 text-xs font-semibold text-text-secondary">
                {project.platform}
              </span>
              {project.featured && (
                <Badge variant="success">Featured Flutter App</Badge>
              )}
            </div>
            <h1 className="font-sans text-3xl font-extrabold text-text-primary sm:text-5xl leading-tight">
              {project.title}
            </h1>
            <p className="font-sans text-lg font-medium text-primary-500 mt-2">
              {project.tagline}
            </p>
          </div>

          {/* Links panel */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="md">
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </Button>
              </a>
            )}
            {project.storeUrl && (
              <a
                href={project.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>View in Store</span>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Extensive Case Study (Overview, Problem, Solution etc) */}
        <div className="lg:col-span-2 prose dark:prose-invert">
          {renderMarkdown(project.longDescription)}
        </div>

        {/* Right Side: Sidebar (Meta information, metrics, challenges, learnings) */}
        <div className="flex flex-col gap-6">
          {/* Key Metrics */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4">
              Project Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="font-sans text-xs text-text-tertiary leading-tight">{metric.label}</span>
                  <span className="font-mono text-lg font-bold text-primary-500 mt-1">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4 flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Core Features</span>
            </h3>
            <ul className="space-y-3 font-sans text-sm text-text-secondary">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4 flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-danger" />
              <span>Challenges Faced</span>
            </h3>
            <ul className="space-y-3 font-sans text-sm text-text-secondary">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-danger mt-1 font-bold">•</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4 flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4 text-warning" />
              <span>Key Learnings</span>
            </h3>
            <ul className="space-y-3 font-sans text-sm text-text-secondary">
              {project.learnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-warning mt-1 font-bold">•</span>
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Layout if available */}
          {project.architecture && (
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-4 flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-primary-500" />
                <span>Architecture</span>
              </h3>
              <ul className="space-y-3 font-sans text-xs font-mono text-text-secondary">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="border-l-2 border-primary-500 pl-2 leading-relaxed">
                    {arch}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
