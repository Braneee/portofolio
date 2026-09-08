import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Hero />
      <SkillsMarquee />
      <FeaturedProjects />
      <Experience />
      <Skills />
    </div>
  );
}
