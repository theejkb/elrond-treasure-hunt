import { Grid } from '@nextui-org/react'
import { compareSync } from 'bcryptjs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Case } from '../types'
import EndModal from './EndModal'

interface CasesGridProps {
  cases: Case[]
  solvedAnswers: string
  openModal: (_currentCase: Case) => void
}

function CasesGrid({ cases, solvedAnswers, openModal }: CasesGridProps) {
  const [form, setForm] = useState<string | undefined>(undefined)
  const solvedAnswersList: string[] = JSON.parse(solvedAnswers)
  solvedAnswersList.forEach((answer) => {
    if (!answer.startsWith('$2a$10')) {
      const answerCase = cases.find((_case) =>
        compareSync(answer, _case.encryptedWord),
      )
      if (answerCase) {
        solvedAnswers = solvedAnswers.replace(answer, answerCase.encryptedWord)
        localStorage.setItem('solved', solvedAnswers)
        return answerCase.encryptedWord
      }
    }
  })

  useEffect(() => {
    async function fetchForm(): Promise<void> {
      const response = await fetch('/api/final_form', {
        method: 'POST',
        body: JSON.stringify(solvedAnswersList),
      })
      if (response.ok) {
        const data: string = await response.json()
        setForm(data)
      }
    }
    if (solvedAnswersList.length === 24) {
      fetchForm().catch(console.error)
    }
  }, [solvedAnswersList])

  if (form) {
    return <EndModal isOpen formLink={form} />
  }

  return (
    <Grid.Container
      className="all-boxes"
      gap={2}
      style={{ maxWidth: '1000px', marginTop: '50px' }}
    >
      {cases.map((_case) => {
        const answer = solvedAnswersList.find(
          (answer) => answer === _case.encryptedWord,
        )
        const isSolved = answer !== undefined
        const isAvailable = new Date() >= _case.availableDate
        const handleClick =
          !isSolved && isAvailable ? () => openModal(_case) : undefined
        return (
          <Grid className="boxe" key={_case.encryptedWord} xs={4} md={2}>
            <div
              onClick={handleClick}
              style={{
                ...{
                  cursor: !isSolved && isAvailable ? 'pointer' : 'default',
                  position: 'relative',
                  aspectRatio: '1',
                  height: 'auto',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  backgroundColor: 'black',
                  zIndex: 0,
                },
                ...(isAvailable ? {} : { filter: 'grayscale(1)' }),
              }}
            >
              {
                <>
                  {_case.imgUrl && isAvailable ? (
                    <Image
                      src={`/project_logos/${_case.imgUrl}`}
                      alt=""
                      layout="fill"
                      style={isSolved ? { opacity: 0.5 } : {}}
                      priority
                    />
                  ) : (
                    <Image
                      src="/case.png"
                      alt="closed case"
                      layout="fill"
                      priority
                    />
                  )}
                  {isAvailable && isSolved && (
                    <AiFillCheckCircle
                      style={{
                        position: 'absolute',
                        color: 'green',
                        top: '25%',
                        left: '25%',
                      }}
                      size={'50%'}
                    />
                  )}
                </>
              }
            </div>
          </Grid>
        )
      })}
    </Grid.Container>
  )
}

export default React.memo(CasesGrid)
