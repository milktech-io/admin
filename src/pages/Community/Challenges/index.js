import {
  Stack
} from "@chakra-ui/react";
import React  from "react";
import { getChallengesAsync, deleteChallengeAsync } from "../../../redux/community/actions";
import DataTables from '../../../components/Datatable';
import {Create} from './create';
import {Delete, Show} from '../../../components/buttons';
import moment from 'moment';

export default function Challenges() {


  const selectable = (state)=>(state.community.challenges);


  const deleteDispatch =(row_id)=>{
    return  deleteChallengeAsync(row_id);
  }

  const columns = (row)=>{

 
    return {
      img: <img alt='' src={row.image} width="50px"/>,
      title:  row.title,
      Fin_de_periodo:  moment(row?.date || 'Y-m-d').format('YYYY-MM-D'),
      opciones:(
        <div>
        <Show route={`retos/${row.id}`} /> 
           <Delete id={row.id} dispatchable={deleteDispatch}/>
        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getChallengesAsync({
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
          title='Gestion de retos'
        />
      
    </Stack>
  );
}
