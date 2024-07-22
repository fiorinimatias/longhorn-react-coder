import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormErrorMessage,
    Flex,
    Input,
    Heading,
    Button,
    Box,
  } from '@chakra-ui/react'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: '',
    })
    const [ error, setError ] = useState({})
    const navigate = useNavigate()
    const { cart, getTotalPrice, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name  = 'Tenés que agregar un nombre'
        }else if(user.name.length < 3 || user.name.length > 25) {
            errors.name = "El nombre debe tener al menos 3 caracteres y un máximo de 25"
        }
        if(!user.email){
            errors.email = 'Tenés que ingresar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)){
            errors.email = 'Tenés que ingresar un email válido'
        }
        if(!user.repeatedEmail) {
            errors.repeatedEmail  = 'Tenés que volver a ingresar el email'
        }else if(user.email !== user.repeatedEmail) {
            errors.repeatedEmail = "Los emails no coinciden"
        }
        if(!user.phone){
            errors.phone = 'Tenés que agregar un teléfono'
        }else if(user.phone.length < 8){
            errors.phone = 'Tenés que ingresar un teléfono válido'
        }
        setError(errors)
        console.log(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }
        if(cart.length === 0) {
            console.log('el carrito está vacío')
            return
        }
        const ordersCollection = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotalPrice(),
                fechaDeCompra: Timestamp.now()
            }

            for(const item of cart) {
                const productRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(productRef)
                const currentStock = productDoc.data().stock

                await updateDoc(productRef, {
                    stock: currentStock - item.quantity
                })
            }

            const orderRef = await addDoc(ordersCollection, order)
            clearCart()
            Swal.fire({
                title: "Compra Exitosa!",
                text: `el numero de orden de tu compra es: ${orderRef.id}`,
                icon: "success"
              });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

return (
    <Flex fontFamily={'Poppins'} fontWeight={'400'} direction={'column'} justify={'center'} align={'center'} w={'100%'}>
        <Box w={'50%'} textAlign={'center'}>
            <Heading fontFamily={'Poppins'} fontWeight={'600'} my={5} color={'#30341c'}>Datos de facturación</Heading>
            <FormControl isInvalid={Object.keys(error).length > 0}>
                <Input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser} />
                <FormErrorMessage mb={2}>{error.name}</FormErrorMessage>
                <Input 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.email}</FormErrorMessage>
                <Input 
                    type='email'
                    name='repeatedEmail' 
                    placeholder='Repetir email'
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.repeatedEmail}</FormErrorMessage>
                <Input 
                    type='text' 
                    name='phone' 
                    placeholder='Teléfono' 
                    sx={{ '::placeholder': { color: '#3F747D',},}}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.phone}</FormErrorMessage>
                <Flex justify={'center'} align={'center'}>
                    <Button bg={'#dddfbb'} color={'#30341c'} onClick={getOrder}  mt={2} _hover={{ backgroundColor: '#30341c', color: '#dddfbb'}}>Finalizar compra
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    </Flex>
)
}

export default Checkout