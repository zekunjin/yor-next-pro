import { withIronSessionApiRoute } from 'iron-session/next'
import type { NextApiRequest, NextApiResponse } from 'next'
import { sessionOptions } from '../../lib/session'

const fakeSignIn = (_u: string, _p: string): Promise<{ data: { token: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { token: '' } })
    }, 3000)
  })
}

export default withIronSessionApiRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = await req.body
  const { data } = await fakeSignIn(username, password)

  req.session.user = { token: data.token }

  await req.session.save()

  return res.json(data)
}, sessionOptions)
