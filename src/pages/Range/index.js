/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { RangeEdit } from './Multiplier/Edit';
import { Range } from './Multiplier';
import { DirectBond } from './DirectBond';
import { PrizeBond } from './PrizeBond';
import Navbar from '../../components/Navbar';

export const RangesIndex = () => {
  
  const routes= [
    {name:'Multiplicador', 'route':'/rangos'},
    {name:'Bonos directos', 'route':'/rangos/bono-directo'},
    {name:'Premios', 'route':'/rangos/premios'},

  ]
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}


export const RangesRoutes = [
  { path:"", Element:Range },
  { path:":id/editar", Element:RangeEdit },
  { path:"bono-directo", Element:DirectBond },
  { path:"premios", Element:PrizeBond },
]