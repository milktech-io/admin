import {useState, useEffect} from 'react';
import { generateId, regenerateProduct } from '../../config/blockchain/market/actions';
import {Confirm} from '../buttons';
import { useMetaMask } from "metamask-react";


const ContractId = ({row, variant }) => {


    const { status } = useMetaMask();

  
  const [id, setId] = useState(row.contract_id);

  
  useEffect(()=>{
    setId(row.contract_id);
  }, [row])



  if (status !=='connected'){
    return <>''</>;
  }



  if (id) {
    return (<>{id}<br />
    <Confirm 
      title='Actualizar'
      icon="fa fa-undo"
      message={ 'Se actualizara este producto para su compra'} onClick={()=>regenerateProduct(row.price, row.name, row.contract_id)} />

    </>)
  }

  return  <Confirm 
    title='Generar contract id'
    text="Generar contract id"
    message={ 'Se registrara su contract id para su compra'} onClick={()=>generateId(row.price, row.id, row.name, variant, setId)} />
  
}

export default ContractId;
