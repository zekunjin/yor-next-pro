import { useState } from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import UserLayout from '../../components/user-layout'

const UserSignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <UserLayout>
      <Input value={username} placeholder="Username" onChange={event => setUsername(event.target.value)} />
      <Input value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />

      <Button variant="contained">Sign In</Button>
    </UserLayout>
  )
}

export default UserSignIn
