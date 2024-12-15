export function Rules() {
  const rules = [
    "All code must be written during the hackathon",
    "Teams can consist of 1-4 members",
    "Use of open source libraries and APIs is allowed",
    "Projects must be submitted by the designated deadline",
    "Respect the venue and other participants",
    "Have fun and learn!",
  ]

  return (
    <section id="rules" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Hackathon Rules</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto space-y-4">
          {rules.map((rule, index) => (
            <li key={index} className="text-lg">{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

