import React, {useEffect, useState} from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  Box,
} from '@chakra-ui/react'
import {summaryApi} from '../../api';

export default function Sells ({start,end}) {

  const [data,setData] = useState(0);

  useEffect(()=>{
    summaryApi.sells(start,end).then(response=>{
      setData(response.data.data);
    })

  },[start,end]);


   return  <Stat>
   <Box  borderWidth='1px' padding="10px" borderRadius="8px">
  <StatLabel>Cantidad venida</StatLabel>
  <StatNumber>NST {data || '0'}</StatNumber>
  </Box>
</Stat>
}
  