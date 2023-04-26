import Head from 'next/head'
import { Inter } from 'next/font/google'
import App from '@/components/App'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BFPZP8FQ7V" />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BFPZP8FQ7V');
          `}
        </Script>
        <title>Purcell Business Centre</title>
        <meta name="description" content="Purcell Business Centre | Nelson, BC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={inter.className}>
        <App />
      </main>
    </>
  )
}
