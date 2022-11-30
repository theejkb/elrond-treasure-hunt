import { Button, Grid, Input, Modal, Text } from '@nextui-org/react'
import { compareSync } from 'bcryptjs'
import type { NextPage } from 'next'
import Image from 'next/image'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import Metadata from '../components/Metadata'
import RulesSection from '../components/RulesSection'
import TreasureMapSection from '../components/TreasureMapSection'
import stylesButton from '../styles/Button.module.scss'
import styles from '../styles/Home.module.scss'
import { Case } from '../types'

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false)
  const [isError, setIsError] = useState(false)
  const [cases, setCases] = useState<Case[]>([])
  const [currentCase, setCurrentCase] = useState<Case>()
  const [solvedAnswers, setSolvedAnswers] = useState<string[]>([])

  const closeHandler = () => {
    setVisible(false)
  }

  function openModal(_currentCase: Case) {
    setIsError(false)
    setCurrentCase(_currentCase)
    setVisible(true)
  }

  function verifWord(event: BaseSyntheticEvent) {
    event.preventDefault()
    const inputWord = (event.target[0].value as string).toLocaleLowerCase()
    const isRightAnswer = compareSync(inputWord, currentCase!.encryptedWord)
    setIsError(!isRightAnswer)
    if (isRightAnswer) {
      solvedAnswers.push(inputWord)
      localStorage.setItem('solved', JSON.stringify(solvedAnswers))
      setVisible(false)
    }
  }

  useEffect(() => {
    setSolvedAnswers(JSON.parse(localStorage.getItem('solved') || '[]'))
  }, [])

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
          project: 'fill',
          link: 'fill',
          encryptedWord: 'fill',
          encryptedWalletWord: 'fill',
          availableDate: new Date(2099, 1),
        } as Case
      }
      setCases(tmp)
    }
    fetchCases().catch(console.error)
  }, [])

  return (
    <div className={styles.container}>
      <Metadata />
      <Header />
      <main>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <form onSubmit={verifWord}>
            <Modal.Header>
              <Text id="modal-title" size={18}>
                {`DAY ${
                  cases.findIndex(
                    (_case) => _case?.project === currentCase?.project,
                  ) + 1
                } `}
                <Text b size={18}>
                  {currentCase?.project}
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text size={18} css={{ marginBottom: 0 }}>
                Link :
                <a
                  style={{ color: 'blue' }}
                  href={currentCase?.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  {currentCase?.link}
                </a>
              </Text>
              <Text size={18}>
                {`Hint : ${currentCase?.hint ?? 'No hint available'}`}
              </Text>
              <Input
                clearable
                bordered
                fullWidth
                label="Word :"
                size="lg"
                placeholder="Zircon87"
                status={isError ? 'error' : 'default'}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        <TreasureMapSection
          sectionStyles={styles}
          buttonStyles={stylesButton}
        />
        <IntroSection sectionStyles={styles} buttonStyles={stylesButton} />
        <RulesSection sectionStyles={styles} buttonStyles={stylesButton} />

        <section id="cases" className={styles.casesSection}>
          <Image
            src="/bg_fond_cases.webp"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <Grid.Container
            className="all-boxes"
            gap={2}
            style={{ maxWidth: '1000px', marginTop: '50px' }}
          >
            {cases.map((_case) => {
              const answer = solvedAnswers.find((answer) =>
                compareSync(answer, _case.encryptedWord),
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
                        cursor:
                          !isSolved && isAvailable ? 'pointer' : 'default',
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
                            width="100"
                            height="100"
                            layout="fill"
                            style={isSolved ? { opacity: 0.5 } : {}}
                          />
                        ) : (
                          <Image
                            src="/case.png"
                            alt="closed case"
                            layout="fill"
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
        </section>
      </main>
    </div>
  )
}

export default Home
