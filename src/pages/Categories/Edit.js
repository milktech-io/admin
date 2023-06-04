import {
  SimpleGrid, Box, Heading, Image
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategorieAsync, updateImageAsync } from "../../redux/category/actions";
import {useParams, useNavigate} from 'react-router-dom';
import Builder from '../../components/forms';
import InputFile  from '../../components/forms/InputFile';

export const CategoriesEdit = () => {

  const [category,setCategory] = useState({});
  const {categories } = useSelector((state)=>state.category)
  const {id} = useParams()
  const [fields, setFields] = useState([]);
  const dispatch  = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    let cat = categories?.data?.filter(_cat=>_cat.id===id)[0] ||  false;
    if (!cat) {
      navigate('/categorias')
    }
    setCategory(cat);

  }, [categories, id, navigate])


  useEffect(() => {
    let cat = categories?.data?.filter(_cat=>_cat.id===id)[0 ] ||  false;

    if (!cat) {
      navigate('/categorias')
    }
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
      label:'SLUG',
      readonly:true,
    },
    {
      name:'active',
      defaultValue:cat.active,
      label:'Mostrar categoria',
      required:true,
      boolean:true
    }

    ]);


  }, [categories, id, navigate]); 


  const saveCategory = (data)=>{
    setCategory({
      ...category,
      ...data
    })
    dispatch(updateCategorieAsync(id,data))
  } 

    const handleSubmit =(e)=>{
      let data = {
        image:e.target.files[0],
      }

      dispatch(updateImageAsync(id,data));
    }

  return (
    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
      <Box p={5} shadow='md' borderWidth='1px' >
        <Heading fontSize='xl'>Editar categoria</Heading>
          <Builder fields={fields}  message='Guardar los cambios a la categoria' onClick={saveCategory}  />
      </Box>
            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar imagen</Heading>

                <Image 
                    boxSize='200px' 
                    style={{"margin":"1rem auto"}}
                    src={category?.image === 'null' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : category.image}>
                </Image>


                <InputFile accept={['image/png', 'image/gif', 'image/jpeg', 'image/webp']} onChange={handleSubmit}/>


            </Box>
    </SimpleGrid>

  );
};
