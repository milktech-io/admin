import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import Rating from "../../../components/Rating";


export default function Product({product}) {
   const navigate = useNavigate();
  return (
    <Center py={6}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={product?.banner && product.banner[0].image}
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
          src={product?.banner && product.logo[0].image}

            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {product?.name}
            </Heading>
            <Text color={'gray.500'}>{product?.category.name}</Text>
             <Text color={'gray.500'}>{product?.average && <Rating stars={product.average.stars} />}</Text>

          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{product?.stock || 'Ilimitado'}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Stock
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{product?.sold || '0'}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Vendidos
              </Text>
            </Stack>
          </Stack>


          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            onClick={()=>navigate(`/productos/${product?.id}`)}

            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Ver producto
          </Button>
        </Box>
      </Box>
    </Center>
  );
}