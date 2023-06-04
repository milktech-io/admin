/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../../components/Datatable';
import {getPackageAsync} from '../../../../redux/bond/actions';
import moment from 'moment';

export const Completed = ({user_id=null}) => {
  

  const selectable = (state)=>(state.bond.multiplier.package.completed);

  const columns = (row)=>{
    return {
     '%': row?.porcent,
     bono : row?.bond,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
    }
  } 


  const dispatchable=(query)=>{

    if (user_id!= null) {
      return getPackageAsync({
        ...query,
        user_id,
        charged:1,
      });
    }

    return getPackageAsync({
      ...query,
      charged:1,
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Lista de bonos completados'
      />
    </Stack>  
  )
}
