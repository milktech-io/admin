/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink, useLocation } from 'react-router-dom';
import { Skeleton, VStack } from '@chakra-ui/react';
import { getMenuAsync } from '../../redux/menu/actions';
import Token from '../../config/token';
const LOGO_NARANJA = require('../../assets/logo-naranja.png'); 

let windowHeight = ''

const Sidebar = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  const pathname = usePathname();
  const active = pathname;
  const [menus, setMenu] = React.useState([]);
  const [ isOpen, setIsOpen ] = React.useState(true)
  const [sizeH, setSizeH] = React.useState(windowHeight);

  const getModules = async () => {
    if(localStorage.getItem('menu')==null){
      await getMenuAsync();
    }

    let menuStorage  = filterMenu();
    setMenu(menuStorage);

  }


  const filterMenu = ()=>{
    let _menus =JSON.parse(localStorage.getItem('menu'));
    const user = Token.check().sub;

    let role = user.roles[0].name;

    return  _menus.filter((m)=>{

      m.permissions = JSON.parse(m.permissions).filter((p)=>{
        return p.includes(role);
      })

      return m.permissions.length;

    })

  }

  useEffect(() => {
    getModules()
  }, [pathname]);


  useEffect (() => {
    windowHeight = window.innerHeight;
    setSizeH(windowHeight)
  },[window.innerHeight]);



  return (
    <VStack style={{ display: 'flex', height: sizeH, overflow: 'scroll initial', alignItems:'flex-start' }} h={sizeH}>
      <CDBSidebar textColor="#fff" backgroundColor="#232A30" height='100vh'>
        <CDBSidebarHeader  prefix={<i onClick={()=>setIsOpen(!isOpen)} className="fa fa-bars fa-large"></i>}>
          <a href="/inicio" className="text-decoration-none" style={{ color: 'inherit', fontFamily: 'Syne', fontWeight: '800', letterSpacing: 6, fontSize: 13 }}>
            MENÚ</a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            {menus?.length > 0 ? (
              menus?.map((item, _index) => (
                
                  <NavLink key={item?.id} to={item?.route?.toLowerCase()} >
                    <CDBSidebarMenuItem  icon={item.icon}>
                      <div style={
                        {
                          fontFamily: 'Syne',
                          fontWeight: 400,
                          fontSize: 17,
                          color: active === item.route.toLowerCase() ? 'white' : '#E5E5E5',
                        }}>{item.title}</div>
                    </CDBSidebarMenuItem>
                  </NavLink>
               
              ))) : (
              <VStack width={'100%'} height={'100%'} spacing={4}>
                <Skeleton height='20px' w={'70%'} />
                <Skeleton height='20px' w={'70%'} />
                <Skeleton height='20px' w={'70%'} />
              </VStack>)}
        </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to={'/inicio'} className="activeClicked">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 35 }}>
              <img
                src={LOGO_NARANJA}
                alt=""
                style={{ width: '150px' }}
              />
            </div>
          </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>

    </VStack>
  )
};

export default Sidebar;