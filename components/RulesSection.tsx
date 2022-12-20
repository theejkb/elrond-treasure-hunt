import Image from 'next/image'
import { BaseSectionProps } from '../types'

interface RulesSectionProps extends BaseSectionProps {}

export default function RulesSection({
  sectionStyles,
  buttonStyles,
}: RulesSectionProps) {
  return (
    <section id="rules" className={sectionStyles.rulesSection}>
      <div className={sectionStyles.book}>
        <div className={sectionStyles.bookDesc}>
          <p>Rules :</p>
          <ul>
            <li>
              {
                'Every day, a new box will open revealing a project, URL and a hint.'
              }
              {
                'Visit the project (could be Twitter, Discord, Telegram, ...)\
                and try to find a secret password. Format : Gem + Number (Eg: Diamond12)'
              }
            </li>
            <li></li>
            <li>{"If it's correct, note it."}</li>
            <li>
              {'Come back here and fill the case with this code.'}
              <br />
            </li>
            <li>
              {
                "Write it down somewhere and wait for the new box. When you will unlock the 24 boxes, you'll receive an access to the treasure !"
              }
            </li>
            <li>{'First arrived, first served.'}</li>
          </ul>
          <p>Warning : </p>
          <ul>
            <li>{"Don't try to get answers from projects teams."}</li>
            <li>{"Don't try to cheat."}</li>
            <li>{'The only way to obtain keys is to find passwords.'}</li>
          </ul>
        </div>
      </div>
      <a className={buttonStyles.btnPrimary} href="#cases">
        Next
      </a>
      <Image
        src="/bg_book.webp"
        alt="book of rules"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={50}
        priority
      />
    </section>
  )
}
