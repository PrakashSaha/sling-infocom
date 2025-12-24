import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sling Infocom - Enterprise Digital Solutions & Software Development",
  description: "Leading technology partner helping startups, SMEs, and enterprises build secure, scalable, and high-performance software products. Expert web development, mobile apps, and digital transformation services.",
  keywords: "software development, web development, mobile app development, digital transformation, enterprise solutions, custom software, SaaS development",
  authors: [{ name: "Sling Infocom" }],
  openGraph: {
    title: "Sling Infocom - Enterprise Digital Solutions",
    description: "Building scalable digital solutions that drive business growth",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sling Infocom - Enterprise Digital Solutions",
    description: "Building scalable digital solutions that drive business growth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
