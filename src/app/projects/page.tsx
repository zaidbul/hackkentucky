import { SiteHeader } from "@/components/site-header"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { ExampleProject } from "./components/example-project"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <ExampleProject />
      <Projects />
    </main>
  )
}