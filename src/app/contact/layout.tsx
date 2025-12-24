import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Free Consultation | Sling Infocom",
  description: "Ready to transform your business through technology? Contact Sling Infocom today for a free consultation or request a quote. We're here to help you achieve your digital goals.",
  keywords: "contact us, free consultation, IT services quote, get in touch, technology consultation",
  openGraph: {
    title: "Contact Us - Free IT Consultation",
    description: "Contact us today for a free consultation or request a quote. We're here to help you achieve your digital goals.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

