"use client";

import styles from "./experience.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeContent from "../components/FadeContent";

export default function ExperienceContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              'tree experience/',
              2000,
            ]}
            speed={70}
            cursor={false}
            repeat={0}
          />
      </h1>
      <div className={styles.description}>
                <div className={styles.table}>
{/* {`experience/
│ 
├── software developer (Department of Computer Science, University of Toronto)
│   ├── [May 2025 - Present]
│   └── Designing and maintaining core features of PythonTA, 
│       a static analysis tool used by 3900+ students annually 
│       to improve coding practices in intro Python courses
│ 
├── event coordinator (STEP UofT Student Club)
│   ├── [Aug 2024 - Present]
│   ├── Organized events for 15+ attendees while balancing full-time studies
│   ├── Forecasted attendance and resolved logistical issues
│   ├── Onboarded 25+ new members through clear communication
│   └── Provided real-time support to ensure smooth event flow
│ 
├── IT intern (Gustave Roussy Cancer Research Hospital)
│   ├── [May 2021]
│   ├── Specialized in IT and emergency departments at Gustave Roussy hospital
│   ├── Shadowed mentor in server maintenance and support tasks
│   └── Diagnosed and resolved hardware/software/network issues for staff
│ 
├── teaching assistant (L'Atelier des Chefs)
│   ├── [May 2020]
│   ├── Helped deliver cooking classes for 10+ students
│   ├── Coordinated prep and materials with kitchen team
│   └── Maintained safety in a fast-paced, hazard-prone environment
`}                   */}
                  
                      <FadeContent
                      blur={false}
                      delay={1800}
                      duration={600}
                      easing="easing-out"
                      initialOpacity={0}
                    >
                    <div className={styles.description}>
                      <span>
                        experience/
                      </span>
                      │
                      <span>
                        ├──{" "}
                        <span className={styles.jobTitle}>
                          software developer (Department of Computer Science, University of Toronto)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2025 - Present]
                      </span>
                      <span>
                        │   └── Designing and maintaining core features of PythonTA,
                      </span>
                      <span>
                        │       a static analysis tool used by 3900+ students annually
                      </span>
                      <span>
                        │       to improve coding practices in intro Python courses
                      </span>
                      │
                      </div>
                    </FadeContent>
                    <FadeContent
                      blur={false}
                      delay={1850}
                      duration={600}
                      easing="easing-out"
                      initialOpacity={0}
                    >
                      <div className={styles.description}>
                      <span>
                        ├──{" "}
                        <span className={styles.jobTitle}>
                          event coordinator (STEP UofT Student Club)
                        </span>
                      </span>
                      <span>
                        │   ├── [Aug 2024 - May 2025]
                      </span>
                      <span>
                        │   ├── Organized events for 15+ attendees while balancing full-time studies
                      </span>
                      <span>
                        │   ├── Forecasted attendance and resolved logistical issues
                      </span>
                      <span>
                        │   ├── Onboarded 25+ new members through clear communication
                      </span>
                      <span>
                        │   └── Provided real-time support to ensure smooth event flow
                      </span>
                      │
                      </div>
                    </FadeContent>
                    <FadeContent
                      blur={false}
                      delay={1900}
                      duration={600}
                      easing="easing-out"
                      initialOpacity={0}
                    >
                      <div className={styles.description}>
                      <span>
                        ├──{" "}
                        
                        <span className={styles.jobTitle}>
                          IT intern (Gustave Roussy Cancer Research Hospital)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2021]
                      </span>
                      <span>
                        │   ├── Specialized in IT and emergency departments at Gustave Roussy hospital
                      </span>
                      <span>
                        │   ├── Shadowed mentor in server maintenance and support tasks
                      </span>
                      <span>
                        │   └── Diagnosed and resolved hardware/software/network issues for staff
                      </span>
                      │
                      </div>
                    </FadeContent>
                    <FadeContent
                      blur={false}
                      delay={1950}
                      duration={600}
                      easing="easing-out"
                      initialOpacity={0}
                    >
                      <div className={styles.description}>
                      <span>
                        ├──{" "}
                        
                        <span className={styles.jobTitle}>
                          teaching assistant (L&apos;Atelier des Chefs)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2020]
                      </span>
                      <span>
                        │   ├── Helped deliver cooking classes for 10+ students
                      </span>
                      <span>
                        │   ├── Coordinated prep and materials with kitchen team
                      </span>
                      <span>
                        │   └── Maintained safety in a fast-paced, hazard-prone environment
                      </span>
                      </div>
                    </FadeContent>
                  </div>

                </div>
            
      </div>
   
  );
}

export function Experience() {
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

    const container = document.getElementById('experience');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();  // Clean up
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container} id="experience">
      <div key={key}>
        <ExperienceContent />
      </div>
    </div>
  );
}