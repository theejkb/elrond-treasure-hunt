import type { NextPage } from 'next'
import CasesSection from '../components/CasesSection'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import Metadata from '../components/Metadata'
import RulesSection from '../components/RulesSection'
import TreasureMapSection from '../components/TreasureMapSection'
import stylesButton from '../styles/Button.module.scss'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <TreasureMapSection
          sectionStyles={styles}
          buttonStyles={stylesButton}
        />
        <IntroSection sectionStyles={styles} buttonStyles={stylesButton} />
        <RulesSection sectionStyles={styles} buttonStyles={stylesButton} />
        <CasesSection sectionStyles={styles} buttonStyles={stylesButton} />
      </main>
    </div>
  )
}

export default Home
