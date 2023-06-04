/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getChaincropFinancialAsync, saveChaincropFinancialAsync} from '../../../redux/product/actions';
import { useMetaMask } from "metamask-react";
import {Modal, OpenModal}  from '../../../components/Modal';
import Builder from '../../../components/forms';
import {useDispatch} from 'react-redux';



export const Financial = ({stock_id}) => {
    const disclousure = useDisclosure();
    const dispatch = useDispatch();
  const { account } = useMetaMask();
  const wallet_connected = account ? account.toString().toLowerCase() : '';
  const master_wallet = process.env.REACT_APP_MASTER_WALLET.toString().toLowerCase();

  const selectable = (state)=>(state.product.chaincrop.financial);

      const columns = (row)=>{
        return {
          Inicio_del_periodo: row.start_period,
          Fin_del_periodo: row.end_period,
          cantidad: row.profit || 0,
          Fecha_de_registro: row.created_at,
      

        }
      } 


  const dispatchable=(query)=>{

    return getChaincropFinancialAsync(stock_id,{
      ...query
    });
  } 


  const saveProfit= (data)=>{
    disclousure.onClose();
    return dispatch(saveChaincropFinancialAsync(stock_id, data));

  }
  const fields = [
    {
      'name':'start_period',
      'label':'Inicio del periodo',
      'date':true,
      'required':true  
    },
    {
      'name':'end_period',
      'label':'Fin del periodo',
      'date':true,
      'required':true  
    },
    {
      'name':'profit',
      'label':'ganancias a repartir',
      'required':true  
    },
  ]

  return (
    <Stack style={{ display: 'flex', flexDirection: 'column' }} bg={'white'}>

      {wallet_connected===master_wallet ?  <OpenModal text="Registrar ganancias"  disclousure={disclousure} /> : null}

      <Modal
          isOpen={disclousure.isOpen}
          onClose={disclousure.onClose}

      >
        <Builder fields={fields} onClick={saveProfit} />
            
      </Modal>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Registro de ganancias'
      />
    </Stack>  
  )
}
