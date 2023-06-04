import { Box,   FormLabel} from '@chakra-ui/react'
import React from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { userApi } from '../../../api';
import {toast} from 'react-toastify';
import {Confirm} from '../../../components/buttons';

export default function Delete(){

    const { id } = useParams()
    const navigate = useNavigate();
    const deleteUser = ()=>{
       
        userApi.delete(id).then(_response=>{
            toast.success('Usuario eliminado correctamente', {theme:"dark"})
            navigate('/usuarios')  
        }).catch(e=>{
            toast.error(e.data.msg, {theme:"dark"})

        })

    }


    return (
    
            <Box p={5} shadow='md' borderWidth='1px' >
                  <FormLabel>Eliminar usuario</FormLabel>     
                <Confirm enabled={id} onClick={deleteUser} title="Eliminar este usuario" />
            </Box>     
        )

}
