import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import styles from '@/styles/home.module.scss'


export default function Home() {
  return (
    <section className={styles.grid}>
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>Heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
      <p>This is a paragraph</p>
      <Button> <Link href="/art">see artwork</Link></Button>
      <Link href="/design">this is a link</Link>
    </section>
  )
}
