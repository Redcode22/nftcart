import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiCart, BiLogOut } from 'react-icons/bi'

const UserCart = () => {
  return (
    <Link href={'/checkout'}>
      <IconButton
        m={'2'}
        aria-label='Open Cart'
      >
        <BiCart />
      </IconButton>
    </Link>
  )
}

export default UserCart