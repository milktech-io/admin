import {  Stack, Badge, Button, Text} from '@chakra-ui/react'
import React from 'react'
import { getPurchasesAsync } from '../../redux/purchase/actions';
import {Show} from '../../components/buttons';
import DataTables from '../../components/Datatable';
import { Create } from './Create';
import {useParams, useNavigate} from 'react-router-dom';


export const Purchases = () => {

 
    const {id} = useParams();
    const navigate = useNavigate();

  const dispatchable=(query)=>{

    if (id!= null) {
       return getPurchasesAsync({
      ...query,
      user_id:id,
      with:'product:id,name,variant,category_id|product.logo|product.category:id,name'
    });
    }
    return getPurchasesAsync({
      ...query,
      with:'product:id,name,variant,category_id|product.logo|product.category:id,name'
    });
  } 




   const selectable = (state)=>(state.purchase.purchases);

      const columns = (row)=>{
        console.log(row.rangue)
        return {
          img: <img alt='' src={row.product?.logo && row.product.logo[0]?.image} width="200px"/>,
          '': row.free? <Badge>Free</Badge>:'',
          producto: row.product.name,
          categoria: row.product?.category?.name,
          cliente: row.user?.fullName,
          variante: row.detail?.name,
          cantidad: row.sold || 0,
          precio: `$ ${row.price} ${row.currency}`,
          Pagado: `$ ${row.total} ${row.currency}`,
          fecha: new Date(row.created_at).toLocaleString(),
          status:row.status,
          transaccion_hash: row?.transaction?.transaction_hash,
          opciones:(
            <div>
              <Show route={`/ventas/${row.id}`} />        
            </div>
          )

        }
      } 


    return (
      <>
        <Stack  style={{ display: "flex", flexDirection: "row", marginBottom:16 }} bg={"white"}>         


            { !id && <Create  /> }
            { !id &&  <div><Button
            bg={"brand.initialBackground"}
            width={240}
            height={9}
            marginTop={-2}
            marginLeft={2}
            alignItems={"center"}
            onClick={()=>navigate('/ventas/nueva')}
          >
            <Text
              fontFamily={"Syne"}
              color={"brand.white"}
              fontSize={14}
              fontWeight={"700"}
            >
              Registrar compra
            </Text>

          </Button>
          </div>

          }
        </Stack>

        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>         

            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de ventas'
            />
            
        </Stack>

        </>

       

    )
}