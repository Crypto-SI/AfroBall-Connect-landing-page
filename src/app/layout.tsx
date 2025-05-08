import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AfroBall Connect - Stream African Football",
  description: "The premier global destination for streaming African football. Passion, Authenticity, Connection.",
};

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4A4A4A]/40 bg-[#363636]/95 backdrop-blur supports-[backdrop-filter]:bg-[#363636]/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/afroballlogo.png" 
              alt="AfroBall Connect Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto"
            />
            <span className="hidden font-bold sm:inline-block font-heading text-[#F2EDE4]">AFROBALL CONNECT</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">Features</a>
            <a href="#prototype" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">App Prototype</a>
            <a href="#contact" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-[#4A4A4A]/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-[#999999] md:text-left">
          © {new Date().getFullYear()} AfroBall Connect. All rights reserved.
        </p>
        <p className="text-balance text-center text-sm leading-loose text-[#999999] md:text-left">
          Follow us on <a href="#" className="font-medium underline underline-offset-4 hover:text-[#F37021]">Social Media</a>
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#363636] font-sans antialiased text-[#F2EDE4]",
          fontInter.variable,
          fontMontserrat.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-[#363636]">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
