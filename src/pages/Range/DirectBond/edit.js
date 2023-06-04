/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../../components/Modal';
import Builder from '../../../components/forms';
import {rangeApi} from '../../../api';
import { editDirectBondAsync } from '../../../redux/range/actions';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';

export const Edit = ({bond=false}) => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();
  const [fields, setFields] = useState([]);
  

  useEffect(()=>{

    if(bond){

      setFields([
      {
        name:'bond',
        label:'Porcentaje del bono',
        defaultValue:bond.bond,
        required:true
      },
      ])

    }

  },[bond]);

 
 

  const editBond = (data)=>{
    rangeApi.directBondEdit(bond.id, data).then(_res=>{

      disclousure.onClose();
      toast.success('Bono editado correctamente', {"theme":"dark"})
      dispatch(editDirectBondAsync({
        ...bond,
        bond:data.bond
      }))
    })
  }

    return (
     <>
       
       <OpenModal text="Editar bono" icon="" disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Editar bono' onClick={editBond} />
         
       </Modal>
        
     </>
    )
  
}