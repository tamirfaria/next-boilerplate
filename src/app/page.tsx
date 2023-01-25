import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Tamir Faria Logo"
        width={360}
        height={360}
        priority
      />
    </main>
  )
}
