import { Box,  FormControl, FormLabel, Input, Select} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { userApi } from '../../../api';
import {toast} from 'react-toastify';
import {Confirm} from '../../../components/buttons';


const styleInput= {
  display:'flex',
  marginBottom:'5px'

}

export default function Sponsor({sponsor_id}){

    const { id } = useParams()
    const [sponsor, setSponsor] = useState(false);
    const [sponsorActual, setSponsorActual] = useState({});
    const [users, setUsers] = useState([]);
    const [timer, setTimer] = useState(null)


    useEffect(()=>{
        sponsor_id && userApi.show(sponsor_id).then(res=>{
            setSponsorActual(res.data.data);
        })

    },[sponsor_id])

    const searchChanged = e => {
        clearTimeout(timer)

        const newTimer = setTimeout(() => {
          searchUsers(e.target.value)
        }, 1000)

        setTimer(newTimer)
    }

      const searchUsers = (search)=>{
        search.trim()!=='' && userApi.get({
          s:search
        }).then(response=>{
          setUsers(response.data.data);
        })
      }


    const saveSponsor = ()=>{
       
        userApi.updateSponsor(id,{
            sponsor_id:sponsor
        }).then(response=>{

            let sponsorSeleccionado = users.filter(u=>u.id===sponsor)[0]
            setSponsorActual(sponsorSeleccionado);
            toast.success(response.data.msg, {"theme":"dark"});
        })

    }

      const selectUser = (e)=>{
        setSponsor(e.target.value)
      }
  

    return (
    
            <Box p={5} shadow='md' borderWidth='1px' >
                  <FormLabel>Cambiar sponsor</FormLabel>     
                <p>Sponsor Actual username: <b>{sponsorActual.username}</b></p>
                <p>Sponsor Actual email: <b>{sponsorActual.email}</b></p>
                <br/>
                               <FormControl>
                    <div style={styleInput} >
                      <Input style={{marginRight:'5px'}} placeholder="Busca un usuario" onKeyUp={searchChanged} />
                    </div>
                    <Select onChange={selectUser}>
                      <option disabled selected>Selecciona un usuario</option>
                      {users.map(user=><option value={user.id}>{user.username} | {user.email}</option>)}
                    </Select>
                </FormControl>

                <Confirm enabled={sponsor} onClick={saveSponsor} text="Guardar sponsor" />
            </Box>     
        )

}
