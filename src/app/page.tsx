import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home.module.scss'


export default function Home() {
  return (
    <main className={styles.grid}>
      <h1>Welcome to Next.js SASS  example</h1>
      <ul>
        <li><Link href="/">home</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/design">design</Link></li>
        <li><Link href="/art">art</Link></li>
        <li><Link href="/shop">shop</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
      <button className={styles.button}>Go to Page</button>
    </main>
  )
}
