/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React from 'react'
import {Pending} from './pending';
import {Completed} from './completed';

export default function Package({user_id=null})  {
  
  return (

    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Pendiente</Tab>
          <Tab>Solicitado</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <Pending user={user_id} / > 
        </TabPanel>
          <TabPanel>
             <Completed user={user_id} / > 
       
        </TabPanel>


        </TabPanels>
      </Tabs>
      </>
  )
}
