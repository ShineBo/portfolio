export type Project = {
  title: string
  slug: string
  description: string
  category: string
  techStack: string[]
  href: string
  github?: string
  liveDemo?: string
  featured: boolean
  overview: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio website built to showcase my projects, skills, education, activities, and experiences as a Computer Science graduate and Digital Engineering student.",
    category: "Web Development",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    href: "/projects/portfolio-website",
    github: "https://github.com/YOUR_USERNAME/portfolio",
    liveDemo: "https://ming-zhu.vercel.app",
    featured: true,
    overview:
      "This portfolio website is designed as a central place to present my technical projects, academic background, activities, skills, and personal development. It is built with a modern frontend stack and structured so it can grow into a project archive and personal knowledge base.",
    highlights: [
      "Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui",
      "Designed with reusable sections and clean data-driven content",
      "Prepared for future project case studies, blog posts, and deployment",
    ],
  },
  {
    title: "University Project Example",
    slug: "university-project-example",
    description:
      "A placeholder for one of my academic or technical university projects. This will later be replaced with a real project case study.",
    category: "University Project",
    techStack: ["React", "Node.js", "Database"],
    href: "/projects/university-project-example",
    featured: true,
    overview:
      "This is a placeholder project page for a future university project case study. It will later include the problem, my role, technologies used, screenshots, and what I learned.",
    highlights: [
      "Showcase academic project work",
      "Explain technical decisions and implementation process",
      "Add screenshots, GitHub links, and final outcomes later",
    ],
  },
  {
    title: "Digital Engineering Experiment",
    slug: "digital-engineering-experiment",
    description:
      "A placeholder for a Digital Engineering related project, experiment, system, prototype, or technical activity.",
    category: "Digital Engineering",
    techStack: ["IoT", "Engineering", "Systems"],
    href: "/projects/digital-engineering-experiment",
    featured: true,
    overview:
      "This is a placeholder for a Digital Engineering experiment or prototype. It will later describe how software, systems thinking, and engineering design were used to solve or explore a real-world problem.",
    highlights: [
      "Connect software with engineering systems",
      "Document prototype ideas and design decisions",
      "Show learning progress in Digital Engineering",
    ],
  },
]