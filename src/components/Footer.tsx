'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section}        
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
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        {/*right section}
        {/* Contact Section */}
        <div className={styles.section}>
          <h3>Get In Touch</h3>
          <div className={styles.contact}>
            <p className={styles.address}>
              📍 123 Tech Street, City Name<br />
              State/Province, Country - 123456
            </p>
            <p>
              📞 <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>
              ✉️ <a href="mailto:info@myapp.com">info@myapp.com</a>
            </p>
            <p>
              💬 <a href="#skype">Call on Skype</a>
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.logo}>MyApp</div>
          <p className={styles.tagline}>Building digital solutions for tomorrow</p>
          <div className={styles.followUs}>
            <h4>Follow us</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2025 MyApp. All rights reserved.
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
