/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Button } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getPurchasesAsync} from '../../../redux/blockchain/actions';
import moment from 'moment';


export const Purchases = ({openMetadata}) => {
  

  const selectable = (state)=>(state.blockchain.purchases);

  const columns = (row)=>{
    return {
     network : row?.payload?.network,
     wallet : row?.payload?.transactionNST?.receiver,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
     payload: row?.payload && <Button onClick={()=>openMetadata(row.payload)}>Ver payload</Button>
    }
  } 


  const dispatchable=(query)=>{
    return getPurchasesAsync({
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
