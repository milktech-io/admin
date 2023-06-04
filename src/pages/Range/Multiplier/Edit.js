import { SimpleGrid, Box, Heading} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { rangeApi } from '../../../api';
import Builder from '../../../components/forms';
import {toast} from 'react-toastify';

export const RangeEdit = () => {

    const { id } = useParams()
    const [fields, setFields] = useState([]);
    const [range, setRange] = useState({});


    useEffect(()=>{
        setFields([
        {
            name:'direct_benefit',
            label:'Premio',
            required:true,
            defaultValue:range.direct_benefit,
        },
                {
            name:'direct',
            label:'Invitados directos',
            required:true,
            defaultValue:range.direct,
        },
        {
            name:'first_level_volume',
            label:'Volumen del primer nivel',
            required:true,
            defaultValue:range.first_level_volume,
        },
        {
            name:'group_volume',
            label:'Volumen grupal',
            required:true,
            defaultValue:range.group_volume,
        },
        {
            name:'level_rangue',
            label:'Nivel de profundidad segun rango',
            required:true,
            defaultValue:range.level_rangue,
        },
        {
            name:'personal_volume',
            label:'Volumen personal',
            required:true,
            defaultValue:range.personal_volume,
        },
        {
            name:'pool',
            label:'Pool',
            required:true,
            defaultValue:range.pool,
        },
        {
            name:'rangue_requirements',
            label:'Requerimientos de rango',
            required:true,
            defaultValue:range.rangue_requirements,
        },

        ])

    },[range]);

    useEffect(()=>{
        id && rangeApi.show(id).then(response=>{
            setRange(response.data.data);
        });


    }, [id]);

   
    const saveRange = (data)=>{

        rangeApi.update(range.id,{
            ...range,
            ...data
        }).then(response=>{
            toast.success("Rango actualizado correctamente", {"theme":"dark"})
            setRange(response.data.data)
        })
       
    }



    return (
        <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>Editar rango</Heading>
            <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                <Builder fields={fields} onClick={saveRange}/>          
            </SimpleGrid>
        </Box>

    )

}

