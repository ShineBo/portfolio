import { cn } from "@/lib/utils"

type SectionContainerProps = {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-6 py-20 sm:py-24", className)}>
      {children}
    </section>
  )
}