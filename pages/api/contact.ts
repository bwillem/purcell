import type { NextApiRequest, NextApiResponse } from 'next'
import mailjet, { SendEmailV3_1 } from 'node-mailjet'

const mj = mailjet.apiConnect(
  process.env.MJ_API_KEY_PUBLIC as string,
  process.env.MJ_API_KEY_PRIVATE as string,
  {},
)

// const sendTo = 'bguenther3@gmail.com'
const sendTo = 'tristan@tristanchartcommercial.com'

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
          Email: sendTo,
        },
        From: {
          Name: 'Purcell website',
          Email: sendTo,
        },
        To: [{
          Name: 'Purcell Business Centre',
          Email: sendTo,
        }],
        Subject: 'New registration',
        TextPart: `New registration from purcellbusinesscentre.com

Name: ${body.firstname} ${body.lastname}
Email: ${body.email}
Phone: ${body.phone}
Company: ${body.company}
City: ${body.city}
Preferred size: ${body.size}
How did you hear of us?: ${body.how}
Are you a broker?: ${body.broker}
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
