import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Booking from '@/components/Booking/Booking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your IT Solutions Company',
  description: 'Professional IT services and software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Booking />
        <Footer />
      </body>
    </html>
  )
}