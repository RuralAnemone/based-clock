import Head from 'next/head'
import Clock from '@/components/Clock'
import { Fira_Code, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>based clock app</title>
        <meta name="description" content="a based clock app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${firaCode.className}`}>
        <Clock />
      </main>
    </>
  )
}
