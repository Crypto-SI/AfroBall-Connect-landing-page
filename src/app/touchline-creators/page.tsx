import { Button } from "@/components/ui/button";
import {
  MarketingBulletList,
  MarketingFeatureCard,
  MarketingHeroBackdrop,
  MarketingIconPanel,
  MarketingSectionHeader,
  type MarketingCard,
} from "@/components/marketing-sections";

type ScheduleRow = {
  day: string;
  output: string;
};

const introParagraphs = [
  "AfroBall Connect is launching the Touchline Creators program - a dynamic initiative that empowers passionate, knowledgeable, and media-savvy supporters to become the official digital voice of their clubs.",
  "These are not just superfans - they are storytellers, media producers, and emerging football journalists, playing a key role in driving club visibility, deepening fan engagement, and eventually transitioning into official press officer roles.",
];

const creatorActivities: MarketingCard[] = [
  {
    icon: "🎙",
    title: "Match Previews",
    description: "Tactical insights, expected lineups, storylines to watch.",
  },
  {
    icon: "📽",
    title: "Match Reviews",
    description: "Honest fan-centric breakdowns of each game's events and turning points.",
  },
  {
    icon: "👤",
    title: "Player Spotlights",
    description: "Weekly video segments or blogs profiling individual players - strengths, weaknesses, backstory.",
  },
  {
    icon: "📰",
    title: "Club News",
    description: "Transfers, injuries, training insights, lineup leaks (where permitted).",
  },
  {
    icon: "🎤",
    title: "Interviews",
    description: "Authentic voices from the stands, and when granted access, from the pitch.",
  },
  {
    icon: "📱",
    title: "Social Media",
    description: "Maintaining their own public-facing channels, building an audience, and becoming micro-influencers.",
  },
];

const ownershipBullets = [
  "Feature their best work across club microsites and the AfroBall platform",
  "Embed their YouTube, TikTok, Instagram and Twitter content directly",
  "Allow creators to pursue independent sponsorships, keeping 100% of deals they generate",
  "If AfroBall Connect secures sponsorship on their behalf, we retain a 20% commission",
];

const scheduleRows: ScheduleRow[] = [
  { day: "Monday", output: "🔁 Match Review from weekend game (video/blog) + player ratings" },
  { day: "Tuesday", output: "🧠 Tactical Breakdown or Training Insights (if available)" },
  { day: "Wednesday", output: "🎙 Interview with a player, coach, or fan (or commentary vlog)" },
  { day: "Thursday", output: "⚽️ Player Spotlight: Deep dive into one squad member" },
  { day: "Friday", output: "📣 Match Preview: Opponent breakdown, predictions" },
  { day: "Saturday", output: "🧵 Live Commentary, social updates, short-form content (matchday vibes)" },
  { day: "Sunday", output: "🎥 Fan reactions, post-match interviews, matchday wrap-up vlog" },
];

const futureParagraphs = [
  "Touchline Creators aren't just content contributors - they're building a portfolio. As AfroBall Connect grows and clubs develop their digital media departments, top-performing creators will be fast-tracked to become official Club Press Officers.",
  "This pathway gives young African football enthusiasts a professional gateway into sports journalism, media production, and public relations - an industry that's rapidly growing across the continent.",
];

const strategicBenefits: MarketingCard[] = [
  {
    icon: "✅",
    title: "Scalable Local Content Engine",
    description: "Authentic stories told by real fans, every day, across all clubs.",
  },
  {
    icon: "✅",
    title: "Talent Development Pipeline",
    description: "Cultivating the next generation of African football journalists.",
  },
  {
    icon: "✅",
    title: "Enhanced Club Identity",
    description: "Each club gets a human voice and unique media presence.",
  },
  {
    icon: "✅",
    title: "Built-in Sponsorship Inventory",
    description: "Brand-ready media properties with known engagement.",
  },
];

function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-brand-cream">
      <MarketingHeroBackdrop />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 py-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-brand-orange">
                The AfroBall Touchline Creators Initiative
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-brand-cream text-base md:text-lg lg:text-xl">
                The Future Voice of African Football, Club by Club
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-full sm:w-auto">
                Join the Initiative
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
          <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-last">
            <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full border-4 border-brand-orange overflow-hidden">
              <video src="/ghana.mp4" className="h-full w-full object-cover" autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg md:text-xl text-brand-dark-grey leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkCardGridSection({
  label,
  title,
  description,
  cards,
  columns = "lg:grid-cols-3",
  maxWidth = "max-w-6xl",
}: {
  label: string;
  title: string;
  description: string;
  cards: MarketingCard[];
  columns?: string;
  maxWidth?: string;
}) {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <MarketingSectionHeader label={label} title={title} description={description} dark className="mb-12" />
        <div className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6 ${maxWidth} mx-auto`}>
          {cards.map((card) => (
            <MarketingFeatureCard
              key={card.title}
              card={card}
              variant="dark"
              className="p-6"
              iconClassName={card.icon === "✅" ? "text-2xl mb-3" : "text-2xl mb-4"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnershipSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-brand-charcoal px-3 py-1 text-sm text-brand-cream mx-auto lg:mx-0">
                Ownership & Monetization
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
                Creator Ownership Model
              </h2>
              <p className="text-brand-dark-grey text-sm sm:text-base md:text-lg">
                Touchline Creators will own their content and personal brand. AfroBall Connect will:
              </p>
            </div>
            <MarketingBulletList items={ownershipBullets} />
            <p className="text-brand-dark-grey text-sm sm:text-base md:text-lg italic">
              This hybrid model enables creators to monetize their talent while building credibility in the football
              media space.
            </p>
          </div>
          <MarketingIconPanel
            icon="💰"
            title="100% Independent Sponsorships"
            description="Creators keep all revenue from independently secured deals"
          />
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <MarketingSectionHeader
          label="Weekly Content Schedule"
          title="Recommended Content Calendar"
          description="A structured approach to consistent, high-quality content creation"
          dark
          className="mb-12"
        />
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-brand-orange/30">
                  <th className="text-left p-4 font-bold font-heading text-brand-orange">Day</th>
                  <th className="text-left p-4 font-bold font-heading text-brand-orange">Content Output</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row, index) => (
                  <tr key={row.day} className={index === scheduleRows.length - 1 ? "" : "border-b border-brand-orange/10"}>
                    <td className="p-4 font-medium text-brand-orange">{row.day}</td>
                    <td className="p-4">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureOpportunitiesSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          <div className="order-last lg:order-first">
            <MarketingIconPanel icon="🚀" title="Career Pathway" description="From Creator to Press Officer" />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
                Future Opportunities
              </h2>
              {futureParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-brand-charcoal text-sm sm:text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplySection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 w-full">
          <div className="space-y-3 mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
              Ready to Become a Touchline Creator?
            </h2>
            <p className="text-brand-charcoal text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
              Join the movement that&apos;s shaping the future of African football media. Apply now to become the
              official voice of your club.
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-full sm:w-auto" asChild>
                <a href="mailto:info@afroballconnect.com">Apply Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 w-full">
          <div className="space-y-3 mx-auto max-w-3xl">
            <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-brand-charcoal mx-auto">
              Newsletter
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
              Stay Updated on the Touchline Initiative
            </h2>
            <p className="text-brand-cream text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
              Subscribe to get the latest updates about the Touchline Creators program, new club partnerships, and
              creator success stories.
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 border border-brand-orange hover:border-brand-orange/80 transition-all duration-200"
                asChild
              >
                <a href="https://afroballconnect.kit.com/6273feb6f2" target="_blank" rel="noopener noreferrer">
                  Join List
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TouchlineCreatorsPage() {
  return (
    <div>
      <HeroSection />
      <IntroductionSection />
      <DarkCardGridSection
        label="Role & Responsibilities"
        title="Touchline Creator Activities"
        description="Touchline Creators will represent their clubs across the AfroBall ecosystem and beyond by:"
        cards={creatorActivities}
      />
      <OwnershipSection />
      <ScheduleSection />
      <FutureOpportunitiesSection />
      <DarkCardGridSection
        label="Strategic Benefits"
        title="Why This Initiative Matters"
        description="The Touchline Creators program delivers significant value to clubs, fans, and the African football ecosystem"
        cards={strategicBenefits}
        columns="lg:grid-cols-2"
        maxWidth="max-w-4xl"
      />
      <ApplySection />
      <NewsletterSection />
    </div>
  );
}
