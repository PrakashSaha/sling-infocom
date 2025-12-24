'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Services Section */}
        <div className={styles.section}>
          <h3>Our Services</h3>
          <ul>
            <li><Link href="/services#web">Web Development</Link></li>
            <li><Link href="/services#mobile">Mobile App Development</Link></li>
            <li><Link href="/services#ui">UI/UX Design</Link></li>
            <li><Link href="/services#qa">Quality Assurance</Link></li>
            <li><Link href="/services#consulting">Consulting</Link></li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div className={styles.section}>
          <h3>About Company</h3>
          <ul>
            <li><Link href="/company">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/blog">Latest Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Contact & Brand Section */}
        <div className={styles.contactSection}>
          {/* Logo & Tagline */}
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>Sling Infocom</span>
            </div>
            <p className={styles.tagline}>Building digital solutions for tomorrow</p>
          </div>
          
          {/* Social Links */}
          <div className={styles.followUs}>
            <h4>Follow us</h4>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <span>📘</span>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <span>🐦</span>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <span>💼</span>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={styles.contact}>
            <h4>Contact</h4>
            <p className={styles.address}>
              📍 123 Tech Street, City Name<br />State/Province, Country - 123456
            </p>
            <p className={styles.contactItem}>
              📞 <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p className={styles.contactItem}>
              ✉️ <a href="mailto:info@slinginfocom.com">info@slinginfocom.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2025 Sling Infocom. All rights reserved.
        </p>
        <div className={styles.policies}>
          <Link href="#privacy">Privacy Policy</Link>
          <span>|</span>
          <Link href="#terms">Terms of Service</Link>
          <span>|</span>
          <Link href="#cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
