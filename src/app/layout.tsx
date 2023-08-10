import Head from 'next/head'
import '../styles/global.scss'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head>
        <title>Tamir Faria | Desenvolvedor Front End</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Lucas Tamir Faria" />
        <meta property="og:image" content="../../public/logo-light.svg" />
        <meta property="og:image:type" content="../../public/logo-light.svg" />
        <meta
          name="description"
          content="Desenvolvedor Front End | Javascript | Typescript | React.JS | Next.JS | Node.JS"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
