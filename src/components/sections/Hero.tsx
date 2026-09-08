"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[90dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-text-primary leading-[1.1]">
              Gibran Rais Hilmy
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-4">
             <h2 className="font-sans text-2xl md:text-3xl text-text-secondary tracking-tight">
               Software Engineer &amp; Mobile Developer
             </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 max-w-lg">
            <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
              Informatics Engineering student building precise, functional mobile applications with Flutter and resilient backend systems with Laravel.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6">
            <Link href="/projects">
              <Magnetic>
                <button className="group relative flex items-center gap-3 rounded-full bg-text-primary text-bg px-8 py-4 text-sm font-medium transition-transform hover:scale-105 active:scale-95">
                  <span>Explore Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Magnetic>
            </Link>
            <a href="/CV_GRHI.pdf" download="CV_GRHI.pdf" className="group flex items-center gap-2 text-sm font-medium text-text-primary hover:text-text-tertiary transition-colors">
              <Download className="h-4 w-4" />
              <span>Download Resumé</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait */}
        <div className="lg:col-span-5 w-full flex justify-end">
          <motion.div 
            variants={itemVariants} 
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden bg-surface shadow-2xl"
          >
            <div className="absolute inset-0 bg-neutral-900/10 z-10 mix-blend-overlay" />
            <img
              src="/profile.jpg"
              alt="Gibran Rais Hilmy"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
