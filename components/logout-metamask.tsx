import { IconButton } from '@chakra-ui/react'
import { useDisconnect } from '@thirdweb-dev/react';
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const LogoutMetamask = () => {
  const disconnectFromMetamask = useDisconnect();
  return (
    <IconButton
      onClick={disconnectFromMetamask}
      m={'2'}
      aria-label='Metamask Login'
    >
      <BiLogOut />
    </IconButton>
  )
}

export default LogoutMetamask