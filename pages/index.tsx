import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, chakra, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

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
        w={['100%', '100%', '100%', '100%', '100%']}
        justify={'space-around'}
        align={'center'}
        p={4}
        height={'100%'}
      >
        <HomeLogoBox
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
          <Image src='/logo.png' alt='logo' height={'400px'} />
        </HomeLogoBox>
        <VStack>
          <Heading size={'3xl'}>
            Welcome to{" "}
            <NftText
              // as='span'
              color={'#FA00FE'}
              animate={{
                color: ["#0051FE" , "#F000FF", "#0051FE"]
              }}
              transition={{
                duration: 3,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >NFTing</NftText>
          </Heading>
          <Text fontSize={24} w={'400px'} textAlign={'center'}>
            Revolutionizing the NFTs with the Polygon Blockchain.Bringing the power of Blockchain with ECommerce
          </Text>
          <Button size={'lg'}>
            <ArrowForwardIcon mr={2} />
            Get Started
          </Button>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default Home
