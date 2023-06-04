import {  Stack  } from '@chakra-ui/react'
import React from 'react'
import { getDocumentsAsync,saveDocumentAsync,deleteDocumentAsync } from '../../../../redux/product/actions';
import DataTables from '../../../../components/Datatable';
import {Open,Delete} from '../../../../components/buttons';
import InputFile  from '../../../../components/forms/InputFile';
import {useDispatch} from 'react-redux';

export const Documents = ({product_id}) => {


  const dispatch = useDispatch();

  const dispatchable=(query)=>{
    return getDocumentsAsync(product_id,{
      ...query,
 //    select:'id,stars,comment,title'
    });
  } 


  const deleteDispatch =(row_id)=>{
    return  deleteDocumentAsync(row_id);
  }

   const selectable = (state)=>(state.product.documents);

      const columns = (row)=>{
        return {
          name: row.name+row.extension,
          opciones:<div>
             <Open route={row.file} />
             <Delete id={row.id} dispatchable={deleteDispatch} />
          </div>
     
        }
      } 


      const handleSubmit =(e)=>{
        let data = {
          file:e.target.files[0],
          product_id:product_id,
          name:e.target.files[0].name
        }

        dispatch(saveDocumentAsync(data));
      }

    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>  
          <div style={{margin:'3rem 0rem'}}>
              <InputFile 
             placeholder="Selecciona un archivo"
             accept={['*']}
             onChange={handleSubmit}
            />
          </div>
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de versiones'
            />
        </Stack>

       

    )
}
 