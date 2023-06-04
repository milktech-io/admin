/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Button } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getSwapAsync} from '../../../redux/blockchain/actions';
import moment from 'moment';


export const Swap = ({openMetadata}) => {
  

  const selectable = (state)=>(state.blockchain.swap);

  const columns = (row)=>{
    return {
     total : row?.quantity,
     moneda : row?.currency,
     tipo: row?.type,
     index: row.transaction_index,
     hash : row.transaction_hash,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
     payload: row?.payload && <Button onClick={()=>openMetadata(row.payload)}>Ver payload</Button>

    }
  } 


  const dispatchable=(query)=>{
    return getSwapAsync({
      ...query,
    });
  } 

  return (
    <Stack style={{ display: 'flex', flexDirection: 'row' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Lista de swap'
      />
    </Stack>  
  )
}
