import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components'
import Footer from '../components/footer'
import ProductCard from '../components/product-card'
import { BiCartAlt } from 'react-icons/bi'

const List = () => {
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
      <Flex dir='col' justifyContent={'center'}>
        <Grid m={'5'} w={'100%'} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
          <GridItem w='100%' >
            <ProductCard />
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </VStack>
  )
}

export default List