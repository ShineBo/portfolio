"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, ChevronDown, FileText, Files, Menu, X } from "lucide-react"

import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Activities", href: "/activities" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" onClick={() => setMenuOpen(false)} className="focus-ring group flex shrink-0 items-center gap-3 rounded-full">
          <span className="grid size-9 place-items-center rounded-full bg-foreground text-xs font-bold tracking-tight text-background transition-transform duration-300 group-hover:rotate-6">
            SB
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center rounded-full border border-border/70 bg-card/70 p-1 shadow-sm backdrop-blur lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href === "/projects" && pathname.startsWith("/projects/"))

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.78rem] font-medium transition-all",
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="hidden sm:inline-flex" aria-label="Choose resume or CV">
                Resume / CV
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-2">
              {Object.values(siteConfig.documents).map((document, index) => {
                const Icon = index === 0 ? FileText : Files

                return (
                  <DropdownMenuItem key={document.href} asChild className="p-0">
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-start gap-3 rounded-md px-3 py-3"
                    >
                      <Icon className="mt-0.5 size-4 text-primary" />
                      <span className="min-w-0">
                        <span className="block font-semibold">{document.label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                          {document.description}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-0.5 ml-auto size-3.5 text-muted-foreground" />
                    </a>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-18 z-40 h-[calc(100dvh-4.5rem)] border-t border-border/60 bg-background/96 px-5 py-6 backdrop-blur-xl transition-all duration-300 lg:hidden",
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-lg flex-col" aria-label="Mobile navigation">
          {navItems.map((item, index) => {
            const active = pathname === item.href || (item.href === "/projects" && pathname.startsWith("/projects/"))

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-border/70 py-4 text-2xl font-semibold tracking-tight transition-colors",
                  active ? "text-primary" : "text-foreground hover:text-primary"
                )}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {item.label}
                <ArrowUpRight className="size-5" />
              </Link>
            )
          })}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg" className="w-full">
              <a
                href={siteConfig.documents.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <FileText />
                Open resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <a
                href={siteConfig.documents.cv.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <Files />
                Open full CV
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
