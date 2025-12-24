"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: "🚀", color: "#ef4444" },
  { value: 200, suffix: "+", label: "Happy Clients", icon: "😊", color: "#f59e0b" },
  { value: 50, suffix: "+", label: "Expert Team Members", icon: "👥", color: "#8b5cf6" },
  { value: 15, suffix: "+", label: "Years of Experience", icon: "⭐", color: "#fbbf24" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-section" className={styles.stats}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2>Trusted by Industry Leaders</h2>
          <p>Numbers that speak for our commitment to excellence</p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper} style={{ background: `${stat.color}20` }}>
                <div className={styles.icon} style={{ color: stat.color }}>{stat.icon}</div>
              </div>
              <div className={styles.value} style={{ color: stat.color }}>
                {isVisible ? (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

