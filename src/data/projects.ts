export type Project = {
  title: string
  description: string
  category: string
  techStack: string[]
  href: string
  github?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase my projects, skills, education, activities, and experiences as a Computer Science graduate and Digital Engineering student.",
    category: "Web Development",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    href: "/projects/portfolio-website",
    github: "https://github.com/YOUR_USERNAME/portfolio",
    featured: true,
  },
  {
    title: "University Project Example",
    description:
      "A placeholder for one of my academic or technical university projects. This will later be replaced with a real project case study.",
    category: "University Project",
    techStack: ["React", "Node.js", "Database"],
    href: "/projects/university-project-example",
    featured: true,
  },
  {
    title: "Digital Engineering Experiment",
    description:
      "A placeholder for a Digital Engineering related project, experiment, system, prototype, or technical activity.",
    category: "Digital Engineering",
    techStack: ["IoT", "Engineering", "Systems"],
    href: "/projects/digital-engineering-experiment",
    featured: true,
  },
]