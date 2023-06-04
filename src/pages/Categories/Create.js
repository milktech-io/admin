import {  useDisclosure } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import { saveCategorieAsync } from '../../redux/category/actions'
import Builder from '../../components/forms';
import {Modal, OpenModal}  from '../../components/Modal';

export const Create = () => {
    const dispatch = useDispatch()
 

    const disclousure = useDisclosure();

    const fields =[
        {
            name:'name',
            label:'Nombre',
            defaultValue:'',
            required:true
        },
        {
            name:'slug',
            label:'Slug (Nombre corto)',
            defaultValue:'',
            required:true
        },        
        {
            name:'active',
            label:'Mostrar',
            defaultValue:false,
            boolean:true,
            required:true
        },  
        {
            name:'image',
            label:'Imagen',
            file:true,
            required:true,
        },   
   ];

   const saveCategory=(data)=>{

        dispatch(saveCategorieAsync({
            ...data,
            active:data.active==='false'?0:1,
        }))
        disclousure.onClose();
    }



  return (
    <>
          <OpenModal text='Agregar categoria' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nueva version' onClick={saveCategory}  />
          </Modal>

    </>
  )
}
