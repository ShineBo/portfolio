import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "@/components/shared/project-card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { isFeaturedProject, projects } from "@/data/projects"

export function FeaturedProjectsSection() {
  const featuredProjects = projects
    .filter(isFeaturedProject)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, 4)

  return (
    <SectionContainer id="featured-work" className="border-t border-border/50">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I built—and helped build."
          description="A transparent selection of personal work, coursework, and public contributions. Each case study identifies the context, repository owner, my role, and what I learned."
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
