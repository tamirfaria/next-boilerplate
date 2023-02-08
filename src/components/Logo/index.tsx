import { ThemeProps } from '@/context/types'
import Image from 'next/image'
import styles from './styles.module.scss'

type LogoProps = {
  theme: ThemeProps
  width: number
  height: number
}

const Logo = ({ theme, width, height }: LogoProps) => {
  const logo = theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'
  return (
    <div className={styles.wrapperImage}>
      <Image src={logo} alt="Logo" width={width} height={height} priority />
    </div>
  )
}

export default Logo
