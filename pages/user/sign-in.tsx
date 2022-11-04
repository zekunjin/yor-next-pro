import { useModule } from '@yorjs/core'
import Link from 'next/link'
import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import UserLayout from '../../components/layouts/user-layout'
import { userModule } from '../../common/modules/user/user.module'

const UserSignIn = () => {
  const { username, password, signIn } = useModule(userModule)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignIn = async () => {
    setLoading(true)
    await signIn()
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <UserLayout>
      <Box className="w-full h-full flex flex-col items-center justify-center">
        <Stack spacing={2} className="w-full px-16 flex flex-col box-border">
          <Box>
            <Box className="text-xl font-bold">Sign In</Box>
            <Box className="mt-4 text-xs">
              <span>New user?</span>
              <Link className="font-bold ml-1" href="/">Create an account</Link>
            </Box>
          </Box>

          <TextField value={username.value} label="Username" onChange={event => username.value = event.target.value} />

          <TextField value={password.value} label="Password" type="password" onChange={event => password.value = event.target.value} />

          <Box className="text-right text-xs">
            <Link href="/">Forget password?</Link>
          </Box>

          <LoadingButton loading={loading} variant="contained" size="large" onClick={handleSignIn}>Sign In</LoadingButton>
        </Stack>
      </Box>
    </UserLayout>
  )
}

export default UserSignIn
