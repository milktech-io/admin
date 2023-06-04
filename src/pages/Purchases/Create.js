/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../components/Modal';
import { useDispatch } from 'react-redux';
import {userApi, productApi } from '../../api';
import {makePurchaseFree} from '../../redux/purchase/actions';

import {
  Input,
  Button,
  FormLabel,
  Select,
  FormControl,
  useDisclosure
} from '@chakra-ui/react';


const styleInput= {
  display:'flex',
  marginBottom:'5px'

}
export const Create = () => {



    const [geolocation, setGeolocation] = useState(false);
 
    const disclousure = useDisclosure()
    const dispatch = useDispatch();
    const [search,setSearch] =useState('');
    const [users, setUsers] = useState([]);
    const [multipliers, setMultipliers] = useState([]);
    const [plans, setPlans] = useState([]);
   
    const [data,setData] = useState({
      user_id:null,
      product_id:null,
      variant_id:null,
    })

   

    useEffect(()=>{

      productApi.get({
        multiplier:1,
      }).then(response=>{
        setMultipliers(response.data.data);
      })

      navigator.geolocation.getCurrentPosition(function(position) {
        let geo = {
          'latitude':position.coords.latitude,
          'longitude':position.coords.longitude,
        }
        setGeolocation(geo);
    },function(_error){
      alert('Activa la ubicacion')
    });

    },[]);


  const selectMultiplier = (e)=>{
    let id = e.target?.value || e;

    setData({
      ...data,
      product_id:id,
    })

    productApi.variants(id).then(response=>{
      setPlans(response.data.data);
    })
  }
  const selectUser = (e)=>{
    setData({
      ...data,
      user_id:e.target.value,
      user: JSON.stringify(users.filter(u=>u.id===e.target.value)[0])
    })
  }
  
    const selectPlan = (e)=>{
    setData({
      ...data,
      variant_id:e.target.value
    })
  }
  

  const searchUsers = (_data)=>{
    userApi.get({
      s:search
    }).then(response=>{
      setUsers(response.data.data);
    })
  }

  const makePurchase = ()=>{

    console.log('enviando',data);
    dispatch(makePurchaseFree({
      ...data,
      ...geolocation
    }));

    disclousure.onClose();


  }
  
    return (
     <>
       
       {geolocation ?(<OpenModal text='Registrar paquete gratis' disclousure={disclousure}/> ):null}

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <FormControl>
          <FormLabel>Busca un usuario</FormLabel>     
            <div style={styleInput} >
              <Input style={{marginRight:'5px'}} value={search} onChange={(e)=>setSearch(e.target.value)} />
              <Button onClick={searchUsers}>Buscar</Button>
            </div>
            <Select onChange={selectUser}>
              <option disabled selected>Selecciona un usuario</option>
              {users.map(user=><option value={user.id}>{user.username} | {user.email}</option>)}
            </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Selecciona un multiplicador</FormLabel>     
            <Select onChange={selectMultiplier}>
            <option disabled selected>Selecciona un multiplicador</option>
              {multipliers.map(multiplier=><option key={multiplier.id} value={multiplier.id}>{multiplier.name}</option>)}
            </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Selecciona un plan</FormLabel>     
            <Select onChange={selectPlan}>
              <option disabled selected>Selecciona un plan</option>
              {plans.map(plan=><option key={plan.id} value={plan.id}>{plan.name}</option>)}
            </Select>
        </FormControl>

        <Button style={{marginBottom:'10px',color:'white',marginTop:'10px',backgroundColor: 'rgb(252, 101, 84)'}}onClick={makePurchase}> Registrar compra gratuita</Button>

       </Modal>
        
     </>
    )
  
}