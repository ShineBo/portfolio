import type { Metadata } from "next"

import { ProjectCard } from "@/components/shared/project-card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software, web development, university, and Digital Engineering projects by Ming Zhu.",
}

export default function ProjectsPage() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Projects"
        title="Projects and case studies"
        description="A collection of my software, web development, university, and Digital Engineering projects."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  )
}