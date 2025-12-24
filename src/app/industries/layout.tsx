import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - IT Solutions for Every Sector",
  description: "Tailored technology solutions for diverse industries including Startups, SaaS, E-Commerce, Healthcare, Finance, and Enterprise. Custom IT services for your industry vertical.",
  keywords: "industries, startups, SaaS, e-commerce, healthcare IT, finance technology, enterprise solutions, industry-specific software",
  openGraph: {
    title: "Industries We Serve - Custom IT Solutions",
    description: "Tailored technology solutions for diverse industry needs and challenges.",
    type: "website",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

