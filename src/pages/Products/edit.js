import {  Stack, Text } from '@chakra-ui/react'
import React, { useEffect , useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Builder from '../../components/forms';
import {getCategoriesAsync} from '../../redux/category/actions';
import {getProductAsync, updateProductAsync} from '../../redux/product/actions';

export const  ProductEdit=()=>{


    const {id} = useParams();
    const productState = useSelector(state=>state.product.product)
    const categories = useSelector(state=>state.category.categories);

    const [fields,setFields] = useState([]);

    const dispatch = useDispatch();


    useEffect(()=>{
      if (id) {
        dispatch(getProductAsync(id));
        dispatch(getCategoriesAsync([]));
      }
    },[dispatch, id])

    useEffect(()=>{
      const product = JSON.parse(JSON.stringify(productState))
      categories?.length && setFields([
        {
          name:'name',
          label:'Nombre',
          defaultValue: product.name,
          required:true
        }, 
        {
          name:'category_id',
          label:'Categoria',
          defaultValue: product.category_id,
          options: categories.map(category=><option key={category.id} value={category.id}>{category.name}</option>),
          required:true
        },  
        {
          name:'slug',
          label:'Slug (No se puede editar)',
          defaultValue: product.slug,
          readonly:true
        },        
        {
          name:'short_description',
          label:'Descripcion corta',
          defaultValue: product.short_description,
          required:true
        },
        {
          name:'description',
          label:'Descripcion',
          defaultValue:product.description,
          required:true
        },
        {
          name:'content',
          editor:true,
          label:'Contenido principal',
          defaultValue:product.content,
          required:true
        },
        {
          name:'active',
          label:'Activar para la venta',
          defaultValue:product.active,
          boolean:true,
          required:true
        }
      ]);


    },[productState,categories]);


    const saveVersion=(data)=>{

      dispatch(updateProductAsync(productState.id,{
        ...productState,
        ...data
      }));

    }


    return (

      <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>     


        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Editar producto</Text>
      </Stack>

        <Builder fields={fields}  message='Guardar nueva version' onClick={saveVersion}  />
      

    </Stack>

         
     </Stack>   

    )
}