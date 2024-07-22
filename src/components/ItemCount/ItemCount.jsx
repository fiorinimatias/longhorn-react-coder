import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter (initialValue, stock)

  return (
    <Flex flexDirection={'column'}>
      <Flex  justifyContent={'center'} alignItems={'center'} mb={'3'}>
      <Button size={'sm'} bg={'#dddfbb'} color={'#30341c'}  mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}} onClick={decrementar}>-</Button>
        <Text fontSize={'20'} mt={'2'} pl={'3'} pr={'3'}>{count}</Text>
      <Button size={'sm'} bg={'#dddfbb'} color={'#30341c'}  mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}} onClick={incrementar}>+</Button>
      </Flex>
      <Button bg={'#dddfbb'} color={'#30341c'}  mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}} onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount