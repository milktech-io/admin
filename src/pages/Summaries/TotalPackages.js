import React, {useEffect, useState} from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  Box,
} from '@chakra-ui/react'
import {summaryApi} from '../../api';
import {toast} from 'react-toastify'

export default function TotalPackages ({start,end}) {


  const [data,setData] = useState(0)


  useEffect(()=>{

    summaryApi.totalPackages(start,end).then(response=>{
      setData(response.data.data);
      toast.success('Informacion traida correctamente',{"theme":'dark',autoClose:1000})
    })

  },[start,end]);


   return  <Stat>
   <Box  borderWidth='1px' padding="10px" borderRadius="8px">
  <StatLabel>Total paquetes vendidos</StatLabel>
  <StatNumber>{data}</StatNumber>
  </Box>
</Stat>
}
 