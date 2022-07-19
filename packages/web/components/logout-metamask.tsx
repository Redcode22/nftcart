import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const LogoutMetamask = () => {
  return (
    <IconButton
      // onClick={disconnectFromMetamask}
      m={'2'}
      aria-label='Metamask Login'
    >
      <BiLogOut />
    </IconButton>
  )
}

export default LogoutMetamask