export function WhoShouldAttend() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Who Should Attend?</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re a seasoned coder or just starting your tech journey, HackKentucky 
              welcomes all who are passionate about technology and innovation.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Computer Science and Engineering students looking to apply their skills</li>
              <li>Design students interested in creating user experiences</li>
              <li>Business students wanting to develop entrepreneurial tech solutions</li>
              <li>First-time hackers eager to learn and explore</li>
              <li>Experienced developers ready to mentor and lead</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 