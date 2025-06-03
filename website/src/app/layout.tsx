import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: "Karl's Portfolio",
  description: "Welcome to my portfolio!",
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
