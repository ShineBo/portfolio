type SectionContainerProps = {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-24 ${className}`}>
      {children}
    </section>
  )
}