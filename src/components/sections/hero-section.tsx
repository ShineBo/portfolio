import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowRight, Code2, Sparkles } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { documentedProjectCount } from "@/data/projects"

const heroStats = [
  { value: `${documentedProjectCount}`, label: "Public projects documented" },
  { value: "2", label: "Engineering disciplines" },
  { value: "4.00", label: "Current GPA" },
]

export function HeroSection() {
  return (
    <SectionContainer className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute top-16 right-[8%] -z-10 size-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center xl:gap-20">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/6 px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="eyebrow-line mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Software · Systems · Engineering
            </p>
            <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.6rem)] leading-[0.95] font-bold tracking-[-0.065em]">
              I build digital ideas into{" "}
              <span className="text-primary">useful systems.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I&apos;m <strong className="font-semibold text-foreground">Shine Bo Bo</strong>,
              a Computer Science graduate and Digital Engineering student creating
              thoughtful web products, intelligent applications, and connected prototypes.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore my work
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Code2 />
                GitHub
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.24} className="mt-11 grid max-w-2xl grid-cols-3 gap-3 border-t border-border/70 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold tracking-tight sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[0.68rem] leading-4 text-muted-foreground sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-sm lg:mr-0">
          <div className="absolute -inset-5 -z-10 rotate-3 rounded-[2.5rem] border border-primary/15 bg-primary/6" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative mx-auto h-90 w-full overflow-hidden rounded-[1.45rem] bg-muted sm:h-105">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Shine Bo Bo"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/45 to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3 text-white">
                <div>
                  <p className="text-lg font-bold tracking-tight">Shine Bo Bo</p>
                  <p className="text-xs text-white/75">Developer & engineering student</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-white/15 backdrop-blur">
                  <Sparkles className="size-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="animate-float-slow glass-panel absolute -right-3 -bottom-6 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex lg:-right-7">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
              <ArrowDownRight className="size-4" />
            </span>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">Exploring digital engineering</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
