import {  Stack,  SimpleGrid, Text} from '@chakra-ui/react'
import React, { useEffect, useState, useCallback } from 'react'
import {userApi} from '../../../api';
import {useParams} from 'react-router-dom';

export const Wallet = () => {

    const {id} = useParams();
    const [user,setUser] = useState(false);


    useEffect(()=>{
      userApi.show(id).then((res)=>{
        setUser(res.data.data);
      })
    },[id])

    const [saldos, setSaldos] = useState({
      aportation:0,
    })


    const getInfo=useCallback(()=>{
        user?.id && userApi.aportation(user.id).then(response=>{
          setSaldos(s=>({
            ...s,
            aportation:response.data.data
          }))
         })

        user?.id && userApi.groupVolumen(user.id).then(response=>{
          setSaldos(s=>({
            ...s,
            groupVolumen:response.data.data
          }))
         })
        
        user?.id && userApi.directVolumen(user.id).then(response=>{
          setSaldos(s=>({
            ...s,
            directVolumen:response.data.data
          }))
         })
    }, [user]);

     useEffect(()=>{
       user && getInfo();
    },[getInfo, user])

    return (
        <Stack  bg={"white"}>    

      <SimpleGrid columns={[2, null, 4]} style={{marginTop:'30px'}} spacing='30px'>
    
        <Stack p="4" boxShadow="lg" m="2" style={{textAlign:'center','position':'relative'}} borderRadius="sm">
            <Text fontWeight="semibold">Depositos</Text>
            <Text fontWeight="bold">$ {user?.metadata?.saldo || 0}</Text>   
        </Stack>

        <Stack p="4" boxShadow="lg" m="2" style={{textAlign:'center','position':'relative'}} borderRadius="sm">
            <Text fontWeight="semibold">Aportacion</Text>
            <Text fontWeight="bold">$ {saldos?.aportation || 0}</Text>   
        </Stack>



        <Stack p="4" boxShadow="lg" m="2" style={{textAlign:'center','position':'relative'}} borderRadius="sm">
            <Text fontWeight="semibold">Volumen grupal real</Text>
            <Text fontWeight="bold">$ {saldos?.groupVolumen || 0}</Text>   
        </Stack>

        <Stack p="4" boxShadow="lg" m="2" style={{textAlign:'center','position':'relative'}} borderRadius="sm">
            <Text fontWeight="semibold">Volumen directo real</Text>
            <Text fontWeight="bold">$ {saldos?.directVolumen || 0}</Text>   
        </Stack>
           
      </SimpleGrid>
   
        
        </Stack>

       

    )
}
