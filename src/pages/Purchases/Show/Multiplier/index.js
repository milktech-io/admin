/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React from 'react'
import Roi from './roi';
import Comissions from './comissions';

export default function Multiplier({purchase}) {
  
  return (

    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>ROI</Tab>
          <Tab>Comissiones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <Roi purchase={purchase} / > 
        </TabPanel>
        <TabPanel>
              <Comissions purchase={purchase} / > 

        </TabPanel>


        </TabPanels>
      </Tabs>
      </>
  )
}
