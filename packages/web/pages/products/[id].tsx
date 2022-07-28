import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import StrapiApi from '../../api/StrapiApi';
import { Navbar } from '../../components';
import Footer from '../../components/footer';
import { addToCart } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

ProductPage.getInitialProps = async ({ query }: any) => {
  return { query }
}

export default function ProductPage({ query }: any) {
  const dispatch = useAppDispatch();
  const Api = new StrapiApi();
  const [product, setProduct] = React.useState({});
  const router = useRouter();

  const handleBuy = () => {
    dispatch(addToCart(
      {
        id: query.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description
      },
    ))
    router.push('/checkout');
  }

  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = async () => {
    const result = await Api.getProductByID(query.id)
    setProduct(result.data.attributes)
  }
  
  return (
    <Container maxW={'100vw'}>
      <Navbar />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                product.imageUrl
              }
              fit={'cover'}
              align={'center'}
              w={{ base: '100%', sm: '400px', lg: '500px' }}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {product.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Rs. {product.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {product.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('teal.500', 'teal.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Proximity</ListItem>
                    <ListItem>Fast Charging</ListItem>{' '}
                    <ListItem>Splash Proof</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Best Price</ListItem>
                    <ListItem>AMOLED Display</ListItem>
                    <ListItem>Fingerprint</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('teal.500', 'teal.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Ram:
                    </Text>{' '}
                    6 GB
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ROM:
                    </Text>{' '}
                    128GB
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Custom UI:
                    </Text>{' '}
                    Funtouch
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Screen Size:
                    </Text>{' '}
                    6.45 inches
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              textTransform={'uppercase'}
            >
              Add to cart
            </Button>
            <Button
              w={'full'}
              mt={8}
              bg={'teal'}
              color={'white'}
              size={'lg'}
              py={'7'}
              textTransform={'uppercase'}
              _hover={{ bg: 'teal.500' }}
              onClick={handleBuy}
            >
              Buy Now
            </Button>

            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </Container>
  );
}