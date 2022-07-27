import { VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => {
  return (
    <VStack
      h={'100vh'}
      w={'100vw'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      Page
    </VStack>
  )
}

export default Page