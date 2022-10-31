// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8',
  cookieName: 'yor_access_token',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      token: string
    }
  }
}
