import { Box, Button, Flex, Heading, Image, Input, Text, Textarea, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navbar } from '../components'
import Footer from '../components/footer'
import { selectAccount } from '../features/account/accountSlice'
import { selectCart } from '../features/cart/cartSlice'
import { useAppSelector } from '../hooks/use-app-selector'
import { generateNft, sendFileToIPFS } from '../utils/nftutil'
import StrapiApi from '../api/StrapiApi'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
}

const Checkout = () => {
  const Api = new StrapiApi()
  const toast = useToast()

  const product = useAppSelector(selectCart);
  const address = useAppSelector(selectAccount);
  const [values, setValues] = useState(initialState);

  const handleBuy = async () => {
    const data = {
      ...values,
      ...product,
      walletAddress: address,
    }
    // TODO: Upload json data to pinata
    const ipfsData = await sendFileToIPFS(data)

    // TODO: Add to orders

    const nftData = await generateNft(ipfsData.IpfsHash)

    const order = await Api.addOrder({ ...data, nftData })

    toast({
      title: 'Success',
      description: 'Order placed successfully',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const handleValues = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  if (Object.entries(product).length === 0) {
    return (
      <Flex
        width='100%'
        minH='100vh'
        flexDir={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Navbar />
        <Box>
          <Heading textAlign={'center'}>Checkout</Heading>
          <Text textAlign={'center'}>You have no items in your cart</Text>
        </Box>
        <Footer />
      </Flex>
    )
  }

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
          <Image my={10} src={product.imageUrl} rounded={'xl'} />
          <Flex
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Box>
              <Text fontSize={'2xl'}>{product.name}</Text>
              <Text>{product.id}</Text>
            </Box>
            <Text fontSize={'4xl'}>Rs {product.price}</Text>
          </Flex>

        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          w={'400px'}
        >
          <Heading textAlign={'center'}>Add Details</Heading>
          <Input
            my={'4'}
            placeholder={'Name'}
            name='name'
            value={values.name}
            onChange={handleValues}
          />
          <Input
            my={'4'}
            placeholder={'Email'}
            name='email'
            value={values.email}
            onChange={handleValues}
          />
          <Input
            my={'4'}
            placeholder={'Phone'}
            name='phone'
            value={values.phone}
            onChange={handleValues}
          />
          <Textarea
            my={'4'}
            placeholder='Enter your Address'
            name='address' value={values.address}
            onChange={handleValues}
          />
          <Input
            my={'4'}
            placeholder={'City'}
            name='city'
            value={values.city}
            onChange={handleValues}
          />
          <Input
            my={'4'}
            placeholder={'State'}
            name='state'
            value={values.state}
            onChange={handleValues}
          />

          <Button my={'4'} bg={'teal'} onClick={handleBuy}>
            Place Order
          </Button>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </VStack>
  )
}

export default Checkout