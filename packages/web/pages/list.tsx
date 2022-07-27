import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navbar } from '../components'
import Footer from '../components/footer'
import ProductCard from '../components/product-card'
import { BiCartAlt } from 'react-icons/bi'
import StrapiApi from '../api/StrapiApi'

const List = () => {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const Api = new StrapiApi();

  useEffect(() => {
    getProducts();
  }, [])
  const getProducts = async () => {
    const products = await Api.getAllProducts()
    setProducts(products.data)
    setLoading(false)
  }


  return (
    <VStack
      minH={'100vh'}
    >
      <Navbar />
      <Box
        bg={'teal'}
        w={'90%'}
        h={'200px'}
        mx={10}
        rounded={'xl'}
        my={16}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <BiCartAlt color={'white.500'} fontSize={64} />
        <Heading textAlign={'center'} as="h2" size="xl" mt={6} mb={2}>
          The best products to ever get.
        </Heading>
      </Box>
      <Tabs className='no-scroll' variant='soft-rounded' colorScheme='teal' overflowX={'scroll'}>
        <TabList>
          <Tab>New Arrival</Tab>
          <Tab>Sneakers</Tab>
          <Tab>Boots</Tab>
          <Tab>Loafers</Tab>
        </TabList>
      </Tabs>
      {loading ? <div>Loading...</div> 
          : (
          <Flex dir='col' justifyContent={'center'}>
            <Grid m={'5'} w={'100%'} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
              {products.length > 0 && products.map((phone, index) => {
                return (
                  <GridItem w='100%' key={index}>
                    <ProductCard phone={phone} />
                  </GridItem>
                )
              })}
            </Grid>
          </Flex >)
      }
      <Footer />
    </VStack >
  )
}

export default List