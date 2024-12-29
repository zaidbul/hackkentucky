const tracks = [
  {
    icon: "🐦",
    name: "Louisville Track",
    description: "Solutions focused on improving Louisville's community and infrastructure"
  },
  {
    icon: "🦄",
    name: "Startup Track",
    description: "Innovative solutions with commercial potential"
  },
  {
    icon: "🌎",
    name: "Environmental Track",
    description: "Projects addressing environmental challenges and sustainability"
  },
  {
    icon: "🏥",
    name: "Health Track",
    description: "Solutions for healthcare and wellness challenges"
  },
  {
    icon: "💥",
    name: "High School Track",
    description: "Dedicated track for high school innovators"
  },
  {
    icon: "❓",
    name: "Problem Track",
    description: "Tackle sponsored problems with dedicated bounties"
  }
]

export function PrizeSections() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Grand Prize Section */}
          <div className="text-center">
            <div className="inline-block bg-card p-8 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold mb-4">$2,500 Grand Prize</h2>
              <p className="text-xl text-muted-foreground">
                Track winners compete in the finals for the grand prize
              </p>
              <div className="mt-4 text-muted-foreground">
                Judges - To Be Announced
              </div>
            </div>
          </div>

          {/* Track Selection Process */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Competition Tracks</h2>
            <p className="text-center text-muted-foreground mb-8">
              Track winners get automatic bids to the finals. Additional wildcard spots available for outstanding projects!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {tracks.map((track) => (
                <div key={track.name} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{track.icon}</span>
                    <h3 className="text-xl font-semibold">{track.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Selection */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Problem Selection</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Teams can choose between:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Self-identified problems within their chosen track</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sponsored problems with potential bounty rewards</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Sponsored problems may come with additional prizes for the best solutions, on top of 
                qualifying for track winners and the grand prize competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 