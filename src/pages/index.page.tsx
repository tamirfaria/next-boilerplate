import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import SwitchButton from '@/components/SwitchButton'
import Waves from '@/components/Waves'
import { ThemeProps } from '@/context/types'
import '@/styles/global.scss'
import { useState } from 'react'
import styles from './styles.module.scss'

const Main = () => {
  const [theme, setTheme] = useState<ThemeProps>('light')
  const themeClass = theme === 'light' ? styles.light : styles.dark

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <main className={`${styles.wrapper} ${themeClass}`}>
      <SwitchButton handleButton={handleTheme} />
      <Logo height={300} width={300} theme={theme} />
      <Contacts />
      <Footer theme={themeClass} />
      <Waves />
    </main>
  )
}

export default Main
