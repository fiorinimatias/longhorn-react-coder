import React from 'react'
import { ButtonGroup, Button, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, img, precio}) => {
  
  return (
<Card cursor={'default'} boxShadow= {'5px 5px 6px rgba(0,0,0,0.3)'} m={9} borderRadius={'none'}>
  <CardBody justify={'center'} align={'center'} w={'250px'} h={'90px'}>
    <Image
      src={img}
      alt={nombre}
      w={'270px'}
      h={'180px'}
      objectFit={'cover'}
    />
    <Stack mt='2' spacing='2'>
      <Heading fontFamily={'Poppins'} fontWeight={'700'} color='#30341c' size='md'>{nombre}</Heading>
      <Text fontFamily={'Poppins'} fontWeight={'400'} color='#30341c' fontSize='xl'>${precio}</Text>
    </Stack>

  </CardBody>
  <Divider color='#dddfbb' />
  <CardFooter justify={'center'} align={'center'}>
      <ButtonGroup spacing='2'>
        <Button fontFamily={'Poppins'} fontWeight={'400'} bg={'#dddfbb'} color={'#30341c'} mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}}>
        <Link to={`/producto/${id}`}>Ver detalle</Link>
      </Button>
      </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item