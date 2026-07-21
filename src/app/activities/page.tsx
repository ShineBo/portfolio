import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe2,
  HeartHandshake,
  MapPin,
  Mic2,
  Palette,
  Sparkles,
  Users,
} from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { SectionContainer } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { activities, activityStats, type Activity } from "@/data/activities"

export const metadata: Metadata = {
  title: "Activities & Leadership",
  description:
    "International programs, student leadership, workshops, speaking, creative advocacy, and volunteering by Shine Bo Bo.",
}

const activityIcons: Record<string, typeof Globe2> = {
  "International Program": Globe2,
  "Student Leadership": Users,
  "Global Project-Based Learning": Sparkles,
  "International Workshop": BarChart3,
  "Creative Advocacy": Palette,
  "Public Speaking": Mic2,
  "Community Service": HeartHandshake,
}

function ActivityCard({ item, index }: { item: Activity; index: number }) {
  const Icon = activityIcons[item.category] ?? Sparkles

  return (
    <Reveal delay={(index % 2) * 0.05} className="h-full">
      <article className="interactive-card glass-panel group flex h-full flex-col rounded-3xl p-7 transition-all duration-500 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="size-5" />
          </span>
          <Badge variant="outline">{item.period}</Badge>
        </div>

        <p className="mt-7 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary">{item.category}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{item.title}</h2>
        <p className="mt-2 text-sm font-medium text-foreground/80">{item.organization}</p>
        {item.location ? (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            {item.location}
          </p>
        ) : null}

        <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.description}</p>
        <ul className="mt-6 space-y-3 border-t border-border/60 pt-5">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {item.sources?.length ? (
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6">
            {item.sources.map((source) => (
              <Link
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1 rounded-full text-xs font-semibold text-primary transition-colors hover:text-foreground"
              >
                {source.label}
                <ArrowUpRight className="size-3" />
              </Link>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  )
}

export default function ActivitiesPage() {
  const featuredActivities = activities.filter((item) => item.featured)
  const communityActivities = activities.filter((item) => !item.featured)

  return (
    <>
      <PageHero
        eyebrow="Activities & leadership"
        title="Learning across borders, leading where I am."
        description="International programs, student leadership, public speaking, creative advocacy, and community work have shaped how I collaborate—and how I show up for people beyond a technical brief."
      >
        <div className="grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-border/70 bg-card/55 backdrop-blur">
          {activityStats.map((stat) => (
            <div key={stat.label} className="border-r border-border/70 px-3 py-4 text-center last:border-r-0 sm:px-6">
              <p className="text-xl font-bold tracking-tight text-primary sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[0.62rem] leading-4 text-muted-foreground sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <SectionContainer>
        <SectionHeading
          eyebrow="Key highlights"
          title="Selected for the room. Ready to contribute."
          description="These experiences put me in multicultural teams where listening, initiative, and clear communication matter as much as the final presentation."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredActivities.map((item, index) => (
            <ActivityCard key={`${item.title}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="border-t border-border/50">
        <SectionHeading
          eyebrow="Community & creative work"
          title="Contribution takes more than one form."
          description="Speaking, editing, performing, and volunteering have helped me practise empathy and communication in settings that code alone cannot create."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {communityActivities.map((item, index) => (
            <ActivityCard key={`${item.title}-${item.period}`} item={item} index={index} />
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-primary/20 bg-primary/6 p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div>
            <p className="text-lg font-bold tracking-tight">230 recorded activity hours</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              That is more than twice Prince of Songkla University’s 100-hour undergraduate graduation requirement—and it does not include every informal community contribution.
            </p>
          </div>
          <Link
            href="https://www.psu.ac.th/phuket/en/home-2/iac/student-life/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-5 inline-flex shrink-0 items-center gap-1.5 rounded-full text-sm font-semibold text-primary hover:text-foreground sm:mt-0"
          >
            PSU activity requirements
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </SectionContainer>
    </>
  )
}
