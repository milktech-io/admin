import {
  Stack
} from "@chakra-ui/react";
import React  from "react";
import { Create } from "./Create";
import { getTranslationsAsync, deleteTranslationAsync } from "../../redux/translation/actions";
import DataTables from '../../components/Datatable';
import { Edit, Delete} from '../../components/buttons';

export const Translation = () => {

  const deleteDispatch =(row_id)=>{
    return  deleteTranslationAsync(row_id);
  }


  const selectable = (state)=>(state.translation.translations);

  const columns = (row)=>{
    return {
      nombre : row.name_long,
      key : row.name_short,
      opciones:(
        <div>
          <Edit route={`/traducciones/${row.id}/editar`} />
          <Delete id={row.id} dispatchable={deleteDispatch}/>

        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getTranslationsAsync({
      ...query
    });
  } 




  return (
    <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>
        
       <Create />

        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de categorias'
        />
      
    </Stack>
  );
};
