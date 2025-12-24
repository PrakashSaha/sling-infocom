"use client";

import { motion } from "framer-motion";
import styles from "./Home.module.css";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "Deep-dive analysis of your business objectives, target audience, and technical requirements to create a comprehensive roadmap.",
    icon: "🔍",
    number: "01",
    color: "#3b82f6",
    duration: "1-2 weeks",
  },
  {
    title: "Design & Prototyping",
    desc: "Creating intuitive, user-centric designs with interactive prototypes that align with your brand and user expectations.",
    icon: "🎨",
    number: "02",
    color: "#10b981",
    duration: "2-3 weeks",
  },
  {
    title: "Development & Testing",
    desc: "Agile development with continuous testing, ensuring robust, scalable solutions built with industry best practices.",
    icon: "⚙️",
    number: "03",
    color: "#f59e0b",
    duration: "4-12 weeks",
  },
  {
    title: "Launch & Optimization",
    desc: "Seamless deployment, performance optimization, and ongoing support to ensure your product thrives in production.",
    icon: "🚀",
    number: "04",
    color: "#8b5cf6",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.processHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Our Methodology</span>
          </div>
          <h2 className={styles.processTitle}>Proven Development Process</h2>
          <p className={styles.processSubtitle}>
            A systematic approach that ensures on-time delivery, quality excellence,
            and measurable business outcomes.
          </p>
        </motion.div>

        <div className={styles.processGrid}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.processCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.processCardTop}>
                <div className={styles.processNumber} style={{ color: step.color }}>
                  {step.number}
                </div>
                <div className={styles.processIconWrapper} style={{ background: `${step.color}15` }}>
                  <div className={styles.processIcon} style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </div>
              </div>
              <div className={styles.processCardBody}>
                <h3 className={styles.processCardTitle}>{step.title}</h3>
                <p className={styles.processCardDesc}>{step.desc}</p>
                <div className={styles.processDuration} style={{ color: step.color }}>
                  <span className={styles.durationIcon}>⏱</span>
                  <span>{step.duration}</span>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.processConnector} style={{ background: step.color }}>
                  <div className={styles.connectorLine}></div>
                  <div className={styles.connectorArrow}>→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

