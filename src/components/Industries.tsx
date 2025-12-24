"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Home.module.css";

const industries = [
  { name: "Startups", icon: "🚀", color: "#3b82f6", desc: "MVP & Scale" },
  { name: "SaaS", icon: "☁️", color: "#10b981", desc: "Cloud Platforms" },
  { name: "E-Commerce", icon: "🛒", color: "#f59e0b", desc: "Online Stores" },
  { name: "Healthcare", icon: "🏥", color: "#ec4899", desc: "HIPAA Compliant" },
  { name: "Finance", icon: "💳", color: "#8b5cf6", desc: "Fintech Solutions" },
  { name: "Enterprise", icon: "🏢", color: "#06b6d4", desc: "Large Scale" },
];

export default function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.industriesHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Industries</span>
          </div>
          <h2 className={styles.industriesTitle}>Industries We Serve</h2>
          <p className={styles.industriesSubtitle}>
            Tailored technology solutions designed for diverse industry verticals,
            each with unique challenges and opportunities.
          </p>
        </motion.div>

        <div className={styles.industryGrid}>
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className={styles.industryCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.industryCardInner} style={{ borderTopColor: industry.color }}>
                <div className={styles.industryIconWrapper} style={{ background: `${industry.color}15` }}>
                  <span className={styles.industryIcon}>{industry.icon}</span>
                </div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDesc}>{industry.desc}</p>
                <Link href="/industries" className={styles.industryLink}>
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

