/* eslint-disable react-hooks/exhaustive-deps */
import { Stack , Button, SimpleGrid, Select,FormControl, FormLabel} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import DataTables from '../../../components/Datatable';
import {getWithdrawsAsync} from '../../../redux/withdraw/actions';
import moment from 'moment';
import {useNavigate, useParams} from 'react-router-dom';
import {withdrawApi} from '../../../api';
import {toast} from 'react-toastify';


export default function Withdraw ({onChange=null}) {

    const [types, setTypes] = useState([]);
    const [type, setType] = useState('');



    const [statuses] = useState(['Pendiente', 'Completado', 'Cancelado']);
    const [status, setStatus] = useState('');
    const [fire, setFire] = useState(1);


    useEffect(()=>{ 
        setStatus('Pendiente')
    }, [])

    useEffect(()=>{ 
        setFire(fire+1)
    }, [status,type])

    useEffect(()=>{
        withdrawApi.types().then(res=>{
            setTypes(res.data.data)
        })
    },[])

    useEffect(()=>{ onChange && onChange({
      type_id:type,
      status
    })},[type,status])


  const {id} = useParams();

  const navigate = useNavigate();  

  const selectable = (state)=>(state.withdraw.withdraws);

  const cancel = (row_id) =>{
    withdrawApi.cancel(row_id).then(_res=>{
        toast.success('cancelado correctamente', {"theme":"dark"});
        onChange({
          type_id:type,
          status
        })
        setFire(fire+1)
    })
  }
  const complete = (row_id) =>{
    withdrawApi.complete(row_id).then(_res=>{
        toast.success('Completado correctamente', {"theme":"dark"});
        onChange({
          type_id:type,
          status
        })
        setFire(fire+1)
    })
  }
  const columns = (row)=>{

    let Buttons = [];

    if(!id) {

        if(row.status==='Pendiente') {
            Buttons.push(<i onClick={()=>cancel(row.id)} style={{ margin:10, fontSize:20, cursor:'pointer', color:'red'}}className="fas fa-times"></i>)
            Buttons.push(<i onClick={()=>complete(row.id)} style={{ margin:10, fontSize:20, cursor:'pointer', color:'green'}}className="fas fa-check"></i>)

        }


    }
    return {
     retiro : row?.withdraw,
     moneda : row?.currency,
     estatus: row?.status,
     Tipo: row?.transaction_type_name,
     Porcentaje: row?.porcent? <>{row.porcent* 100}% <i onClick={()=>navigate('/ventas/'+row.purchase_id)} className="fa fas fa-store"></i> </> : '-',
     Rango: row?.range_name,
     fecha : moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
     usuario: <Button onClick={()=>navigate('/usuarios/'+row.user_id)} >{row.username}</Button>,
      _: Buttons
    }
  } 


  const dispatchable=(query)=>{

    let data = {
      ...query
    }
    if (id!== null) {
      data = {
        ...data,
        user_id:id,
      }
    }

    if (status!=='') {
      data = {
        ...data,
        status,
      }
    }

    if (type!=='') {
      data = {
        ...data,
        type_id:type,
      }
    }

    return getWithdrawsAsync(data);
  } 



  const download= ()=>{

    let data = {};


    if (type.trim().length) {
        data['type_id']=type
    }
 
    if (status.trim().length) {
        data['status']=status
    }   

    if (id && id.trim().length) {
        data['id']=id
    }   

    withdrawApi.download(data).then(res=>{
        const b64 = res.data.data;
        const mediaType="data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
        const href = mediaType+b64;
        window.open(href, "_blank");
    })
  }
  return (
    <Stack style={{ display: 'flex', flexDirection: 'column', justifyContent:'end' }} bg={'white'}>
         <SimpleGrid columns={3} spacing={10}>
        <FormControl >
            <FormLabel  style={{marginTop:"1rem"}} >Elige el tipo de retiro</FormLabel>
            <Select onChange={(e)=>setType(e.target.value)}>
            <option value=''>Ver todo</option>
                {types.map(option=><option key={option.id} value={option.id}>{option.name}</option>)}
            </Select>
        </FormControl>        

        <FormControl >
            <FormLabel  style={{marginTop:"1rem"}} >Elige el status</FormLabel>
            <Select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value=''>Ver todo</option>
                {statuses.map(option=><option  key={option} value={option}>{option}</option>)}
            </Select>
        </FormControl> 


        <FormControl >
            <FormLabel  style={{marginTop:"1rem"}} >Descargar</FormLabel>
            <Button onClick={download}>Descargar excel</Button>
        </FormControl>         
    </SimpleGrid>
    <br />

     <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          fire={fire}
          selectable={selectable}
          title='Lista de retiros'
      />
    </Stack>  
  )
}
