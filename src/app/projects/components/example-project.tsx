export function ExampleProject() {
  return (
    <section id="format" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Example Project Format
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">Problem Statement</h3>
              <p className="text-gray-300">
                Create an innovative solution to help college students better manage their mental health 
                and academic stress. The solution should focus on early intervention, peer support, and 
                accessible resources that can be easily integrated into a student&apos;s daily routine.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">Requirements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mobile-first design that works across all devices</li>
                <li>Implementation of evidence-based mental health practices</li>
                <li>Privacy-focused architecture and data handling</li>
                <li>Integration with existing campus resources</li>
                <li>Anonymous peer support features</li>
                <li>Stress tracking and visualization</li>
                <li>Customizable self-care reminders and routines</li>
                <li>Resource directory for mental health services</li>
                <li className="text-purple-200">Bonus: AI-powered mood analysis</li>
                <li className="text-purple-200">Bonus: Integration with academic calendars for stress prediction</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">Prize</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>$250 cash prize</li>
                <li>Mentorship session with industry experts</li>
                <li>Featured on our social media channels</li>
              </ul>
            </div>

            <div className="flex gap-2 flex-wrap">
              {['Health', 'Education', 'Social Impact'].map((track) => (
                <span 
                  key={track}
                  className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-200 border border-purple-500/30"
                >
                  {track}
                </span>
              ))}
            </div>

            <div className="pt-4 flex justify-center">
              <a
                href="https://kycombinator.typeform.com/hackkyproject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Submit Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 