import Link from "next/link"

import { ProjectCard } from "@/components/shared/project-card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <SectionContainer>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects"
          description="A preview of my web development, university, and Digital Engineering projects."
        />

        <Button asChild variant="outline">
          <Link href="/projects">View all projects</Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  )
}