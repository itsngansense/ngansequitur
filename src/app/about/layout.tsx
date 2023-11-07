import styles from '@/styles/about.module.scss'

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
