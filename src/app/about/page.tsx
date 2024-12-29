import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "./components/about-hero"
import { WhoShouldAttend } from "./components/who-should-attend"
import { HackExperience } from "./components/hack-experience"
import { Format } from "./components/format"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <AboutHero />
      <WhoShouldAttend />
      <HackExperience />
      <Format />
    </main>
  )
}
