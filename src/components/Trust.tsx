"use client";

import { motion } from "framer-motion";
import styles from "./Home.module.css";

const trustPoints = [
  { 
    icon: "🔒", 
    title: "Secure Architecture", 
    desc: "Enterprise-grade security",
    iconColor: "#f97316" // Orange
  },
  { 
    icon: "⚡", 
    title: "Scalable Systems", 
    desc: "Built for growth",
    iconColor: "#f97316" // Orange
  },
  { 
    icon: "🔁", 
    title: "Agile Delivery", 
    desc: "Fast & iterative",
    iconColor: "#2563eb" // Blue
  },
  { 
    icon: "⏱", 
    title: "On-Time Execution", 
    desc: "Reliable delivery",
    iconColor: "#374151" // Dark grey
  },
];

export default function Trust() {
  // Duplicate trust points multiple times for seamless infinite scroll
  // We need enough duplicates to ensure seamless looping
  const duplicatedPoints = [
    ...trustPoints,
    ...trustPoints,
    ...trustPoints,
    ...trustPoints,
  ];

  return (
    <section className={styles.trust}>
      <div className={styles.trustCarouselWrapper}>
        <div className={styles.trustCarousel}>
          {duplicatedPoints.map((point, index) => (
            <motion.div
              key={`${point.title}-${index}`}
              className={styles.trustItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.trustIcon} style={{ color: point.iconColor }}>
                {point.icon}
              </div>
              <h3 className={styles.trustTitle}>{point.title}</h3>
              <span className={styles.trustDesc}>{point.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
