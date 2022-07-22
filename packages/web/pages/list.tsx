import { Flex, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components'
import Footer from '../components/footer'
import ProductCard from '../components/product-card'

const List = () => {
  return (
    <VStack
      minH={'100vh'}
    >
      <Navbar />
      <Tabs variant='soft-rounded' colorScheme='teal'>
        <TabList>
          <Tab>New Arrival</Tab>
          <Tab>Sneakers</Tab>
          <Tab>Boots</Tab>
          <Tab>Loafers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
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