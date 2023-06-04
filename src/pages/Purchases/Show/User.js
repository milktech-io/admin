import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export default function User({user}) {

 const navigate = useNavigate();
  return (
    <Center >
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={user?.profile?.image === 'null' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : user.profile?.image}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {user.profile?.fullName}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{user.username}
        </Text>
        <Text
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
                <p><b>Rango</b> {user.rangue?.name}</p>
                <p><b>Email</b> {user.email}</p>
                <p><b>Telefono</b> {user.profile?.mobile}</p>
                <p><b>ETH</b> {user.eth_adress || 'No asignado'}</p>
                <p><b>Rol</b> {user.roles && user.roles[0].name}</p>
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          
          <Button
            flex={1}
            fontSize={'sm'}
            bg={'rgb(252, 101, 84)'}
            color={'white'}
            onClick={()=>navigate(`/usuarios/${user.id}`)}
            boxShadow={
              '0px 1px 25px -5px rrgb(252 101 84 / 48%), 0 10px 10px -5px rgb(252 101 84 / 43%)'
            }
            _hover={{
              bg: 'rgb(252, 101, 84)',
            }}
            _focus={{
              bg: 'rgb(252, 101, 84)',
            }}>
            Ver usuario
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}