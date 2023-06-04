import {
  SimpleGrid, Box, Heading
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategorieAsync } from "../../redux/category/actions";
import {useParams} from 'react-router-dom';
import Builder from '../../components/forms';

export const CategoriesEdit = () => {

  const [category,setCategory] = useState({});
  const {categories } = useSelector((state)=>state.category)
  const {id} = useParams()
  const [fields, setFields] = useState([]);
  const dispatch  = useDispatch();

  useEffect(() => {
    let cat = categories.data.filter(_cat=>_cat.id===id)[0];
    setCategory(cat);

    setFields([
    {
      name:'name',
      defaultValue:cat.name,
      label:'Nombre de la categoria',
      required:true
    },
    {
      name:'slug',
      defaultValue:cat.slug,
      label:'Nombre corto (SLUG)',
      required:true
    },
    {
      name:'active',
      defaultValue:cat.active,
      label:'Mostrar categoria',
      required:true,
      boolean:true
    }

    ]);


  }, []);


  const saveCategory = (data)=>{
    setCategory({
      ...category,
      ...data
    })
    dispatch(updateCategorieAsync(id,data))
  } 


  return (
    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
      <Box p={5} shadow='md' borderWidth='1px' >
        <Heading fontSize='xl'>Editar categoria</Heading>
          <Builder fields={fields}  message='Guardar los cambios a la categoria' onClick={saveCategory}  />
      </Box>
    </SimpleGrid>

  );
};
