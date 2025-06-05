"use client";

import styles from "./projects.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from 'react-icons/fa';
import FadeContent from "../components/FadeContent";
import ProjectCard from "../components/ProjectCard";

export function ProjectsContent() {
  // Add a false for future projects
  const [projectShow, projectShowUpdate] = useState<boolean[]>([false, false, false, false, false, false]);
  const numProjects: number = 6;
  let animationNotInProgress: boolean = false;

  function handleClick(index: number) {
    let temp: Array<boolean> = projectShow.map((e) => e);
    for (let i = 0; i < numProjects; i++) {
      temp[i] = false;
    }
    temp[index] = true;
    projectShowUpdate(temp);
  }

  return (
    <div className={styles.content}>
      <div className={styles.keep}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              'ls projects/',
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
              <div className={styles.row}>
                <button className={styles.button} onClick={() => handleClick(0)}>ai-video-generator</button>
                <button className={styles.button} onClick={() => handleClick(1)}>dr-mario-in-assembly</button>
                <button className={styles.button} onClick={() => handleClick(2)}>keycard-security-system</button>
              </div>
              <div className={styles.row}>
                  <button className={styles.button} onClick={() => handleClick(3)}>portfolio</button>
                  <button className={styles.button} onClick={() => handleClick(4)}>recyclobot</button>
                  <button className={styles.button} onClick={() => handleClick(5)}>talk-to-a-club</button>           
              </div>
            </FadeContent>
      </div>
      <FadeContent
              blur={false}
              delay={2200}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
            <h1 className={styles.title2}>
                <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
                <TypeAnimation
                  className={styles.terminalItem}
                  sequence={[
                    '',
                    2700,
                    'cat instructions.txt',
                    2000,
                  ]}
                  cursor={false}
                  repeat={0}
                />
            </h1>
      </FadeContent>
      <div className={styles.description}>
              <FadeContent
              blur={false}
              delay={4200}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              Click on project you wish to view.
            </FadeContent>
      </div>
      <FadeContent
              blur={false}
              delay={4200}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
            
            <h1 className={styles.title2}>
                <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
                {animationNotInProgress = true}
                {!projectShow[0] && !projectShow[1] && !projectShow[2] && !projectShow[3] && !projectShow[4] && !projectShow[5] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      '',
                      3300,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                  />
                }

                {projectShow[0] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './ai-video-generator',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[1] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './dr-mario-in-assembly',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[2] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './keycard-security-system',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[3] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './portfolio',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[4] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './recyclobot',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[5] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './talk-to-a-club',
                      2300,
                    ]}
                    cursor={false}
                    repeat={0}
                  />
                }
            </h1>
        </FadeContent>
        <div className={styles.description}>
          {!projectShow[0] && !projectShow[1] && !projectShow[2] && !projectShow[3] && !projectShow[4] && !projectShow[5] && animationNotInProgress &&
                  <div className={styles.height}>

                  </div>
          }
          {projectShow[0] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={1470}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
              <ProjectCard 
                  imageSrc="/images/video-generator.jpg"
                  imageAlt="ai-video-generator preview"
                  stack="C, Python"
                  summary="ai-video-generator project"
                  githubUrl="https://github.com/Karl-Michaud/ai-video-generator"
                  imageHeight={200}
                  imageWidth={350}
                />
              </div>
            </FadeContent>
          }
          {projectShow[1] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={1520}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}> 
                <ProjectCard 
                  imageSrc="/images/drmario.jpg"
                  imageAlt="Dr Mario preview"
                  stack="MIPS Assembly"
                  summary="remake of dr. mario game built purely with Mips Assembly language."
                  githubUrl="https://github.com/KabirK-05/Dr.-Mario-CSC258"
                  imageHeight={200}
                  imageWidth={350}
                />
              </div>
            </FadeContent>
              

          }
          {projectShow[2] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={1750}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
              <ProjectCard 
                  imageSrc="/images/keycard.jpg"
                  imageAlt="keycard-security-system preview"
                  stack="Python, HTML/CSS, JavaScript, MySQL, Raspberry Pi"
                  summary="keycard-security-system project"
                  githubUrl="https://github.com/Karl-Michaud/NFC-reader"
                  imageHeight={200}
                  imageWidth={350}
                />
                
              </div>
            </FadeContent>
          }
          {projectShow[3] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={950}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                  <ProjectCard 
                  imageSrc="/images/portfolio"
                  imageAlt="portfolio preview"
                  stack="React.js, Node.js, TypeScript, CSS"
                  summary="portfolio project"
                  githubUrl="https://github.com/Karl-Michaud/portfolio-website"
                  imageHeight={200}
                  imageWidth={350}
                />
              </div>
            </FadeContent>
          }
          {projectShow[4] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={970}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                <ProjectCard 
                  imageSrc="/images/recyclobot.jpg"
                  imageAlt="Recyclobot preview"
                  stack="Swift, SwifUI, Python, Arduino, Firebase, OpenAi"
                  summary="smart trash bin and ios app built at deltahacks 11 to automatically sort waste and encourage eco-friendly habits."
                  githubUrl="https://github.com/KabirK-05/DeltaHacks2025iOS"
                  imageHeight={250}
                  imageWidth={310}
                />
              </div>
            </FadeContent>
          }
          {projectShow[5] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={1250}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                <ProjectCard 
                  imageSrc="/images/talk-to-a-club"
                  imageAlt="talk to a club preview"
                  stack="Java, JUnit, Maven, Firebase"
                  summary="portfolio project"
                  githubUrl="https://github.com/Karl-Michaud/Talk-To-a-Club"
                  imageHeight={200}
                  imageWidth={350}
                />
              </div>
            </FadeContent>
          }
      </div>
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