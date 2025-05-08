import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HomePage() {
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto w-full justify-center">
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
      <section id="contact" className="w-full py-8 md:py-16 lg:py-24 bg-[#363636] border-t border-[#4A4A4A]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="space-y-3 text-center max-w-3xl">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[#F37021]">
              Stay Updated!
            </h2>
            <p className="text-[#F2EDE4] text-sm sm:text-base md:text-lg lg:text-xl/relaxed max-w-2xl mx-auto">
              Sign up to our mailing list to get the latest news, launch updates, and exclusive offers.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mt-6">
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                className="flex-1 max-w-lg rounded-md border border-[#4A4A4A] bg-[#F2EDE4] px-3 py-2 text-sm text-[#363636] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#999999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F37021] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-[#999999] text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
