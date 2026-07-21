export type ProjectDomain =
  | "frontend"
  | "full-stack"
  | "backend-data"
  | "ai-data"
  | "iot-embedded"
  | "desktop-game"

export type ProjectContext =
  | "personal"
  | "coursework"
  | "collaboration"
  | "research"
  | "learning-exercise"

export type ProjectRelationship = "owner" | "team-project" | "external-contributor"
export type ProjectStatus = "Active" | "Completed" | "Prototype"

export type ProjectRepository = {
  label: string
  owner: string
  url?: string
  contributionUrl?: string
}

export type Project = {
  title: string
  slug: string
  description: string
  year: string
  status: ProjectStatus
  domains: ProjectDomain[]
  context: ProjectContext
  relationship: ProjectRelationship
  role: string
  techStack: string[]
  repositories: ProjectRepository[]
  liveDemo?: string
  featuredOrder?: number
  overview: string
  contributions: string[]
  learnings: string[]
}

export type ArchiveProject = {
  title: string
  repository?: string
  year: string
  technology: string
  context: "Coursework" | "Learning exercise"
  note: string
}

export const projectDomainLabels: Record<ProjectDomain, string> = {
  frontend: "Frontend",
  "full-stack": "Full stack",
  "backend-data": "Backend & data",
  "ai-data": "AI & data",
  "iot-embedded": "IoT & embedded",
  "desktop-game": "Desktop & games",
}

export const projectContextLabels: Record<ProjectContext, string> = {
  personal: "Personal project",
  coursework: "Coursework",
  collaboration: "Student collaboration",
  research: "Academic research",
  "learning-exercise": "Learning exercise",
}

export const projectRelationshipLabels: Record<ProjectRelationship, string> = {
  owner: "Own repository",
  "team-project": "Team project",
  "external-contributor": "External contribution",
}

export function getProjectHref(project: Pick<Project, "slug">) {
  return `/projects/${project.slug}`
}

export function isFeaturedProject(project: Project) {
  return project.featuredOrder !== undefined
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "The evolving site you are viewing: a responsive archive for my projects, education, activities, and learning journey.",
    year: "2026",
    status: "Active",
    domains: ["frontend"],
    context: "personal",
    relationship: "owner",
    role: "Design, frontend development, content, and deployment",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    repositories: [
      {
        label: "Portfolio source",
        owner: "ShineBo/portfolio",
        url: "https://github.com/ShineBo/portfolio",
      },
    ],
    liveDemo: "https://portfolio-shinebobo.vercel.app",
    featuredOrder: 1,
    overview:
      "I built this portfolio as a central, maintainable record of my work rather than a single static landing page. Its content is stored separately from the interface so project evidence, skill context, and future case-study media can be updated without redesigning every page.",
    contributions: [
      "Designed and implemented the responsive multi-page interface",
      "Created reusable project, skills, education, experience, and activity sections",
      "Added accessible interactions, motion preferences, theming, metadata, and Vercel deployment",
    ],
    learnings: [
      "Structuring a content-heavy Next.js application",
      "Balancing animation with accessibility and performance",
      "Writing portfolio copy that distinguishes evidence from proficiency claims",
    ],
  },
  {
    title: "Real Estate Management System",
    slug: "rems-full-stack-system",
    description:
      "A collaborative property-management prototype with buyer and dealer flows, role-based dashboards, listings, and authentication.",
    year: "2025",
    status: "Prototype",
    domains: ["full-stack", "backend-data"],
    context: "coursework",
    relationship: "team-project",
    role: "Full-stack team contributor across the frontend and backend repositories",
    techStack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Sequelize", "JWT"],
    repositories: [
      {
        label: "Frontend repository",
        owner: "ShineBo/rems-front-end-gp1",
        url: "https://github.com/ShineBo/rems-front-end-gp1",
      },
      {
        label: "Backend repository",
        owner: "ShineBo/rems-backend-gp1",
        url: "https://github.com/ShineBo/rems-backend-gp1",
      },
    ],
    featuredOrder: 2,
    overview:
      "REMS was a group exercise in separating a web client from a structured API. The prototype includes buyer and dealer registration and login, role-specific dashboards, and property listing workflows. It gave me hands-on exposure to coordinating changes across two TypeScript codebases.",
    contributions: [
      "Contributed to the Next.js user flows, dashboard interfaces, and API integration",
      "Contributed to NestJS authentication and property-related backend features",
      "Worked with shared team branches and a PostgreSQL/Sequelize persistence layer",
    ],
    learnings: [
      "Coordinating frontend and backend contracts in a team",
      "Role-based authentication and validation fundamentals",
      "Organizing a larger TypeScript coursework project",
    ],
  },
  {
    title: "Movie Recommendation Prototype",
    slug: "movie-recommendation-system",
    description:
      "A collaborative student prototype combining content-based recommendation experiments, a Flask API, and an interactive React interface.",
    year: "2024",
    status: "Prototype",
    domains: ["ai-data", "full-stack"],
    context: "collaboration",
    relationship: "external-contributor",
    role: "Recommendation, backend integration, and frontend contributor",
    techStack: ["React", "Vite", "Flask", "Pandas", "scikit-learn", "Streamlit"],
    repositories: [
      {
        label: "Team repository",
        owner: "Lin-Pyae/Movie-Recommendation",
      },
    ],
    featuredOrder: 3,
    overview:
      "This student project explores content-based movie recommendations using genre features and cosine-nearest-neighbour similarity. My eight public implementation commits span the model experiment, Flask integration, React result and detail flows, and a small Streamlit interface for testing the model.",
    contributions: [
      "Added recommendation-model experiments and a Streamlit testing interface",
      "Built movie result/detail flows and a reusable movie-card component",
      "Added the Flask backend connection and fixed recommendation state after detail navigation",
    ],
    learnings: [
      "Turning a notebook-style recommendation experiment into an interactive prototype",
      "Connecting a Python API to a React client",
      "Debugging state and navigation across recommendation flows",
    ],
  },
  {
    title: "Cupidy",
    slug: "cupidy",
    description:
      "A collaborative dating and matching API where I contributed account, profile, photo, matching, and persistence-layer features.",
    year: "2024",
    status: "Prototype",
    domains: ["backend-data"],
    context: "collaboration",
    relationship: "external-contributor",
    role: "Backend and database contributor",
    techStack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Pydantic", "JWT"],
    repositories: [
      {
        label: "Team repository",
        owner: "Lin-Pyae/cupidy",
        url: "https://github.com/Lin-Pyae/cupidy",
        contributionUrl: "https://github.com/Lin-Pyae/cupidy/commits/master/?author=ShineBo",
      },
    ],
    featuredOrder: 4,
    overview:
      "Cupidy is a Python backend collaboration built around user profiles and matching. GitHub attributes 25 commits to my account, including implementation work and merges. I am presenting only the features that can be verified from my public commit history and merged pull request.",
    contributions: [
      "Implemented signup/sign-in, user-detail, and photo-upload API work",
      "Worked on the matching algorithm and like/match endpoints",
      "Updated database setup, schema, SQLAlchemy models, and repository functions",
    ],
    learnings: [
      "Layering FastAPI routes, models, repositories, and services",
      "Handling authentication and relational data in a collaborative backend",
      "Using pull requests and shared branches to integrate API work",
    ],
  },
  {
    title: "Flower Classification Research Prototype",
    slug: "lap-flower-classifier",
    description:
      "An academic image-classification prototype using transfer learning, evaluation plots, saved models, and a Streamlit inference interface.",
    year: "2025",
    status: "Prototype",
    domains: ["ai-data"],
    context: "research",
    relationship: "owner",
    role: "Model experimentation, evaluation, and demo interface",
    techStack: ["Python", "TensorFlow", "MobileNetV2", "Streamlit", "OpenCV", "scikit-learn"],
    repositories: [
      {
        label: "Research repository",
        owner: "ShineBo/LAP_Final_Project",
        url: "https://github.com/ShineBo/LAP_Final_Project",
      },
    ],
    featuredOrder: 5,
    overview:
      "This coursework prototype classifies five flower categories with a MobileNetV2 transfer-learning workflow. The repository includes training and prediction code, saved models, evaluation visualizations, and a Streamlit interface for trying an image. It represents practical academic exposure, not production machine-learning experience.",
    contributions: [
      "Prepared the five-class training and evaluation workflow",
      "Applied MobileNetV2 transfer learning and saved model checkpoints",
      "Built a Streamlit inference interface with supporting visualizations",
    ],
    learnings: [
      "Transfer-learning and image-preprocessing fundamentals",
      "Reading training metrics and classification results",
      "Packaging a model experiment into a small demonstrator",
    ],
  },
  {
    title: "Smart HVAC IoT Controller",
    slug: "iot-project",
    description:
      "An ESP32 HVAC-control prototype with simulated sensors, MQTT messaging, operating modes, and temperature hysteresis.",
    year: "2025",
    status: "Prototype",
    domains: ["iot-embedded"],
    context: "coursework",
    relationship: "owner",
    role: "Embedded logic, simulation setup, and MQTT integration",
    techStack: ["C++", "ESP32", "PlatformIO", "Wokwi", "MQTT", "DHT22"],
    repositories: [
      {
        label: "IoT repository",
        owner: "ShineBo/IOT-project",
        url: "https://github.com/ShineBo/IOT-project",
      },
    ],
    featuredOrder: 6,
    overview:
      "This Digital Engineering coursework prototype models an HVAC controller on an ESP32. It reads simulated DHT22 conditions, switches between COOL, HEAT, and IDLE states with hysteresis, and publishes data over MQTT. Wokwi and PlatformIO provide a repeatable environment without claiming a deployed physical system.",
    contributions: [
      "Implemented automatic and manual HVAC operating modes as a finite-state flow",
      "Added temperature hysteresis to avoid rapid state switching",
      "Configured ESP32 simulation, Wi-Fi, and MQTT messaging",
    ],
    learnings: [
      "Embedded state-machine and sensor-control fundamentals",
      "Why hysteresis matters in control systems",
      "Connecting simulated devices to an MQTT data path",
    ],
  },
  {
    title: "LAP Portfolio Builder Platform",
    slug: "lap-portfolio-builder-platform",
    description:
      "A class-wide portfolio platform where I contributed backend APIs for accounts, profiles, blogs, comments, and projects.",
    year: "2025",
    status: "Prototype",
    domains: ["backend-data", "full-stack"],
    context: "coursework",
    relationship: "external-contributor",
    role: "Backend API and endpoint-testing contributor",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Postman"],
    repositories: [
      {
        label: "Team platform repository",
        owner: "min-peter/lap-portfolio-builder-platform",
      },
      {
        label: "Backend working repository",
        owner: "ShineBo/lap-portfolio-builder-platform-backend",
      },
    ],
    featuredOrder: 7,
    overview:
      "This LAP IV class project was designed to let students build and present portfolios. My verified work concentrated on the Express/MongoDB backend: account and profile flows, blog and comment operations, project endpoints, and Postman-based testing. The project is described as collaborative rather than as my own product.",
    contributions: [
      "Implemented registration and user account/profile API work",
      "Added blog-detail/delete and comment CRUD functionality",
      "Added project get/update endpoints and maintained Postman test collections",
    ],
    learnings: [
      "Controller, service, and data-access separation in an Express project",
      "Document-database modelling with Mongoose",
      "Testing and documenting collaborative APIs",
    ],
  },
  {
    title: "Mini Cafe POS System",
    slug: "mini-cafe-pos-system",
    description:
      "A group web-programming final project covering menu administration, ordering, totals, receipts, and order history.",
    year: "2024",
    status: "Completed",
    domains: ["full-stack", "backend-data"],
    context: "coursework",
    relationship: "team-project",
    role: "Group coursework contributor",
    techStack: ["PHP", "MySQL", "MySQLi", "JavaScript", "Bootstrap"],
    repositories: [
      {
        label: "Group project repository",
        owner: "ShineBo/MiniCafePOSProject",
        url: "https://github.com/ShineBo/MiniCafePOSProject",
      },
    ],
    featuredOrder: 8,
    overview:
      "Mini Cafe POS applies introductory web-programming and database concepts to a cafe scenario. The coursework system includes an admin login, menu CRUD with images and categories, an ordering flow, calculated totals, receipts, and order history.",
    contributions: [
      "Worked on the group PHP/MySQL application and its cafe workflows",
      "Implemented or integrated menu, ordering, total, and receipt interactions",
      "Used form submissions and database queries in a multi-page web system",
    ],
    learnings: [
      "CRUD and relational-data fundamentals",
      "Breaking a business scenario into connected screens",
      "Coordinating a small web-programming group project",
    ],
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    description:
      "A Laravel coursework system for products, suppliers, stock, customers, orders, purchases, and role-based access.",
    year: "2024",
    status: "Prototype",
    domains: ["full-stack", "backend-data"],
    context: "coursework",
    relationship: "owner",
    role: "Full-stack coursework development",
    techStack: ["Laravel", "PHP", "Blade", "MySQL", "Eloquent", "Bootstrap"],
    repositories: [
      {
        label: "Inventory repository",
        owner: "ShineBo/InventoryManagementSystem",
        url: "https://github.com/ShineBo/InventoryManagementSystem",
      },
    ],
    overview:
      "This Laravel 10 coursework prototype models common inventory operations through products, categories, suppliers, inventory records, customers, orders, and purchases. It also includes Laravel UI authentication and admin/user roles.",
    contributions: [
      "Built Laravel controllers, models, migrations, and Blade views for the core records",
      "Added authentication and role-aware workflows",
      "Connected inventory, purchasing, ordering, and supplier data",
    ],
    learnings: [
      "Laravel MVC and Eloquent fundamentals",
      "Database migrations and related business records",
      "Role-based interfaces in a coursework system",
    ],
  },
  {
    title: "Hotel Administration System",
    slug: "hotel-administration-system",
    description:
      "A Spring Boot coursework prototype for administrator access, room management, availability, and check-in records.",
    year: "2025",
    status: "Prototype",
    domains: ["full-stack", "backend-data"],
    context: "coursework",
    relationship: "owner",
    role: "Java backend and server-rendered interface practice",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "Thymeleaf", "MySQL", "Maven"],
    repositories: [
      {
        label: "Hotel administration repository",
        owner: "ShineBo/Hotel_Administration_Spring_Boot_Project_LAP",
        url: "https://github.com/ShineBo/Hotel_Administration_Spring_Boot_Project_LAP",
      },
    ],
    overview:
      "This small Java 17/Spring Boot prototype applies MVC and persistence concepts to a hotel administration scenario. Its scope includes administrator authentication and profile data, room and status records, and check-in transactions rendered with Thymeleaf.",
    contributions: [
      "Structured the prototype with Spring MVC, JPA entities, and repositories",
      "Added room/status management and check-in workflows",
      "Connected Thymeleaf views to MySQL-backed application data",
    ],
    learnings: [
      "Spring Boot project structure and dependency injection",
      "Server-rendered forms with JPA-backed data",
      "Modelling a management scenario as a small coursework prototype",
    ],
  },
  {
    title: "Country Search",
    slug: "country-search",
    description:
      "A country-exploration exercise with search, region filters, dark mode, and REST Countries data.",
    year: "2023",
    status: "Completed",
    domains: ["frontend"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Frontend and API-integration practice",
    techStack: ["Next.js", "React", "TypeScript", "Material UI", "Zustand", "REST API"],
    repositories: [
      {
        label: "Country Search repository",
        owner: "ShineBo/Country-Search",
        url: "https://github.com/ShineBo/Country-Search",
      },
    ],
    overview:
      "Country Search is a hands-on frontend exercise built from a starter concept. It uses the REST Countries API to support text search, region filtering, country details, dark mode, and map links while giving me early practice with TypeScript and client state.",
    contributions: [
      "Implemented country search, filtering, and detail presentation",
      "Used Zustand for small client-state interactions",
      "Added responsive Material UI layouts and theme switching",
    ],
    learnings: [
      "Fetching and presenting structured external API data",
      "Typed frontend state and reusable UI patterns",
      "Search, filter, and empty-state interactions",
    ],
  },
  {
    title: "Noodle Town",
    slug: "noodle-town",
    description:
      "A restaurant-themed web-fundamentals final project with animated menu, reservation, contact, and location interfaces.",
    year: "2024",
    status: "Completed",
    domains: ["frontend"],
    context: "coursework",
    relationship: "owner",
    role: "Frontend coursework development",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    repositories: [
      {
        label: "Noodle Town repository",
        owner: "ShineBo/Noodle-Town",
        url: "https://github.com/ShineBo/Noodle-Town",
      },
    ],
    liveDemo: "https://noodle-town.vercel.app",
    overview:
      "Noodle Town is a restaurant interface created as a web-fundamentals final project. It includes menu browsing, reservation, contact, and location screens. The forms are frontend demonstrations rather than a connected production booking service.",
    contributions: [
      "Built the responsive restaurant layout and page navigation",
      "Created menu, reservation, contact, and location interfaces",
      "Added motion and carousel interactions to support the visual presentation",
    ],
    learnings: [
      "React component composition and routing",
      "Responsive styling with Tailwind CSS",
      "Using animation as supporting feedback instead of decoration alone",
    ],
  },
  {
    title: "Movie Browser",
    slug: "movie-browser",
    description:
      "An early React API project for movie search, details, genres, and recommendations using TMDB data.",
    year: "2023",
    status: "Completed",
    domains: ["frontend"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Frontend and API-integration practice",
    techStack: ["React", "React Router", "TMDB API", "JavaScript", "CSS"],
    repositories: [
      {
        label: "Movie Browser repository",
        owner: "ShineBo/moviesbrowser",
      },
    ],
    overview:
      "Movie Browser is an early Create React App project that explores movie search and discovery through the TMDB API. It includes search, genre views, movie details, and related recommendations, and is presented as an API-learning exercise.",
    contributions: [
      "Built search, movie detail, genre, and recommendation views",
      "Used React Router to connect the browsing flow",
      "Fetched and rendered external movie data across reusable UI sections",
    ],
    learnings: [
      "Asynchronous data fetching in React",
      "Route-driven detail screens",
      "Handling loading and dynamic API content",
    ],
  },
  {
    title: "Weather Forecast App",
    slug: "weather-app",
    description:
      "A responsive weather exercise using OpenWeather data for current conditions and a five-day forecast.",
    year: "2023",
    status: "Completed",
    domains: ["frontend"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Frontend and API-integration practice",
    techStack: ["React", "Vite", "Tailwind CSS", "OpenWeather API", "JavaScript"],
    repositories: [
      {
        label: "Weather repository",
        owner: "ShineBo/weather_app",
      },
    ],
    overview:
      "This learning project fetches current weather and forecast data for a selected city. It represents early practice with React, asynchronous requests, responsive Tailwind layouts, and turning API responses into a concise visual forecast.",
    contributions: [
      "Built current-condition and five-day forecast displays",
      "Connected city selection to OpenWeather requests",
      "Styled responsive weather states with React and Tailwind CSS",
    ],
    learnings: [
      "Working with multiple API response shapes",
      "Formatting dates, measurements, and forecast states",
      "Keeping a small data-driven interface readable",
    ],
  },
  {
    title: "Login & Registration Prototype",
    slug: "login-registration-full-stack-app",
    description:
      "A small authentication-learning prototype with a Next.js client and an Express/MongoDB API.",
    year: "2025",
    status: "Prototype",
    domains: ["full-stack", "backend-data"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Frontend and backend authentication practice",
    techStack: ["Next.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
    repositories: [
      {
        label: "Frontend repository",
        owner: "ShineBo/React_NextJS_Frontend_Login_Registration_with_API",
        url: "https://github.com/ShineBo/React_NextJS_Frontend_Login_Registration_with_API",
      },
      {
        label: "Backend repository",
        owner: "ShineBo/Express_Backend_Login_Registration_with_API",
        url: "https://github.com/ShineBo/Express_Backend_Login_Registration_with_API",
      },
    ],
    overview:
      "This limited-scope learning prototype connects register and login forms to an Express API backed by MongoDB. It is useful evidence of practising password hashing, token creation, CORS, and client/server requests, but it is not presented as production-ready authentication.",
    contributions: [
      "Created the Next.js register, login, and authenticated greeting flow",
      "Built Express endpoints with Mongoose, bcryptjs, and JWT",
      "Connected the two repositories through local API requests",
    ],
    learnings: [
      "The basic lifecycle of registration and login requests",
      "Password hashing and token fundamentals",
      "Why secrets, validation, and deployment configuration need more hardening",
    ],
  },
  {
    title: "Nike Landing Page Study",
    slug: "nike-website-ui-clone",
    description:
      "A static Nike-inspired interface recreation for practising React composition, spacing, and responsive Tailwind layouts.",
    year: "2024",
    status: "Completed",
    domains: ["frontend"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Frontend UI practice",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    repositories: [
      {
        label: "UI study repository",
        owner: "ShineBo/Nike-Website",
        url: "https://github.com/ShineBo/Nike-Website",
      },
    ],
    overview:
      "This project recreates a Nike-style landing page as a visual learning exercise. The focus is component composition, responsive sections, typography, spacing, and Tailwind styling; it does not include shopping or commerce functionality.",
    contributions: [
      "Recreated the landing-page sections as reusable React components",
      "Practised responsive layout, typography, and visual hierarchy",
      "Used Tailwind CSS to translate a reference design into code",
    ],
    learnings: [
      "Breaking a visual reference into component boundaries",
      "Responsive spacing and content hierarchy",
      "Distinguishing a UI study from a functional product",
    ],
  },
  {
    title: "Java Flappy Bird",
    slug: "java-flappy-bird",
    description:
      "A small Java Swing game exercise with keyboard input, timers, collision detection, scoring, and restart behaviour.",
    year: "2024",
    status: "Completed",
    domains: ["desktop-game"],
    context: "learning-exercise",
    relationship: "owner",
    role: "Java game-logic practice",
    techStack: ["Java", "Swing", "AWT", "Object-Oriented Programming"],
    repositories: [
      {
        label: "Flappy Bird repository",
        owner: "ShineBo/FlappyBird",
        url: "https://github.com/ShineBo/FlappyBird",
      },
    ],
    overview:
      "Java Flappy Bird is a compact desktop game exercise used to practise event-driven programming. Swing and AWT provide the game loop, drawing, keyboard input, collision detection, scoring, and reset behaviour.",
    contributions: [
      "Implemented timer-driven movement and keyboard controls",
      "Added pipe generation, collision detection, scoring, and restart behaviour",
      "Organized the small game with Java classes and event handlers",
    ],
    learnings: [
      "Event-driven desktop programming",
      "Simple game-state and collision logic",
      "Applying object-oriented ideas in a visual exercise",
    ],
  },
  {
    title: "Java Hotel Booking GUI",
    slug: "java-gui-project",
    description:
      "An in-memory Java Swing hotel-booking exercise covering rooms, types, availability, booking, search, and date validation.",
    year: "2024",
    status: "Prototype",
    domains: ["desktop-game"],
    context: "coursework",
    relationship: "owner",
    role: "Java desktop-interface coursework",
    techStack: ["Java", "Swing", "AWT", "Object-Oriented Programming"],
    repositories: [
      {
        label: "Hotel booking GUI repository",
        owner: "ShineBo/GUI_Project",
        url: "https://github.com/ShineBo/GUI_Project",
      },
    ],
    overview:
      "This coursework GUI is specifically a hotel-booking management exercise, not a generic desktop demo. It manages room types and availability, captures bookings, supports searching, and validates dates in memory without a database persistence layer.",
    contributions: [
      "Built Swing screens for room, availability, and booking workflows",
      "Added search and date-validation behaviour",
      "Modelled the in-memory application with object-oriented Java classes",
    ],
    learnings: [
      "Desktop form design and event handling",
      "Modelling related records without persistence",
      "Input validation in an interactive Java application",
    ],
  },
]

export const archiveProjects: ArchiveProject[] = [
  {
    title: "AI Class Notebooks",
    repository: "https://github.com/ShineBo/AI-class",
    year: "2025",
    technology: "Python · Jupyter",
    context: "Coursework",
    note: "Six assignment notebooks for introductory AI and model practice.",
  },
  {
    title: "Nest Course App",
    repository: "https://github.com/ShineBo/nest-course-app",
    year: "2025",
    technology: "NestJS · TypeScript",
    context: "Coursework",
    note: "A backend course sandbox for practising NestJS structure and APIs.",
  },
  {
    title: "Next.js Classroom App",
    repository: "https://github.com/ShineBo/nextwebapp",
    year: "2025",
    technology: "Next.js · TypeScript",
    context: "Coursework",
    note: "A small classroom sandbox for Next.js pages, components, and routing.",
  },
  {
    title: "Streamlit Class Lab",
    repository: "https://github.com/ShineBo/Streamlit",
    year: "2024",
    technology: "Python · Streamlit · Jupyter",
    context: "Coursework",
    note: "Class demonstrations and notebooks for simple interactive data apps.",
  },
  {
    title: "Laravel Blog",
    repository: "https://github.com/ShineBo/Laravel-Blog",
    year: "2022",
    technology: "Laravel · PHP",
    context: "Learning exercise",
    note: "An early Laravel 8 CRUD blog used to practise framework conventions.",
  },
  {
    title: "Express Drinks API",
    year: "2024",
    technology: "Express · MongoDB",
    context: "Learning exercise",
    note: "A small drinks CRUD API for backend practice.",
  },
  {
    title: "PHP To-do CRUD",
    repository: "https://github.com/ShineBo/PHP_CRUD_Project-ToDoList",
    year: "2024",
    technology: "PHP · MySQL",
    context: "Coursework",
    note: "A group web-programming assignment focused on basic CRUD operations.",
  },
  {
    title: "PHP Voting Database Demo",
    repository: "https://github.com/ShineBo/phpdatabaseproject",
    year: "2023",
    technology: "PHP · MySQL",
    context: "Learning exercise",
    note: "An early voter/admin, candidate, voting, and results demo retained as learning history.",
  },
  {
    title: "Fooide UI with Vite",
    repository: "https://github.com/ShineBo/Fooide-UI-with-vite",
    year: "2023",
    technology: "Vite · Bootstrap",
    context: "Learning exercise",
    note: "A food-themed landing-page interface exercise.",
  },
  {
    title: "The Explorer UI",
    repository: "https://github.com/ShineBo/The-Explorer-UI",
    year: "2023",
    technology: "HTML · CSS · Bootstrap",
    context: "Learning exercise",
    note: "A static Myanmar news and exploration interface study.",
  },
  {
    title: "Random Star Wars Characters",
    repository: "https://github.com/ShineBo/React-Random-Star-War-Characters",
    year: "2023",
    technology: "React · JavaScript",
    context: "Learning exercise",
    note: "A compact React exercise for rendering random character data.",
  },
  {
    title: "JavaScript Tic-tac-toe",
    repository: "https://github.com/ShineBo/tic-tac-toe-js",
    year: "2024",
    technology: "JavaScript · HTML · CSS",
    context: "Learning exercise",
    note: "A browser-game exercise for state, turns, and event handling.",
  },
  {
    title: "iOS Calculator UI Clone",
    repository: "https://github.com/ShineBo/IOS_Calculator_Clone",
    year: "2024",
    technology: "HTML · CSS · JavaScript",
    context: "Learning exercise",
    note: "A small calculator-interface recreation focused on layout and styling.",
  },
  {
    title: "Memory Game",
    repository: "https://github.com/ShineBo/memoryGame",
    year: "2024",
    technology: "JavaScript",
    context: "Learning exercise",
    note: "A compact color-matching game kept as part of my early JavaScript practice.",
  },
  {
    title: "Web Programming Assignments",
    repository: "https://github.com/ShineBo/WebProgramming_Assignments_Group_9",
    year: "2024",
    technology: "HTML · CSS",
    context: "Coursework",
    note: "A Group 9 personality-test assignment using introductory HTML and JavaScript.",
  },
  {
    title: "Frontend Challenge Collection",
    repository: "https://github.com/ShineBo/weekend-today",
    year: "2022",
    technology: "HTML · CSS",
    context: "Learning exercise",
    note: "Early Frontend Mentor starter and challenge work.",
  },
  {
    title: "Early Weather App",
    year: "2023",
    technology: "JavaScript · CSS",
    context: "Learning exercise",
    note: "An older weather-app iteration, archived separately from the later React version.",
  },
]

export const documentedProjectCount = projects.length + archiveProjects.length
