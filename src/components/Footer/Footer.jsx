import {
    Box,
    Flex,
    Heading,
    IconButton,
    Spacer,
    Text,
    } from '@chakra-ui/react' 
import React from 'react'
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
return (
    <footer>
      <Flex  position={'fixed'} bottom={'0'} boxShadow= {'0px 5px 14px 02px rgba(0,0,0,1.4)'}  cursor={'default'} w="full" px={'3'} align="center" bg={'#30341c'} color={'#dddfbb'}>
        <Heading fontFamily={'Poppins'} fontWeight={'400'} size="md">Longhorn</Heading>
        <Spacer />
        <Text fontFamily={'Poppins'} fontWeight={'400'} fontSize="xs">Copyright &copy; {new Date().getFullYear()} Longhorn</Text>
        <Spacer />
        <Box cursor={'pointer'} spacing={1}>
          <IconButton _hover={{ color: '#6E7243'}} bg={'transparent'} color={'#dddfbb'} icon={<TiSocialInstagram />}></IconButton>
          <IconButton _hover={{ color: '#6E7243'}} bg={'transparent'} color={'#dddfbb'} icon={<TiSocialFacebook />}></IconButton>
          <IconButton _hover={{ color: '#6E7243'}} bg={'transparent'} color={'#dddfbb'} icon={<FaWhatsapp />}></IconButton>
          <IconButton _hover={{ color: '#6E7243'}} bg={'transparent'} color={'#dddfbb'} icon={<MdOutlineEmail />}></IconButton>
        </Box>
      </Flex>
    </footer>    
)
}

export default Footer