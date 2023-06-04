import React from 'react'
import { getVariantsAsync } from '../../../../redux/static/actions';
import {Edit, Create} from '../../../../components/buttons';
import ContractId from '../../../../components/blockchain/ContractId';
import DataTables from '../../../../components/Datatable';
import {useParams} from 'react-router-dom'
import { Stack } from '@mui/system';

export const Variants = () => {

 


  const { id} = useParams();
  const dispatchable=(query)=>{
    return getVariantsAsync({
      ...query,
      product_id:id
    });
  } 


   const selectable = (state)=>(state.staticProduct.variants);

      const columns = (row)=>{
        return {
          name : row.name,
          price : `$ ${row.price} ${row.currency}`,
          stock: row.stock ,
          fecha_inicio : row.start_date||'-',
          fecha_fin : row.end_date||'-',
          Piezas : row.pieces,
          contract_id:  <ContractId row={row} variant='static'/>,
          codigo_de_producto: row.product_code,
          opciones:(
            <div>
              <Edit route={`/variantes/${row.id}/editar`} />    
            </div>
          )

        }
      } 

    return (
        <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         


          <Create route={`/variantes/${id}/crear`}/>


            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de variantes'
            />
            
        </Stack>

       

    )
}