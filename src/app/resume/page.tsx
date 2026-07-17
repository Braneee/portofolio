"use client";
import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Layers, Database, Wrench, Brain, X, ExternalLink, Github, Linkedin } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const skillsList = {
    languages: ["Dart", "PHP", "JavaScript", "TypeScript", "Python", "SQL (MySQL, PostgreSQL)"],
    frameworks: ["Flutter SDK", "React", "Next.js", "Laravel", "Django", "Flask"],
    databases: ["MySQL", "PostgreSQL", "Supabase", "sqflite", "Hive DB", "MongoDB", "Redis"],
    tools: ["Docker", "Git", "RabbitMQ", "Celery", "Vercel", "VS Code"],
    ai: ["Machine Learning Foundations", "Deep Learning Foundations", "Generative AI Concepts", "NLP Basics"]
  };

  const [modalPdf, setModalPdf] = useState<{ name: string; url: string } | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 print:p-0 print:my-0">
      {/* Header controls (Hidden during print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border print:hidden">
        <div>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-text-primary">
            Curriculum Vitae
          </h1>
          <p className="font-sans text-sm text-text-secondary mt-1">
            View, print, or download my professional resume.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="md" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            <span>Print Resume</span>
          </Button>
          <a href="/CV_GRHI.pdf" download="CV_GRHI.pdf">
            <Button variant="primary" size="md">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="rounded-xl border border-border bg-surface p-8 shadow-sm print:border-0 print:p-0 print:shadow-none">
        
        {/* CV Header: Personal Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 border-b border-border pb-8">
          <div className="flex-grow">
            <h2 className="font-sans text-3xl font-extrabold text-text-primary tracking-tight uppercase leading-none">
              Gibran Rais Hilmy Iskandar
            </h2>
            <p className="font-sans text-sm font-bold text-primary-500 mt-2.5">
              Mobile, Backend & Web Developer
            </p>
            <p className="font-sans text-xs text-text-secondary mt-4 max-w-xl leading-relaxed text-justify">
              High-achieving Computer Science undergraduate with proven expertise in Mobile Application Development (Flutter, Dart). Experienced in building production-grade, offline-first mobile applications and integrating them with robust backend systems. Possesses a strong foundation in implementing on-device AI features (Google ML Kit) to deliver performant and scalable mobile solutions.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 font-sans text-xs text-text-secondary sm:border-l sm:border-border/80 sm:pl-6 shrink-0 w-full sm:w-auto">
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-text-tertiary shrink-0" />
              <a href="mailto:raishilmy0@gmail.com" className="hover:text-primary-500 transition-colors">raishilmy0@gmail.com</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-text-tertiary shrink-0" />
              <span>+62 821-3529-2904</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-text-tertiary shrink-0 mt-0.5" />
              <span className="leading-tight">Semarang, Central Java, Indonesia</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Github className="h-4 w-4 text-text-tertiary shrink-0" />
              <a href="https://github.com/Braneee" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">github.com/Braneee</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Linkedin className="h-4 w-4 text-text-tertiary shrink-0" />
              <a href="https://www.linkedin.com/in/gibranrais/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">linkedin.com/in/gibranrais</a>
            </div>
          </div>
        </div>
 
        {/* CV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
          {/* Left Column: Skills & Certifications */}
          <div className="md:col-span-1 flex flex-col gap-6">
            
            {/* Tech Skills Matrix */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-tertiary border-b border-border pb-2 mb-3">
                Skills Matrix
              </h3>
              <div className="flex flex-col gap-4 font-sans text-xs">
                <div>
                  <span className="font-bold text-text-primary flex items-center gap-1.5 mb-1.5">
                    <Code className="h-3.5 w-3.5 text-primary-500" />
                    <span>Languages</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skillsList.languages.map((s) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-text-primary flex items-center gap-1.5 mb-1.5">
                    <Layers className="h-3.5 w-3.5 text-primary-500" />
                    <span>Frameworks & SDKs</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skillsList.frameworks.map((s) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-text-primary flex items-center gap-1.5 mb-1.5">
                    <Database className="h-3.5 w-3.5 text-primary-500" />
                    <span>Databases & Cloud</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skillsList.databases.map((s) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-text-primary flex items-center gap-1.5 mb-1.5">
                    <Wrench className="h-3.5 w-3.5 text-primary-500" />
                    <span>Developer Tools</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skillsList.tools.map((s) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-text-primary flex items-center gap-1.5 mb-1.5">
                    <Brain className="h-3.5 w-3.5 text-primary-500" />
                    <span>Artificial Intelligence</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skillsList.ai.map((s) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-tertiary border-b border-border pb-2 mb-3">
                Certifications
              </h3>
              
              <div className="flex flex-col gap-4 font-sans text-xs text-text-secondary print:block print:space-y-4">
                {/* ML Spec */}
                <div>
                  <span className="font-bold text-text-primary block mb-1">Machine Learning (IBM)</span>
                  <ul className="flex flex-col gap-1.5 list-disc pl-4 text-[11px] print:list-disc">
                    <li onClick={() => setModalPdf({ name: "IBM Machine Learning Specialization", url: "/sertifikat/SERTIFIKAT IBM MACHINE LEARNING.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors font-semibold print:cursor-auto print:hover:text-text-secondary">IBM Machine Learning Specialization (Professional Credential)</li>
                    <li onClick={() => setModalPdf({ name: "Exploratory Data Analysis for Machine Learning", url: "/sertifikat/Coursera Sertifikat DataMining - Exploratory Data Analysis For Machine Learning - Gibran.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Exploratory Data Analysis for Machine Learning</li>
                    <li onClick={() => setModalPdf({ name: "Supervised Machine Learning: Classification", url: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Classification - Gibran.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Supervised Machine Learning: Classification</li>
                    <li onClick={() => setModalPdf({ name: "Supervised Machine Learning: Regression", url: "/sertifikat/Coursera Sertifikat DataMining - Supervised Machine Learning Regression - Gibran.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Supervised Machine Learning: Regression</li>
                    <li onClick={() => setModalPdf({ name: "Unsupervised Machine Learning", url: "/sertifikat/Coursera Mater Unsupervised Machine Learning.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Unsupervised Machine Learning</li>
                    <li onClick={() => setModalPdf({ name: "Deep Learning & Reinforcement Learning", url: "/sertifikat/Coursera Materi Deep Learning adn Reinforcement Learning.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Deep Learning & Reinforcement Learning</li>
                    <li onClick={() => setModalPdf({ name: "Machine Learning with Python", url: "/sertifikat/Coursera Sertif Machine Learning With Python.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Machine Learning with Python</li>
                    <li onClick={() => setModalPdf({ name: "Machine Learning Capstone", url: "/sertifikat/Coursera Materi Terakhir.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Machine Learning Capstone</li>
                  </ul>
                </div>

                {/* AI & GenAI Spec */}
                <div className="print:break-inside-avoid">
                  <span className="font-bold text-text-primary block mb-1">AI Engineering & Generative AI (IBM)</span>
                  <ul className="flex flex-col gap-1.5 list-disc pl-4 text-[11px] print:list-disc">
                    <li onClick={() => setModalPdf({ name: "IBM AI Engineering Professional Certificate", url: "/sertifikat/Coursera Sertif Professional IBM AI Engineering.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors font-semibold print:cursor-auto print:hover:text-text-secondary">IBM AI Engineering Professional Certificate (13 Courses)</li>
                    <li onClick={() => setModalPdf({ name: "AI Capstone Project with Deep Learning", url: "/sertifikat/Coursera Sertif AI Capstone Project with Deep Learning.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">AI Capstone Project with Deep Learning</li>
                    <li onClick={() => setModalPdf({ name: "Deep Learning with PyTorch", url: "/sertifikat/Coursera Sertif Deep Learning with PyTorch.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Deep Learning with PyTorch</li>
                    <li onClick={() => setModalPdf({ name: "Deep Learning with Keras and Tensorflow", url: "/sertifikat/Coursera Sertif Deep Learning with Keras and Tensorflow.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Deep Learning with Keras and Tensorflow</li>
                    <li onClick={() => setModalPdf({ name: "Introduction to Deep Learning & Neural Networks with Keras", url: "/sertifikat/Coursera Sertif Introduction to Deep Learning & Neural Networks with Keras.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Introduction to Deep Learning & Neural Networks with Keras</li>
                    <li onClick={() => setModalPdf({ name: "Introduction to Neural Networks and PyTorch", url: "/sertifikat/Coursera Sertif Introduction to Neural Networks and PyTorch.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Introduction to Neural Networks and PyTorch</li>
                    <li onClick={() => setModalPdf({ name: "Fundamentals of AI Agents Using RAG and LangChain", url: "/sertifikat/Coursera Sertif Fundamentals of AI Agents Using RAG and LangChain.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Fundamentals of AI Agents Using RAG and LangChain</li>
                    <li onClick={() => setModalPdf({ name: "Project: Generative AI Applications with RAG and LangChain", url: "/sertifikat/Coursera Sertif Project - Generative AI Applications with RAG and LangChain.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Project: Generative AI Applications with RAG and LangChain</li>
                    <li onClick={() => setModalPdf({ name: "Generative AI: Language Modeling with Transformers", url: "/sertifikat/Coursera Sertif Generative AI Language Modeling with Transformers.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Generative AI: Language Modeling with Transformers</li>
                    <li onClick={() => setModalPdf({ name: "Generative AI: Advanced Fine-Tuning for LLMs", url: "/sertifikat/Coursera Sertif Generative AI Advance Fine-Tuning for LLMs.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Generative AI: Advanced Fine-Tuning for LLMs</li>
                    <li onClick={() => setModalPdf({ name: "Generative AI and LLMs: Architecture & Data Prep", url: "/sertifikat/Coursera Sertif Generative AI and LLMs - Arhitecture and Data Preparation.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Generative AI and LLMs: Architecture & Data Prep</li>
                    <li onClick={() => setModalPdf({ name: "Gen AI Foundational Models for NLP & Language Understanding", url: "/sertifikat/Coursera Sertif Gen AI Foundational Models for NLP & Language Understanding.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Gen AI Foundational Models for NLP & Language Understanding</li>
                    <li onClick={() => setModalPdf({ name: "AI Engineering and Fine-Tuning Transformers", url: "/sertifikat/Coursera Sertif AI Engineering and Fine-Tuning Transformers.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">AI Engineering and Fine-Tuning Transformers</li>
                    <li onClick={() => setModalPdf({ name: "Introduction to Artificial Intelligence (AI)", url: "/sertifikat/Coursera C78JV5OX08IV.pdf" })} className="hover:text-primary-500 cursor-pointer transition-colors print:cursor-auto print:hover:text-text-secondary">Introduction to Artificial Intelligence (AI)</li>
                  </ul>
                </div>

                {/* Seminars */}
                <div>
                  <span className="font-bold text-text-primary block mb-1">Seminars & Others</span>
                  <ul className="flex flex-col gap-1.5 list-disc pl-4 text-[11px] print:list-disc">
                    <li>Speaker/Participant: Web Security & Cloud – DOSCOM Udinus</li>
                    <li>Speaker/Participant: Leveraging Cloud & Linux – DOSCOM Udinus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="md:col-span-2 flex flex-col gap-8">
            
            {/* Experience */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-tertiary border-b border-border pb-2 mb-4 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-text-tertiary" />
                <span>Professional Experience</span>
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* Decodes Media Internship */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">Mobile & Web Developer Intern</span>
                    <span className="font-mono text-xs text-text-tertiary">Feb 2026 - May 2026</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Decodes Media | Semarang, Indonesia</span>
                  <ul className="list-disc pl-5 mt-2 font-sans text-xs text-text-secondary space-y-1.5 text-justify">
                    <li>Developed STPI Mobile, a cross-platform Flutter application for active tuberculosis screening and patient tracking.</li>
                    <li>Implemented Clean Architecture and MVVM patterns with Riverpod state management, ensuring a highly modular and maintainable codebase.</li>
                    <li>Built an offline-first synchronization pipeline using Hive DB and Supabase, enabling seamless data entry in remote areas with low connectivity.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-tertiary border-b border-border pb-2 mb-4 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-text-tertiary" />
                <span>Selected Projects</span>
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* STPI Mobile */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">STPI Mobile (Healthcare & TB Screening Platform)</span>
                    <span className="font-mono text-xs text-text-tertiary">2026</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Flutter, Riverpod, Hive DB, Supabase, PostgreSQL, Geolocator</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Engineered using Clean Architecture and MVVM design patterns with Riverpod state management.</li>
                    <li>Implemented an offline-first architecture using Hive DB with a background sync queue to automatically sync local records to Supabase.</li>
                    <li><strong className="text-text-primary">GitHub:</strong> <a href="https://github.com/Braneee/stpi-mobile" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-0.5">github.com/Braneee/stpi-mobile <ExternalLink className="h-3 w-3" /></a></li>
                  </ul>
                </div>

                {/* Face Recognition Attendance System */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">Aplikasi Presensi Online - Face Recognition</span>
                    <span className="font-mono text-xs text-text-tertiary">2026</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Laravel 11, Flask (Python), DeepFace ArcFace, Cosine Similarity, MySQL</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Developed an automated presence system using a microservices architecture connecting Laravel 11 with a Flask engine.</li>
                    <li>Implemented face recognition using DeepFace ArcFace and Cosine Similarity for webcam-based student verification.</li>
                    <li><strong className="text-text-primary">GitHub:</strong> <a href="https://github.com/Braneee/sistem-presensi-ooad" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-0.5">github.com/Braneee/sistem-presensi-ooad <ExternalLink className="h-3 w-3" /></a></li>
                  </ul>
                </div>

                {/* CaterNear */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">CaterNear</span>
                    <span className="font-mono text-xs text-text-tertiary">2026</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Laravel 11, FilamentPHP 3, Midtrans Snap, Google Maps API, MySQL</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Developed a location-based marketplace platform for local catering connecting customers and vendors.</li>
                    <li>Integrated Midtrans Snap payment gateway, FilamentPHP 3 admin panel, and Google Maps API / Geolocation.</li>
                    <li><strong className="text-text-primary">GitHub:</strong> <a href="https://github.com/Braneee/caternear" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-0.5">github.com/Braneee/caternear <ExternalLink className="h-3 w-3" /></a></li>
                  </ul>
                </div>

                {/* Poliklinik Portal */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">Poliklinik Portal</span>
                    <span className="font-mono text-xs text-text-tertiary">2026</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Laravel, MySQL, TailwindCSS, DaisyUI</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Developed a web-based Polyclinic Patient Registration & Medical Record Management Portal using Laravel and MySQL.</li>
                    <li>Implemented role-based access control (RBAC) for Doctors, Patients, and Administrators to secure medical records and schedules.</li>
                    <li><strong className="text-text-primary">GitHub:</strong> <a href="https://github.com/Braneee/poliklinik-app" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-0.5">github.com/Braneee/poliklinik-app <ExternalLink className="h-3 w-3" /></a></li>
                  </ul>
                </div>

                {/* WarungKu POS */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">WarungKu POS (Point of Sale)</span>
                    <span className="font-mono text-xs text-text-tertiary">2025</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Flutter, SQLite (sqflite), Supabase, Mobile Scanner</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Engineered using MVVM pattern with clean state management, supporting local product caching and role-based access control.</li>
                    <li>Integrated camera-based barcode scanning using Mobile Scanner to enable instant product lookup and addition to cart.</li>
                  </ul>
                </div>

                {/* LMS Backend */}
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">LMS Backend (Learning Management System API)</span>
                    <span className="font-mono text-xs text-text-tertiary">2025</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Django, Celery, Redis, RabbitMQ, PostgreSQL, MongoDB, Docker</span>
                  <ul className="list-disc pl-5 mt-1.5 font-sans text-xs text-text-secondary space-y-1 text-justify">
                    <li>Architected a containerized Django REST Framework backend using Docker Compose, optimized for high-traffic student portals.</li>
                    <li>Implemented asynchronous background tasks (PDF certificate generation and automated email dispatching) using Celery and RabbitMQ.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-tertiary border-b border-border pb-2 mb-4 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-text-tertiary" />
                <span>Education</span>
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-sm font-bold text-text-primary">Bachelor of Computer Science (Technical Informatics)</span>
                    <span className="font-mono text-xs text-text-tertiary">2023 - Present</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-primary-500">Dian Nuswantoro University (UDINUS) | Semarang, Indonesia</span>
                  <p className="font-sans text-xs text-text-secondary mt-2 text-justify">
                    GPA: **3.68 / 4.00 (6th Semester)**. Academic Focus: Object-Oriented Programming (OOP), Data Structures & Algorithms, Software Engineering, Relational Database Systems, Web & Mobile Development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* PDF Modal Viewer Overlay */}
      {modalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in print:hidden">
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

      {/* Printable CSS Helper (Only injected on client) */}
      <style jsx global>{`
        @media print {
          header, footer, button, .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .mx-auto {
            max-width: 100% !important;
            padding: 0 !important;
          }
          .bg-surface {
            background: white !important;
            border: 0 !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          .bg-bg-subtle, .bg-bg {
            background: transparent !important;
          }
        }
      `}</style>
    </div>
  );
}
