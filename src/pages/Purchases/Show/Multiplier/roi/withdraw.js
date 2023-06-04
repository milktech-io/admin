import {
  Input,
  FormLabel,
  FormControl,
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import {Confirm} from '../../../../../components/buttons';
import {packageApi} from '../../../../../api';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {getBalanceHistoryAsync} from '../../../../../redux/purchase/actions';

export default function Withdraw({purchase}) {

  const dispatch = useDispatch();
   const balances = useSelector((state)=>(state.purchase.balance));
   const [max, setMax] = useState(0);
   const [amount, setAmount] = useState(0);

   useEffect(()=>{
    if(balances.data) {
      const first =balances.data[0] || false;

      if(first) {
        const balance = parseFloat(first.balance);
        if(balance>0) {
          setMax(balance)
        }
      } 
    }

   },[balances])
  const makeWithdraw = ()=>{
    if(amount>max) {
      toast.error("No se puede retirar mas del maximo", {theme:"dark"});
      return;
    }

    packageApi.withdraws(purchase.multiplier.id, {
      amount
    }).then(_res=>{

      dispatch(getBalanceHistoryAsync(purchase.multiplier.id, {
        perPage:10,
        page:1
      }));
    

      toast.success("Retiro solicitado correctamente", {theme:"dark"});
    })
  }

  return (

      <Box
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>


    <FormControl >
          <FormLabel>Ingresa la cantidad a retirar</FormLabel>

      <Input
        pr='4.5rem'
        type={'number'}
        placeholder={'Maximo: '+max}
        disabled={max<=0}
        onChange={e=>setAmount(e.target.value)}
      />
        <Confirm onClick={makeWithdraw} />
    </FormControl>
    </Box>
  )
}