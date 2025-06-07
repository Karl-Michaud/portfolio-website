"use client";

import styles from "./about.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeContent from "../components/FadeContent";

export function AboutContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              './about-me',
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
            <FadeContent
              blur={false}
              delay={2250}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                my name is karl. i&apos;m a third-year computer science and mathematics double major at uoft.
            </FadeContent>
            <FadeContent
              blur={false}
              delay={2300}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                i like building stuff that solves real problems, whether it&apos;s a tool, an app, or something
            </FadeContent>
            <FadeContent
              blur={false}
              delay={2350}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                weird i came up with for fun.
            </FadeContent>
            <p></p>
            <FadeContent
              blur={false}
              delay={2400}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                i&apos;m always tinkering. one week i&apos;m writing C programs that generate ai videos, the next i&apos;m
            </FadeContent>
            <FadeContent
              blur={false}
              delay={2450}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                building social apps to make campus life smoother. i like projects that feel useful and teach
            </FadeContent>
            <FadeContent
              blur={false}
              delay={2500}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                me something new.
            </FadeContent>

            <FadeContent
              blur={false}
              delay={2550}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <p>+---------------+</p>
              <p>| what i&apos;m into |</p>
              <p>+---------------+</p>
                
            </FadeContent>
            <FadeContent
              blur={false}
              delay={2600}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                {"-> systems programming and low-level development (i love C / assembly way more than i should)"}
            </FadeContent>
{/* 
            <FadeContent
              blur={false}
              delay={3900}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                {"-> full-stack development (especially backend work)"}
            </FadeContent> */}

            <FadeContent
              blur={false}
              delay={2600}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                {"-> cybersecurity (especially since ai keeps changing the landscape)"}
            </FadeContent>

            <FadeContent
              blur={false}
              delay={2600}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                {"-> rock climbing and outdoor activities (i want to start mountaineering!)"}
            </FadeContent>

            <FadeContent
              blur={false}
              delay={2600}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                {"-> volunteering whenever i can"}
            </FadeContent>


            <FadeContent
              blur={false}
              delay={2650}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
                  <div className={styles.table}>
                  {/* {`
+-----------------------------------------------------------------------------------------+
| languages:       Python, Java, C, TypeScript, Swift, HTML/CSS, SQL, shell, MIPS Assembly|
| frameworks:      React, Next.js, SwiftUI, Node.js, Maven, JUnit, Pytest                 |
| tools/databases: Git / GitHub, MySQL, Firebase, Linux, OpenAI / DeepSeek API, Astroid   |
+-----------------------------------------------------------------------------------------+
`
                  } */}
                  {`
+-----------------------------------------------------------------------------------------+
| languages:       Python, Java, C, TypeScript, Swift, HTML/CSS, SQL, Shell, MIPS Assembly|
+-----------------------------------------------------------------------------------------+
| frameworks/lib.: React.js, Next.js, Node.js, SwiftUI, Maven, JUnit, Pytest, Astroid     |
+-----------------------------------------------------------------------------------------+
| tools/databases: Git / GitHub, MySQL, Firebase, Linux, OpenAI / DeepSeek API            |
+-----------------------------------------------------------------------------------------+

                  `}
{/* {`+------------------------------------------------------------------------------------------+
| languages:       Python, Java, C, TypeScript, Swift, HTML/CSS, SQL, Shell, MIPS Assembly |
+------------------------------------------------------------------------------------------+
| libraries:       React.js, Pytest, JUnit, Astroid                                        |
+------------------------------------------------------------------------------------------+
| frameworks:      Node.js, Next.js, SwiftUI, Maven                                        |
+------------------------------------------------------------------------------------------+
| tools/databases: Git / GitHub, MySQL, Firebase, Linux, OpenAI / DeepSeek API             |
+------------------------------------------------------------------------------------------+
`} */}
                  </div>
            </FadeContent>
            
      </div>
    </div>
  );
}

// Code to trigger animation every time the page on screen
// export function About() {
//     const [key, setKey] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setKey(prev => prev + 1); // Force remount
//                         setIsVisible(true);
//                     } else {
//                         setIsVisible(false);
//                     }
//                 });
//             },
//             {
//                 threshold: 0.1
//             }
//         );

//         const container = document.getElementById('about');
//         if (container) {
//             observer.observe(container);
//         }

//         return () => {
//             if (container) {
//                 observer.unobserve(container);
//             }
//         };
//     }, []);

//     return (
//         <div className={styles.container}>
//             <div key={key}>
//                 <AboutContent/>
//             </div>
//         </div>
//     );
// }
export function About() {
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

    const container = document.getElementById('about');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();  // Clean up
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container} id="about">
      <div key={key}>
        <AboutContent />
      </div>
    </div>
  );
}