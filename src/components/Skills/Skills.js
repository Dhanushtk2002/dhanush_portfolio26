'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { skills } from '@/data/portfolioData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
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
            MY SKILLS
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Technical & Soft Skills</h2>
          <p className="section-subtitle">A comprehensive list of technologies and concepts I specialize in.</p>
        </motion.div>

        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div 
              key={index} 
              className={`glass-card ${styles.skillCard}`}
              variants={itemVariants}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillList}>
                {category.items.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillItem}>
                    <div className={styles.dot}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
