import type { Metadata } from "next"
import { Check, Milestone } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experience"

export const metadata: Metadata = {
  title: "Experience",
  description: "Work, research, volunteer, and project experience of Shine Bo Bo.",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Different roles, a shared habit of showing up."
        description="My experience spans research, project development, customer-facing work, and volunteering—each one has strengthened a different part of how I work."
      />

      <SectionContainer>
        <div className="mx-auto max-w-5xl">
          {experiences.map((item, index) => (
            <Reveal key={`${item.role}-${item.organization}`} delay={(index % 2) * 0.06}>
              <article className="relative grid gap-6 border-b border-border/70 py-10 first:pt-0 last:border-b-0 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Milestone className="size-4" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-primary">{item.period}</span>
                  </div>
                  <Badge variant="secondary" className="mt-4">{item.type}</Badge>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{item.role}</h2>
                  <p className="mt-2 text-sm font-semibold text-primary">{item.organization}</p>
                  <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.description}</p>
                  <ul className="mt-6 grid gap-3 rounded-2xl border border-border/60 bg-card/50 p-5 md:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
