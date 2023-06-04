import {  Input, FormControl, FormLabel, Select, Switch, Textarea  } from "@chakra-ui/react"
import React, {useState, useEffect, useRef} from "react"
import {Confirm} from '../buttons/';
import {toast} from 'react-toastify';
import MyEditor from './Editor';
import InputFile from './InputFile';

const Builder=({fields,message,onClick, validations=false})=> {
    
  let initialState=useRef({});

  const loadInitialState=()=>{
      let tempFields= initialState.current;
      for(let k in fields){
      tempFields[fields[k].name]=fields[k].defaultValue?.toString()||''
    }
    initialState.current=tempFields;
  }

  loadInitialState();

  const [data, setData] = useState(initialState.current);
  const [inputs, setInputs] = useState(fields);



  useEffect(()=>{
    setData(initialState.current);
    setInputs(fields);
  },[fields, initialState]);


  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const checkRequired=(field,invalid)=>{
    if(field.required){
      if((typeof data[field.name]) == 'string'){
        if(data[field.name].trim()===''){
          field.noValid=true;
          invalid=true;
          field.noValidMessage = 'Es requerido';
        }
      }
    }
    return {field, invalid};
  }

  const checkValidations = (field, invalid) =>{
    if (validations) {
      const test = validations[field.name] || false;
      if (test) {
        if (!test.fn(data[field.name])) {
          field.noValid=true;
          field.noValidMessage =test.message;           
        }
      }
    }
    return {field, invalid};
  }

  const handleClick = ()=>{

    let invalid =false;



    let newIinputs =inputs.map(field=>{

      let result = checkRequired(field, invalid);
      field = result.field;
      invalid= result.invalid;
 
      result = checkValidations(field, invalid);
      field = result.field;
      invalid= result.invalid;

      return field;
    })



    if(invalid){
      toast.error("Tienes algunos errores", {"theme":"dark"});
      setInputs(newIinputs);
    }
    else{
      let _data = {};

      for (let key in data) {
        if(data[key]!=="") {
          _data[key] = data[key];
        }
      }
      onClick(_data);
    }

  }

  const setFile = (e, field)=>{
    let _data = {target:{}};
    _data.target.name = field.name;
    _data.target.value = e.target.files[0];
    handleChange(_data);
  }





  const checkReadOnly = (field) =>  field.readonly? '(No se puede editar)' : '(Opcional)';
  const fieldOrEmpty = (field, empty='') => field || empty;
  const trueOrFalse = (field) => {
    if (field) {
      return parseInt(field);
    }

    return 0;
  }

    return (
      <>
        {
          inputs.map(field=>{
            const { name }= field;
            
            if(data[field.name]==null)
              return null;


            let formInput=(
              <Input key={'input'+field.name} placeholder={fieldOrEmpty(field.placeholder)} name={field.name} defaultValue={field.defaultValue || '' } value={data[name]} onChange={handleChange}/>
            )


            if(field.options)
              formInput=(
                    <Select key={'input'+field.name}  name={field.name}  defaultValue={fieldOrEmpty(field.defaultValue) } value={data[name]} onChange={handleChange}  fontFamily={'Syne'} fontSize={15} fontWeight={500} h={8} >
                        {field.options}
                    </Select>)

            if(field.readonly){
              formInput=<Input readOnly  disable key={'input'+field.name} placeholder={fieldOrEmpty(field.placeholder)} name={field.name} defaultValue={field.defaultValue || '' } value={data[name]}/>

            }

            if(field.file){
              formInput = (<InputFile 
                 key={'input'+field.name}
                 placeholder={fieldOrEmpty(field.file.placeholder, 'Selecciona un archivo')}
                 accept={fieldOrEmpty(field.file.accept , ['*'])}
                 onChange={(e)=>setFile(e,field)}
                />)

            }
 
            if(field.boolean){
              formInput=(
                <>
                <Switch
                    key={'input'+field.name}
                    name={field.name}
                    defaultChecked={trueOrFalse(data[field.name])}
                    onChange={(e)=>{
                      e.target.value=e.target.checked?1:0
                      handleChange(e)
                    }}
                  />
                  </>
              )
            }

            if(field.editor){
              formInput= <MyEditor key={'input'+field.name} name={field.name}  value={data[name]}  onChange={handleChange}/>
            }

            if(field.number){
              formInput=<Input type="number" min={fieldOrEmpty(field.min)} key={'input'+field.name} placeholder={fieldOrEmpty(field.placeholder)} name={field.name} defaultValue={fieldOrEmpty(field.defaultValue) } value={data[name]} onChange={handleChange}/>

            }

            if(field.date){
              formInput=<Input type="date"   key={'input'+field.name} placeholder={fieldOrEmpty(field.placeholder)} name={field.name} defaultValue={fieldOrEmpty(field.defaultValue) } value={data[name]} onChange={handleChange}/>

            }

            if(field.textarea){
              formInput=<Textarea   key={'input'+field.name} placeholder={fieldOrEmpty(field.placeholder)} name={field.name} defaultValue={fieldOrEmpty(field.defaultValue) } value={data[name]} onChange={handleChange}/>
            }



              return(
                <FormControl key={'formcontrol-'+field.name}>
                    <FormLabel  style={{marginTop:"1rem"}} key={'formlabel-'+field.name}>{fieldOrEmpty(field.label)} {field.required ? '*' : checkReadOnly(field)} </FormLabel>
                    {formInput}
                    {field.noValid && <small key={'small'+field.name} style={{color:"red"}}>{field.noValidMessage}</small>}
                </FormControl>
                )

            })
        }

        <Confirm title='Guardar' text="Guardar" message={fieldOrEmpty(message,'Guardar los cambios al registro')} onClick={handleClick} />


      </>
    )
  }
export default Builder