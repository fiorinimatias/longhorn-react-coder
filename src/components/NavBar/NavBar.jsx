import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Heading} from '@chakra-ui/react';
import logo from '../../../public/logo.png';
import { Image } from '@chakra-ui/react';
import { TbArrowBadgeDown } from "react-icons/tb";
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <Flex className='navBar' boxShadow= {'1px 5px 14px -2px rgba(0,0,0,0.69)'} justify={'space-around'} align={'center'} height={'15vh'} width={'100%'} backgroundColor={'#30341c'} color={'#dddfbb'}>
      <Heading> 
        <Link to='/'><Image cursor={'pointer'} boxSize='130px' src={logo} /></Link>
      </Heading>
      <Menu> 
        <MenuButton as={Button} rightIcon={<TbArrowBadgeDown/>} variant='outline'color={'#dddfbb'} borderRadius={'0'}>
          Categorias
        </MenuButton>
        <MenuList variant='outline'borderRadius={'0'} color={'#30341c'}>
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
