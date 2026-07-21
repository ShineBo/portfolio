import type { Metadata } from "next"
import { BrainCircuit, Code2, Cpu, Database, GitBranch, Layers3, MessagesSquare, Server, Sparkles, Wrench } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used by Shine Bo Bo across web development, software engineering, AI, and Digital Engineering.",
}

const icons = [Code2, Server, Database, BrainCircuit, Cpu, Layers3, Wrench, GitBranch, MessagesSquare, Sparkles]

export default function SkillsPage() {
  const skillCount = new Set(skillCategories.flatMap((category) => category.skills)).size

  return (
    <>
      <PageHero
        eyebrow="Skills & tools"
        title="A flexible toolkit for end-to-end problem solving."
        description="I am comfortable moving across the stack and learning the tool a project needs. Depth is an ongoing practice, not a finished checklist."
      >
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span><strong className="text-xl text-foreground">{skillCategories.length}</strong> capability areas</span>
          <span><strong className="text-xl text-foreground">{skillCount}+</strong> tools and practices</span>
        </div>
      </PageHero>

      <SectionContainer>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index] ?? Sparkles
            return (
              <Reveal key={category.title} delay={(index % 3) * 0.05} className="h-full">
                <article className="interactive-card glass-panel group h-full rounded-3xl p-7 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[0.65rem] font-semibold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-7 text-xl font-bold tracking-[-0.03em]">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="h-6 bg-secondary/70 px-2.5 font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </SectionContainer>
    </>
  )
}
