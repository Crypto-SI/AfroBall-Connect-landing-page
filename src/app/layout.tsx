import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutHeaderWrapper from "@/components/layout-header-wrapper";
import IntroAnimationWrapper from "@/components/intro-animation-wrapper";

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
      <head />
      <body
        className={cn(
          "min-h-screen bg-[#363636] font-sans antialiased text-[#F2EDE4]",
          fontInter.variable,
          fontMontserrat.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-[#363636]">
            <IntroAnimationWrapper showOnLoad={false} />
            <LayoutHeaderWrapper />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
