import React from 'react'
import { getNewlandAsync } from '../../redux/product/actions';
import {Edit, Show} from '../../components/buttons';
import ContractId from '../../components/blockchain/ContractId';
import DataTables from '../../components/Datatable';
import { Stack } from '@mui/system';

export const Newland = () => {

   const dispatchable=(query)=>{
    return getNewlandAsync({
      ...query,
    });
  } 


   const selectable = (state)=>(state.product.newland.stocks);

      const columns = (row)=>{
        return {
          img:  row.image ? <img width="100px" alt='' src={row.image || ''} />:'',
          name : row.name,
          price : `$ ${row.price} ${row.currency}`,
          stock: row.stock ,
          contract_id:  <ContractId row={row} variant='newland'/>  ,
          opciones:(
            <div>
              <Edit route={`/newland/${row.id}/editar`} />
              <Show route={`/newland/${row.id}`} />
      
            </div>
          )

        }
      } 

    return (
        <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         

            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de Acciones'
            />
            
        </Stack>

       

    )
}