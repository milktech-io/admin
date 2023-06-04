import React, { Fragment,useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Text, TableContainer, Table, TableCaption, Thead, Tr, Th, Td, Input } from '@chakra-ui/react'
import useOrder from './useOrder';
import { Pagination  } from '@mui/material'
import "./styles.css";

const DataTables = ({columns,dispatchable,selectable,title='Lista',fire=true}) =>  {

    const dispatch = useDispatch();
    const goDispatch = useRef(dispatchable);

    useEffect(()=>{ goDispatch.current= dispatchable},[dispatchable])

    const data = useSelector(selectable);
    let [search,setSearch] = useState('');
 
    const [rows, setRows] = useState([]);
    const [thead, setThead] = useState([]);
    const [numberPage, setNumberPage] = useState(1)
    const [timer, setTimer] = useState(null)
    let {makeOrder} = useOrder(rows,setRows);

    const searchChanged = e => {
        clearTimeout(timer)

        const newTimer = setTimeout(() => {
          setSearch(e.target.value)
        }, 1000)

        setTimer(newTimer)
    }

    

    useEffect(()=>{
        let query = {}
        if(numberPage)
            query.page=numberPage;

        if(search.trim()!=='')
            query.s=search.trim();

        fire && dispatch(goDispatch.current(query));
    },[numberPage,search,fire, dispatch, goDispatch]);



    useEffect(()=>{

        if(data.data!==undefined){
            let dataMapped = data.data?.map(columns) || [];
            let heads =[]

            for(let k in dataMapped[0]){
                heads.push({
                    key: k.toString().replaceAll(' ',"_"),
                    name: k.toString().toUpperCase().replaceAll('_'," "),
                })
            }

            setThead(heads);
            setRows(dataMapped);
        }

    },[data, columns]);


    const handleChange = (_event, value) => {
      setNumberPage(value);
    };
 


const renderTable=()=>{

	const _rows = rows.map((row,index) => (
        <Tr key={'tbody-tr-'+index}>
        {
            thead.map((column)=>(<Td key={'tbody-tr-td-'+column.key}>{row[column.key]}</Td>))
        }
        </Tr>
    ))

    if (_rows.lengh<1) {
        _rows.push(<Tr><Td>No hay informacion</Td></Tr>)
    }

    return _rows;
}
 
 return (
  <Fragment>


        <TableContainer w={'100%'} h={'92%'} borderRadius={6} boxShadow={'0px 0px 10px 5px #E5E5E5'} >
            <Text style={{"padding":"1rem"}}>{title} </Text>

            <div className="table-header">

                <Input placeholder="Busca un texto" onKeyUp={searchChanged} />
                <Pagination count={data.pages} page={numberPage} onChange={handleChange} />

            </div>


            <Table variant='simple'>
                <TableCaption
                    color={'brand.initialBackground'}
                    fontSize={12}
                    fontWeight={'500'}
                  >{title}</TableCaption>
                <Thead>
                    <Tr>
                        {thead.map(column => <Th  onClick={()=>makeOrder(column.key)} key={'thead-tr-'+column.key}>{column.name}</Th>)}
                    </Tr>
                </Thead>
                <tbody>
                	{ renderTable()}
                </tbody>
            </Table>

        </TableContainer>
  </Fragment>
    );

};

export default DataTables;