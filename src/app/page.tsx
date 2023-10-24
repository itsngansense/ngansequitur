import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/page.module.scss'


export default function homepage() {
  return (
    <main className={styles.main}>
      <h1>Hello Welcome to Next.js 13</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}
