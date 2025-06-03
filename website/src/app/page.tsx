import React from 'react';
import Navigation from './components/Navigation';
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection
} from './components/Sections';
import styles from "./page.module.css";
import { Intro } from "./home/intro";
import { About } from "./about/about";

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home" className={styles.page}>
        <Intro />
      </div>
      <div id="about" className={styles.page}>
        <About/>
      </div>
      <div id="projects" className={styles.page}>
        projects page
      </div>
      <div id="experience" className={styles.page}>
        experience page
      </div>
      <div id="contact" className={styles.page}>
        contact page
      </div>
    </div>
  );
}
