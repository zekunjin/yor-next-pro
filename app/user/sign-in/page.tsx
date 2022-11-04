'use client'

import { useModule } from '@yorjs/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { userModule } from '../../../common/modules/user/user.module'

const UserSignIn = () => {
  const { username, password, signIn } = useModule(userModule)
  const router = useRouter()

  const handleSignIn = async () => {
    await signIn()
    router.push('/dashboard')
  }

  return (
    <div style={{ width: '480px' }} className="h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full px-16 flex flex-col div-border">
          <div>
            <div className="text-xl font-bold">Sign In</div>
            <div className="mt-4 text-xs">
              <span>New user?</span>
              <Link className="font-bold ml-1" href="/">Create an account</Link>
            </div>
          </div>

          <input value={username.value} placeholder="Username" onChange={event => username.value = event.target.value} />

          <input value={password.value} placeholder="Password" type="password" onChange={event => password.value = event.target.value} />

          <div className="text-right text-xs">
            <Link href="/">Forget password?</Link>
          </div>

          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default UserSignIn
