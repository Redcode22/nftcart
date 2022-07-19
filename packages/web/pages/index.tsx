import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, chakra, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const HomeLogoBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

const NftText = chakra(motion.span, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

const Home: NextPage = () => {
  return (
    <VStack
      h={'100vh'}
    >
      <Navbar />
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w={['100%', '100%', '100%', '100%', '100%']}
        justify={{ base: 'center', md: 'space-around' }}
        align={'center'}
        p={4}
        height={'100%'}
      >
        <HomeLogoBox
          mb={{ base: '20', md: 0 }}
          animate={{
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Image src='/logo.png' alt='logo' height={{ base: '200px', md: '400px' }} />
        </HomeLogoBox>
        <VStack
          w={{ base: '100%', md: '50%' }}
        >
          <Heading size={{ base: '2xl', md: '3xl' }}>
            Welcome to{" "}
            <NftText
              // as='span'
              color={'#FA00FE'}
              animate={{
                color: ["#0051FE", "#F000FF", "#0051FE"]
              }}
              transition={{
                duration: 3,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >NFTkart</NftText>
          </Heading>
          <Text
            w={{ base: '100%', md: '50%' }}
            textAlign={'center'}
            fontSize={{ base: '18px', md: '24px' }}
          >
            Revolutionizing the warranties of the products with NFTs and the blockchain. Preserving the authenticity.
          </Text>
          <Button size={'lg'} mt={40}>
            <ArrowForwardIcon mr={2} />
            Get Started
          </Button>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default Home
