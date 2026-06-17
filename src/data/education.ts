export type Education = {
  degree: string
  school: string
  status: string
  period: string
  gpa?: string
  description: string
  highlights: string[]
}

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Your Graduated University Name",
    status: "Graduated",
    period: "Your start year – Your graduation year",
    gpa: "3.74",
    description:
      "Completed a Computer Science degree with a foundation in programming, software development, databases, algorithms, and computer systems.",
    highlights: [
      "Software development and web application projects",
      "Database and backend development fundamentals",
      "Computer science theory and problem-solving",
    ],
  },
  {
    degree: "B.Eng. in Digital Engineering",
    school: "Your Current University Name",
    status: "Currently studying",
    period: "Your start year – Present",
    gpa: "4.00",
    description:
      "Currently studying Digital Engineering with a focus on connecting software, systems, engineering design, and real-world digital transformation.",
    highlights: [
      "Digital systems and engineering design",
      "Software and technology integration",
      "Project-based learning and technical collaboration",
    ],
  },
]