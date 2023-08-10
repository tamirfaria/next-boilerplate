import { Analytics } from '@vercel/analytics/react'

import Main from '../pages/index.page'

export default function Home() {
  return (
    <>
      <Main />
      <Analytics />
    </>
  )
}
