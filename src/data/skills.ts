export type SkillEvidence =
  | "repeated-project-use"
  | "practical-experience"
  | "project-exposure"
  | "coursework-exposure"
  | "learning-now"

export type TechnicalSkill = {
  name: string
  evidence: Exclude<SkillEvidence, "learning-now">
}

export type SkillCategory = {
  title: string
  description: string
  skills: TechnicalSkill[]
  projectExamples: { label: string; slug: string }[]
  evidenceNote?: string
}

export type SoftSkill = {
  title: string
  evidence: string
}

export type LearningArea = {
  title: string
  focus: string
}

export const evidenceGuide: {
  level: SkillEvidence
  label: string
  description: string
}[] = [
  {
    level: "repeated-project-use",
    label: "Repeated project use",
    description: "Used in more than one documented personal, academic, or team build.",
  },
  {
    level: "practical-experience",
    label: "Hands-on work exposure",
    description: "Used in freelance, customer-facing, leadership, or operational responsibilities.",
  },
  {
    level: "project-exposure",
    label: "Project exposure",
    description: "Used hands-on in at least one working project or prototype.",
  },
  {
    level: "coursework-exposure",
    label: "Coursework exposure",
    description: "Introduced and practised through guided study or academic exercises.",
  },
  {
    level: "learning-now",
    label: "Learning now",
    description: "An area I am actively studying, testing, or strengthening.",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Interfaces",
    description:
      "Tools and practices I have used to build responsive interfaces across personal, coursework, and team projects.",
    skills: [
      { name: "React", evidence: "repeated-project-use" },
      { name: "Next.js", evidence: "repeated-project-use" },
      { name: "TypeScript", evidence: "repeated-project-use" },
      { name: "JavaScript", evidence: "repeated-project-use" },
      { name: "Tailwind CSS", evidence: "repeated-project-use" },
      { name: "HTML", evidence: "repeated-project-use" },
      { name: "CSS", evidence: "repeated-project-use" },
      { name: "shadcn/ui", evidence: "project-exposure" },
      { name: "Responsive UI", evidence: "project-exposure" },
    ],
    projectExamples: [
      { label: "Portfolio", slug: "portfolio-website" },
      { label: "REMS", slug: "rems-full-stack-system" },
      { label: "Noodle Town", slug: "noodle-town" },
    ],
  },
  {
    title: "APIs & Backend",
    description:
      "Backend tools I have explored while connecting interfaces, application logic, authentication, and data.",
    skills: [
      { name: "Node.js", evidence: "repeated-project-use" },
      { name: "REST APIs", evidence: "repeated-project-use" },
      { name: "API Integration", evidence: "repeated-project-use" },
      { name: "Express.js", evidence: "project-exposure" },
      { name: "NestJS", evidence: "project-exposure" },
      { name: "FastAPI", evidence: "project-exposure" },
      { name: "Flask", evidence: "project-exposure" },
      { name: "Authentication Flows", evidence: "project-exposure" },
    ],
    projectExamples: [
      { label: "REMS", slug: "rems-full-stack-system" },
      { label: "Cupidy", slug: "cupidy" },
      { label: "Portfolio Builder", slug: "lap-portfolio-builder-platform" },
    ],
  },
  {
    title: "Data & Web Systems",
    description:
      "Database and server-rendered web experience from CRUD, POS, management, and collaborative application projects.",
    skills: [
      { name: "SQL", evidence: "repeated-project-use" },
      { name: "MySQL", evidence: "repeated-project-use" },
      { name: "PHP", evidence: "repeated-project-use" },
      { name: "CRUD Workflows", evidence: "repeated-project-use" },
      { name: "PostgreSQL", evidence: "project-exposure" },
      { name: "MongoDB & Mongoose", evidence: "project-exposure" },
      { name: "Laravel", evidence: "project-exposure" },
      { name: "Database Modelling", evidence: "coursework-exposure" },
    ],
    projectExamples: [
      { label: "Inventory System", slug: "inventory-management-system" },
      { label: "Mini Cafe POS", slug: "mini-cafe-pos-system" },
      { label: "Cupidy", slug: "cupidy" },
    ],
  },
  {
    title: "AI & Data Projects",
    description:
      "Hands-on academic and group-project exposure to preparing data, training models, evaluating results, and building small demos.",
    skills: [
      { name: "Python", evidence: "repeated-project-use" },
      { name: "Jupyter Notebook", evidence: "project-exposure" },
      { name: "pandas", evidence: "project-exposure" },
      { name: "scikit-learn", evidence: "project-exposure" },
      { name: "TensorFlow", evidence: "project-exposure" },
      { name: "Keras", evidence: "project-exposure" },
      { name: "Streamlit", evidence: "project-exposure" },
      { name: "Model Training & Evaluation", evidence: "project-exposure" },
    ],
    projectExamples: [
      { label: "Flower Classifier", slug: "lap-flower-classifier" },
      { label: "Movie Recommendation", slug: "movie-recommendation-system" },
    ],
  },
  {
    title: "IoT & Digital Engineering",
    description:
      "Early project and coursework experience connecting code, simulation, prototypes, and engineering-system concepts.",
    skills: [
      { name: "C++", evidence: "project-exposure" },
      { name: "PlatformIO", evidence: "project-exposure" },
      { name: "Wokwi", evidence: "project-exposure" },
      { name: "IoT Simulation", evidence: "project-exposure" },
      { name: "Systems Thinking", evidence: "coursework-exposure" },
      { name: "Prototyping", evidence: "coursework-exposure" },
      { name: "Engineering Design", evidence: "coursework-exposure" },
    ],
    projectExamples: [{ label: "Smart HVAC", slug: "iot-project" }],
  },
  {
    title: "Networks & Security Foundations",
    description:
      "Foundational study from Digital Engineering coursework. These are learning areas—not claims of security-industry experience.",
    skills: [
      { name: "Networking Fundamentals", evidence: "coursework-exposure" },
      { name: "Data Communications", evidence: "coursework-exposure" },
      { name: "Network & Security Concepts", evidence: "coursework-exposure" },
      { name: "Cybersecurity Fundamentals", evidence: "coursework-exposure" },
      { name: "Cryptography Fundamentals", evidence: "coursework-exposure" },
      { name: "Computer Architecture & OS", evidence: "coursework-exposure" },
    ],
    projectExamples: [],
    evidenceNote:
      "Developed through PSU Digital Engineering modules, guided exercises, and independent study.",
  },
  {
    title: "PC Hardware, Equipment Resale & Customer Support",
    description:
      "Practical experience from building and troubleshooting gaming PCs, independently reselling computer and camera equipment, and supporting customers and family-business operations.",
    skills: [
      { name: "Component Selection", evidence: "practical-experience" },
      { name: "Compatibility Planning", evidence: "practical-experience" },
      { name: "Custom PC Assembly", evidence: "practical-experience" },
      { name: "Hardware Diagnostics", evidence: "practical-experience" },
      { name: "Troubleshooting", evidence: "practical-experience" },
      { name: "Parts Sourcing & Resale", evidence: "practical-experience" },
      { name: "Camera & Lens Resale", evidence: "practical-experience" },
      { name: "Customer Needs Assessment", evidence: "practical-experience" },
      { name: "Basic After-Sales Support", evidence: "practical-experience" },
    ],
    projectExamples: [],
    evidenceNote:
      "Evidence comes from independent PC building and PC/camera equipment resale alongside separate family-business responsibilities from 2022 to 2024.",
  },
  {
    title: "Java & Application Foundations",
    description:
      "Java experience developed through backend, desktop GUI, and small game projects focused on programming fundamentals.",
    skills: [
      { name: "Java", evidence: "repeated-project-use" },
      { name: "Object-Oriented Programming", evidence: "repeated-project-use" },
      { name: "GUI & Event Handling", evidence: "repeated-project-use" },
      { name: "Spring Boot", evidence: "project-exposure" },
      { name: "Game Logic", evidence: "project-exposure" },
    ],
    projectExamples: [
      { label: "Hotel Administration", slug: "hotel-administration-system" },
      { label: "Hotel Booking GUI", slug: "java-gui-project" },
      { label: "Flappy Bird", slug: "java-flappy-bird" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Tools I have used for version control, collaboration, local development, API testing, and deployment.",
    skills: [
      { name: "Git", evidence: "repeated-project-use" },
      { name: "GitHub", evidence: "repeated-project-use" },
      { name: "npm", evidence: "repeated-project-use" },
      { name: "Vercel", evidence: "project-exposure" },
      { name: "Postman", evidence: "project-exposure" },
    ],
    projectExamples: [
      { label: "Portfolio", slug: "portfolio-website" },
      { label: "REMS", slug: "rems-full-stack-system" },
      { label: "Portfolio Builder", slug: "lap-portfolio-builder-platform" },
    ],
  },
]

export const softSkills: SoftSkill[] = [
  {
    title: "Leadership & inclusive coordination",
    evidence:
      "Developed as president of the PSU Phuket International Student Club and through 230 recorded university activity hours.",
  },
  {
    title: "Cross-cultural collaboration",
    evidence:
      "Practised through AUS 2026, the Tokyo design workshop, and two data-visualization exchanges with students from across Asia.",
  },
  {
    title: "Communication & public speaking",
    evidence:
      "Strengthened through English-language presentations, a Youth & Mental Health podcast guest role, customer conversations, and event support.",
  },
  {
    title: "Practical problem-solving & customer awareness",
    evidence:
      "Applied while diagnosing PC hardware, balancing budgets and compatibility, debugging software, and responding to changing customer needs.",
  },
  {
    title: "Adaptability & self-directed learning",
    evidence:
      "Strengthened by moving between web, data, Java, security, hardware, and IoT work while learning new tools as each project required.",
  },
  {
    title: "Social awareness & ethical perspective",
    evidence:
      "Shaped by a liberal-arts curriculum, community volunteering, and creative work for the One Billion Rising gender-equality project.",
  },
]

export const learningAreas: LearningArea[] = [
  {
    title: "Full-stack architecture & system design fundamentals",
    focus: "Understanding how interfaces, APIs, authentication, data models, and deployment fit together.",
  },
  {
    title: "Networks, cybersecurity & cryptography fundamentals",
    focus: "Deepening network concepts, security principles, cryptographic foundations, and safe system configuration through study and practice.",
  },
  {
    title: "Cloud & deployment workflows",
    focus: "Moving beyond basic deployment toward environments, configuration, monitoring, and cloud fundamentals.",
  },
  {
    title: "Applied AI workflows",
    focus: "Deepening data preparation, evaluation, responsible tool use, and practical model integration.",
  },
  {
    title: "Code quality & technical documentation",
    focus: "Practising clearer structure, maintainable code, testing habits, and useful project documentation.",
  },
  {
    title: "Hardware diagnostics & connected systems",
    focus: "Building from PC assembly and simulation toward stronger diagnostics, sensors, electronics, and hardware–software integration.",
  },
]
