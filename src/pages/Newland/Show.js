import {  SimpleGrid, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { uploadNewlandFinancialAsync,  getNewlandFinancialAsync, sendNewlandFinancialAsync} from '../../redux/product/actions';
import { useParams} from 'react-router-dom'
import InputFile from '../../components/forms/InputFile';
import { useDispatch} from 'react-redux';
import DataTables from '../../components/Datatable';
import {Show, Confirm} from '../../components/buttons';
import moment from 'moment';
export const NewlandShow = () => {

  const dispatch = useDispatch();

      const columns = (row)=>{


        const send=()=>{
          dispatch(sendNewlandFinancialAsync(row.id));
        }

        return {
          fecha_de_subida :  moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D H:M'),
          status : row.status,
          _: row.status!=='Enviado'?
            (<Confirm  onClick={send} title="Enviar" text="Enviar y prorratear"/>
          ): null,
          opciones:(
            <div>
              <Show route={`/newland/${row.id}/estado-financiero`} />
            </div>
          )

        }
      } 

   const dispatchable=(query)=>{
     return getNewlandFinancialAsync(id,{
       ...query,
     });
  } 


  const {id} = useParams();

  const selectable = (state)=>(state.product.newland.financial);


  
  const changeImage = (e)=>{
    dispatch(uploadNewlandFinancialAsync(id,e.target.files[0]));
  }


    return (
      <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>



            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Subir excel</Heading>
                <br />
                <InputFile accept={[".xls",".xlsx"]} onChange={changeImage}/>


            </Box>


   
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Estados  financieros'
            />
            

  

    </SimpleGrid>

       

    )
}