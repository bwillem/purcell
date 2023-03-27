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
          Name: 'Purcell website',
          Email: 'bguenther3@gmail.com',
        },
        From: {
          Name: 'Purcell website',
          Email: 'bguenther3@gmail.com',
        },
        To: [{
          Email: 'bguenther3@gmail.com',
        }],
        Subject: 'New contact form submission',
        TextPart: `Name: ${req.body.firstname} ${req.body.lastname}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Company: ${req.body.company}
        Country: ${req.body.country}
        Preferred size: ${req.body.size}
        How did you hear of us?: ${req.body.how}
        Are you a broken?: ${req.body.broker}
        Opt-in consent: ${req.body.optin}`,
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
