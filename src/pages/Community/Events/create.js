import {  useDisclosure } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import { saveEventAsync } from '../../../redux/community/actions'
import Builder from '../../../components/forms';
import {Modal, OpenModal}  from '../../../components/Modal';

export const Create = () => {
    const dispatch = useDispatch()
 

    const disclousure = useDisclosure();

    const fields =[
        {
            name:'title',
            label:'titulo',
            defaultValue:'',
            required:true
        },        
        {
            name:'body',
            label:'Contenido',
            required:true,
            textarea:true
        }, 
        {
            name:'image',
            label:'Imagen',
            required:true,
            file:true,
        }      

   ];

   const saveVote=(data)=>{

        

        dispatch(saveEventAsync(data))
        disclousure.onClose();
    }



  return (
    <>
          <OpenModal text='Agregar noticia' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nueva noticia' onClick={saveVote}  />
          </Modal>

    </>
  )
}
