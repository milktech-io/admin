import { Stack } from '@chakra-ui/react'
import React, {useState} from 'react'
import {showBalance} from '../../config/blockchain/swap/actions';
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
export const SwapBalance = () => {


  const [balance, setBalance] = useState({
    nsts:'NST -',
    usdts:'USDT -'

  })


  const showBalanceNST = ()=>{
    showBalance().then(res=>{
      console.log(res);
      setBalance(res);
    })
  }
    return (
      <Stack style={style.container} bg={'white'} w={'100%'}>
      <h1 style={style.h1}>Ver Balance Swap</h1>
      <p>Ver la cantidad de nst y usdt en el swap</p>
      <p>{balance.nsts}</p>
      <p>{balance.usdts}</p>
       <Confirm onClick={showBalanceNST} text="Recargar balance" title="Ver balance swap" />
       </Stack>
       )
  
 }
