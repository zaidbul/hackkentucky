import { SiteHeader } from "@/app/components/site-header"
import { Hero } from "@/app/components/hero"
import { About } from "@/app/components/about"
import { Schedule } from "@/app/components/schedule"
import { Speakers } from "@/app/components/speakers"
import { Sponsors } from "@/app/components/sponsors"
import { Rules } from "@/app/components/rules"

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

