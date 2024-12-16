import Image from 'next/image'
import { speakers } from '@/data/speakers'
import Link from 'next/link'

export function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <Link
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 hover:text-primary underline"
              >
                {speaker.name}
              </Link>
              <p className="text-muted-foreground text-center mb-2">{speaker.role}</p>
              {!speaker.confirmed && (
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full mb-3">
                  Pending
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}