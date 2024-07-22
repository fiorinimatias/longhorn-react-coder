import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex,
    Heading,
    Text,
    Link as ChakraLink
    } from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context)

    if(cart.length === 0) {
        return (        

            <Flex direction={'column'} justify={'center'} align={'center'} mt={'10'}>
            <Text>Todavia no agregaste productos al carrito</Text>
            <ChakraLink as ={Link} to='/' color={'#30341c'} textDecoration={'underline'}>Ver productos</ChakraLink>
            </Flex>
        )
    } else {

    return (
        <TableContainer cursor={'default'}>
            <Flex mt={'10'} align={'center'}>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th fontSize={'md'} color={'#30341c'}>Producto</Th>
                    <Th fontSize={'md'} color={'#30341c'}>Cantidad</Th>
                    <Th fontSize={'md'} color={'#30341c'}>Precio</Th>
                    <Th fontSize={'md'} color={'#30341c'}>Subtotal</Th>
                    <Th fontSize={'md'} color={'#30341c'}></Th>
                </Tr>
                </Thead>
                <Tbody color={'#30341c'}>
                    {
                    cart.map((prod) => (

                    <Tr key={prod.id}>
                        <Td>{prod.nombre}</Td>
                        <Td>{prod.quantity}</Td>
                        <Td>${prod.precio}</Td>
                        <Td>${prod.precio * prod.quantity}</Td>
                        <Td>
                            {
                                <Button  size={'sm'} boxShadow= {'3px 3px 6px rgba(0,0,0,0.3)'} borderRadius={'5'} bg={'#30341c'} onClick={() => removeItem(prod.id)}  background={'transparent'} color={'#30341c'}><FaTrashAlt /></Button>
                            }
                            </Td>
                    </Tr>
                ))
                }
                </Tbody >
            </Table>
            </Flex>
            <Flex color={'#30341c'} justify={'center'} align={'center'} justifyContent={'space-around'}mt={'10'}>
                <Heading fontFamily={'Poppins'} fontWeight={'500'} fontSize={'xl'}>Total: ${getTotalPrice()}</Heading>
                <Button fontFamily={'Poppins'} fontWeight={'400'} bg={'#dddfbb'} color={'#30341c'} mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}} onClick={() => clearCart()}>Vaciar el carrito< FaTrashAlt /></Button>
                <Button fontFamily={'Poppins'} fontWeight={'400'} bg={'#dddfbb'} color={'#30341c'} mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}}><Link link to={'/checkout'}>Finalizar Compra</Link></Button>
            </Flex>
    </TableContainer>
)
}
}

export default Cart