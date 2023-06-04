import {SimpleGrid} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getPurchaseAsync } from '../../redux/purchase/actions';
import {useParams} from 'react-router-dom'
import {userApi} from '../../api';
import CardUser from './Show/User';
import CardProduct from './Show/Product';
import CardTransaction from './Show/Transaction';
import CardPurchase from './Show/Purchase';
import Detail from './Show/Detail';

export const PurchasesShow = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [user,setUser] = useState({});
  useEffect(()=>{
     id && dispatch(getPurchaseAsync(id));
  },[id, dispatch]); 

   const purchase = useSelector((state)=>(state.purchase.purchase));

  useEffect(()=>{

    if(purchase.user_id)
      userApi.show(purchase.user_id).then(response=>setUser(response.data.data))
  },[purchase])





    return (
      <>
      <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>



        <CardUser user={user} />
        <CardProduct product={purchase.product} />
         <CardPurchase purchase={purchase} />   
          </SimpleGrid>     

          <SimpleGrid  spacingX='40px' spacingY='20px'>

       <CardTransaction purchase={purchase} />

       <Detail purchase={purchase}/>
    
   </SimpleGrid> 
      {/*  
       
       
   
     
        */}
       
</>
    )
}