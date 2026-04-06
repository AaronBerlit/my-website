import { ThreeCanvas } from "@/components/ThreeCanvas";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full bg-background text-foreground overflow-x-hidden">
      <FloatingNav />
      {/* Background is pinned so it stays continuous across sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeCanvas />
      </div>

      <div className="relative z-10 flex flex-col gap-12 sm:gap-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
