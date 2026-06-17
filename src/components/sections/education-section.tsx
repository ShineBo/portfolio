import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { education } from "@/data/education"

export function EducationSection() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="My academic journey combines Computer Science foundations with Digital Engineering practice."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <Card key={item.degree} className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge>{item.status}</Badge>
                {item.gpa ? <Badge variant="secondary">GPA {item.gpa}</Badge> : null}
              </div>

              <CardTitle className="text-xl">{item.degree}</CardTitle>

              <p className="text-sm text-muted-foreground">
                {item.school} · {item.period}
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