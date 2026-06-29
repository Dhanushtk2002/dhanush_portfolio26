'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Projects.module.css';
import { projects } from '@/data/portfolioData';
import { Code2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
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
            MY PROJECTS
            <span className="label-line label-line-right"></span>
          </div>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">A collection of my recent work, ranging from business websites to complex SaaS dashboards.</p>
        </motion.div>

        {/* Filter */}
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.projectGrid}>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`glass-card ${styles.projectCard}`}
              >
                <div className={styles.imageContainer}>
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={styles.projectImagePlaceholder}>
                      <span>{project.title.substring(0, 2)}</span>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <div className={styles.overlayLinks}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code2 size={20} />
                      </a>
                      {/* <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a> */}
                    </div>
                  </div>
                </div>
                
                <div className={styles.projectInfo}>
                  <div className={styles.techStack}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.projectActions}>
                    <a href={project.github} className={styles.actionBtn}>
                      <Code2 size={18} /> Code
                    </a>
                    {/* <a href={project.live} className={`${styles.actionBtn} ${styles.liveBtn}`}>
                      <ExternalLink size={18} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
