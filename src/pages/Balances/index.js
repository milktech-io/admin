/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../components/Datatable';
import {getBalancesAsync} from '../../redux/balance/actions';
import {useParams} from 'react-router-dom';


export const Balances = () => {
  
  const {id} = useParams();

  const selectable = (state)=>(state.balance.balances);

  const columns = (row)=>{
    return {
     'plan':row?.plan?.name,
     'precio':row?.price,
     'se_espera':row?.automatically_ends,
     'status':row?.status,
     'fecha':row?.date,
     'balance':row?.last_balance?.balance,
     'generado':row?.last_balance?.profit,
     'roi': (row?.last_balance &&  row.last_balance.profit * 100 / row.price) + ' %',
    }
  } 


  const dispatchable=(query)=>{
    return getBalancesAsync(id,{
      ...query,
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     {id && <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de balances'
      />}
      

    </Stack>
  )
}
