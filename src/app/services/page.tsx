"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./services.module.css";

const services = [
  {
    id: "web",
    title: "Web Application Development",
    icon: "🌐",
    image: "/images/services/web-app.svg",
    description: "Boost efficiency and drive growth with custom web applications. Our expert developers leverage the latest frameworks to build scalable, secure, and robust solutions tailored for your business operations. From e-commerce portals to enterprise dashboards, we ensure seamless integration and a user-friendly experience.",
    keywords: "web app development, custom web applications, scalable solutions",
    features: [
      "Custom web application development",
      "E-commerce portal development",
      "Enterprise dashboard solutions",
      "API integration and development",
      "Cloud-based applications",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    icon: "📱",
    image: "/images/services/mobile-app.svg",
    description: "Engage your customers on the go with powerful mobile applications. We specialize in creating intuitive iOS and Android apps, from concept to launch, that deliver exceptional user experiences and foster brand loyalty.",
    keywords: "mobile app development, iOS/Android apps, cross-platform mobile solutions",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions (React Native, Flutter)",
      "App UI/UX design",
      "App store optimization",
      "Mobile app maintenance and support",
    ],
  },
  {
    id: "website",
    title: "Website Development",
    icon: "💻",
    image: "/images/services/website.svg",
    description: "Make a lasting impression with a professional website. Our team designs and develops responsive websites that captivate your audience, support your SEO strategy, and convert visitors into loyal customers.",
    keywords: "website development, responsive design, business websites",
    features: [
      "Responsive website design",
      "SEO-optimized websites",
      "Content Management Systems (CMS)",
      "E-commerce website development",
      "Landing page optimization",
      "Website maintenance and updates",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing Services",
    icon: "📈",
    image: "/images/services/digital-marketing.svg",
    description: "Maximize your online presence and ROI with our results-driven digital marketing services. From SEO and content marketing to PPC, social media, and email campaigns, we help you reach and convert your ideal audience.",
    keywords: "digital marketing, SEO services, social media marketing",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Social Media Marketing (SMM)",
      "Content marketing and strategy",
      "Email marketing campaigns",
      "Analytics and performance tracking",
    ],
  },
  {
    id: "custom",
    title: "Custom Software Development",
    icon: "⚙️",
    image: "/images/services/custom-software.svg",
    description: "Solve unique business challenges with tailor-made software. Our custom software development services streamline your processes, automate workflows, and enhance productivity with secure, scalable applications.",
    keywords: "custom software development, business automation, enterprise software",
    features: [
      "Custom enterprise software",
      "Business process automation",
      "Workflow management systems",
      "Database design and development",
      "Software integration services",
      "Legacy system modernization",
    ],
  },
  {
    id: "emerging",
    title: "Emerging Technologies",
    icon: "🚀",
    image: "/images/services/emerging-tech.svg",
    description: "Stay ahead of the competition with our expertise in emerging tech like Artificial Intelligence, Blockchain, and the Internet of Things. We develop innovative solutions that future-proof your business and unlock new opportunities.",
    keywords: "Artificial Intelligence solutions, Blockchain development, IoT services",
    features: [
      "Artificial Intelligence (AI) solutions",
      "Machine Learning (ML) development",
      "Blockchain development",
      "Internet of Things (IoT) services",
      "Chatbot development",
      "Data analytics and insights",
    ],
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: "🚀", color: "#2563eb" },
  { value: 200, suffix: "+", label: "Happy Clients", icon: "😊", color: "#22c55e" },
  { value: 50, suffix: "+", label: "Expert Team", icon: "👥", color: "#8b5cf6" },
  { value: 15, suffix: "+", label: "Years Experience", icon: "⭐", color: "#f59e0b" },
];

const whyChoose = [
  {
    title: "Industry Expertise",
    desc: "15+ years of experience delivering enterprise-grade solutions across multiple industries.",
    icon: "🏆",
    color: "#2563eb",
  },
  {
    title: "Agile Methodology",
    desc: "Fast, iterative development with continuous feedback and rapid deployment cycles.",
    icon: "⚡",
    color: "#22c55e",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
    icon: "🛡️",
    color: "#f59e0b",
  },
  {
    title: "Cost-Effective",
    desc: "Transparent pricing with flexible engagement models that fit your budget and timeline.",
    icon: "💰",
    color: "#8b5cf6",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We analyze your business needs, goals, and technical requirements to create a comprehensive roadmap.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Our UX/UI experts create intuitive designs and interactive prototypes for stakeholder approval.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Development & Testing",
    desc: "Agile development with continuous testing, code reviews, and quality assurance at every stage.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Deployment & Support",
    desc: "Seamless launch with comprehensive documentation, training, and ongoing maintenance support.",
    icon: "🚀",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Sling Infocom transformed our business with their exceptional web application. The team's expertise and dedication to quality is unmatched.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "CTO, Enterprise Solutions",
    content: "Working with Sling Infocom has been a game-changer. They delivered a scalable mobile app that handles millions of users seamlessly.",
    rating: 5,
    avatar: "👨‍💻",
  },
];


function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function ServicesPage() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsStatsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("services-stats");
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
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
                <span className={styles.badgeIcon}>✨</span>
                <span>Trusted by 200+ Companies Worldwide</span>
              </div>
              <h1 className={styles.heroTitle}>
                Empowering Digital Transformation with Innovative IT Solutions
              </h1>
              <p className={styles.heroSubtext}>
                Accelerate your business growth with cutting-edge web and mobile apps,
                custom software, and strategic digital marketing tailored to your goals.
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
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Get Free Consultation
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <Link href="#services" className={styles.secondaryButton}>
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroPattern}></div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="services-stats" className={styles.statsSection}>
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

        {/* Why Choose Section */}
        <section className={styles.whyChooseSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionHeader}
            >
              <h2 className={styles.sectionTitle}>Why Choose Our Services</h2>
              <p className={styles.sectionSubtitle}>
                We combine technical excellence with business acumen to deliver solutions that drive real results.
              </p>
            </motion.div>
            <div className={styles.whyChooseGrid}>
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.whyChooseCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={styles.whyChooseIcon} style={{ background: `${item.color}15`, color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className={styles.whyChooseTitle}>{item.title}</h3>
                  <p className={styles.whyChooseDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.servicesSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionHeader}
            >
              <h2 className={styles.sectionTitle}>Our IT Services</h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive technology services focused on business outcomes.
              </p>
            </motion.div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.article
                  key={service.id}
                  id={service.id}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.serviceNumber}>0{index + 1}</div>
                  <div className={styles.serviceImageWrapper}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <div className={styles.serviceImagePlaceholder}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.serviceImage}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <div className={styles.serviceFeatures}>
                      <h4 className={styles.featuresTitle}>Key Features:</h4>
                      <ul className={styles.featuresList}>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className={styles.serviceCTA}>
                      Get Started →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionHeader}
            >
              <h2 className={styles.sectionTitle}>How We Work</h2>
              <p className={styles.sectionSubtitle}>
                A proven methodology that ensures quality, transparency, and timely delivery.
              </p>
            </motion.div>
            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={styles.processCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={styles.processNumber}>{step.step}</div>
                  <div className={styles.processIcon}>{step.icon}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                  {index < processSteps.length - 1 && (
                    <div className={styles.processConnector}>→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionHeader}
            >
              <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
              <p className={styles.sectionSubtitle}>
                Real feedback from businesses we've helped transform.
              </p>
            </motion.div>
            <div className={styles.testimonialsWrapper}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`${styles.testimonialCard} ${currentTestimonial === index ? styles.active : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.testimonialContent}>
                    <div className={styles.testimonialStars}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <p className={styles.testimonialText}>"{testimonial.content}"</p>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.testimonialAvatar}>{testimonial.avatar}</div>
                      <div>
                        <div className={styles.testimonialName}>{testimonial.name}</div>
                        <div className={styles.testimonialRole}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.testimonialDot} ${currentTestimonial === index ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase Section */}
        <section className={styles.techStackShowcase}>
          <div className={styles.container}>
            <div className={styles.techStackContent}>
              <motion.div
                className={styles.techStackLeft}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={styles.techStackTitle}>
                  Building With Innovation<br />Our Tech Stack
                </h2>
                <p className={styles.techStackDescription}>
                  Unleash speed and efficiency with our comprehensive technology stack. We leverage cutting-edge frameworks, 
                  platforms, and tools designed for crafting stunning, high-performance applications across web, mobile, 
                  and cloud platforms. Our expertise spans from frontend frameworks to backend services, ensuring seamless 
                  integration and optimal performance.
                </p>
                <Link href="/contact" className={styles.techStackButton}>
                  Know More
                  <span className={styles.techStackArrow}>→</span>
                </Link>
                <div className={styles.techStackPerson}>
                  <div className={styles.personIcon}>👨‍💻</div>
                  <div className={styles.personShapes}>
                    <div className={styles.shape1}></div>
                    <div className={styles.shape2}></div>
                    <div className={styles.shape3}></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={styles.techStackRight}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.techStackGrid}>
                  {[
                    { name: "Google Cloud", icon: "☁️", color: "#4285F4" },
                    { name: "React", icon: "⚛️", color: "#61DAFB" },
                    { name: "TypeScript", icon: "📘", color: "#3178C6" },
                    { name: "Kotlin", icon: "🟣", color: "#7F52FF" },
                    { name: "Flutter", icon: "📱", color: "#02569B" },
                    { name: "Java", icon: "☕", color: "#ED8B00" },
                    { name: "Salesforce", icon: "💼", color: "#00A1E0" },
                    { name: "Selenium", icon: "🤖", color: "#43B02A" },
                    { name: "MySQL", icon: "🐬", color: "#4479A1" },
                    { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
                    { name: "Node.js", icon: "🟢", color: "#339933" },
                    { name: "Shopify", icon: "🛍️", color: "#96BF48" },
                    { name: "C#", icon: "🔷", color: "#239120" },
                    { name: "Python", icon: "🐍", color: "#3776AB" },
                    { name: "Swift", icon: "🍎", color: "#FA7343" },
                    { name: "AWS", icon: "☁️", color: "#FF9900" },
                    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
                    { name: "MongoDB", icon: "🍃", color: "#47A248" },
                    { name: "HubSpot", icon: "🎯", color: "#FF7A59" },
                    { name: "Magento", icon: "🛒", color: "#EE672F" },
                    { name: "WooCommerce", icon: "🛒", color: "#96588A" },
                    { name: "Docker", icon: "🐳", color: "#2496ED" },
                    { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
                    { name: "Angular", icon: "🅰️", color: "#DD0031" },
                    { name: "Apple", icon: "🍎", color: "#000000" },
                    { name: "Android", icon: "🤖", color: "#3DDC84" },
                    { name: "Bootstrap", icon: "B", color: "#7952B3" },
                    { name: "Oracle", icon: "🗄️", color: "#F80000" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className={styles.techStackLogo}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                    >
                      <div className={styles.techStackLogoIcon} style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                      <div className={styles.techStackLogoName}>{tech.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                <span>Ready to Get Started?</span>
              </div>
              <h2 className={styles.ctaTitle}>
                Ready to Transform Your Business Through Technology?
              </h2>
              <p className={styles.ctaText}>
                Contact us today for a free consultation or request a quote! Let's discuss how we can help you achieve your digital goals.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Request Free Consultation
                  <span className={styles.ctaArrow}>→</span>
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  Get a Quote
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
    </>
  );
}
