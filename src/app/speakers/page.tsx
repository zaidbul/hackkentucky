import { SiteHeader } from "@/components/site-header"
import { Speakers } from "./speakers"

export default function SpeakersPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1a1a2e] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Speakers & Industry Leaders
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 mb-8">
              Connect with accomplished tech leaders who started right here in Kentucky.
              Our speakers have gone on to shape the future at major tech companies, 
              while maintaining strong ties to the local community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>9+ Industry Speakers</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span>Top Tech Companies</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Interactive Q&A Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Speakers />
    </main>
  )
}

