/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../components/Modal';
import Builder from '../../components/forms';
import { saveMultiplierAsync } from '../../redux/multiplier/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync } from '../../redux/category/actions';

const Create = () => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();
  const [fields,setFields]= useState([]);
  const categories = useSelector(state=>state.category.categories);
  
  useEffect(()=>{
    dispatch(getCategoriesAsync());
  },[])

  useEffect(()=>{

      if(categories.length){
        setFields([
        {
          name:'name',
          label:'Nombre',
          defaultValue:'',
          required:true
        },
        {
          name:'sold',
          label:'Cantidad vendidos',
          defaultValue:0,
          required:true
        },      
        {
          name:'short_description',
          label:'Descripcion corta',
          defaultValue:'',
          required:true
        },
        {
          name:'description',
          label:'Descripcion',
          defaultValue:'',
          required:true
        },
        {
          name:'content',
          label:'Contenido',
          defaultValue:'',
          editor:true,
          required:true
        },
        {
          name:'category_id',
          label:'Categoria',
          defaultValue:categories[0].id,
          required:true,
          options: categories.map(category=><option value={category.id}>{category.name}</option>)
        },
      ])
    }

  },[categories]);

 


  const saveMultiplier = (data)=>{
    data['multiplier']=1;
    data['variant']="App\\Models\\Plan";
    data['slug']= data['name'].replaceAll(' ','-');
    dispatch(saveMultiplierAsync(data));
  }

    return (
     <>
       
       <OpenModal disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Crear usuario' onClick={saveMultiplier} />
         
       </Modal>
        
     </>
    )
  
}



export default Create;