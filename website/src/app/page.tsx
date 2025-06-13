import React from 'react';
import styles from "./page.module.css";
import { Intro } from "./home/intro";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Experience } from "./experience/experience";
import { Contact } from "./contact/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.alignLeft}> */}
        <div id="home" className={styles.page}>
        <Intro/>
        </div>
        <div id="about" className={`${styles.page} ${styles.leftAligned}`}>
          <About/>
        </div>
        <div id="projects" className={`${styles.page} ${styles.leftAligned}`}>
          <Projects/>
        </div>
        <div id="experience" className={`${styles.page} ${styles.leftAligned}`}>
          <Experience/>
        </div>
        <div id="contact" className={`${styles.page} ${styles.leftAligned}`}>
          <Contact/>
        </div>
      {/* </div> */}
    </div>
  );
}
