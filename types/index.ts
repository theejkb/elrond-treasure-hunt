export type Case = {
  id: number
  availableDate: Date
  project: string
  link: string
  imgUrl?: string
  encryptedWord: string
  encryptedWalletWord: string
  hint?: string
}

type Styles = {
  readonly [key: string]: string
}
export interface BaseSectionProps {
  sectionStyles: Styles
  buttonStyles: Styles
}
