/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Blockchain from './blockchain';
import { Transaction } from './local';
import Navbar from '../../components/Navbar';

export const TransactionIndex = () => {

  const routes= [
    {name:'Transacciones locales', 'route':'/transacciones'},
    {name:'Blockchain', 'route':'/transacciones/blockchain'},

  ]
  return (
    <>
    <Navbar routes={routes} />
    </>
  )
}


export const TransactionRoutes = [
  { path:"", Element:Transaction },
  { path:"blockchain", Element:Blockchain },
]