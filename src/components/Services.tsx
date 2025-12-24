"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Home.module.css";

const services = [
  {
    title: "Web Application Development",
    desc: "Enterprise-grade web applications built with modern frameworks. Scalable, secure, and optimized for performance.",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    features: ["React, Next.js, Angular", "Cloud Deployment", "API Integration"],
  },
  {
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.",
    icon: "📱",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    features: ["iOS & Android", "React Native, Flutter", "App Store Optimization"],
  },
  {
    title: "Website Development",
    desc: "High-converting, SEO-optimized websites that drive traffic and transform visitors into customers.",
    icon: "💻",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    title: "Digital Marketing Services",
    desc: "Data-driven marketing strategies that maximize ROI through SEO, PPC, social media, and content marketing.",
    icon: "📈",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions that automate workflows, streamline processes, and boost productivity.",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    features: ["Enterprise Software", "Process Automation", "System Integration"],
  },
  {
    title: "Emerging Technologies",
    desc: "Cutting-edge AI, ML, Blockchain, and IoT solutions that future-proof your business and unlock innovation.",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    features: ["AI & Machine Learning", "Blockchain", "IoT Solutions"],
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.servicesHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Our Expertise</span>
          </div>
          <h2 className={styles.servicesTitle}>Comprehensive IT Solutions</h2>
          <p className={styles.servicesSubtitle}>
            End-to-end technology services designed to drive measurable business outcomes
            and accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className={styles.serviceGrid}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
            >
              <div className={styles.serviceCardHeader} style={{ background: s.gradient }}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                </div>
              </div>
              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
                <div className={styles.serviceFeatures}>
                  {s.features.map((feature, idx) => (
                    <span key={idx} className={styles.serviceFeatureTag}>{feature}</span>
                  ))}
                </div>
                <Link href="/services" className={styles.serviceLink}>
                  Learn More <span className={styles.serviceLinkArrow}>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
