"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { ProjectCard } from "@/components/shared/project-card"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const filters = ["All", "Featured", "Web", "AI & Data", "Engineering"] as const
type Filter = (typeof filters)[number]

function belongsTo(project: Project, filter: Filter) {
  if (filter === "All") return true
  if (filter === "Featured") return project.featured
  if (filter === "AI & Data") return project.category.includes("AI") || project.techStack.includes("Python")
  if (filter === "Engineering") return project.category.includes("IoT") || project.techStack.includes("Java") || project.techStack.includes("C++")
  return !project.category.includes("AI") && !project.category.includes("IoT") && !project.techStack.includes("Java") && !project.techStack.includes("C++")
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")
  const reduceMotion = useReducedMotion()
  const visibleProjects = useMemo(
    () => projects.filter((project) => belongsTo(project, activeFilter)),
    [activeFilter, projects]
  )

  return (
    <>
      <div className="flex flex-wrap gap-2" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
              activeFilter === filter
                ? "border-foreground bg-foreground text-background"
                : "border-border/80 bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
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

      <p className="mt-8 font-mono text-xs text-muted-foreground" aria-live="polite">
        Showing {visibleProjects.length} of {projects.length} projects
      </p>
    </>
  )
}
