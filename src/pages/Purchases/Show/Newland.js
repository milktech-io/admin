import {
  Box,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure, Tabs, TabList, TabPanels, TabPanel, Tab
} from '@chakra-ui/react';
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {newlandApi} from '../../../api';
import {Modal, OpenModal}  from '../../../components/Modal';
import Builder from '../../../components/forms';
import { getPurchaseAsync } from '../../../redux/purchase/actions';
import Comissions from './Multiplier/comissions';

export default function Newland({purchase}) {   

  const  [token,setToken] = useState(false);

  const disclousure = useDisclosure();
  const renderToken=(_token) =>{
    if (_token?.token) {
      return _token.token;
    }

    return  <OpenModal text='Asignar  Token' onClick={()=>setToken(_token)} disclousure={disclousure} />


  }
  return (

   


      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Tokens</Tab>
          <Tab>Comisiones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
             <Box
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        
        <div >
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            <SaveToken disclousure={disclousure} purchase={purchase} token={token}/>
          </Modal>

             <RenderTable renderToken={renderToken} purchase={purchase} />
             
        </div>


      </Box>
        </TabPanel>
        <TabPanel>
              <Comissions purchase={purchase} / > 

        </TabPanel>


        </TabPanels>
      </Tabs>


  );
}


const SaveToken =({purchase, token, disclousure}) =>{
 
  const dispatch = useDispatch();


  const fields = [
    {
      name:'token',
      label:'Numero de token',
      required:true
    },
    ];

  const saveToken = (data) =>{
    newlandApi.saveToken(token.id, data).then(_response=>{
      dispatch(getPurchaseAsync(purchase.id));
    }).finally(()=>{
      disclousure.onClose()
    })
  }

  return           <Builder fields={fields}  message='Guardar token' onClick={saveToken}  />

}

const RenderTable = ({purchase, renderToken}) =>{
  return <TableContainer>
  <Table variant='simple'>
    <TableCaption>Tokens</TableCaption>
    <Thead>
      <Tr>
        <Th>Precio</Th>
        <Th>Token</Th>
      </Tr>
    </Thead>
    <Tbody>

    {purchase?.newland?.map((token)=>{
            return <Tr key={token.id}>
            <Td>{token.price} {token.currency}</Td>
            <Td>{renderToken(token)}</Td>
            </Tr>
          })}
    </Tbody>

  </Table>
</TableContainer>
}