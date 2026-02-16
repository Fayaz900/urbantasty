import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Urban Tasty - Premium Wholesale & Retail Stationary Items',
  description: 'Urban Tasty offers premium quality stationary items including banana powder, coconut oil, drumstick powder, jackfruit puttupodi, nannari syrup, ragi powder and more. Wholesale and retail available.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
