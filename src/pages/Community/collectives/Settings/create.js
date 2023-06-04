/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Modal, OpenModal} from '../../../../components/Modal';
import Builder from '../../../../components/forms';
import { saveConfigAsync } from '../../../../redux/static/actions';
import { useDispatch } from 'react-redux';
import {rangeApi} from '../../../../api';

const Create = ({product_id}) => {

 
  const disclousure = useDisclosure()
  const dispatch = useDispatch();
  const [fields,setFields]= useState([]);
  const [ranges, setRanges] = useState([]);  
  useEffect(()=>{
    rangeApi.get().then(res=>{
      setRanges(res.data.data);
    })
  },[])

  useEffect(()=>{

      if(ranges.length){

        let _ranges = ranges.map(range=>{
          if(range.number==null) {
            range.number=-1;
          }
          return range;
        })

        setFields([
        {
          name:'title',
          label:'Titulo',
          defaultValue:'Configuracion descuento',
          required:true
        },
        {
          name:'min_buyers',
          label:'Minimo de compradores',
          defaultValue:0,
          required:true
        },      
        {
          name:'max_buyers',
          label:'Maximo de compradores',
          defaultValue:'',
          required:true
        },
        {
          name:'max_pieces',
          label:'Maximo de piezas disponibles',
          defaultValue:'',
          required:true
        },

        {
          name:'min_rangue',
          label:'Rango minimo',
          defaultValue:_ranges[0].number,
          required:true,
          options: _ranges.map(range=><option value={range.number}>{range.name}</option>)
        },
      ])
    }

  },[ranges]);

 


  const savesSetting = (data)=>{
    data['product_id']= product_id
    dispatch(saveConfigAsync(data));
  }

    return (
     <>
       
       <OpenModal disclousure={disclousure}/>

       <Modal
         isOpen={disclousure.isOpen}
         onClose={disclousure.onClose}

        >
        <Builder fields={fields}   message='Crear configuracion' onClick={savesSetting} />
         
       </Modal>
        
     </>
    )
  
}



export default Create;