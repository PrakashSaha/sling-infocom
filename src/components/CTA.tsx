"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Home.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBackground}></div>
      <div className={styles.ctaGradient}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.ctaBadge}
          >
            <span>Ready to Transform Your Business?</span>
          </motion.div>

          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's Build Something
            <br />
            <span className={styles.ctaHighlight}>Extraordinary Together</span>
          </motion.h2>

          <motion.p
            className={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get expert guidance, a clear roadmap, and a dedicated team to bring your
            digital vision to life. Start your transformation journey today with a free consultation.
          </motion.p>

          <motion.div
            className={styles.ctaActions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.button
                className={styles.ctaPrimary}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Free Consultation</span>
                <span className={styles.ctaArrow}>→</span>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                className={styles.ctaSecondary}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Solutions
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className={styles.ctaTrust}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.ctaTrustItem}>
              <span className={styles.ctaTrustIcon}>✓</span>
              <span>No Credit Card Required</span>
            </div>
            <div className={styles.ctaTrustItem}>
              <span className={styles.ctaTrustIcon}>✓</span>
              <span>Response within 24 Hours</span>
            </div>
            <div className={styles.ctaTrustItem}>
              <span className={styles.ctaTrustIcon}>✓</span>
              <span>100% Confidential</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
