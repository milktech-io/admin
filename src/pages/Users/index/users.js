/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsersAsyc,  banUserAsync, unbanUserAsync, unlockUserAsync } from '../../../redux/user/actions'
import DataTables from '../../../components/Datatable';
import {  Edit, Show} from '../../../components/buttons';
import { Create} from '../Create';

export const Users = () => {
  
  const POLYGON = process.env.REACT_APP_POLYGON_SCAN;

  const dispatch = useDispatch()

  const ban=(id)=>{
    dispatch(banUserAsync(id))
  }

  const unban=(id)=>{
    dispatch(unbanUserAsync(id))
  }


  const unlock=(id)=>{
    dispatch(unlockUserAsync(id))
  }


  const openTransactions = (row)=>{
    window.open(`${POLYGON}address/${row.eth_address}`,'_blank');
  }

  const selectable = (state)=>(state.user.users);

  const columns = (row)=>{
    const  _role = row.roles[0]===undefined?'Sin role': row.roles[0].name;
    return {
      nombre: row?.profile?.fullName,
      email:row?.email,
      username: row?.username,
      role: _role,
      bloqueado:
        row.block_until!=null ? 
        <>
          {row.block_until}
          <i onClick={()=>unlock(row.id)} style={{color:'red',cursor:'pointer'}} className="fas fa-lock"></i>
        </> : 'No',
      baneado: row.is_active ? (<i onClick={()=>ban(row.id)}  style={{color:'green',cursor:'pointer'}} className="fas fa-unlock"></i>) : <i onClick={()=>unban(row.id)} style={{color:'red',cursor:'pointer'}} className="fas fa-lock"></i>,
      opciones:(
        <div>
            <div>

              {row.profile ?
               <Edit route={`/usuarios/${row.id}/editar`} />
                : 'Por registrar'
              }

              <Show route={`/usuarios/${row.id}`} />
            
             </div>
        </div>),
        '_': row.eth_address ? <Button onClick={()=>openTransactions(row)} >Transacciones</Button>: '' 
    }
  } 

  const dispatchable=(query)=>{
    return getUsersAsyc({
      ...query,
      select:'id,username,email,profile_id,is_active,block_until,eth_address'
    });
  } 


    return (
      <Stack style={{ display: 'flex', flexDirection: 'columns' }} bg={'white'} h={'100%'}>


      <Create />
        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de usuarios'
        />
      


      </Stack>
    )
  
}