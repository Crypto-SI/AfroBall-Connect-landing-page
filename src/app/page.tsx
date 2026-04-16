"use client";

import IntroAnimationWrapper from "@/components/intro-animation-wrapper";
import {
  MarketingBulletList,
  MarketingFeatureCard,
  MarketingHeroBackdrop,
  MarketingSectionHeader,
  type MarketingCard,
} from "@/components/marketing-sections";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

type DetailedFeature = {
  id?: string;
  title: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  theme: "dark" | "light";
  imageFirst?: boolean;
  imageClassName?: string;
};

const summaryFeatures: MarketingCard[] = [
  {
    title: "Live Streaming",
    description: "Watch top leagues and tournaments live, from anywhere in the world.",
  },
  {
    title: "Exclusive Content",
    description: "Interviews, documentaries, and behind-the-scenes access.",
  },
  {
    title: "Community Hub",
    description: "Connect with fans, join discussions, and share your passion.",
  },
];

const detailedFeatures: DetailedFeature[] = [
  {
    title: "Live Streaming: Your Front Row Seat to African Football",
    description:
      "Experience HD quality streams of African football from anywhere in the world. We cover major leagues, tournaments, and exclusive matches with minimal delay.",
    bullets: [
      "HD quality streams with multiple camera angles",
      "Global access from any device",
      "Comprehensive league and tournament coverage",
    ],
    image: {
      src: "/streaming.jpg",
      alt: "Live streaming of African football match",
      width: 600,
      height: 400,
    },
    theme: "dark",
  },
  {
    title: "Official Merchandise: Wear Your Passion",
    description:
      "Shop for authentic jerseys and fan gear from your favorite African teams. We ship globally, bringing African football merchandise to fans everywhere.",
    bullets: [
      "Authentic jerseys from all major teams",
      "Extensive fan gear collection",
      "Global shipping with tracking",
    ],
    image: {
      src: "/merch.png",
      alt: "Official AfroBall Connect merchandise and jerseys",
      width: 600,
      height: 400,
    },
    theme: "light",
    imageFirst: true,
  },
  {
    title: "Integrated Betting: Elevate the Excitement",
    description:
      "Enhance your viewing experience with our fully regulated betting platform. Place bets on diverse markets with ease and security, directly from the stream.",
    bullets: [
      "Fully regulated betting platform",
      "Diverse betting markets",
      "Seamless integration with live streams",
    ],
    image: {
      src: "/bet.png",
      alt: "AfroBall Connect integrated betting platform",
      width: 600,
      height: 400,
    },
    theme: "dark",
  },
  {
    id: "afroball-connect-payment-tiers",
    title: "Simple Payment Tiers: Access Made Easy",
    description:
      "Choose the subscription option that works for you. From per-game passes to seasonal subscriptions, we offer flexible payment options including local payment methods.",
    bullets: [
      "Pay-per-game options",
      "Season pass subscriptions",
      "Support for local payment methods",
    ],
    image: {
      src: "/price.png",
      alt: "AfroBall Connect payment tiers and subscription options",
      width: 600,
      height: 400,
    },
    theme: "light",
    imageFirst: true,
  },
  {
    title: "Community & Social: Connect with Fans Worldwide",
    description:
      "Join a vibrant community of African football fans. Engage with social media integrations, participate in fan forums, and connect with influencers and other fans.",
    bullets: [
      "Seamless social media integration",
      "Influencer collaborations and content",
      "Active fan forums and discussions",
    ],
    image: {
      src: "/social.jpg",
      alt: "AfroBall Connect community and social features",
      width: 600,
      height: 400,
    },
    theme: "dark",
  },
  {
    title: "Inclusive Access: Halal & Child-Friendly",
    description:
      "We cater to diverse audience needs with specialized versions of our platform. Enjoy halal-compliant content and child-friendly experiences with appropriate filters.",
    bullets: [
      "Halal-compliant content options",
      "Child-friendly app versions",
      "Content filters for diverse audience needs",
    ],
    image: {
      src: "/halal.png",
      alt: "AfroBall Connect halal and child-friendly content options",
      width: 600,
      height: 400,
    },
    theme: "light",
    imageFirst: true,
  },
  {
    title: "Beyond the Pitch: Exclusive Content",
    description:
      "Dive deeper with our Netflix-style documentaries, player profiles, and behind-the-scenes content. Get to know your favorite players and teams like never before.",
    bullets: [
      "Netflix-style football documentaries",
      "In-depth player profiles and interviews",
      "Exclusive behind-the-scenes content",
    ],
    image: {
      src: "/spinoff.png",
      alt: "AfroBall Connect exclusive documentary and behind-the-scenes content",
      width: 600,
      height: 400,
    },
    theme: "dark",
  },
  {
    title: "Global Stage: Showcase Friendlies",
    description:
      "Watch African teams take on prestigious opponents in international friendlies. See African talent showcased on the global stage through tours and special matches.",
    bullets: [
      "Matches against prestigious international opponents",
      "Coverage of international tours",
      "Showcasing African talent globally",
    ],
    image: {
      src: "/global.png",
      alt: "African teams competing on the global stage",
      width: 600,
      height: 400,
    },
    theme: "light",
    imageFirst: true,
  },
  {
    title: "The Ultimate Fan Dream: Video Game",
    description:
      "Our future vision includes an immersive video game featuring African leagues and players. Experience realistic gameplay, career modes, and more in this upcoming extension of our platform.",
    bullets: [
      "Immersive gameplay with African leagues",
      "Detailed career and manager modes",
      "Future vision of the AfroBall Connect platform",
    ],
    image: {
      src: "/videogame.png",
      alt: "AfroBall Connect video game concept",
      width: 300,
      height: 200,
    },
    theme: "dark",
    imageClassName: "max-w-sm mx-auto lg:max-w-none",
  },
];

function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-brand-cream">
      <MarketingHeroBackdrop overlayClassName="bg-brand-charcoal/70" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-last">
            <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full border-4 border-brand-orange overflow-hidden">
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

          <div className="flex flex-col justify-center space-y-4 py-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-brand-orange">
                The Ultimate Destination for African Football
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-brand-cream text-base md:text-lg lg:text-xl">
                Experience the passion, skill, and drama of African football like never before. Stream live
                matches, catch up on highlights, and connect with a global community of fans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-full sm:w-auto">
                Get Notified at Launch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-cream bg-brand-charcoal/80 w-full sm:w-auto"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExplainerVideo({
  showVideo,
  onToggle,
  onClose,
}: {
  showVideo: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="mt-8 w-full max-w-6xl mx-auto">
      <div className="text-center p-6 rounded-lg border border-brand-charcoal/20 shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-lg font-bold font-heading text-brand-charcoal">Explainer Video</h3>
            <Button
              onClick={onToggle}
              className="bg-brand-orange text-brand-cream hover:bg-brand-orange/90 w-auto px-4 py-2 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                {showVideo ? (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
              {showVideo ? "Close Video" : "Play Video"}
            </Button>
          </div>

          {showVideo && (
            <Button
              onClick={onClose}
              className="text-brand-cream hover:bg-brand-dark-grey w-auto px-3 py-2 transition-colors"
              variant="ghost"
              aria-label="Close video"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          )}
        </div>

        <p className="text-sm text-brand-medium-grey mb-4">
          Watch our platform demo to see AfroBall Connect in action.
        </p>

        {showVideo && (
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/KEdJJeewiLg"
              title="AfroBall Connect Platform Demo"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturesSection({
  showVideo,
  onVideoToggle,
  onVideoClose,
}: {
  showVideo: boolean;
  onVideoToggle: () => void;
  onVideoClose: () => void;
}) {
  return (
    <section id="features" className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <MarketingSectionHeader
          label="Key Features"
          title="Why AfroBall Connect?"
          description="We are building the most comprehensive and engaging platform for African football enthusiasts worldwide."
          labelTone="charcoal"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full justify-center">
          {summaryFeatures.map((feature) => (
            <MarketingFeatureCard key={feature.title} card={feature} />
          ))}
        </div>

        <ExplainerVideo showVideo={showVideo} onToggle={onVideoToggle} onClose={onVideoClose} />
      </div>
    </section>
  );
}

function DetailedFeatureSection({ feature }: { feature: DetailedFeature }) {
  const isDark = feature.theme === "dark";
  const sectionClassName = isDark
    ? "w-full py-8 md:py-16 lg:py-24 bg-brand-charcoal text-brand-cream"
    : "w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal";
  const textClassName = isDark ? "text-brand-cream" : "text-brand-charcoal";
  const imagePanelClassName = isDark ? "bg-brand-cream/10" : "bg-brand-charcoal/10";

  const textContent = (
    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-brand-orange">
        {feature.title}
      </h2>
      <p className={`${textClassName} text-sm sm:text-base md:text-lg`}>{feature.description}</p>
      <MarketingBulletList items={feature.bullets} className="space-y-2" itemClassName="items-center" />
    </div>
  );

  const imageContent = (
    <div
      className={`flex items-center justify-center p-3 sm:p-4 md:p-6 ${imagePanelClassName} rounded-lg mt-6 lg:mt-0 ${feature.imageFirst ? "order-last lg:order-first" : ""} ${feature.imageClassName ?? ""}`}
    >
      <Image
        src={feature.image.src}
        alt={feature.image.alt}
        width={feature.image.width}
        height={feature.image.height}
        className="rounded-lg object-cover w-full h-auto shadow-lg"
      />
    </div>
  );

  return (
    <section id={feature.id} className={sectionClassName}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          {feature.imageFirst ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full py-8 md:py-16 lg:py-24 bg-brand-cream text-brand-charcoal">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 w-full">
          <div className="space-y-3 mx-auto max-w-3xl">
            <div className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-sm text-brand-charcoal mx-auto">
              Newsletter
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
              Join the AfroBallConnect Newsletter
            </h2>
            <p className="text-brand-charcoal text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
              Subscribe to get our latest content by email. Stay updated with the latest African football news,
              matches, and exclusive content.
            </p>
            <p className="text-brand-charcoal text-sm sm:text-base mt-4">
              For partnership opportunities or media inquiries, email us at{" "}
              <a href="mailto:info@afroballconnect.com" className="text-brand-orange hover:underline font-medium">
                info@afroballconnect.com
              </a>
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

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const hash = window.location.hash.substring(1);
    if (!hash) {
      setIsInitialLoad(true);
      return;
    }

    setIsInitialLoad(false);

    const scrollTimer = window.setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 200);

    return () => window.clearTimeout(scrollTimer);
  }, []);

  return (
    <div>
      <HeroSection />
      {isMounted && isInitialLoad && <IntroAnimationWrapper showOnLoad />}
      <FeaturesSection
        showVideo={showVideo}
        onVideoToggle={() => setShowVideo((current) => !current)}
        onVideoClose={() => setShowVideo(false)}
      />
      {detailedFeatures.map((feature) => (
        <DetailedFeatureSection key={feature.title} feature={feature} />
      ))}
      <NewsletterSection />
    </div>
  );
}
