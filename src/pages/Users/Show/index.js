import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {Information} from './Show/information';
import {RangueAdvance} from './Show/RangueAdvance';
import { userApi  } from '../../api';
import { Purchases} from '../Purchases/';
import { Balances} from '../Balances/';
import { Wallet} from './Show/Wallet';
import { Merges} from './Show/Merge';
import { Tree} from '../Tree';
import Withdraws from '../Withdraw/withdraw';

export const UsersShow = () => {



  const {id} = useParams();
  
  const [user,setUser] = useState({});


  useEffect(()=>{
        userApi.show(id).then(response=>{
            setUser(response.data.data);
        });


  },[id]);

    return (
       <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Informacion</Tab>
          <Tab>Avance Rango Multiplicador</Tab>
          <Tab>Saldos</Tab>
          <Tab>Compras</Tab>
          <Tab>Transacciones</Tab>
          <Tab>Retiros</Tab>
          <Tab>Balances Multiplicador</Tab>
          <Tab>Fusiones de cuentas</Tab>
          <Tab>Referidos</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <Information user={user} />
            </TabPanel>
            <TabPanel>
               <RangueAdvance user={user} />
            </TabPanel>
            <TabPanel>
             <Wallet user={user} />
            </TabPanel>
            <TabPanel>
             <Purchases user_id={id|| null} />
          </TabPanel>
            <TabPanel>
              <Withdraws user_id={id || null} />
          </TabPanel>
            <TabPanel>
             <Balances user={user} />
          </TabPanel>
            <TabPanel>
             <Merges user={user} />
          </TabPanel>
            <TabPanel>
             <Tree user={user} />
          </TabPanel>

        </TabPanels>
      </Tabs>
       

    )
}
