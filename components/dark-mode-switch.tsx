import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton m={'2'} aria-label="Toggle Mode" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}

export default DarkModeSwitch