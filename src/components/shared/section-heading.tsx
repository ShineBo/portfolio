type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}