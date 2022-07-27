import { Flex, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Navbar } from '../components';
import Footer from '../components/footer';
import { selectAccount } from '../features/account/accountSlice';
import { useAppSelector } from '../hooks/use-app-selector';
import { getWalletBalance } from '../utils/interact';

const Profile = () => {
  const [balance, setBalance] = React.useState('');
  const address = useAppSelector(selectAccount)
  const getBalance = async () => {
    const bal = await getWalletBalance();
    setBalance(bal.balance);
  }

  useEffect(() => {
    getBalance();
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
        flex ={1}

      >
        <Text>Wallet Address: {address}</Text>
        <Text>Balance: {balance}</Text>
      </Flex>
      <Footer />
    </VStack>
  )
}

export default Profile