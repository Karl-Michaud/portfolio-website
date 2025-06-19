"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './intro.module.css';
import DecryptedText from './decrypted_text';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const AnimationSpeed: number = 50;

const IntroContentDesktop = () => {
    return (
        <div className={styles.desktop}>
            <h1 className={styles.title}>
                hi, i&apos;m karl
                <span className={styles.cursor}>.</span> 
            </h1>

            <div className={styles.description}>
                <DecryptedText
                    text="-> compsci & math double major @ uoft"
                    animateOn="view"
                    speed={AnimationSpeed}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
                <DecryptedText
                    text="-> always learning and tinkering with new ideas"
                    animateOn="view"
                    speed={AnimationSpeed + 5}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
                <DecryptedText
                    text="-> building scalable apps that solve real problems"
                    animateOn="view"
                    speed={AnimationSpeed + 10}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
                <DecryptedText
                    text="-> obsessed with low-level programming, compilers and os"
                    animateOn="view"
                    speed={AnimationSpeed + 15}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
            </div>
            <p className={styles.connect}>let&apos;s connect! (p.s., best experienced in full-screen on a computer!)</p>
            <div className={styles.socialLinks}>
                <a 
                    href="https://www.linkedin.com/in/karlmichaud/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/Karl-Michaud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaGithub />
                </a>
                <a 
                    href="mailto:karl.michaud@mail.utoronto.ca" 
                    className={styles.socialLink}
                >
                    <FaEnvelope />
                </a>
            </div>
        </div>

    );
};

const IntroContentMedium = () => {
    return (
        <div className={styles.mobilemed}>
            <h1 className={styles.title}>
                hi, i&apos;m karl
                <span className={styles.cursor}>.</span> 
            </h1>

            <div className={styles.description}>
                <DecryptedText
                    text="-> compsci & math double major @ uoft"
                    animateOn="view"
                    speed={AnimationSpeed}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
                <DecryptedText
                    text="-> always learning and tinkering with new ideas"
                    animateOn="view"
                    speed={AnimationSpeed + 5}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />
                <DecryptedText
                    text="-> building scalable apps that solve real problems"
                    animateOn="view"
                    speed={AnimationSpeed + 10}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />
                <DecryptedText
                    text="-> obsessed with low-level programming, compilers and os"
                    animateOn="view"
                    speed={AnimationSpeed + 15}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />
            </div>
            <p className={styles.connect}>let&apos;s connect!</p>
            <p className={styles.connect2}>(p.s., best experienced in full-screen on a computer!)</p>
            <div className={styles.socialLinks}>
                <a 
                    href="https://www.linkedin.com/in/karlmichaud/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/Karl-Michaud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaGithub />
                </a>
                <a 
                    href="mailto:karl.michaud@mail.utoronto.ca" 
                    className={styles.socialLink}
                >
                    <FaEnvelope />
                </a>
            </div>
        </div>

    );
};

const IntroContentSmall= () => {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.mobile}>
            <h1 className={styles.title}>
                hi, i&apos;m karl
                <span className={styles.cursor}>.</span> 
            </h1>

            <div className={styles.description}>
                <DecryptedText
                    text="-> cs & math double major @ uoft"
                    animateOn="view"
                    speed={AnimationSpeed}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                />
                <DecryptedText
                    text="-> always learning, always building"
                    animateOn="view"
                    speed={AnimationSpeed + 5}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />
                <DecryptedText

                    text="-> creating software to solve problems"
                    animateOn="view"
                    speed={AnimationSpeed + 10}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />

                <DecryptedText
                    text="-> passionate about compilers & systems"
                    animateOn="view"
                    speed={AnimationSpeed + 15}
                    maxIterations={10}
                    sequential={true}
                    className={styles.decrypted}
                    lang="en"
                />


            </div>
            <p className={styles.connect}>
                let&apos;s{" "}
                <a 
                    href="#contact" 
                    onClick={scrollToContact}
                    className={styles.connectLink}
                >
                    connect
                </a>!
            </p>
            <p className={styles.connect2}>p.s., best experienced in full-screen on a computer!</p>
            <div className={styles.socialLinks}>
                <a 
                    href="https://www.linkedin.com/in/karlmichaud/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/Karl-Michaud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <FaGithub />
                </a>
                <a 
                    href="mailto:karl.michaud@mail.utoronto.ca" 
                    className={styles.socialLink}
                >
                    <FaEnvelope />
                </a>
                <a
                    href="/Karl-Alexandre_Michaud_Resume_Jun_19.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink2}
                    title="Resume"
                >
                    <FaFileAlt />
                </a>
            </div>
        </div>

    );
};



export function Intro() {
    const [key, setKey] = useState(0);
    const [, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setKey(prev => prev + 1); // Force remount
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const container = document.getElementById('home');
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <div key={key}>
                <div className={styles.desktop}>
                    <IntroContentDesktop/>
                </div>
                <div className={styles.mobilemed}>
                    <IntroContentMedium/>
                </div>
                <div className={styles.mobile}>
                    <IntroContentSmall/>
                </div>

            </div>
        </div>
    );
}