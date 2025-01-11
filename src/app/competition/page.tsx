import { SiteHeader } from "@/components/site-header"
import { Hero } from "./components/hero"
import { Format } from "./components/format"
import { Projects } from "./components/projects"

export default function PrizesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Format />
      <Projects />
    </main>
  )
}