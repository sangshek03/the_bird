import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'The_Birds_Vet | Veterinary Care, Conservation & Nurture for Birds',
  description: 'The_Birds_Vet is dedicated to providing veterinary care, conservation, and nurturing for birds. Our mission is to ensure the well-being and protection of avian species.',
  keywords: ['bird rescue', 'bird conservation', 'veterinary care', 'NGO', 'wildlife protection', 'bird rehabilitation'],
  authors: [{ name: 'The_Birds_Vet' }],
  openGraph: {
    title: 'The_Birds_Vet | Saving Birds, Protecting Nature',
    description: 'A group dedicated to providing Veterinary care, conservation and nurture the Birds.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
