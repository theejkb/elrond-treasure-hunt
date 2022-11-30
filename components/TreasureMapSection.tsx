import Image from 'next/image'
import { BaseSectionProps } from '../types'

interface TreasureMapSectionProps extends BaseSectionProps {}

export default function TreasureMapSection({
  sectionStyles,
  buttonStyles,
}: TreasureMapSectionProps) {
  return (
    <section className={sectionStyles.treasureMapSection}>
      <a className={buttonStyles.btnPrimary} href="#intro">
        Discover
      </a>
      <Image
        src="/bg_treasure_map.webp"
        alt="treasure map"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={50}
        priority
      />
    </section>
  )
}
