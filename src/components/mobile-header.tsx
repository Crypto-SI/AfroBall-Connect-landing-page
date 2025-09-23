"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Smooth scrolling function
  const scrollToSection = (elementId: string) => {
    if (window.location.pathname !== '/') {
      // If not on landing page, navigate to landing page with hash using replace
      const url = `/#${elementId}`;
      window.location.replace(url);
      
      // Set up a one-time scroll handler for when the page loads
      const checkAndScroll = () => {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            // Scroll to element without showing the top first
            window.scrollTo({
              top: element.offsetTop - 80, // Account for fixed header
              behavior: 'smooth'
            });
            window.removeEventListener('load', checkAndScroll);
          }
        }, 200);
      };
      
      // Add event listener for page load
      window.addEventListener('load', checkAndScroll);
    } else {
      // If already on landing page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          // Set hash and scroll to element
          window.location.hash = elementId;
          window.scrollTo({
            top: element.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4A4A4A]/40 bg-[#363636]/95 backdrop-blur supports-[backdrop-filter]:bg-[#363636]/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo - always visible */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/afroballlogo.png"
            alt="AfroBall Connect Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline-block font-bold font-heading text-[#F2EDE4]">AFROBALL CONNECT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => scrollToSection('features')}
            className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60"
          >
            Features
          </button>
          <Link
            href="/club-websites"
            className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60"
          >
            Club Websites
          </Link>
          <Link
            href="/touchline-creators"
            className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60"
          >
            Touchline Creators
          </Link>
          <button
            onClick={() => scrollToSection('afroball-connect-payment-tiers')}
            className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60"
          >
            Prices
          </button>
          <button
            onClick={() => scrollToSection('newsletter')}
            className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60"
          >
            Updates
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden items-center p-2 text-sm leading-5 text-[#F2EDE4] hover:text-[#F37021] focus:outline-none focus:text-[#F37021]"
          type="button"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#4A4A4A]/40 bg-[#363636]">
          <button
            onClick={() => {
              scrollToSection('features');
              closeMobileMenu();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
          >
            Features
          </button>
          <Link
            href="/club-websites"
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
            onClick={closeMobileMenu}
          >
            Club Websites
          </Link>
          <Link
            href="/touchline-creators"
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
            onClick={closeMobileMenu}
          >
            Touchline Creators
          </Link>
          <button
            onClick={() => {
              scrollToSection('afroball-connect-payment-tiers');
              closeMobileMenu();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
          >
            Prices
          </button>
          <button
            onClick={() => {
              scrollToSection('newsletter');
              closeMobileMenu();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
          >
            Updates
          </button>
        </div>
      </div>
    </header>
  );
} 