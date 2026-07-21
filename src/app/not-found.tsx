import Link from "next/link"
import { ArrowLeft, SearchX } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[70svh] max-w-3xl place-items-center px-5 py-20 text-center sm:px-8">
      <div>
        <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-primary/10 text-primary">
          <SearchX className="size-7" />
        </span>
        <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">404 · Not found</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">This page has moved—or never existed.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">The link may be outdated. Head back to the project archive and continue exploring from there.</p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/projects">
            <ArrowLeft /> Back to projects
          </Link>
        </Button>
      </div>
    </div>
  )
}
