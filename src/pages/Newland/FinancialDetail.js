import {  SimpleGrid } from '@chakra-ui/react'
import React  from 'react'
import {  getNewlandFinancialDetailAsync} from '../../redux/product/actions';
import { useParams} from 'react-router-dom'
import DataTables from '../../components/Datatable';
import moment from 'moment';
export const NewlandFinancialDetail = () => {


      const columns = (row)=>{
        return {
          fecha :  moment(row?.date || 'Y-m-d').format('YYYY-MM-D H:M'),
          costo_operativo : row.operating_cost,
          costo_proyectado : row.projected,
          ganancia : row.profit,
        }
      } 

   const dispatchable=(query)=>{
     return getNewlandFinancialDetailAsync(id,{
       ...query,
     });
  } 


  const {id} = useParams();

  const selectable = (state)=>(state.product.newland.financialDetail);




    return (
      <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
   
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Estados  financieros'
            />
            


    </SimpleGrid>

       

    )
}