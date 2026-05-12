'use client';

import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Code2, Link, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-label">
            <span className="label-line label-line-left"></span>
            GET IN TOUCH
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p>I'm currently looking for new opportunities. My inbox is always open.</p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Code2 size={24} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Link size={24} /></a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.contactForm}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-card">
              <div className={styles.formGroup}>
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label>Your Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" required />
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows="5" placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
