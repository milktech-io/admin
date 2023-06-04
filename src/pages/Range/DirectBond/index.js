/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getDirectBondsAsync} from '../../../redux/range/actions';
import {Edit} from './edit';
export const DirectBond = () => {
  

  const selectable = (state)=>(state.range.directBonds);

  const columns = (row)=>{
    return {
      Nivel_de_profundidad: row.level,
      Porcentaje:row.bond,
      opciones:(
        <div>
          <Edit bond={row} />
        </div>
      )
    }
  } 


  const dispatchable=(query)=>{
    return getDirectBondsAsync({
      ...query,
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de Rangos'
      />
      

    </Stack>
  )
}
