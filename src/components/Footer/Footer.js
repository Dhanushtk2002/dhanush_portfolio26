'use client';

import styles from './Footer.module.css';
import { personalInfo } from '@/data/portfolioData';
import { Code2, Link, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <span className="gradient-text">Dhanush.</span>
            <p>Full Stack Developer</p>
          </div>
          <ul className={styles.footerLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className={styles.socials}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Code2 size={20} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Link size={20} /></a>
            <a href={`mailto:${personalInfo.email}`}><Mail size={20} /></a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Dhanush TK. All rights reserved.</p>
          <button className={styles.scrollBtn} onClick={scrollToTop}>
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
