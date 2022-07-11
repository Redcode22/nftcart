import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiLogIn } from 'react-icons/bi'

const LoginMetamask = () => {
  return (
    <IconButton m={'2'} aria-label='Metamask Login'>
      <BiLogIn />
    </IconButton>
  )
}

export default LoginMetamask