import {  SimpleGrid, Box, Heading } from '@chakra-ui/react'
import React , {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import { staticApi} from '../../../../api';
import Builder from '../../../../components/forms';
import {toast} from 'react-toastify';
import ContractId from '../../../../components/blockchain/ContractId';


export const VariantsEdit = () => {

  const {id} = useParams();
  const [fields, setFields] = useState([]);
  const [variant,setVariant] = useState({});

  useEffect(()=>{

    staticApi.show(id).then(res=>{
      setVariant(res.data.data);
    })

  }, [id,setVariant,])
 
  useEffect(()=>{

    if(variant.id ){
      setFields([
        {
          name:'name',
          label:'Nombre',
          required:true,
          defaultValue:variant.name,
        },
        {
          name:'price',
          label:'Precio',
          required:true,
          defaultValue:variant.price,
        },       
        {
          name:'pieces',
          label:'Piezas',
          required:true,
          defaultValue:variant.pieces,
        },       
        {
          name:'currency',
          label:'MONEDA',
          required:true,
          defaultValue:variant.currency,
        },
        {
          name:'stock',
          label:'Stock',
          required:true,
          defaultValue:variant.stock,
        },
        {
          name:'product_code',
          label:'Codigo del producto',
          required:true,
          defaultValue:variant.product_code,
        },        
        {
          name:'start_date',
          label:'Fecha de inicio',
          required:false,
          defaultValue:variant.start_date,
          date:true,

        },
        {
          name:'end_date',
          label:'Fecha de fin',
          required:false,
          defaultValue:variant.end_date,
          date:true,
        },  
        {
          name:'active',
          label:'Activar para la venta',
          defaultValue:variant.active,
          boolean:true,
          required:true
        }      
      ]);
    }

  },[variant])


  
  const updateVariant = (data) =>{
    staticApi.update(id,{
      ...variant,
      ...data
    }).then(_response=>{
      toast.success('Variante actualizado correctamente', {"theme":"dark"})
    })

  } 


    return (
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>

        <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar Variante</Heading>

     
          <Builder  fields={fields} onClick={updateVariant}/>
        </Box>  


               <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Blockchain</Heading>

                  contract_id:  <ContractId row={variant} variant='static'/>  

          
            </Box>
  
      </SimpleGrid>

       

    )
}