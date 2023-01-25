import Contacts from '@/components/Contacts'
import Image from 'next/image'
import styles from './page.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
      <Image src="/logo.png" alt="Logo" width={360} height={360} priority />
      <Contacts />
    </main>
  )
}

export default Main
