import {Box, Button, useColorModeValue} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import {purchaseApi} from '../../../../api';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

export default function Comission({purchase}) {   

  const navigate = useNavigate();
  const [x3,setX3]  =useState(false);
  const [comissions, setComissions] = useState([]);
   useEffect(()=>{

    if(purchase.product.slug === 'multiplicador-x3'){
      setX3(true);
    }else {
      purchaseApi.comissions(purchase.id).then(res=>{
        setComissions(res.data.data);
      })
    }

   },[purchase])
 

  const generateComissions = ()=>{
    purchaseApi.setComissions(purchase.id).then(res=>{
      toast.success("Comisiones generadas correctamente");
      setComissions(res.data.data);
    });
  } 
  return (

      <Box
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

      { (!x3 && comissions.length<1) && <Button onClick={generateComissions}>Regenerar Comisiones</Button>}
      {
        x3 ? 'No se pueden ver las comissiones de ventas de X3' :
        comissions.map(comission=>
          <div style={{margin:10}} key={comission.id}>
          <b>Bono</b> {comission.bond} NST | 
          <b> Porcentaje</b> {comission.porcent * 100}% 
          <Button style={{marginLeft:10}} onClick={()=>navigate('/usuarios/'+comission.user_id)}>Ver usuario</Button>

          </div>
        )
      }        
        
      </Box>
  );
}