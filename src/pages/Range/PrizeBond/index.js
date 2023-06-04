/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getPrizesAsync} from '../../../redux/range/actions';
import {Edit} from './edit';
export const PrizeBond = () => {
  

  const selectable = (state)=>(state.range.prizes);

  const columns = (row)=>{
    return {
      Codigo: row.code,
      Description:row.description,
      opciones:(
        <div>
          <Edit prize={row} />
        </div>
      )
    }
  } 


  const dispatchable=(query)=>{
    query['active']=1
    return getPrizesAsync({
      ...query,
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de premios'
      />
      

    </Stack>
  )
}
