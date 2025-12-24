"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Sling Infocom transformed our business with their exceptional web application. The team's expertise and dedication to quality is unmatched. Our user engagement increased by 300% after launch.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "CTO, Enterprise Solutions",
    content:
      "Working with Sling Infocom has been a game-changer. They delivered a scalable mobile app that handles millions of users seamlessly. Their technical expertise and business acumen are outstanding.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, E-Commerce Plus",
    content:
      "The digital transformation journey with Sling Infocom exceeded our expectations. They not only built our platform but also provided strategic insights that helped us grow 5x in the first year.",
    rating: 5,
    avatar: "👩‍🎨",
  },
  {
    name: "David Thompson",
    role: "VP Engineering, SaaS Corp",
    content:
      "Outstanding service and delivery. Sling Infocom's agile approach and attention to detail helped us launch our product ahead of schedule. Highly recommend their services.",
    rating: 5,
    avatar: "👨‍🔬",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2>What Our Clients Say</h2>
          <p>Real feedback from businesses we've helped transform</p>
        </motion.div>

        <div className={styles.carousel}>
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className={styles.slider}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${styles.slide} ${
                  index === currentIndex ? styles.active : ""
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.card}>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className={styles.content}>"{testimonial.content}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>{testimonial.avatar}</div>
                    <div>
                      <div className={styles.name}>{testimonial.name}</div>
                      <div className={styles.role}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

