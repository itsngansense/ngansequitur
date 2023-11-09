import type { Metadata } from 'next'
import '@/styles/global.scss'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
