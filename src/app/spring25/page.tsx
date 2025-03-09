import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/app/spring25/components/hero"
import { About } from "@/app/spring25/components/about"
import { HowItWorks } from "@/app/spring25/components/howitworks" 
import { Schedule } from "@/app/spring25/components/schedule"
import { Speakers } from "@/app/spring25/components/speakers"
import { Sponsors } from "@/app/spring25/components/sponsors"
import { StudentsSection } from "@/app/spring25/components/students-section"
import { EmployersSection } from "@/app/spring25/components/employers-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <StudentsSection />
      <EmployersSection />
      <About />
      <HowItWorks />
      <Schedule />
      <Speakers />
      <Sponsors />
    </main>
  )
}
