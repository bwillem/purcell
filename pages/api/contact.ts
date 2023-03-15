import type { NextApiRequest, NextApiResponse } from 'next'
import * as mailer from 'nodemailer'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('api/contact', req.body)
  res.status(200).json({ name: 'John Doe' })
}
