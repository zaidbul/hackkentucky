import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Speakers } from "@/components/speakers"
import { Sponsors } from "@/components/sponsors"
import { Rules } from "@/components/rules"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Rules />
    </main>
  )
}

