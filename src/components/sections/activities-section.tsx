import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { activities } from "@/data/activities"

export function ActivitiesSection() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Activities"
        title="Activities and personal development"
        description="University activities, technical presentations, hobbies, and experiences that shape how I learn and grow."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {activities.map((item) => (
          <Card key={`${item.title}-${item.organization}`} className="h-full">
            <CardHeader>
              <div className="mb-3">
                <Badge variant="secondary">{item.category}</Badge>
              </div>

              <CardTitle className="text-xl">{item.title}</CardTitle>

              <p className="text-sm text-muted-foreground">
                {item.organization} · {item.period}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
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