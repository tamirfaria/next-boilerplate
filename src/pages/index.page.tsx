import Contacts from '@/components/Contacts'
import Waves from '@/components/Waves'
import Image from 'next/image'
import '../styles/global.css'
import styles from './styles.module.css'

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <Image src="/logo.svg" alt="Logo" width={300} height={300} priority />
      <Contacts />
      <footer className={styles.footer}>
        <p className={styles.text}>Desenvolvido por Tamir Faria | 2023</p>
      </footer>
      <Waves />
    </main>
  )
}

export default Main
