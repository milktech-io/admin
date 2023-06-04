import React from 'react'
 import { getPlansAsync } from '../../../../redux/infinity/actions';
import {Edit, Create} from '../../../../components/buttons';
import ContractId from '../../../../components/blockchain/ContractId';
import DataTables from '../../../../components/Datatable';
import {useParams} from 'react-router-dom'
import { Stack } from '@mui/system';

export const Infinities = () => {

 


  const { id} = useParams();
  const dispatchable=(query)=>{
    return getPlansAsync({
      ...query,
      product_id:id
    });
  } 


   const selectable = (state)=>(state.multiplier.plans);

      const columns = (row)=>{
        return {
          img:  row.image ? <img width="100px" alt='' src={row.image || ''} />:'',
          name : row.name,
          price : `$ ${row.price} ${row.currency}`,
          retorno : `$ ${row.automatically_ends} ${row.currency}`,
          interes : row.interest,
          stock: row.stock ,
          contract_id:  <ContractId row={row} variant='infinity'/>  ,
          opciones:(
            <div>
              <Edit route={`/infinity/${row.id}/editar`} />
        
            </div>
          )

        }
      } 

    return (
        <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         


          <Create route='/infinity/crear' />


            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de planes infinity'
            />
            
        </Stack>

       

    )
}