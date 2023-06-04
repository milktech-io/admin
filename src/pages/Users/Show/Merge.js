/* eslint-disable react-hooks/exhaustive-deps */
import { Stack} from '@chakra-ui/react'
import { getMergesAsync } from '../../../redux/merge/actions'
import DataTables from '../../../components/Datatable';
import moment from 'moment';
import {useParams} from 'react-router-dom';

export const Merges = () => {
  const {id} = useParams();


  const selectable = (state)=>(state.merge.merges);

  const columns = (row)=>{
    return {
      fecha_de_solicitud: row?.created_at && moment(row?.created_at).format('Y-m-d H:m'),
      ultima_modificacion:  row?.updated_at && moment(row?.updated_at).format('Y-m-d H:m'),
      status: row?.status,
      usuario:row?.user?.username,
      usuario_a_mergear:row?.user_merge?.username
    }
  } 

  const dispatchable=(query)=>{
    return getMergesAsync(id, {
      ...query,
      with:'user:id,username|user_merge:id,username'
    });
  } 



    return (
      <Stack style={{ display: 'flex', flexDirection: 'columns' }} bg={'white'} h={'100%'}>


        {
          id && <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de usuarios'
        />
        }
      


      </Stack>
    )
  
}