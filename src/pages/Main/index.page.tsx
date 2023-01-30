import Contacts from '@/components/Contacts'
import Image from 'next/image'
import { useRef } from 'react'
import * as S from './styles'

const Main = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  const currentSize = () => {
    if (window !== undefined) {
      windowSize.current[0] < 1024
        ? { width: 300, heigth: 300 }
        : { width: 480, heigth: 480 }
    }
    return { width: 300, heigth: 300 }
  }

  const { width, heigth } = currentSize()

  return (
    <S.Wrapper>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={heigth}
        priority
      />
      <Contacts />
      <S.Footer>
        <S.Text>Desenvolvido por Tamir Faria | 2023</S.Text>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Main
