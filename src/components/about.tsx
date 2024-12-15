export function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About KYCombinator</h2>
        <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
          KYCombinator is Kentucky&apos;s premier hackathon, bringing together the brightest minds in technology and innovation. Join us for 48 hours of coding, creativity, and collaboration!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">500+ Participants</h3>
            <p>From universities across the Midwest</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">$50,000 in Prizes</h3>
            <p>Rewarding innovation and creativity</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Industry Leaders</h3>
            <p>Network with top tech companies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

