import { IconButton } from '@chakra-ui/react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import React, { useEffect } from 'react'
import { BiLogIn } from 'react-icons/bi'

const LoginMetamask = () => {
  const connectToMetamask = useMetamask();
  const address = useAddress();
  useEffect(() => {
    console.log(address)
  }, [address])
  return (
    <IconButton
      m={'2'}
      aria-label='Metamask Login'
      onClick={connectToMetamask}
    >
      <BiLogIn />
    </IconButton>
  )
}

export default LoginMetamask