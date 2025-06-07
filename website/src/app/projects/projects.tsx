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
            speed={65}
            cursor={false}
            repeat={0}
          />
      </h1>
      <div className={styles.description}>
            <FadeContent
              blur={false}
              delay={1800}
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
                  <button className={styles.button} onClick={() => handleClick(4)}>recyclobot-deltahacks</button>
                  <button className={styles.button} onClick={() => handleClick(5)}>talk-to-a-club</button>           
              </div>
            </FadeContent>
      </div>
      <FadeContent
              blur={false}
              delay={1800}
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
                    2500, // 2700
                    'cat instructions.txt',
                    1000,
                  ]}
                  speed={70}
                  cursor={false}
                  repeat={0}
                />
            </h1>
      </FadeContent>
      <div className={styles.description}>
              <FadeContent
              blur={false}
              delay={3500}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              click on project you wish to view. any questions? ask me!
            </FadeContent>
      </div>
      <FadeContent
              blur={false}
              delay={3500}
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
                      100,
                    ]}
                    speed={75}
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
                    speed={75}
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
                    speed={78}
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
                    speed={70}
                    cursor={false}
                    repeat={0}
                  />
                }
                {projectShow[4] && animationNotInProgress &&
                  <TypeAnimation
                    className={styles.terminalItem}
                    sequence={[
                      './recyclobot-deltahacks',
                      2300,
                    ]}
                    speed={75}
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
                    speed={75}
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
              delay={690}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
              <ProjectCard 
                  imageSrc="/images/ai-video-generator.png"
                  imageAlt="ai-video-generator preview"
                  stack="C, Python"
                  summary="Turn any idea into a short-form content video using AI that generates a script, voiceover, video, and subtitles automatically."
                  githubUrl="https://github.com/Karl-Michaud/ai-video-generator"
                  imageHeight={250}
                  imageWidth={370}
                />
              </div>
            </FadeContent>
          }
          {projectShow[1] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={725}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}> 
                <ProjectCard 
                  imageSrc="/images/drmario.jpg"
                  imageAlt="Dr Mario preview"
                  stack="MIPS Assembly"
                  summary="Remake of Dr. Mario game built purely with Mips Assembly language."
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
              delay={725}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
              <ProjectCard 
                  imageSrc="/images/nfc.png"
                  imageAlt="keycard-security-system preview"
                  stack="Python, HTML/CSS, JavaScript, MySQL, Raspberry Pi"
                  summary="Led the development of a keycard system to raise awareness about school security, with remote user management through a custom web portal."
                  githubUrl="https://github.com/Karl-Michaud/NFC-reader"
                  imageHeight={250}
                  imageWidth={350}
                />
                
              </div>
            </FadeContent>
          }
          {projectShow[3] && animationNotInProgress && 
              <FadeContent
              blur={false}
              delay={550}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                  <ProjectCard 
                  imageSrc="/images/portfolio.png"
                  imageAlt="portfolio preview"
                  stack="React.js, Next.js, TypeScript, CSS"
                  summary="Built this portfolio from scratch. You're on it!"
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
              delay={725}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                <ProjectCard 
                  imageSrc="/images/recyclobot.jpg"
                  imageAlt="Recyclobot preview"
                  stack="Swift, SwifUI, Python, Arduino, Firebase, OpenAi"
                  summary="Smart trash bin and iOS app built at Deltahacks 11 to automatically sort waste and promote eco-friendly habits."
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
              delay={607}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.height}>
                <ProjectCard 
                  imageSrc="/images/talk-to-a-club.jpg"
                  imageAlt="talk to a club preview"
                  stack="Java, JUnit, Maven, Firebase"
                  summary="Social app built to simplify finding, joining, and engaging with university clubs. Includes customizable club pages and a personalized feed for student users."
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