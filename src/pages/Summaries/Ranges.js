import React , {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Stat, Box, StatLabel } from '@chakra-ui/react'
import {summaryApi} from '../../api';
import {colors, colorsBorder} from './colors';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Ranges ({start,end}) {

  const [data, setData] = useState({datasets:[],labels:[]});

  useEffect(()=>{

   (start && end) && summaryApi.ranges(start,end).then(response=>{

      const result =response.data.data;
      let labels = result.map(row=>row.name);
      let amount = result.map(row=>parseInt(row.users))
      setData({
        labels,
        datasets:[{
          data:amount,
          backgroundColor: colors,
          borderColor:colorsBorder,
          borderWidth: 1,         
        }]

      })

    })


  },[start,end]);



  return (
    <Stat>
        <Box  borderWidth='1px' padding="10px" borderRadius="8px">
        <StatLabel>Distribucion de rangos</StatLabel>
            <Pie data={data} />
        </Box>
    </Stat>
    )
}
