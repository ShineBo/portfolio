import { BrainCircuit, Code2, Cpu, Database, Layers3 } from "lucide-react"

import { projectContextLabels, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const palettes = [
  "from-blue-500/25 via-cyan-400/10 to-transparent text-blue-600 dark:text-blue-300",
  "from-violet-500/25 via-fuchsia-400/10 to-transparent text-violet-600 dark:text-violet-300",
  "from-emerald-500/25 via-teal-400/10 to-transparent text-emerald-600 dark:text-emerald-300",
  "from-amber-500/25 via-orange-400/10 to-transparent text-amber-700 dark:text-amber-300",
]

function ProjectIcon({ project }: { project: Project }) {
  if (project.domains.includes("ai-data")) return <BrainCircuit className="size-5" />
  if (project.domains.includes("iot-embedded")) return <Cpu className="size-5" />
  if (project.domains.includes("backend-data")) return <Database className="size-5" />
  if (project.domains.includes("full-stack")) return <Layers3 className="size-5" />
  return <Code2 className="size-5" />
}

type ProjectVisualProps = {
  project: Project
  className?: string
  label?: boolean
}

export function ProjectVisual({ project, className, label = true }: ProjectVisualProps) {
  const palette = palettes[project.slug.length % palettes.length]

  return (
    <div
      className={cn(
        "relative isolate min-h-48 overflow-hidden border-b border-border/60 bg-gradient-to-br",
        palette,
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom_right,black,transparent_80%)]" />
      <div className="absolute -right-10 -bottom-14 size-48 rounded-full border border-current/15" />
      <div className="absolute -right-3 -bottom-20 size-48 rounded-full border border-current/10" />

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="rounded-2xl border border-current/15 bg-background/65 p-3 shadow-sm backdrop-blur">
            <ProjectIcon project={project} />
          </span>
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] opacity-60">
            {project.techStack[0]}
          </span>
        </div>

        {label ? (
          <p className="max-w-[14rem] text-sm font-semibold tracking-tight text-foreground/75">
            {projectContextLabels[project.context]} · {project.year}
          </p>
        ) : null}
      </div>
    </div>
  )
}
