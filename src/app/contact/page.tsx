import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, BriefcaseBusiness, Code2, FileText, Files, Mail, MessageSquareText } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shine Bo Bo about software, full-stack, backend, Digital Engineering, and technology internship or junior opportunities.",
}

const contactMethods = [
  {
    title: "Email",
    description: "The best place for opportunities, project details, or a thoughtful introduction.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: Mail,
  },
  {
    title: "GitHub",
    description: "Browse repositories, source code, experiments, and ongoing development work.",
    href: siteConfig.links.github,
    label: "View GitHub profile",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally and follow my academic and career journey.",
    href: siteConfig.links.linkedin,
    label: "Connect on LinkedIn",
    icon: BriefcaseBusiness,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Ready to learn fast—and contribute thoughtfully."
        description="I am open to software development, full-stack, backend, Digital Engineering, and practical technology internships or junior opportunities. I also welcome thoughtful collaborations."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail />
              Email me
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={siteConfig.documents.resume.href} target="_blank" rel="noopener noreferrer">
              <FileText />
              View resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={siteConfig.documents.cv.href} target="_blank" rel="noopener noreferrer">
              <Files />
              View CV
            </a>
          </Button>
        </div>
      </PageHero>

      <SectionContainer>
        <div className="grid gap-5 md:grid-cols-2">
          {contactMethods.map(({ title, description, href, label, icon: Icon }, index) => (
            <Reveal key={title} delay={(index % 2) * 0.06} className="h-full">
              <Link
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                className="focus-ring group interactive-card glass-panel flex h-full flex-col rounded-3xl p-7 transition-all duration-500 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <h2 className="mt-8 text-2xl font-bold tracking-[-0.04em]">{title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
                <p className="mt-7 border-t border-border/60 pt-5 text-sm font-semibold text-primary break-all">{label}</p>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.06} className="h-full">
            <article className="glass-panel flex h-full flex-col rounded-3xl p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Files className="size-5" />
                </span>
                <span className="rounded-full border border-border/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Two formats
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-bold tracking-[-0.04em]">Application documents</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Choose the concise one-page resume for quick applications or the detailed CV for a fuller record of my work and activities.
              </p>
              <div className="mt-7 grid gap-3 border-t border-border/60 pt-5 sm:grid-cols-2">
                {Object.values(siteConfig.documents).map((document, index) => {
                  const Icon = index === 0 ? FileText : Files

                  return (
                    <a
                      key={document.href}
                      href={document.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm font-semibold transition-all hover:border-primary/30 hover:text-primary"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="size-4" />
                        {document.shortLabel}
                      </span>
                      <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )
                })}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-8 rounded-3xl bg-secondary/70 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <span className="grid size-12 place-items-center rounded-2xl bg-background text-primary shadow-sm">
            <MessageSquareText className="size-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight">A helpful first message</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              Tell me what you are working on, where I might contribute, and any timeline or context that matters. A clear note helps me understand the opportunity and respond thoughtfully.
            </p>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  )
}
