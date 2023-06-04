/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Users} from './users';
import {UsersTrash} from './trash';

import Navbar from '../../../components/Navbar';

export const UserIndex = () => {
  
  const routes= [
    {name:'Usuarios', 'route':'/usuarios'},
    {name:'Papelera', 'route':'/usuarios/papelera'},

  ]
  
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}

export const UserRoutes= [
  {path:'',  Element:Users},
  {path:'papelera',  Element:UsersTrash},
]