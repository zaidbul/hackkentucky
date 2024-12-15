import { Clock } from 'lucide-react'

export function Schedule() {
  const scheduleItems = {
    Friday: [
      { time: "4:00 PM", event: "Doors Open" },
      { time: "5:00 PM", event: "Welcome, Introduction, Explanation of Event, Bounties" },
      { time: "6:00 PM", event: "Dinner (Sponsor TBD)" },
      { time: "8:00 PM", event: "Team Formation Deadline" },
      { time: "10:10 PM", event: "10 minute Party w/ Food & Refreshments" },
      { time: "11:00 PM", event: "Story Doors Locked - Quiet Time" },
    ],
    Saturday: [
      { time: "7:00 AM", event: "Story Doors Open" },
      { time: "7:30 AM", event: "Breakfast is served" },
      { time: "11:00 AM", event: "Speaker Series 1: Lyft / Swell" },
      { time: "1:00 PM", event: "Lunch Time!" },
      { time: "1:00 PM", event: "Speaker Series 2: Facebook Software Engineer" },
      { time: "1:40 PM", event: "AWS Solution Architect" },
      { time: "2:20 PM", event: "Apple Principal Software Engineer" },
      { time: "3:00 PM", event: "Netflix Software Engineer" },
      { time: "3:40 PM", event: "Google" },
      { time: "4:20 PM", event: "Microsoft Azure Engineer" },
      { time: "7:00 PM", event: "Dinner Time (Sponsor TBD)!" },
      { time: "10:10 PM", event: "10 minute Dance Party" },
      { time: "11:00 PM", event: "Story Doors Locked - Quiet Time" },
    ],
    Sunday: [
      { time: "7:00 AM", event: "Story Doors Open" },
      { time: "7:30 AM", event: "Breakfast is served" },
      { time: "10:10 AM", event: "10 minute warning" },
      { time: "10:20 AM", event: "Judging Begins for Bounty" },
      { time: "11:00 AM", event: "Judging and presentations for final prizes" },
      { time: "12:00 PM", event: "Final Presentation" },
    ],
  }

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800 dark:text-purple-200 glow">
          Event Schedule
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(scheduleItems).map(([day, items]) => (
            <div key={day} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400 glow">{day}</h3>
              {items.map((item, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-purple-800 dark:text-purple-200">{item.time}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.event}</p>
                    </div>
                  </div>
                  {index < items.length - 1 && (
                    <div className="w-0.5 h-4 bg-purple-300 dark:bg-purple-700 ml-6 my-2"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

