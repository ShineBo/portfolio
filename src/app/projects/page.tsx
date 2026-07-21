import type { Metadata } from "next"

import { ProjectsGrid } from "@/components/projects/projects-grid"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore software, web development, AI, and Digital Engineering projects by Shine Bo Bo.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project archive"
        title="A growing record of things I have built."
        description="From full-stack products and machine-learning experiments to IoT prototypes and early frontend studies—each project captures a practical lesson."
      />
      <SectionContainer>
        <ProjectsGrid projects={projects} />
      </SectionContainer>
    </>
  )
}
