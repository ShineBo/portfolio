export type AcademicGroup = {
  title: string
  items: string[]
}

export type Education = {
  degree: string
  school: string
  faculty?: string
  program?: string
  location: string
  status: string
  period: string
  gpa?: string
  description: string
  highlights: string[]
  courseworkLabel: string
  courseworkGroups: AcademicGroup[]
  source: {
    label: string
    url: string
  }
  distinction?: {
    title: string
    detail: string
    url: string
  }
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Myanmar Institute of Theology",
    program: "Liberal Arts Program",
    location: "Yangon, Myanmar",
    status: "Graduated",
    period: "2021 – 2025",
    gpa: "3.74",
    description:
      "A Computer Science degree shaped by a broad liberal-arts education. Alongside software and computing foundations, the program developed my awareness of people, society, ethics, culture, and the contexts in which technology is used.",
    highlights: [
      "Programming, software engineering, database, operating-system, web, and mobile foundations",
      "Interdisciplinary study across society, rights, ethics, religion, communication, and wellbeing",
      "A human-centred perspective that connects technical decisions with people and context",
    ],
    courseworkLabel: "Selected coursework completed",
    courseworkGroups: [
      {
        title: "Language, communication & wellbeing",
        items: ["Korean Language Basics", "English", "Counselling", "Wellbeing"],
      },
      {
        title: "Society, rights & civic life",
        items: [
          "Civic Education",
          "Gender Studies",
          "Social Studies",
          "Human Rights",
          "Peace Education",
          "You and Your World",
        ],
      },
      {
        title: "Religion, ethics & culture",
        items: [
          "World Religion",
          "Ethics",
          "Religion and Society",
          "Introduction to Christianity",
          "Music Appreciation",
        ],
      },
      {
        title: "Business & foundations",
        items: ["Management", "Introduction to Economics", "Introduction to IT"],
      },
    ],
    source: {
      label: "MIT Bachelor of Arts / Science curriculum",
      url: "https://www.mit.edu.mm/bachelor-of-arts-science/",
    },
  },
  {
    degree: "Bachelor of Engineering (Digital Engineering), International Program",
    school: "Prince of Songkla University, Phuket Campus",
    faculty: "College of Computing",
    location: "Phuket, Thailand",
    status: "3rd year · currently studying",
    period: "2024 – Present",
    gpa: "4.00",
    description:
      "A 120-credit, project- and real-case-based engineering program connecting software, automation, connected systems, and cybersecurity. I am building breadth across the program while developing deeper practical interests in software engineering, networks and security, and intelligent objects.",
    highlights: [
      "Module- and project-based learning grounded in practical engineering scenarios",
      "Study across software, networks and security, computer architecture, electronics, and IoT",
      "International collaboration, English-language presentations, and student leadership",
    ],
    courseworkLabel: "Relevant study and project areas",
    courseworkGroups: [
      {
        title: "Software & product",
        items: [
          "Computer Programming",
          "Website Design and Development",
          "Design Thinking and UI/UX",
          "Software Engineering",
          "Project Management and Quality Assurance",
          "Business Process Design and Innovation",
        ],
      },
      {
        title: "Systems & connected technology",
        items: [
          "Computer Architecture and Operating Systems",
          "Electronics and Internet of Things",
          "Intelligent Objects",
          "Digital Engineering project work",
        ],
      },
      {
        title: "Networks & security",
        items: [
          "Data Communications and Networking",
          "Network and Security",
          "Cybersecurity Fundamentals",
          "Cryptography Fundamentals",
        ],
      },
    ],
    source: {
      label: "Current Digital Engineering curriculum",
      url: "https://www.computing.psu.ac.th/en/b-eng-digital-engineer-international-program/",
    },
    distinction: {
      title: "Outstanding Academic Performance Award",
      detail: "Academic year 2024 · First-year Digital Engineering",
      url: "https://computing.psu.ac.th/th/27931/",
    },
  },
]
