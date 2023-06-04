import {  SimpleGrid, Box, Heading, Image } from '@chakra-ui/react'
import React , {useState, useEffect} from 'react'
import { getStockAsync, updateStockImageAsync } from '../../redux/product/actions';
import { useParams} from 'react-router-dom'
import { newlandApi} from '../../api';
import Builder from '../../components/forms';
import InputFile from '../../components/forms/InputFile';
import {toast} from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import ContractId from '../../components/blockchain/ContractId';


export const NewlandEdit = () => {



  const dispatch = useDispatch();
  const {id} = useParams();
  const [fields, setFields] = useState([]);

  const stock  = useSelector(state=>state.product.newland.stock);


  useEffect(()=>{
    if (id) {
      dispatch(getStockAsync(id))
    }
  },[dispatch, id])
 


  useEffect(()=>{

    if(stock.id ){
          setFields([
        {
          name:'name',
          label:'Nombre',
          required:true,
          defaultValue:stock.name
        },
        {
          name:'description',
          label:'Descripcion',
          required:true,
          defaultValue:stock.description
        },
        {
          name:'content',
          label:'Contenido',
          required:true,
          editor:true,
          defaultValue:stock.content
        },
        {
          name:'price',
          label:'Precio',
          required:true,
          defaultValue:stock.price
        },
        {
          name:'currency',
          label:'MONEDA',
          required:true,
          defaultValue:stock.currency
        },
        {
          name:'stock',
          label:'Stock',
          required:true,
          defaultValue:stock.stock
        },
        {
          name:'active',
          label:'Activar para la venta',
          defaultValue:stock.active,
          boolean:true,
          required:true
        }
      ]);
    }

  },[stock])


  
  const updatestock = (data) =>{
    newlandApi.update(id,{
      ...stock,
      ...data
    }).then(_response=>{
      toast.success('Accion actualizada correctamente', {"theme":"dark"})
    })

  } 

  const changeImage = (e)=>{
    dispatch(updateStockImageAsync(id,e.target.files[0]));
  }


    return (
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>

        <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar stock</Heading>

     
          <Builder  fields={fields} onClick={updatestock}/>
        </Box>  



            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar imagen</Heading>

                <Image 
                    boxSize='200px' 
                    style={{"margin":"1rem auto"}}
                    src={stock?.image === 'null' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : stock.image}>
                </Image>


                <InputFile accept={['image/png', 'image/gif', 'image/jpeg', 'image/webp']} onChange={changeImage}/>


            </Box>


               <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Blockchain</Heading>

                  contract_id:  <ContractId row={stock} variant='newland'/>  

          
            </Box>
  
      </SimpleGrid>

       

    )
}