/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { productApi } from '../../api';

import {
  FormLabel,
  Select,
  FormControl,
} from '@chakra-ui/react';


export default function Product ({onChange}) {

    const [products, setProducts] = useState([]);
    const [plans, setPlans] = useState([]);
   
    const [data,setData] = useState({
      product_id:null,
      variant_id:null,
    })

   

    useEffect(()=>{
    	onChange(data);
    },[data])
    useEffect(()=>{

      productApi.get().then(response=>{
        setProducts(response.data.data);
      })

    },[]);


  const selectProduct = (e)=>{
    let id = e.target?.value || e;

    setData({
      ...data,
      product_id:id,
    })

    productApi.variants(id).then(response=>{
      setPlans(response.data.data);
    })
  }


  
    const selectPlan = (e)=>{
    setData({
      ...data,
      variant_id:e.target.value
    })
  }
  

  
    return (
     <>
        <FormControl>
          <FormLabel>Selecciona un producto</FormLabel>     
            <Select onChange={selectProduct}>
            <option disabled selected>Selecciona un producto</option>
              {products.map(product=><option key={product.id} value={product.id}>{product.name}</option>)}
            </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Selecciona un plan</FormLabel>     
            <Select onChange={selectPlan}>
              <option disabled selected>Selecciona un plan</option>
              {plans.map(plan=><option key={plan.id} value={plan.id}>{plan.name}</option>)}
            </Select>
        </FormControl>        
     </>
    )
  
}