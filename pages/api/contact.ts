import type { NextApiRequest, NextApiResponse } from 'next'
import mailjet, { SendEmailV3_1 } from 'node-mailjet'

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
    const data: SendEmailV3_1.Body = {
      Messages: [{
        Sender: {
          Email: 'bguenther3@gmail.com',
        },
        From: {
          Email: 'bguenther3@gmail.com',
          Name: 'Purcell Website',
        },
        To: [{
          Email: 'bguenther3@gmail.com',
          Name: req.body.name,
        }],
        Subject: 'New contact form submission',
        TextPart: `Message: ${req.body.message} From: ${req.body.email}`,
      }],
    }

    await mj
      .post('send', { version: 'v3.1' })
      .request(data)

  } catch (e) {
    console.error(e)
    // @ts-ignore
    return res.status(500).json({ data: e.response.statusText })
  }

  return res.status(201).end()
}
