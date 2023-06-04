import {SimpleGrid } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { Swap } from './Swap';
import { SwapDisable } from './SwapDisable';
import { SwapBalance } from './SwapBalance';
import { SwapWithdraw } from './SwapWithdraw';
import Token from '../../config/token';


export const Dashboard = () => {

    const [role,setRole] = useState(false);

    useEffect(()=>{
      const userParse = Token.check().sub;
      setRole(userParse?.roles?.[0]?.name);
    },[])
    const renderWidget = ()=>{
    let widget=  document.getElementById('coinmarketcap-widget-marquee').innerHTML;

    widget = widget.replaceAll('style="display: none;"', '');

    console.log(widget);
    return <div dangerouslySetInnerHTML={{__html: widget}}></div>;

  }
       
  
  const renderButtons = () =>{
    const requiredRole = 'administracion';
    // eslint-disable-next-line
    if (role == requiredRole) {
      return <>
      <Swap />
      <SwapDisable />
      <SwapBalance />
      <SwapWithdraw />            
     </>
    }
    return <></>;
  }

    return (
      <>
        <SimpleGrid columns={1} spacing={10}>
         {renderWidget()}
       </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          {role && renderButtons()}
        </SimpleGrid>
       </>
       )
 }
