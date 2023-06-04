import React, {useEffect, useState} from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Box,
} from '@chakra-ui/react'
import {summaryApi} from '../../api';

export default function NewUsers ({start,end}) {
  const [data,setData] = useState({});
  useEffect(()=>{
    summaryApi.newUsers(start,end).then(response=>{
      setData(response.data.data);
    })
  },[start,end]);
   return  <Stat>
   <Box  borderWidth='1px' padding="10px" borderRadius="8px">
  <StatLabel>Nuevos registros</StatLabel>
  <StatNumber>{data.referreds_complete || '0'}</StatNumber>
    <StatHelpText>{data.referreds_incomplete || '0'} Prerregistrados</StatHelpText>

  </Box>
</Stat>
}
 
