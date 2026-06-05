import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm">
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
      </div>
    </header>
  )
}