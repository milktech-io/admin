import React, {useEffect} from 'react';
import {
  Stat as StatComponent,
  StatLabel,
  StatNumber,
  Box
} from '@chakra-ui/react'

export default function Stat ({reload, setTotal=false, api=false, data, label, name=false}) {

  useEffect(()=>{
   api && api().then(response=>{

      let total = response.data.data.total;

      total = total===undefined ? response.data.data : total;

      setTotal((prevState)=>({
        ...prevState,
        [name]:total
      }))
    })

  },[api, reload, name, setTotal]);


   return  <StatComponent>
   <Box  borderWidth='1px' padding="10px" borderRadius="8px">
  <StatLabel>{label}</StatLabel>
  <StatNumber>NST {data || '0'}</StatNumber>
  </Box>
</StatComponent>
}
  