import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { useModule } from '@yorjs/core'
import UserLayout from '../../components/user-layout'
import { userModule } from '../../common/user/user.module'

const UserSignIn = () => {
  const { username, password, signIn } = useModule(userModule)

  return (
    <UserLayout>
      <Input value={username.value} placeholder="Username" onChange={event => username.value = event.target.value} />
      <Input value={password.value} placeholder="Password" onChange={event => password.value = event.target.value} />

      <Button variant="contained" onClick={signIn}>Sign In</Button>
    </UserLayout>
  )
}

export default UserSignIn
