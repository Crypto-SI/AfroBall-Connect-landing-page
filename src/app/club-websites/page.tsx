import { Button } from "@/components/ui/button";
import {
  MarketingFeatureCard,
  MarketingHeroBackdrop,
  MarketingIconPanel,
  MarketingSectionHeader,
  type MarketingCard,
} from "@/components/marketing-sections";

type RevenueItem = {
  label: string;
  value: string;
  description: string;
};

const micrositeFeatures: MarketingCard[] = [
  {
    icon: "🎥",
    title: "Match Previews & Highlights",
    description: "Directly integrated from AfroBall Connect's HD streams, including interviews and replays.",
  },
  {
    icon: "🛒",
    title: "Merchandise & Ticketing",
    description: "Shop official kits and buy match tickets seamlessly from the site.",
  },
  {
    icon: "📣",
    title: "Fan-Driven Content",
    description: "Blogs, matchday vlogs, fan polls, and community updates.",
  },
  {
    icon: "📅",
    title: "Fixtures & Results",
    description: "Real-time updates on upcoming matches and current standings.",
  },
  {
    icon: "👕",
    title: "Player & Squad Profiles",
    description: "Full rosters with bios, stats, and media galleries.",
  },
  {
    icon: "🎶",
    title: "Team Anthem Audio",
    description: "Optional autoplay feature for club anthems and chants.",
  },
  {
    icon: "📈",
    title: "Sponsor Showcases",
    description: "Dedicated space for local and international sponsors.",
  },
  {
    icon: "🔗",
    title: "Social Media Integration",
    description: "Live feeds and link-outs to official club channels.",
  },
];

const revenueItems: RevenueItem[] = [
  {
    label: "Merchandise Profits",
    value: "50%",
    description: "Direct share of all merchandise sales",
  },
  {
    label: "Ticketing Revenue",
    value: "80%",
    description: "After platform fees from online sales",
  },
  {
    label: "UGC Content Sponsorships",
    value: "70%",
    description: "Shared with clubs and content creators",
  },
];

const strategicBenefits: MarketingCard[] = [
  {
    icon: "👥",
    title: "Deepened Fan Loyalty",
    description:
      "Fans get an official, modern digital home that reflects the pride of their club, creating stronger connections and engagement.",
  },
  {
    icon: "💵",
    title: "New Revenue Streams",
    description:
      "Monetize online attention and commerce through merchandise, ticketing, and sponsor exposure, creating sustainable income.",
  },
  {
    icon: "⚡",
    title: "Club Autonomy",
    description:
      "Each club has input in the design and content strategy of their microsite, ensuring it reflects their unique identity.",
  },
];

function MobileWebsiteMockup() {
  return (
    <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-last">
      <div className="relative w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] bg-brand-cream rounded-3xl shadow-2xl overflow-hidden border-4 border-brand-orange">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange to-brand-charcoal opacity-90" />
        <div className="absolute inset-4 flex flex-col">
          <div className="h-8 bg-brand-charcoal rounded-t-2xl mb-4" />
          <div className="flex-1 bg-brand-charcoal rounded-b-2xl p-4 overflow-hidden">
            <div className="space-y-3">
              <div className="h-4 bg-brand-orange rounded w-3/4" />
              <div className="h-3 bg-brand-medium-grey rounded w-full" />
              <div className="h-3 bg-brand-medium-grey rounded w-5/6" />
              <div className="grid grid-cols-2 gap-2 mt-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-20 bg-brand-orange rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-brand-cream">
      <MarketingHeroBackdrop />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 py-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-brand-orange">
                Club Website Development
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-brand-cream text-base md:text-lg lg:text-xl">
                Transformative microsites for your club&apos;s digital presence. Mobile-optimized websites that
                serve as the official digital home for your club, powered and managed by AfroBall Connect.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-full sm:w-auto">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-cream bg-brand-charcoal/80 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <MobileWebsiteMockup />
        </div>
      </div>
    </section>
  );
}

function FeaturesGridSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <MarketingSectionHeader
          label="Key Features"
          title="What Each Team Microsite Offers"
          description="Rich-media microsites tailored to each club's identity and community."
          labelTone="charcoal"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full justify-center">
          {micrositeFeatures.map((feature) => (
            <MarketingFeatureCard key={feature.title} card={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevenueModelSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-brand-orange">
              Revenue Sharing Model
            </h2>
            <p className="text-brand-cream text-sm sm:text-base md:text-lg">
              AfroBall Connect is committed to creating mutually beneficial digital ecosystems with our club
              partners.
            </p>
            <div className="space-y-4 mt-6">
              {revenueItems.map((item) => (
                <div key={item.label} className="bg-brand-cream/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-brand-orange font-bold">{item.value}</span>
                  </div>
                  <p className="text-sm text-brand-medium-grey mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-cream/80 mt-6">
              This system ensures that clubs are not just featured - they profit directly from their digital
              presence.
            </p>
          </div>
          <MarketingIconPanel
            icon="💰"
            title="Mutual Success"
            description="Profit sharing for sustainable growth"
            dark
            contentClassName="relative w-full h-64 sm:h-80 flex flex-col items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}

function StrategicBenefitsSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <MarketingSectionHeader
          label="Strategic Benefits"
          title="Why Choose AfroBall Connect Microsites?"
          description="Building comprehensive, tech-forward fan ecosystems that fuel financial sustainability for clubs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strategicBenefits.map((benefit) => (
            <MarketingFeatureCard
              key={benefit.title}
              card={benefit}
              iconClassName="text-4xl mb-4"
              className="p-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 w-full max-w-4xl">
          <div className="space-y-3 mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
              Ready to Transform Your Club&apos;s Digital Presence?
            </h2>
            <p className="text-brand-cream text-base md:text-lg lg:text-xl">
              These state-of-the-art mobile websites are provided to each GPL club free of charge while they remain
              in the league.
            </p>
            <div className="mt-8 space-y-4">
              <Button size="lg" className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-full sm:w-auto" asChild>
                <a href="mailto:info@afroballconnect.com">Contact Our Team</a>
              </Button>
              <p className="text-sm text-brand-cream/80">
                For partnership opportunities, email us at{" "}
                <a href="mailto:info@afroballconnect.com" className="text-brand-orange hover:underline">
                  info@afroballconnect.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ClubWebsitesPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesGridSection />
      <RevenueModelSection />
      <StrategicBenefitsSection />
      <CallToActionSection />
    </div>
  );
}
