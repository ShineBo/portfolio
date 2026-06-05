import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/shared/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div className="max-w-4xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Computer Science Graduate · Digital Engineering Student
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-tight">
          Building software, systems, and creative technology.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Hi, I&apos;m Shine Bo Bo. I build web applications, technical projects,
          and digital engineering experiments that connect computer science,
          engineering, and real-world problem solving.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}