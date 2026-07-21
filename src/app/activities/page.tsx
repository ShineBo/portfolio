import type { Metadata } from "next"
import { Check, Lightbulb, Presentation, Users } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { activities } from "@/data/activities"

export const metadata: Metadata = {
  title: "Activities",
  description: "University activities, technical presentations, and personal development interests of Shine Bo Bo.",
}

const icons = [Users, Presentation, Lightbulb]

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="The work outside class shapes the work inside it."
        description="Collaboration, presentation, and personal exploration help me develop the communication and curiosity that technical projects also require."
      />

      <SectionContainer>
        <div className="grid gap-5 lg:grid-cols-3">
          {activities.map((item, index) => {
            const Icon = icons[index] ?? Lightbulb
            return (
              <Reveal key={`${item.title}-${item.organization}`} delay={index * 0.07} className="h-full">
                <article className="interactive-card glass-panel group h-full rounded-3xl p-7 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                  <p className="mt-8 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary">{item.category}</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-border/60 pt-5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-7 text-center sm:p-10">
          <p className="text-sm font-semibold text-primary">A space for future milestones</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Add upcoming certifications, hackathons, community work, speaking events, or personal interests here as your story grows.
          </p>
        </Reveal>
      </SectionContainer>
    </>
  )
}
