import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  MessagesSquare,
  Server,
  Sparkles,
  Target,
} from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  evidenceGuide,
  learningAreas,
  skillCategories,
  softSkills,
  type SkillEvidence,
} from "@/data/skills"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "A project-backed view of the technical tools, collaboration strengths, and current learning areas of Shine Bo Bo.",
}

const categoryIcons = [Code2, Server, Database, BrainCircuit, Cpu, Layers3, GitBranch]

const technicalEvidence: Exclude<SkillEvidence, "learning-now">[] = [
  "repeated-project-use",
  "project-exposure",
  "coursework-exposure",
]

const evidenceStyles: Record<SkillEvidence, string> = {
  "repeated-project-use": "border-primary/25 bg-primary/10 text-primary",
  "project-exposure": "border-border/80 bg-secondary/75 text-secondary-foreground",
  "coursework-exposure": "border-border/80 bg-card text-muted-foreground",
  "learning-now": "border-primary/25 bg-primary/10 text-primary",
}

function evidenceLabel(level: SkillEvidence) {
  return evidenceGuide.find((item) => item.level === level)?.label ?? level
}

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills in practice"
        title="A project-backed toolkit, still growing."
        description="These are tools and concepts I have used in coursework, personal builds, and team projects. They show hands-on exposure rather than professional mastery, and I am continuing to deepen them through practice."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-foreground">
          <BookOpen className="size-4 text-primary" />
          Student and project-based experience
        </div>
      </PageHero>

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How to read this page"
              title="Evidence, not ability ratings."
              description="The labels below describe where I have encountered and applied a skill. They are not percentages, seniority levels, or claims of fluency."
            />
            <Reveal delay={0.08}>
              <div className="mt-7 rounded-2xl border border-border/70 bg-secondary/45 p-4 text-sm leading-6 text-muted-foreground">
                A project can provide real hands-on practice without being the same as production experience. I use these labels to keep that distinction clear.
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {evidenceGuide.map((item, index) => (
              <Reveal key={item.level} delay={index * 0.04} className="h-full">
                <article className="glass-panel h-full rounded-2xl p-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    <h2 className="text-sm font-bold tracking-tight">{item.label}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <SectionHeading
          eyebrow="Technical exposure"
          title="Tools connected to hands-on work."
          description="Each skill is grouped by the kind of evidence behind it, so the page shows both what I have used and the context in which I used it."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Sparkles

            return (
              <Reveal key={category.title} delay={(index % 3) * 0.05} className="h-full">
                <article className="interactive-card glass-panel group h-full rounded-3xl p-7 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[0.65rem] font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-7 text-xl font-bold tracking-[-0.03em]">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>

                  <div className="mt-6 space-y-5 border-t border-border/60 pt-5">
                    {technicalEvidence.map((level) => {
                      const skills = category.skills.filter((skill) => skill.evidence === level)

                      if (skills.length === 0) return null

                      return (
                        <div key={level}>
                          <p className="mb-2.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            {evidenceLabel(level)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <Badge
                                key={skill.name}
                                variant="outline"
                                className={`h-7 px-2.5 font-normal ${evidenceStyles[skill.evidence]}`}
                              >
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-5">
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Project evidence
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {category.projectExamples.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="focus-ring inline-flex items-center gap-1 rounded-full text-xs font-semibold text-primary transition-colors hover:text-foreground"
                        >
                          {project.label} <ArrowUpRight className="size-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeading
            eyebrow="How I work"
            title="People skills with real context."
            description="These strengths have developed through group projects, presentations, volunteering, customer-facing work, and academic research."
          />

          <div className="divide-y divide-border/70 border-y border-border/70">
            {softSkills.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 0.04}>
                <article className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="grid size-10 place-items-center rounded-2xl bg-secondary text-primary">
                    {index === 0 ? (
                      <MessagesSquare className="size-4" />
                    ) : (
                      <span className="font-mono text-[0.65rem] font-bold">0{index + 1}</span>
                    )}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold tracking-[-0.025em]">{skill.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{skill.evidence}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Currently improving"
            title="Learning goals in progress."
            description="These are active areas of study and experimentation—not areas where I claim deep expertise yet."
          />
          <Reveal delay={0.08}>
            <div className="flex max-w-md items-start gap-3 rounded-2xl border border-primary/20 bg-primary/8 p-4 text-sm leading-6 text-muted-foreground">
              <Target className="mt-0.5 size-5 shrink-0 text-primary" />
              The goal is steady depth: understand the fundamentals, apply them in a project, then reflect and improve.
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learningAreas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 3) * 0.05} className="h-full">
              <article className="interactive-card glass-panel h-full rounded-3xl p-7 transition-all duration-500">
                <Badge variant="outline" className={evidenceStyles["learning-now"]}>
                  Learning now
                </Badge>
                <h2 className="mt-6 text-xl font-bold tracking-[-0.03em]">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
