import { AddIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import { selectAccount } from '../features/account/accountSlice'
import { useAppSelector } from '../hooks/use-app-selector'
import DarkModeSwitch from './dark-mode-switch'
import LoginMetamask from './login-metamask'
import LogoutMetamask from './logout-metamask'
import UserCart from './user-cart'
import UserProfileIcon from './user-profile-icon'

const Navbar = () => {
  let account = useAppSelector(selectAccount)

  return (
    <Flex
      w={['100%', '100%', '100%', '100%', '100%']}
      justify={'space-between'}
      align={'center'}
      p={4}
    >
      <Link href={'/'}>
        <Image cursor={'pointer'} src='/logo.png' alt='logo' height={'40px'} />
      </Link>
      <Flex
        align={'center'}
      >
        {
          account ? (
            <>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                />
                <MenuList>
                  <MenuItem icon={<BiCart />} command='⌘T'>
                    Cart
                  </MenuItem>
                  <MenuItem icon={<BiUser />} command='⌘N'>
                    Profile
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : <LoginMetamask />
        }
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default Navbar