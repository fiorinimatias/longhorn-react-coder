import React, { useContext, useState } from 'react'
import { Card, Heading, Text, Divider, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { IoBeer } from "react-icons/io5";
import { GiCellarBarrels } from "react-icons/gi";


const ItemDetail = ({ nombre, descripcion, id, img, precio, stock, categoria}) => {
  const [ quantity, setQuantity ] = useState(0)
  const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
      const item = {
        id,
        nombre,
        precio
      }
      setQuantity(quantity)
      addItem(item, quantity)
        toast.success(`Agregaste ${quantity} productos`)
    }

  return (
    <>
      <Card fontFamily={'Poppins'} w={'60%'} h={'80%'} cursor={'default'}>
          <Flex bg={'#30341c'} h={'5rem'} justify={'flex-start'} align={'center'}>
          <Text ml={2} fontSize="xs" color="#dddfbb">Categoría: {categoria}</Text>

          </Flex>
          <Flex
              wrap={'wrap'}
              align={'center'}
              justify={'space-between'}
              w={'100%'} 
              h={'100%'}
              className='cardFlex'
              >
              <Flex
                  w={'40%'}
                  h={'90%'}
                  justify={'center'}
                  align={'center'}
                  >

              <Image
              src={img} alt={nombre} boxSize='100%' objectFit='contain' w='100%' h='400px' rowSpan={2} colSpan={1} ml={2}/>
              </Flex>
              <Flex direction={'column'} justify={'space-around'} align={'start'} w={'50%'} minHeight={'400px'} justifyContent={'space-evenly'} alignItems={'center'}>
                <Heading fontFamily={'Poppins'} fontWeight={'700'} size="xl" color="#30341c" mt={'10'}> {nombre}</Heading>
                <Text fontFamily={'Poppins'} fontWeight={'400'} color="#30341c" fontSize="md" w={'95%'} textAlign={'center'}>{descripcion}</Text>
                <Text fontFamily={'Poppins'} fontWeight={'600'} color="#3F74F3F3EF7D" fontSize="xl" mb={'10'}> ${precio} </Text>
              </Flex>
              <Flex w={'100%'} h={'10%'} justify={'center'} align={'center'} pb={5}>
              {
                quantity > 0 ? 
                <Flex justify={'space-around'} align={'center'} w={'100%'} color={'#fff'}>
                    <Flex  cursor={'pointer'} bg={'#30341c'}  justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#dddfbb', color: '#30341c' }} >
                        <ChakraLink  mr={4} w={'50%'} fontSize={'1.2rem'} as={Link} to='/cart'>Ir al carrito</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'transparent'}  h={'5rem'}>
                            <GiCellarBarrels fontSize={'1.7rem'}/>
                        </Flex>
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex cursor={'pointer'} bg={'#30341c'}  justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#dddfbb', color: '#30341c' }} >
                        <ChakraLink mr={4} w={'50%'}  fontSize={'1.2rem'} as={Link} to='/'>Seguir comprando</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'transparent'}  h={'5rem'}>
                            <IoBeer fontSize={'1.7rem'} />
                        </Flex>
                    </Flex>
                </Flex>
                :
                <Flex w={'100%'} justify={'center'} align={'center'} pb={5}>
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                </Flex>
            }
              </Flex>              
          </Flex>
      </Card>
      <ToastContainer />
    </>
  )
}

export default ItemDetail