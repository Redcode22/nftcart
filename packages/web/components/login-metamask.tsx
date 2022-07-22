import { IconButton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { addAccount } from '../features/account/accountSlice'
import { useAppDispatch } from '../hooks/use-app-dispatch'
import Account from '../types/account'

const LoginMetamask = () => {
  const dispatch = useAppDispatch();
  const connectToMetaMask = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          dispatch(addAccount(result[0]))
          // console.log(result)
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