/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Badge } from '@chakra-ui/react'
import React from 'react'
import DataTables from '../../../components/Datatable';
import {getChaincropTokensPendingAsync} from '../../../redux/product/actions';
import {Show} from '../../../components/buttons';




export const Completed = ({stock_id}) => {

  const selectable = (state)=>(state.product.chaincrop.completed);

      const columns = (row)=>{
        console.log(row.rangue)
        return {
          img: <img alt='' src={row.product?.logo && row.product.logo[0]?.image} width="200px"/>,
          '': row.free? <Badge>Free</Badge>:'',
          categoria: row.product?.category?.name,
          variante: row.detail?.name,
          cantidad: row.sold || 0,
          precio: `$ ${row.price} ${row.currency}`,
          fecha: new Date(row.created_at).toLocaleString(),
          status:row.status,
          opciones:(
            <div>
              <Show route={`/ventas/${row.id}`} />        
            </div>
          )

        }
      } 


  const dispatchable=(query)=>{

    return getChaincropTokensPendingAsync(stock_id,{
      ...query,
      with:'product:id,name,variant,category_id|product.logo|product.category:id,name'
    });
  } 




  return (
    <Stack style={{ display: 'flex', flexDirection: 'column' }} bg={'white'}>
     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Compras con token asignado'
      />
    </Stack>  
  )
}
