import type { Metadata } from 'next'
import '@/styles/global.scss'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ngansequitur Creative Studio',
  description: 'Ngan Hoang: Visual Artist + UX Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
