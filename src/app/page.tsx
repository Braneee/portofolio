import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Hero />
      <SkillsMarquee />
      
      <FadeIn delay={100}>
        <FeaturedProjects />
      </FadeIn>
      
      <FadeIn delay={100}>
        <Experience />
      </FadeIn>
      
      <FadeIn delay={100}>
        <Skills />
      </FadeIn>
    </div>
  );
}
