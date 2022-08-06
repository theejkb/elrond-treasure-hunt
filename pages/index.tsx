import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Hunt - Hodl Card</title>
        <meta name="og:title" content="Treasure Hunt" />
        <meta name="og:description" content="Participate now in the treasure hunt event offered by Hodl Card" />
        <meta property="og:image" content="/website_preview.png"/>
        
      </Head>

      <main className={styles.main}>
        <div className={styles.step1}>
          <h1 className={styles.title}>
            Elrond <br />
            Treasure <br /> Hunt
          </h1>
        </div>
      </main>

      <main className={styles.main2}>
        <h1 className={styles.bookTitle}>Elrond Treasure Hunt</h1>
        <div className={styles.bookDesc}>
          <p>Welcome travellers !</p>
          <p>Rules :</p>
        </div>
      </main>

      <main className={styles.main3}></main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/HODLcards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/twitter-logo.webp"
              alt="Twitter Logo"
              width={25}
              height={25}
            />
          </span>
        </a>
        <div className={styles.madeWith}>
          Made with ❤️ for
          <a
            href="https://elrond.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.elrondLogo}
          >
            <Image
              src="/elrond-logo.svg"
              alt="Elrond Logo"
              width={20}
              height={20}
            />
          </a>
          Community
        </div>
      </footer>
    </div>
  )
}

export default Home
