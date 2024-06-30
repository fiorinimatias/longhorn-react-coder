import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import notfound from '../../../public/error404.jpg'

const PageNotFound = () => {
  return (
  <Flex  backgroundColor={'#ececf0'} justifyContent={'center'}>
    <Image
      src={notfound}
      h={'85vh'}
    />
  </Flex>

  )
}

export default PageNotFound