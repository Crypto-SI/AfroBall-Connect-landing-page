"use client";

import dynamic from "next/dynamic";

// Import the client-side IntroAnimation component with dynamic import to avoid SSR issues
const IntroAnimation = dynamic(() => import("@/components/intro-animation"), { 
  ssr: false 
});

export default function IntroAnimationWrapper({ showOnLoad }: { showOnLoad?: boolean }) {
  return <IntroAnimation showOnLoad={showOnLoad} />;
}