/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Modal, OpenModal} from '../../../../components/Modal';
import Builder from '../../../../components/forms';
import { saveDiscountAsync } from '../../../../redux/static/actions';
import { useDispatch  } from 'react-redux';

const Create = ({product_id}) => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();

  const fields = [
    {
      name:'title',
      label:'Titulo',
      defaultValue:'Nivel 1',
      required:true
    },        
    {
      name:'min_pieces',
      label:'Minimo de piezas',
      defaultValue:0,
      required:true
    },
    {
      name:'max_pieces',
      label:'Maximo de piezas',
      defaultValue:'0',
      required:true
    },
    {
      name:'discount',
      label:'Descuento',
      defaultValue:'0',
      required:true
    },
  ]

  const saveDiscounts = (data)=>{
    data['product_id']= product_id
    dispatch(saveDiscountAsync(data));
  }

    return (
     <>
       
       <OpenModal disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Crear configuracion' onClick={saveDiscounts} />
         
       </Modal>
        
     </>
    )
  
}



export default Create;