import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import SwitchButton from '../components/SwitchButton'
import Waves from '../components/Waves'
import { ThemeProps } from '../context/types'

import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { useState } from 'react'
import '../styles/global.scss'

import styles from './styles.module.scss'

const Main = () => {
  const [theme, setTheme] = useState<ThemeProps>('light')
  const themeClass = theme === 'light' ? styles.light : styles.dark

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <Head>
        <title>Tamir Faria | Desenvolvedor Front End</title>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="title"
          key="title"
          content="Tamir Faria | Desenvolvedor Front End"
        />
        <meta name="author" key="author" content="Lucas Tamir Faria" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tamirfaria/next-boilerplate/dbbe5441c0d7576f56c4e838af605891dbb6a72c/public/logo-light.svg"
        />
        <meta
          property="og:image:type"
          content="https://raw.githubusercontent.com/tamirfaria/next-boilerplate/dbbe5441c0d7576f56c4e838af605891dbb6a72c/public/logo-light.svg"
        />
        <meta
          name="description"
          content="Desenvolvedor Front End | Javascript | Typescript | React.JS | Next.JS | Node.JS"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tamirfaria.vercel.app/" />
        <meta
          property="og:title"
          content="Tamir Faria | Desenvolvedor Front End"
        />
        <meta
          property="og:description"
          content="Desenvolvedor Front End | Javascript | Typescript | React.JS | Next.JS | Node.JS"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tamirfaria/next-boilerplate/dbbe5441c0d7576f56c4e838af605891dbb6a72c/public/logo-light.svg"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <main className={`${styles.wrapper} ${themeClass}`}>
        <SwitchButton handleButton={handleTheme} />
        <Logo height={300} width={300} theme={theme} />
        <Contacts />
        <Footer theme={themeClass} />
        <Waves />
      </main>
    </>
  )
}

export default Main
