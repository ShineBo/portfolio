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
    role: "Freelance Gaming PC Buyer, Builder & Reseller",
    organization: "Self-Employed / Family Business",
    type: "Freelance & Customer Experience",
    period: "Jan 2022 – Jul 2024",
    description:
      "Advised customers, sourced parts, assembled custom gaming PCs, and bought and resold computers and components while supporting day-to-day family-business operations.",
    highlights: [
      "Matched components to customer needs, budgets, and hardware-compatibility constraints",
      "Assembled systems and performed practical setup, diagnostics, and troubleshooting",
      "Handled sourcing, pricing, negotiation, customer communication, delivery, and basic after-sales support",
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
