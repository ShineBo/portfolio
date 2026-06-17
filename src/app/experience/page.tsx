import type { Metadata } from "next"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/data/experience"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, academic experience, leadership roles, and technical responsibilities of Ming Zhu.",
}

export default function ExperiencePage() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Experience"
        title="Experience and responsibilities"
        description="A detailed view of my work experience, academic experience, project responsibilities, and technical growth."
      />

      <div className="mt-12 space-y-6">
        {experiences.map((item) => (
          <Card
            key={`${item.role}-${item.organization}`}
            className="transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="secondary">{item.type}</Badge>
                <Badge variant="outline">{item.period}</Badge>
              </div>

              <CardTitle className="text-2xl">{item.role}</CardTitle>

              <p className="text-sm text-muted-foreground">
                {item.organization}
              </p>
            </CardHeader>

            <CardContent>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}