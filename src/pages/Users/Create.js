/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../components/Modal';
import Builder from '../../components/forms';
import { saveUserAsync } from '../../redux/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesAsync} from '../../redux/role/actions'

export const Create = () => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();
  const [fields,setFields]= useState([]);
  const { roles } = useSelector((state) => state.role)

  const professions =['Freelancer', 'Empresario', 'Profesionista'];
  

  useEffect(()=>{

    if(roles.length){

      setFields([
      {
        name:'name',
        label:'Nombre',
        defaultValue:'',
        required:true
      },
      {
        name:'lastname',
        label:'Apellido(s)',
        defaultValue:'',
        required:true
      },      
      {
        name:'username',
        label:'Nombre de usuario',
        defaultValue:'',
        required:true
      },

      {
        name:'email',
        label:'Email',
        defaultValue:'',
        required:true
      },      
      {
        name:'profession',
        label:'Profesion',
        defaultValue:professions[0],
        required:true,
        options: professions.map(profession=><option value={profession}>{profession}</option>)
      },
      {
        name:'role',
        label:'Rol',
        defaultValue:roles[0].name,
        required:true,
        options: roles.map(role=><option value={role.name}>{role.name}</option>)
      },

      ])

    }

  },[roles]);

 
  useEffect(()=>{
    dispatch(getRolesAsync());
  }, [dispatch])

  const saveUser = (data)=>{
    dispatch(saveUserAsync(data));
  }

    return (
     <>
       
       <OpenModal disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Crear usuario' onClick={saveUser} />
         
       </Modal>
        
     </>
    )
  
}