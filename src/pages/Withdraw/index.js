/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Total from './total';

import Navbar from '../../components/Navbar';
import Package from './multiplier/package';
import Loop from './multiplier/loop';

export const WithdrawIndex = () => {
  
  const routes= [
    {name:'Retiros', 'route':'/retiros'},
    {name:'Bonos de compras', 'route':'/retiros/multiplicador/compra'},
    {name:'Bonos de loop', 'route':'/retiros/multiplicador/loop'},

  ]
  
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}

export const WithdrawRoutes= [
  {path:'',  Element:Total},
  {path:'multiplicador/compra',  Element:Package},
  {path:'multiplicador/loop',  Element:Loop},

]