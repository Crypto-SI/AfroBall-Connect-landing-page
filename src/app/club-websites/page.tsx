"use client";

import { Button } from "@/components/ui/button";

export default function ClubWebsitesPage() {
  
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
                  Club Website Development
                </h1>
                <p className="max-w-[600px] mx-auto lg:mx-0 text-[#F2EDE4] text-base md:text-lg lg:text-xl">
                  Transformative microsites for your club&apos;s digital presence. Mobile-optimized websites that serve as the official digital home for your club, powered and managed by AfroBall Connect.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-[#F2EDE4] bg-[#363636]/80 w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
            {/* Mobile Website Mockup */}
            <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-last">
              <div className="relative w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] bg-[#F2EDE4] rounded-3xl shadow-2xl overflow-hidden border-4 border-[#F37021]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F37021] to-[#363636] opacity-90"></div>
                <div className="absolute inset-4 flex flex-col">
                  <div className="h-8 bg-[#363636] rounded-t-2xl mb-4"></div>
                  <div className="flex-1 bg-[#363636] rounded-b-2xl p-4 overflow-hidden">
                    <div className="space-y-3">
                      <div className="h-4 bg-[#F37021] rounded w-3/4"></div>
                      <div className="h-3 bg-[#999999] rounded w-full"></div>
                      <div className="h-3 bg-[#999999] rounded w-5/6"></div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-20 bg-[#F37021] rounded"></div>
                        <div className="h-20 bg-[#F37021] rounded"></div>
                        <div className="h-20 bg-[#F37021] rounded"></div>
                        <div className="h-20 bg-[#F37021] rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4] mx-auto">Key Features</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                What Each Team Microsite Offers
              </h2>
              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Rich-media microsites tailored to each club&apos;s identity and community.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full justify-center">
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Match Previews & Highlights</h3>
              <p className="text-sm text-[#999999]">
                Directly integrated from AfroBall Connect&apos;s HD streams, including interviews and replays.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Merchandise & Ticketing</h3>
              <p className="text-sm text-[#999999]">
                Shop official kits and buy match tickets seamlessly from the site.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📣</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Fan-Driven Content</h3>
              <p className="text-sm text-[#999999]">
                Blogs, matchday vlogs, fan polls, and community updates.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Fixtures & Results</h3>
              <p className="text-sm text-[#999999]">
                Real-time updates on upcoming matches and current standings.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">👕</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Player & Squad Profiles</h3>
              <p className="text-sm text-[#999999]">
                Full rosters with bios, stats, and media galleries.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🎶</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Team Anthem Audio</h3>
              <p className="text-sm text-[#999999]">
                Optional autoplay feature for club anthems and chants.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Sponsor Showcases</h3>
              <p className="text-sm text-[#999999]">
                Dedicated space for local and international sponsors.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Social Media Integration</h3>
              <p className="text-sm text-[#999999]">
                Live feeds and link-outs to official club channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Revenue Sharing Model
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                AfroBall Connect is committed to creating mutually beneficial digital ecosystems with our club partners.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="bg-[#F2EDE4]/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Merchandise Profits</span>
                    <span className="text-[#F37021] font-bold">50%</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-1">Direct share of all merchandise sales</p>
                </div>
                
                <div className="bg-[#F2EDE4]/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Ticketing Revenue</span>
                    <span className="text-[#F37021] font-bold">80%</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-1">After platform fees from online sales</p>
                </div>
                
                <div className="bg-[#F2EDE4]/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">UGC Content Sponsorships</span>
                    <span className="text-[#F37021] font-bold">70%</span>
                  </div>
                  <p className="text-sm text-[#999999] mt-1">Shared with clubs and content creators</p>
                </div>
              </div>
              
              <p className="text-sm text-[#F2EDE4]/80 mt-6">
                This system ensures that clubs are not just featured — they profit directly from their digital presence.
              </p>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg mt-6 lg:mt-0">
              <div className="relative w-full h-64 sm:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💰</div>
                    <h3 className="text-2xl font-bold text-[#F37021] mb-2">Mutual Success</h3>
                    <p className="text-sm text-[#F2EDE4]/80">Profit sharing for sustainable growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#F37021] px-3 py-1 text-sm text-[#363636] mx-auto">Strategic Benefits</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Why Choose AfroBall Connect Microsites?
              </h2>
              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Building comprehensive, tech-forward fan ecosystems that fuel financial sustainability for clubs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold font-heading text-[#363636] mb-3">Deepened Fan Loyalty</h3>
              <p className="text-sm text-[#999999]">
                Fans get an official, modern digital home that reflects the pride of their club, creating stronger connections and engagement.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold font-heading text-[#363636] mb-3">New Revenue Streams</h3>
              <p className="text-sm text-[#999999]">
                Monetize online attention and commerce through merchandise, ticketing, and sponsor exposure, creating sustainable income.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold font-heading text-[#363636] mb-3">Club Autonomy</h3>
              <p className="text-sm text-[#999999]">
                Each club has input in the design and content strategy of their microsite, ensuring it reflects their unique identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full max-w-4xl">
            <div className="space-y-3 mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Ready to Transform Your Club&apos;s Digital Presence?
              </h2>
              <p className="text-[#F2EDE4] text-base md:text-lg lg:text-xl">
                These state-of-the-art mobile websites are provided to each GPL club free of charge while they remain in the league.
              </p>
              <div className="mt-8 space-y-4">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                  <a href="mailto:info@afroballconnect.com" className="flex items-center justify-center w-full">
                    Contact Our Team
                  </a>
                </Button>
                <p className="text-sm text-[#F2EDE4]/80">
                  For partnership opportunities, email us at <a href="mailto:info@afroballconnect.com" className="text-[#F37021] hover:underline">info@afroballconnect.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}