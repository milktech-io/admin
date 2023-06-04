/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React from 'react'
import {Pending} from './pending';
import {Completed} from './completed';
import {Financial} from './financial';
import {useParams} from 'react-router-dom';

export const ChaincropDetail =() => {

  const {id} = useParams();

  return (

    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Sin Token</Tab>
          <Tab>Con token</Tab>
          <Tab>Estados financieros</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <Pending stock_id={id} / > 
        </TabPanel>
        <TabPanel>
           <Completed stock_id={id} / >
        </TabPanel>
        <TabPanel>
           <Financial stock_id={id} / >        
        </TabPanel>

        </TabPanels>
      </Tabs>
      </>
  )
}
