import { Badge, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoBeerOutline } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {

  const { getQuantity } = useContext(Context)

  return (
    <Flex mr={'14'} w={'14'} fontSize={'24'}>
        <Link to='/cart'>
          <IoBeerOutline className='cartIcon' />
        </Link>
          <Flex>
            <Badge fontFamily={'Poppins'} fontWeight={'400'} cursor={'default'} background={'transparent'} color={'#dddfbb'} fontSize={'md'}>{getQuantity()}</Badge>
          </Flex>
    </Flex>
  )
}

export default CartWidget