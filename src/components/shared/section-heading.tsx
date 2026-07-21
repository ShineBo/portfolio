import { Reveal } from "@/components/motion/reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="eyebrow-line mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
