import {  Stack } from '@chakra-ui/react'
import React from 'react'
import { getDiscountsAsync, deleteDiscountAsync } from '../../../../redux/static/actions';
import {Delete} from '../../../../components/buttons';
import DataTables from '../../../../components/Datatable';
import {useParams} from 'react-router-dom'
import Create from './create';

export default function Discounts(){

  const {id} = useParams();
  const dispatchable=(query)=>{
    return getDiscountsAsync({
      ...query,
      product_id:id
    });
  } 
  
  const selectable = (state)=>(state.staticProduct.discounts);
  

  const deleteDispatch =(row_id)=>{
    return  deleteDiscountAsync(row_id);
  }





      const columns = (row)=>{


        return {
          titulo:row.title,
          Minimo__de_piezas:row.min_pieces,
          Descuento:row.discount,
          Maximo_de_piezas:row.max_pieces,
          Rango_minimo:row.min_rangue||'Sin rango',
          opciones:(
            <div>
              <Delete id={row.id} dispatchable={deleteDispatch} />
        
            </div>
          )

        }
      } 


    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         

            {<Create product_id={id} />}
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Descuentos de la compra colectiva'
            />
            
        </Stack>

       

    )
}