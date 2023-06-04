import { Grid, GridItem,
  Text,
  Stack,
  Progress
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {rangeApi} from '../../../api';
import {useParams} from 'react-router-dom';

export const RangueAdvance = () => {

    const {id} = useParams();

    const [advance, setAdvance] = useState({})

    useEffect(()=>{

     id && rangeApi.showAdvance(id).then((response)=>{
        setAdvance(response.data.data);
     })

    },[id])

    return (

<>
    <Grid
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={1}>

        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">Rango Actual</Text>
        </Stack>
            <Stack >
              <span><b>Rango: </b> {advance?.rangue?.name}</span>
              <span><b>Numero: </b> {advance?.rangue?.number>=0 ? advance?.rangue?.number :'Sin numero'}</span>

            </Stack>
      </Stack>
      </GridItem>


      <GridItem rowSpan={1} colSpan={1}>

        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Rango Proximo rango</Text>
      </Stack>
          <Stack >
            <span><b>Rango: </b> {advance?.next_rangue?.name}</span>
            <span><b>Numero: </b> {advance?.next_rangue?.number || 'Sin numero'}</span>
          </Stack>
    </Stack>
    </GridItem>

    </Grid>

   <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Avance</Text>
      </Stack>
          <Stack >
            <Progress hasStripe value={advance.advance || 0 } />
            <span><b>invitados directos: </b> {advance?.direct} / {advance?.next_rangue?.direct}</span>
            <span><b>Volumen invitados directos: </b> {advance?.first_level_volume} / {advance?.next_rangue?.first_level_volume}</span>
            <span><b>Volumen de la red: </b> {advance?.group_volume} / {advance?.next_rangue?.group_volume}</span>
            <span><b>Volumen personal: </b> {advance?.personal_volume} / {advance?.next_rangue?.personal_volume}</span>
            <span><b>Rango invitados directos: </b> {advance?.rangue_requirements} / {advance?.next_rangue?.rangue_requirements}</span>
          </Stack>
    </Stack>

    </>
    )
}
