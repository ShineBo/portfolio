import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  Code2,
  GitCommitHorizontal,
  ImageIcon,
} from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { ProjectVisual } from "@/components/shared/project-visual"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  getProjectHref,
  isFeaturedProject,
  projectContextLabels,
  projectDomainLabels,
  projectRelationshipLabels,
  projects,
} from "@/data/projects"

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
  const primaryRepository = project.repositories[0]

  return (
    <>
      <SectionContainer className="pb-10 sm:pb-14">
        <Reveal>
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {project.domains.map((domain) => (
                <Badge key={domain} variant="secondary">
                  {projectDomainLabels[domain]}
                </Badge>
              ))}
              {isFeaturedProject(project) ? <Badge>Selected work</Badge> : null}
            </div>
            <h1 className="mt-6 text-4xl leading-[1.02] font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {project.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="h-7 px-3 font-mono text-[0.68rem]">
                  {tech}
                </Badge>
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
              {primaryRepository?.url ? (
                <Button asChild variant="outline">
                  <Link href={primaryRepository.url} target="_blank" rel="noreferrer">
                    <Code2 /> {project.repositories.length > 1 ? "Primary repository" : "Repository"}
                  </Link>
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-[0.65fr_0.65fr_1.7fr]">
            <div className="bg-card p-5 sm:p-6">
              <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Year · status
              </dt>
              <dd className="mt-2 text-sm font-semibold">
                {project.year} · {project.status}
              </dd>
            </div>
            <div className="bg-card p-5 sm:p-6">
              <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Context
              </dt>
              <dd className="mt-2 text-sm font-semibold">
                {projectContextLabels[project.context]} · {projectRelationshipLabels[project.relationship]}
              </dd>
            </div>
            <div className="bg-card p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
              <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                My role
              </dt>
              <dd className="mt-2 text-sm font-semibold">{project.role}</dd>
            </div>
          </dl>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <ProjectVisual
            project={project}
            label={false}
            className="min-h-[22rem] rounded-[2rem] border border-border/70 sm:min-h-[30rem]"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow-line text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Project context
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              What the project is—and is not.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{project.overview}</p>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="rounded-3xl border border-border/70 bg-card/60 p-7">
              <h2 className="text-xl font-bold tracking-tight">What I worked on</h2>
              <ul className="mt-5 space-y-4">
                {project.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-primary/20 bg-primary/7 p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <BookOpenCheck className="size-5" />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.035em]">What I learned</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                These are learning outcomes from this project, not claims of professional mastery.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {project.learnings.map((learning, index) => (
              <Reveal key={learning} delay={index * 0.04}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/55 p-5">
                  <span className="font-mono text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-6">{learning}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border/60 pt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-line text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Source & evidence
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">
                Repositories and contribution history.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Repository ownership is shown explicitly. Contribution-history links filter the public commits attributed to my GitHub account.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {project.repositories.map((repository, index) => (
              <Reveal key={`${repository.owner}-${repository.label}`} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-border/70 bg-card/55 p-6">
                  <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                    {repository.label}
                  </p>
                  <h3 className="mt-3 break-words text-lg font-bold tracking-tight">
                    {repository.owner}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {repository.url ? (
                      <Button asChild variant="outline" size="sm">
                        <Link href={repository.url} target="_blank" rel="noreferrer">
                          <Code2 /> View repository
                        </Link>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Code2 className="size-4" /> Source link temporarily unavailable
                      </span>
                    )}
                    {repository.contributionUrl ? (
                      <Button asChild variant="ghost" size="sm">
                        <Link href={repository.contributionUrl} target="_blank" rel="noreferrer">
                          <GitCommitHorizontal /> My public commits
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border/60 pt-14">
          <div className="grid min-h-52 place-items-center rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center">
            <div>
              <ImageIcon className="mx-auto size-6 text-primary" />
              <h2 className="mt-4 text-lg font-bold">Project media placeholder</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                Screenshots, architecture notes, and process images can be added here as the case study is documented further.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/60">
        <Link href={getProjectHref(nextProject)} className="focus-ring group block rounded-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Next project</p>
          <div className="mt-4 flex items-end justify-between gap-5">
            <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
              {nextProject.title}
            </h2>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="size-5" />
            </span>
          </div>
        </Link>
      </SectionContainer>
    </>
  )
}
