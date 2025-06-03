import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


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
            <Link href="/about">about</Link>
            <span>|</span>
            <Link href="/projects">projects</Link>
            <span>|</span>
            <Link href="/experience">experience</Link>
            <span>|</span>
            <Link href="/contact">contact me</Link>
            <span>|</span>
            <Link href="/">my resume</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
