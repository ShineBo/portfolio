import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ContactCtaSection() {
  return (
    <SectionContainer className="pt-6 sm:pt-8">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-background shadow-2xl shadow-primary/10 sm:px-12 sm:py-18 lg:px-16">
          <div className="absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-primary/45 blur-3xl" />
          <div className="absolute -bottom-36 -left-20 -z-10 size-80 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-background/60">Let&apos;s build something</p>
              <h2 className="text-4xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Have an idea worth exploring?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-background/65 sm:text-lg">
                I&apos;m open to internships, collaborations, academic projects, and conversations about software, AI, and digital engineering.
              </p>
            </div>

            <Button asChild size="lg" className="w-fit bg-background text-foreground shadow-none hover:bg-background/90">
              <Link href={`mailto:${siteConfig.email}`}>
                Start a conversation
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-background/15 pt-6 text-sm text-background/65">
            <Link href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-background">
              <Mail className="size-4" /> {siteConfig.email}
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-background">
              <Code2 className="size-4" /> GitHub
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-background">
              <BriefcaseBusiness className="size-4" /> LinkedIn
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
