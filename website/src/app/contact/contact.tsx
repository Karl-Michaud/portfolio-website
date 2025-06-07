"use client";

import styles from "./contact.module.css";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import FadeContent from "../components/FadeContent";

export default function ContactContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
          <p className={styles.terminalItem}>{`visitor@terminal.user.dev:~$ `}</p>
          <TypeAnimation
            className={styles.terminalItem}
            sequence={[
              '',
              1000,
              'contact-me --help',
              2000,
            ]}
            speed={70}
            cursor={false}
            repeat={0}
          />
      </h1>
      {/* <div className={styles.description}>
        <div className={styles.table}>
{`Usage: contact-me [option]

Options:
  --email         Show email address
  --linkedin      Open LinkedIn profile
  --resume        Download resume

`}
        </div>

      </div> */}
      <div className={styles.description}>
        <FadeContent
              blur={false}
              delay={1800}
              duration={600}
              easing="easing-out"
              initialOpacity={0}
            >
              <div className={styles.terminalBox}>
                <Image src="/images/headshot.png" alt="profile-pic preview" className={styles.projectImage} width={400} height={400}/>

              </div>
            <div className={styles.table}>
              <div>Usage: contact-me [option]</div>
              <br />
              <div>Options:</div>

              <div>
                <a href="mailto:karl.michaud@mail.utoronto.ca" className={styles.option}>
                  --email
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;Email address&nbsp;
                <a href="mailto:karl.michaud@mail.utoronto.ca" className={styles.meta}>
                  [karl.michaud@mail.utoronto.ca]
                </a>
              </div>

              <div>
                <a
                  href="https://linkedin.com/in/karlmichaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.option}
                >
                  --linkedin
                </a>
                &nbsp;&nbsp;LinkedIn profile&nbsp;
                <a
                  href="https://linkedin.com/in/karlmichaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.meta}
                >
                  [https://linkedin.com/in/karlmichaud]
                </a>
              </div>

              
            </div>
        </FadeContent>
      </div>
      
    </div>
  );
}

export function Contact() {
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

    const container = document.getElementById('contact');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();  // Clean up
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container} id="contact">
      <div key={key}>
        <ContactContent />
      </div>
    </div>
  );
}