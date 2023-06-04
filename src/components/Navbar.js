import React, {useEffect, useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react'

export default function Navbar ({routes}) {

  const  {pathname} = useLocation();
  const navigate = useNavigate();
  const [index,setIndex] = useState(1);

  useEffect(()=>{

    routes.map((object,_index)=>{
      const {route} = object;
      if(route===pathname) {
        setIndex(_index)
      }
      return object;
    })
  }, [routes, pathname])

  const goTo = (route) =>{
    navigate(route);
  }



  return (
    <>
    <Tabs style={{marginBottom:'1rem'}} variant='soft-rounded' index={index}   colorScheme='green'>
        <TabList>
          {routes && routes.map(({name,route}, key)=>
            (<Tab key={key} onClick={()=>goTo(route)} >{name}</Tab>)
          )}
        </TabList>
      </Tabs>

    <Outlet />

    </>
  )
}
