import styles from './styles.module.scss'

type FooterProps = {
  theme: string
}
const Footer = ({ theme }: FooterProps) => {
  return (
    <footer className={`${styles.footer} ${theme}`}>
      <p>Desenvolvido por Tamir Faria | 2023</p>
    </footer>
  )
}

export default Footer
