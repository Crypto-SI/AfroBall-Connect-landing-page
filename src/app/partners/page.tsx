"use client";

import { PitchLayout } from '@/components/pitch-layout';
import { PartnerInformation } from '@/components/partner-information';
import { DEFAULT_FORMATION, Partner, Position } from '@/types/formations';
import { useState, useCallback, useEffect } from 'react';

// Define Carl Anthony as a striker partner
const carlAnthonyPartner: Partner = {
  id: "carl-anthony",
  name: "Carl Anthony",
  logo: "/breezyafro.png",
  description: "Founder with expertise in Computer Science and Cryptocurrency. Carl has a deep passion for football and is also the founder of Affillia Sports, bringing technical innovation and sports industry knowledge to our partnership team.",
  website: "https://affilliasports.com",
  position: "st1" // Striker position 1
};

// Define Poku Kesse as a striker partner
const pokuKessePartner: Partner = {
  id: "poku-kesse",
  name: "Poku Kesse",
  logo: "/pkafro.png",
  description: "Founder born in Kumasi, a British-educated fitness professional, former semi-pro footballer, and close protection specialist. Poku is committed to bringing African football to the world through his diverse expertise and passion for the sport.",
  position: "st2" // Striker position 2
};

export default function PartnersPage(): React.JSX.Element {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePartnerSelect = useCallback((partner: Partner | null, positionId: string) => {
    setSelectedPartner(partner);
    
    // Find the position details from the formation
    const position = DEFAULT_FORMATION.positions.find(p => p.id === positionId);
    setSelectedPosition(position || null);
    
    // Removed automatic website opening - website link is now only available in the description area
  }, []);

  const handlePartnerHover = useCallback((partner: Partner | null) => {
    // Could be used for showing partner details in a tooltip or sidebar
    // For now, we'll just handle the basic hover state
  }, []);
  return (
    <div>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#F37021] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-[#F2EDE4]"
        aria-labelledby="hero-title"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="African football stadium background"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#363636]/80"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4 py-4 text-center">
            <div className="space-y-2">
              <h1 
                id="hero-title"
                className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-[#F37021]"
              >
                Our Partners
              </h1>
              <p className="max-w-[800px] mx-auto text-[#F2EDE4] text-base md:text-lg lg:text-xl">
                Meet the strategic partners who help us bring African football to the world. 
                Together, we're building the ultimate destination for African football fans everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Pitch Layout Section */}
      <main 
        id="main-content"
        className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Two-column layout for desktop, stacked for mobile */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left column: Title, subtitle, and partner information */}
            <div className="lg:w-1/3 flex flex-col">
              <div className="space-y-4 mb-6 lg:mb-8">
                <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4]">
                  Partnership Formation
                </div>
                <h2
                  id="formation-title"
                  className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-[#F37021]"
                >
                  Our Team Formation
                </h2>
                <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg/relaxed">
                  Like a championship team, our partners are strategically positioned to deliver the best African football experience.
                  Click on any position to learn more about the partnership opportunities.
                </p>
              </div>
              
              {/* Partner Information Display */}
              <PartnerInformation
                position={selectedPosition}
                partner={selectedPartner}
              />
            </div>
            
            {/* Right column: Pitch Layout Component */}
            <div className="lg:w-2/3 flex justify-center" role="region" aria-labelledby="formation-title">
              <div className="w-full max-w-4xl h-[500px]">
                <PitchLayout
                  formation={DEFAULT_FORMATION}
                  partners={[carlAnthonyPartner, pokuKessePartner]}
                  className="w-full h-full"
                  onPartnerHover={handlePartnerHover}
                  onPartnerSelect={handlePartnerSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Partnership Benefits Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Why Partner With Us?
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Join a growing ecosystem that connects African football with global audiences.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-[#F2EDE4]/10 hover:bg-[#F2EDE4]/20 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold font-heading text-[#F2EDE4] mb-3">Global Reach</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Access to millions of African football fans worldwide through our streaming platform.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#F2EDE4]/10 hover:bg-[#F2EDE4]/20 transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold font-heading text-[#F2EDE4] mb-3">Growing Market</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Be part of the fastest-growing sports streaming market with authentic African content.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-[#F2EDE4]/10 hover:bg-[#F2EDE4]/20 transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold font-heading text-[#F2EDE4] mb-3">Strategic Collaboration</h3>
              <p className="text-sm text-[#F2EDE4]/80">
                Work directly with our team to create meaningful partnerships that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full max-w-4xl">
            <div className="space-y-3 mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Ready to Join Our Team?
              </h2>
              <p className="text-[#363636] text-base md:text-lg lg:text-xl">
                Become a strategic partner and help us revolutionize African football streaming.
              </p>
              <div className="mt-8 space-y-4">
                <a 
                  href="mailto:partnerships@afroballconnect.com" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 h-11 px-8"
                >
                  Contact Partnership Team
                </a>
                <p className="text-sm text-[#363636]/80">
                  For partnership opportunities, email us at{" "}
                  <a 
                    href="mailto:partnerships@afroballconnect.com" 
                    className="text-[#F37021] hover:underline"
                  >
                    partnerships@afroballconnect.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}