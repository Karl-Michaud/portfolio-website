"use client";

import styles from "./experience.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeContent from "../components/FadeContent";

export default function ExperienceContentDesktop() {
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
                          software developer (Department of Computer Science, UofT)
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
                        │   ├── Specialized in IT and emergency departments at Gustave Roussy
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

export function ExperienceContentTablet() {
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
                            software developer (Department of Computer Science, UofT)
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
                          │   ├── Organized events for 15+ attendees while balancing
                        </span>
                        <span>
                          │   │   full-time studies
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
                          │   ├── Specialized in IT and emergency departments at
                        </span>
                        <span>
                          │   │   Gustave Roussy
                        </span>
                        <span>
                          │   ├── Shadowed mentor in server maintenance and support tasks
                        </span>
                        <span>
                          │   └── Diagnosed and resolved hardware/software/network issues
                        </span>
                        <span>
                          │       for staff
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
                          │   └── Maintained safety in a fast-paced, hazard-prone
                        </span>
                        <span>
                          │       environment
                        </span>
                        </div>
                      </FadeContent>
                    </div>
  
                  </div>
              
        </div>
  );
}

export function ExperienceContentMobileMed() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user:~$ `}</p>
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
                          software dev. (Department of CS, UofT)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2025 - Present]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Designing and maintaining core features
                      </span>
                      <span>
                        │       of PythonTA, a static analysis tool used
                      </span>
                      <span>
                        │       by 3900+ students annually to improve
                      </span>
                      <span>
                        │       coding practices in intro Python courses
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
                          event coordinator (STEP UofT)
                        </span>
                      </span>
                      <span>
                        │   ├── [Aug 2024 - May 2025]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Organized events for 15+ attendees while 
                      </span>
                      <span>
                        │   │   balancing full-time studies
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Forecasted attendance and resolved 
                      </span>
                      <span>
                        │   │   logistical issues
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Onboarded 25+ new members through clear
                      </span>
                      <span>
                        │   │   communication
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Provided real-time support to ensure
                      </span>
                      <span>
                        │       smooth event flow
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
                          IT intern (Gustave Roussy Hospital)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2021]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Specialized in IT and emergency
                      </span>
                      <span>
                        │   │   departments at Gustave Roussy
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Shadowed mentor in server maintenance
                      </span>
                      <span>
                        │   │   and support tasks
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Diagnosed and resolved hardware, 
                      </span>
                      <span>
                        │       software and network issues for staff
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
                        │   │
                      </span>
                      <span>
                        │   ├── Helped deliver cooking classes for 10+
                      </span>
                      <span>
                        │   │   students
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Coordinated prep and materials with
                      </span>
                      <span>
                        │   │   kitchen team
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Maintained safety in a fast-paced,
                      </span>
                      <span>
                        │       hazard-prone environment
                      </span>
                      </div>
                    </FadeContent>
                  </div>

                </div>
            
      </div>
);
}

export function ExperienceContentMobile() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              'tree exp/',
              2000,
            ]}
            speed={70}
            cursor={false}
            repeat={0}
          />
      </h1>
      <div className={styles.description}>
                <div className={styles.table}>
                      <FadeContent
                      blur={false}
                      delay={1800}
                      duration={600}
                      easing="easing-out"
                      initialOpacity={0}
                    >
                    <div className={styles.description}>
                      <span>
                        exp/
                      </span>
                      │
                      <span>
                        ├──{" "}
                        <span className={styles.jobTitle}>
                          software dev (Dept. of CS, UofT)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2025 - Present]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Designing and maintaining core 
                      </span>
                      <span>
                        │       features of PythonTA, a static 
                      </span>
                      <span>
                        │       analysis tool used by 3900+ 
                      </span>
                      <span>
                        │       students annually to improve 
                      </span>
                      <span>
                        │       coding practices in intro 
                      </span>
                      <span>
                        │       Python courses
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
                          event coordinator (STEP UofT)
                        </span>
                      </span>
                      <span>
                        │   ├── [Aug 2024 - May 2025]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Organized events for 15+
                      </span>
                      <span>
                        │   │   attendees while balancing
                      </span>
                      <span>
                        │   │   full-time studies
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Forecasted attendance and
                      </span>
                      <span>
                        │   │   resolved logistical issues
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Onboarded 25+ new members
                      </span>
                      <span>
                        │   │   through clear communication
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Provided real-time support to
                      </span>
                      <span>
                        │       ensure smooth event flow
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
                          IT intern (Gustave Roussy Hospital)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2021]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Specialized in IT and emergency
                      </span>
                      <span>
                        │   │   departments at Gustave Roussy
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Shadowed mentor in server
                      </span>
                      <span>
                        │   │   maintenance and support tasks
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Diagnosed and resolved 
                      </span>
                      <span>
                        │       hardware, software and network
                      </span>
                      <span>
                        │       issues for staff
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
                          TA (L&apos;Atelier des Chefs)
                        </span>
                      </span>
                      <span>
                        │   ├── [May 2020]
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Helped deliver cooking classes 
                      </span>
                      <span>
                        │   │   for 10+students
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   ├── Coordinated prep and materials
                      </span>
                      <span>
                        │   │   withkitchen team
                      </span>
                      <span>
                        │   │
                      </span>
                      <span>
                        │   └── Maintained safety in a fast-
                      </span>
                      <span>
                        │       paced, hazard-prone environment
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
        <div className={styles.desktop}>
          <ExperienceContentDesktop />
        </div>
        <div className={styles.tablet}>
          <ExperienceContentTablet />
        </div>
        <div className={styles.mobilemed}>
          <ExperienceContentMobileMed />
        </div>
        <div className={styles.mobile}>
          <ExperienceContentMobile />
        </div>
      </div>
    </div>
  );
}