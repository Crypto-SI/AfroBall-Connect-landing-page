"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Script from 'next/script';
import { useState, useEffect, useRef } from 'react';

// Extend Window interface to include Kit-related properties
declare global {
  interface Window {
    kit: (...args: any[]) => void;
    KitObject: any;
  }
}

// Kit.com Mailing List Form Component
function KitMailingListForm() {
  const [showFallback, setShowFallback] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on localhost
    const isLocal = typeof window !== 'undefined' &&
                   (window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1' ||
                    window.location.hostname.includes('localhost'));
    setIsLocalhost(isLocal);

    // Only run on client side
    if (typeof document === 'undefined' || !containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // If on localhost, show fallback immediately with a note
    if (isLocal) {
      console.log('On localhost - showing fallback form (Kit.com may not work on dev domains)');
      setShowFallback(true);
      return;
    }

    // Create the script element with the exact embed code structure
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '6273feb6f2');
    script.src = 'https://afroballconnect.kit.com/6273feb6f2/index.js';
    
    // Add event listeners
    script.onload = () => {
      console.log('Kit.com script loaded successfully');
      
      // Give Kit.com time to render the form
      setTimeout(() => {
        if (containerRef.current) {
          // Check if Kit.com has rendered a form
          const hasContent = containerRef.current.children.length > 0;
          if (!hasContent) {
            console.log('Kit.com form not found, showing fallback');
            setShowFallback(true);
          }
        }
      }, 3000);
    };

    script.onerror = () => {
      console.error('Failed to load Kit.com script');
      setShowFallback(true);
    };

    // Add the script to the container
    containerRef.current.appendChild(script);

    // Set a timeout to show fallback if nothing happens
    const timeoutId = setTimeout(() => {
      if (!showFallback) {
        console.log('Kit.com loading timeout, showing fallback');
        setShowFallback(true);
      }
    }, 10000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [showFallback]);

  if (showFallback) {
    return (
      <div className="text-center">
        <div className="mb-4">
          <svg className="h-8 w-8 mx-auto text-[#F37021]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        {isLocalhost && (
          <p className="text-[#666666] text-xs mb-2">
            Development mode - using fallback form
          </p>
        )}
        <p className="text-[#363636] text-sm mb-4">
          {isLocalhost ? 'Subscription form for development testing' : 'Unable to load subscription form'}
        </p>
        <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const email = (form.querySelector('#kit-email') as HTMLInputElement).value;
          console.log('Subscription received:', email);
          
          // Show success message
          const container = form.closest('.text-center') as HTMLElement;
          if (container) {
            container.innerHTML = `
              <div class="text-green-600 mb-2">
                <svg class="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p class="text-[#363636] text-sm mb-4">Thank you for subscribing! We'll keep you updated with AfroBall Connect news.</p>
              ${isLocalhost ? '<p class="text-xs text-[#666666]">This is a demo submission. In production, this would connect to your mailing list.</p>' : ''}
            `;
          }
          
          // Reset form
          form.reset();
        }}>
          <div>
            <label htmlFor="kit-email" className="block text-sm font-medium text-[#363636] mb-1">Email Address</label>
            <input
              type="email"
              id="kit-email"
              name="email"
              required
              className="w-full px-3 py-2 border border-[#4A4A4A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F37021] text-[#F2EDE4] py-2 px-4 rounded-md hover:bg-[#F37021]/90 transition-colors font-medium"
          >
            Subscribe to Updates
          </button>
          <p className="text-xs text-[#666666] text-center">
            By subscribing, you agree to receive updates about AfroBall Connect.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-[300px] flex items-center justify-center">
      {/* Loading state */}
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F37021] mx-auto mb-2"></div>
        <p className="text-[#363636] text-sm">Loading subscription form...</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-[#F2EDE4]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#363636]/70"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
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
            <div className="flex flex-col justify-center space-y-4 py-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-[#F37021]">
                  The Ultimate Destination for African Football
                </h1>
                <p className="max-w-[600px] mx-auto lg:mx-0 text-[#F2EDE4] text-base md:text-lg lg:text-xl">
                  Experience the passion, skill, and drama of African football like never before. Stream live matches, catch up on highlights, and connect with a global community of fans.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                  Get Notified at Launch
                </Button>
                <Button size="lg" variant="outline" className="border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-[#F2EDE4] bg-[#363636]/80 w-full sm:w-auto">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4] mx-auto">Key Features</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">Why AfroBall Connect?</h2>
              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                We are building the most comprehensive and engaging platform for African football enthusiasts worldwide.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full justify-center">
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Live Streaming</h3>
              <p className="text-sm text-[#999999]">
                Watch top leagues and tournaments live, from anywhere in the world.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Exclusive Content</h3>
              <p className="text-sm text-[#999999]">
                Interviews, documentaries, and behind-the-scenes access.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Community Hub</h3>
              <p className="text-sm text-[#999999]">
                Connect with fans, join discussions, and share your passion.
              </p>
            </div>
          </div>
          
          <div className="mt-8 w-full max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-bold font-heading text-[#363636]">Explainer Video</h3>
                  <Button
                    onClick={() => setShowVideo(!showVideo)}
                    className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-auto px-4 py-2 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      {showVideo ? (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      )}
                    </svg>
                    {showVideo ? 'Close Video' : 'Play Video'}
                  </Button>
                </div>
                {showVideo && (
                  <Button
                    onClick={() => setShowVideo(false)}
                    className="text-[#F2EDE4] hover:bg-[#666666] w-auto px-3 py-2 transition-colors"
                    variant="ghost"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                )}
              </div>
              <p className="text-sm text-[#999999] mb-4">
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
        </div>
      </section>

      {/* Detailed Features Sections */}

      {/* Live Streaming Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Live Streaming: Your Front Row Seat to African Football
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                Experience HD quality streams of African football from anywhere in the world. 
                We cover major leagues, tournaments, and exclusive matches with minimal delay.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>HD quality streams with multiple camera angles</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Global access from any device</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Comprehensive league and tournament coverage</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg mt-6 lg:mt-0">
              <Image
                src="/streaming.jpg"
                alt="Live streaming of African football match"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Official Merchandise Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg order-last lg:order-first mt-6 lg:mt-0">
              <Image
                src="/merch.png"
                alt="Official AfroBall Connect merchandise and jerseys"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Official Merchandise: Wear Your Passion
              </h2>
              <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                Shop for authentic jerseys and fan gear from your favorite African teams. 
                We ship globally, bringing African football merchandise to fans everywhere.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Authentic jerseys from all major teams</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Extensive fan gear collection</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Global shipping with tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Betting Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Integrated Betting: Elevate the Excitement
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                Enhance your viewing experience with our fully regulated betting platform. 
                Place bets on diverse markets with ease and security, directly from the stream.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Fully regulated betting platform</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Diverse betting markets</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Seamless integration with live streams</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg mt-6 lg:mt-0">
              <Image
                src="/bet.png"
                alt="AfroBall Connect integrated betting platform"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Payment Tiers Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg order-last lg:order-first mt-6 lg:mt-0">
              <Image
                src="/price.png"
                alt="AfroBall Connect payment tiers and subscription options"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Simple Payment Tiers: Access Made Easy
              </h2>
              <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                Choose the subscription option that works for you. From per-game passes to seasonal subscriptions, 
                we offer flexible payment options including local payment methods.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Pay-per-game options</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Season pass subscriptions</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Support for local payment methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Social Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Community & Social: Connect with Fans Worldwide
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                Join a vibrant community of African football fans. Engage with social media integrations, 
                participate in fan forums, and connect with influencers and other fans.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Seamless social media integration</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Influencer collaborations and content</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Active fan forums and discussions</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg mt-6 lg:mt-0">
              <Image
                src="/social.jpg"
                alt="AfroBall Connect community and social features"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Access Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg order-last lg:order-first mt-6 lg:mt-0">
              <Image
                src="/halal.png"
                alt="AfroBall Connect halal and child-friendly content options"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Inclusive Access: Halal & Child-Friendly
              </h2>
              <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                We cater to diverse audience needs with specialized versions of our platform. 
                Enjoy halal-compliant content and child-friendly experiences with appropriate filters.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Halal-compliant content options</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Child-friendly app versions</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Content filters for diverse audience needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Pitch Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Beyond the Pitch: Exclusive Content
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                Dive deeper with our Netflix-style documentaries, player profiles, and behind-the-scenes content. 
                Get to know your favorite players and teams like never before.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Netflix-style football documentaries</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>In-depth player profiles and interviews</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Exclusive behind-the-scenes content</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg mt-6 lg:mt-0">
              <Image
                src="/spinoff.png"
                alt="AfroBall Connect exclusive documentary and behind-the-scenes content"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Stage Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#363636]/10 rounded-lg order-last lg:order-first mt-6 lg:mt-0">
              <Image
                src="/global.png"
                alt="African teams competing on the global stage"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                Global Stage: Showcase Friendlies
              </h2>
              <p className="text-[#363636] text-sm sm:text-base md:text-lg">
                Watch African teams take on prestigious opponents in international friendlies. 
                See African talent showcased on the global stage through tours and special matches.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Matches against prestigious international opponents</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Coverage of international tours</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Showcasing African talent globally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Game Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
                The Ultimate Fan Dream: Video Game
              </h2>
              <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg">
                Our future vision includes an immersive video game featuring African leagues and players. 
                Experience realistic gameplay, career modes, and more in this upcoming extension of our platform.
              </p>
              <ul className="space-y-2 mx-auto lg:mx-0 max-w-md">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Immersive gameplay with African leagues</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Detailed career and manager modes</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#F37021]"></div>
                  <span>Future vision of the AfroBall Connect platform</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F2EDE4]/10 rounded-lg max-w-sm mx-auto lg:max-w-none mt-6 lg:mt-0">
              <Image
                src="/videogame.png"
                alt="AfroBall Connect video game concept"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Prototype Link Section */}
      <section id="prototype" className="w-full py-8 md:py-16 lg:py-24 bg-[#4A4A4A] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="space-y-3 text-center max-w-3xl">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
              See What's Coming
            </h2>
            <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
              Check out our interactive prototype to get a feel for the AfroBall Connect app experience.
            </p>
          </div>
          <div className="mt-6 w-full sm:w-auto">
            <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
              View App Prototype (Coming Soon)
            </Button>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4] mx-auto">Stay Updated</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-[#F37021]">
                Join Our Mailing List
              </h2>
              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Be the first to know about AfroBall Connect launch, exclusive content, and special offers.
              </p>
              <p className="text-[#666666] text-sm">
                Have questions? Contact us at <a href="mailto:info@afroballconnect.com" className="text-[#F37021] hover:underline">info@afroballconnect.com</a>
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-2xl">
            <KitMailingListForm />
          </div>
        </div>
      </section>

    </div>
  );
}


// Global fallback form handler for Kit.com
if (typeof window !== 'undefined') {
  (window as any).handleKitFallbackSubmit = function(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('#kit-email') as HTMLInputElement).value;
    
    console.log('Kit.com fallback subscription:', email);
    
    // Show success message
    const container = form.closest('.text-center') as HTMLElement;
    if (container) {
      container.innerHTML = `
        <div class="text-green-600 mb-2">
          <svg class="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <p class="text-[#363636] text-sm mb-4">Thank you for subscribing! We'll keep you updated with AfroBall Connect news.</p>
      `;
    }
    
    // Reset form
    form.reset();
  };
}
