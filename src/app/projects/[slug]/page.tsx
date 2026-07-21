import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, ImageIcon } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { ProjectVisual } from "@/components/shared/project-visual"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) return { title: "Project not found" }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]

  if (!project) notFound()

  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <>
      <SectionContainer className="pb-10 sm:pb-14">
        <Reveal>
          <Link href="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              {project.featured ? <Badge>Featured project</Badge> : null}
            </div>
            <h1 className="mt-6 text-4xl leading-[1.02] font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{project.title}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="h-7 px-3 font-mono text-[0.68rem]">{tech}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveDemo ? (
                <Button asChild>
                  <Link href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live project <ArrowUpRight />
                  </Link>
                </Button>
              ) : null}
              {project.github ? (
                <Button asChild variant="outline">
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <Code2 /> Source code
                  </Link>
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <ProjectVisual project={project} label={false} className="min-h-[22rem] rounded-[2rem] border border-border/70 sm:min-h-[30rem]" />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow-line text-xs font-bold uppercase tracking-[0.2em] text-primary">Project overview</p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">The context and approach.</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{project.overview}</p>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="rounded-3xl border border-border/70 bg-card/60 p-7">
              <h2 className="text-xl font-bold tracking-tight">Key highlights</h2>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-border/60 pt-14">
          <SectionContainer className="max-w-none p-0 sm:p-0 lg:p-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-line text-xs font-bold uppercase tracking-[0.2em] text-primary">Project gallery</p>
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">Screenshots coming next.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">These polished placeholders are ready to be replaced with final screens, diagrams, or process photos.</p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {["Primary interface", "Key workflow", "Technical detail"].map((label, index) => (
                <div key={label} className={`grid min-h-56 place-items-center rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center ${index === 0 ? "md:col-span-2 md:min-h-80" : ""}`}>
                  <div>
                    <ImageIcon className="mx-auto size-6 text-primary" />
                    <p className="mt-3 text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Replace with project media</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionContainer>
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/60">
        <Link href={nextProject.href} className="focus-ring group block rounded-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Next project</p>
          <div className="mt-4 flex items-end justify-between gap-5">
            <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-5xl">{nextProject.title}</h2>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="size-5" />
            </span>
          </div>
        </Link>
      </SectionContainer>
    </>
  )
}
