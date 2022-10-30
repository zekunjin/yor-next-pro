import { useProvider } from '@yorjs/core'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthProviderKey } from '../../../common/enums/auth-provider-key.enum'
import { userService } from '../../../common/modules/user/user.service'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: AuthProviderKey.JWT,
      name: AuthProviderKey.JWT,
      type: AuthProviderKey.JWT,
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const { signIn } = useProvider(userService)
          if (credentials) {
            const { token } = await signIn(credentials.username, credentials.password)
            return { id: token, token }
          }
          else { return null }
        }
        catch (err) {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/user/sign-in'
  }
}
export default NextAuth(authOptions)
