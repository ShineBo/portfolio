import type { Metadata } from "next"
import { BookOpen, Check, GraduationCap } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background of Shine Bo Bo across Computer Science and Digital Engineering.",
}

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Computer science foundations, expanded through engineering."
        description="My academic path brings together software fundamentals and the systems perspective needed to apply technology in the real world."
      />

      <SectionContainer>
        <div className="relative mx-auto max-w-5xl space-y-7 before:absolute before:top-8 before:bottom-8 before:left-6 before:w-px before:bg-border sm:before:left-8">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <article className="glass-panel interactive-card relative rounded-3xl p-6 pl-16 transition-all duration-500 sm:p-10 sm:pl-24">
                <span className="absolute top-7 left-2.5 z-10 grid size-11 place-items-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-sm sm:top-10 sm:left-3">
                  <GraduationCap className="size-4" />
                </span>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.status}</Badge>
                      <Badge variant="outline">{item.period}</Badge>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{item.degree}</h2>
                    <p className="mt-2 text-sm font-medium text-primary">{item.school}</p>
                  </div>
                  {item.gpa ? (
                    <div className="w-fit rounded-2xl bg-secondary px-4 py-3 text-center">
                      <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">GPA</p>
                      <p className="mt-1 text-xl font-bold">{item.gpa}</p>
                    </div>
                  ) : null}
                </div>

                <p className="mt-7 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.description}</p>

                <div className="mt-7 border-t border-border/60 pt-6">
                  <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                    <BookOpen className="size-4 text-primary" />
                    Key areas
                  </p>
                  <ul className="grid gap-3 md:grid-cols-3">
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
