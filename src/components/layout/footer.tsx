import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}