import Contacts from '@/components/Contacts'
import Waves from '@/components/Waves'
import Switch from '@mui/material/Switch'
import Image from 'next/image'
import { useState } from 'react'
import '../styles/global.scss'
import styles from './styles.module.scss'

const Main = () => {
  const [theme, setTheme] = useState(styles.themeLight)

  const logo =
    theme === styles.themeLight ? '/logo-light.svg' : '/logo-dark.svg'

  const handleTheme = () => {
    theme === styles.themeLight
      ? setTheme(styles.themeDark)
      : setTheme(styles.themeLight)
  }

  return (
    <main className={`${styles.wrapper} ${theme}`}>
      <div className={styles.switchButton}>
        <p>🌞</p>
        <Switch onClick={handleTheme} />
        <p>🌚</p>
      </div>
      <div className={styles.wrapperImage}>
        <Image src={logo} alt="Logo" width={300} height={300} priority />
      </div>
      <Contacts />
      <footer className={`${styles.footer} ${theme}`}>
        <p className={styles.text}>Desenvolvido por Tamir Faria | 2023</p>
      </footer>
      <Waves />
    </main>
  )
}

export default Main
