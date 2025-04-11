import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head' // Add this

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dave Lim | Full-Stack Engineer',
  description: 'Builder of systems like the People Tap Game, scalable XP services, and modern game platforms.',
  icons: {
    icon: '/images/favicon.png', // Your favicon path
  },
  openGraph: {
    title: 'Dave Lim | Full-Stack Engineer',
    description: 'Builder of systems like the People Tap Game, scalable XP services, and modern game platforms.',
    url: 'https://davelhw.com',
    siteName: 'Dave Lim',
    images: [
      {
        url: '/images/social-main.png',
        width: 1200,
        height: 630,
        alt: 'Dave Lim | Full-Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dave Lim | Full-Stack Engineer',
    description: 'Builder of systems like the People Tap Game, scalable XP services, and modern game platforms.',
    images: ['/images/social-main.png'],
    creator: '@davelhw',
  },
  themeColor: '#0f172a',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" type="image/png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
