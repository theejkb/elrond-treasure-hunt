import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
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
      <Header />
      <main>
        <section className={styles.treasureMapSection}>
          <Image
            className={styles.bgImage}
            src="/page1.png"
            alt="treasure map"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <h1 className={styles.title}>
            Elrond <br />
            Treasure <br />
            Hunt
          </h1>
        </section>

        <section className={styles.rulesSection}>
          <Image
            className={styles.bgImage}
            src="/page2.png"
            alt="book of rules"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className={styles.book}>
            <h1 className={styles.bookTitle}>Elrond Treasure Hunt</h1>
            <div className={styles.bookDesc}>
              <p>Welcome travellers !</p>
              <p>Rules :</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
