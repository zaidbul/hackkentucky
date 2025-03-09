import Image from "next/image";
import Link from "next/link";

const pastHackathons = [
  {
    id: "spring25",
    name: "HackKentucky 2025",
    date: "February 21-23, 2025",
    location: "Louisville, KY",
    participants: 150,
    projects: 33,
    image: "/spring2025.png",
    link: "/spring25"
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container py-30 md:py-48">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            HackKentucky
          </h1>
          <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Building Kentucky&apos;s next generation of tech innovators
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link 
              href="/buildnchill25"
              className="inline-flex items-center rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🎉</span>
              Join us for Build & Chill on March 22nd
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="w-full py-16 flex flex-col items-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Past Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastHackathons.map((hackathon) => (
              <Link href={hackathon.link} key={hackathon.id}>
                <div 
                  key={hackathon.id}
                  className="rounded-lg border bg-muted p-6 transition-all hover:shadow-lg"
                >
                  <div className="aspect-video rounded-md bg-muted mb-4 relative overflow-hidden">
                    <Image 
                      src={hackathon.image} 
                      alt={hackathon.name} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hackathon.name}</h3>
                  <p className="text-muted-foreground mb-4">{hackathon.date}</p>
                  <p className="text-muted-foreground mb-4">{hackathon.location}</p>
                  <div className="flex justify-between text-sm">
                    <span>{hackathon.participants} Participants</span>
                    <span>{hackathon.projects} Projects</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 