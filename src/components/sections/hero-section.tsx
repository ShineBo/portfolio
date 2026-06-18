import Image from "next/image"
import Link from "next/link"

import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <SectionContainer className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--muted)),transparent_35%)]" />

      <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[360px] w-[270px] overflow-hidden rounded-2xl border bg-muted shadow-md sm:h-[420px] sm:w-[315px]">
            <Image
              src="/images/profile.jpg"
              alt="Shine Bo Bo profile photo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}