"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./company.module.css";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: "🚀", color: "#2563eb" },
  { value: 200, suffix: "+", label: "Global Clients", icon: "🌍", color: "#22c55e" },
  { value: 50, suffix: "+", label: "Expert Engineers", icon: "👥", color: "#8b5cf6" },
  { value: 15, suffix: "+", label: "Years Experience", icon: "⭐", color: "#f59e0b" },
];

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through innovative technology solutions.",
    icon: "🎯",
  },
  {
    year: "2012",
    title: "First Major Client",
    description: "Secured partnership with Fortune 500 company, establishing enterprise credibility.",
    icon: "🏆",
  },
  {
    year: "2016",
    title: "Global Expansion",
    description: "Expanded operations internationally, serving clients across 25+ countries.",
    icon: "🌍",
  },
  {
    year: "2020",
    title: "AI & ML Division",
    description: "Launched dedicated division for emerging technologies and AI solutions.",
    icon: "🤖",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as top IT services provider with 500+ successful projects.",
    icon: "👑",
  },
];

const teamDepartments = [
  {
    department: "Engineering",
    count: "25+",
    description: "Senior developers, architects, and technical leads",
    icon: "💻",
    color: "#2563eb",
  },
  {
    department: "Design",
    count: "12+",
    description: "UI/UX designers and creative professionals",
    icon: "🎨",
    color: "#8b5cf6",
  },
  {
    department: "Quality Assurance",
    count: "8+",
    description: "QA engineers and testing specialists",
    icon: "🔍",
    color: "#22c55e",
  },
  {
    department: "Project Management",
    count: "10+",
    description: "Certified PMPs and agile coaches",
    icon: "📊",
    color: "#f59e0b",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security", icon: "🔒" },
  { name: "CMMI Level 5", desc: "Process Maturity", icon: "⭐" },
  { name: "AWS Partner", desc: "Cloud Solutions", icon: "☁️" },
  { name: "Microsoft Gold", desc: "Technology Partner", icon: "💼" },
];

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
  return <>{count}{suffix}</>;
}

export default function CompanyPage() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsStatsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("company-stats");
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

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
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>🏢</span>
              <span>Enterprise IT Solutions Since 2009</span>
            </div>
            <h1 className={styles.heroTitle}>About Sling Infocom</h1>
            <p className={styles.heroSubtext}>
              We are a global technology partner with 15+ years of experience delivering enterprise-grade
              software solutions. Our team of 50+ experts combines deep technical expertise with business
              acumen to transform organizations through innovative technology.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <div className={styles.heroStatNumber}>500+</div>
                <div className={styles.heroStatLabel}>Projects</div>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStatItem}>
                <div className={styles.heroStatNumber}>200+</div>
                <div className={styles.heroStatLabel}>Clients</div>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStatItem}>
                <div className={styles.heroStatNumber}>15+</div>
                <div className={styles.heroStatLabel}>Years</div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroPattern}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="company-stats" className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.statIcon} style={{ background: `${stat.color}15`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div className={styles.statValue} style={{ color: stat.color }}>
                  {isStatsVisible ? <CountUp target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <div className={styles.sectionBadge}>
              <span>✨</span>
              <span>Our Foundation</span>
            </div>
            <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
            <p className={styles.sectionSubtitle}>
              Driving digital transformation through innovation and excellence
            </p>
          </motion.div>
          <div className={styles.missionVisionGrid}>
            <motion.div
              className={`${styles.missionVisionCard} ${styles.missionCard}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -12 }}
            >
              <div className={styles.cardGradient}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIconWrapper}>
                  <div className={styles.cardIconBackground}></div>
                  <div className={styles.cardIcon}>🎯</div>
                  <div className={styles.cardIconGlow}></div>
                </div>
                <div className={styles.cardBadge}>Mission</div>
                <h2 className={styles.cardTitle}>Our Mission</h2>
                <p className={styles.cardText}>
                  To empower businesses with cutting-edge technology solutions that drive growth,
                  enhance efficiency, and create lasting competitive advantages in the digital landscape.
                  We combine technical excellence with strategic thinking to deliver measurable business outcomes.
                </p>
                <div className={styles.cardAccent}></div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.missionVisionCard} ${styles.visionCard}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              whileHover={{ y: -12 }}
            >
              <div className={styles.cardGradient}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIconWrapper}>
                  <div className={styles.cardIconBackground}></div>
                  <div className={styles.cardIcon}>👁️</div>
                  <div className={styles.cardIconGlow}></div>
                </div>
                <div className={styles.cardBadge}>Vision</div>
                <h2 className={styles.cardTitle}>Our Vision</h2>
                <p className={styles.cardText}>
                  To be the leading technology partner that transforms businesses through innovation,
                  helping organizations worldwide achieve their digital transformation goals. We envision
                  a future where technology seamlessly integrates with business strategy to create unprecedented value.
                </p>
                <div className={styles.cardAccent}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionSubtitle}>
              Milestones that shaped our growth and expertise
            </p>
          </motion.div>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot}></div>
                  {index < timeline.length - 1 && <div className={styles.timelineLine}></div>}
                </div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineCardHeader}>
                    <div className={styles.timelineYearBadge}>{item.year}</div>
                    <div className={styles.timelineIconWrapper}>
                      <div className={styles.timelineIcon}>{item.icon}</div>
                    </div>
                  </div>
                  <div className={styles.timelineCardBody}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                  <div className={styles.timelineCardGradient}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "We stay ahead of technology trends and continuously explore new solutions to solve complex business challenges.",
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We build long-term relationships with our clients, working as an extension of their team to achieve shared success.",
              },
              {
                icon: "⚡",
                title: "Excellence",
                description: "We are committed to delivering exceptional quality in every project, exceeding expectations and setting new standards.",
              },
              {
                icon: "🔒",
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our business dealings and client interactions.",
              },
              {
                icon: "🚀",
                title: "Agility",
                description: "We adapt quickly to changing requirements and market conditions, ensuring fast delivery without compromising quality.",
              },
              {
                icon: "🎓",
                title: "Continuous Learning",
                description: "We invest in our team's growth and stay updated with the latest technologies and industry best practices.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Our Expert Team</h2>
            <p className={styles.sectionSubtitle}>
              Talented professionals driving innovation and excellence
            </p>
          </motion.div>
          <div className={styles.teamGrid}>
            {teamDepartments.map((dept, index) => (
              <motion.div
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.teamIcon} style={{ background: `${dept.color}15`, color: dept.color }}>
                  {dept.icon}
                </div>
                <div className={styles.teamCount} style={{ color: dept.color }}>{dept.count}</div>
                <h3 className={styles.teamDepartment}>{dept.department}</h3>
                <p className={styles.teamDescription}>{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Why Choose Sling Infocom?</h2>
            <p className={styles.sectionSubtitle}>
              What sets us apart in the technology services industry
            </p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {[
              {
                title: "Proven Track Record",
                description: "500+ successful projects delivered across various industries with 98% client satisfaction rate",
                icon: "📊",
                color: "#2563eb",
              },
              {
                title: "Expert Team",
                description: "50+ skilled professionals with diverse technical expertise and industry certifications",
                icon: "👥",
                color: "#22c55e",
              },
              {
                title: "Industry Experience",
                description: "15+ years of experience serving clients worldwide across multiple verticals",
                icon: "🌍",
                color: "#8b5cf6",
              },
              {
                title: "Client Satisfaction",
                description: "200+ happy clients who trust us with their technology needs and digital transformation",
                icon: "😊",
                color: "#f59e0b",
              },
              {
                title: "Agile Methodology",
                description: "Fast, iterative development with continuous feedback and rapid deployment cycles",
                icon: "⚡",
                color: "#ef4444",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance to keep your systems running smoothly",
                icon: "🛡️",
                color: "#06b6d4",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.featureIcon} style={{ color: feature.color }}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Certifications & Partnerships</h2>
            <p className={styles.sectionSubtitle}>
              Recognized excellence and strategic technology partnerships
            </p>
          </motion.div>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={styles.certIcon}>{cert.icon}</div>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certDesc}>{cert.desc}</p>
              </motion.div>
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
            <div className={styles.ctaBadge}>
              <span>🚀</span>
              <span>Partner With Us</span>
            </div>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaText}>
              Let's discuss how we can help transform your business with innovative technology solutions.
              Join 200+ companies that trust us with their digital transformation journey.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Get in Touch
                <span className={styles.ctaArrow}>→</span>
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
                View Our Services
              </Link>
            </div>
            <div className={styles.ctaTrust}>
              <div className={styles.ctaTrustItem}>
                <span className={styles.ctaTrustIcon}>✓</span>
                <span>Free Consultation</span>
              </div>
              <div className={styles.ctaTrustItem}>
                <span className={styles.ctaTrustIcon}>✓</span>
                <span>No Commitment</span>
              </div>
              <div className={styles.ctaTrustItem}>
                <span className={styles.ctaTrustIcon}>✓</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
