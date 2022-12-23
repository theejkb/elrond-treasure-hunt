import { Modal, Text } from '@nextui-org/react'

interface EndModalProps {
  isOpen: boolean
  formLink: string
}

function EndModal({ isOpen, formLink }: EndModalProps) {
  return (
    <Modal aria-labelledby="modal-title" open={isOpen} preventClose>
      <Modal.Header>
        <Text id="modal-title" size={30}>
          Elrond Treasure Hunt Final Form
        </Text>
      </Modal.Header>
      <Modal.Body
        style={{
          overflowY: 'unset',
        }}
      >
        <Text size={20} css={{ textAlign: 'center' }}>
          Congratulations ! You have found all the hidden words. Fill out this
          form quickly, and wait for the final ranking, if you’re in the first
          5, you will be reached by the Treasure Guardians
        </Text>
        <Text size={20} css={{ marginBottom: 0, textAlign: 'center' }}>
          <a
            style={{ color: 'blue' }}
            href={formLink}
            target="_blank"
            rel="noreferrer"
          >
            {formLink}
          </a>
        </Text>
      </Modal.Body>
    </Modal>
  )
}

export default EndModal
