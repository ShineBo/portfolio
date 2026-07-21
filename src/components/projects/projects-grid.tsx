"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { ProjectCard } from "@/components/shared/project-card"
import type { Project, ProjectDomain } from "@/data/projects"
import { cn } from "@/lib/utils"

const focusFilters = [
  { id: "all", label: "All work" },
  { id: "web", label: "Web & APIs" },
  { id: "ai-data", label: "AI & data" },
  { id: "iot-embedded", label: "IoT & embedded" },
  { id: "desktop-game", label: "Desktop & games" },
] as const

const contextFilters = [
  { id: "all", label: "All contexts" },
  { id: "personal", label: "Personal" },
  { id: "coursework", label: "Academic work" },
  { id: "team", label: "Team projects" },
  { id: "contribution", label: "Contributions" },
  { id: "learning", label: "Learning exercises" },
] as const

type FocusFilter = (typeof focusFilters)[number]["id"]
type ContextFilter = (typeof contextFilters)[number]["id"]

const webDomains: ProjectDomain[] = ["frontend", "full-stack", "backend-data"]

function matchesFocus(project: Project, filter: FocusFilter) {
  if (filter === "all") return true
  if (filter === "web") return project.domains.some((domain) => webDomains.includes(domain))
  return project.domains.includes(filter)
}

function matchesContext(project: Project, filter: ContextFilter) {
  if (filter === "all") return true
  if (filter === "personal") return project.context === "personal"
  if (filter === "coursework") {
    return project.context === "coursework" || project.context === "research"
  }
  if (filter === "team") return project.relationship === "team-project"
  if (filter === "contribution") return project.relationship === "external-contributor"
  return project.context === "learning-exercise"
}

type FilterBarProps<T extends string> = {
  label: string
  filters: readonly { id: T; label: string }[]
  activeFilter: T
  onChange: (filter: T) => void
}

function FilterBar<T extends string>({
  label,
  filters,
  activeFilter,
  onChange,
}: FilterBarProps<T>) {
  return (
    <div
      role="group"
      aria-label={`${label} filters`}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <span className="w-16 shrink-0 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={activeFilter === filter.id}
            onClick={() => onChange(filter.id)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
              activeFilter === filter.id
                ? "border-foreground bg-foreground text-background"
                : "border-border/80 bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [focusFilter, setFocusFilter] = useState<FocusFilter>("all")
  const [contextFilter, setContextFilter] = useState<ContextFilter>("all")
  const reduceMotion = useReducedMotion()
  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          matchesFocus(project, focusFilter) && matchesContext(project, contextFilter)
      ),
    [contextFilter, focusFilter, projects]
  )

  return (
    <>
      <div className="space-y-3 rounded-3xl border border-border/70 bg-card/45 p-4 sm:p-5">
        <FilterBar
          label="Focus"
          filters={focusFilters}
          activeFilter={focusFilter}
          onChange={setFocusFilter}
        />
        <FilterBar
          label="Context"
          filters={contextFilters}
          activeFilter={contextFilter}
          onChange={setContextFilter}
        />
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleProjects.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="font-semibold">No case studies match both filters.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a broader focus or context to see more work.
          </p>
        </div>
      ) : null}

      <p className="mt-8 font-mono text-xs text-muted-foreground" aria-live="polite">
        Showing {visibleProjects.length} of {projects.length} detailed case studies
      </p>
    </>
  )
}
