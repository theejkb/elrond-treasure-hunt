import Image from 'next/image'
import { BaseSectionProps } from '../types'

interface IntroSectionProps extends BaseSectionProps {}

export default function IntroSection({
  sectionStyles,
  buttonStyles,
}: IntroSectionProps) {
  return (
    <section id="intro" className={sectionStyles.introSection}>
      <div className={sectionStyles.book}>
        <h1 className={sectionStyles.secondaryTitle}>Elrond Treasure Hunt</h1>
        <div className={sectionStyles.introDesc}>
          <p>
            {
              'At the dawn of the Age of Elrond, all factions are preparing for\
                the fulfillment of the prophecy that will raise the throne of\
                the Maiars. Meanwhile, a group has gathered in the shadows to\
                seal a secret pact.'
            }
          </p>
          <p>
            {
              'They entrusted their most precious items to a chest, sealed with\
                the strongest chains and the most powerful magic ever created.\
                According to the legend, only the mighty hero who successfully\
                explore the 24 lands of Elrond will be able to open this sacred\
                chest!'
            }
          </p>
          <p>
            {
              "Put on your armor, sharpen your swords, mount your steeds, and\
                prepare to travel across the world of Elrond. The treasure of 24\
                awaits the legend's hero"
            }
          </p>
        </div>
      </div>
      <a className={buttonStyles.btnPrimary} href="#rules">
        Next
      </a>
      <Image
        src="/bg_intro.webp"
        alt="elrond pirate paper"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={50}
        priority
      />
    </section>
  )
}
