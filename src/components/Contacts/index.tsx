import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

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

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  bottom: 18rem;
`
const Icon = styled.div`
  padding: 0 24px 0;
  &:hover {
    -webkit-animation: heartbeat 1.5s ease-in-out both;
    animation: heartbeat 1.5s ease-in-out both;
  }
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`

const Contacts = () => {
  return (
    <Wrapper>
      {contactList.map((item, index) => (
        <Icon key={`${item.alt}-${index}`}>
          <Link href={item.link} target="_blank">
            <Image alt={item.alt} src={item.icon} height={48} width={48} />
          </Link>
        </Icon>
      ))}
    </Wrapper>
  )
}

export default Contacts
