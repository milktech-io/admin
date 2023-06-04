/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab, useDisclosure } from '@chakra-ui/react'
import React, {useState} from 'react'
import {Swap} from './Swap';
import {Transactions} from './Transactions';
import {Purchases} from './Purchases';
import ReactJson from 'react-json-view'
import {Modal} from '../../../components/Modal';

export default function Transaction () {


  const disclousure = useDisclosure();

  const [json, setJson] = useState({});

  
  const openMetadata= (metadata) =>{
    try{
      setJson(JSON.parse(metadata));

    } catch {
      setJson(metadata);     
    }

    disclousure.onOpen();
  }
       
        
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Transacciones</Tab>
          <Tab>Compras</Tab>
          <Tab>Swap</Tab>
        </TabList>
        <TabPanels>        
          <TabPanel>
            <Transactions openMetadata={openMetadata} />
          </TabPanel>
          <TabPanel>
            <Purchases openMetadata={openMetadata} />
          </TabPanel>          
          <TabPanel>
            <Swap openMetadata={openMetadata} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal
            large={true}
            title="Metadata"
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
         <ReactJson name={false} style={{marginBottom:'1rem'}} src={json} />

        </Modal>
      </>
  )
}
