export type Activity = {
  title: string
  organization: string
  category: string
  period: string
  description: string
  highlights: string[]
}

export const activities: Activity[] = [
  {
    title: "University Activities",
    organization: "Two Universities",
    category: "Academic Life",
    period: "Ongoing",
    description:
      "Participated in academic activities, presentations, group projects, and university-based learning experiences across Computer Science and Digital Engineering.",
    highlights: [
      "Worked on group presentations and academic projects",
      "Practiced teamwork, planning, and communication",
      "Connected technical learning with real-world topics",
    ],
  },
  {
    title: "Technical Presentations",
    organization: "University Coursework",
    category: "Presentation",
    period: "Ongoing",
    description:
      "Prepared and delivered technical presentations related to computing, security, engineering, sustainability, and project-based learning.",
    highlights: [
      "Explained technical topics clearly to classmates",
      "Created structured slides and presentation scripts",
      "Improved public speaking and technical communication",
    ],
  },
  {
    title: "Personal Interests & Hobbies",
    organization: "Personal Development",
    category: "Hobbies",
    period: "Personal",
    description:
      "Exploring hobbies and interests that support creativity, communication, self-expression, and personal growth.",
    highlights: [
      "Interested in technology, design, and creative projects",
      "Enjoys learning through personal experiments",
      "Values continuous improvement and self-development",
    ],
  },
]