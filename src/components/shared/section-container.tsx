import { cn } from "@/lib/utils"

type SectionContainerProps = React.ComponentProps<"section">

export function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn("mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28", className)}
      {...props}
    >
      {children}
    </section>
  )
}
