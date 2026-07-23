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
    role: "President",
    organization: "PSU Phuket International Student Club",
    type: "Student Leadership",
    period: "Current",
    description:
      "Lead an intercultural student community at Prince of Songkla University, helping international students connect, participate, and feel represented in campus life.",
    highlights: [
      "Coordinate club activities with students and university stakeholders",
      "Represent international-student perspectives and encourage inclusive participation",
      "Build cross-cultural communication, planning, and team-leadership experience",
    ],
  },
  {
    role: "Research Intern — Flower Classification",
    organization: "Myanmar Institute of Theology · Liberal Arts Program",
    type: "Academic Research Internship",
    period: "Jan – Jul 2025",
    description:
      "Completed a supervised machine-learning project covering image-data preparation, transfer-learning model development, evaluation, documentation, and a small interface for testing predictions.",
    highlights: [
      "Prepared and organized image data across five flower categories",
      "Trained and evaluated a MobileNetV2 transfer-learning workflow",
      "Documented results and built a Streamlit interface for prediction testing",
    ],
  },
  {
    role: "Family Business Assistant | Freelance PC Builder & PC/Camera Reseller",
    organization: "Family business support and self-employed work",
    type: "Operations, Freelance & Customer Experience",
    period: "Jan 2022 – Jul 2024",
    description:
      "Combined two concurrent responsibilities: supporting daily family-business operations and independently buying, building, and reselling PCs alongside cameras and lenses.",
    highlights: [
      "Assisted with customer service, buying and selling, deliveries, cash handling, expense tracking, order coordination, and price negotiation",
      "Independently sourced and resold PCs, components, cameras, and lenses while assessing customer needs, budgets, product condition, and compatibility where applicable",
      "Built custom PCs, performed setup, diagnostics, and troubleshooting, and managed delivery and basic after-sales support",
    ],
  },
  {
    role: "Logistics & Delegate Servicing Team Member",
    organization: "AIESEC in Myanmar",
    type: "Volunteer Experience",
    period: "Feb 2022 – Jan 2023",
    description:
      "Supported youth-led events connected to the UN Sustainable Development Goals through logistics, delegate servicing, coordination, and on-site problem-solving.",
    highlights: [
      "Helped plan and deliver participant-facing event operations",
      "Supported delegates before and during activities to create smoother experiences",
      "Collaborated across functions and adapted when on-site needs changed",
    ],
  },
]
