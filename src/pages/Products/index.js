/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Products from './products';
import Multiplier from './Multipliers';
import Static from './Statics';
import Navbar from '../../components/Navbar';

export const ProductIndex = () => {
  
  const routes= [
    {name:'Productos', 'route':'/productos'},
    {name:'Multiplicadores', 'route':'/productos/multiplicadores'},
    {name:'Estaticos', 'route':'/productos/estaticos'},
  ]
  
  return (
    <>
      <Navbar routes={routes} />
    </>
  )
}

export const ProductRoutes= [
  {path:'',  Element:Products},
  {path:'multiplicadores',  Element:Multiplier},
  {path:'estaticos',  Element:Static},

]

