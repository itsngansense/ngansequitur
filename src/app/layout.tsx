// default layout, equivalent to page router _app.tsx

import type { Metadata } from 'next'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import {Lexend_Deca} from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/global.scss'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Ngansequitur Creative Studio',
  description: 'Ngan Hoang: Visual Artist + UX Designer',
}

const lexendDeca = Lexend_Deca({
  display: 'swap',
  subsets: [ 'latin' ],
  weight: [ '300', '400', '600', '700', '900'],
  variable: '--font-lexend-deca',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lexendDeca.variable}`}>
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
