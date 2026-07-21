import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "@/components/shared/project-card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4)

  return (
    <SectionContainer id="featured-work" className="border-t border-border/50">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built to learn, solve, and explore."
          description="A selection across full-stack development, intelligent systems, and digital engineering. Each one represents a different problem, toolset, and stage of my growth."
        />

        <Button asChild variant="outline" className="self-start sm:self-auto">
          <Link href="/projects">
            All projects
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            priority={index === 0}
            className={index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
