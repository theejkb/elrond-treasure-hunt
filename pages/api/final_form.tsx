import { NextApiRequest, NextApiResponse } from 'next'
import { cases } from '../../cases'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const solvedAnswersList = new Set<string>(JSON.parse(req.body))
  let goodAnswers = 0
  cases.forEach((_case) => {
    if (solvedAnswersList.has(_case.encryptedWord)) {
      ++goodAnswers
    }
  })
  if (goodAnswers !== 24) {
    res.status(400).json('Bad request. Please find all words')
  } else {
    res.status(200).json('https://forms.gle/2MC6QGv4bcVUa55J6')
  }
}
