import type { Metadata } from "next"
import Link from "next/link"
import { Mail, FileText } from "lucide-react"

import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ming Zhu for collaboration, projects, opportunities, or questions.",
}

const contactMethods = [
  {
    title: "Email",
    description: "Reach out for collaboration, opportunities, or questions.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
  },
  {
    title: "GitHub",
    description: "View my repositories, source code, and development work.",
    href: siteConfig.links.github,
    label: "GitHub profile",
  },
  {
    title: "Resume",
    description: "View or download my resume as a PDF file.",
    href: "/resume.pdf",
    label: "View resume",
  },
]

export default function ContactPage() {
  return (
    <>
      <SectionContainer>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect."
          description="I am open to internship opportunities, collaborations, academic projects, and conversations about software development, web technology, and Digital Engineering."
        />

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Link>
          </Button>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className="h-full transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl">{method.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {method.description}
                </p>

                <Link
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  className="mt-5 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  {method.label}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}