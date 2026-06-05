import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Contact
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Contact me
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Want to connect, collaborate, or ask about my work? Feel free to reach
        out by email.
      </p>

      <Link
        href={`mailto:${siteConfig.email}`}
        className="mt-8 inline-flex text-sm font-medium underline underline-offset-4"
      >
        {siteConfig.email}
      </Link>
    </section>
  )
}