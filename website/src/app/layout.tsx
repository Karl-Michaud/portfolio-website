import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: "Karl's Portfolio",
  description: "Hey, I'm Karl. Welcome to my portfolio! I love tackling real-world problems through computers and software. Check out some of my stuff!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-lucida)" }}>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
