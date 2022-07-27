import { Flex, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Navbar } from '../components';
import Footer from '../components/footer';
import { selectAccount } from '../features/account/accountSlice';
import { useAppSelector } from '../hooks/use-app-selector';
import { getCurrentBlock, getWalletBalance } from '../utils/interact';

const Profile = () => {
  const [balance, setBalance] = React.useState('');
  const [block, setBlock] = React.useState(0);
  const address = useAppSelector(selectAccount)
  const getBalance = async () => {
    const bal = await getWalletBalance();
    setBalance(bal.balance);
  }

  const getBlock = async () => {
    const blockNumber = await getCurrentBlock();
    setBlock(blockNumber);
  }

  useEffect(() => {
    getBalance();
    getBlock();
  }, [address]);
  return (
    <VStack
      h={'100vh'}
    >
      <Navbar />
      <Flex
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        flex={1}

      >
        <Text fontSize={'2xl'}>Wallet Address: {address}</Text>
        <StatGroup justifyContent={'space-between'}>
          <Stat m={12}>
            <StatLabel>Balance</StatLabel>
            <StatNumber fontSize={'4xl'}>{balance}</StatNumber>
          </Stat>

          <Stat m={12}>
            <StatLabel>Block no.</StatLabel>
            <StatNumber fontSize={'4xl'}>{block}</StatNumber>
          </Stat>
        </StatGroup>
      </Flex>
      <Footer />
    </VStack>
  )
}

export default Profile