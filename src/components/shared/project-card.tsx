import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectVisual } from "@/components/shared/project-visual"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  className?: string
  priority?: boolean
}

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <Card className={cn("interactive-card h-full p-0", className)}>
      <Link href={project.href} className="focus-ring flex h-full flex-col rounded-3xl">
        <ProjectVisual
          project={project}
          className={priority ? "min-h-64 sm:min-h-72" : undefined}
        />

        <CardContent className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <Badge variant="secondary" className="h-6 px-2.5 text-[0.68rem]">
              {project.category}
            </Badge>
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border/80 transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:border-primary/35 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <h3 className="mt-5 text-xl font-bold tracking-[-0.035em] sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-border/60 pt-5 font-mono text-[0.68rem] text-muted-foreground">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
