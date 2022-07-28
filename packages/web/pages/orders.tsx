import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { getAllNfts } from '../utils/nftutil'
import { useAppSelector } from '../hooks/use-app-selector'
import { selectAccount } from '../features/account/accountSlice'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { Navbar } from '../components'
import Footer from '../components/footer'
import StrapiApi from '../api/StrapiApi'
import OrderCard from '../components/order-card'

const Orders = () => {

  const address = useAppSelector(selectAccount)
  const [orders, setOrders] = React.useState([])
  const Api = new StrapiApi()
  useEffect(() => {
    getOrders()
    console.log(orders)
  }, [address])

  const getOrders = async () => {
    const response = await Api.getAllOrders()

    setOrders(response.data.filter((order: any) => order.attributes.address === address))
  }

  if (address === "") {
    return (
      <VStack
        minH={'100vh'}
        width={'100%'}
      >
        <Navbar />
        <Box flex={1}>
          <Heading>Connect to wallet</Heading>
        </Box>
        <Footer />
      </VStack>
    )
  }
  return (
    <VStack
      minH={'100vh'}
      width={'100%'}
    >
      <Navbar />
      <Box w={'90%'} flex={1}>
        {orders.map((order, index) => {
          return (
            <OrderCard order={order} key={index} />
          )
        })}
      </Box>
      <Footer />
    </VStack>
  )
}

export default Orders