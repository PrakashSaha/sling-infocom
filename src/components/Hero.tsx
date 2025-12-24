"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroGradientOverlay}></div>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroBadge}
            >
              <span className={styles.badgeIcon}>✨</span>
              <span>Trusted by 200+ Global Companies</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={styles.heroTitle}
            >
              Empowering Digital Transformation
              <br />
              <span className={styles.highlight}>Through Innovation & Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.heroDescription}
            >
              We deliver enterprise-grade technology solutions that drive measurable business outcomes.
              From cutting-edge web applications to AI-powered platforms, we transform your vision into
              scalable digital products that outperform the competition.
            </motion.p>

            <motion.div
              className={styles.heroStats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <motion.button
                  className={styles.primary}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Free Consultation</span>
                  <span className={styles.buttonArrow}>→</span>
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className={styles.secondary}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Solutions
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className={styles.trustedBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className={styles.trustedByText}>Trusted by industry leaders</p>
              <div className={styles.trustedByLogos}>
                {["Fortune 500", "Startups", "SMEs", "Enterprises"].map((item, i) => (
                  <span key={i} className={styles.trustedByBadge}>{item}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className={styles.heroImageContainer}>
            <div className={styles.floatingCard} style={{ top: "5%", left: "5%", animationDelay: "0s" }}>
              <div className={styles.cardIcon}>🌐</div>
              <div className={styles.cardText}>Web Apps</div>
            </div>
            <div className={styles.floatingCard} style={{ top: "20%", right: "8%", animationDelay: "0.3s" }}>
              <div className={styles.cardIcon}>📱</div>
              <div className={styles.cardText}>Mobile</div>
            </div>
            <div className={styles.floatingCard} style={{ top: "35%", left: "2%", animationDelay: "0.6s" }}>
              <div className={styles.cardIcon}>🚀</div>
              <div className={styles.cardText}>AI/ML</div>
            </div>
            <div className={styles.floatingCard} style={{ top: "50%", right: "12%", animationDelay: "0.9s" }}>
              <div className={styles.cardIcon}>☁️</div>
              <div className={styles.cardText}>Cloud</div>
            </div>
            <div className={styles.floatingCard} style={{ top: "65%", left: "8%", animationDelay: "1.2s" }}>
              <div className={styles.cardIcon}>🔒</div>
              <div className={styles.cardText}>Security</div>
            </div>
            <div className={styles.floatingCard} style={{ top: "80%", right: "5%", animationDelay: "1.5s" }}>
              <div className={styles.cardIcon}>📊</div>
              <div className={styles.cardText}>Analytics</div>
            </div>
            <div className={styles.floatingCard} style={{ bottom: "10%", left: "12%", animationDelay: "1.8s" }}>
              <div className={styles.cardIcon}>⚡</div>
              <div className={styles.cardText}>DevOps</div>
            </div>
            <div className={styles.heroMainVisual}>
              <div className={styles.visualGrid}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={styles.gridCell}></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
