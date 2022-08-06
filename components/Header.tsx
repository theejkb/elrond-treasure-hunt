import Image from 'next/image'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <a
        href="https://twitter.com/HODLcards"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.twitterLogo}>
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
    </header>
  )
}
