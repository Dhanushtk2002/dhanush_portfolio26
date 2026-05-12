'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import styles from './Achievements.module.css';

const achievementsData = [
  {
    title: "Best Performer 2025",
    organization: "NIM Technologies",
    description: "Awarded for exceptional performance in building frontend components for the ERP project."
  },
  {
    title: "Web Hackathon Winner",
    organization: "Networkz Systems",
    description: "Won first place for developing a responsive e-commerce dashboard in 24 hours."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
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
            MY ACHIEVEMENTS
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Key Achievements</h2>
          <p className="section-subtitle">Recognition and milestones in my development career.</p>
        </motion.div>

        <div className={styles.grid}>
          {achievementsData.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.achCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <Trophy size={24} />
              </div>
              <h3 className={styles.achTitle}>{item.title}</h3>
              <p className={styles.org}>{item.organization}</p>
              <p className={styles.desc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
