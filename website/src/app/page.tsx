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
import { Projects } from "./projects/projects";
import { Experience } from "./experience/experience";
import { Contact } from "./contact/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home" className={styles.page}>
        <Intro/>
      </div>
      <div id="about" className={styles.page}>
        <About/>
      </div>
      <div id="projects" className={styles.page}>
        <Projects/>
      </div>
      <div id="experience" className={styles.page}>
        <Experience/>
      </div>
      <div id="contact" className={styles.page}>
        <Contact/>
      </div>
    </div>
  );
}
