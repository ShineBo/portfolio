import type { Metadata } from "next"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { activities } from "@/data/activities"

export const metadata: Metadata = {
  title: "Activities",
  description:
    "University activities, events, clubs, hobbies, volunteering, and personal development by Ming Zhu.",
}

export default function ActivitiesPage() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Activities"
        title="Activities and personal development"
        description="A detailed view of my university activities, technical presentations, hobbies, and personal growth experiences."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {activities.map((item) => (
          <Card
            key={`${item.title}-${item.organization}`}
            className="h-full transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="secondary">{item.category}</Badge>
                <Badge variant="outline">{item.period}</Badge>
              </div>

              <CardTitle className="text-xl">{item.title}</CardTitle>

              <p className="text-sm text-muted-foreground">
                {item.organization}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
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