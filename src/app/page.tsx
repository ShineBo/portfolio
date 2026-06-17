import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
    </>
  )
}