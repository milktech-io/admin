import {
  Stack
} 
from "@chakra-ui/react";
import React from "react";
import { getRolesAsync } from "../../redux/role/actions";
import DataTables from '../../components/Datatable';

export const Roles = () => {

  const selectable = (state)=>(state.role.roles);

  const columns = (row)=>{
    return {
      nombre : row.name,
      Editable : row.edit?'Si':'-',
    }
  } 

  const dispatchable=(query)=>{
    return getRolesAsync({
      ...query,
    });
  } 



  return (
    <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>
        
        {/*<Create />*/}
        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de roles'
        />
    
    </Stack>
  );
};
