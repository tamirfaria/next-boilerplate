import Contacts from '@/components/Contacts'
import Image from 'next/image'
import styled from 'styled-components'
import styles from './page.module.css'

const Footer = styled.footer`
  position: absolute;
  bottom: 10rem;
`
const Text = styled.p`
  font-size: 2rem;
  color: #808080;
`

const Main = () => {
  return (
    <main className={styles.main}>
      <Image src="/logo.svg" alt="Logo" width={480} height={480} priority />
      <Contacts />
      <Footer>
        <Text>Desenvolvido por Tamir Faria | 2023</Text>
      </Footer>
    </main>
  )
}

export default Main
