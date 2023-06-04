import React from 'react'
import {  Stack, Button } from '@chakra-ui/react'
import { getProductsAsync } from '../../../redux/product/actions';
import {Edit, Show} from '../../../components/buttons';
import DataTables from '../../../components/Datatable';
import {useNavigate} from 'react-router-dom';

export default function Products() {

 
  const navigate = useNavigate();

  const dispatchable=(query)=>{
    return getProductsAsync({
      ...query,
      select:'id,name,slug,sold,variant',
      with:'logo',
      multiplier:0,
      static:0,
    });
  } 
   const renderPlanPage = (row) =>{
    if(row.slug==='newland'){
      return <Button onClick={()=>navigate('/newland')}>Residencias</Button>
    }
    if(row.slug.includes('crop')){
      return <Button onClick={()=>navigate('/crop/'+row.id)}>{row.slug}</Button>
    }

  }

   const renderDetalles = (row) =>{
    if(row.slug==='newland'){
      return <Button onClick={()=>navigate('/newland/detalles')}>Detalles</Button>
    }
    
    return <></>
   }

   const selectable = (state)=>(state.product.products);


      const columns = (row)=>{



        console.log(row.rangue)
        return {
          img:  row.logo ? <img alt="" width="100px" src={row.logo[0]?.image || ''} />:'',
          name : row.name,
          slug : row.slug,
          sold: row.sold || 0,
          stock: row.stock || 'Sin limite',
          planes: renderPlanPage(row),
          _: renderDetalles(row),
          opciones:(
            <div>
              <Show route={`/productos/${row.id}`} />
              <Edit route={`/productos/${row.id}/editar`} />
        
            </div>
          )

        }
      } 


    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>  


            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de productos'
            />
            
        </Stack>

       

    )
}