import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { BaseSectionProps, Case } from '../types'
import AnswerModal from './AnswerModal'
import CasesGrid from './CasesGrid'

interface SectionProps extends BaseSectionProps {}

export default function CasesSection({ sectionStyles }: SectionProps) {
  const [visible, setVisible] = useState(false)
  const [cases, setCases] = useState<Case[]>([])
  const [currentCase, setCurrentCase] = useState<Case>()
  const solvedAnswers = useMemo<string>(
    () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('solved') || '[]'
      }
      return '[]'
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )

  const openModal = useCallback((_currentCase: Case) => {
    setCurrentCase(_currentCase)
    setVisible(true)
  }, [])

  const closeHandler = useCallback(() => setVisible(false), [])

  useEffect(() => {
    async function fetchCases(): Promise<void> {
      const response = await fetch('/api/cases')
      const data: Case[] = await response.json()
      const tmp = new Array<Case>(24)
      data.forEach((c: Case, i: number) => {
        tmp[i] = {
          ...c,
          availableDate: new Date(c.availableDate),
        } as Case
      })
      for (let i = data.length; i < tmp.length; i++) {
        tmp[i] = {
          id: i + 1,
          project: 'fill',
          link: 'fill',
          encryptedWord: `fill-${i}`,
          encryptedWalletWord: 'fill',
          availableDate: new Date(2099, 1),
        } as Case
      }
      setCases(tmp)
    }
    fetchCases().catch(console.error)
  }, [])

  return (
    <section id="cases" className={sectionStyles.casesSection}>
      {visible && (
        <AnswerModal
          isOpen={visible}
          closeModal={closeHandler}
          currentCase={currentCase}
        />
      )}
      <Image
        src="/bg_fond_cases.webp"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <CasesGrid
        cases={cases}
        solvedAnswers={solvedAnswers}
        openModal={openModal}
      />
    </section>
  )
}
