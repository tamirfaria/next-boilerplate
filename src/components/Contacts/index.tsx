import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const contactList = [
  {
    link: 'https://github.com/tamirfaria',
    icon: '/github.svg',
    alt: 'Logo do GitHub'
  },
  {
    link: 'https://www.linkedin.com/in/lucastamirfaria/',
    icon: '/linkedin.svg',
    alt: 'Logo do LinkedIn'
  },
  {
    link: 'mailto:lucastamir@gmail.com',
    icon: '/gmail.svg',
    alt: 'Logo do Gmail'
  },
  {
    link: 'https://www.instagram.com/tamirfaria/',
    icon: '/instagram.svg',
    alt: 'Logo do Instagram'
  }
]

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      {contactList.map((item, index) => (
        <div className={styles.icon} key={`${item.alt}-${index}`}>
          <Link href={item.link} target="_blank">
            <Image alt={item.alt} src={item.icon} height={48} width={48} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Contacts
