import {
  Stack,
  Button,
  Select,
  useDisclosure
} from "@chakra-ui/react";
import React, {useState}  from "react";
import { getVotesAsync, deleteVoteAsync } from "../../../redux/community/actions";
import DataTables from '../../../components/Datatable';
import {Create} from './create';
import {Show} from './show';
import {Delete} from '../../../components/buttons';
import moment from 'moment';
import {voteApi} from '../../../api';
import {toast} from 'react-toastify';

export default function Votes() {

 

  const [vote, setVote] = useState(false);
    const disclousure = useDisclosure();

  const selectable = (state)=>(state.community.votes);


  const deleteDispatch =(row_id)=>{
    return  deleteVoteAsync(row_id);
  }

  const columns = (row)=>{

    const abrirVotos=()=>{
      setVote(row.id);
      disclousure.onOpen();

    }

    const changeStatus = (e)=>{
      voteApi.update(row.id, {
        ...row,
        status:e.target.value
      }).then(_res=>{
        toast.success('Actualizado correctamente', {"theme":"dark"})
      })

    }
    return {
      img: <img alt='' src={row.image} width="50px"/>,
      title:  row.title,
      status: <Select  defaultValue={row.status} onChange={changeStatus}>
        <option value="activo">Activo</option>
        <option value="cerrado">Cerrado</option>
        <option value="completado">Completado</option>
        <option value="inactivo">Inactivo</option>

      </Select>,
      Minimo_de_participantes: row.minimum_participations,
      Fin_de_periodo:  moment(row?.date_end || 'Y-m-d').format('YYYY-MM-D'),
      total_votos: row.participations_count,
      opciones:(
        <div>
        <Button onClick={abrirVotos} >Resultados </Button>
          <Delete id={row.id} dispatchable={deleteDispatch}/>
        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getVotesAsync({
      ...query,
      'with':'myVote'
    });
  } 




  return (
    <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>
        
        <Create />
 
        <Show  vote_id={vote} disclousure={disclousure} />
        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de encuestas'
        />
      
    </Stack>
  );
}
