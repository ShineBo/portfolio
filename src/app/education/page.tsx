import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Award, BookOpen, Check, GraduationCap, MapPin } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education of Shine Bo Bo across Computer Science, liberal arts, Digital Engineering, networks, security, software, and connected systems.",
}

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Liberal-arts breadth. Computer-science depth. Engineering in practice."
        description="My academic path began with a human-centred Computer Science education and continues through project-based Digital Engineering—connecting software with networks, security, hardware, IoT, and real-world systems."
      />

      <SectionContainer>
        <div className="relative mx-auto max-w-6xl space-y-8 before:absolute before:top-8 before:bottom-8 before:left-6 before:w-px before:bg-border sm:before:left-8">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <article className="glass-panel relative rounded-3xl p-6 pl-16 sm:p-10 sm:pl-24">
                <span className="absolute top-7 left-2.5 z-10 grid size-11 place-items-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-sm sm:top-10 sm:left-3">
                  <GraduationCap className="size-4" />
                </span>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.status}</Badge>
                      <Badge variant="outline">{item.period}</Badge>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{item.degree}</h2>
                    <p className="mt-2 text-sm font-semibold text-primary">{item.school}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {item.faculty ? <span>{item.faculty}</span> : null}
                      {item.program ? <span>{item.program}</span> : null}
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  {item.gpa ? (
                    <div className="w-fit rounded-2xl border border-primary/15 bg-primary/8 px-5 py-3 text-center">
                      <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">GPA</p>
                      <p className="mt-1 text-xl font-bold">{item.gpa}</p>
                    </div>
                  ) : null}
                </div>

                <p className="mt-7 max-w-4xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {item.description}
                </p>

                {item.distinction ? (
                  <Link
                    href={item.distinction.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-7 flex max-w-2xl items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/8 p-4 transition-colors hover:border-amber-500/35"
                  >
                    <Award className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        {item.distinction.title}
                        <ArrowUpRight className="size-3.5" />
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">{item.distinction.detail}</span>
                    </span>
                  </Link>
                ) : null}

                <div className="mt-8 border-t border-border/60 pt-7">
                  <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                    <BookOpen className="size-4 text-primary" />
                    Academic foundation
                  </p>
                  <ul className="grid gap-3 lg:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-border/60 pt-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-sm font-bold tracking-tight">{item.courseworkLabel}</h3>
                    <Link
                      href={item.source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-primary transition-colors hover:text-foreground"
                    >
                      {item.source.label}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {item.courseworkGroups.map((group) => (
                      <section key={group.title} className="rounded-2xl border border-border/60 bg-card/45 p-5">
                        <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{group.title}</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {group.items.map((course) => (
                            <Badge key={course} variant="secondary" className="h-auto py-1.5 font-normal">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
