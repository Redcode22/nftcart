import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const property = {
  imageUrl: 'https://cdn.vox-cdn.com/thumbor/Eu5ze2W1RmZQjxX2GqhIxWgvm4g=/0x0:2000x1284/1200x0/filters:focal(0x0:2000x1284):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8834801/pizza_shoe12.jpg',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Pizza Style Shoes',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
}

const ProductCard = () => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m={4}>
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
        </Box>

        <Flex justifyContent={'space-between'} mt='2' alignItems='center'>
          <Box>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
          <Link href={'/products/1'}>
            <Button>
              <ArrowForwardIcon mr={2} />
              View
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProductCard