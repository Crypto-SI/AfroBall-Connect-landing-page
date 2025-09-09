"use client";

import dynamic from "next/dynamic";

// Import the client-side MobileHeader component with dynamic import to avoid SSR issues
const MobileHeader = dynamic(() => import("@/components/mobile-header"), { 
  ssr: false 
});

export default function LayoutHeaderWrapper() {
  return <MobileHeader />;
}