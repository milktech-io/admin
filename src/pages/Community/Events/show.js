import { Grid, GridItem,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, {useState, useEffect}  from "react";
import {useParams} from 'react-router-dom';
import {eventApi} from '../../../api';

export default function Show() {

  const [event,setEvent] = useState({});
  const {id} = useParams();

  useEffect(()=>{

    eventApi.show(id).then(res=>{
      setEvent(res.data.data);
    })
  },[id])




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

        <Flex justify={'center'}>
          <img
            size={'xl'}
            src={
                event.image ||  'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt={'Author'}

          />
        </Flex>

     </Box>


    </Center>

      </GridItem>

     <GridItem colSpan={5}  >


        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{event?.title}</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
       <div
       style={{margin:'1rem'}}
          dangerouslySetInnerHTML={{
            __html: event.body
          }}></div>
      </Stack>

    </Stack>






      </GridItem>
    </Grid>
  </>
    )
}
