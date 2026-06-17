import type { Metadata } from "next"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ming Zhu, a Computer Science graduate and Digital Engineering student.",
}

const profileCards = [
  {
    title: "Computer Science",
    description:
      "I have a foundation in programming, web development, databases, algorithms, and software systems.",
  },
  {
    title: "Digital Engineering",
    description:
      "I am currently studying how software, engineering systems, and digital transformation connect in real-world projects.",
  },
  {
    title: "Builder Mindset",
    description:
      "I enjoy turning ideas into working projects, learning through hands-on practice, and improving through iteration.",
  },
]

const focusAreas = [
  "Modern web development with React, Next.js, TypeScript, and Tailwind CSS",
  "Software projects that solve real problems and show clear technical thinking",
  "Digital Engineering topics such as systems, IoT, prototyping, and integration",
  "Clear communication through documentation, presentations, and case studies",
]

export default function AboutPage() {
  return (
    <>
      <SectionContainer>
        <SectionHeading
          eyebrow="About"
          title="Computer Science graduate and Digital Engineering student."
          description="I am building a path that connects software development, engineering thinking, and practical technology projects."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {profileCards.map((card) => (
            <Card
              key={card.title}
              className="h-full transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Focus
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I am focused on
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              My current goal is to keep improving as a developer and engineering
              student by building projects that are useful, well-structured, and
              easy to understand.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <ul className="space-y-4 text-sm text-muted-foreground">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}