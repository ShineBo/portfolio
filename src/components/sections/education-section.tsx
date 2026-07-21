import { GraduationCap } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"

export function EducationSection() {
  return (
    <SectionContainer className="border-t border-border/50">
      <SectionHeading
        eyebrow="Education"
        title="Two disciplines, one connected perspective."
        description="Computer Science gave me the foundation to build software. Digital Engineering is teaching me how that software fits into larger systems and real-world change."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 0.08} className="h-full">
            <article className="glass-panel interactive-card relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 sm:p-9">
              <div className="absolute -right-12 -top-12 size-40 rounded-full border border-primary/10 bg-primary/5" />
              <div className="relative flex items-start justify-between gap-5">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <Badge variant={index === 1 ? "default" : "secondary"}>{item.status}</Badge>
              </div>
              <h3 className="relative mt-8 text-2xl font-bold tracking-[-0.035em]">{item.degree}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{item.school}</p>
              <div className="relative mt-7 flex flex-wrap gap-5 border-t border-border/60 pt-5 text-sm">
                <span><strong className="font-semibold">{item.period}</strong></span>
                {item.gpa ? <span className="text-muted-foreground">GPA <strong className="text-foreground">{item.gpa}</strong></span> : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
