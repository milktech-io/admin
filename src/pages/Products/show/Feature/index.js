import {  Stack, useDisclosure, SimpleGrid, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import  {Modal, OpenModal}  from '../../../../components/Modal';
import Builder from '../../../../components/forms';
import {useDispatch} from 'react-redux';
import {updateProductAsync} from '../../../../redux/product/actions';
import {Delete} from '../../../../components/buttons';



export const Features = ({product}) => {


  const dispatch = useDispatch();

  const [features, setFeatures]= useState([]);

  useEffect(()=>{
    setFeatures(JSON.parse(product?.features||'[]'));
  },[product])


  const fields = [
    {
      name:'title',
      label:'Titulo',
      required:true,
      defaultValue:'',
    },
    {
      name:'feature',
      label:'Contenido a destacar',
      required:true,
      defaultValue:'',
    },
    {
      name:'text',
      label:'Texto extra',
      required:true,
      defaultValue:'',
    },
  ];

  const styleButton ={
    cursor :'pointer',
    margin: '0px 5px',
    background: '#232a30',
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    padding: '1rem',
    borderRadius: '100px',
    color: 'white',
}

  const disclousure = useDisclosure();

  const deleteDispatch =(index)=>{

    let newFeatures = features.filter((_feature,feature_index)=>feature_index!==index)
    
    return  updateProductAsync(product.id,{
      ...product,
      features:JSON.stringify(newFeatures)
    });
  }

  const saveFeature = (data)=>{
    let newFeatures = [
      ...features,
      data
    ];

    dispatch(updateProductAsync(product.id,{
      ...product,
      features:JSON.stringify(newFeatures)
    }));
  }

    return (
        <Stack  bg={"white"}>    

          <OpenModal text='Agregar caracteristica' disclousure={disclousure} />

      <SimpleGrid columns={[2, null, 4]} style={{marginTop:'30px'}} spacing='40px'>
        {features && features.map((feature,index)=>
    <Stack p="4" boxShadow="lg" m="4" style={{textAlign:'center','position':'relative'}} borderRadius="sm">
      <Text fontWeight="semibold">{feature.title}</Text>
        <Text style={{fontSize:'30px'}}fontWeight="bold">{feature.feature}</Text>
        <Text fontWeight="">{feature.text}</Text>
    
      <Delete  style={styleButton} dispatchable={deleteDispatch} id={index} />
    </Stack>

           
          )}
      </SimpleGrid>
      <Modal
        isOpen={disclousure.isOpen}
        onClose={disclousure.onClose}
      >
        <Builder fields={fields}  message='Guardar nueva version' onClick={saveFeature}  />
      </Modal>

        
        </Stack>

       

    )
}
