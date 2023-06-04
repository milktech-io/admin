import React, {useState} from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import Payment from './payment';
import Withdraw from '../withdraw';

export default function Total() {
 
    const [data,setData] = useState({type_id:''});
    const onChange = (_data)=>{
        setData(_data);
    }
    return (<>    
    <SimpleGrid columns={2} spacing={10}>
        <Payment data={data}/>
      </SimpleGrid>
          <SimpleGrid  spacing={10}>
        <Withdraw onChange={onChange}/>
      </SimpleGrid>
      </>
      )

}
 