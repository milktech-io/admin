import {  useDisclosure } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import { saveTranslationAsync } from '../../redux/translation/actions'
import Builder from '../../components/forms';
import {Modal, OpenModal}  from '../../components/Modal';

export const Create = () => {
    const dispatch = useDispatch()
 

    const disclousure = useDisclosure();

    const fields =[
        {
            name:'name_long',
            label:'Idioma',
            required:true
        },
        {
            name:'name_short',
            label:'Nombre corto',
            required:true
        }, 
   ];

   const saveTranslation=(data)=>{

        dispatch(saveTranslationAsync({
            ...data
        }))
        disclousure.onClose();
    }



  return (
    <>
          <OpenModal text='Agregar traduccion' disclousure={disclousure} />
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <Builder fields={fields}  message='Guardar nuevo lenguaje' onClick={saveTranslation}  />
          </Modal>

    </>
  )
}
