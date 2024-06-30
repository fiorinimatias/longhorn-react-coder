import { Box } from '@chakra-ui/react';
import React from 'react'
import { IoBeerOutline } from "react-icons/io5";



const CartWidget = () => {
  return (
    <Box cursor={'pointer'} mr={'14'} w={'14'} fontSize={'24'}>
        <IoBeerOutline />
    </Box>
  )
}

export default CartWidget