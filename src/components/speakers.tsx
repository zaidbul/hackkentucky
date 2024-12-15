import Image from 'next/image'

export function Speakers() {
  const speakers = [
    { name: "Jane Doe", role: "CTO at TechCorp", image: "/placeholder.svg?height=400&width=400" },
    { name: "John Smith", role: "AI Researcher", image: "/placeholder.svg?height=400&width=400" },
    { name: "Alice Johnson", role: "Startup Founder", image: "/placeholder.svg?height=400&width=400" },
    { name: "Bob Williams", role: "Blockchain Expert", image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <section id="speakers" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-primary">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

