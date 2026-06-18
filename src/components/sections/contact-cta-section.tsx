import Link from "next/link"
import { Mail } from "lucide-react"

import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ContactCtaSection() {
  return (
    <SectionContainer>
      <div className="rounded-2xl border bg-muted/40 px-6 py-12 text-center sm:px-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>

        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Interested in working together or learning more about my projects?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          I am open to internship opportunities, collaborations, academic
          projects, and conversations related to software development, web
          technology, and Digital Engineering.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank">
              View Resume
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.links.github} target="_blank">
              GitHub
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.links.linkedin} target="_blank">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}