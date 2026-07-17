"use client";

import React, { useState } from "react";
import Card from "../ui/Card";
import { 
  Smartphone, Server, Laptop, Cpu, Award, Check, X, ExternalLink,
  Code, Database, Lock, Brain, Layout, Globe, Compass 
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategoryRow({ title, skills }: SkillCategoryProps) {
  const getSkillLogo = (skill: string) => {
    const name = skill.toLowerCase();
    
    // Devicons SVGs
    if (name.includes("flutter")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("dart")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("sqlite") || name.includes("sqflite")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("android")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    
    if (name.includes("laravel")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("php")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("django")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("python")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("postgresql")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("mysql")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("redis")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("rabbitmq")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;

    if (name.includes("react")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("next.js")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" className="h-3.5 w-3.5 dark:invert shrink-0" alt="" />;
    if (name.includes("typescript")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("tailwindcss") || name.includes("tailwind css")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("vite")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("html5")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("css3")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;

    if (name.includes("docker")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("git")) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-3.5 w-3.5 shrink-0" alt="" />;

    // Custom PNG/SVG Icons
    if (name.includes("supabase")) return <img src="https://raw.githubusercontent.com/supabase/supabase/master/web/static/favicon.ico" className="h-3.5 w-3.5 shrink-0" alt="" />;
    if (name.includes("riverpod")) return <img src="https://raw.githubusercontent.com/rrousselGit/riverpod/master/resources/riverpod_logo.png" className="h-3.5 w-3.5 shrink-0" alt="" />;

    // Semantic Lucide Fallbacks
    if (name.includes("hive")) return <Database className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("ml kit") || name.includes("ai")) return <Brain className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("celery")) return <Cpu className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("grid") || name.includes("responsive")) return <Layout className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("api")) return <Globe className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("security") || name.includes("rls") || name.includes("authentication") || name.includes("jwt")) return <Lock className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
    if (name.includes("routing") || name.includes("spatial")) return <Compass className="h-3.5 w-3.5 text-primary-500 shrink-0" />;

    return <Code className="h-3.5 w-3.5 text-primary-500 shrink-0" />;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-border/40 gap-3 sm:gap-6 last:border-b-0">
      <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-tertiary w-full sm:w-48 shrink-0">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border/60 bg-surface-raised/35 text-text-primary font-sans text-[11px] font-medium shadow-sm hover:border-primary-500/20 hover:bg-surface-raised hover:scale-[1.01] transition-all duration-200"
          >
            {getSkillLogo(skill)}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CertItem {
  name: string;
  pdfPath: string;
  special?: boolean;
}

export default function Skills() {
  const [modalPdf, setModalPdf] = useState<{ name: string; url: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"ml" | "ai" | "genai">("ml");

  const proficiencies = [
    {
      name: "Mobile Engineering",
      icon: <Smartphone className="h-4 w-4" />,
      description: "Building production-grade cross-platform applications using Flutter and Dart, with structured state management (Riverpod/Provider) and offline-capable data layers.",
    },
    {
      name: "Backend & Systems",
      icon: <Server className="h-4 w-4" />,
      description: "Designing reliable RESTful APIs using PHP (Laravel) and Python (Django), paired with transactional databases (PostgreSQL/MySQL) and task queues (Celery/Redis).",
    },
    {
      name: "Modern Web Interfaces",
      icon: <Laptop className="h-4 w-4" />,
      description: "Developing responsive frontend architectures with React, Next.js, and TypeScript, optimized for speed, semantic markup, and cross-browser accessibility.",
    },
    {
      name: "Machine Learning & AI",
      icon: <Cpu className="h-4 w-4" />,
      description: "Applying predictive modeling, supervised classification, and exploratory data analysis concepts using modern ML workflows.",
    },
  ];

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        "Flutter SDK",
        "Dart",
        "Riverpod State Management",
        "SQLite (sqflite)",
        "Hive Local DB",
        "Google ML Kit Integration",
        "Android SDK Tools"
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "PHP & Laravel",
        "Django Rest Framework",
        "Supabase BaaS",
        "MySQL / PostgreSQL",
        "Redis Caching",
        "Celery Task Queues",
        "RabbitMQ Message Broker"
      ],
    },
    {
      title: "Frontend Engineering",
      skills: [
        "React",
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Vite Build Tool",
        "HTML5 / CSS3",
        "Responsive Grid Layouts"
      ],
    },
    {
      title: "Infrastructure & Tools",
      skills: [
        "Docker / Docker Compose",
        "Git & GitHub Workflows",
        "REST API Design Standards",
        "PostgreSQL Row Level Security (RLS)",
        "PostGIS Spatial Routing",
        "JWT Authentication"
      ],
    },
  ];

  // Certificates structured into three categories
  const certsData: Record<"ml" | "ai" | "genai", CertItem[]> = {
    ml: [
      {
        name: "IBM Machine Learning Specialization (Professional Credential)",
        pdfPath: "/sertifikat/SERTIFIKAT IBM MACHINE LEARNING.pdf",
        special: true,
      },
      {
        name: "Introduction to Artificial Intelligence (AI)",
        pdfPath: "/sertifikat/Coursera C78JV5OX08IV.pdf",
      },
      {
        name: "Exploratory Data Analysis for Machine Learning",
        pdfPath: "/sertifikat/Coursera Sertifikat DataMining - Exploratory Data Analysis For Machine Learning - Gibran.pdf",
      },
      {
        name: "Supervised Machine Learning: Classification",
        pdfPath: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Classification - Gibran.pdf",
      },
      {
        name: "Supervised Machine Learning: Regression",
        pdfPath: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Regression - Gibran.pdf",
      },
      {
        name: "Unsupervised Machine Learning",
        pdfPath: "/sertifikat/Coursera Mater Unsupervised Machine Learning.pdf",
      },
      {
        name: "Deep Learning & Reinforcement Learning",
        pdfPath: "/sertifikat/Coursera Materi Deep Learning adn Reinforcement Learning.pdf",
      },
      {
        name: "Machine Learning with Python",
        pdfPath: "/sertifikat/Coursera Sertif Machine Learning With Python.pdf",
      },
      {
        name: "Machine Learning Capstone",
        pdfPath: "/sertifikat/Coursera Materi Terakhir.pdf",
      },
    ],
    ai: [
      {
        name: "IBM AI Engineering Professional Certificate (Specialization)",
        pdfPath: "/sertifikat/Coursera Sertif Professional IBM AI Engineering.pdf",
        special: true,
      },
      {
        name: "AI Capstone Project with Deep Learning",
        pdfPath: "/sertifikat/Coursera Sertif AI Capstone Project with Deep Learning.pdf",
      },
      {
        name: "Introduction to Deep Learning & Neural Networks with Keras",
        pdfPath: "/sertifikat/Coursera Sertif Introduction to Deep Learning & Neural Networks with Keras.pdf",
      },
      {
        name: "Introduction to Neural Networks and PyTorch",
        pdfPath: "/sertifikat/Coursera Sertif Introduction to Neural Networks and PyTorch.pdf",
      },
      {
        name: "Deep Learning with Keras and Tensorflow",
        pdfPath: "/sertifikat/Coursera Sertif Deep Learning with Keras and Tensorflow.pdf",
      },
      {
        name: "Deep Learning with PyTorch",
        pdfPath: "/sertifikat/Coursera Sertif Deep Learning with PyTorch.pdf",
      },
    ],
    genai: [
      {
        name: "Fundamentals of AI Agents Using RAG and LangChain",
        pdfPath: "/sertifikat/Coursera Sertif Fundamentals of AI Agents Using RAG and LangChain.pdf",
        special: true,
      },
      {
        name: "Project - Generative AI Applications with RAG and LangChain",
        pdfPath: "/sertifikat/Coursera Sertif Project - Generative AI Applications with RAG and LangChain.pdf",
      },
      {
        name: "Generative AI: Language Modeling with Transformers",
        pdfPath: "/sertifikat/Coursera Sertif Generative AI Language Modeling with Transformers.pdf",
      },
      {
        name: "Generative AI: Advanced Fine-Tuning for LLMs",
        pdfPath: "/sertifikat/Coursera Sertif Generative AI Advance Fine-Tuning for LLMs.pdf",
      },
      {
        name: "Generative AI and LLMs: Architecture and Data Preparation",
        pdfPath: "/sertifikat/Coursera Sertif Generative AI and LLMs - Arhitecture and Data Preparation.pdf",
      },
      {
        name: "Gen AI Foundational Models for NLP & Language Understanding",
        pdfPath: "/sertifikat/Coursera Sertif Gen AI Foundational Models for NLP & Language Understanding.pdf",
      },
      {
        name: "AI Engineering and Fine-Tuning Transformers",
        pdfPath: "/sertifikat/Coursera Sertif AI Engineering and Fine-Tuning Transformers.pdf",
      },
    ],
  };

  return (
    <section className="py-20 relative">
      {/* Subtle Neon Glow Divider */}
      <div className="neon-divider top-0" />

      {/* Title */}
      <div className="mb-16 text-left">
        <span className="font-mono text-xs font-bold tracking-widest text-primary-500 uppercase mb-3 block">
          EXPERTISE
        </span>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Core Competencies & Stack
        </h2>
        <p className="font-sans text-sm text-text-secondary mt-2 max-w-xl">
          A structured summary of primary engineering focus areas, tech stacks, and development infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Core Focus Areas */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-tertiary mb-2 block">
            Focus Areas
          </span>
          <div className="flex flex-col gap-8">
            {proficiencies.map((attr) => (
              <div key={attr.name} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                  {attr.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-sm font-bold text-text-primary">
                    {attr.name}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Technology Stack */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-tertiary mb-4 block">
            Technology Stack
          </span>
          <div className="border border-border/60 bg-surface/20 rounded-xl p-6">
            {skillCategories.map((category, idx) => (
              <SkillCategoryRow key={idx} {...category} />
            ))}
          </div>
        </div>
      </div>

      {/* Certifications (Tabbed Specialized Hub) */}
      <div className="mt-16 pt-8 border-t border-border/60">
        <Card className="bg-gradient-to-r from-primary-500/5 via-primary-600/5 to-transparent border border-primary-500/20 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-24 w-24 bg-primary-500/10 rounded-full blur-xl -translate-y-6 translate-x-6" />
          
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary-500" />
            <h3 className="font-mono text-xs font-extrabold uppercase tracking-wider text-text-primary">
              Professional Certifications [IBM Coursera]
            </h3>
          </div>

          <p className="font-sans text-xs text-text-secondary max-w-2xl leading-relaxed mb-8">
            Successfully completed coursework in advanced machine learning, neural architectures, and generative models. Click on any certificate below to view the official credential PDF.
          </p>

          {/* Specialization Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-border/40 pb-4">
            <button
              onClick={() => setActiveTab("ml")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === "ml"
                  ? "bg-primary-500 border-primary-500 text-white shadow-md shadow-primary-500/10"
                  : "bg-surface/60 border-border/85 text-text-secondary hover:text-text-primary"
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === "ai"
                  ? "bg-primary-500 border-primary-500 text-white shadow-md shadow-primary-500/10"
                  : "bg-surface/60 border-border/85 text-text-secondary hover:text-text-primary"
              }`}
            >
              AI Engineering
            </button>
            <button
              onClick={() => setActiveTab("genai")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === "genai"
                  ? "bg-primary-500 border-primary-500 text-white shadow-md shadow-primary-500/10"
                  : "bg-surface/60 border-border/85 text-text-secondary hover:text-text-primary"
              }`}
            >
              Generative AI & LLMs
            </button>
          </div>

          {/* Active Category Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certsData[activeTab].map((cert) => (
              <div
                key={cert.name}
                onClick={() => setModalPdf({ name: cert.name, url: cert.pdfPath })}
                className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  cert.special
                    ? "bg-primary-500/10 border-primary-500/30 hover:border-primary-500/60"
                    : "bg-surface/40 border-border/60 hover:border-primary-500/30 hover:bg-surface/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    cert.special
                      ? "bg-primary-500 text-white"
                      : "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-950/20"
                  }`}>
                    {cert.special ? (
                      <Award className="h-3.5 w-3.5" />
                    ) : (
                      <Check className="h-3.5 w-3.5" />
                    )}
                  </span>
                  <span className={`font-sans text-xs font-semibold leading-relaxed group-hover:text-primary-500 transition-colors ${
                    cert.special ? "text-text-primary font-bold" : "text-text-secondary"
                  }`}>
                    {cert.name}
                  </span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* PDF Modal Viewer Overlay */}
      {modalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-surface border border-border/80 rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-primary-500" />
                <h3 className="font-sans text-sm sm:text-base font-bold text-text-primary max-w-xl truncate">
                  {modalPdf.name}
                </h3>
              </div>
              <button
                onClick={() => setModalPdf(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-surface-raised text-text-secondary hover:text-text-primary hover:border-border transition-all"
                aria-label="Close Modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Modal Body: PDF iframe viewer */}
            <div className="w-full bg-bg-subtle/50 rounded-xl overflow-hidden border border-border/60 relative">
              
              {/* Responsive Iframe rendering */}
              <iframe
                src={`${modalPdf.url}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-[60vh] sm:h-[65vh] rounded-xl bg-bg"
                title="Credential Viewer"
              />
              
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="font-sans text-[11px] text-text-tertiary text-center sm:text-left">
                If the document does not display correctly on your mobile device, please open in a new tab.
              </span>
              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={modalPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-xs font-semibold shadow-md shadow-primary-500/10 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={() => setModalPdf(null)}
                  className="flex-grow sm:flex-grow-0 rounded-lg bg-bg-subtle border border-border/80 text-text-primary px-4 py-2 text-xs font-semibold hover:bg-surface-raised transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
