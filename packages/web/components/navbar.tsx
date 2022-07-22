import { Avatar, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { selectAccount } from '../features/account/accountSlice'
import { useAppSelector } from '../hooks/use-app-selector'
import DarkModeSwitch from './dark-mode-switch'
import LoginMetamask from './login-metamask'
import LogoutMetamask from './logout-metamask'
import UserCart from './user-cart'
import UserProfileIcon from './user-profile-icon'

const Navbar = () => {
  let account = useAppSelector(selectAccount)
  useEffect(() => {
    console.log('account', account)
  }
  , [account])

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
          account ? (
            <>
              <UserCart />
              <UserProfileIcon />
            </>
          ) : <LoginMetamask />
        }
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default Navbar