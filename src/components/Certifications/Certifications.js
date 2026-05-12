'use client';

import { motion } from 'framer-motion';
import styles from './Certifications.module.css';
import { certifications } from '@/data/portfolioData';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
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
            MY CERTIFICATIONS
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Licenses & Certifications</h2>
          <p className="section-subtitle">A showcase of my professional achievements and verified skills.</p>
        </motion.div>

        <div className={styles.certGrid}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className={`glass-card ${styles.certCard}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <Award size={32} />
              </div>
              <div className={styles.certInfo}>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
