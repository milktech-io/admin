/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Button } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getTransactionsAsync} from '../../../redux/blockchain/actions';
import moment from 'moment';


export const Transactions = ({openMetadata}) => {
  

  const selectable = (state)=>(state.blockchain.transactions);

  const columns = (row)=>{
    return {
     Wallet : row?.payload?.from,
     hash : row?.payload?.hash,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
     payload: row?.payload && <Button onClick={()=>openMetadata(row.payload)}>Ver payload</Button>  
    }
  } 


  const dispatchable=(query)=>{
    return getTransactionsAsync({
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
