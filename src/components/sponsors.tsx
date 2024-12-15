import Image from 'next/image'

export function Sponsors() {
  const sponsors = [
    { name: "TechCorp", tier: "Platinum", logo: "/placeholder.svg?height=200&width=200" },
    { name: "InnovateNow", tier: "Gold", logo: "/placeholder.svg?height=200&width=200" },
    { name: "FutureTech", tier: "Gold", logo: "/placeholder.svg?height=200&width=200" },
    { name: "CodeMasters", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
    { name: "DataDrive", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
    { name: "CloudNine", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="sponsors" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
              <p className="text-primary">{sponsor.tier} Sponsor</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

