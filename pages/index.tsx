import { Button, Grid, Input, Modal, Text } from '@nextui-org/react'
import { compareSync } from 'bcryptjs'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import Header from '../components/Header'
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
    const inputWord = event.target[0].value
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
      <Head>
        <title>Treasure Hunt - Hodl Card</title>
        <meta property="og:title" content="Treasure Hunt" />
        <meta
          name="description"
          content="Participate now in the treasure hunt event offered by Hodl Card"
        />
        <meta
          property="og:description"
          content="Participate now in the treasure hunt event offered by Hodl Card"
        />
        <meta property="og:image" content="/website_preview.png" />
      </Head>
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
        <section className={styles.treasureMapSection}>
          <a className={stylesButton.btnPrimary} href="#intro">
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

        <section id="intro" className={styles.introSection}>
          <div className={styles.book}>
            <h1 className={styles.secondaryTitle}>Elrond Treasure Hunt</h1>
            <div className={styles.introDesc}>
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
          <a className={stylesButton.btnPrimary} href="#rules">
            Next
          </a>
          <Image
            className={styles.bgImage}
            src="/bg_intro.webp"
            alt="elrond pirate paper"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={50}
            priority
          />
        </section>

        <section id="rules" className={styles.rulesSection}>
          <div className={styles.book}>
            <div className={styles.bookDesc}>
              <p>Rules :</p>
              <ul>
                <li>
                  {
                    ' Every day, a new box will open revealing a project, URL and a\
                  hint.'
                  }
                  {
                    ' Visit the project (could be Twitter, Discord, Telegram, ...)\
                  and try to find a secret password. Format : Gems12.'
                  }
                </li>
                <li></li>
                <li>{"If it's correct, note it."}</li>
                <li>
                  {
                    ' Come back to elrondtreasurehunt.com and fill the case with\
                  this code.'
                  }
                  <br />
                </li>
                <li>{'Write it down somewhere and wait for the new box.'}</li>
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
          <a className={stylesButton.btnPrimary} href="#cases">
            Next
          </a>
          <Image
            className={styles.bgImage}
            src="/bg_book.webp"
            alt="book of rules"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={50}
            priority
          />
        </section>
        <section id="cases" className={styles.casesSection}>
          <Image
            className={styles.bgImage}
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
                          <Text
                            size={30}
                            b
                            style={{
                              color: 'white',
                              WebkitTextStroke: '0.5px black',
                            }}
                          >
                            {answer}
                          </Text>
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
