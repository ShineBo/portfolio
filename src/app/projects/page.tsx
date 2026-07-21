import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, GitBranch, GitCommitHorizontal } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  archiveProjects,
  documentedProjectCount,
  getProjectHref,
  projects,
} from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A transparent archive of personal projects, coursework, team builds, and public GitHub contributions by Shine Bo Bo.",
}

const contributionProjects = projects.filter(
  (project) => project.relationship === "external-contributor"
)

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project archive"
        title="Projects I’ve built—and helped build."
        description="A transparent archive of personal work, coursework, team projects, and public GitHub contributions. Each detailed entry identifies the project context, repository owner, my role, and what I learned."
      >
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <span>
            <strong className="text-xl text-foreground">{documentedProjectCount}</strong> documented project groups
          </span>
          <span>
            <strong className="text-xl text-foreground">{projects.length}</strong> detailed case studies
          </span>
          <span>
            <strong className="text-xl text-foreground">{contributionProjects.length}</strong> external contributions
          </span>
        </div>
      </PageHero>

      <SectionContainer>
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-primary/20 bg-primary/7 p-5 sm:flex-row sm:items-start sm:p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <GitBranch className="size-5" />
            </span>
            <div>
              <h2 className="font-bold tracking-tight">How this archive was assembled</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
                Public GitHub repositories and attributed contribution history were reviewed in July 2026. Frontend and backend repositories for one system are grouped together; one empty repository and one fork-only repository are not presented as authored projects. Private or unlinked work cannot be verified here.
              </p>
            </div>
          </div>
        </Reveal>

        <ProjectsGrid projects={projects} />
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Public collaboration"
            title="Contributions, with ownership made clear."
            description="These repositories belong to other GitHub users. The summaries below are limited to work visible in commits and merged pull requests attributed to my account."
          />
          <Reveal delay={0.08}>
            <p className="max-w-md rounded-2xl border border-border/70 bg-card/55 p-4 text-sm leading-6 text-muted-foreground">
              Contribution counts can include merge commits, so the case studies describe verified implementation work instead of using counts as a skill rating.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {contributionProjects.map((project, index) => {
            const repository = project.repositories[0]

            return (
              <Reveal key={project.slug} delay={index * 0.05} className="h-full">
                <article className="interactive-card glass-panel flex h-full flex-col rounded-3xl p-7 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline" className="border-primary/25 bg-primary/8 text-primary">
                      External contribution
                    </Badge>
                    <GitCommitHorizontal className="size-5 text-primary" />
                  </div>
                  <p className="mt-6 font-mono text-[0.65rem] font-semibold text-muted-foreground">
                    {repository.owner}
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-[-0.03em]">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.role}</p>
                  <ul className="mt-5 flex-1 space-y-2 border-t border-border/60 pt-5">
                    {project.contributions.slice(0, 2).map((contribution) => (
                      <li key={contribution} className="text-sm leading-6 text-muted-foreground">
                        · {contribution}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={getProjectHref(project)}
                    className="focus-ring mt-6 inline-flex items-center gap-2 self-start rounded-full text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    See contribution evidence <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <SectionHeading
          eyebrow="Learning archive"
          title="Smaller builds still count as part of the journey."
          description="Course sandboxes, assignments, interface recreations, and early experiments are kept here without presenting them as equal in scope to the case studies above."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {archiveProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 4) * 0.035} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/45 p-5 transition-colors hover:border-primary/25 hover:bg-card/75 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="h-6 text-[0.66rem]">
                      {project.context}
                    </Badge>
                    <span className="font-mono text-[0.65rem] text-muted-foreground">{project.year}</span>
                  </div>
                  {project.repository ? (
                    <Link
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="focus-ring grid size-9 place-items-center rounded-full border border-border/80 text-muted-foreground transition-all group-hover:border-primary/30 group-hover:text-primary"
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : (
                    <span
                      title="Source link temporarily unavailable"
                      className="grid size-9 place-items-center rounded-full border border-border/60 text-muted-foreground/50"
                    >
                      <GitBranch className="size-4" />
                    </span>
                  )}
                </div>
                <h2 className="mt-5 text-lg font-bold tracking-[-0.025em]">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{project.note}</p>
                <p className="mt-5 border-t border-border/60 pt-4 font-mono text-[0.67rem] text-muted-foreground">
                  {project.technology}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
