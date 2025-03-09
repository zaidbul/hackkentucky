import { Badge } from "@/components/ui/badge"

const schedule = [
  { time: "9:00 AM", event: "Doors Open", description: "Welcome to Build 'n' Chill!" },
  { time: "9:00 AM", event: "Breakfast", description: "Chick-Fil-A", icon: "🍳" },
  { time: "10:00 AM", event: "How to GitHub", description: "Learn Git fundamentals", icon: "🐙" },
  { time: "11:00 AM", event: "How to Vercel", description: "Deploy your projects", icon: "▲" },
  { time: "12:00 PM", event: "TBD - How to Sell?", description: "Pitch your ideas", icon: "💡" },
  { time: "1:00 PM", event: "Lunch", description: "", icon: "🍽️" },
  { time: "1:30 PM", event: "Connect 4 Tournament", description: "Show off your strategic skills", icon: "🎮" },
  { time: "3:00 PM", event: "Show & Tell", description: "Share your creations", icon: "🎯" },
  { time: "5:00 PM", event: "Grilling", description: "End the day with good food", icon: "🍖" },
]

const features = [
  { icon: "💻", text: "Open workspace for hacking & collaboration" },
  { icon: "🎤", text: "Informal project demos (if you feel like sharing)" },
  { icon: "🎵", text: "Chill vibes, great music, and casual networking" },
  { icon: "🍕", text: "Free snacks, drinks & comfy seating" },
  { icon: "💭", text: "Breakout corners for discussions & brainstorming" },
]

export default function BuildAndChillPage() {
  return (
    <main className="container max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Afterparty Event
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
          Build &apos;n&apos; Chill
        </h1>
        <p className="text-xl text-muted-foreground">
          Code, Create & Collaborate
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none mb-16">
        <p className="text-lg">
          After the adrenaline rush of the hackathon, keep the momentum going at <strong>Build &apos;n&apos; Chill</strong>
          —a relaxed, open-ended space to experiment, collaborate, and refine your projects. Whether you&apos;re debugging 
          last-minute features, brainstorming your next big idea, or just vibing with fellow makers, this is the place 
          to unwind and keep building.
        </p>
        <p className="text-lg font-medium">
          No pitches, no pressure—just code, creativity, and good company.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Who&apos;s It For?</h2>
        <ul className="space-y-3 list-none pl-0">
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span>
            Hackathon participants who aren&apos;t ready to stop building
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span>
            Developers, designers, and founders looking to connect
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span>
            Anyone who loves creating in a low-stakes, fun environment
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Schedule</h2>
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card"
            >
              <div className="min-w-[100px] font-mono">{item.time}</div>
              <div>
                <div className="font-semibold flex items-center gap-2">
                  {item.icon && <span>{item.icon}</span>}
                  {item.event}
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}