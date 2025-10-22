"use client";

import { Button } from "@/components/ui/button";

export default function TouchlineCreatorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-[#F2EDE4]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url(&apos;/hero.png&apos;)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#363636]/80"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-4 py-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-[#F37021]">
                  The AfroBall Touchline Creators Initiative
                </h1>
                <p className="max-w-[600px] mx-auto lg:mx-0 text-[#F2EDE4] text-base md:text-lg lg:text-xl">
                  The Future Voice of African Football, Club by Club
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                  Join the Initiative
                </Button>
                <Button size="lg" variant="outline" className="border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-[#F2EDE4] bg-[#363636]/80 w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
            {/* Circular Video Player */}
            <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-last">
              <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full border-4 border-[#F37021] overflow-hidden">
                <video 
                  src="/ghana.mp4" 
                  className="h-full w-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                AfroBall Connect is launching the Touchline Creators program — a dynamic initiative that empowers passionate, knowledgeable, and media-savvy supporters to become the official digital voice of their clubs.
              </p>
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                These are not just superfans — they are storytellers, media producers, and emerging football journalists, playing a key role in driving club visibility, deepening fan engagement, and eventually transitioning into official press officer roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Responsibilities Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#F37021] px-3 py-1 text-sm text-[#363636] mx-auto">Role & Responsibilities</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Touchline Creator Activities
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Touchline Creators will represent their clubs across the AfroBall ecosystem and beyond by:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">🎙</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Match Previews</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Tactical insights, expected lineups, storylines to watch.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">📽</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Match Reviews</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Honest fan-centric breakdowns of each game&apos;s events and turning points.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">👤</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Player Spotlights</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Weekly video segments or blogs profiling individual players — strengths, weaknesses, backstory.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">📰</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Club News</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Transfers, injuries, training insights, lineup leaks (where permitted).
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">🎤</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Interviews</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Authentic voices from the stands, and when granted access, from the pitch.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="text-2xl mb-4">📱</div>
              <h3 className="text-lg font-bold font-heading text-[#F37021] mb-2">Social Media</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Maintaining their own public-facing channels, building an audience, and becoming micro-influencers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership & Monetization Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4] mx-auto lg:mx-0">Ownership & Monetization</div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                  Creator Ownership Model
                </h2>
                <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg">
                  Touchline Creators will own their content and personal brand. AfroBall Connect will:
                </p>
              </div>
              <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-start">
                  <div className="mr-3 h-2 w-2 rounded-full bg-[#F37021] mt-2"></div>
                  <span>Feature their best work across club microsites and the AfroBall platform</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 h-2 w-2 rounded-full bg-[#F37021] mt-2"></div>
                  <span>Embed their YouTube, TikTok, Instagram and Twitter content directly</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 h-2 w-2 rounded-full bg-[#F37021] mt-2"></div>
                  <span>Allow creators to pursue independent sponsorships, keeping 100% of deals they generate</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 h-2 w-2 rounded-full bg-[#F37021] mt-2"></div>
                  <span>If AfroBall Connect secures sponsorship on their behalf, we retain a 20% commission</span>
                </li>
              </ul>
              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg italic">
                This hybrid model enables creators to monetize their talent while building credibility in the football media space.
              </p>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg mt-6 lg:mt-0">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold font-heading text-[#F37021] mb-2">100% Independent Sponsorships</h3>
                <p className="text-[#4A4A4A] text-sm">
                  Creators keep all revenue from independently secured deals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Content Schedule Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#F37021] px-3 py-1 text-sm text-[#363636] mx-auto">Weekly Content Schedule</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Recommended Content Calendar
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                A structured approach to consistent, high-quality content creation
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#F37021]/30">
                    <th className="text-left p-4 font-bold font-heading text-[#F37021]">Day</th>
                    <th className="text-left p-4 font-bold font-heading text-[#F37021]">Content Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Monday</td>
                    <td className="p-4">🔁 Match Review from weekend game (video/blog) + player ratings</td>
                  </tr>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Tuesday</td>
                    <td className="p-4">🧠 Tactical Breakdown or Training Insights (if available)</td>
                  </tr>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Wednesday</td>
                    <td className="p-4">🎙 Interview with a player, coach, or fan (or commentary vlog)</td>
                  </tr>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Thursday</td>
                    <td className="p-4">⚽️ Player Spotlight: Deep dive into one squad member</td>
                  </tr>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Friday</td>
                    <td className="p-4">📣 Match Preview: Opponent breakdown, predictions</td>
                  </tr>
                  <tr className="border-b border-[#F37021]/10">
                    <td className="p-4 font-medium text-[#F37021]">Saturday</td>
                    <td className="p-4">🧵 Live Commentary, social updates, short-form content (matchday vibes)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#F37021]">Sunday</td>
                    <td className="p-4">🎥 Fan reactions, post-match interviews, matchday wrap-up vlog</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg order-last lg:order-first mt-6 lg:mt-0">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold font-heading text-[#F37021] mb-2">Career Pathway</h3>
                <p className="text-[#4A4A4A] text-sm">
                  From Creator to Press Officer
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-3">
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                  Future Opportunities
                </h2>
                <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                  Touchline Creators aren&apos;t just content contributors — they&apos;re building a portfolio. As AfroBall Connect grows and clubs develop their digital media departments, top-performing creators will be fast-tracked to become official Club Press Officers.
                </p>
                <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                  This pathway gives young African football enthusiasts a professional gateway into sports journalism, media production, and public relations — an industry that&apos;s rapidly growing across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#F37021] px-3 py-1 text-sm text-[#363636] mx-auto">Strategic Benefits</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Why This Initiative Matters
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                The Touchline Creators program delivers significant value to clubs, fans, and the African football ecosystem
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">✅</div>
                <h3 className="text-lg font-bold font-heading text-[#F37021]">Scalable Local Content Engine</h3>
              </div>
              <p className="text-sm text-[#F2EDE4]/80">
                Authentic stories told by real fans, every day, across all clubs.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">✅</div>
                <h3 className="text-lg font-bold font-heading text-[#F37021]">Talent Development Pipeline</h3>
              </div>
              <p className="text-sm text-[#F2EDE4]/80">
                Cultivating the next generation of African football journalists.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">✅</div>
                <h3 className="text-lg font-bold font-heading text-[#F37021]">Enhanced Club Identity</h3>
              </div>
              <p className="text-sm text-[#F2EDE4]/80">
                Each club gets a human voice and unique media presence.
              </p>
            </div>
            <div className="bg-[#F2EDE4]/10 p-6 rounded-lg border border-[#F37021]/20 hover:border-[#F37021]/40 transition-all">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">✅</div>
                <h3 className="text-lg font-bold font-heading text-[#F37021]">Built-in Sponsorship Inventory</h3>
              </div>
              <p className="text-sm text-[#F2EDE4]/80">
                Brand-ready media properties with known engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Ready to Become a Touchline Creator?
              </h2>
              <p className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
                Join the movement that&apos;s shaping the future of African football media. Apply now to become the official voice of your club.
              </p>
              <div className="mt-6">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                  <a href="mailto:info@afroballconnect.com" className="flex items-center justify-center">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#F37021] px-3 py-1 text-sm text-[#363636] mx-auto">Newsletter</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Stay Updated on the Touchline Initiative
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
                Subscribe to get the latest updates about the Touchline Creators program, new club partnerships, and creator success stories.
              </p>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 border border-[#F37021] hover:border-[#F37021]/80 transition-all duration-200"
                  asChild
                >
                  <a
                    href="https://afroballconnect.kit.com/6273feb6f2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join List
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}