import { Reveal } from "@/components/motion/reveal"
import { SectionContainer } from "@/components/shared/section-container"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border/60">
      <div className="absolute top-0 right-0 -z-10 size-80 rounded-full bg-primary/8 blur-3xl" />
      <SectionContainer className="py-18 sm:py-24 lg:py-28">
        <Reveal className="max-w-4xl">
          <p className="eyebrow-line mb-6 text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
          <h1 className="text-4xl leading-[1.02] font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </SectionContainer>
    </div>
  )
}
