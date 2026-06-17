import Link from "next/link"

import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:bg-muted/40">
      <CardHeader>
        <div className="mb-3">
          <Badge variant="secondary">{project.category}</Badge>
        </div>

        <CardTitle className="text-xl">
          <Link href={project.href} className="hover:underline">
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={project.href}
          className="text-sm font-medium underline underline-offset-4"
        >
          View case study
        </Link>
      </CardFooter>
    </Card>
  )
}