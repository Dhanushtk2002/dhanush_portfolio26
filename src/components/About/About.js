'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';
import { personalInfo } from '@/data/portfolioData';
import { GraduationCap, Brain, Code2, Rocket, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
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
            ABOUT ME
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Get to Know Me</h2>
          <p className="section-subtitle">A passionate tech enthusiast on a journey to build impactful solutions</p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.statsCardWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.statsCard}>
              <div className={styles.statsHeader}>
                <GraduationCap size={60} className={styles.gradIcon} />
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statBox}>
                  <h3 className="gradient-text">{personalInfo.stats.cgpa}</h3>
                  <p>CGPA</p>
                </div>
                <div className={styles.statBox}>
                  <h3 className="gradient-text">{personalInfo.stats.year}</h3>
                  <p>Tech Stack</p>
                </div>
                <div className={styles.statBox}>
                  <h3 className="gradient-text">{personalInfo.stats.projects}</h3>
                  <p>Projects Built</p>
                </div>
                <div className={styles.statBox}>
                  <h3 className="gradient-text">{personalInfo.stats.achievements}</h3>
                  <p>Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.textWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.bio}>
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h4>Education</h4>
                <p>NIM Technologies & Networkz Systems</p>
              </div>
              <div className={styles.statItem}>
                <h4>Current Role</h4>
                <p>Software Developer @ NIM Technologies</p>
              </div>
            </div>

            <div className={styles.interestTags}>
              <div className={styles.interestTag}>
                <Brain size={18} />
                <span>Software Dev</span>
              </div>
              <div className={styles.interestTag}>
                <Code2 size={18} />
                <span>Web Dev</span>
              </div>
              <div className={styles.interestTag}>
                <Rocket size={18} />
                <span>Startups</span>
              </div>
              <div className={styles.interestTag}>
                <Lightbulb size={18} />
                <span>Innovation</span>
              </div>
              <div className={styles.interestTag}>
                <Users size={18} />
                <span>Leadership</span>
              </div>
              <div className={styles.interestTag}>
                <Trophy size={18} />
                <span>Competitions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
