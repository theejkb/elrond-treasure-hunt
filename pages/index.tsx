import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import stylesButton from '../styles/Button.module.scss'

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
          <h1 className={styles.title}>
            Elrond <br />
            Treasure <br />
            Hunt
          </h1>
          <a className={stylesButton.btnPrimary} href="#intro">Discover</a>
          <Image
            className={styles.bgImage}
            src="/page1.png"
            alt="treasure map"
            layout="fill"
            z-index="-1"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </section>

        <section id="intro" className={styles.introSection}>
          <div className={styles.book}>
            <h1 className={styles.secondaryTitle}>Elrond Treasure Hunt</h1>
            <div className={styles.introDesc}>
              <p>At the dawn of the Age of Elrond, all factions are preparing for the
              fulfillment of the prophecy that will raise the throne of the Maiars.
              Meanwhile, a group has gathered in the shadows to seal a secret pact.</p>
              <p>They entrusted their most precious items to a chest, sealed with the
              strongest chains and the most powerful magic ever created.
              According to the legend, only the mighty hero who successfully explore
              the 24 lands of Elrond will be able to open this sacred chest!</p>
              <p>Put on your armor, sharpen your swords, mount your steeds, and
              prepare to travel across the world of Elrond. The treasure of 24
              awaits the legend&apos;s hero</p>
            </div>
          </div>
          <a className={stylesButton.btnPrimary} href="#rules">Next</a>
          <Image
            className={styles.bgImage}
            src="/page_intro.png"
            alt="book of rules"
            layout="fill"
            z-index="-1"
            objectFit="cover"
            objectPosition="center"
          />
        </section>

        <section id="rules" className={styles.rulesSection}>
          <div className={styles.book}>
            <h1 className={styles.secondaryTitle}>Elrond Treasure Hunt</h1>
            <div className={styles.bookDesc}>
              <p>Rules :</p>
              <ul>
                <li>
                  Every day, a new box will open revealing a project, URL and a hint.
                </li>
                <li>
                Visit the project (could be Twitter, Discord, Telegram, ...) and try to find a secret password. Format : gems12.<br/>
                For example : zircon87
                </li>
                <li>
                Come back to elrondtreasurehunt.com and fill the case with this code.<br/>
                If it&apos;s correct, you&apos;ll receive one of the 24 keys needed to open the chest.
                </li>
                <li>
                Write it down somewhere and wait for the new box.
                </li>
              </ul>
              <p>Warning : </p>
              <ul>
                <li>
                Don&apos;t try to get answers from projects teams.
                  Your only contact is Elrond Treasure Hunt Twitter account
                </li>
                <li>
                Don&apos;t try to cheat.
                The only way to obtain keys is to find passwords.
                </li>
              </ul>
            </div>
          </div>
          <Image
            className={styles.bgImage}
            src="/page2.png"
            alt="book of rules"
            layout="fill"
            objectFit="cover"
            z-index="-1"
            objectPosition="center"
          />
        </section>
      </main>
    </div>
  )
}

export default Home
