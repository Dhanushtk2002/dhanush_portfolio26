'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import { experience } from '@/data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
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
            MY EXPERIENCE
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Work Experience</h2>
          <p className="section-subtitle">My professional journey in software development.</p>
        </motion.div>

        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot}>
                <Briefcase size={16} />
              </div>
              <div className={`glass-card ${styles.timelineContent}`}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <ul className={styles.description}>
                  {exp.description.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
