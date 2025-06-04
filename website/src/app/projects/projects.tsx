"use client";

import styles from "./projects.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeContent from "../components/FadeContent";

export function ProjectsContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              'ls my-projects',
              2000,
            ]}
            cursor={false}
            repeat={0}
          />
      </h1>

      <div className={styles.description}>
            <FadeContent
              blur={false}
              delay={2200}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                👋 hello visitor,
            </FadeContent>
      </div>
    </div>
  );
}

export function Projects() {
  const [key, setKey] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setKey(prev => prev + 1);       // Trigger animation
          setHasAnimated(true);           // Prevent future triggers
          observer.disconnect();          // Optional: stop observing to save resources
        }
      },
      {
        threshold: 0.1,
      }
    );

    const container = document.getElementById('projects');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();  // Clean up
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container} id="projects">
      <div key={key}>
        <ProjectsContent />
      </div>
    </div>
  );
}