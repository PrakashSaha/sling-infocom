import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Home - Sling Infocom | Enterprise Digital Solutions",
  description: "Transform your business with cutting-edge digital solutions. Expert software development, web applications, mobile apps, and digital transformation services.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sling Infocom",
  description: "Technology partner helping startups, SMEs, and enterprises build secure, scalable, and high-performance software products",
  url: "https://slinginfocom.com",
  logo: "https://slinginfocom.com/logo.png",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <main>
        <Hero />
        <Stats />
        <Trust />
        <LogoCarousel />
        <Services />
        <WhyChoose />
        <Industries />
        <Process />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
