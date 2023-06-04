import {  useDisclosure } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import { saveChallengeAsync } from '../../../redux/community/actions'
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
            name:'location',
            label:'Localizacion',
            required:true,
        },
        {
            name:'description',
            label:'Descricion',
            defaultValue:'',
            required:true,
            textarea:true,
        },        
        {
            name:'date',
            label:'Fecha de finalizacion',
            date:true,
        },  
        {
            name:'image',
            label:'Imagen',
            required:true,
            file:true,
        }      

   ];

   const saveVote=(data)=>{

        

        dispatch(saveChallengeAsync({
            ...data,
            status:'activo'
        }))
        disclousure.onClose();
    }



  return (
    <>
          <OpenModal text='Agregar reto' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nueva reto' onClick={saveVote}  />
          </Modal>

    </>
  )
}
