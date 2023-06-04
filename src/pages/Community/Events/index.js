import {
  Stack
} from "@chakra-ui/react";
import React  from "react";
import { getEventsAsync, deleteEventAsync } from "../../../redux/community/actions";
import DataTables from '../../../components/Datatable';
import {Create} from './create';
import {Delete, Show} from '../../../components/buttons';

export default function Events() {


  const selectable = (state)=>(state.community.events);


  const deleteDispatch =(row_id)=>{
    return  deleteEventAsync(row_id);
  }

  const columns = (row)=>{

 
    return {
      img: <img alt='' src={row.image} width="50px"/>,
      title:  row.title,
      opciones:(
        <div>
          <Show route={`/noticias/${row.id}`} /> 
          <Delete id={row.id} dispatchable={deleteDispatch}/>
        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getEventsAsync({
      ...query,
      select:'id,title,image_url',
    });
  } 




  return (
    <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>
        
        <Create />
 
        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de retos'
        />
      
    </Stack>
  );
}
