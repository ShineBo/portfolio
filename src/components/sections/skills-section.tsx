import Link from "next/link"
import { ArrowUpRight, BrainCircuit, Code2, Cpu, Layers3 } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"

const capabilities = [
  {
    number: "01",
    title: "Web interface practice",
    description: "Used component-based UI, responsive layouts, and TypeScript across personal, coursework, and team builds.",
    tools: "React · Next.js · TypeScript",
    icon: Code2,
  },
  {
    number: "02",
    title: "APIs & data",
    description: "Practised connecting interfaces, APIs, authentication, and databases in full-stack and backend projects.",
    tools: "Node.js · NestJS · SQL",
    icon: Layers3,
  },
  {
    number: "03",
    title: "AI & data exploration",
    description: "Worked through data preparation, model training, evaluation, and small demos in academic projects.",
    tools: "Python · TensorFlow · Streamlit",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Connected engineering practice",
    description: "Used C++ and simulation tools to explore early IoT and systems-integration concepts.",
    tools: "C++ · IoT · PlatformIO",
    icon: Cpu,
  },
]

export function SkillsSection() {
  return (
    <SectionContainer className="border-t border-border/50">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Skills in practice"
            title="A project-backed toolkit, still growing."
            description="I learn best by building. These tools come from student projects, personal experiments, and collaborative work—not a claim of professional fluency."
          />
          <Reveal delay={0.08}>
            <Link
              href="/skills"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              See skills and evidence
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="divide-y divide-border/70 border-y border-border/70">
          {capabilities.map(({ number, title, description, tools, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.05}>
              <div className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5">
                <span className="font-mono text-xs font-semibold text-primary">{number}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
                  <p className="mt-3 font-mono text-[0.68rem] text-muted-foreground">{tools}</p>
                </div>
                <span className="hidden size-11 place-items-center rounded-2xl border border-border/70 bg-card text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary sm:grid">
                  <Icon className="size-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
