import { Stack } from '@chakra-ui/react'
import React from 'react'
import {withdrawFunds} from '../../config/blockchain/swap/actions';
import {Confirm} from '../../components/buttons';

const style= {
  container:{
    display:'flex',
    flexDirection:'column',
    border:'1px solid #eaeaeb',
    marginTop:'1rem',
    padding:'1rem',
  },
  h1:{
    fontWeight:'bold',
    fontSize:24
  }
}
export const SwapWithdraw = () => {

 
 
    return (
      <Stack style={style.container} bg={'white'} w={'100%'}>
      <h1 style={style.h1}>Retirar fondos Swap</h1>
      <p>Retirar a la wallet destino</p>
       <Confirm onClick={withdrawFunds} text="Retirar fondos" title="Retirar fondos swap" />
       </Stack>
       )
  
 }
