'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
            Logo
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
          </ul>
        </div>

        <div className={styles.right}>
          <Link href="/contact" className={`${styles.contactButton} ${isActive('/contact') ? styles.activeContact : ''}`} onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

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
