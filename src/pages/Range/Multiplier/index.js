/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {Edit} from '../../../components/buttons'
import {getRangesAsync} from '../../../redux/range/actions';

export const Range = () => {
  

  const selectable = (state)=>(state.range.ranges);

  const columns = (row)=>{
    return {
      nombre: row.name,
      No:row.number,
      Premio:row.direct_benefit,
      Invitados_directos:row.direct,
      Volumen_primer_nivel:row.first_level_volume,
      Volumen_grupal:row.group_volume,
      Nivel_rango:row.level_rangue,
      Volumen_personal:row.personal_volume,
      Pool:row.pool,
      Requerimientos_de_rango:row.rangue_requirements,
      opciones:(
        <div>
          <Edit route={`/rangos/${row.id}/editar`} />
        </div>
      )
    }
  } 


  const dispatchable=(query)=>{
    return getRangesAsync({
      ...query,
 //     select:'id,username,email,profile_id,rangue_id'
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
