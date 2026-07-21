import type { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/skills", "/education", "/experience", "/activities", "/contact"]
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }))
  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
