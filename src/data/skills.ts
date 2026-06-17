export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and modern user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    description: "Creating APIs, server-side logic, and application backends.",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    description: "Working with structured and flexible data storage.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Workflow",
    description: "Using development tools for coding, version control, and deployment.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Linux"],
  },
  {
    title: "Digital Engineering",
    description: "Connecting software with engineering, systems, and real-world applications.",
    skills: ["IoT", "Systems Thinking", "Prototyping", "Engineering Design"],
  },
  {
    title: "Currently Learning",
    description: "Areas I am actively improving through university and personal projects.",
    skills: ["Cloud", "Cybersecurity", "AI Tools", "Data Systems"],
  },
]