import Link from "next/link";
import { motion, Variants } from "motion/react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { projects } from "@/data/projects";
import { ArrowRight, Smartphone } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-32 relative">
      {/* Header block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="font-sans text-4xl lg:text-5xl font-medium tracking-tight text-text-primary">
            Selected Work
          </h2>
          <p className="font-sans text-base text-text-secondary mt-4 max-w-xl">
            A look at my primary work: production-grade, offline-first mobile applications built with Flutter, integrated with scalable database backends.
          </p>
        </div>
        <Link
          href="/projects"
          className="group flex items-center gap-1.5 font-sans text-sm font-medium text-text-primary hover:text-text-secondary transition-colors mt-6 md:mt-0"
        >
          <span>View all projects</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featured.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <Card
              className="flex flex-col justify-between h-full border border-border/80 bg-surface/40 hover:bg-surface transition-all duration-500 p-0 overflow-hidden rounded-2xl group"
            >
            {/* Website/App Screenshot Preview */}
            <div className="w-full aspect-[16/9] overflow-hidden border-b border-border/60 relative bg-bg-subtle">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Card Content block with padding */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                {/* Platform badge */}
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400">
                    <Smartphone className="h-3 w-3" />
                    <span>{project.platform}</span>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-primary-600 animate-pulse-slow">
                    Featured App
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-sans text-xl font-bold text-text-primary group-hover:text-primary-500 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-xs font-semibold text-primary-500 mt-1">
                  {project.tagline}
                </p>
                
                <p className="font-sans text-xs sm:text-sm text-text-secondary mt-4 line-clamp-3 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1 mt-6 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] font-mono rounded-full">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-[10px] font-mono text-text-tertiary rounded-full">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* CTA action */}
              <Link href={`/projects/${project.slug}`}>
                <span className="flex items-center justify-center gap-1.5 w-full rounded-lg border border-border/80 bg-bg-subtle py-2.5 text-center text-xs font-bold text-text-primary hover:border-primary-500 hover:text-primary-500 transition-all duration-200 cursor-pointer">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
