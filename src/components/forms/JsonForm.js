import { Input, FormControl, FormLabel } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {Confirm} from '../buttons';

export default function JsonForm({ json='[]', onSave }){


  const [inputs, setInputs] = useState([]);
  const [data,setData] = useState({});

  useEffect(()=>{
    let array  = JSON.parse(json);
    
    let inputsVal = [];
    let dataVal = {};
    for (let k in array){
      inputsVal.push({
        name:k,
        value:array[k]
      })
      dataVal[k]=array[k];

    }

    setData(dataVal);
    setInputs(inputsVal)

  },[json])

  const onChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onClick=()=>{
    onSave(data);
  }

  return (
    <>
      {inputs.map(input=>(
        <>
         <FormControl key={'formcontrol-'+input.name}>
            <FormLabel style={{marginTop:"1rem"}} key={'formlabel-'+input.name}>{input.name.replaceAll('_',' ')}</FormLabel>
            <Input name={input.name} defaultValue={input.value} 
              onChange={onChange} />
          </FormControl>

        
        </>
      ))}

      <Confirm text="Guardar" onClick={onClick}/>

    </>
  )
}
