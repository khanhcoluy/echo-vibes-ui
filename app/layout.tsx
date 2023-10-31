import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Echo vibes',
  description: 'A music app for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar/>
        {children}
      </body>
    </html>
  )
}
