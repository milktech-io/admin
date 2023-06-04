/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React from 'react'
import {useParams} from 'react-router-dom';
import {Information} from './Information';
import {Evidences} from './Evidences';

export default function Show()  {
  
  const {id} = useParams();

  return (

    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>informacion</Tab>
          <Tab>evidencias</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Information id={id} />
        </TabPanel>
          <TabPanel>
            <Evidences id={id} />
        </TabPanel>


        </TabPanels>
      </Tabs>
      </>
  )
}
