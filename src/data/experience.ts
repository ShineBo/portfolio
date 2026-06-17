export type Experience = {
  role: string
  organization: string
  type: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: "Family Business Assistant",
    organization: "Family Business",
    type: "Work Experience",
    period: "Jan 2022 – Jul 2024",
    description:
      "Supported daily business operations, customer service, coordination, and problem-solving in a real working environment.",
    highlights: [
      "Assisted with daily operations and customer communication",
      "Handled responsibilities requiring reliability and attention to detail",
      "Developed communication, teamwork, and problem-solving skills",
    ],
  },
  {
    role: "Computer Science Graduate",
    organization: "University Projects",
    type: "Academic Experience",
    period: "Completed",
    description:
      "Built academic projects and developed technical foundations in programming, databases, web development, and software systems.",
    highlights: [
      "Worked on software development and web-based projects",
      "Applied database, backend, and frontend development concepts",
      "Practiced technical documentation and project presentation",
    ],
  },
  {
    role: "Digital Engineering Student",
    organization: "Current University",
    type: "Academic Experience",
    period: "Present",
    description:
      "Currently developing skills in digital systems, engineering design, project-based learning, and technology integration.",
    highlights: [
      "Participating in project-based engineering and technology coursework",
      "Learning to connect software with real-world engineering systems",
      "Developing teamwork, presentation, and technical communication skills",
    ],
  },
]