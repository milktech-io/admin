/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserTrashAsync, unDeleteUserAsync } from '../../../redux/user/actions'
import DataTables from '../../../components/Datatable';
import {  Confirm} from '../../../components/buttons';
import {useNavigate} from 'react-router-dom';

export const UsersTrash = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();


  const unDelete=(id)=>{
    dispatch(unDeleteUserAsync(id))
  }

  const selectable = (state)=>(state.user.trash);

  const renderButtonUser=(row)=>{
    let username = row.merge_to?.user?.username||false;

    if(username) {
      return <span style={{cursor:'pointer'}} onClick={()=>navigate('/usuarios/'+row.merge_to.user_id)}>{username}</span>
    }

    return <span>-</span>
  }

  const columns = (row)=>{
    return {
      email:row?.email,
      username: row?.username,
      Fecha_de_borrado: row?.deleted_at,
      Fusionado_a: renderButtonUser(row),
      opciones:<Confirm text="restaurar" onClick={()=>unDelete(row.id)}/>,
    }
  } 

  const dispatchable=(query)=>{
    return getUserTrashAsync({
      ...query,
      select:'id,username,email,profile_id,deleted_at'
    });
  } 


    return (
      <Stack style={{ display: 'flex', flexDirection: 'columns' }} bg={'white'} h={'100%'}>

        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de usuarios'
        />
      


      </Stack>
    )
  
}