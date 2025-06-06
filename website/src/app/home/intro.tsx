"use client";

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import DecryptedText from "./decrypted_text";
import styles from './intro.module.css';

const AnimationSpeed: number = 50;

const IntroContent = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {/* <DecryptedText
                    text="hi, i'm karl"
                    animateOn="view"
                    speed={100}
                    maxIterations={15}
                    sequential={true}
                    className={styles.decrypted}
                /> */}
                hi, i'm karl
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
            <p className={styles.connect}>let's connect!</p>
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

export function Intro() {
    const [key, setKey] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

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
                <IntroContent />
            </div>
        </div>
    );
}