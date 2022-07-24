import { Box, Button, Flex, Heading, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components'
import Footer from '../components/footer'

const Checkout = () => {
  return (
    <VStack
      maxH={'100vh'}
      width={'100%'}
    >
      <Navbar />
      <Flex
        w={'100%'}
        justifyContent={'space-evenly'}
        display={{ base: 'block', md: 'flex' }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading>Checkout</Heading>
          <Image my={10} src={'https://picsum.photos/id/2/600/400'} rounded={'xl'} />
          <Flex
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Box>
              <Text fontSize={'2xl'}>Pizza Shoes</Text>
              <Text>XL</Text>
            </Box>
            <Text fontSize={'4xl'}>$1,900.00</Text>
          </Flex>

        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          w={'400px'}
        >
          <Heading textAlign={'center'}>Add Details</Heading>
          <Input my={'4'} placeholder={'Name'} />
          <Input my={'4'} placeholder={'Email'} />
          <Input my={'4'} placeholder={'Phone'} />
          <Textarea my={'4'} placeholder='Enter your Address' />
          <Button my={'4'} bg={'teal'}>
            Place Order
          </Button>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </VStack>
  )
}

export default Checkout