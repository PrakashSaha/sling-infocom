"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./industries.module.css";

const industries = [
  {
    id: "startups",
    name: "Startups",
    icon: "🚀",
    description: "We help startups build MVPs, scale their technology infrastructure, and accelerate time-to-market with agile development practices.",
    services: [
      "MVP Development",
      "Rapid Prototyping",
      "Scalable Architecture",
      "Tech Stack Consultation",
    ],
  },
  {
    id: "saas",
    name: "SaaS",
    icon: "☁️",
    description: "Specialized in building scalable SaaS platforms with subscription management, multi-tenancy, and cloud-native architectures.",
    services: [
      "SaaS Platform Development",
      "Subscription Management",
      "API Development",
      "Cloud Infrastructure",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    description: "Complete e-commerce solutions from online stores to marketplaces, payment integration, and inventory management systems.",
    services: [
      "E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Marketplace Development",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description: "HIPAA-compliant healthcare solutions including patient management systems, telemedicine platforms, and health analytics.",
    services: [
      "HIPAA-Compliant Solutions",
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Health Data Analytics",
    ],
  },
  {
    id: "finance",
    name: "Finance",
    icon: "💳",
    description: "Secure financial technology solutions including fintech apps, banking systems, and payment processing platforms.",
    services: [
      "Fintech Applications",
      "Banking Systems",
      "Payment Processing",
      "Financial Analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: "🏢",
    description: "Enterprise-grade solutions for large organizations including ERP systems, CRM platforms, and business intelligence tools.",
    services: [
      "ERP Systems",
      "CRM Platforms",
      "Business Intelligence",
      "Enterprise Integration",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Industries We Serve</h1>
            <p className={styles.heroSubtext}>
              Tailored technology solutions for diverse industry needs and challenges.
              We understand the unique requirements of each sector and deliver customized
              solutions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <motion.article
                key={industry.id}
                id={industry.id}
                className={styles.industryCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.industryHeader}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <h2 className={styles.industryName}>{industry.name}</h2>
                </div>
                <p className={styles.industryDescription}>{industry.description}</p>
                
                <div className={styles.servicesList}>
                  <h3 className={styles.servicesTitle}>Key Services:</h3>
                  <ul className={styles.services}>
                    {industry.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className={styles.industryCTA}>
                  Discuss Your Needs →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>Don't See Your Industry?</h2>
            <p className={styles.ctaText}>
              We work across various industries and can customize solutions for your specific needs.
              Contact us to discuss how we can help your business.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Get in Touch
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
