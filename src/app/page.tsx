import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home.module.scss'


export default function Home() {
  return (
    <section className={styles.grid}>
      <h1>Welcome to Next.js SASS  example</h1>
      <button className={styles.button}>Go to Page</button>
    </section>
  )
}
