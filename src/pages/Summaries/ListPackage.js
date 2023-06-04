import React , {useEffect, useState, useCallback} from 'react';
import {summaryApi} from '../../api';
import moment from 'moment';
import {toast} from 'react-toastify';
import { Table, TableCaption, Thead, Tr, Th, Td, Input,SimpleGrid, Button} from '@chakra-ui/react'




export default function ListPackage () {


    const [start, setStart] = useState(moment().startOf('week').toISOString().split('T')[0]);
    const [end, setEnd] = useState(moment().toISOString().split('T')[0]);
    
    const [sells, setSells] = useState([]);


   const handleStart= (e)=>{
        setStart(e.target.value.toString())

    }

    const handleEnd= (e)=>{
        setEnd(e.target.value.toString())
    }

    const onSearch = useCallback(()=>{

      summaryApi.listPackages(start,end).then(res=>{
        setSells(res.data.data)

      })  

      toast.info("...Buscando",{"theme":"dark",autoClose:1000})

    }, [end, start]);

    useEffect(()=>onSearch(),[onSearch]);
 
const renderTable=()=>{

  const _rows = sells.map((row,index) => (
        <Tr key={'tbody-tr-'+index}>
          <Td key={'tbody-tr-td-1'}>{row.purchase_id}</Td>
          <Td key={'tbody-tr-td-2'}>{row.username}</Td>
          <Td key={'tbody-tr-td-3'}>{row.product}</Td>
          <Td key={'tbody-tr-td-4'}>{row.plan}</Td>
          <Td key={'tbody-tr-td-5'}>{row.free? 'Si': 'No'}</Td>
          <Td key={'tbody-tr-td-6'}>{row.price}</Td>
          <Td key={'tbody-tr-td-7'}>{row.date}</Td>
          <Td key={'tbody-tr-td-8'}>{row.end_date}</Td>
          <Td key={'tbody-tr-td-9'}>{row.profit}</Td>
          <Td key={'tbody-tr-td-10'}>{row.balance}</Td>
          <Td key={'tbody-tr-td-11'}>{row.withdraw}</Td>
        </Tr>
    ))

    if (_rows.lengh<1) {
        _rows.push(<Tr><Td>No hay informacion</Td></Tr>)
    }
    toast.success("Informacion obtenida",{"theme":"dark",autoClose:1000})

    return _rows;
}
 

  return (
    <>
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



            <Table variant='simple'>
                <TableCaption
                    color={'brand.initialBackground'}
                    fontSize={12}
                    fontWeight={'500'}
                  >Lista de paquetes</TableCaption>
                <Thead>
                    <Tr>
                        <Th  key={'thead-tr-1'}>ID Compra</Th>
                        <Th  key={'thead-tr-2'}>Username</Th>
                        <Th  key={'thead-tr-3'}>Producto</Th>
                        <Th  key={'thead-tr-4'}>plan</Th>
                        <Th  key={'thead-tr-5'}>Gratis</Th>
                        <Th  key={'thead-tr-6'}>Precio</Th>
                        <Th  key={'thead-tr-7'}>Fecha compra</Th>
                        <Th  key={'thead-tr-8'}>Fecha fin</Th>
                        <Th  key={'thead-tr-9'}>Generado</Th>
                        <Th  key={'thead-tr-10'}>Retirado</Th>
                        <Th  key={'thead-tr-11'}>A favor</Th>
                    </Tr>
                </Thead>
                <tbody>
                  { sells && renderTable()}
                </tbody>
            </Table>
      </>
    )
}
