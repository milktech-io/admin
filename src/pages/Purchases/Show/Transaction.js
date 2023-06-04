import {
  Box,
  Center,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

export default function Transaction({purchase}) {

  const POLYGON = process.env.REACT_APP_POLYGON_SCAN;

  return (
    <Center py={6}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
       

        <Box px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Transaccion Hash</b> {purchase && purchase?.transaction?.transaction_hash}
              <br/><small> <a href={`${POLYGON}tx/${purchase && purchase?.transaction?.transaction_hash}`} target="_blank" rel="noreferrer">Ver detalles</a></small>
            </ListItem> 
            <ListItem>
              <ListIcon as={MinusIcon} color="green.400" />
              <b>Transaccion index</b> {purchase && purchase?.transaction?.transaction_index}
            </ListItem>
          </List>

        </Box>
      </Box>
    </Center>
  );
}


  