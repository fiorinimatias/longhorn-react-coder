import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Heading} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { TbArrowBadgeDown } from "react-icons/tb";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex className='navBar' boxShadow= {'1px 5px 14px -2px rgba(0,0,0,0.69)'} justify={'space-around'} align={'center'} height={'10vh'} width={'100%'} backgroundColor={'#30341c'} color={'#dddfbb'}>
      <Heading> 
        <Link to='/'><Image cursor={'pointer'} boxSize='100px' src='https://i.postimg.cc/RhL6DrPn/logo.png' /></Link>
      </Heading>
      <Menu> 
        <MenuButton fontFamily={'Poppins'} fontWeight={'400'} _hover={{ bg: '#6E7243', color: '#dddfbb'}} fontSize='sm' as={Button} rightIcon={<TbArrowBadgeDown/>} variant='outline' color={'#dddfbb'} borderRadius={'5'}>
          Categorias
        </MenuButton>
        <MenuList  variant='outline'borderRadius={'0'} color={'#30341c'}>
          <MenuItem ><Link to='/categorias/paleale'>IPAS</Link></MenuItem>
          <MenuItem><Link to='/categorias/rubia'>Rubias</Link></MenuItem>
          <MenuItem><Link to='/categorias/negra'>Negras</Link></MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
