import { Grid, GridItem,
  Heading,

  Box,
  Center,
  Image,

  Text,
  Stack,

  useColorModeValue,
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {challengeApi} from '../../../../api';
import moment from 'moment';

export const Information = ({id}) => {


    const [challenge, setChallenge] = useState({});

    useEffect(()=>{
      challengeApi.show(id).then(res=>{
        setChallenge(res.data.data)
      })
    }, [id, setChallenge]);

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
            challenge.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }
          objectFit={'cover'}
        />
 
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} align={'center'} fontFamily={'body'}>
              {challenge.title}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{challenge.evidences_count}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Participaciones
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{moment(challenge?.date || 'Y-m-d').format('YYYY-MM-D')}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Fecha limite
              </Text>
            </Stack>
          </Stack>

   
        </Box>
      </Box>



    </Center>

      </GridItem>

      <GridItem colSpan={5}  >




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
            __html: challenge.description
          }}></div>
      </Stack>
    </Stack>




      </GridItem>
    </Grid>
  </>
    )
}
