import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/shared/section-container"
import { projects } from "@/data/projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <SectionContainer>
      <div className="max-w-3xl">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          ← Back to projects
        </Link>

        <div className="mt-8">
          <Badge variant="secondary">{project.category}</Badge>
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {project.github ? (
            <Button asChild variant="outline">
              <Link href={project.github} target="_blank">
                GitHub
              </Link>
            </Button>
          ) : null}

          {project.liveDemo ? (
            <Button asChild>
              <Link href={project.liveDemo} target="_blank">
                Live Demo
              </Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Project overview
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            {project.overview}
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Highlights
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  )
}