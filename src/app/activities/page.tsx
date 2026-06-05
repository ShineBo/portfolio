import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Activities",
  description:
    "University activities, events, clubs, hobbies, volunteering, and personal development by Shine Bo Bo.",
}

export default function ActivitiesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Activities
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Activities
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Activities, events, clubs, university life, volunteering, hobbies, and
        personal development from my two universities.
      </p>
    </section>
  )
}