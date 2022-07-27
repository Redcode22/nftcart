import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <Flex
    h={'100vh'}
    w={'100vw'}
    justifyContent={'center'}
    alignItems={'center'}
    
    >
      <Heading>Ooops.. Seems like page doesn't exists.</Heading>
    </Flex>
  )
}

export default Error