/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, Button } from '@chakra-ui/react'
import React, {useState} from 'react'
import DataTables from '../../../components/Datatable';
import {getTransactionsAsync} from '../../../redux/transaction/actions';
import moment from 'moment';
import ReactJson from 'react-json-view'
import {Modal} from '../../../components/Modal';
import {useParams} from 'react-router-dom';


export const Transaction = () => {
  
  const {id} = useParams();

  const disclousure = useDisclosure();

  const [json, setJson] = useState({});
  const selectable = (state)=>(state.transaction.transactions);
  
  const openMetadata= (metadata) =>{
    try{
      setJson(JSON.parse(metadata));

    } catch {
      setJson(metadata);     
    }

    disclousure.onOpen();
  }
  const columns = (row)=>{


    return {
     total : row?.quantity,
     moneda : row?.currency,
     tipo: row?.type,
     index: row.transaction_index,
     hash : row.transaction_hash,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
     metadata: row.metadata && <Button onClick={()=>openMetadata(row.metadata)}>Ver metadata</Button>
    }
  } 


  const dispatchable=(query)=>{

    if (id) {
      return getTransactionsAsync({
        user_id:id,
        ...query,
      });    
    }
    return getTransactionsAsync({
      ...query,
    });
  } 

  return (
    <>
        <DataTables  
        columns={columns}
        dispatchable={dispatchable}
        selectable={selectable}
        title='Gestion de transacciones'
    />

       
        <Modal
            large={true}
            title="Metadata"
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
         <ReactJson name={false} style={{marginBottom:'1rem'}} src={json} />

        </Modal>
    </>
  )
}
