/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Information} from './Show/information';
import {RangueAdvance} from './Show/RangueAdvance';
import { Purchases} from '../Purchases/';
import { Balances} from '../Balances/';
import { Wallet} from './Show/Wallet';
import { Merges} from './Show/Merge';
import { Tree} from '../Tree';
import Withdraws from '../Withdraw/withdraw';
import Navbar from '../../components/Navbar';
import {useParams} from 'react-router-dom';
import { Transaction } from '../transaction/local';

export const UserShowIndex = () => {
  
  const {id} = useParams();

  const routes= [
    {name:'Informacion', 'route':`/usuarios/${id}`},
    {name:'Compras', 'route':`/usuarios/${id}/compras`},
    {name:'Transacciones', 'route':`/usuarios/${id}/transacciones`},

  ]
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}


export const UserShowRoutes = [
  { path:"", Element:Information },
  { path:"compras", Element:Purchases },
  { path:"transacciones", Element:Transaction },

]