import Link from "next/link"
import { ArrowUpRight, Globe2, Sparkles, Users } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { activities } from "@/data/activities"

const icons = [Globe2, Users, Sparkles]

export function ActivitiesSection() {
  const selectedActivities = activities.filter((item) => item.featured).slice(0, 3)

  return (
    <SectionContainer className="border-t border-border/50">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Leadership & activities"
            title="Learning across borders. Leading where I am."
            description="International programs, student leadership, and 230 recorded activity hours have strengthened how I listen, communicate, and contribute."
          />
          <Reveal delay={0.08}>
            <Link href="/activities" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-primary hover:text-foreground">
              More about my activities
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {selectedActivities.map((item, index) => {
            const Icon = icons[index] ?? Sparkles
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="group grid h-full gap-4 rounded-2xl border border-border/70 bg-card/60 p-5 transition-all duration-300 hover:border-primary/25 hover:bg-card sm:block lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold tracking-tight">{item.title}</h3>
                      <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">{item.category}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}
