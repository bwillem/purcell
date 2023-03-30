import Head from 'next/head'
import { Inter } from 'next/font/google'
import App from '@/components/App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Purcell Business Center</title>
        <meta name="description" content="Purcell Business Center | Nelson, BC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={inter.className}>
        <App />
      </main>
    </>
  )
}
