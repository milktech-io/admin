import {  Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { getMultipliersAsync } from '../../../redux/multiplier/actions';
import {Edit, Show} from '../../../components/buttons';
import DataTables from '../../../components/Datatable';
import {useNavigate} from 'react-router-dom'

export default function Multiplier(){

 

  const navigate = useNavigate();

  const dispatchable=(query)=>{
    return getMultipliersAsync({
      ...query,
      select:'id,name,slug,sold,variant',
      with:'logo',
      multiplier:1
    });
  } 




   const selectable = (state)=>(state.multiplier.multipliers);



      const columns = (row)=>{

        const navigateInfinity = ()=>navigate(`/multiplicadores/${row.id}/infinity`);
        const navigatePlans = ()=>navigate(`/multiplicadores/${row.id}/planes`);

        const navigatePlanes=()=>{
          if(row.slug==='infinity') {
            return <Button onClick={navigateInfinity} >Ver planes</Button>
          } else {
            return <Button onClick={navigatePlans} >Ver planes</Button>
          }
        }

        return {
          img:  row.logo ? <img width="100px" alt='' src={row.logo[0]?.image || ''} />:'',
          name : row.name,
          slug : row.slug,
          sold: row.sold || 0,
          stock: row.stock || 'Sin limite',
          planes: navigatePlanes(),
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
              title='Gestion de multiplicadores'
            />
            
        </Stack>

       

    )
}