import Contacts from '@/components/Contacts'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './styles.module.css'

const Main = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  const currentSize = () =>
    windowSize.current[0] < 1024
      ? { width: 300, heigth: 300 }
      : { width: 480, heigth: 480 }

  const { width, heigth } = currentSize()

  return (
    <div className={styles.wrapper}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={heigth}
        priority
      />
      <Contacts />
      <footer className={styles.footer}>
        <p className={styles.text}>Desenvolvido por Tamir Faria | 2023</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: { Main }
  }
}

export default Main
