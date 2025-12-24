import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services - Web Development, Mobile Apps & Digital Solutions",
  description: "Comprehensive IT services including web application development, mobile app development, website development, digital marketing, custom software, and emerging technologies. Expert solutions for your business growth.",
  keywords: "web application development, mobile app development, website development, digital marketing services, custom software development, AI solutions, blockchain development, IoT services, SEO services",
  openGraph: {
    title: "IT Services - Professional Web & Mobile Development",
    description: "Empowering digital transformation with innovative IT solutions. Expert web apps, mobile apps, and digital marketing services.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

