import GlobalStyles from '@/styles/global'
// import Document, { DocumentContext } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />)
//         })

//       const initialProps = await Document.getInitialProps(ctx)
//       return {
//         ...initialProps,
//         styles: [initialProps.styles, sheet.getStyleElement()]
//       }
//     } finally {
//       sheet.seal()
//     }
//   }
// }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}

// export default { RootLayout, MyDocument }
