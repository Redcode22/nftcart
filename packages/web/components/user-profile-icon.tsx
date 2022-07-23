import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const UserProfileIcon = () => {
  return (
    <Link href={'/profile'}>
      <IconButton
        m={'2'}
        aria-label='Metamask Login'
      >
        <BiUserCircle />
      </IconButton>
    </Link>
  )
}

export default UserProfileIcon