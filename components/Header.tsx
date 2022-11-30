import Image from 'next/image'
import styles from '../styles/Header.module.scss'
import DiscordLogo from './DiscordLogo'
import TwitterLogo from './TwitterLogo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div style={{
        display: "flex",
        gap: "10px"
      }}>
        <a
          href="https://twitter.com/ElrondHunt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.twitterLogo}>
            <TwitterLogo aria-label="twitter account link" />
          </span>
        </a>
        <a
          href="https://dsc.gg/HODLcards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.discordLogo}>
            <DiscordLogo aria-label="discord server link" />
          </span>
        </a>
      </div>
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
    </header>
  )
}
