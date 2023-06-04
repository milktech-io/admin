import {  useDisclosure } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import { saveVoteAsync } from '../../../redux/community/actions'
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
            name:'options',
            label:'Opciones (Separar por | )',
            defaultValue:'si|no',
            required:true,
        },
        {
            name:'minimum_participations',
            label:'Participacione minimas',
            defaultValue:'',
            required:true,
            number:true,
        },        
        {
            name:'date_end',
            label:'Fecha de finalizacion',
            date:true,
        },   
        {
            name:'image',
            'label':'Imagen',
            file:true
        }     

   ];

   const saveVote=(data)=>{

        

        dispatch(saveVoteAsync({
            ...data,
            status:'activo'
        }))
        disclousure.onClose();
    }



  return (
    <>
          <OpenModal text='Agregar encuesta' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nueva encuesta' onClick={saveVote}  />
          </Modal>

    </>
  )
}
