import { NextApiRequest, NextApiResponse } from 'next'
import { cases } from '../../cases'
import { Case } from '../../types'
// import bcrypt from 'bcryptjs'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Case[]>,
) {
  // const test: Case[] = cases.map((_case) => {
  //   return {
  //     ..._case,
  //     encryptedWord: bcrypt.hashSync(
  //       _case.encryptedWord,
  //       '$2a$10$uPgzV15gmqBDw5.uOIdWpO',
  //     ),
  //   }
  // })
  // console.log(test)

  res
    .status(200)
    .json(cases.filter((_case) => _case.availableDate <= new Date()))
}
