import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'LawSake - Leading Cyber Law Firm in India',
  description: 'Leading Cyber Law Firm in India, specializing in cybercrime, data privacy, and online security for individuals and businesses navigating digital complexities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full">
        <Header />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

