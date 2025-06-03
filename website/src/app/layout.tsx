import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Karl's Portfolio",
  description: "Welcome to my portoflio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-lucida)" }}>
        <header>
          <nav className="navbar">
            <a href="#about">about</a>
            <span>|</span>
            <a href="#projects">projects</a>
            <span>|</span>
            <a href="#experience">experience</a>
            <span>|</span>
            <a href="#contact">contact me</a>
            <span>|</span>
            <a href="#my resume">my resume</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
