import { Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import DataTables from '../../../../components/Datatable';
import  {Modal, OpenModal}  from '../../../../components/Modal';
import Builder from '../../../../components/forms';
import {useDispatch} from 'react-redux';
import {getVersionsAsync, saveVersionAsync,deleteVersionAsync} from '../../../../redux/product/actions';
import {Delete} from '../../../../components/buttons';



export const Versions = ({product_id}) => {


  const dispatch = useDispatch();

  const dispatchable=(query)=>{
    return getVersionsAsync(product_id,{
      ...query,
    });
  } 

  const [fields] = useState([
  {
    name:'news',
    label:'caracteristicas (una por linea)',
    defaultValue:'',
    editor:true,
    required:true,

  },
  {
    name:'version',
    label:'No de version',
    defaultValue:'',
    required:true
  }
  ]);

    const disclousure = useDisclosure();

  const deleteDispatch =(row_id)=>{
    return  deleteVersionAsync(row_id);
  }


   const selectable = (state)=>(state.product.versions);

      const columns = (row)=>{
        return {
          news: <ul>{ row.news.split('|').map(element=>(<li key={element.replaceAll(' ','-')}>{element}</li>))}</ul>,
          version: row.version,
          options: <div>
            

          <Delete id={row.id} dispatchable={deleteDispatch}/>
          </div>
     
        }
      } 



      const saveVersion =(data)=>{
        data.news = data.news.replaceAll('<p>','').split('</p>').filter(line=>line.length).join('|');
        data.product_id=product_id
        dispatch(saveVersionAsync(data))  
      }


    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>     

          <OpenModal text='Agregar nueva version' disclousure={disclousure} />

            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de versiones'
            />



      <Modal
        isOpen={disclousure.isOpen}
        onClose={disclousure.onClose}
      >
        <Builder fields={fields}  message='Guardar nueva version' onClick={saveVersion}  />
      </Modal>

        
        </Stack>

       

    )
}
