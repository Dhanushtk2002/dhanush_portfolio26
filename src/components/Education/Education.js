'use client';

import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { education } from '@/data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
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
            MY EDUCATION
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Academic Background</h2>
          <p className="section-subtitle">My academic background and specialized training.</p>
        </motion.div>

        <div className={styles.grid}>
          {education.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.eduCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.period}>{item.period}</div>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.school}>{item.school}</p>
              <p className={styles.desc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
