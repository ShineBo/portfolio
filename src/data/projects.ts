export type Project = {
  title: string
  slug: string
  description: string
  category: string
  techStack: string[]
  href: string
  github?: string
  liveDemo?: string
  featured: boolean
  overview: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio website built to showcase my projects, skills, education, activities, experiences, and technical growth as a Computer Science graduate and Digital Engineering student.",
    category: "Web Development",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    href: "/projects/portfolio-website",
    github: "https://github.com/ShineBo/portfolio",
    liveDemo: "https://shinebobo.vercel.app",
    featured: true,
    overview:
      "This portfolio website is designed as a central place to present my technical projects, academic background, skills, experiences, university activities, and personal development. It is built with a modern frontend stack and structured so it can grow into a project archive, resume website, and personal knowledge base.",
    highlights: [
      "Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui",
      "Created reusable sections for projects, skills, education, experience, and activities",
      "Structured with clean data files so content can be updated easily",
    ],
  },
  {
    title: "REMS Full-Stack System",
    slug: "rems-full-stack-system",
    description:
      "A full-stack system project with a TypeScript frontend and backend, showing structured application development, API integration, and team-based software engineering.",
    category: "Full-Stack Development",
    techStack: ["TypeScript", "Next.js", "NestJS", "REST API"],
    href: "/projects/rems-full-stack-system",
    github: "https://github.com/ShineBo/rems-front-end-gp1",
    featured: true,
    overview:
      "REMS is a full-stack project separated into frontend and backend repositories. The frontend focuses on user interface, routing, state handling, and API connection, while the backend focuses on server-side structure and API development using a TypeScript backend framework.",
    highlights: [
      "Worked with a separated frontend and backend architecture",
      "Practiced API integration between client-side and server-side code",
      "Used TypeScript to improve structure, maintainability, and development workflow",
    ],
  },
    {
    title: "Movie Recommendation System",
    slug: "movie-recommendation-system",
    description:
      "A group full-stack movie recommendation project with separate frontend and backend structure, combining web development with recommendation system concepts.",
    category: "AI / Full-Stack Development",
    techStack: ["JavaScript", "Python", "HTML", "CSS"],
    href: "/projects/movie-recommendation-system",
    github: "https://github.com/Lin-Pyae/Movie-Recommendation",
    featured: true,
    overview:
      "Movie Recommendation System is one of my larger group projects, built with my friends to combine a web application interface with backend logic and recommendation system functionality. The project is organized with separate frontend and backend folders, making it a good example of team-based full-stack development.",
    highlights: [
      "Built as a group project with separated frontend and backend structure",
      "Combined web development with movie recommendation concepts",
      "Practiced teamwork, project organization, and full-stack integration",
    ],
  },
  {
    title: "Cupidy",
    slug: "cupidy",
    description:
      "A group Python web project built with my friends, using a backend server structure and database file for application data.",
    category: "Backend / Web Application",
    techStack: ["Python", "FastAPI", "Uvicorn", "SQL"],
    href: "/projects/cupidy",
    github: "https://github.com/Lin-Pyae/cupidy",
    featured: true,
    overview:
      "Cupidy is one of my larger group projects, built with my friends as a Python-based web application. The repository includes backend application files, database SQL, and a Uvicorn-based server startup command, making it useful for showing backend development and database-connected application work.",
    highlights: [
      "Built as a group project using Python backend development",
      "Included database structure through an SQL file",
      "Practiced backend setup, server running, and team-based application development",
    ],
  },
  {
    title: "LAP Flower Classifier",
    slug: "lap-flower-classifier",
    description:
      "A machine learning project for flower classification using Python, trained models, prediction scripts, and a Streamlit interface.",
    category: "AI / Machine Learning",
    techStack: ["Python", "TensorFlow", "Keras", "Streamlit"],
    href: "/projects/lap-flower-classifier",
    github: "https://github.com/ShineBo/LAP_Final_Project",
    featured: true,
    overview:
      "This project applies machine learning to classify flower images. It includes model training, prediction logic, saved model files, and a Streamlit app interface, making it a strong example of applying AI concepts in a practical project.",
    highlights: [
      "Built a flower image classification workflow using Python",
      "Used trained model files and prediction scripts for inference",
      "Created a simple Streamlit interface to demonstrate the project",
    ],
  },
  {
    title: "IoT Project",
    slug: "iot-project",
    description:
      "A Digital Engineering related IoT project using embedded development files, simulation configuration, and C++ project structure.",
    category: "IoT / Digital Engineering",
    techStack: ["C++", "PlatformIO", "Wokwi", "IoT"],
    href: "/projects/iot-project",
    github: "https://github.com/ShineBo/IOT-project",
    featured: true,
    overview:
      "This IoT project shows my interest in connecting software with hardware, simulation, and engineering systems. It includes embedded project structure and configuration files for development and testing.",
    highlights: [
      "Worked with C++ in an embedded/IoT-style project structure",
      "Used configuration files for platform and simulation setup",
      "Connected Digital Engineering learning with practical system development",
    ],
  },
  {
    title: "Mini Cafe POS System",
    slug: "mini-cafe-pos-system",
    description:
      "A web programming final project for a mini cafe point-of-sale system, focused on practical business workflows and database-driven functionality.",
    category: "PHP / Database Systems",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    href: "/projects/mini-cafe-pos-system",
    github: "https://github.com/ShineBo/MiniCafePOSProject",
    featured: true,
    overview:
      "Mini Cafe POS System is a practical web programming project designed around cafe sales and business operations. It demonstrates CRUD functionality, database usage, and user interface development for a real-world style application.",
    highlights: [
      "Built a practical point-of-sale system for a cafe scenario",
      "Used PHP and database concepts for dynamic functionality",
      "Practiced group project development and web programming fundamentals",
    ],
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    description:
      "A PHP-based inventory management system for handling products, stock, and business-style data management.",
    category: "PHP / Database Systems",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    href: "/projects/inventory-management-system",
    github: "https://github.com/ShineBo/InventoryManagementSystem",
    featured: true,
    overview:
      "This inventory management system is a practical CRUD-based project that focuses on managing product and stock information. It is useful for demonstrating database interaction, form handling, and business application logic.",
    highlights: [
      "Developed CRUD functionality for inventory-style data",
      "Practiced database-driven web application development",
      "Built a practical system connected to real business use cases",
    ],
  },
  {
    title: "Hotel Administration System",
    slug: "hotel-administration-system",
    description:
      "A hotel administration project focused on managing hotel-related operations through a web-based system.",
    category: "Backend / Management System",
    techStack: ["Spring Boot", "Java", "HTML", "CSS"],
    href: "/projects/hotel-administration-system",
    github: "https://github.com/ShineBo/Hotel_Administration_Spring_Boot_Project_LAP",
    featured: false,
    overview:
      "This project focuses on hotel administration and management workflows. It is a good example of applying backend and web development concepts to a structured management system.",
    highlights: [
      "Created a system around hotel administration workflows",
      "Practiced backend-oriented application development",
      "Connected academic learning with a real-world management system scenario",
    ],
  },
  {
    title: "Country Search",
    slug: "country-search",
    description:
      "A TypeScript-based country search application that allows users to search and explore country information.",
    category: "Frontend Development",
    techStack: ["TypeScript", "React", "API", "CSS"],
    href: "/projects/country-search",
    github: "https://github.com/ShineBo/Country-Search",
    featured: false,
    overview:
      "Country Search is a frontend project focused on search, filtering, and displaying country-related information. It demonstrates API-based frontend development and TypeScript usage.",
    highlights: [
      "Built a searchable frontend application with TypeScript",
      "Practiced working with structured external data",
      "Focused on clean UI, search behavior, and data display",
    ],
  },
  {
    title: "Noodle Town",
    slug: "noodle-town",
    description:
      "A restaurant-themed frontend website project created as a web fundamentals final project.",
    category: "Frontend Development",
    techStack: ["JavaScript", "HTML", "CSS"],
    href: "/projects/noodle-town",
    github: "https://github.com/ShineBo/Noodle-Town",
    featured: false,
    overview:
      "Noodle Town is a restaurant-themed website project that demonstrates early frontend development skills, including page layout, styling, navigation, and user-facing design.",
    highlights: [
      "Created a restaurant-style website interface",
      "Practiced HTML, CSS, and JavaScript fundamentals",
      "Built as an academic web fundamentals project",
    ],
  },
  {
    title: "Movie Browser",
    slug: "movie-browser",
    description:
      "A movie browsing web application focused on displaying movie information through a frontend interface.",
    category: "Frontend Development",
    techStack: ["JavaScript", "API", "HTML", "CSS"],
    href: "/projects/movie-browser",
    github: "https://github.com/ShineBo/moviesbrowser",
    featured: false,
    overview:
      "Movie Browser is a frontend project for exploring and displaying movie information. It is useful for showing API usage, frontend state handling, and dynamic content rendering.",
    highlights: [
      "Built a movie browsing interface",
      "Practiced API data fetching and rendering",
      "Improved frontend layout and interactive UI skills",
    ],
  },
  {
    title: "Weather App",
    slug: "weather-app",
    description:
      "A weather application that displays weather information through a simple frontend interface.",
    category: "Frontend Development",
    techStack: ["JavaScript", "Weather API", "HTML", "CSS"],
    href: "/projects/weather-app",
    github: "https://github.com/ShineBo/weather_app",
    featured: false,
    overview:
      "This weather app is a frontend project focused on API data fetching and displaying weather information clearly to users.",
    highlights: [
      "Used API data to display weather information",
      "Practiced asynchronous JavaScript and dynamic UI updates",
      "Built a simple and useful frontend application",
    ],
  },
  {
    title: "Login and Registration Full-Stack App",
    slug: "login-registration-full-stack-app",
    description:
      "A login and registration project with separate frontend and Express backend API repositories.",
    category: "Full-Stack Development",
    techStack: ["React", "Next.js", "Express", "JavaScript"],
    href: "/projects/login-registration-full-stack-app",
    github: "https://github.com/ShineBo/Express_Backend_Login_Registration_with_API",
    featured: false,
    overview:
      "This project demonstrates authentication-related learning through a frontend application connected to an Express backend API. It focuses on login, registration, and client-server communication.",
    highlights: [
      "Created separate frontend and backend projects",
      "Practiced authentication flow concepts",
      "Connected frontend forms with backend API endpoints",
    ],
  },
  {
    title: "Nike Website UI Clone",
    slug: "nike-website-ui-clone",
    description:
      "A Nike-inspired website UI clone focused on frontend layout, styling, and responsive design practice.",
    category: "UI Practice",
    techStack: ["JavaScript", "Tailwind CSS", "HTML", "CSS"],
    href: "/projects/nike-website-ui-clone",
    github: "https://github.com/ShineBo/Nike-Website",
    featured: false,
    overview:
      "This project is a UI practice project inspired by Nike-style website design. It focuses on visual layout, spacing, responsive design, and frontend styling.",
    highlights: [
      "Practiced building a modern landing page interface",
      "Focused on layout, spacing, and visual hierarchy",
      "Improved frontend styling and responsive design skills",
    ],
  },
  {
    title: "Java Flappy Bird",
    slug: "java-flappy-bird",
    description:
      "A Java game project inspired by Flappy Bird, focused on game logic, GUI behavior, and object-oriented programming.",
    category: "Java / Game Development",
    techStack: ["Java", "OOP", "GUI"],
    href: "/projects/java-flappy-bird",
    github: "https://github.com/ShineBo/FlappyBird",
    featured: false,
    overview:
      "Java Flappy Bird is a game development project that applies object-oriented programming, event handling, and GUI concepts in Java.",
    highlights: [
      "Built game logic using Java",
      "Practiced object-oriented programming concepts",
      "Worked with GUI/event-based application behavior",
    ],
  },
  {
    title: "Java GUI Project",
    slug: "java-gui-project",
    description:
      "A Java desktop GUI project focused on interface design and object-oriented application structure.",
    category: "Java / Desktop Application",
    techStack: ["Java", "OOP", "GUI"],
    href: "/projects/java-gui-project",
    github: "https://github.com/ShineBo/GUI_Project",
    featured: false,
    overview:
      "This Java GUI project demonstrates desktop application development fundamentals, including interface structure, user interaction, and object-oriented programming.",
    highlights: [
      "Created a desktop-style Java GUI application",
      "Practiced object-oriented design and implementation",
      "Improved understanding of event-driven programming",
    ],
  },
]