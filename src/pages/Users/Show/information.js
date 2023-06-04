import { Grid, GridItem,
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom';
import moment from 'moment'
import {userApi} from '../../../api';

export const Information = () => {

  const [user,setUser] = useState(false);
  const {id} = useParams();


  useEffect(()=>{
    userApi.show(id).then(res=>{
      setUser(res.data.data);
    })
  },[id])
    const navigate = useNavigate();


    const kycStatus = (_user) =>{
      if(_user?.kyc) {
        if(_user?.kyc.validation_value===null){
          return 'En validacion';
        } else if (_user?.kyc.validation_value===0) {
          return 'No validado';
        } else {
          return 'Validado correctamente';
        }
      } else {
        return 'No se ha comenzado un proceso'
      }
    }
    return (
      <>

     <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(7, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={2}>
          <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
                user?.profile?.image  ? user?.profile.image  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt={'Author'}
            css={{
              'marginTop':'50px',
              border: '2px solid white',
            }}
          />
        </Flex>


 <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} align={'center'} fontFamily={'body'}>
              @{user?.username}
            </Heading>
            <Text color={'gray.500'}>{user?.email}</Text>
          </Stack>

          <Stack  >
            <span><b>Nombre: </b> {user?.profile?.name}</span>
            <span><b>Apellido: </b> {user?.profile?.lastname}</span>
            <span><b>Wallet: </b> {user?.eth_address || 'Sin asignar'}</span>
            <span><b>Registro: </b> {moment(user?.created_at || 'Y-m-d').format('YYYY-MM-D')}</span>
            <span><b>Sponsor: </b> { user?.sponsor_id ? (<Link to={`/usuarios/${user?.sponsor_id}`}> Ver sponsor </Link>) : 'Sin sponsor'} </span>
         
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            onClick={()=>navigate(`/usuarios/${user?.id}/editar`)}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Editar
          </Button>
        </Box>

     </Box>


    </Center>

      </GridItem>

     <GridItem colSpan={5}  >


        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Informacion de perfil</Text>
      </Stack>

          <Stack  >
            <span><b>Celular: </b> {user?.profile?.code_mobile} {user?.profile?.mobile} -  {user?.profile?.country}</span>
            <span><b>Profesion: </b> {user?.profile?.profession}</span>
            <span><b>Genero: </b> {user?.profile?.gender || 'Sin asignar'}</span>
            <span><b>Facebook: </b> {user?.profile?.facebook }</span>
            <span><b>Twitter: </b> {user?.profile?.twitter }</span>
            <span><b>Linked in: </b> {user?.profile?.linkedin }</span>
            <span><b>Instagram: </b> {user?.profile?.instagram }</span>
          </Stack>


    </Stack>




        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Acerca de </Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {user?.profile?.about_me}
        </Text>
      </Stack>
    </Stack>





      </GridItem>
    </Grid>
  </>
    )
}
