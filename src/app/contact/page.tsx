"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

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
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtext}>
              Ready to transform your business through technology? Contact us today for a free
              consultation or request a quote. We're here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your Company"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Application Development</option>
                    <option value="mobile">Mobile Application Development</option>
                    <option value="website">Website Development</option>
                    <option value="marketing">Digital Marketing Services</option>
                    <option value="custom">Custom Software Development</option>
                    <option value="emerging">Emerging Technologies</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className={styles.successMessage}>
                    ✓ Thank you! We've received your message and will get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className={styles.errorMessage}>
                    ✗ Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className={styles.infoWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoSubtitle}>
                Reach out to us through any of these channels. We're always ready to help.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <h3 className={styles.contactLabel}>Address</h3>
                    <p className={styles.contactValue}>
                      123 Tech Street, City Name
                      <br />
                      State/Province, Country - 123456
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div>
                    <h3 className={styles.contactLabel}>Phone</h3>
                    <p className={styles.contactValue}>
                      <a href="tel:+1234567890" className={styles.contactLink}>
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>✉️</div>
                  <div>
                    <h3 className={styles.contactLabel}>Email</h3>
                    <p className={styles.contactValue}>
                      <a href="mailto:info@slinginfocom.com" className={styles.contactLink}>
                        info@slinginfocom.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>💬</div>
                  <div>
                    <h3 className={styles.contactLabel}>Business Hours</h3>
                    <p className={styles.contactValue}>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialIcons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Twitter"
                  >
                    🐦
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="LinkedIn"
                  >
                    💼
                  </a>
                </div>
              </div>

              <div className={styles.mapSection}>
                <h3 className={styles.mapTitle}>Find Us</h3>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576576!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.map}
                    title="Company Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
