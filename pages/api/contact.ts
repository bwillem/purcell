import type { NextApiRequest, NextApiResponse } from 'next'
import mailjet from 'node-mailjet'

const mj = mailjet.apiConnect(
  process.env.MJ_API_KEY_PUBLIC as string,
  process.env.MJ_API_KEY_PRIVATE as string,
  {},
)

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('api/contact', req.body)

  try {
    const request = await mj
      .post('send', {})
      .request({
        Messages: [{
          From: {
            Name: 'Purcell Website',
          },
          To: [{
            Email: 'bguenther3@gmail.com',
            Name: req.body.name,
          }],
          Subject: 'New contact form submission',
          TextPart: req.body.message,
        }],
      })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ data: 'Error sending mail' })
  }

  return res.status(201).end()
}
