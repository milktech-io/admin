import { Stack } from '@chakra-ui/react'
import React from 'react'
import { getReviewsAsync, changeHiddenReviewAsync } from '../../../../redux/product/actions';
import DataTables from '../../../../components/Datatable';
import {Confirm} from '../../../../components/buttons';
import {useDispatch} from 'react-redux';

export const Reviews = ({product_id}) => {

  const dispatch = useDispatch();

  const dispatchable=(query)=>{
    return getReviewsAsync(product_id,{
      ...query,
      select:'id,stars,comment,title',
      with:'censored'
    });
  } 



  const  changeHidden = (id)=>{
    dispatch(changeHiddenReviewAsync(id));
  }

   const selectable = (state)=>(state.product.reviews);

      const columns = (row)=>{
            console.log('rowww',row.censored);

        return {
          stars:row.stars,
          titulo:row.title,
          comentario:row.comment,
          opciones:<div>

          {row.censored?.id ?
            <Confirm text='Mostrar'  onClick={()=>changeHidden(row.id)} />
            :
            <Confirm text='Ocultar' style={{}} onClick={()=>changeHidden(row.id)} />
          }

          </div>
        }
      } 


    return (
        <Stack  style={{ display: "flex", flexDirection: "column" }} bg={"white"}>     
            <DataTables  
              columns={columns}
              dispatchable={dispatchable}
              selectable={selectable}
              title='Gestion de reviews'
            />
          
         
        </Stack>

       

    )
}
 