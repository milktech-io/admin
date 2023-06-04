import React, {useState, useEffect} from 'react';
import {Input, SimpleGrid, Button } from '@chakra-ui/react'
import NewUsers from './NewUsers';
import Sells from './Sells';
import TotalPackages from './TotalPackages';
import Packages from './Packages';
import Ranges from './Ranges';
import UsersWallet from './UsersWallet';
import UsersPackage from './UsersPackage';
import Sponsors from './Sponsors';
import moment from 'moment';
import {toast} from 'react-toastify';
import {summaryApi} from '../../api';



export const Summaries = () => {

    const [start, setStart] = useState(moment().startOf('week').toISOString().split('T')[0]);
    const [end, setEnd] = useState(moment().toISOString().split('T')[0]);
    
    const [searchStart, setSearchStart] = useState(moment().startOf('week').toISOString().split('T')[0]);
    const [searchEnd, setSearchEnd] = useState(moment().toISOString().split('T')[0]);

    const [sells, setSells] = useState([]);


    const handleStart= (e)=>{
        setSearchStart(e.target.value.toString())

    }

    const handleEnd= (e)=>{
        setSearchEnd(e.target.value.toString())
    }

    const onSearch = ()=>{
        setStart(searchStart);
        setEnd(searchEnd);
        toast.info("...Buscando",{"theme":"dark",autoClose:1000})

    }

     useEffect(()=>{

     start && end &&  summaryApi.allSells(start, end).then(response=>{
        setSells(response.data.data)
     })

  },[start,end]);


    return <div >
    <SimpleGrid columns={3} spacing={10}>
        <Input
         placeholder="Select Date and Time"
         size="md"
         type="date"
        onChange={handleStart}
        defaultValue={start}

        />
                <Input
         placeholder="Select Date and Time"
         size="md"
         defaultValue={end}
         type="date"
         onChange={handleEnd}
        />

        <Button onClick={onSearch}>Buscar</Button>
        </SimpleGrid>

    <SimpleGrid marginTop="16px" columns={3} spacing={10} >
        <NewUsers start={start} end={end}/>
        <Sells start={start} end={end}/>
     <TotalPackages start={start} end={end}/> 
    </SimpleGrid>    
    <SimpleGrid marginTop="16px" columns={4} spacing={10} >
        <Ranges start={start} end={end}/>
        <Sponsors start={start} end={end}/>
                <UsersWallet />
        <UsersPackage />
    </SimpleGrid>

    <h1 style={{marginTop:40,marginBottom:40, fontSize:20}}><b>Ventas por paquetes</b></h1>
    <SimpleGrid marginTop="16px" columns={4} spacing={10} >

        {sells.map((info,index)=><Packages key={index} info={info} />)}
    </SimpleGrid>

    </div>
}
 