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

  const body = JSON.parse(req.body)

  try {
    const data: SendEmailV3_1.Body = {
      Messages: [{
        Sender: {
          Name: 'Purcell website',
          Email: 'tristan@tristanchartcommercial.com',
        },
        From: {
          Name: 'Purcell website',
          Email: 'tristan@tristanchartcommercial.com',
        },
        To: [{
          Name: 'Purcell Business Center',
          Email: 'tristan@tristanchartcommercial.com',
        }],
        Subject: 'New contact form submission',
        TextPart: `Name: ${body.firstname} ${body.lastname}
Email: ${body.email}
Phone: ${body.phone}
Company: ${body.company}
Country: ${body.country}
Preferred size: ${body.size}
How did you hear of us?: ${body.how}
Are you a broken?: ${body.broker}
Opt-in consent: ${body.optin}`,
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
