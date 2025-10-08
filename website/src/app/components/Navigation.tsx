'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from './Navigation.module.css';

const PDF_URL = '/Karl-Alexandre_Michaud_Resume_Oct8.pdf';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Immediately set active section when clicking (no delay for user interaction)
      setActiveSection(sectionId);
    }
  };

  const openResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(PDF_URL, '_blank');
  };

  const updateActiveSection = (sectionId: string) => {
    // Clear any existing timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    // Set a short delay before updating the active section
    debounceRef.current = setTimeout(() => {
      setActiveSection(sectionId);
    }, 150); // 150ms delay to prevent jittering
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0;
        let targetSection = '';
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            targetSection = entry.target.id;
          }
        });

        if (targetSection) {
          updateActiveSection(targetSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for better detection
        rootMargin: '-20% 0px -20% 0px' // Top and bottom margins to account for navbar
      }
    );

    // Fallback scroll-based detection
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = 'home';
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = sectionId;
          }
        }
      });
      
      updateActiveSection(currentSection);
    };

    // Mobile-specific over-scroll correction
    const handleScrollEnd = () => {
      // Only apply correction on mobile devices
      if (window.innerWidth <= 768) {
        const container = document.querySelector('.container') || document.documentElement;
        const lastSection = document.getElementById('contact');
        
        if (lastSection) {
          const containerHeight = container.scrollHeight || document.documentElement.scrollHeight;
          const viewportHeight = window.innerHeight;
          const currentScroll = window.scrollY;
          const maxScroll = containerHeight - viewportHeight;
          
          // If scrolled past the maximum scroll position, snap back to the contact section
          if (currentScroll > maxScroll) {
            lastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Observe all sections
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScroll);
    // Add scroll end listener for mobile over-scroll correction
    window.addEventListener('scrollend', handleScrollEnd);
    // Fallback for browsers that don't support scrollend
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollStop = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 100);
    };
    window.addEventListener('scroll', handleScrollStop);
    
    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('scroll', handleScrollStop);
      clearTimeout(scrollTimeout);
      // Clean up timeout
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className={styles.navBig}>
        <Link 
          href="/#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className={activeSection === 'home' ? styles.active : ''}
        >
          home
        </Link>
        <span>|</span>
        <Link 
          href="/#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className={activeSection === 'about' ? styles.active : ''}
        >
          about
        </Link>
        <span>|</span>
        <Link 
          href="/#projects" 
          onClick={(e) => scrollToSection(e, 'projects')}
          className={activeSection === 'projects' ? styles.active : ''}
        >
          projects
        </Link>
        <span>|</span>
        <Link 
          href="/#experience" 
          onClick={(e) => scrollToSection(e, 'experience')}
          className={activeSection === 'experience' ? styles.active : ''}
        >
          experience
        </Link>
        <span>|</span>
        <Link 
          href="/#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className={activeSection === 'contact' ? styles.active : ''}
        >
          contact me
        </Link>
        <span>|</span>
        <Link href={PDF_URL} onClick={openResume}>my resume</Link>
      </nav>
      <nav className={styles.navMobileMed}>
        {/* Mobile Medium navigation links (customize as needed) */}
        <Link 
          href="/#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className={activeSection === 'home' ? styles.active : ''}
        >
          home
        </Link>
        <span>|</span>
        <Link 
          href="/#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className={activeSection === 'about' ? styles.active : ''}
        >
          about
        </Link>
        <span>|</span>
        <Link 
          href="/#projects" 
          onClick={(e) => scrollToSection(e, 'projects')}
          className={activeSection === 'projects' ? styles.active : ''}
        >
          projects
        </Link>
        <span>|</span>
        <Link 
          href="/#experience" 
          onClick={(e) => scrollToSection(e, 'experience')}
          className={activeSection === 'experience' ? styles.active : ''}
        >
          experience
        </Link>
        <span>|</span>
        <Link 
          href="/#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className={activeSection === 'contact' ? styles.active : ''}
        >
          contact
        </Link>
        <span>|</span>
        <Link href={PDF_URL} onClick={openResume}>my resume</Link>
      </nav>
      <nav className={styles.navMobile}>
        {/* Mobile navigation links (customize as needed) */}
        <Link 
          href="/#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className={activeSection === 'home' ? styles.active : ''}
        >
          home
        </Link>
        <span>|</span>
        <Link 
          href="/#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className={activeSection === 'about' ? styles.active : ''}
        >
          about
        </Link>
        <span>|</span>
        <Link 
          href="/#projects" 
          onClick={(e) => scrollToSection(e, 'projects')}
          className={activeSection === 'projects' ? styles.active : ''}
        >
          projects
        </Link>
        <span>|</span>
        <Link 
          href="/#experience" 
          onClick={(e) => scrollToSection(e, 'experience')}
          className={activeSection === 'experience' ? styles.active : ''}
        >
          experience
        </Link>
      </nav>
    </>
  );
}