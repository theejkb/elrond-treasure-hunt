import { Modal, Input, Button, Text } from '@nextui-org/react'
import { compareSync } from 'bcryptjs'
import ms from 'ms'
import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import { Case } from '../types'

interface AnswerModalProps {
  isOpen: boolean
  closeModal: () => void
  currentCase: Case | undefined
}

const BLOCK_DURATION = 300 * 1000

function AnswerModal({
  isOpen,
  closeModal,
  currentCase,
}: AnswerModalProps) {
  const [error, setError] = useState<string | undefined>()
  const [lastInputDate, setLastInputDate] = useState<Date | null>(null)

  function verifWord(event: BaseSyntheticEvent) {
    event.preventDefault()
    const inputWord = (event.target[0].value as string).toLocaleLowerCase()
    const isRightAnswer = compareSync(inputWord, currentCase!.encryptedWord)
    const currentDate = new Date()
    const isBlocked =
      (lastInputDate &&
        currentDate.getTime() - lastInputDate.getTime() <= BLOCK_DURATION) ??
      false
    if (!isBlocked && inputWord === '') {
      setError('Field required')
    } else if (
      isBlocked ||
      !isRightAnswer ||
      (!lastInputDate && !isRightAnswer)
    ) {
      const waitingTime =
        BLOCK_DURATION -
        (lastInputDate && isBlocked
          ? currentDate.getTime() - lastInputDate.getTime()
          : 0)
      setError(
        `Please wait ${ms(waitingTime, {
          long: true,
        })} to continue`,
      )
      if (!lastInputDate || !isBlocked) {
        setLastInputDate(currentDate)
        localStorage.setItem('last-input-date', currentDate.toJSON())
      }
    } else {
      const solvedAnswers = JSON.parse(localStorage.getItem('solved') || '[]')
      solvedAnswers.push(currentCase!.encryptedWord)
      localStorage.setItem('solved', JSON.stringify(solvedAnswers))
      closeModal()
      setError(undefined)
      setLastInputDate(currentDate)
      localStorage.setItem('last-input-date', currentDate.toJSON())
    }
  }

  useEffect(() => {
    const lastInput = localStorage.getItem('last-input-date')
    setLastInputDate(
      lastInput && Date.parse(lastInput) ? new Date(lastInput) : null,
    )
  }, [])

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={() => {
        closeModal()
        setError(undefined)
      }}
    >
      <form onSubmit={verifWord}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {`DAY ${currentCase?.id} `}
            <Text b size={18}>
              {currentCase?.project}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body
          style={{
            overflowY: 'unset',
          }}
        >
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
            status={error ? 'error' : 'default'}
            color={error ? 'error' : 'default'}
            helperColor={error ? 'error' : 'default'}
            helperText={error}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeModal}>
            Close
          </Button>
          <Button auto type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default React.memo(AnswerModal)
