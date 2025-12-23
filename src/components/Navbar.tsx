'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
            MyApp
          </Link>
        </div>

        <div className={styles.center}>
          <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <li>
              <Link href="/" className={isActive('/') ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/services" className={isActive('/services') ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/company" className={isActive('/company') ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Company</Link>
            </li>
            <li>
              <Link href="/industries" className={isActive('/industries') ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Industries</Link>
            </li>
             <li>
              <Link href="/blog" className={isActive('/blog') ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <Link href="/contact" className={`${styles.contactButton} ${isActive('/contact') ? styles.activeContact : ''}`} onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <a href="tel:+1234567890" className={styles.phoneButton} aria-label="Call us">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isOpen ? styles.active : ''}></span>
            <span className={isOpen ? styles.active : ''}></span>
            <span className={isOpen ? styles.active : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
