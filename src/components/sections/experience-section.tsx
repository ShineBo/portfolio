import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  const selectedExperience = experiences.slice(0, 3)

  return (
    <SectionContainer className="border-t border-border/50">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Experience"
          title="Learning through responsibility."
          description="Work, research, and volunteer roles that strengthened how I communicate, adapt, and deliver with a team."
        />
        <Link
          href="/experience"
          className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-semibold text-primary hover:text-foreground"
        >
          Full experience
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="relative mt-12 border-l border-border/80 sm:ml-3">
        {selectedExperience.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.06}>
            <article className="relative grid gap-4 border-b border-border/60 py-8 pl-7 first:pt-0 last:border-b-0 sm:grid-cols-[0.75fr_1.25fr] sm:gap-10 sm:pl-10">
              <span className="absolute top-9 -left-[5px] size-2.5 rounded-full border-2 border-background bg-primary first:top-1" />
              <div>
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary">{item.period}</p>
                <h3 className="mt-2 text-lg font-bold tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground sm:pt-5">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
