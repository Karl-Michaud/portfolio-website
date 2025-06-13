"use client";

import styles from "./about.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeContent from "../components/FadeContent";

export function AboutContentDesktop() {
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
              my name is karl. i&apos;m a third-year computer science and mathematics double major at uoft. i like building stuff that solves real problems, whether it&apos;s a tool, an app, or something weird i came up with for fun.
          </FadeContent>
          
          <p></p>
          <FadeContent
            blur={false}
            delay={2300}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
              i&apos;m always tinkering. one week i&apos;m writing C programs that generate ai videos, the next i&apos;m building social apps to make campus life smoother. i like projects that feel useful and teach me something new.
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2350}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div className={styles.asciiBlock}>
                +---------------+<br />
                | <span className={styles.green}>what i&apos;m into</span> |<br />
                +---------------+<br />
              </div>
              
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
                    <br />
+------------------------------------------------------------------------------------------+<br />
| <span className={styles.green}>languages:</span>       Python, Java, C, TypeScript, Swift, HTML/CSS, SQL, Shell, MIPS Assembly |<br />
+------------------------------------------------------------------------------------------+<br />
| <span className={styles.green}>libraries:</span>       React.js, Pytest, JUnit, Astroid                                        |<br />
+------------------------------------------------------------------------------------------+<br />
| <span className={styles.green}>frameworks:</span>      Node.js, Next.js, SwiftUI, Maven                                        |<br />
+------------------------------------------------------------------------------------------+<br />
| <span className={styles.green}>tools/databases:</span> Git / GitHub, MySQL, Firebase, Linux, OpenAI / DeepSeek API             |<br />
+------------------------------------------------------------------------------------------+<br />
                  </div> 
            </FadeContent>
            
      </div>
    </div>
  );
}


export function AboutContentTablet() {
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
              my name is karl. i&apos;m a third-year computer science and mathematics double major at uoft. i like building stuff that solves real problems, whether it&apos;s a tool, an app, or something weird i came up with for fun.
          </FadeContent>
          
          <p></p>
          <FadeContent
            blur={false}
            delay={2300}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
              i&apos;m always tinkering. one week i&apos;m writing C programs that generate ai videos, the next i&apos;m building social apps to make campus life smoother. i like projects that feel useful and teach me something new.
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2350}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div className={styles.asciiBlock}>
            <br />
                +---------------+<br />
                | <span className={styles.green}>what i&apos;m into</span> |<br />
                +---------------+<br />
              </div>
              
          </FadeContent>
          <FadeContent
            blur={false}
            delay={2400}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div>
              <p>
              {"-> systems programming and low-level development (i love C way more than i should)"}
              </p>
              <p>
              {"-> cybersecurity (especially since ai keeps changing the landscape)"}
              </p>
              <p>
              {"-> rock climbing and outdoor activities (i want to start mountaineering!)"}
              </p>
              <p>
              {"-> volunteering whenever i can"}
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2450}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
                <div className={styles.table}>
+------------------------------------------------------------------------+<br />
| <span className={styles.green}>languages:</span>  Python, Java, C, TypeScript, Swift, HTML/CSS, SQL, Shell,  |<br /> 
|             MIPS Assembly                                              |<br />
+------------------------------------------------------------------------+<br />
| <span className={styles.green}>libraries:</span>  React.js, Pytest, JUnit, Astroid                           |<br />
+------------------------------------------------------------------------+<br />
| <span className={styles.green}>frameworks:</span> Node.js, Next.js, SwiftUI, Maven                           |<br />
+------------------------------------------------------------------------+<br />
| <span className={styles.green}>tools:</span>      Git / GitHub, MySQL, Firebase, Linux, OpenAI/DeepSeek API  |<br />
+------------------------------------------------------------------------+<br />
                </div> 
          </FadeContent>
          
      </div>
    </div>
  );
}


export function AboutContentMobileMed() {
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
              my name is karl. i&apos;m a third-year computer science and mathematics double major at uoft. i like building stuff that solves real problems, whether it&apos;s a tool, an app, or something weird i came up with for fun.
          </FadeContent>
          
          <p></p>
          <FadeContent
            blur={false}
            delay={2300}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
              i&apos;m always tinkering. one week i&apos;m writing C programs that generate ai videos, the next i&apos;m building social apps to make campus life smoother. i like projects that feel useful and teach me something new.
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2350}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div className={styles.asciiBlock}>
                +---------------+<br />
                | <span className={styles.green}>what i&apos;m into</span> |<br />
                +---------------+<br />
              </div>
              
          </FadeContent>
          <FadeContent
            blur={false}
            delay={2400}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div>
              <p>
              {"-> systems programming and low-level development (i love C way more than i should)"}
              </p>
              <p>
              {"-> cybersecurity (especially since ai keeps changing the landscape)"}
              </p>
              <p>
              {"-> rock climbing and outdoor activities (i want to start mountaineering!)"}
              </p>
              <p>
              {"-> volunteering whenever i can"}
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2450}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
                <div className={styles.table}>
                +------------------+------------------+<br />
                | <span className={styles.green}>languages:</span>       | <span className={styles.green}>libraries:</span>       |<br />
                |                  |                  |<br />
                | Python, Java, C  | React, Pytest    |<br />
                | TS, Swift, HTML  | JUnit, Astroid   |<br />
                | CSS, SQL, Shell  |                  |<br />
                | MIPS Assembly    |                  |<br />
                +------------------+------------------+<br />
                | <span className={styles.green}>frameworks:</span>      | <span className={styles.green}>tools/databases:</span> |<br />
                |                  |                  |<br />
                | Node.js, Next.js | Git, GitHub      |<br />
                | SwiftUI, Maven   | MySQL, Firebase  |<br />
                |                  | Linux, AI APIs   |<br />
                +------------------+------------------+
                </div> 
          </FadeContent>
          
      </div>
    </div>
  );
}


export function AboutContentMobile() {
  return (
    <div className={styles.content}>
    <h1 className={styles.title}>
        <p className={styles.terminalItem}>{`visitor@terminal.user:~$ `}</p>
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
              my name is karl. i&apos;m a third-year computer science and mathematics double major at uoft. i like building stuff that solves real problems, whether it&apos;s a tool, an app, or something weird i came up with for fun.
          </FadeContent>
          
          <p></p>
          <FadeContent
            blur={false}
            delay={2300}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
              i&apos;m always tinkering. one week i&apos;m writing C programs that generate ai videos, the next i&apos;m building social apps to make campus life smoother. i like projects that feel useful and teach me something new.
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2350}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div className={styles.asciiBlock}>
                +---------------+<br />
                | <span className={styles.green}>what i&apos;m into</span> |<br />
                +---------------+<br />
              </div>
              
          </FadeContent>
          <FadeContent
            blur={false}
            delay={2400}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
            <div>
              <p>
              {"-> systems programming and low-level development"}
              </p>
              <p>
              {"-> cybersecurity (especially with ai)"}
              </p>
              <p>
              {"-> rock climbing and outdoor activities"}
              </p>
              <p>
              {"-> volunteering whenever i can"}
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            delay={2450}
            duration={600}
            easing="easing-out"
            initialOpacity={0}
          >
                <div className={styles.table}>
                +------------------+------------------+<br />
                | <span className={styles.green}>languages:</span>       | <span className={styles.green}>libraries:</span>       |<br />
                |                  |                  |<br />
                | Python, Java, C  | React, Pytest    |<br />
                | TS, Swift, HTML  | JUnit, Astroid   |<br />
                | CSS, SQL, Shell  |                  |<br />
                | MIPS Assembly    |                  |<br />
                +------------------+------------------+<br />
                | <span className={styles.green}>frameworks:</span>      | <span className={styles.green}>tools/databases:</span> |<br />
                |                  |                  |<br />
                | Node.js, Next.js | Git, GitHub      |<br />
                | SwiftUI, Maven   | MySQL, Firebase  |<br />
                |                  | Linux, AI APIs   |<br />
                +------------------+------------------+
                </div> 
          </FadeContent>
          
      </div>
    </div>
  );
}


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
    <div className={styles.container} id="about" key={key}>
      <div className={styles.desktop}>
        <AboutContentDesktop />
      </div>
      <div className={styles.tablet}>
        <AboutContentTablet />
      </div>
      <div className={styles.mobile}>
        <AboutContentMobile />
      </div>
      <div className={styles.mobilemed}>
        <AboutContentMobileMed />
      </div>
    </div>
  );
}