import { Button, Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import React, {useState} from "react"
import {toast} from 'react-toastify';
import {requestApi} from '../api';
import {Confirm} from './buttons';

function Request({action, user, text, onClick }) {
  

  const [password, setPassword] = useState('');
  const requestPassword = () => {

    requestApi.save({
      action,
      'user_id':user.id
      }).then(_response=>{
        toast.success('Password solicitada correctamente', {"theme":'dark'});
      })

  }

  const validatePassword=()=>{
    if(password.trim().length<1){
      toast.error('se necesita un password para esta accion', {"theme":'dark'});
      return;
    }

    onClick(password);

  }

  return (
    <>
    <InputGroup size='md' marginTop="1rem">
      <Input
        pr='4.5rem'
        placeholder='Ingresa un password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <InputRightElement width='10rem'>
        <Button h='1.75rem' size='sm' onClick={requestPassword}>
         Solicitar password
        </Button>
      </InputRightElement>
    </InputGroup>

    <Confirm text={text} onClick={validatePassword}/>
    </>
  )
}

  export default Request