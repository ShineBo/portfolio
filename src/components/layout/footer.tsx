import Link from "next/link"
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react"

import { siteConfig } from "@/config/site"

const links = [
  { label: "GitHub", href: siteConfig.links.github, icon: Code2 },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/35">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link href="/" className="focus-ring inline-flex rounded-lg text-2xl font-bold tracking-[-0.04em]">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Building useful digital experiences at the intersection of software,
              systems, and engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
              >
                <Icon className="size-4" />
                {label}
                <ArrowUpRight className="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Designed and built with care.</p>
          <p>Next.js · TypeScript · Vercel</p>
        </div>
      </div>
    </footer>
  )
}
