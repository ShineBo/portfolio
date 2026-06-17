import type { Metadata } from "next"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { education } from "@/data/education"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of Ming Zhu, including Computer Science and Digital Engineering studies.",
}

export default function EducationPage() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="My education combines Computer Science foundations with current Digital Engineering studies."
      />

      <div className="mt-12 space-y-6">
        {education.map((item) => (
          <Card
            key={item.degree}
            className="transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge>{item.status}</Badge>
                <Badge variant="outline">{item.period}</Badge>
                {item.gpa ? (
                  <Badge variant="secondary">GPA {item.gpa}</Badge>
                ) : null}
              </div>

              <CardTitle className="text-2xl">{item.degree}</CardTitle>

              <p className="text-sm text-muted-foreground">{item.school}</p>
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