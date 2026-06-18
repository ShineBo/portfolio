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
    role: "Logistics and Delegates Servicing Team Member",
    organization: "AIESEC in Myanmar",
    type: "Volunteer / Event Experience",
    period: "Feb 2022 – Jan 2023",
    description:
      "Supported the planning and execution of youth-led events aligned with the United Nations Sustainable Development Goals, with responsibilities in logistics, delegate servicing, and event coordination.",
    highlights: [
      "Supported youth-led event planning and execution aligned with the UN Sustainable Development Goals",
      "Managed event logistics and delegate servicing to help create smooth participant experiences",
      "Collaborated with cross-functional teams and handled on-site challenges effectively",
    ],
  },
  {
    role: "Family Business Assistant / Freelance PC & Camera Reseller",
    organization: "Family Business / Self-Employed",
    type: "Work Experience",
    period: "Jan 2022 – Jul 2024",
    description:
      "Assisted with daily business operations while also buying, selling, building, and reselling custom PCs, computer components, and camera equipment.",
    highlights: [
      "Handled customer service, deliveries, buying and selling activities, cash handling, and daily business support",
      "Managed basic expense tracking, order coordination, customer communication, and price negotiation",
      "Built and resold custom PCs, computer components, and camera equipment while providing basic after-sales support",
    ],
  },
  {
    role: "Research Intern - Flower Classification Project",
    organization: "University Internship Program",
    type: "Research Internship",
    period: "Jan 2025 – July 2025",
    description:
      "Conducted a supervised AI and machine learning research project on flower classification, covering the full workflow from data preparation to model training, evaluation, and result analysis.",
    highlights: [
      "Prepared and organized image data for a flower classification machine learning project",
      "Trained and evaluated AI/ML models under academic supervision",
      "Analyzed results and documented the project process as part of a university internship program",
    ],
  },
  {
    role: "Software Project Developer",
    organization: "Academic and Group Projects",
    type: "Project Experience",
    period: "Ongoing",
    description:
      "Built and contributed to multiple software, web development, AI, backend, database, and Digital Engineering projects through university coursework, group work, and personal learning.",
    highlights: [
      "Developed full-stack, frontend, backend, PHP, Java, AI/ML, and IoT-related projects using modern tools and frameworks",
      "Worked on group projects such as movie recommendation, backend systems, POS/inventory systems, and research-based AI projects",
      "Practiced technical planning, GitHub collaboration, debugging, documentation, presentation, and project-based problem solving",
    ],
  },
]