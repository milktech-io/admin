/* eslint-disable react-hooks/exhaustive-deps */
import {  SimpleGrid,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Builder from '../../../../components/forms';
import { savePlanAsync } from '../../../../redux/infinity/actions';
import { useDispatch } from 'react-redux';

export const InfinityCreate = () => {

 
  const dispatch = useDispatch();
  const [fields,setFields]= useState([]);
  

  useEffect(()=>{
    setFields([
        {
          name:'name',
          label:'Nombre',
          required:true,
          defaultValue:'',
        },
        {
          name:'image',
          label:'Imagen',
          required:true,
          file:true,
        },   
        {
          name:'description',
          label:'Descripcion',
          required:true,
          defaultValue:'',
        },     
        {
          name:'content',
          label:'Contenido',
          required:true,
          editor:true,
          defaultValue:'',
        },
        {
          name:'price',
          label:'Precio',
          required:true,
          defaultValue:'',
        },
        {
          name:'currency',
          label:'MONEDA',
          required:true,
          defaultValue:'',
        },
        {
          name:'stock',
          label:'Stock',
          required:true,
          defaultValue:'',
        },
        {
          name:'interest',
          label:'Interes compuesto',
          required:true,
          defaultValue:'',
        },
        {
          name:'automatically_ends',
          label:'Retorno final',
          required:true,
          defaultValue:'',
        }
      ]);

  },[])

 


  const savePlan = (data)=>{
    dispatch(savePlanAsync(data));
  }

    return (
     <>
        <Box p={5} shadow='md' borderWidth='1px' >
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>



        <Builder fields={fields}   message='Crear usuario' onClick={savePlan} />
         
         </SimpleGrid>
         </Box>
        
     </>
    )
  
}


