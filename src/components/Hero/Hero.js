'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Code2, Lightbulb, Brain, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const fullRole = personalInfo.role;
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setRoleText(fullRole.slice(0, index));
      index++;
      if (index > fullRole.length) index = 0;
    }, 100);
    return () => clearInterval(interval);
  }, [fullRole]);

  return (
    <section id="home" className={styles.hero}>
      {/* Premium Background Image */}
      <div className={styles.heroBg}>
        <Image 
          src="/hero-bg-v2.png" 
          alt="" 
          fill 
          priority
          className={styles.bgImg}
        />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.statusBadge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className={styles.dot}></span> Open to Opportunities
          </motion.div>

          <h1 className={styles.name}>
            <span className={styles.gradientName}>{personalInfo.name}</span>
          </h1>

          <div className={styles.typewriterWrapper}>
            <p className={styles.role}>
              {roleText}
              <span className={styles.cursor}>|</span>
            </p>
          </div>

          <p className={styles.description}>
            {personalInfo.intro}
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn-primary">
              <Sparkles size={18} /> View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <Send size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.profileArea}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.mainCircle}>
            {/* The Background Circle */}
            <div className={styles.circleBg}>
              <Image 
                src="/profile-bg-v3.jpg" 
                alt="abc" 
                fill 
                className={styles.profileBgImg}
              />
            </div>

            {/* The Person (Popping Out) */}
            <div className={styles.personContainer}>
              <Image 
                src="/dhanustand.png" 
                alt={personalInfo.name} 
                fill
                priority
                className={styles.personImg}
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              className={`${styles.floatingBadge} ${styles.badge1}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={20} color="#8b5cf6" /> <span>Developer</span>
            </motion.div>
            
            <motion.div 
              className={`${styles.floatingBadge} ${styles.badge2}`}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Brain size={20} color="#00d2ff" /> <span>AI Explorer</span>
            </motion.div>

            <motion.div 
              className={`${styles.floatingBadge} ${styles.badge3}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Lightbulb size={20} color="#ec4899" /> <span>Innovator</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
