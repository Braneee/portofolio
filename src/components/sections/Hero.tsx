"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import NeuralCanvas from "../ui/NeuralCanvas";
import { ArrowRight, Download } from "lucide-react";

const roles = [
  "Informatics Engineering Student",
  "Junior Mobile Developer",
  "Junior Backend Developer",
  "Junior Web Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(35);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/60">
      {/* Interactive Neural Particles Background */}
      <NeuralCanvas />

      {/* Background glowing gradients */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-primary-500/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute left-1/3 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-primary-700/10 blur-[100px] animate-pulse" />

      {/* Style block for fluid morphing blob & cursor blink */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes morph-blob {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 30% / 50% 60% 30% 60%;
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-morph {
          animation: morph-blob 12s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 0.9s step-end infinite;
        }
      `}} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Polished & Professional Typography */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Institution Tagline */}
          <span className="font-mono text-xs font-bold tracking-widest text-primary-500 uppercase mb-4 block">
            Technical Informatics @ UDINUS
          </span>

          {/* Name & Title */}
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl leading-none">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-300 dark:to-primary-500 block mt-1">
              Gibran Rais Hilmy
            </span>
          </h1>

          {/* Professional Focus Subtitle */}
          <span className="mt-4 font-sans text-lg sm:text-xl font-semibold text-text-secondary tracking-tight min-h-[30px] flex items-center justify-center lg:justify-start gap-1">
            <span>{displayText}</span>
            <span className="w-[2px] h-[1.1em] bg-primary-500 dark:bg-primary-400 animate-blink" />
          </span>

          {/* Humble Description */}
          <p className="mt-6 max-w-xl font-sans text-sm sm:text-base text-text-secondary leading-relaxed text-justify">
            I am an Informatics Engineering student focused on building mobile applications using <strong className="font-bold text-text-primary">Flutter</strong> and developing backend systems with <strong className="font-bold text-text-primary">Laravel</strong>. Committed to learning new technologies and writing clean, functional code.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/projects">
              <Magnetic>
                <Button variant="primary" size="lg" className="rounded-lg">
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Magnetic>
            </Link>
            <a href="/CV_GRHI.pdf" download="CV_GRHI.pdf">
              <Magnetic>
                <Button variant="secondary" size="lg" className="rounded-lg">
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </Button>
              </Magnetic>
            </a>
          </div>
        </div>

        {/* Right Column: Dual-Tone Gradient Mask Photo (Design 2) */}
        <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
          <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
            
            {/* Glowing Backdrop Outline Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 via-primary-500 to-primary-800 rounded-full blur-2xl opacity-30 animate-pulse" />
            
            {/* Morphing Gradient border container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-primary-600 to-primary-800 p-1.5 animate-morph shadow-2xl transition-all duration-300 hover:scale-103">
              
              {/* Photo Mask container */}
              <div className="w-full h-full bg-surface rounded-full overflow-hidden animate-morph relative">
                <img
                  src="/profile.jpg"
                  alt="Gibran Rais Hilmy Iskandar"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
                
                {/* Thin overlay ring */}
                <div className="absolute inset-0 border border-primary-500/20 rounded-full pointer-events-none animate-morph" />
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
