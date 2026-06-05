import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, academic experience, leadership roles, and technical responsibilities of Shine Bo Bo.",
}

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Experience
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Experience
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        My work experience, academic experience, leadership roles, and technical
        responsibilities.
      </p>
    </section>
  )
}