import {  Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { getStaticsAsync } from '../../../redux/static/actions';
import {Edit, Show} from '../../../components/buttons';
import DataTables from '../../../components/Datatable';
import {useNavigate} from 'react-router-dom'
import Create from './create';

export default function StaticProduct({data:{slug='statics'}}){


  console.log(slug);
 

  const navigate = useNavigate();

  const dispatchable=(query)=>{
    return getStaticsAsync({
      ...query,
      select:'id,name,slug,sold,variant',
      with:'logo',
      slug,
      static:1
    });
  } 




   const selectable = (state)=>(state.staticProduct.statics);



      const columns = (row)=>{

        let collectives = {}

        if(slug==='collective') {
          collectives = {
            configuracion: <Button onClick={()=>navigate(`/colectivos/${row.id}/configuracion`)} >Ver configuracion</Button>
          }
        }
        return {
          img:  row.logo ? <img width="100px" alt='' src={row.logo[0]?.image || ''} />:'',
          name : row.name,
          slug : row.slug,
          sold: row.sold || 0,
          stock: row.stock || 'Sin limite',
          planes: <Button onClick={()=>navigate(`/estaticos/${row.id}/variantes`)} >Ver variantes</Button>,
          ...collectives,
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

            <Create slug={slug} route='estaticos/crear' title="Crear producto estatico" />
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de productos estaticos'
            />
            
        </Stack>

       

    )
}