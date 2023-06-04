/* eslint-disable react-hooks/exhaustive-deps */
import {  SimpleGrid,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Builder from '../../../../components/forms';
import { saveVariantAsync } from '../../../../redux/static/actions';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';

export const VariantsCreate = () => {

  const {id} = useParams(); 
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
          name:'product_code',
          label:'Codigo del producto',
          required:true,
          defaultValue:'',
        },        
        {
          name:'start_date',
          label:'Fecha de inicio',
          required:false,
          defaultValue:'',
          date:true,
        },        
        {
          name:'pieces',
          label:'Piezas',
          required:true,
          defaultValue:'',
        },
        {
          name:'end_date',
          label:'Fecha de fin',
          required:false,
          defaultValue:'',
          date:true,
        },        
      ]);

  },[])

 


  const savePlan = (data)=>{
    data['product_id']=id;
    dispatch(saveVariantAsync(data));
  }

    return (
     <>
        <Box p={5} shadow='md' borderWidth='1px' >
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>



        <Builder fields={fields}   message='Crear variante' onClick={savePlan} />
         
         </SimpleGrid>
         </Box>
        
     </>
    )
  
}


