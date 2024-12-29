import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/app/components/hero"
import { About } from "@/app/components/about"
import { HowItWorks } from "@/app/components/howitworks" 
import { Schedule } from "@/app/components/schedule"
import { Speakers } from "@/app/components/speakers"
import { Sponsors } from "@/components/sponsors"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <HowItWorks />
      <Schedule />
      <Speakers />
      <Sponsors />
    </main>
  )
}
