import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sling Infocom | Our Mission, Vision & Values",
  description: "Learn about Sling Infocom - a passionate team of IT experts dedicated to driving business success through innovative technology solutions. Discover our mission, vision, and core values.",
  keywords: "about us, IT company, technology solutions, software development company, mission vision values",
  openGraph: {
    title: "About Sling Infocom - Our Mission & Vision",
    description: "A passionate team of IT experts dedicated to driving business success through innovative technology solutions.",
    type: "website",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

