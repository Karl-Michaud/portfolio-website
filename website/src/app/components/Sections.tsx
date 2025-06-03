import React from 'react';
import styles from './Sections.module.css';

export const HomeSection = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.content}>
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer & Software Engineer</p>
        <div className={styles.buttons}>
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <div className={styles.text}>
          <p>
            I am a passionate developer with expertise in building modern web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.content}>
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>Project description goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.content}>
        <h2>Experience</h2>
        <div className={styles.experienceList}>
          <div className={styles.experienceItem}>
            <h3>Position Title</h3>
            <p>Company Name • 2020 - Present</p>
            <ul>
              <li>Achievement or responsibility 1</li>
              <li>Achievement or responsibility 2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4}></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}; 