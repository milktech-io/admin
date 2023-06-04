import React, {useState, useEffect} from 'react';
import Stat from './stat';
import { useMetaMask } from "metamask-react";
import {withdrawApi} from '../../../api';
import {Confirm} from '../../../components/buttons';
import {makePayment} from '../../../config/blockchain/payment/actions';
import {toast} from 'react-toastify';

export default function Payment({data}) {
    const { status } = useMetaMask();

    const [total, setTotal] = useState(0);
    const [validated, setValidated] = useState({});
  useEffect(()=>{
        let _validated = data;
        for (let k in _validated) {
            if(_validated[k].trim()==='') {
                delete _validated[k]
            }

        }
        setValidated(_validated);
    }, [data])

    useEffect(()=>{
        withdrawApi.total(validated).then(res=>{
            setTotal(res.data.data);
        })
    }, [validated])


    const payment = ()=>{

        if(validated.status !=='Pendiente') {
            toast.error('Solo se puede retirar pendientes', {"theme":"dark"});
            return;
        }
        

        withdrawApi.payments(validated).then(response=>{

            response = response.data.data;

            if (response.length<1) {
               toast.info("No hay retiros o bonos listos para ser entregados", {"theme":"dark"})
               return;
            }

            let wallets = [];
            let amounts = [];

            response.map(withdraw=>{
                wallets.push(withdraw['wallet']);
                amounts.push(withdraw['total']);
                return withdraw;
            })

  
            makePayment(response, wallets, amounts).then(()=>{
                toast.success('Pagos generados correctamente', {"theme":"dark"});

            }).catch(error=>{
                console.error(error);
                toast.error('Hubo un error inesperado', {"theme":"dark"});
            })

        })

    }

    return <>
        <Stat 
            data={total }
            label="Total a pagar"
        />
        {status==='connected' && data.status==='Pendiente' && <Confirm text="Confirmar pagos" onClick={payment}/>}
      </>

}
 