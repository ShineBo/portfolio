import type { Metadata } from "next"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories } from "@/data/skills"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and tools of Ming Zhu across web development, software engineering, and Digital Engineering.",
}

export default function SkillsPage() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Skills"
        title="Technical skills and tools"
        description="A detailed view of the technologies, tools, and engineering skills I use or am currently learning."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="h-full transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}