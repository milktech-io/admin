/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React from 'react'
import Roi from './roi';
import Balances from './balances';
import Withdraw from './withdraw';

export default function RoiIndex({purchase}) {
  
  return (

    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Informacion</Tab>
          <Tab>Balances</Tab>
          <Tab>Retiro</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <Roi purchase={purchase} / > 
        </TabPanel>
        <TabPanel>
           <Balances purchase={purchase} / > 
        </TabPanel>

        <TabPanel>
           <Withdraw purchase={purchase} / > 
        </TabPanel>


        </TabPanels>
      </Tabs>
      </>
  )
}
