"use client";

import { motion } from "framer-motion";
import styles from "./LogoCarousel.module.css";

const logos = [
  {
    id: 1,
    name: "LogoIpsum",
    component: (
      <div className={styles.logo1}>
        <div className={styles.logo1Shapes}>
          <div className={styles.logo1Shape}></div>
          <div className={styles.logo1Shape}></div>
        </div>
        <span className={styles.logo1Text}>LOGOIPSUM</span>
      </div>
    ),
  },
  {
    id: 2,
    name: "Logo",
    component: (
      <div className={styles.logo2}>
        <div className={styles.logo2L}>
          <div className={styles.logo2Square}></div>
        </div>
        <span className={styles.logo2Text}>LOGO</span>
      </div>
    ),
  },
  {
    id: 3,
    name: "LogoIpsum",
    component: (
      <div className={styles.logo3}>
        <div className={styles.logo3Shapes}>
          <div className={styles.logo3Square}></div>
          <div className={styles.logo3Circle}></div>
          <div className={styles.logo3Circle}></div>
        </div>
        <span className={styles.logo3Text}>logoipsum'</span>
      </div>
    ),
  },
  {
    id: 4,
    name: "LogoIpsum",
    component: (
      <div className={styles.logo4}>
        <div className={styles.logo4Bars}>
          <div className={styles.logo4Bar} style={{ height: "20px" }}></div>
          <div className={styles.logo4Bar} style={{ height: "30px" }}></div>
          <div className={styles.logo4Bar} style={{ height: "40px" }}></div>
          <div className={styles.logo4Bar} style={{ height: "50px" }}></div>
          <div className={styles.logo4Bar} style={{ height: "60px" }}></div>
        </div>
        <span className={styles.logo4Text}>LOGOIPSUM</span>
      </div>
    ),
  },
  {
    id: 5,
    name: "LogoIpsum",
    component: (
      <div className={styles.logo5}>
        <div className={styles.logo5Dots}>
          {[...Array(9)].map((_, i) => (
            <div key={i} className={styles.logo5Dot}></div>
          ))}
        </div>
        <span className={styles.logo5Text}>logoipsum'</span>
      </div>
    ),
  },
  {
    id: 6,
    name: "Infinity",
    component: (
      <div className={styles.logo6}>
        <svg
          width="60"
          height="30"
          viewBox="0 0 60 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 5C20 5 15 10 15 15C15 20 20 25 25 25C30 25 35 20 35 15C35 10 30 5 25 5Z"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M25 25C30 25 35 20 35 15C35 10 30 5 25 5C20 5 15 10 15 15C15 20 20 25 25 25Z"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
  },
];

export default function LogoCarousel() {
  // Duplicate logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className={styles.logoItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {logo.component}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

