"use client";

import { motion } from "framer-motion";
import styles from "./Home.module.css";

const features = [
  {
    title: "Business-First Development",
    desc: "Every solution is strategically designed with your business objectives at the core, ensuring maximum ROI and measurable outcomes.",
    icon: "🎯",
    color: "#3b82f6",
    stat: "100%",
    statLabel: "Client-Focused",
  },
  {
    title: "Expert Engineering Team",
    desc: "Our seasoned professionals bring 15+ years of combined experience in enterprise software development and cutting-edge technologies.",
    icon: "👨‍💻",
    color: "#10b981",
    stat: "50+",
    statLabel: "Experts",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Built with security-first architecture that scales seamlessly, meeting the highest industry standards and compliance requirements.",
    icon: "🔒",
    color: "#f59e0b",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    title: "Strategic Partnership",
    desc: "We're not just vendors—we're your long-term technology partners committed to your sustained growth and digital success.",
    icon: "🤝",
    color: "#8b5cf6",
    stat: "200+",
    statLabel: "Partners",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.whyHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.whyTitle}>The Sling Infocom Advantage</h2>
          <p className={styles.whySubtitle}>
            We combine technical excellence with strategic business insights to deliver
            solutions that drive measurable growth and competitive advantage.
          </p>
        </motion.div>

        <div className={styles.whyGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={styles.whyCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.whyCardHeader} style={{ borderTopColor: feature.color }}>
                <div className={styles.whyIconWrapper} style={{ background: `${feature.color}15` }}>
                  <div className={styles.featureIcon} style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                </div>
                <div className={styles.whyStat}>
                  <div className={styles.whyStatNumber} style={{ color: feature.color }}>
                    {feature.stat}
                  </div>
                  <div className={styles.whyStatLabel}>{feature.statLabel}</div>
                </div>
              </div>
              <div className={styles.whyCardBody}>
                <h3 className={styles.whyCardTitle}>{feature.title}</h3>
                <p className={styles.whyCardDesc}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
