import { Grid, GridItem,
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
} from '@chakra-ui/react'
import React from 'react'
import Rating from "../../../components/Rating";
import {useNavigate} from 'react-router-dom';

export const Information = ({product={}}) => {



    const navigate = useNavigate();
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
        <Image
          h={'120px'}
          w={'full'}
          src={
            product.banner && product.banner[0] ? product.banner[0].image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
                product.logo && product.logo[0] ? product.logo[0].image  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} align={'center'} fontFamily={'body'}>
              {product.name}
            </Heading>
            <Text color={'gray.500'}>Slug: {product.slug}</Text>
            <Text color={'gray.500'}>{product?.average && <Rating stars={product.average.stars} />}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{product.stock || 'Ilimitado'}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Stock
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{product.sold || '0'}</Text>
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
            onClick={()=>navigate(`/productos/${product.id}/editar`)}
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
        <Text fontWeight="semibold">Detalles</Text>
      </Stack>

      <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        <b>Descripcion corta:</b> {product.short_description}
      </Text>


      <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        <b>Categoria:</b> {product?.category?.name || ''}
      </Text>

    </Stack>




        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Descripcion</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {product.description}
        </Text>
      </Stack>
    </Stack>

    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Contenido</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
       <div
       style={{margin:'1rem'}}
          dangerouslySetInnerHTML={{
            __html: product.content
          }}></div>
      </Stack>
    </Stack>




      </GridItem>
      <GridItem colSpan={5} bg='tomato' />
    </Grid>
  </>
    )
}
