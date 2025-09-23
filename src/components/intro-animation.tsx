"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function IntroAnimation({ showOnLoad = true }: { showOnLoad?: boolean }) {
  const [isVisible, setIsVisible] = useState(showOnLoad);
  const [isAnimating, setIsAnimating] = useState(showOnLoad);

  useEffect(() => {
    if (!showOnLoad) {
      // If not supposed to show on load, hide immediately
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showOnLoad]);

  if (!isVisible) return null;

  // Pre-calculate particle positions to avoid hydration mismatch
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: typeof window !== 'undefined' ? Math.random() * 100 : 0,
    top: typeof window !== 'undefined' ? Math.random() * 100 : 0,
    delay: typeof window !== 'undefined' ? Math.random() * 3 : 0,
    duration: typeof window !== 'undefined' ? 3 + Math.random() * 2 : 5
  }));

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#363636] transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br from-[#F37021]/20 via-[#363636] to-[#F37021]/20 animate-pulse`}></div>
          
          {/* Floating particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-[#F37021]/40 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>

        {/* Main Logo Container */}
        <div className="relative z-10 text-center">
          {/* Animated Logo Ring */}
          <div className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 ${isAnimating ? 'animate-scale-in' : ''}`}>
            <div className="absolute inset-0 border-4 border-[#F37021]/20 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-2 border-2 border-[#F37021]/30 rounded-full animate-ping-medium"></div>
            <div className="absolute inset-4 border border-[#F37021]/40 rounded-full animate-ping-fast"></div>
            
            <div className="absolute inset-4 flex items-center justify-center">
              <Image
                src="/afroballlogo.png"
                alt="AfroBall Connect Logo"
                width={120}
                height={120}
                className={`object-contain ${isAnimating ? 'animate-zoom-in' : ''}`}
                priority
              />
            </div>
          </div>

          {/* Animated Brand Text */}
          <div className={`space-y-4 ${isAnimating ? 'animate-fade-in-up' : ''}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F37021] tracking-tight">
              AfroBall
              <span className="text-[#F2EDE4]">Connect</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#F2EDE4]/80 font-medium tracking-wide">
              The Ultimate Destination for African Football
            </p>
          </div>

          {/* Animated Loading Bar */}
          <div className={`w-32 h-1 bg-[#F37021]/20 rounded-full mx-auto mt-8 overflow-hidden ${isAnimating ? 'animate-loading-bar' : ''}`}>
            <div className="h-full bg-[#F37021] rounded-full animate-loading-fill"></div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`flex items-center space-x-2 text-[#F2EDE4]/60 text-sm ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="w-2 h-2 bg-[#F37021] rounded-full animate-pulse"></div>
            <span>Loading Experience...</span>
            <div className="w-2 h-2 bg-[#F37021] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes ping-medium {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes ping-fast {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes loading-fill {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-scale-in {
          animation: scale-in 1.5s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 1s both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }

        .animate-ping-medium {
          animation: ping-medium 2s ease-out infinite;
        }

        .animate-ping-fast {
          animation: ping-fast 1.5s ease-out infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-out 1.5s both;
        }

        .animate-loading-fill {
          animation: loading-fill 1.5s ease-out 1.5s both;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}