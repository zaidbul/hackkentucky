import { Clock, MapPin } from 'lucide-react'
import { scheduleItems } from '@/data/schedule'
import { SiteHeader } from "@/components/site-header"

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

      {Object.entries(scheduleItems).map(([day, items]) => (
        <section key={day} className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-purple-800 dark:text-purple-200 text-center">{day}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {items.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-purple-800 dark:text-purple-200">{item.time}</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.event}</h3>
                      {item.location && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.details && (
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      )}
                      {item.subEvents && (
                        <div className="mt-4 space-y-4 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                          {item.subEvents.map((subEvent, subIndex) => (
                            <div key={subIndex} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <p className="font-medium text-gray-900 dark:text-gray-100">{subEvent.event}</p>
                                <p className="text-sm text-purple-600 dark:text-purple-400">{subEvent.time}</p>
                              </div>
                              {subEvent.speaker && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">{subEvent.speaker}</p>
                              )}
                              {subEvent.details && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">{subEvent.details}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

