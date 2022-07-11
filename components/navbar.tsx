import { Avatar, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import DarkModeSwitch from './dark-mode-switch'
import LoginMetamask from './login-metamask'

const Navbar = () => {
  return (
    <Flex
      w={['100%', '100%', '100%', '100%', '100%']}
      justify={'space-between'}
      align={'center'}
      p={4}
    >
      <Image src='/logo.png' alt='logo' height={'40px'}  />
      <Flex
        align={'center'}
      >
        <LoginMetamask />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default Navbar