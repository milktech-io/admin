/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../../components/Modal';
import Builder from '../../../components/forms';
import {rangeApi} from '../../../api';
import { editPrizeAsync } from '../../../redux/range/actions';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';

export const Edit = ({prize=false}) => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();
  const [fields, setFields] = useState([]);
  

  useEffect(()=>{

    if(prize){

      setFields([
      {
        name:'description',
        label:'Descripcion',
        defaultValue:prize.description,
        required:true
      },
      ])

    }

  },[prize]);

 
 

  const editBond = (data)=>{
    rangeApi.prizeEdit(prize.id, data).then(res=>{

      disclousure.onClose();
      toast.success('Premio editado correctamente', {"theme":"dark"})
      dispatch(editPrizeAsync(res.data.data))
    })
  }

    return (
     <>
       
       <OpenModal text="Editar premio" icon="" disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Editar bono' onClick={editBond} />
         
       </Modal>
        
     </>
    )
  
}