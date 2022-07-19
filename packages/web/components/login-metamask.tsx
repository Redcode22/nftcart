import { IconButton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiLogIn } from 'react-icons/bi'

const LoginMetamask = () => {
  return (
    <IconButton
      m={'2'}
      aria-label='Metamask Login'
      // onClick={connectToMetamask}
    >
      <BiLogIn />
    </IconButton>
  )
}

export default LoginMetamask