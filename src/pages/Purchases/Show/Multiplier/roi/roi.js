import {
  Box,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import {packageApi} from '../../../../../api';

export default function Roi({purchase}) {   const [pack,setPackage] = useState({});

   useEffect(()=>{

    if(purchase.multiplier){

      let package_id = purchase.multiplier.id
      packageApi.balance(package_id).then(response=>{
        setPackage(response.data.data[0]);
      })
    }

   },[purchase])

   const calculateProgress=()=>{
    return pack?.balance.balance * 100 / pack?.automatically_ends;
   }


  return (
      <Box
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>


        
        <div >

            <p><b>Fin Periodo</b> {pack?.end_date}</p>
            <p><b>Status</b> {pack?.status}</p>
            <p><b>Saldo disponible $</b> {pack?.balance?.balance} {pack?.balance?.currency} <b>Cantidad esperada</b> {pack?.automatically_ends}</p>
            <p><b>ROI</b> {pack?.balance?.roi}%</p>
            <p style={{color:'red'}}> {pack?.generate_roi? '' : <b>Este paquete es regalado por lo que no genera ROI</b>}</p>
          <Progress hasStripe value={pack?.balance ? calculateProgress() : 0 } />

        </div>





      </Box>
  );
}