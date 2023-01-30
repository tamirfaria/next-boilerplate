import Contacts from '@/components/Contacts'
import Image from 'next/image'
import { useRef } from 'react'
import { Footer, Text, Wrapper } from './styles'

const Main = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  const currentSize =
    windowSize.current[0] < 1024
      ? { width: 300, heigth: 300 }
      : { width: 480, heigth: 480 }

  const { width, heigth } = currentSize

  return (
    <Wrapper>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={heigth}
        priority
      />
      <Contacts />
      <Footer>
        <Text>Desenvolvido por Tamir Faria | 2023</Text>
      </Footer>
    </Wrapper>
  )
}

export default Main
