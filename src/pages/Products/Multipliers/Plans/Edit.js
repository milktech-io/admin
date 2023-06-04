import {  SimpleGrid, Box, Heading, Image } from '@chakra-ui/react'
import React , {useState, useEffect} from 'react'
import { getPlanAsync, updatePlanImageAsync } from '../../../../redux/multiplier/actions';
import { useParams} from 'react-router-dom'
import { planApi} from '../../../../api';
import Builder from '../../../../components/forms';
import InputFile from '../../../../components/forms/InputFile';
import {toast} from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import ContractId from '../../../../components/blockchain/ContractId';


export const PlansEdit = () => {



  const dispatch = useDispatch();
  const {id} = useParams();
  const [fields, setFields] = useState([]);

  const plan  = useSelector(state=>state.multiplier.plan);


  useEffect(()=>{
    if (id) {
      dispatch(getPlanAsync(id))
    }
  },[dispatch, id])


  useEffect(()=>{

    if(plan.id ){
          setFields([
        {
          name:'name',
          label:'Nombre',
          required:true,
          defaultValue:plan.name
        },
        {
          name:'description',
          label:'Descripcion',
          required:true,
          defaultValue:plan.description
        },
        {
          name:'content',
          label:'Contenido',
          required:true,
          editor:true,
          defaultValue:plan.content
        },
        {
          name:'price',
          label:'Precio',
          required:true,
          defaultValue:plan.price
        },
        {
          name:'currency',
          label:'MONEDA',
          required:true,
          defaultValue:plan.currency
        },
        {
          name:'stock',
          label:'Stock',
          required:true,
          defaultValue:plan.stock
        },
        {
          name:'interest',
          label:'Interes',
          required:true,
          defaultValue:plan.interest
        },
        {
          name:'automatically_ends',
          label:'Retorno final',
          required:true,
          defaultValue:plan.automatically_ends
        },
        {
          name:'active',
          label:'Activo',
          required:true,
          boolean:true,
          defaultValue:plan.active
        },
        {
          name:'plus_comission',
          label:'Interes compuesto',
          required:true,
          boolean:true,
          defaultValue:plan.plus_comission
        }
      ]);
    }

  },[plan])


  
  const updatePlan = (data) =>{
    planApi.update(id,{
      ...plan,
      ...data
    }).then(_response=>{
      toast.success('Plan actualizado correctamente', {"theme":"dark"})
    })

  } 

  const changeImage = (e)=>{
    dispatch(updatePlanImageAsync(id,e.target.files[0]));
  }


    return (
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>

        <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar plan</Heading>

     
          <Builder  fields={fields} onClick={updatePlan}/>
        </Box>  



            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar imagen</Heading>

                <Image 
                    boxSize='200px' 
                    style={{"margin":"1rem auto"}}
                    src={plan?.image === 'null' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : plan.image}>
                </Image>


                <InputFile accept={['image/png', 'image/gif', 'image/jpeg', 'image/webp']} onChange={changeImage}/>


            </Box>


               <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Blockchain</Heading>

                  contract_id:  <ContractId row={plan} variant='plan'/>  

          
            </Box>
  
      </SimpleGrid>

       

    )
}