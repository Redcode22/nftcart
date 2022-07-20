import { IconButton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiLogIn } from 'react-icons/bi'

const LoginMetamask = () => {
  const connectToMetaMask = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          console.log(result)
        })
    }
  }
  return (
    <IconButton
      m={'2'}
      aria-label='Metamask Login'
      onClick={connectToMetaMask}
    >
      <BiLogIn />
    </IconButton>
  )
}

export default LoginMetamask