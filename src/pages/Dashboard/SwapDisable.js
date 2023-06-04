import { Stack } from '@chakra-ui/react'
import React from 'react'
import {disableSwap} from '../../config/blockchain/swap/actions';
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
export const SwapDisable = () => {
  
    return (
      <Stack style={style.container} bg={'white'} w={'100%'}>
      <h1 style={style.h1}>Desactivar swap</h1>
      <p>Si el swap esta activo presiona el siguiente botón para apagarlo</p>

       <Confirm onClick={disableSwap}  title="Desactivar swap" />
       </Stack>
       )
 }
