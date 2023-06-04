/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import Navbar from '../../components/Navbar';
import {Summaries} from './Summaries';
import ListPackage from './ListPackage';
export const SummariesIndex = () => {
  
  const routes= [
    {name:'Resumenes', 'route':'/resumenes'},
    {name:'Paquetes', 'route':'/resumenes/paquetes'},

  ]
  
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}

export const SummariesRoutes= [
  {path:'',  Element:Summaries},
  {path:'paquetes',  Element:ListPackage},

]