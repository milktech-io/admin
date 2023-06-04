import React from 'react'
import { getChaincropAsync } from '../../redux/product/actions';
import {Edit, Show} from '../../components/buttons';
import ContractId from '../../components/blockchain/ContractId';
import DataTables from '../../components/Datatable';
import {useParams} from 'react-router-dom';
import {  Stack, Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';


export const Chaincrop = () => {

  const navigate = useNavigate();

  const {id} = useParams();

 const dispatchable=(query)=>{
    return getChaincropAsync({
      product_id:id,
      ...query,
    });
  } 


   const selectable = (state)=>(state.product.chaincrop.stocks);

      const columns = (row)=>{
        return {
          img:  row.image ? <img width="100px" alt='' src={row.image || ''} />:'',
          name : row.name,
          price : `$ ${row.price} ${row.currency}`,
          stock: row.stock ,
          contract_id:  <ContractId row={row} variant='chaincrop'/>  ,
          _: <Button onClick={()=>navigate('/crop/'+row.id+'/detalles')}>Detalles</Button>,

          opciones:(
            <div>
              <Edit route={`/crop/${row.id}/editar`} />
              <Show route={`/crop/variante/${row.id}`} />
      
            </div>
          )

        }
      } 

    return (
        <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         

            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de Acciones'
            />
            
        </Stack>

       

    )
}