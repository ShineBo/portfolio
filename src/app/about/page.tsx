import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Braces, Compass, Target, Users } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shine Bo Bo, a Computer Science graduate and third-year Digital Engineering student with software, hardware, international, and leadership experience.",
}

const profileCards = [
  {
    title: "Software with human context",
    description: "Computer Science taught me how software works; a liberal-arts education taught me to consider the people, ethics, and society around it.",
    icon: Braces,
  },
  {
    title: "Engineering & hardware perspective",
    description: "Digital Engineering, networking, IoT, and hands-on PC building help me connect code with the systems and hardware underneath it.",
    icon: Compass,
  },
  {
    title: "Leadership across cultures",
    description: "Student-club leadership and international programs in Thailand, Japan, and Singapore have strengthened how I listen and collaborate.",
    icon: Users,
  },
]

const focusAreas = [
  "Crafting accessible, responsive products with React, Next.js, and TypeScript",
  "Building full-stack systems with clear APIs, sensible data models, and maintainable code",
  "Deepening networks, cybersecurity, cryptography, IoT, and connected-system foundations",
  "Applying practical PC-hardware knowledge to troubleshooting and real user needs",
  "Communicating technical work through documentation, presentations, and cross-cultural teamwork",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="A software builder shaped by systems, people, and practice."
        description="I bring together Computer Science, Digital Engineering, liberal-arts perspective, hands-on PC hardware, and international student leadership—and I am ready to grow inside a real product or engineering team."
      />

      <SectionContainer>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-4 -z-10 -rotate-3 rounded-[2.25rem] border border-primary/15 bg-primary/6" />
            <div className="glass-panel relative h-90 w-67.5 overflow-hidden rounded-[2rem] p-2 sm:h-105 sm:w-78.75">
              <div className="relative h-full w-full overflow-hidden rounded-[1.45rem]">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Shine Bo Bo"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, 315px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="My story"
              title="I like understanding how the pieces—and people—connect."
              description="I graduated in Computer Science from the Myanmar Institute of Theology’s Liberal Arts Program and now study Digital Engineering at Prince of Songkla University, Phuket Campus. That path lets me think about both the interface someone touches and the code, data, network, or hardware working underneath it."
            />
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                I learn by building and by taking responsibility. Software projects have taught me to debug and iterate; freelance PC work taught me to listen to customer needs; research taught me to evaluate evidence; and leadership and international workshops taught me to work across cultures. I am early in my career, honest about what I am still learning, and serious about doing useful work well.
              </p>
              <Button asChild className="mt-8">
                <Link href="/projects">
                  See what I&apos;ve built
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {profileCards.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06} className="h-full">
              <article className="interactive-card glass-panel h-full rounded-3xl p-7 transition-all duration-500">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-8 text-xl font-bold tracking-[-0.03em]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="Current focus"
            title="Growing toward real product responsibility."
            description="These are the areas I am deliberately strengthening through coursework, projects, customer experience, leadership, and collaboration."
          />

          <Reveal>
            <div className="divide-y divide-border/70 border-y border-border/70">
              {focusAreas.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4 py-5 sm:gap-6 sm:py-6">
                  <span className="font-mono text-xs font-semibold text-primary">0{index + 1}</span>
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-secondary/75 p-4 text-sm text-secondary-foreground">
              <Target className="size-5 shrink-0 text-primary" />
              <p><strong>Next goal:</strong> contribute to a team where I can ship real work, support users, and keep learning from experienced engineers.</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  )
}
