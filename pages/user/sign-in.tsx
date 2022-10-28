import { useModule } from '@yorjs/core'
import Link from 'next/link'
import { LoadingButton } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import UserLayout from '../../components/user-layout'
import { userModule } from '../../common/modules/user/user.module'

const UserSignIn = () => {
  const { username, password, signIn } = useModule(userModule)

  return (
    <UserLayout>
      <Box className="w-screen h-screen flex">
        <Box className="flex items-center justify-center flex-1 bg-gray-100"></Box>

        <Box sx={{ width: '480px' }} className="flex flex-col items-center justify-center">
          <Box className="w-full px-16 flex flex-col box-border">
            <Box>
              <h3>Sign In</h3>
              <Box className="mt-4 text-xs">
                <span>New user?</span>
                <Link className="font-bold ml-1" href="/">Create an account</Link>
              </Box>
            </Box>

            <TextField value={username.value} label="Username" className="mt-5" onChange={event => username.value = event.target.value} />
            <TextField value={password.value} label="Password" type="password" className="mt-5" onChange={event => password.value = event.target.value} />

            <Box className="text-right text-xs mt-5">
              <Link href="/">Forget password?</Link>
            </Box>

            <LoadingButton loading={false} variant="contained" size="large" className="mt-5" onClick={signIn}>Sign In</LoadingButton>
          </Box>
        </Box>
      </Box>
    </UserLayout>
  )
}

export default UserSignIn
