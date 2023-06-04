import {  Stack , useDisclosure } from '@chakra-ui/react'
import React, {useState, useEffect } from 'react'
import { getDocumentsAsync,saveDocumentAsync,deleteDocumentAsync } from '../../redux/document/actions';
import { getRangesAsync } from '../../redux/range/actions';
import DataTables from '../../components/Datatable';
import {Open,Delete} from '../../components/buttons';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, OpenModal}  from '../../components/Modal';
import Builder from '../../components/forms';


  export const Documents = () => {

    const disclousure = useDisclosure();


    const ranges  = useSelector(state=>state.range.ranges);


    const [fields, setFields] = useState([]);


    useEffect(()=>{
     
     if(ranges.length){

      setFields([
      {
        name:'name',
        required:true,
        defaultValue:'',
        label:'Nombre'
      },
      {
        name:'file',
        required:true,
        label:'Archivo',
        file:true,
      },
      {
        name:'rangue_id',
        required:true,
        label:'Apartir del rango:',
        defaultValue:ranges[0]?.id || 0,
        options: ranges.map(range=>(<option value={range.id}>{range.name}</option>))
      },

        ]);
    }
    },[ranges]);


    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getRangesAsync());
    },[dispatch])


  const dispatchable=(query)=>{
    return getDocumentsAsync({
      ...query,
 //    select:'id,stars,comment,title'
    });
  } 


  const deleteDispatch =(row_id)=>{
    return  deleteDocumentAsync(row_id);
  }

   const selectable = (state)=>(state.document.documents);

      const columns = (row)=>{
        return {
          name: row.name+row.extension,
          rango:row.rangue ? row.rangue.name : 'Todos',
          opciones:<div>
            <Open route={row.file} />
             <Delete id={row.id} dispatchable={deleteDispatch} />
          </div>
     
        }
      } 




    const saveDocument =(data)=>{
      dispatch(saveDocumentAsync(data));
    }
    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>  

          <OpenModal text='Agregar documento' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nueva version' onClick={saveDocument}  />
          </Modal>


            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de versiones'
            />
        </Stack>

       

    )
}
 