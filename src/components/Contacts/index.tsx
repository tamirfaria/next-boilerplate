import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const contactList = [
  {
    link: 'https://github.com/tamirfaria',
    icon: '/github.png',
    alt: 'Logo do GitHub'
  },
  {
    link: 'https://www.linkedin.com/in/lucastamirfaria/',
    icon: '/linkedin.png',
    alt: 'Logo do LinkedIn'
  },
  {
    link: 'mailto:lucastamir@gmail.com',
    icon: '/gmail.png',
    alt: 'Logo do Gmail'
  },
  {
    link: 'https://www.instagram.com/tamirfaria/',
    icon: '/instagram.png',
    alt: 'Logo do Instagram'
  }
]

const Contacts = () => {
  return (
    <div className={styles.container}>
      {contactList.map((item, index) => (
        <div className={styles.contacts} key={`${item.alt}-${index}`}>
          <Link href={item.link} target="_blank">
            <Image alt={item.alt} src={item.icon} height={48} width={48} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Contacts
