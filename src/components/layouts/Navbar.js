import React from 'react';
import {useDispatch} from 'react-redux';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Alert, AlertIcon
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi'
import Token from '../../config/token';
import { logout } from '../../redux/auth/actions';
import {useNavigate} from 'react-router-dom';
import { useMetaMask } from "metamask-react";

function Metamask () {

  const { status, connect} = useMetaMask();
    
    if (status === "initializing") return <Alert status='info'><AlertIcon />Sincronizando con metamask</Alert>

    if (status === "unavailable") return <Alert status='error'><AlertIcon />Por favor instala la extension de metamask</Alert>

    if (status === "notConnected") return <Button onClick={connect}>Conectar a metamask</Button>

    if (status === "connecting") return <Alert status='info'><AlertIcon /> Conectando...</Alert>

    if (status === "connected") return <Alert status='success'><AlertIcon /> Conectado con metamask</Alert>

    return null;
}
  

function getGreetings(){

  const fecha = new Date(); 
  const hora = fecha.getHours();
  let texto = '';
 
  if(hora >= 0 && hora < 12){
    texto = "Buenos Días";
  }
 
  if(hora >= 12 && hora < 19){
    texto = "Buenas Tardes";
  }
 
  if(hora >= 19 && hora < 24){
    texto = "Buenas Noches";
  }

  return texto
 
}

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = Token.check().sub;


  const handleLogout=()=>{
    dispatch(logout());
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <HStack spacing={8} alignItems={'center'}>
            <Box onClick={()=>navigate(-1)} ><i  className="fas fa-chevron-left"></i></Box>
            <Box>{getGreetings()} {user.profile.fullName}</Box>
            
          </HStack>
          <Flex alignItems={'center'}>
           <Metamask />

            <Button
              variant={'solid'}
              size={'sm'}
              mr={4}
              onClick={handleLogout}
              style={{'backgroundColor':'#fc6554','color':'white'}}

              leftIcon={<BiLogOut />}>
              Salir
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={user?.profile?.image === 'null' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : user.profile.image}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>@{user.username}</MenuItem>
                <MenuDivider />
                <MenuItem
                    onClick={() => navigate(`/usuarios/perfil`)}
                >Editar Perfil</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        
      </Box>

    </>
  );
}