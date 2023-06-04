import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

export default function Purchase({purchase}) {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            {purchase?.detail?.name}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'2xl'}>$</Text>
            <Text fontSize={'4xl'} fontWeight={800}>
              {purchase?.total}
            </Text>
            <Text color={'gray.500'}>{purchase?.currency}</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Fecha</b> {purchase && new Date(purchase.created_at).toLocaleString()}
            </ListItem>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Transaccion</b> {purchase?.transaction_id}
            </ListItem>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Status</b> {purchase?.status}
            </ListItem>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Cantidad</b> {purchase?.sold}
            </ListItem>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Precio unitario</b> {purchase?.detail?.price}
            </ListItem>
          </List>

        </Box>
      </Box>
    </Center>
  );
}


  