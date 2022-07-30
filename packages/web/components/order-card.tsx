import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import TransferModal from './transfer-modal'

const OrderCard = ({ order }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const { address, name, serialId, hash } = order.attributes

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' m={4}>
      <Box p='6'>

        <Box>
          {name}
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {address}
        </Box>

        <Flex justifyContent={'space-between'} mt='2' alignItems='center'>
          <Box>
            <Box as='div' ml='2' color='gray.600' fontSize='sm'>
              {serialId}
            </Box>
            <Box as='div' ml='2' color='gray.600' fontSize='sm'>
              {hash}
            </Box>
          </Box>
          <Box>
            <Button mx={1}>
              Warranty
            </Button>
            <Button mx={1} onClick={onOpen}>
              Transfer
            </Button>
          </Box>
        </Flex>
      </Box>
      <TransferModal
        isOpen={isOpen}
        onOpen={onOpen}
        cancelRef={cancelRef}
        onClose={onClose}
       />
    </Box>
  )
}

export default OrderCard