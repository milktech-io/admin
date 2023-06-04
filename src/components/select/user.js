import {  FormControl, FormLabel, Input, Select} from '@chakra-ui/react'
import React, { useState } from 'react'
import { userApi } from '../../api';


const styleInput= {
  display:'flex',
  marginBottom:'5px'

}

export default function User({onChange}){

    const [users, setUsers] = useState([]);
    const [timer, setTimer] = useState(null)


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


      const selectUser = (e)=>{
        onChange(e.target.value)
      }
  

    return (
          <FormControl>
             <FormLabel>Selecciona un usuario</FormLabel>     

                    <div style={styleInput} >
                      <Input style={{marginRight:'5px'}} placeholder="Busca un usuario" onKeyUp={searchChanged} />
                    </div>
                    <Select onChange={selectUser}>
                      <option disabled selected>Selecciona un usuario</option>
                      {users.map(user=><option key={user.id} value={user.id}>{user.username} | {user.email}</option>)}
                    </Select>
                </FormControl>

        )

}
