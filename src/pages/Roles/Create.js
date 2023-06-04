/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, {useState } from 'react'
import { Modal, OpenModal} from '../../components/Modal';
import Builder from '../../components/forms';
import { saveRoleAsync } from '../../redux/role/actions';
import { useDispatch } from 'react-redux';

export const Create = () => {

 
    const disclousure = useDisclosure()
    const dispatch = useDispatch();
    const [fields]= useState([
      {
        name:'name',
        label:'Nombre',
        defaultValue:'',
        required:true
      }
    ]);


  
 


  const saveRole = (data)=>{
    dispatch(saveRoleAsync(data));
  }

    return (
     <>
       
       <OpenModal disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Crear rol' onClick={saveRole} />
         
       </Modal>
        
     </>
    )
  
}