import { IconButton } from '@chakra-ui/react'
import { useDisconnect } from '@thirdweb-dev/react';
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const UserProfileIcon = () => {
  return (
    <IconButton
      m={'2'}
      aria-label='Metamask Login'
    >
      <BiUserCircle />
    </IconButton>
  )
}

export default UserProfileIcon