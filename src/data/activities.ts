export type ActivitySource = {
  label: string
  url: string
}

export type Activity = {
  title: string
  organization: string
  category: string
  period: string
  location?: string
  description: string
  highlights: string[]
  sources?: ActivitySource[]
  featured?: boolean
}

export const activityStats = [
  { value: "230", label: "Recorded PSU activity hours" },
  { value: "100", label: "Hours required for graduation" },
  { value: "2.3×", label: "The standard requirement" },
]

export const activities: Activity[] = [
  {
    title: "Selected PSU Delegate — Asian Undergraduate Symposium 2026",
    organization: "NUS College · ASEAN University Network Summer Camp",
    category: "International Program",
    period: "6–18 Jul 2026",
    location: "Singapore",
    description:
      "Selected by Prince of Songkla University to join undergraduates from across Asia for NUS College’s two-week ‘Communities in Action’ symposium.",
    highlights: [
      "Worked across cultures on community-focused challenges and perspectives",
      "Explored sustainability and innovation, heritage and culture, and inclusivity and resilience",
      "Represented PSU’s College of Computing in an international cohort",
    ],
    sources: [
      {
        label: "Official PSU selection notice",
        url: "https://mobility.psu.ac.th/api/files/24/",
      },
      {
        label: "NUS College program",
        url: "https://nuscollege.nus.edu.sg/event/asian-undergraduate-symposium-2026/",
      },
    ],
    featured: true,
  },
  {
    title: "President",
    organization: "PSU Phuket International Student Club",
    category: "Student Leadership",
    period: "Current",
    location: "Phuket, Thailand",
    description:
      "Serving as club president, helping international students connect with one another and participate more confidently in campus and community life.",
    highlights: [
      "Lead intercultural student engagement and represent international-student perspectives",
      "Coordinate with students and university stakeholders around club activities",
      "Help create an inclusive, welcoming community across nationalities",
    ],
    sources: [
      {
        label: "PSU Phuket International Student Club",
        url: "https://www.psu.ac.th/phuket/11694/",
      },
    ],
    featured: true,
  },
  {
    title: "JASSO-Supported Participant — Asia Design Global Workshop 2025",
    organization: "2025 SIT–PSU Student Exchange Program to Tokyo",
    category: "Global Project-Based Learning",
    period: "31 Jul – 7 Aug 2025",
    location: "Shibaura Institute of Technology · Tokyo, Japan",
    description:
      "Selected as one of PSU’s participating Digital Engineering students for a multinational design workshop and short-term exchange hosted by Shibaura Institute of Technology.",
    highlights: [
      "Collaborated in a multicultural team through ideation, field research, and proposal development",
      "Took part in interim review, model development, and final presentation work",
      "Received support through Japan’s JASSO short-term study scholarship program",
    ],
    sources: [
      {
        label: "Official PSU participant announcement",
        url: "https://computing.psu.ac.th/th/27878/",
      },
      {
        label: "SIT 2025 global PBL program",
        url: "https://www.shibaura-it.ac.jp/en/study/other/program_2025.html",
      },
    ],
    featured: true,
  },
  {
    title: "Cross-Cultural Data Analysis & Visualization Workshops",
    organization: "PSU Phuket with SIT, Sojo, OMU & Shunan University",
    category: "International Workshop",
    period: "2024 & 2025",
    location: "PSU Phuket · Thailand",
    description:
      "Participated in two short-term exchange workshops with students from Japanese partner universities, combining data work, English-language collaboration, and cultural exchange.",
    highlights: [
      "2024: SIT–SOJO–OMU workshop, 29 Oct–1 Nov",
      "2025: SIT–Sojo–OMU–Shunan workshop, 15–19 Sep",
      "Practised data analysis, visualization, presentation, and cross-cultural teamwork",
    ],
    sources: [
      {
        label: "2024 official workshop report",
        url: "https://www.computing.psu.ac.th/en/9467/coc-and-fte-psu-phuket-organized-the-student-exchange-program-on-data-science-and-digital-technology-collaborated-with-universities-from-japan/",
      },
      {
        label: "2025 official workshop page",
        url: "https://computing.psu.ac.th/th/27781/",
      },
    ],
    featured: true,
  },
  {
    title: "Supporting Actor & Video Editor",
    organization: "One Billion Rising · Myanmar Institute of Theology",
    category: "Creative Advocacy",
    period: "Undergraduate project",
    location: "Yangon, Myanmar",
    description:
      "Contributed on camera and in post-production to a campus creative campaign supporting gender equality and an end to gender-based violence.",
    highlights: [
      "Performed in a supporting role for the campaign video",
      "Edited the final video and supported the project’s visual storytelling",
      "Combined creative production with a social-impact message",
    ],
    sources: [
      {
        label: "One Billion Rising project page",
        url: "https://www.onebillionrising.org/65545/myanmar-institute-of-theology-rising/",
      },
    ],
  },
  {
    title: "Guest Speaker — ‘Youth & Mental Health’ Podcast",
    organization: "AIESEC in Myanmar · World Mental Health Day",
    category: "Public Speaking",
    period: "Oct 2023",
    location: "Myanmar",
    description:
      "Joined an AIESEC podcast as a guest speaker to share a youth perspective on mental health, awareness, and the importance of supportive conversations.",
    highlights: [
      "Prepared and communicated personal perspectives for a public audience",
      "Contributed to a youth-led World Mental Health Day conversation",
      "Strengthened empathetic communication and speaking confidence",
    ],
  },
  {
    title: "Youth Community Volunteer",
    organization: "Local youth community initiatives",
    category: "Community Service",
    period: "Ongoing",
    location: "Myanmar",
    description:
      "Volunteer support for local youth-led activities and community initiatives, including informal and unrecorded contributions outside formal university programs.",
    highlights: [
      "Supported community activities where practical help was needed",
      "Worked alongside other young volunteers and local participants",
      "Continued contributing beyond activities captured in formal records",
    ],
  },
]
