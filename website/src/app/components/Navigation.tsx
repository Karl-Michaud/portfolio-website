'use client';

import Link from "next/link";

export default function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <Link href="/#home" onClick={(e) => scrollToSection(e, 'home')}>home</Link>
      <span>|</span>
      <Link href="/#about" onClick={(e) => scrollToSection(e, 'about')}>about</Link>
      <span>|</span>
      <Link href="/#projects" onClick={(e) => scrollToSection(e, 'projects')}>projects</Link>
      <span>|</span>
      <Link href="/#experience" onClick={(e) => scrollToSection(e, 'experience')}>experience</Link>
      <span>|</span>
      <Link href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>contact me</Link>
      <span>|</span>
      <Link href="/">my resume</Link>
    </nav>
  );
} 