import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter (initialValue, stock)

  return (
    <Box>
      <Flex  justifyContent={'center'} alignItems={'center'} mb={'3'}>
      <Button size={'xs'} boxShadow= {'2px 2px 4px rgba(0,0,0,0.5)'} bg={'#30341c'} color={'white'} borderRadius={'0'} onClick={decrementar}>-</Button>
        <Text fontSize={'16'} pl={'3'} pr={'3'}>{count}</Text>
      <Button size={'xs'} boxShadow= {'2px 2px 4px rgba(0,0,0,0.5)'} bg={'#30341c'} color={'white'} borderRadius={'0'} onClick={incrementar}>+</Button>
      </Flex>
      <Button size={'sm'} boxShadow= {'2px 2px 4px rgba(0,0,0,0.5)'} borderRadius={'0'} bg={'#30341c'} color={'white'} onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount