export function Format() {
  const formatSteps = [
    {
      title: "Form your team",
      description: "Build a team of 2-5 members with complementary skills. Don't have a team? Join our team formation event!"
    },
    {
      title: "Select your problem",
      description: "Choose from company-sponsored challenges or bring your own innovative idea to life."
    },
    {
      title: "Build a solution",
      description: "Work together over the weekend to create a working prototype of your solution."
    },
    {
      title: "May the best solution win",
      description: "Present your solution to our judges and compete for prizes!"
    }
  ]

  const presentationRequirements = [
    {
      title: "Live Demo",
      description: "Show your product in action with a live demonstration of key features.",
      icon: "🎮"
    },
    {
      title: "Slide Deck",
      description: "Present a comprehensive overview including:",
      items: [
        "Problem - What issue are you solving?",
        "Solution - How does your project address it?",
        "Outcome - What are the results and benefits?",
        "How it works - Technical implementation",
        "Team - Who contributed what?"
      ],
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Format Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Hackathon Format</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {formatSteps.map((step, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Presentation Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Presentation Requirements</h2>
            <div className="space-y-6">
              {presentationRequirements.map((req, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl">{req.icon}</span>
                    <h3 className="text-xl font-semibold">{req.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{req.description}</p>
                  {req.items && (
                    <ul className="space-y-2 list-disc pl-6">
                      {req.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 