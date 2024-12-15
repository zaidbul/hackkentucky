import { SiteHeader } from "@/app/components/site-header"
import { Schedule } from "@/app/components/schedule"

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="pt-20 bg-gradient-to-b from-purple-300 to-purple-100 dark:from-purple-700 dark:to-purple-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900 dark:text-white glow">
            Hackathon Schedule
          </h1>
          <p className="text-xl text-purple-800 dark:text-purple-200 glow">
            Your guide to 48 hours of innovation and excitement
          </p>
        </div>
      </div>
      <Schedule />
    </main>
  )
}

