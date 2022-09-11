import { Button, Grid, Input, Modal, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import Header from '../components/Header'
import stylesButton from '../styles/Button.module.scss'
import styles from '../styles/Home.module.scss'

type Case = {
  available: boolean
  project: string
  link: string
  encryptedWord: string
  encryptedWalletWord: string
  hint?: string
}

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false)
  const [isError, setIsError] = useState(false)
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
    const isRightAnswer = inputWord === currentCase?.encryptedWord
    setIsError(!isRightAnswer)
    if (isRightAnswer) {
      solvedAnswers.push(currentCase!.project)
      localStorage.setItem('solved', JSON.stringify(solvedAnswers))
      setVisible(false)
    }
  }

  const cases: Case[] = new Array(24)
    .fill({
      project: 'Dragons Arena',
      link: 'https://discord.gg/h6T9vp3J86',
      encryptedWord: 'Pizza65',
      encryptedWalletWord: 'camionnette',
      available: true,
    } as Case)
    .map((_case: Case, index) => ({
      ..._case,
      project: _case.project + index,
      encryptedWord: _case.encryptedWord,
    }))

  useEffect(() => {
    setSolvedAnswers(JSON.parse(localStorage.getItem('solved') || '[]'))
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
                    (_case) => _case.project === currentCase?.project,
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
                placeholder="Pizza65"
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
                </li>
                <li>
                  {
                    ' Visit the project (could be Twitter, Discord, Telegram, ...)\
                  and try to find a secret password. Format : gems12.'
                  }
                  <br />
                  {'For example : zircon87'}
                </li>
                <li>
                  {
                    ' Come back to elrondtreasurehunt.com and fill the case with\
                  this code.'
                  }
                  <br />
                  {
                    "If it's correct, you'll receive one of the 24 keys\
                  needed to open the chest."
                  }
                </li>
                <li>{'Write it down somewhere and wait for the new box.'}</li>
              </ul>
              <p>Warning : </p>
              <ul>
                <li>
                  {
                    "Don't try to get answers from projects teams. Your only contact is Elrond Treasure Hunt Twitter account"
                  }
                </li>
                <li>
                  {
                    "Don't try to cheat. The only way to obtain keys is to find passwords."
                  }
                </li>
              </ul>
            </div>
          </div>
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
          <Grid.Container gap={2} style={{ maxWidth: '1200px' }}>
            {cases.map((_case) => {
              const isSolved =
                solvedAnswers.findIndex(
                  (answer) => answer === _case.project,
                ) !== -1
              const handleClick = !isSolved ? () => openModal(_case) : undefined
              return (
                <Grid key={_case.encryptedWord} xs={3} md={2}>
                  <div
                    onClick={handleClick}
                    style={{
                      cursor: !isSolved ? 'pointer' : 'default',
                      position: 'relative',
                      aspectRatio: '1',
                      height: 'auto',
                      width: '100%',
                    }}
                  >
                    {!isSolved ? (
                      <Image src="/case.png" alt="closed case" layout="fill" />
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          backgroundColor: 'white',
                          height: '100%',
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text size={20}>{_case.encryptedWalletWord}</Text>
                      </div>
                    )}
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
