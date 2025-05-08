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
          <a href="#features" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">Features</a>
          <a href="#prototype" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">App Prototype</a>
          <a href="#contact" className="transition-colors hover:text-[#F2EDE4]/80 text-[#F2EDE4]/60">Contact</a>
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
          <a 
            href="#features" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
            onClick={closeMobileMenu}
          >
            Features
          </a>
          <a 
            href="#prototype" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
            onClick={closeMobileMenu}
          >
            App Prototype
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[#F2EDE4]/80 hover:text-[#F2EDE4] hover:bg-[#4A4A4A]/20"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
} 