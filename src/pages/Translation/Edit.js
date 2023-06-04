import {
  SimpleGrid, Box, Heading, Table, Td, Tr, Tbody, Thead, Th, Textarea
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranslationAsync, updateTranslationAsync } from "../../redux/translation/actions";
import {useParams} from 'react-router-dom';
import {Confirm} from '../../components/buttons';

export const TranslationEdit = () => {

  const {translation} = useSelector((state)=>state.translation)
  const [translate, setTranslate] = useState({});

  const [editing, setEditing] = useState({
    original:false,
    translate:'',
  })
  const {id} = useParams()
  const dispatch  = useDispatch();


  useEffect(() => {
    dispatch(getTranslationAsync(id));
  }, [dispatch, id])

  useEffect(() => {
    setTranslate(translation)
  }, [translation])



  const select = (k) =>{
    setEditing({
      original:k,
      translate:translate[k]
    })

  }

  const saveChanges= ()=>{

    console.log('este', translate);
    dispatch(updateTranslationAsync(id, {
      json: translate
    }));
  }

  const translateText=(e)=>{
    setEditing({
      ...editing,
      translate:e.target.value,
    })
    setTranslate({
      ...translate,
      [editing.original]:e.target.value
    })

  }
 
  const mapTranslation = ()=>{
    
    let html = [];



    for(let k in translate) {
        html.push(
          <Tr onClick={()=>select(k)}>
            <Td>{k}</Td>
            <Td>{translate[k]}</Td>
          </Tr>
        )
    }

    return <Table variant='striped' colorScheme='teal'>
      <Thead>
        <Tr>
          <Th>Texto</Th>
          <Th>Traduccion</Th>
        </Tr>
      </Thead>
      <Tbody> {html}</Tbody>
      </Table>;
  }
  return (
    <>
    <SimpleGrid  spacingX='40px'  spacingY='20px'>
      <Box p={5}  shadow='md' borderWidth='1px' >
        <Heading p={5} fontSize='xl'>Editar traduccion</Heading>
        <div style={{
          maxHeight:'20vh',
          overflowY:'scroll'
        }}>
          {translate && mapTranslation()}
        </div>
        
      </Box>
    </SimpleGrid>

    <SimpleGrid  spacingX='40px' spacingY='20px'>
      <Box p={5} shadow='md' borderWidth='1px' >
        <Heading p={5} fontSize='xl'>Original</Heading>
          <div>{editing.original ? editing.original : 'Da click en un texto'}</div>
      </Box>
    </SimpleGrid>

    <SimpleGrid  spacingX='40px' spacingY='20px'>
      <Box p={5} shadow='md' borderWidth='1px' >
        <Heading p={5} fontSize='xl'>Traduccion</Heading>
          <Textarea value={editing.translate || ''} onChange={translateText}/>
          <Confirm text="guardar cambios" onClick={saveChanges} />
      </Box>
    </SimpleGrid>
    </>

  );
};
