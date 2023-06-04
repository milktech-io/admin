/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../../components/Datatable';
import {getRangeAsync} from '../../../../redux/bond/actions';
import moment from 'moment';

export const Pending = ({user_id=null}) => {
  

  const selectable = (state)=>(state.bond.multiplier.range.pending);

  const columns = (row)=>{
    return {
     nombre: row?.name,
     bono : row?.bond,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
    }
  } 


  const dispatchable=(query)=>{

    if (user_id!= null) {
      return getRangeAsync({
        ...query,
        user_id,
        status:'Pendiente',
      });
    }

    return getRangeAsync({
      ...query,
      status:'Pendiente',
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Lista de bonos pendientes'
      />
    </Stack>  
  )
}
