import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import { cx } from '@/utils/classes'
import { Navbar } from './components/nav'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cassiorsfreitas.com'),
  title: {
    default: 'Cássio Freitas',
    template: '%s | Cássio Freitas'
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Cássio Freitas',
    description: 'Developer, writer, and creator.',
    url: 'https://cassiorsfreitas.com',
    siteName: 'Cássio Freitas',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Cássio Freitas',
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx('text-white bg-black', firaCode.className)}>
      <body
        suppressHydrationWarning={true}
        className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto"
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
