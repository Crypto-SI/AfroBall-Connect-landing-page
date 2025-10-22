import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners - AfroBall Connect",
  description: "Meet our strategic partners who help bring African football to the world. Join our team of partners positioned on the pitch.",
  keywords: ["partners", "partnerships", "African football", "AfroBall Connect", "sponsors", "collaborations"],
  openGraph: {
    title: "Partners - AfroBall Connect",
    description: "Meet our strategic partners who help bring African football to the world.",
    type: "website",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}