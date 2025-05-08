import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#363636] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {/* Logo Image */}
            <div className="flex items-center justify-center lg:order-last">
              <Image
                alt="AfroBall Connect Logo"
                className="mx-auto aspect-square object-contain"
                height="400"
                src="/afroballlogo.png"
                width="400"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#F37021]">
                  The Ultimate Destination for African Football
                </h1>
                <p className="max-w-[600px] text-[#F2EDE4] md:text-xl">
                  Experience the passion, skill, and drama of African football like never before. Stream live matches, catch up on highlights, and connect with a global community of fans.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90">
                  Get Notified at Launch
                </Button>
                <Button size="lg" variant="outline" className="border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-[#F2EDE4]">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#F2EDE4] text-[#363636]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-10 w-full">
            <div className="space-y-3 mx-auto max-w-3xl">
              <div className="inline-block rounded-lg bg-[#363636] px-3 py-1 text-sm text-[#F2EDE4] mx-auto">Key Features</div>
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl text-[#F37021]">Why AfroBall Connect?</h2>
              <p className="text-[#4A4A4A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are building the most comprehensive and engaging platform for African football enthusiasts worldwide.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full justify-center">
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Live Streaming</h3>
              <p className="text-sm text-[#999999]">
                Watch top leagues and tournaments live, from anywhere in the world.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Exclusive Content</h3>
              <p className="text-sm text-[#999999]">
                Interviews, documentaries, and behind-the-scenes access.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-[#363636]/20 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-heading text-[#363636] mb-2">Community Hub</h3>
              <p className="text-sm text-[#999999]">
                Connect with fans, join discussions, and share your passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Prototype Link Section */}
      <section id="prototype" className="w-full py-12 md:py-24 lg:py-32 bg-[#4A4A4A] text-[#F2EDE4]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="space-y-3 text-center max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F37021]">
              See What's Coming
            </h2>
            <p className="text-[#F2EDE4] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our interactive prototype to get a feel for the AfroBall Connect app experience.
            </p>
          </div>
          <div className="mt-6">
            <Button size="lg" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90">
              View App Prototype (Coming Soon)
            </Button>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#363636] border-t border-[#4A4A4A]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="space-y-3 text-center max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F37021]">
              Stay Updated!
            </h2>
            <p className="text-[#F2EDE4] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up to our mailing list to get the latest news, launch updates, and exclusive offers.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 mt-6">
            <form className="flex space-x-2">
              <input
                className="flex-1 max-w-lg rounded-md border border-[#4A4A4A] bg-[#F2EDE4] px-3 py-2 text-sm text-[#363636] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#999999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F37021] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90">
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
