import {
  Stack
} from "@chakra-ui/react";
import React  from "react";
import { Create } from "./Create";
import { getCategoriesAsync, deleteCategoryAsync } from "../../redux/category/actions";
import DataTables from '../../components/Datatable';
import { Edit, Delete} from '../../components/buttons';

export const Categories = () => {

  const deleteDispatch =(row_id)=>{
    return  deleteCategoryAsync(row_id);
  }


  const selectable = (state)=>(state.category.categories);

  const columns = (row)=>{
    console.log(row.rangue)
    return {
      img:  row.image ? <img alt='' src={row.image} />:'',
      nombre : row.name,
      slug : row.slug,
      se_muestra: row.active ? 'Si' : 'No',
      opciones:(
        <div>
          <Edit route={`/categorias/${row.id}/editar`} />
          <Delete id={row.id} dispatchable={deleteDispatch}/>

        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getCategoriesAsync({
      ...query,
      select:'id,image_url,slug,name,active'
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
