import {  Stack } from '@chakra-ui/react'
import React from 'react'
import { getSettingsAsync, deleteSettingsAsync } from '../../../../redux/static/actions';
import {Delete} from '../../../../components/buttons';
import DataTables from '../../../../components/Datatable';
import {useParams} from 'react-router-dom'
import Create from './create';
import {useSelector} from 'react-redux';

export default function Settings(){

  const {id} = useParams();
  const dispatchable=(query)=>{
    return getSettingsAsync({
      ...query,
      product_id:id
    });
  } 
  
  const selectable = (state)=>(state.staticProduct.settings);

  const settings = useSelector(selectable);
  

  const deleteDispatch =(row_id)=>{
    return  deleteSettingsAsync(row_id);
  }





      const columns = (row)=>{


        return {
          titulo:row.title,
          Minimo_de_compradores:row.min_buyers,
          Maximo_de_compradores:row.max_buyers,
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

            { settings.rows ? null  : <Create product_id={id} />}
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Configuracion de la compra colectiva'
            />
            
        </Stack>

       

    )
}