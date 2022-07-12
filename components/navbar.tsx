import { Avatar, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import React from 'react'
import DarkModeSwitch from './dark-mode-switch'
import LoginMetamask from './login-metamask'
import LogoutMetamask from './logout-metamask'
import UserProfileIcon from './user-profile-icon'

const Navbar = () => {
  const address = useAddress()

  return (
    <Flex
      w={['100%', '100%', '100%', '100%', '100%']}
      justify={'space-between'}
      align={'center'}
      p={4}
    >
      <Image src='/logo.png' alt='logo' height={'40px'} />
      <Flex
        align={'center'}
      >
        {
          address ? (
            <>
              <LogoutMetamask />
              <UserProfileIcon />
            </>
          ) : <LoginMetamask />
        }
        {/* <LogoutMetamask />
        <LoginMetamask /> */}
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default Navbar